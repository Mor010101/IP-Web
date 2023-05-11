using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]

public class UserController
{
    private readonly UserService _userService;

    public UserController(UserService userService) =>
        _userService = userService;  //dependency injection

    //defines route type
    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public async Task<List<User>> Get() =>
        await _userService.GetAsync();

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("{id}")]
    public async Task<User?> GetById(string id) =>
        await _userService.GetByIdAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPost]
    public async Task Create(UserDTO usr) =>
        await _userService.CreateAsync(usr);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpPut("{id}")]
    public async Task Update(string id, UserDTO user)
    {
        await _userService.UpdateAsync(id, user);
    }

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _userService.RemoveAsync(id);

    [Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet("/api/User/ForAdmin{id}")]
    public async Task<List<UserTableDTO>> GetAllForAdmin(string id) =>
    await _userService.GetAllForAdminAsync(id);

}
