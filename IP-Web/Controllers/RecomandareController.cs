using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecomandareController: ControllerBase
{
    private readonly RecomandareService _recomandareService;

    public RecomandareController(RecomandareService recomandareService) => 
        _recomandareService = recomandareService;

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public async Task<List<Recomandare>> GetAsync()=>
        await _recomandareService.GetAsync();

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("{id}")]
    public async Task<Recomandare?> GetById(string id) =>
       await _recomandareService.GetByIdAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPost]
    public async Task Create(RecomandareDTO rec) =>
        await _recomandareService.CreateAsync(rec);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPut("{id}")]
    public async Task Update(string id, RecomandareDTO recomandare)
    {
        await _recomandareService.UpdateAsync(id, recomandare);
    }

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _recomandareService.RemoveAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("/api/Recomandare/ForPacient{id}")]
    public async Task<List<Recomandare>> GetAllForPacient(string id) =>
    await _recomandareService.GetAllForPacientAsync(id);

}
