import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuariosAvgAggregate } from "../outputs/UsuariosAvgAggregate";
import { UsuariosCountAggregate } from "../outputs/UsuariosCountAggregate";
import { UsuariosMaxAggregate } from "../outputs/UsuariosMaxAggregate";
import { UsuariosMinAggregate } from "../outputs/UsuariosMinAggregate";
import { UsuariosSumAggregate } from "../outputs/UsuariosSumAggregate";
import { Usuarios_tipo } from "../../enums/Usuarios_tipo";

@TypeGraphQL.ObjectType("UsuariosGroupBy", {
  isAbstract: true
})
export class UsuariosGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  nome!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  senha!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  status!: number;

  @TypeGraphQL.Field(_type => Usuarios_tipo, {
    nullable: false
  })
  tipo!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  recuperar_token!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

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
