using System;

namespace HelloWorld
{


  class Dog
  {
    public string Name { get; set; }
    public int Age { get; set; }
    public DateTime AdoptionDay { get; set; }

    private DateTime Birthday { get; set; }


    void CheckBirthday()
    {
      if (DateTime.Now.Day == this.Birthday.Day)
      {
        this.Age++;
      }
    }

  }



  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World, Welcome to .NET !");

      // variables
      // const degrees = 98; 
      const int degrees = 98;
      float tomorrowDegrees = degrees + 10;


      string name = "Will";
      var person = new { name = "Will", favoriteColor = "purple" };
      char hugs = 'o';


      var counter = 0;
      // output
      Console.WriteLine($"Hello {person.name}");
      // input data
      var input = Console.ReadLine();

      // if
      if (input == "Dawn")
      {
        Console.WriteLine("Dawn you rock!");
      }
      else
      {
        Console.WriteLine($"Your name is {input}");
      }

      // loops
      var favoriteNumber = 42;
      // for/while
      for (int i = 0; i < favoriteNumber; i++)
      {
        Console.WriteLine($"i:{i}");
      }

      while (counter < 10)
      {
        Console.WriteLine(counter);
        counter++;
      }
      // objects
      var rambo = new Dog();
      rambo.Name = "Rambo";
      rambo.AdoptionDay = new DateTime(2018, 12, 30);

      Console.WriteLine($"{rambo.Name} was adopted on {rambo.AdoptionDay}");

      // arrays
      // map
      // filter
      // reduce

      // higher order functions
      // switch
    }
  }
}
