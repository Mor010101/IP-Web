using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DateVitaleController : ControllerBase
{
    private readonly DateVitaleService _dateVitaleService;

    public DateVitaleController(DateVitaleService dateVitaleService) =>
        _dateVitaleService = dateVitaleService;

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public async Task<List<DateVitale>> Get() =>
        await _dateVitaleService.GetAsync();

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("{id}")]
    public async Task<DateVitale?> GetById(string id) =>
        await _dateVitaleService.GetByIdAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPost]
    public async Task Create(DateVitaleDTO dateVitale) =>
        await _dateVitaleService.CreateAsync(dateVitale);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPut("{id}")]
    public async Task Update(string id, DateVitaleDTO dateVitale) =>
        await _dateVitaleService.UpdateAsync(id, dateVitale);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _dateVitaleService.RemoveAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("/api/DateVitale/ForPacient{id}")]
    public async Task<List<DateVitale>> GetAllForPacient(string id) =>
    await _dateVitaleService.GetAllForPacientAsync(id);

}
