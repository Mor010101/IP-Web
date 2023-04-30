using IP_Web.DTOs;
using IP_Web.Models;
using IP_Web.Services;
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
    [HttpGet]
    public async Task<List<User>> Get() =>
        await _userService.GetAsync();

    [HttpGet("{id}")]
    public async Task<User?> GetById(string id) =>
        await _userService.GetByIdAsync(id);

    [HttpPost]
    public async Task Create(UserDTO usr) =>
        await _userService.CreateAsync(usr);

    [HttpPut("{id}")]
    public async Task Update(string id, UserDTO user)
    {
        await _userService.UpdateAsync(id, user);
    }

    [HttpDelete("{id}")]
    public async Task Delete(string id) =>
        await _userService.RemoveAsync(id);

    [HttpGet("/api/User/ForAdmin{id}")]
    public async Task<List<UserTableDTO>> GetAllForAdmin(string id) =>
    await _userService.GetAllForAdminAsync(id);

}
