import { Module } from '@nestjs/common';

import { TodoResolver } from './resolvers/todo.resolver';
import { TodoService } from './service/todo.service';

@Module({
  providers: [TodoService, TodoResolver]
})
export class TodoModule {}
