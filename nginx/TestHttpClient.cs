using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using (var client = new HttpClient())
        {
            var response = await client.GetAsync("http://localhost:5004/api/User/ValidateUser");
            Console.WriteLine($"Response: {(int)response.StatusCode} - {response.ReasonPhrase}");
        }
    }
}

