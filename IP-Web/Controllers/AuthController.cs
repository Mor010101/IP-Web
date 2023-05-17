using IP_Web.DTOs;
using IP_Web.Helpers;
using IP_Web.Models;
using IP_Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace IP_Web.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly JwtSettings jwtSettings;
    private readonly AuthService authService;
    public AuthController(JwtSettings jwtSettings, AuthService authService)
    {
        this.authService = authService;
        this.jwtSettings = jwtSettings;
    }


    [HttpPost]
    public ActionResult<UserTokens> GetToken(UserLoginDTO userLogin)
    {
         try
         {
             var Token = new UserTokens();
             var user = this.authService.verifyUser(userLogin.Email, userLogin.Password).Result;
             if (user != null)
             {
                 Token = JwtHelpers.GenTokenkey(new UserTokens()
                 {
                     GuidId = Guid.NewGuid(),
                     UserEmail = user.Email,
                     UserId = user.Id,
                 }, jwtSettings);
             }
             else
             {
                 return BadRequest("wrong password");
             }
             return Ok(Token);
         }
         catch (Exception ex)
         {
             throw;
         }
        return null;
    }
}
