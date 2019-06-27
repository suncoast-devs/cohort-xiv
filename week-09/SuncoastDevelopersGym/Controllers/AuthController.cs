using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using suncoastdevelopersgym;
using SuncoastDevelopersGym.ViewModels;

namespace SuncoastDevelopersGym.Controllers
{
  [ApiController]
  [Route("auth")]
  public class AuthController : ControllerBase
  {

    private DatabaseContext _context;
    public AuthController(DatabaseContext context)
    {
      this._context = context;
    }

    [HttpPost("login")]
    public async Task<ActionResult> LoginIn()
    {
      return Ok();
    }

    [HttpPost("register")]
    public async Task<ActionResult> Register([FromBody] RegisterViewModel registerInformation)
    {
      // check if the user exists
      var exists = await _context.Users.AnyAsync(user => user.UserName == registerInformation.Email);
      // if exists, return an error
      // else create a user
      // hash password
      // return a token so the user can do user things
      return Ok(registerInformation);
    }


  }
}