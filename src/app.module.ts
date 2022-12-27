import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './dataBase/prisma.service';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { RocketMembersRepository } from './repositories/rocket-member-repositories';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository
    }
  ],
})
export class AppModule {}
