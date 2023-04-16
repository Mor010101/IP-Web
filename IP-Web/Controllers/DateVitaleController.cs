using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DateVitaleController : ControllerBase
{
    private readonly DateVitaleService _dateVitaleService;

    public DateVitaleController(DateVitaleService dateVitaleService) =>
        _dateVitaleService = dateVitaleService;

    [HttpGet]
    public async Task<List<DateVitale>> Get() =>
        await _dateVitaleService.GetAsync();

    [HttpGet("{id}")]
    public async Task<DateVitale?> GetById(string id) =>
        await _dateVitaleService.GetByIdAsync(id);

    [HttpPost]
    public async Task Create(DateVitaleDTO dateVitale) =>
        await _dateVitaleService.CreateAsync(dateVitale);

    [HttpPut("{id}")]
    public async Task Update(string id, DateVitaleDTO dateVitale) =>
        await _dateVitaleService.UpdateAsync(id, dateVitale);

    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _dateVitaleService.RemoveAsync(id);
}
