using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecomandareController: ControllerBase
{
    private readonly RecomandareService _recomandareService;

    public RecomandareController(RecomandareService recomandareService) => 
        _recomandareService = recomandareService;
    

    [HttpGet]
    public async Task<List<Recomandare>> GetAsync()=>
        await _recomandareService.GetAsync();

    [HttpGet("{id}")]
    public async Task<Recomandare?> GetById(string id) =>
       await _recomandareService.GetByIdAsync(id);

    [HttpPost]
    public async Task Create(RecomandareDTO rec) =>
        await _recomandareService.CreateAsync(rec);

    [HttpPut("{id}")]
    public async Task Update(string id, RecomandareDTO recomandare)
    {
        await _recomandareService.UpdateAsync(id, recomandare);
    }

    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _recomandareService.RemoveAsync(id);
}
