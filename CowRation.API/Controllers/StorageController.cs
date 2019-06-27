using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CowRation.API.Data;
using CowRation.API.Dtos;
using CowRation.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace CowRation.API.Controllers
{
    [Route("api/storage/{userId}")]
    [ApiController]
    public class StorageController : ControllerBase
    {
        private readonly IStorageRepository repository;
        private readonly IMapper mapper;

        public StorageController(IStorageRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetKorms(int userId)
        {
            var korms = await repository.GetUserStorage(userId);
            var kormsView = new List<StorageForView>();
            foreach (var korm in korms)
            {
                kormsView.Add(new StorageForView
                {
                    Name = korm.Name,
                    FoodValue = korm.KormStorages.FirstOrDefault(k => k.KormId == korm.Id).FoodValue
                });
            }
            return Ok(kormsView);
        }

        [HttpPost]
        public async Task<IActionResult> SetKorms(int userId, List<StorageForView> kormStorages)
        {
            var kormsStorage = await repository.ChangeKormsValue(userId, kormStorages);
            var kormsView = new List<StorageForView>();
            foreach (var korm in kormsStorage)
            {
                kormsView.Add(new StorageForView
                {
                    Name = korm.Name,
                    FoodValue = korm.KormStorages.FirstOrDefault(k => k.KormId == korm.Id).FoodValue
                });
            }
            return Ok(kormsView);
        }
    }
}