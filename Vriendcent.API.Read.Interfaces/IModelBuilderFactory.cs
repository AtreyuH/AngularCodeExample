using Vriendcent.CQRS;

namespace Vriendcent.API.Read.Interfaces
{
    public interface IModelBuilderFactory
    {
        IModelBuilder<TQuery, TResult> Resolve<TQuery, TResult>()
            where TQuery : Query
            where TResult : class;
    }
}
