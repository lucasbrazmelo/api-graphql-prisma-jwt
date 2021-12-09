import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosUpdateInput } from "../../../inputs/UsuariosUpdateInput";
import { UsuariosWhereUniqueInput } from "../../../inputs/UsuariosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosUpdateInput, {
    nullable: false
  })
  data!: UsuariosUpdateInput;

  @TypeGraphQL.Field(_type => UsuariosWhereUniqueInput, {
    nullable: false
  })
  where!: UsuariosWhereUniqueInput;
}
