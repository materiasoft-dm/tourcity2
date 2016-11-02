using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TourCity.Common.Entities;
using TourCity.Repository;
using TourCity.Repository.Repositories;

namespace Angular2Mvc5Application1.Controllers
{
    public class SpaceController : ApiController
    {
        // GET: api/Space
        public IEnumerable<Space> Get()
        {
            List<Space> space = new List<Space>();
            using (var db = new TourCityDbContext())
            {
                var repo = new SpaceRepository(db);
                space = repo.Retrieve();

            }
            return space ?? new List<Space>();
        }

        // GET: api/Space/5
        public Space Get(int id)
        {
            Space space = null;
            using (var db = new TourCityDbContext())
            {
                var repo = new SpaceRepository(db);
                space = repo.Retrieve(id);

                if(space == null)
                {
                    repo.Create(new Space
                    {
                        Title = "test title",
                        Description = "test welcome"
                    });
                    repo.SaveChanges();
                }
                
            }
            return space ?? new Space();
        }

        // POST: api/Space
        public void Post([FromBody]Space value)
        {
            using (var db = new TourCityDbContext())
            {
                var repo = new SpaceRepository(db);
                repo.Create(value);

            }
        }

        // PUT: api/Space/5
        public void Put(int id, [FromBody]Space space)
        {
            using (var db = new TourCityDbContext())
            {
                var repo = new SpaceRepository(db);
                repo.Update(id, space);
                repo.SaveChanges();
            }
        }

        // DELETE: api/Space/5
        public void Delete(int id)
        {
            using (var db = new TourCityDbContext())
            {
                var repo = new SpaceRepository(db);
                repo.Delete(id);

            }
        }
    }
}
