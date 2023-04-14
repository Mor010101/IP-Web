using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController
{
    private readonly TestService _testService;

    public TestController(TestService testService) =>
        _testService = testService;
    

    [HttpGet]
    public async Task<List<Test>> GetAsync() => 
        await _testService.GetAsync();
}
