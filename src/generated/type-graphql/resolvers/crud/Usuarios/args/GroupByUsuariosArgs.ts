import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosOrderByWithAggregationInput } from "../../../inputs/UsuariosOrderByWithAggregationInput";
import { UsuariosScalarWhereWithAggregatesInput } from "../../../inputs/UsuariosScalarWhereWithAggregatesInput";
import { UsuariosWhereInput } from "../../../inputs/UsuariosWhereInput";
import { UsuariosScalarFieldEnum } from "../../../../enums/UsuariosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUsuariosArgs {
  @TypeGraphQL.Field(_type => UsuariosWhereInput, {
    nullable: true
  })
  where?: UsuariosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsuariosOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UsuariosOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuariosScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "nome" | "senha" | "status" | "tipo" | "recuperar_token" | "created_at" | "deleted_at" | "updated_at">;

  @TypeGraphQL.Field(_type => UsuariosScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UsuariosScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
