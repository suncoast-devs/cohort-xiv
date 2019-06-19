using System.Collections.Generic;

namespace ToDoListApi.ViewModels
{
  public class DeleteCompletedResponse
  {

    public int NumberDeleted { get; set; }
    public List<int> Ids { get; set; }
    public bool Success { get; set; } = true;
    public bool ContainsChocolate { get; set; }
  }
}