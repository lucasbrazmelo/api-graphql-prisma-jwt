import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumUsuarios_tipoFilter } from "../inputs/NestedEnumUsuarios_tipoFilter";
import { NestedEnumUsuarios_tipoWithAggregatesFilter } from "../inputs/NestedEnumUsuarios_tipoWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Usuarios_tipo } from "../../enums/Usuarios_tipo";

@TypeGraphQL.InputType("EnumUsuarios_tipoWithAggregatesFilter", {
  isAbstract: true
})
export class EnumUsuarios_tipoWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Usuarios_tipo, {
    nullable: true
  })
  equals?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [Usuarios_tipo], {
    nullable: true
  })
  in?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [Usuarios_tipo], {
    nullable: true
  })
  notIn?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUsuarios_tipoWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumUsuarios_tipoWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUsuarios_tipoFilter, {
    nullable: true
  })
  _min?: NestedEnumUsuarios_tipoFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUsuarios_tipoFilter, {
    nullable: true
  })
  _max?: NestedEnumUsuarios_tipoFilter | undefined;
}
