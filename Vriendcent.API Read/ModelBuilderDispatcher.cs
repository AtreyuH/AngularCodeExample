using System.Threading;
using System.Threading.Tasks;
using Vriendcent.API.Read.Interfaces;
using Vriendcent.CQRS;

namespace Vriendcent.API_Read
{
    public class ModelBuilderDispatcher
    {
        private readonly IModelBuilderFactory modelBuilderFactory;
        public ModelBuilderDispatcher(IModelBuilderFactory modelBuilderFactory)
        {
            this.modelBuilderFactory = modelBuilderFactory;
        }

        public Task<TResult> GetAsync<TQuery, TResult>(TQuery query, CancellationToken cancellationToken = default)
            where TResult : class
            where TQuery : Query
        {
            var modelBuilder = modelBuilderFactory.Resolve<TQuery, TResult>();

            return modelBuilder.GetAsync(query, cancellationToken);
        }
    }
}
