using Microsoft.AspNet.Mvc;


namespace WebApplication1.Controllers
{
    public class PartialController : Controller
    {
        // GET: /<controller>/
        public IActionResult Message()
        {
            return PartialView();
        }

        // GET: /<controller>/
        public IActionResult Numbers()
        {
            return PartialView();
        }
    }
}