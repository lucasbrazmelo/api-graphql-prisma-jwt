import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosWhereInput } from "../../../inputs/UsuariosWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosWhereInput, {
    nullable: true
  })
  where?: UsuariosWhereInput | undefined;
}
