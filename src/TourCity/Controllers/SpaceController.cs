using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TourCity.Repository;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TourCity.Controllers
{
    public class SpaceController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {

            using (var x = new TourCityContext())
            {
                x.Spaces.Add(new Models.Space { Title = "sample title", Description = "sample description" });
                x.SaveChanges();
            }

                return View();
        }
    }
}
