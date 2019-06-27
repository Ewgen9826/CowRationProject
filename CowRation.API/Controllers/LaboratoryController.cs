using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CowRation.API.Data;
using CowRation.API.Dtos;
using CowRation.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CowRation.API.Controllers
{
    [Route("api/laboratory/{userId}")]
    [ApiController]
    public class LaboratoryController : ControllerBase
    {
        private readonly ILaboratoryRepository repository;
        private readonly IMapper mapper;

        public LaboratoryController(ILaboratoryRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetLaboratoryIndicators(int userId)
        {
            var laboratoryIndecators = await repository.GetLaboratoryIndicators(userId);
            var laboratoryView = new List<LaboratoryForView>();
            foreach (var laboratory in laboratoryIndecators)
            {
                laboratoryView.Add(new LaboratoryForView
                {
                    Name = laboratory.Korm.Name,
                    Sv = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "СВ").Value,
                    Sp = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "СП").Value,
                    Sg = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "СЖ").Value,
                    Sk = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "СК").Value,
                }) ;
            }
            return Ok(laboratoryView);
        }

        [HttpPost]
        public async Task<IActionResult> SetLaboratoryIndicators(int userId, List<LaboratoryForView> laboratoryForViews)
        {
            var laboratoryIndicators = new List<LaboratoryIndexFood>();
            foreach (var laboratory in laboratoryForViews)
            {
                var indicator = new LaboratoryIndexFood();
                indicator.Korm = await repository.GetKormByName(laboratory.Name);
                indicator.Laboratories = new List<Laboratory>
                {
                    new Laboratory{ Value=laboratory.Sv, CatalogIndexFoodId=(await repository.GetCatalogIndexByName("СВ")).Id },
                    new Laboratory{ Value=laboratory.Sg, CatalogIndexFoodId=(await repository.GetCatalogIndexByName("СЖ")).Id },
                    new Laboratory{ Value=laboratory.Sk, CatalogIndexFoodId=(await repository.GetCatalogIndexByName("СК")).Id },
                    new Laboratory{ Value=laboratory.Sp, CatalogIndexFoodId=(await repository.GetCatalogIndexByName("СП")).Id }
                };
                laboratoryIndicators.Add(indicator);
            }
            var indicators = await repository.SetLaboratoryIndicators(userId,laboratoryIndicators);
            return Ok(laboratoryForViews);
        }
    }
}