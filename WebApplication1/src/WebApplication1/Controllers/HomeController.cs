using Microsoft.AspNet.Mvc;


namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}