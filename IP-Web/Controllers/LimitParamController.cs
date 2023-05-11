using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LimitParamController : ControllerBase
{
    private readonly LimitParamService _limitParamService;

    public LimitParamController(LimitParamService limitParamService) =>
        _limitParamService = limitParamService;  //dependency injection

    //defines route type
    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public async Task<List<LimitParam>> Get() =>
        await _limitParamService.GetAsync();

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("{id}")]
    public async Task<LimitParam?> GetById(string id) =>
        await _limitParamService.GetByIdAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPost]
    public async Task Create(LimitParamDTO param) =>
        await _limitParamService.CreateAsync(param);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPut("{id}")]
    public async Task Update(string id, LimitParamDTO limitParam)
    {
        await _limitParamService.UpdateAsync(id, limitParam);
    }

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _limitParamService.RemoveAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("/api/LimitParam/ForAlerta{id}")]
    public async Task<List<LimitParam>> GetAllForAlerta(string id) =>
        await _limitParamService.GetAllForAlertaAsync(id);
        
}
