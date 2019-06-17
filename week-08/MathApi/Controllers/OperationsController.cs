using MathApi.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace MathApi.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class OperationsController : ControllerBase
  {
    [HttpGet("ping")]
    public ActionResult<string> Ping()
    {
      return "pong";
    }


    [HttpGet("add/{x}/{y}")]
    public ActionResult<MathResult> AddNumbers(int x, int y)
    {
      return new MathResult
      {
        X = x,
        Y = y,
        Result = x + y,
        Operation = "addition"
      };
    }

    [HttpGet("subtract/{x}/{y}")]
    public ActionResult<int> SubtractNumbers(int x, int y)
    {
      return x - y;
    }
  }
}