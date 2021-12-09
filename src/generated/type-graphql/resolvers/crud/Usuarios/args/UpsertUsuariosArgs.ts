import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosCreateInput } from "../../../inputs/UsuariosCreateInput";
import { UsuariosUpdateInput } from "../../../inputs/UsuariosUpdateInput";
import { UsuariosWhereUniqueInput } from "../../../inputs/UsuariosWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosWhereUniqueInput, {
    nullable: false
  })
  where!: UsuariosWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsuariosCreateInput, {
    nullable: false
  })
  create!: UsuariosCreateInput;

  @TypeGraphQL.Field(_type => UsuariosUpdateInput, {
    nullable: false
  })
  update!: UsuariosUpdateInput;
}
