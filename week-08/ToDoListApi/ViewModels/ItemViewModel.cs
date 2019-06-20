using System;

namespace ToDoListApi.ViewModels
{
  public class ItemViewModel
  {
    public int Id { get; set; }
    public string Text { get; set; }
    public DateTime Create_At { get; set; }
    public DateTime Updated_At { get; set; }
    public int? UserId { get; set; }
  }
}