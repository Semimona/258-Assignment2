using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult festival(int pageIndex = 1)
        {
            using (WebApplication1.Data.Model1 db = new WebApplication1.Data.Model1())
            {
                var query = db.Festival.AsQueryable();
                var keyword = Request.QueryString["keyword"];
                var sort = Request.QueryString["sort"];
                if (keyword != null)
                {
                    query = query.Where(x => x.Title.Contains(keyword));
                }
                query = query.OrderBy(x => x.Id);
                if (sort != null)
                {
                    if (sort == "desc")
                    {
                        query = query.OrderByDescending(x => x.Id);
                    }
                    else if (sort == "asc")
                    {
                        query = query.OrderBy(x => x.Id);
                    }
                    
                }
                
                Pager pager = new Pager();
                pager.TotalCount = query.Count();
                pager.PageCount = (pager.TotalCount + pager.PageSize - 1) / pager.PageSize;
                pager.PageIndex = pageIndex;

                query = query.Skip((pageIndex - 1) * pager.PageSize).Take(pager.PageSize);
                ViewBag.pager = pager;
                return View(query.ToList());
            }
        }

        public ActionResult literature()
        {
            return View();
        }
        public ActionResult museum()
        {
            return View();
        }
        public ActionResult places()
        {
            return View();
        }
        public ActionResult Han()
        {
            return View();
        }
        

    }
    public class Pager
    {
        public int PageCount { get; set; }
        public int PageIndex { get; set; }
        public int TotalCount { get; set; }
        public int PageSize { get; set; } = 6;
        public int NextPage
        {
            get
            {
                var n = PageIndex + 1;
                return n <= PageCount ? n : PageCount;
            }
        }
        public int PrePage
        {
            get
            {
                var n = PageIndex - 1;
                return n <= 1 ? 1 : n;
            }
        }
    }
}