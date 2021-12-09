import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Usuarios_tipo } from "../../enums/Usuarios_tipo";

@TypeGraphQL.InputType("EnumUsuarios_tipoFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumUsuarios_tipoFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Usuarios_tipo, {
    nullable: true
  })
  set?: "USER" | "ADMIN" | undefined;
}
