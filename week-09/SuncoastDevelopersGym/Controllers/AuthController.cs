using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using suncoastdevelopersgym;
using SuncoastDevelopersGym.Models;
using SuncoastDevelopersGym.Service;
using SuncoastDevelopersGym.ViewModels;

namespace SuncoastDevelopersGym.Controllers
{
  [ApiController]
  [Route("auth")]
  public class AuthController : ControllerBase
  {

    private DatabaseContext _context;
    private IAuthService _auth;
    public AuthController(DatabaseContext context, IAuthService authService)
    {
      this._context = context;
      this._auth = authService;
    }

    [HttpPost("login")]
    public async Task<ActionResult> LoginIn([FromBody] RegisterViewModel loginInfo)
    {
      // does the user exists
      var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == loginInfo.Email);
      if (user == null)
      {
        return Unauthorized();
      }
      else
      {
        // validate the password
        if (this._auth.VerifyPassword(user, loginInfo.Password))
        {
          // create a new token
          var rv = this._auth.CreateAuthData(user);
          return Ok(rv);
        }
        else
        {
          return Unauthorized();
        }
      }
    }

    [HttpPost("register")]
    public async Task<ActionResult> Register([FromBody] RegisterViewModel registerInformation)
    {
      // check if the user exists
      var exists = await _context.Users.AnyAsync(u => u.UserName == registerInformation.Email);
      // if exists, return an error
      if (exists)
      {
        return BadRequest(new { message = "user with the email already exists" });
      }
      // else create a user
      var user = new User
      {
        UserName = registerInformation.Email,
        Email = registerInformation.Email,
        FullName = registerInformation.FullName,
      };
      // hash password
      var hashed = this._auth.HashPassword(user, registerInformation.Password);
      user.PasswordHash = hashed;
      _context.Users.Add(user);
      await _context.SaveChangesAsync();
      // return a token so the user can do user things
      var rv = this._auth.CreateAuthData(user);
      return Ok(rv);
    }


  }
}