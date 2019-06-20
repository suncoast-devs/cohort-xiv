using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using todolistapi;
using ToDoListApi.Models;
using ToDoListApi.ViewModels;

namespace ToDoListApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ItemsController : ControllerBase
  {

    private DatabaseContext db;

    public ItemsController()
    {
      this.db = new DatabaseContext();
    }

    [HttpGet]
    public ActionResult<List<ToDoItem>> Get()
    {
      // get all of our tolist items
      var rv = db.ToDoItems;
      return rv.ToList();
    }

    [HttpPost]
    public ActionResult<ToDoItem> Post([FromBody]ToDoItem somethingGoofy, [FromQuery]string access_token)
    {
      if (String.IsNullOrWhiteSpace(access_token))
      {
        return Unauthorized();
      }

      // get the user that has teh access token
      var user = db.Users.FirstOrDefault(u => u.AccessToken == access_token);
      if (user == null)
      {
        // if the user doesnt exist, make it
        user = new User
        {
          AccessToken = access_token
        };
        db.Users.Add(user);
        db.SaveChanges();
      }
      // set the the item.UserId = user.id
      somethingGoofy.UserId = user.Id;
      db.ToDoItems.Add(somethingGoofy);
      db.SaveChanges();
      return somethingGoofy;
    }

    [HttpGet("{id}")]
    public ActionResult<ToDoItem> GetOneItem(int id)
    {
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


    [HttpPut("{id}")]
    public ActionResult<ToDoItem> UpdateItem([FromRoute]int id, [FromBody]ToDoItem item)
    {
      // i need to update the item text, complete, and updated at
      var elephants = db.ToDoItems.FirstOrDefault(f => f.Id == id);
      elephants.Text = item.Text;
      elephants.Complete = item.Complete;
      elephants.Updated_At = DateTime.Now;
      db.SaveChanges();
      return elephants;
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteItem(int id)
    {


      // try
      // {
      //   var item = db.ToDoItems.SingleOrDefault(s => s.Id == id);
      //   db.ToDoItems.Remove(item);
      //   db.SaveChanges();
      //   return Ok();
      // }
      // catch (System.ArgumentNullException ex)
      // {
      //   return NotFound();
      // }


      var item = db.ToDoItems.FirstOrDefault(f => f.Id == id);
      if (item == null)
      {
        return NotFound();
      }
      else
      {
        db.ToDoItems.Remove(item);
        db.SaveChanges();
        return Ok();
      }
    }

    [HttpDelete("completed")]
    public ActionResult<DeleteCompletedResponse> DeleteAllCompletedItems()
    {
      var rv = new DeleteCompletedResponse();
      var itemsToDelete = db.ToDoItems.Where(item => item.Complete);

      rv.NumberDeleted = itemsToDelete.Count();
      rv.Ids = itemsToDelete.Select(s => s.Id).ToList();
      rv.ContainsChocolate = itemsToDelete.Any(item => item.Text.ToLower().Contains("chocolate"));

      db.ToDoItems.RemoveRange(itemsToDelete);
      db.SaveChanges();
      return rv;
    }

  }
}