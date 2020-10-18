import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    GraphQLModule.forRoot({
        playground: true,
        autoSchemaFile: true,
        sortSchema: true,
    }),
  ],
})
export class GraphqlModule {}
