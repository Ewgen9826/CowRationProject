using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CowRation.API.Data;
using CowRation.API.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CowRation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StorageController : ControllerBase
    {
        private readonly IStorageRepository repository;

        public StorageController(IStorageRepository repository)
        {
            this.repository = repository;
        }
        
        [HttpGet("{id}/korms")]
        public async Task<IActionResult> GetKorms(int id)
        {
            var storage = await repository.GetUserStorage(id);
            var korms = storage.KormStorages
                .Select(k => new KormForStorage
                {
                    StorageId = k.StorageId,
                    KormId=k.KormId,
                    Name = k.Korm.Name,
                    FoodValue = k.FoodValue,
                });
            return Ok(korms);
        }
    }
}