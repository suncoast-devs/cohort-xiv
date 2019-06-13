using System;
using System.Linq;

namespace PlacesToVisit
{
  class SampleCode
  {
    static void NotMain(string[] args)
    {
      var db = new PlacesWeWillGoContext();


      // CREATE
      //   db.Cities.Add(new City
      //   {
      //     Name = "Tampa",
      //     Climate = "Hoooooot",
      //     Population = 100000,
      //     SizeInSquareMiles = 25,
      //     State = "FL",
      //     Elevation = 0
      //   });
      db.SaveChanges();



      // READ
      var stPete = db.Cities.FirstOrDefault(city => city.Name == "St Pete");

      var cali = db.Cities.Where(city => city.State == "CA");

      foreach (var city in cali)
      {
        Console.WriteLine(city.Name);


      }

      // UPDATE 
      var tampa = db.Cities.FirstOrDefault(city => city.Name == "Tampa");
      tampa.Population = tampa.Population + 300;
      db.SaveChanges();

      // DELETE ONE
      var dupe = db.Cities.FirstOrDefault(city => city.Name == "Tampa");
      if (dupe != null)
      {
        db.Cities.Remove(dupe);
        db.SaveChanges();
      }

      // DELETE MULTIPLE
      var allTampas = db.Cities.Where(city => city.Name == "Tampa");
      db.Cities.RemoveRange(allTampas);
      db.SaveChanges();


    }
  }
}
