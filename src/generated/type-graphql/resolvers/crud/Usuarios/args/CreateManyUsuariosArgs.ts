import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsuariosCreateManyInput } from "../../../inputs/UsuariosCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUsuariosArgs {
  @TypeGraphQL.Field(_type => [UsuariosCreateManyInput], {
    nullable: false
  })
  data!: UsuariosCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
