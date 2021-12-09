import * as TypeGraphQL from "type-graphql";

export enum UsuariosScalarFieldEnum {
  id = "id",
  email = "email",
  nome = "nome",
  senha = "senha",
  status = "status",
  tipo = "tipo",
  recuperar_token = "recuperar_token",
  created_at = "created_at",
  deleted_at = "deleted_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UsuariosScalarFieldEnum, {
  name: "UsuariosScalarFieldEnum",
  description: undefined,
});
