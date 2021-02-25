using Autofac;
using Vriendcent.API.Read.Interfaces;
using Vriendcent.CQRS;

namespace Vriendcent.API_Read
{
    internal class ModelBuilderFactory
    {
        private readonly ILifetimeScope lifetimeScope;

        public ModelBuilderFactory(ILifetimeScope lifetimeScope)
        {
            this.lifetimeScope = lifetimeScope;
        }

        public IModelBuilder<TQuery, TResult> Resolve<TQuery, TResult>()
            where TQuery : Query
            where TResult : class
        {
            return lifetimeScope.Resolve<IModelBuilder<TQuery, TResult>>();
        }
    }
}
