using System;

namespace ToDoListApi.Models
{
  public class User
  {
    public int Id { get; set; }
    public string AccessToken { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
  }
}