using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TourCity.Models;

namespace TourCity.Repository
{
    public class TourCityContext : DbContext
    {
        public DbSet<Space> Spaces { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./tourcity.db");
            
        }
    }
}
