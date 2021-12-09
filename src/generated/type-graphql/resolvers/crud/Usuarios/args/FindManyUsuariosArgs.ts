import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosOrderByWithRelationInput } from "../../../inputs/UsuariosOrderByWithRelationInput";
import { UsuariosWhereInput } from "../../../inputs/UsuariosWhereInput";
import { UsuariosWhereUniqueInput } from "../../../inputs/UsuariosWhereUniqueInput";
import { UsuariosScalarFieldEnum } from "../../../../enums/UsuariosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosWhereInput, {
    nullable: true
  })
  where?: UsuariosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsuariosOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UsuariosOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsuariosWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsuariosWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsuariosScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "nome" | "senha" | "status" | "tipo" | "recuperar_token" | "created_at" | "deleted_at" | "updated_at"> | undefined;
}
