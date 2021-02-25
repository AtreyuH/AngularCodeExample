using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vriendcent.API.Filters
{
    public class ExceptionFilter : IAsyncExceptionFilter
    {
        public Task OnExceptionAsync(ExceptionContext context)
        {
            return Task.Run(() =>
            {
                context.ExceptionHandled = true;
                return new ObjectResult(new
                {
                    ErrorMessage = "Internal Server Error",
                    ExceptionMessage = context.Exception.Message
                })
                {
                    StatusCode = 500
                };
            });
        }
    }
}
