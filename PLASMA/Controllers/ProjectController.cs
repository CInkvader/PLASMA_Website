using Microsoft.AspNetCore.Mvc;

namespace PLASMA.Controllers
{
    public class ProjectController : Controller
    {
        public IActionResult Index()
        {
            ViewData["ActivePage"] = "Project";
            return View();
        }
    }
}
