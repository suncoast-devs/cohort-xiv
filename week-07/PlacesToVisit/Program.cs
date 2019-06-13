using System;
using System.Linq;

namespace PlacesToVisit
{
  class Program
  {
    static void Main(string[] args)
    {
      var input = "";
      var db = new PlacesWeWillGoContext();
      while (input != "quit")
      {

        Console.WriteLine("You want to go ....");
        Console.WriteLine(":=========================:");
        // var places = db.Cities.OrderBy(o => o.Name);
        var places = db.Cities.Where(city => !city.Visited).OrderBy(city => city.Name);
        foreach (var city in places)
        {
          Console.WriteLine($"{city.Name} in  {city.State}, that has a climate of {city.Climate}");
        }
        Console.WriteLine(":=========================:");


        Console.WriteLine("Do you want (add) a city, have you (been) to a city, or (all)?");
        input = Console.ReadLine();
        if (input == "add")
        {
          // expected input is City, State, Climate
          Console.WriteLine("Where would you like to go?");
          input = Console.ReadLine();

          var data = input.Split(',');
          var newPlace = new City
          {
            Name = data[0],
            State = data[1],
            Climate = data[2]
          };
          db.Cities.Add(newPlace);
          db.SaveChanges();
          Console.WriteLine($"Successfully Saved {newPlace.Name}");
        }
        else if (input == "been")
        {
          Console.WriteLine("Where did you go?");
          input = Console.ReadLine();
          // update the city they type it.
          // find it,
          var placeIWent = db.Cities.FirstOrDefault(city => city.Name.ToLower() == input.ToLower());
          if (placeIWent != null)
          {
            // update
            placeIWent.Visited = true;
            // save it
            db.SaveChanges();
          }
          else
          {
            Console.WriteLine($"{input} was not found, but I hope you had a great trip ");
            var surpriseTrip = new City
            {
              Name = input,
              Visited = true
            };
            db.Cities.Add(surpriseTrip);
            db.SaveChanges();
          }
        }
        else if (input == "all")
        {
          var allCities = db.Cities.OrderBy(o => o.Name).ThenBy(t => t.Visited);
          foreach (var city in allCities)
          {
            Console.WriteLine($"{city.Name}, {city.Visited}");

          }
        }



      }


    }
  }
}
