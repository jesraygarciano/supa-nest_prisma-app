import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TodosService } from './todos.service';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new todo' })
  @ApiResponse({ status: 201, description: 'The todo has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createTodo(@Body('title') title: string) {
    return this.todosService.createTodo(title);
  }
}
