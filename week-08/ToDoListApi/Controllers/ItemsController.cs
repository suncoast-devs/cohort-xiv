using Microsoft.AspNetCore.Mvc;
using todolistapi;
using ToDoListApi.Models;

namespace ToDoListApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ItemsController : ControllerBase
  {

    [HttpPost]
    public ActionResult<ToDoItem> Post([FromBody]ToDoItem somethingGoofy)
    {
      // 
      var db = new DatabaseContext();
      db.ToDoItems.Add(somethingGoofy);
      db.SaveChanges();
      return somethingGoofy;

    }

  }
}