using System.Threading;
using System.Threading.Tasks;
using Vriendcent.CQRS;

namespace Vriendcent.API.Read.Interfaces
{
    public interface IModelBuilder<TQuery, TResult>
         where TQuery : Query
         where TResult : class
    {
        Task<TResult> GetAsync(TQuery query, CancellationToken cancellationToken = default);
    }
}
