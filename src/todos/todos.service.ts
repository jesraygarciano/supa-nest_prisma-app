import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TodosService {
  async createTodo(title: string) {
    return await prisma.todo.create({
      data: {
        title,
        is_complete: false,
      },
    });
  }
}
