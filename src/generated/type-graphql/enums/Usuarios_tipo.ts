import * as TypeGraphQL from "type-graphql";

export enum Usuarios_tipo {
  USER = "USER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(Usuarios_tipo, {
  name: "Usuarios_tipo",
  description: undefined,
});
