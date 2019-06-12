using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
<<<<<<< HEAD
using AutoMapper;
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
using CowRation.API.Data;
using CowRation.API.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CowRation.API.Controllers
{
<<<<<<< HEAD
    [Route("api/storage/{userId}")]
=======
    [Route("api/[controller]")]
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
    [ApiController]
    public class StorageController : ControllerBase
    {
        private readonly IStorageRepository repository;
<<<<<<< HEAD
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
                    Name=korm.Name,
                    FoodValue=korm.KormStorages.FirstOrDefault(k=>k.KormId==korm.Id).FoodValue
                });
            }
            return Ok(kormsView);
=======

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
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
        }
    }
}