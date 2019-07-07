using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CowRation.API.Data;
using CowRation.API.Dtos;
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
        private readonly IMapper mapper;

        public KormsController(IKormReposotory context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetKorms()
        {
            var korms = await context.GetKorms();
            var kormsToReturn = mapper.Map<IEnumerable<KormForRation>>(korms);
            return Ok(kormsToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> AddKorms(KormForManagment kormModel)
        {
            var characterizations = new List<CharacterizationIndexFood>();
            foreach (var characteristicIndex in kormModel.CharacterizationIndexFoods)
            {
                var catalogIndex = await context.GetCatalogIndexByName(characteristicIndex.NameIndex);
                characterizations.Add(new CharacterizationIndexFood
                {
                    CatalogIndexFoodId=catalogIndex.Id,
                    Value=characteristicIndex.Value,
                    
                });
            }
            var korm = new Korm { Name = kormModel.Name, Price = kormModel.Price, CharacterizationIndexFoods=characterizations };
            context.AddKorm(korm);
            return Ok();
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserKorms(int userId)
        {
            var korms = await context.GetUserKorms(userId);
            var kormsToReturn = mapper.Map<IEnumerable<KormForRation>>(korms);
            return Ok(kormsToReturn);
        }

        [HttpPost("user/{userId}/change")]
        public async Task<IActionResult> AddKormsForUser(int userId, IEnumerable<Korm> korms)
        {
            var userKorms = await context.ChangeKormsForUser(userId, korms);
            var kormsToReturn = mapper.Map<IEnumerable<KormForRation>>(userKorms);
            return Ok(kormsToReturn);
        }
    }
}
