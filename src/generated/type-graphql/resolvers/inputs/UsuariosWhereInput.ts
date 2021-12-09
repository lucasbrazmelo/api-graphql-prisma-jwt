import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumUsuarios_tipoFilter } from "../inputs/EnumUsuarios_tipoFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UsuariosWhereInput", {
  isAbstract: true
})
export class UsuariosWhereInput {
  @TypeGraphQL.Field(_type => [UsuariosWhereInput], {
    nullable: true
  })
  AND?: UsuariosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuariosWhereInput], {
    nullable: true
  })
  OR?: UsuariosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsuariosWhereInput], {
    nullable: true
  })
  NOT?: UsuariosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  nome?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  senha?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  status?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUsuarios_tipoFilter, {
    nullable: true
  })
  tipo?: EnumUsuarios_tipoFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  recuperar_token?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deleted_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
