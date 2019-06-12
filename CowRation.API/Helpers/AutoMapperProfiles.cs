using AutoMapper;
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
            CreateMap<Korm, KormForRation>();
<<<<<<< HEAD
            CreateMap<FeedingCategory, FeedingCategoryForView>();
            CreateMap<LaboratoryIndexFood, LaboratoryForView>();
            CreateMap<Korm, StorageForView>();
=======
>>>>>>> 04e0766fe973038960dda7d38cba919bebcbfea7
        }
    }
}
