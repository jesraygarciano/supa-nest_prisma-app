import { Controller, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async createTodo(@Body('title') title: string) {
    return this.todosService.createTodo(title);
  }
}
