using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CowRation.API.Data;
using CowRation.API.Dtos;
using CowRation.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CowRation.API.Controllers {
  [Route ("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase {
    private readonly IAuthRepository repository;
    private readonly IConfiguration config;

    public AuthController (IAuthRepository repository, IConfiguration config) {
      this.repository = repository;
      this.config = config;
    }

    [HttpPost ("register")]
    public async Task<IActionResult> Register (UserForRegisterDto userForRegisterDto) {
      userForRegisterDto.UserName = userForRegisterDto.UserName.ToLower ();
      if (await repository.UserExists (userForRegisterDto.UserName))
        return BadRequest ("User Name alrady exists");

      var userToCreate = new User {
        UserName = userForRegisterDto.UserName,
        LastName = userForRegisterDto.LastName,
        FirstName = userForRegisterDto.FirstName
      };

      var createdUser = await repository.Register (userToCreate, userForRegisterDto.Password);

      return StatusCode (201);
    }

    [HttpPost ("login")]
    public async Task<IActionResult> Login (UserForLoginDto userForLoginDto) {
      var userFromRepo = await repository.Login (userForLoginDto.UserName.ToLower (), userForLoginDto.Password);

      if (userFromRepo == null)
        return Unauthorized ();

      var claims = new [] {
        new Claim (ClaimTypes.NameIdentifier, userFromRepo.Id.ToString ()),
        new Claim (ClaimTypes.Name, userFromRepo.UserName)
      };

      var key = new SymmetricSecurityKey (Encoding.UTF8
        .GetBytes (config.GetSection ("AppSettings:Token").Value));
      var creds = new SigningCredentials (key, SecurityAlgorithms.HmacSha512Signature);

      var tokenDescriptor = new SecurityTokenDescriptor {
        Subject = new ClaimsIdentity (claims),
        Expires = DateTime.Now.AddDays (1),
        SigningCredentials = creds
      };

      var tokenHandler = new JwtSecurityTokenHandler ();

      var token = tokenHandler.CreateToken (tokenDescriptor);

      return Ok (new {
        token = tokenHandler.WriteToken (token)
      });
    }
  }
}