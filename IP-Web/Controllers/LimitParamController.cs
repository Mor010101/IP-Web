using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
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
    [HttpGet]
    public async Task<List<LimitParam>> Get() =>
        await _limitParamService.GetAsync();

    [HttpGet("{id}")]
    public async Task<LimitParam?> GetById(string id) =>
        await _limitParamService.GetByIdAsync(id);

    [HttpPost]
    public async Task Create(LimitParamDTO param) =>
        await _limitParamService.CreateAsync(param);

    [HttpPut("{id}")]
    public async Task Update(string id, LimitParamDTO limitParam)
    {
        await _limitParamService.UpdateAsync(id, limitParam);
    }

    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _limitParamService.RemoveAsync(id);
}
