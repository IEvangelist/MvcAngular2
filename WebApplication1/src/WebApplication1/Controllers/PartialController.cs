using Microsoft.AspNet.Mvc;


namespace WebApplication1.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult Message() => PartialView();
        
        public IActionResult Numbers() => PartialView();
    }
}