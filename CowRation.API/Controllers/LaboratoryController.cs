using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CowRation.API.Data;
using CowRation.API.Dtos;
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
                    Sv = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "ÑÂ").Value,
                    Sp = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "ÑÏ").Value,
                    Sg = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "ÑÆ").Value,
                    Sk = laboratory.Laboratories.FirstOrDefault(l => l.CatalogIndexFood.Name == "ÑÊ").Value,
                }) ;
            }
            return Ok(laboratoryView);
        }
    }
}