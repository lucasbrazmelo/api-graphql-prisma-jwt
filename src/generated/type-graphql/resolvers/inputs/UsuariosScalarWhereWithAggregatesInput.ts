import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumUsuarios_tipoWithAggregatesFilter } from "../inputs/EnumUsuarios_tipoWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UsuariosScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UsuariosScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsuariosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsuariosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuariosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsuariosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuariosScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsuariosScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  nome?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  senha?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  status?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUsuarios_tipoWithAggregatesFilter, {
    nullable: true
  })
  tipo?: EnumUsuarios_tipoWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  recuperar_token?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  deleted_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
