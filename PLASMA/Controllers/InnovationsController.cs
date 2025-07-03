using Microsoft.AspNetCore.Mvc;

namespace PLASMA.Controllers
{
    public class InnovationsController : Controller
    {
        public IActionResult Index()
        {
            ViewData["ActivePage"] = "Innovations";
            return View();
        }
    }
}
