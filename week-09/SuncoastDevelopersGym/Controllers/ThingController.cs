using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using suncoastdevelopersgym;
using suncoastdevelopersgym.Models;

namespace suncoastdevelopersgym.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThingController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ThingController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Thing
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Thing>>> GetThings()
        {
            return await _context.Things.ToListAsync();
        }

        // GET: api/Thing/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Thing>> GetThing(int id)
        {
            var thing = await _context.Things.FindAsync(id);

            if (thing == null)
            {
                return NotFound();
            }

            return thing;
        }

        // PUT: api/Thing/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutThing(int id, Thing thing)
        {
            if (id != thing.Id)
            {
                return BadRequest();
            }

            _context.Entry(thing).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThingExists(id))
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

        // POST: api/Thing
        [HttpPost]
        public async Task<ActionResult<Thing>> PostThing(Thing thing)
        {
            _context.Things.Add(thing);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetThing", new { id = thing.Id }, thing);
        }

        // DELETE: api/Thing/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Thing>> DeleteThing(int id)
        {
            var thing = await _context.Things.FindAsync(id);
            if (thing == null)
            {
                return NotFound();
            }

            _context.Things.Remove(thing);
            await _context.SaveChangesAsync();

            return thing;
        }

        private bool ThingExists(int id)
        {
            return _context.Things.Any(e => e.Id == id);
        }
    }
}
