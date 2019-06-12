
using System;

namespace ArraysClassesAndFuctionsOhMy
{
  public class Yarn
  {
    // color
    public string Color { get; set; }

    // private string color;
    // public string Color
    // {
    //   get { return myVar; }
    //   set { myVar = value; }
    // }

    // weight
    public string Weight { get; set; }
    // fibertype
    public string FiberType { get; set; }
    // skein length
    public decimal SkeinLength { get; set; }

    // date purchased  
    private DateTime _datePurchased;
    public DateTime DatePurchased
    {
      get { return DateTime.Now; }
    }

    public override string ToString()
    {
      return $"{this.Color}, {this.DatePurchased.ToShortDateString()}, {this.FiberType}";
    }
  }
}