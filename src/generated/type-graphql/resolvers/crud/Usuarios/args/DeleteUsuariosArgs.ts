import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosWhereUniqueInput } from "../../../inputs/UsuariosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosWhereUniqueInput, {
    nullable: false
  })
  where!: UsuariosWhereUniqueInput;
}
