using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LimitParamController:ControllerBase
{
    private readonly LimitParamService _limitParamService;

    public LimitParamController(LimitParamService limitParamService) =>
        _limitParamService = limitParamService;  //dependency injection

    [HttpGet]
    public async Task<List<LimitParam>> Get() =>
        await _limitParamService.GetAsync();
}
