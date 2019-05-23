using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Data;
using CowRation.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CowRation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KormsController : ControllerBase
    {
        private readonly IKormReposotory context;

        public KormsController(IKormReposotory context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetKorms()
        {
            var korms = await context.GetKorms();
            return Ok(korms);
        }
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserKorms(int userId)
        {
            var korms = await context.GetUserKorms(userId);
            return Ok(korms);
        }
        [HttpPost("user/{userId}/add")]
        public async Task<IActionResult> AddKormsForUser(int userId, IEnumerable<Korm> korms)
        {
            await context.AddKormsForUser(userId, korms);
            return Ok();
        }

        [HttpPost("user/{userId}/remove")]
        public async Task<IActionResult> RemoveKormsForUser(int userId, IEnumerable<Korm> korms)
        {
            await context.RemoveKormsForUser(userId, korms);
            return Ok();
        }
    }
}
