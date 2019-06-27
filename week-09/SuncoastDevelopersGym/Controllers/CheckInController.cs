using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using suncoastdevelopersgym;
using SuncoastDevelopersGym.Models;

namespace SuncoastDevelopersGym.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CheckInController : ControllerBase
  {
    private DatabaseContext _context;

    public CheckInController(DatabaseContext context)
    {
      this._context = context;
    }
    [HttpPost("{memberId}")]
    public async Task<ActionResult> CheckInMember([FromRoute]int memberId)
    {
      // see if the member exists
      var exists = await _context.Members.AnyAsync(member => member.Id == memberId);
      if (!exists)
      {
        return NotFound();
      }
      else
      {
        var checkIn = new MemberCheckIn { MemberId = memberId };
        await _context.MemberCheckIns.AddAsync(checkIn);
        await _context.SaveChangesAsync();
        return Ok();
      }
    }
  }
}