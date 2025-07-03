using Microsoft.AspNetCore.Mvc;

namespace PLASMA.Controllers
{
    public class ImplementationController : Controller
    {
        public IActionResult Index()
        {
            ViewData["ActivePage"] = "Implementation";
            return View();
        }
    }
}
