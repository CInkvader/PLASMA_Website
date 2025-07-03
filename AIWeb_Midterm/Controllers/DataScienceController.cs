using Microsoft.AspNetCore.Mvc;

namespace AIWeb_Midterm.Controllers
{
    public class DataScienceController : Controller
    {
        public IActionResult Index()
        {
            ViewData["ActivePage"] = "DataScience";
            return View();
        }
    }
}
