using Autofac;
using Vriendcent.API.Write.Interfaces;

namespace Vriendcent.API.Write
{
    public class WriteModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<CommandHandlerFactory>()
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder.RegisterType<CommandDispatcher>()
                .AsImplementedInterfaces()
                .InstancePerLifetimeScope();

            builder
              .RegisterAssemblyTypes(ThisAssembly)
              .AsClosedTypesOf(typeof(ICommandHandler<>))
              .InstancePerLifetimeScope();

            base.Load(builder);
        }
    }
}
