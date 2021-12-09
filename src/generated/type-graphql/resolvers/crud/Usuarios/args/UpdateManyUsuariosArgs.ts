import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosUpdateManyMutationInput } from "../../../inputs/UsuariosUpdateManyMutationInput";
import { UsuariosWhereInput } from "../../../inputs/UsuariosWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsuariosUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UsuariosWhereInput, {
    nullable: true
  })
  where?: UsuariosWhereInput | undefined;
}
