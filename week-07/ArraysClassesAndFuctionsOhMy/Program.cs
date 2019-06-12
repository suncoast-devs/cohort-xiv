using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace ArraysClassesAndFuctionsOhMy
{
  class Program
  {
    static void Main(string[] args)
    {
      var sockYarn = new Yarn();

      sockYarn.Color = "purple";
      sockYarn.FiberType = "acrylic";
      sockYarn.Color = "green";

      var wool = new Yarn();
      wool.Color = "Grey";
      wool.FiberType = "alpaca wool";
      // Console.WriteLine(wool.DatePurchased);
      // Thread.Sleep(3000);
      // Console.WriteLine(wool.DatePurchased);
      // Console.WriteLine(wool);

      // ARRAYS
      var studentCount = 11;

      var names = new string[studentCount];
      studentCount++;

      names[0] = "Bea";

      names = new string[12];

      var students = new List<object>();

      var scores = new List<int>();
      students.Add("Bea");
      students.Add("Joe");
      students.Add("Liv");

      // Console.WriteLine(students[1]);

      var temp = students[0];
      students[0] = students[2];
      students[2] = temp;

      students.Add("Hector");
      students.Add("Amanda");
      students.Add(1001);

      var collection = new List<Yarn>();

      collection.Add(wool);
      collection.Add(sockYarn);

      for (int i = 0; i < collection.Count; i++)
      {

      }



      var yarnTypes = collection.Select(yarn => yarn.FiberType);

      foreach (var item in yarnTypes)
      {
        Console.WriteLine(item);
      }

      var longYarns = collection.Where(yarn => yarn.SkeinLength > 800);


      var totalLength = collection.Aggregate(0m, (total, yarn) => yarn.SkeinLength + total);




      // side bar for parse for try parse

      var numberAsString = "13";
      var numberAsInt = int.Parse(numberAsString);

      var input = Console.ReadLine();
      var wasNumber = int.TryParse(input, out int number);
      if (!wasNumber)
      {
        Console.WriteLine("That wasnt a number, try again....");
      }



    }
  }
}
