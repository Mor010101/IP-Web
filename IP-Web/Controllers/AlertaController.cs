using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AlertaController : ControllerBase
{
    private readonly AlertaService _alertaService;

    public AlertaController(AlertaService alertaService) =>
        _alertaService = alertaService;

    [HttpGet]
    public async Task<List<Alerta>> Get() =>
        await _alertaService.GetAsync();

    [HttpGet("{id}")]
    public async Task<Alerta?> GetById(string id) =>
        await _alertaService.GetByIdAsync(id);

    [HttpPost]
    public async Task Create(AlertaDTO alerta) =>
        await _alertaService.CreateAsync(alerta);

    [HttpPut("{id}")]
    public async Task Update(string id, AlertaDTO alerta) =>
        await _alertaService.UpdateAsync(id, alerta);

    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _alertaService.RemoveAsync(id);

    [HttpGet("/api/Alerta/ForPacient{id}")]
    public async Task<List<Alerta>> GetAllForPacient(string id) =>
    await _alertaService.GetAllForPacientAsync(id);
}
