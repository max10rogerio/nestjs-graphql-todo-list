import { Request } from "express";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver, Query, Context } from "@nestjs/graphql";

import { UserGuard } from "@graphql/guards/user.guard";

import { Todo } from "../models/todo.model";
import { TodoService } from "../service/todo.service";

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private readonly todoService: TodoService
  ) {}

  
  @UseGuards(UserGuard)
  @Query(() => [Todo], {
    description: 'List todo of an user'
  })
  todoList(
    @Context('req') request: Request
    ): Todo[] {
      const user = this.getUser(request);
      
      return this.todoService.findAll(user);
    }
    
  @UseGuards(UserGuard)
  @Mutation(() => Todo)
  todoCreate(
    @Args('description') description: string,
    @Context('req') request: Request
  ): Todo {
    const user = this.getUser(request);

    return this.todoService.create(user, description);
  }

  @UseGuards(UserGuard)
  @Mutation(() => Todo)
  todoToggle(
    @Args('id') id: string,
    @Context('req') request: Request
  ): Todo {
    const user = this.getUser(request);

    return this.todoService.toggleTodo(user, id);
  }

  getUser(request: Request) {
    return request.headers.user as string;
  }
}