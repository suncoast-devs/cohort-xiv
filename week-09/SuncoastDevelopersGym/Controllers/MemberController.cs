using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuncoastDevelopersGym.Models;
using suncoastdevelopersgym;


// generated with the command 
// dotnet aspnet-codegenerator controller -name MemberController -api -m Member -dc DatabaseContext -outDir Controllers
namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MemberController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public MemberController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Member
    [HttpGet]
    public async Task<ActionResult<List<Member>>> GetMembers()
    {
      return await _context.Members.ToListAsync();
    }

    // GET: api/Member/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Member>> GetMember(int id)
    {
      var member = await _context.Members.FindAsync(id);

      if (member == null)
      {
        return NotFound();
      }

      return member;
    }

    // PUT: api/Member/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutMember(int id, Member member)
    {
      if (id != member.Id)
      {
        return BadRequest();
      }

      _context.Entry(member).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!MemberExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Member
    [HttpPost]
    public async Task<ActionResult<Member>> PostMember(Member member)
    {
      _context.Members.Add(member);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetMember", new { id = member.Id }, member);
    }

    // DELETE: api/Member/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Member>> DeleteMember(int id)
    {
      var member = await _context.Members.FindAsync(id);
      if (member == null)
      {
        return NotFound();
      }

      _context.Members.Remove(member);
      await _context.SaveChangesAsync();

      return member;
    }

    private bool MemberExists(int id)
    {
      return _context.Members.Any(e => e.Id == id);
    }
  }
}
