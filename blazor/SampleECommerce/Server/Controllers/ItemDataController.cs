using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SampleECommerce.Shared;

namespace SampleECommerce.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemDataController : ControllerBase
    {
        private static readonly string[] Title = new[]
        {
            "The Coolers", "My Swag", "Not Today", "Bleh Bleh", "Shy Mango", "Crazy Rabbit", "Gold Digger", "Grey Heart", "Dusty Iron", "Creative Crow"
        };

        private static readonly string[] TitleDescription = new[]
        {
            "An apparel for regular use", "You will miss it, if you don't use it.", "You should definitely try this.", "An useful guide", "Treat yourself to this wonderful happening."
        };

        private static readonly string[] Category = new[]
        {
            "Daily Use", "Something Special", "Gift Item"
        };

        private static readonly string[] ImageUrl = new[]
        {
            "charles-deluvio-sWiqbPItyg8-unsplash.jpg", "clark-street-mercantile-P3pI6xzovu0-unsplash.jpg", "marcus-loke-xXJ6utyoSw0-unsplash.jpg", "markus-winkler-PQmXUxmfR44-unsplash.jpg", "parker-burchfield-tvG4WvjgsEY-unsplash.jpg", "stil-D4jRahaUaIc-unsplash.jpg"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private int _dataLength;

        public ItemDataController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            _dataLength = new Random(10).Next(15,35);
        }

        [HttpGet]
        public IEnumerable<ItemData> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, _dataLength).Select(index => new ItemData
            {
                Id = index,
                ImageDescription = TitleDescription[rng.Next(TitleDescription.Length)],
                ImageTitle = Title[rng.Next(Title.Length)],
                Category = Category[rng.Next(Category.Length)],
                ImageUrl = "stock_images/" + ImageUrl[rng.Next(ImageUrl.Length)]
            })
            .ToArray();
        }
    }
}
