using System;

namespace ToDoListApi.Models
{
  public class ToDoItem
  {
    public int Id { get; set; }
    public string Text { get; set; }
    public DateTime Created_At { get; set; } = DateTime.Now;
    public DateTime Updated_At { get; set; } = DateTime.Now;
    public bool Complete { get; set; } = false;

    public int? UserId { get; set; }
    public User User { get; set; }
  }
}