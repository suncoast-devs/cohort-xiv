using System;
using System.Collections.Generic;

namespace ToDoListApi.Models
{
  public class User
  {
    public int Id { get; set; }
    public string AccessToken { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public List<ToDoItem> ToDoItems { get; set; } = new List<ToDoItem>();
  }
}