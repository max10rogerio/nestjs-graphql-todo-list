import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';
import { Todo } from '../models/todo.model';

export type UserTodos = {
  [key: string]: Todo[]
}

@Injectable()
export class TodoService {
  static userTodos = {} as UserTodos;

  create(user: string, description: string): Todo {
    const newTodo = new Todo({
      id: this.generateHash(),
      description,
    })

    this.initTodoList(user);

    if (TodoService.userTodos[user].length >= 3) {
      throw new Error('Todo limit is 3.')
    } 

    TodoService.userTodos[user].push(newTodo);

    return newTodo;
  }

  findAll(user: string): Todo[] {
    this.initTodoList(user);

    return TodoService.userTodos[user];
  }

  toggleTodo(user: string, id: string): Todo {
    const list = TodoService.userTodos[user];
    const index = list.findIndex((value) => value.id === id);

    if (index === -1) {
      throw new Error(`Todo ${id} not found`);
    }

    const todo = list[index];

    todo.finished = !todo.finished;

    list[index] = todo;

    return todo;
  }

  generateHash(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  initTodoList(user: string): void {
    if (!TodoService.userTodos[user]) {
      TodoService.userTodos[user] = [];
    }
  }
}
