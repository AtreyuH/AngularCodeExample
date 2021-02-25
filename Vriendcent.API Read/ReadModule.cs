using Autofac;
using Vriendcent.API.Read.Interfaces;

namespace Vriendcent.API_Read
{
    public class ReadModule : Module
    {

        protected override void Load(ContainerBuilder builder)
        {
            builder
                .RegisterType<ModelBuilderFactory>()
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder
                .RegisterType<ModelBuilderDispatcher>()
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder
                .RegisterAssemblyTypes(ThisAssembly)
                .AsClosedTypesOf(typeof(IModelBuilder<,>))
                .InstancePerLifetimeScope();

            base.Load(builder);
        }
    }
}
