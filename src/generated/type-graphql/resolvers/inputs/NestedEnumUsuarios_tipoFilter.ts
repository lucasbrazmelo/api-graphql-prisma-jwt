import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Usuarios_tipo } from "../../enums/Usuarios_tipo";

@TypeGraphQL.InputType("NestedEnumUsuarios_tipoFilter", {
  isAbstract: true
})
export class NestedEnumUsuarios_tipoFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumUsuarios_tipoFilter, {
    nullable: true
  })
  not?: NestedEnumUsuarios_tipoFilter | undefined;
}
