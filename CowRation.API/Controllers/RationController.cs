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
    [Route("api/ration/{userId}")]
    [ApiController]
    public class RationController : ControllerBase
    {
        private readonly IRationRepository repository;
        private readonly IMapper mapper;

        public RationController(IRationRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetRationsForUser(int userId)
        {
            var rations = await repository.GetRations(userId);
            var rationsView = MapperForRation(rations);
            return Ok(rationsView);
        }

        [HttpGet("calculate")]
        public async Task<IActionResult> CalculateRation(int userId)
        {
            var rations = await repository.CalcRations(userId);
            var rationsView = MapperForRation(rations);
            return Ok(rationsView);
        }

        private List<RationForView> MapperForRation(List<Ration> rations)
        {
            var rationsView = new List<RationForView>();
            if (rations == null) return rationsView;
            foreach (var ration in rations)
            {
                rationsView.Add(new RationForView
                {
                    KormName = ration.Korm.Name,
                    Value = ration.Value
                });
            }
            return rationsView;
        }
    }
}