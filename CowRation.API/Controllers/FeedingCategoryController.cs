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
    [Route("api/feedingcategory/{userId}")]
    [ApiController]
    public class FeedingCategoryController : ControllerBase
    {
        private readonly IFeedingCategoryRepository repository;
        private readonly IMapper mapper;

        public FeedingCategoryController(IFeedingCategoryRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetFeedingCategory(int userId)
        {
            var feedingCategory = await repository.GetFeedingCategory(userId);
            var feedingCategoryView = mapper.Map<FeedingCategoryForView>(feedingCategory);
            return Ok(feedingCategoryView);
        }

        [HttpPost]
        public async Task<IActionResult> SetFeedingCategory(int userId, FeedingCategory model)
        {
            await repository.SetFeedingCategory(userId, model);
            return Ok();
        }
    }
}