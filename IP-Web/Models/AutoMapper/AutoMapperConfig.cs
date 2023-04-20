using AutoMapper;
using IP_Web.DTOs;

namespace IP_Web.Models.AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile() 
    {
        CreateMap<LimitParamDTO, LimitParam>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
        CreateMap<DateVitaleDTO, DateVitale>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
        CreateMap<AlertaDTO, Alerta>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
        CreateMap<AdminDTO, Admin>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
        CreateMap<RecomandareDTO, Recomandare>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
        CreateMap<UserDTO, User>()
            .ForMember(dest => dest.Id, opt => opt.Ignore());
    }
}
