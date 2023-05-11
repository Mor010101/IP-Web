using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly AdminService _adminService;

    public AdminController(AdminService adminService) =>
        _adminService = adminService;

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public async Task<List<Admin>> Get() =>
        await _adminService.GetAsync();

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("{id}")]
    public async Task<Admin?> GetById(string id) =>
        await _adminService.GetByIdAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPost]
    public async Task Create(AdminDTO admin) =>
        await _adminService.CreateAsync(admin);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPut("{id}")]
    public async Task Update(string id, AdminDTO admin) =>
        await _adminService.UpdateAsync(id, admin);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _adminService.RemoveAsync(id);
}