import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { TodoModule } from '@modules/todo';


@Module({
  imports: [
    TodoModule,
    GraphQLModule.forRoot({
        playground: true,
        autoSchemaFile: true,
        sortSchema: true,
    }),
  ],
})
export class GraphqlModule {}
