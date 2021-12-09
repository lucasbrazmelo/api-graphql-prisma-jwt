import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsuariosAvgOrderByAggregateInput } from "../inputs/UsuariosAvgOrderByAggregateInput";
import { UsuariosCountOrderByAggregateInput } from "../inputs/UsuariosCountOrderByAggregateInput";
import { UsuariosMaxOrderByAggregateInput } from "../inputs/UsuariosMaxOrderByAggregateInput";
import { UsuariosMinOrderByAggregateInput } from "../inputs/UsuariosMinOrderByAggregateInput";
import { UsuariosSumOrderByAggregateInput } from "../inputs/UsuariosSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsuariosOrderByWithAggregationInput", {
  isAbstract: true
})
export class UsuariosOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nome?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  senha?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tipo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recuperar_token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deleted_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UsuariosCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UsuariosCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuariosAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UsuariosAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuariosMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UsuariosMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuariosMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UsuariosMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsuariosSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UsuariosSumOrderByAggregateInput | undefined;
}
