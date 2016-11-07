using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2Mvc5Application1.Controllers
{
    public class SpaceCategoryController : ApiController
    {
        // GET: api/SpaceCategory
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/SpaceCategory/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SpaceCategory
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/SpaceCategory/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SpaceCategory/5
        public void Delete(int id)
        {
        }
    }
}
