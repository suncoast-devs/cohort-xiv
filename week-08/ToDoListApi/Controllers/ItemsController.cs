using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using todolistapi;
using ToDoListApi.Models;

namespace ToDoListApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ItemsController : ControllerBase
  {

    [HttpGet]
    public ActionResult<List<ToDoItem>> Get()
    {
      // get all of our tolist items
      var db = new DatabaseContext();
      var rv = db.ToDoItems;
      return rv.ToList();
    }

    [HttpPost]
    public ActionResult<ToDoItem> Post([FromBody]ToDoItem somethingGoofy)
    {
      var db = new DatabaseContext();
      db.ToDoItems.Add(somethingGoofy);
      db.SaveChanges();
      return somethingGoofy;
    }

    [HttpGet("{id}")]
    public ActionResult<ToDoItem> GetOneItem(int id)
    {
      var db = new DatabaseContext();

      // where 
      var where = db.ToDoItems.Where(item => item.Id == id);
      // find
      var find = db.ToDoItems.Find(id);
      // first
      var first = db.ToDoItems.First(item => item.Id == id);
      // first of default
      var firstOrDefault = db.ToDoItems.FirstOrDefault(item => item.Id == id);
      // single
      var single = db.ToDoItems.Single(item => item.Id == id);
      // single of default
      var SingleOrDefault = db.ToDoItems.SingleOrDefault(item => item.Id == id);

      return firstOrDefault;

    }

  }
}