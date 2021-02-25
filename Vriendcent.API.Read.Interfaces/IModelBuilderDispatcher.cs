using System.Threading;
using System.Threading.Tasks;
using Vriendcent.CQRS;

namespace Vriendcent.API.Read.Interfaces
{
    public interface IModelBuilderDispatcher
    {
        Task<TResult> GetAsync<TQuery, TResult>(TQuery query, CancellationToken cancellationToken = default)
            where TQuery : Query
            where TResult : class;
    }
}
