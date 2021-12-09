import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosCreateInput } from "../../../inputs/UsuariosCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosCreateInput, {
    nullable: false
  })
  data!: UsuariosCreateInput;
}
