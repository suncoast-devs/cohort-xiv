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

  }
}