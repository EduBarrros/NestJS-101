import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './dataBase/prisma.service';
import { randomUUID } from 'node:crypto'
import { CreateTeamMemberBody } from './dtos/creaete-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-member-repositories';

@Controller()
export class AppController {

  constructor(
    private rocketMembersRepository: RocketMembersRepository
  ) {}

  @Post("NewMember")
  async getHello(@Body() body: CreateTeamMemberBody) {

    const { name, 'function': memberFunction } = body
    
    await this.rocketMembersRepository.create(name, memberFunction)
  }
}
