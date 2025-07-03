using Microsoft.AspNetCore.Mvc;

namespace AIWeb_Midterm.Controllers
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
