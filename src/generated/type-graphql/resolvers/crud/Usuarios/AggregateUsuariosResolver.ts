import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsuariosArgs } from "./args/AggregateUsuariosArgs";
import { Usuarios } from "../../../models/Usuarios";
import { AggregateUsuarios } from "../../outputs/AggregateUsuarios";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Usuarios)
export class AggregateUsuariosResolver {
  @TypeGraphQL.Query(_returns => AggregateUsuarios, {
    nullable: false
  })
  async aggregateUsuarios(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsuariosArgs): Promise<AggregateUsuarios> {
    return getPrismaFromContext(ctx).usuarios.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
