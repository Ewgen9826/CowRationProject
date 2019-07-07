using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using CowRation.API.Data;
using CowRation.API.Dtos;
using CowRation.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CowRation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository repository;
        private readonly IConfiguration config;
        private readonly IMapper mapper;

        public AuthController(IAuthRepository repository, IConfiguration config, IMapper mapper)
        {
            this.repository = repository;
            this.config = config;
            this.mapper = mapper;
        }

        [HttpGet("users")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await repository.GetAllUsers();
            var usersDto = mapper.Map<List<UserManagmentDto>>(users);
            return Ok(usersDto);
        }

        [HttpPost("remove/{userId}")]
        public async Task<IActionResult> RemoveUser(int userId)
        {
            var removeUserId = await repository.RemoveUser(userId);
            if (removeUserId == null) return BadRequest("User is missing");
            return Ok(removeUserId);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Login = userForRegisterDto.Login.ToLower();
            if (await repository.UserExists(userForRegisterDto.Login))
                return BadRequest("User Name alrady exists");

            var userToCreate = new User
            {
                UserName = userForRegisterDto.Login,
                CompanyName=userForRegisterDto.CompanyName,
                Email=userForRegisterDto.Email,
                Role = Role.User
            };

            var createdUser = await repository.Register(userToCreate, userForRegisterDto.Password);

            return Ok(createdUser);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
            var userFromRepo = await repository.Login(userForLoginDto.UserName.ToLower(), userForLoginDto.Password);

            if (userFromRepo == null)
                return Unauthorized();

            var claims = new[] {
        new Claim (ClaimTypes.NameIdentifier, userFromRepo.Id.ToString ()),
        new Claim (ClaimTypes.Name, userFromRepo.UserName),
        new Claim(ClaimTypes.Role, userFromRepo.Role)
      };

            var key = new SymmetricSecurityKey(Encoding.UTF8
              .GetBytes(config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }

        [HttpGet("cowcount/{userid}")]
        public async Task<IActionResult> GetCowCount(int userId)
        {
            var cowCountNew = await repository.GetCowCount(userId);
            return Ok(cowCountNew);
        }

        [HttpPost("cowcount/{userid}")]
        public async Task<IActionResult> SetCowCount(int userId, CowModel cow)
        {
            var cowCountNew = await repository.SetCowCount(userId, cow.CowCount);
            return Ok(cowCountNew);
        }
    }
}