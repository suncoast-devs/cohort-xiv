using System.Collections.Generic;
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
  public class SearchController : ControllerBase
  {


    private DatabaseContext _context;

    public SearchController(DatabaseContext context)
    {
      this._context = context;
    }

    [HttpGet("members")]
    public async Task<List<Member>> SearchMembers([FromQuery]string searchTerm)
    {
      var results = _context
      .Members
      .Where(w => w.FirstName.ToLower().Contains(searchTerm.ToLower()) ||
                  w.LastName.ToLower().Contains(searchTerm.ToLower()));
      return await results.ToListAsync();


    }
  }
}