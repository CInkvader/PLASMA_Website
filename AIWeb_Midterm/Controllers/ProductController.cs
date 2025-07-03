using Microsoft.AspNetCore.Mvc;

namespace AIWeb_Midterm.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            ViewData["ActivePage"] = "Product";
            return View();
        }
    }
}
