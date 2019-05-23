﻿using AutoMapper;
using CowRation.API.Dtos;
using CowRation.API.Models;

namespace CowRation.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailDto>();
        }
    }
}