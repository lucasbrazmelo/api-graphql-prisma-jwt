import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuariosAvgAggregate } from "../outputs/UsuariosAvgAggregate";
import { UsuariosCountAggregate } from "../outputs/UsuariosCountAggregate";
import { UsuariosMaxAggregate } from "../outputs/UsuariosMaxAggregate";
import { UsuariosMinAggregate } from "../outputs/UsuariosMinAggregate";
import { UsuariosSumAggregate } from "../outputs/UsuariosSumAggregate";

@TypeGraphQL.ObjectType("AggregateUsuarios", {
  isAbstract: true
})
export class AggregateUsuarios {
  @TypeGraphQL.Field(_type => UsuariosCountAggregate, {
    nullable: true
  })
  _count!: UsuariosCountAggregate | null;

  @TypeGraphQL.Field(_type => UsuariosAvgAggregate, {
    nullable: true
  })
  _avg!: UsuariosAvgAggregate | null;

  @TypeGraphQL.Field(_type => UsuariosSumAggregate, {
    nullable: true
  })
  _sum!: UsuariosSumAggregate | null;

  @TypeGraphQL.Field(_type => UsuariosMinAggregate, {
    nullable: true
  })
  _min!: UsuariosMinAggregate | null;

  @TypeGraphQL.Field(_type => UsuariosMaxAggregate, {
    nullable: true
  })
  _max!: UsuariosMaxAggregate | null;
}
