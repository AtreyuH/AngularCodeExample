using System.Threading.Tasks;
using Vriendcent.API.Read.Interfaces;
using Vriendcent.CQRS;

namespace Vriendcent.API.Controllers.Base
{
    public class ReadControllerBase : ApiController
    {
        private readonly IModelBuilderDispatcher _modelBuilderDispatcher;
        public ReadControllerBase(IModelBuilderDispatcher modelBuilderDispatcher)
        {
            _modelBuilderDispatcher = modelBuilderDispatcher;
        }

        protected async Task<TResult> Dispatch<TQuery, TResult>(TQuery query)
            where TQuery : Query
            where TResult : class
        {
            return await _modelBuilderDispatcher.GetAsync<TQuery, TResult>(query);
        }
    }
}
