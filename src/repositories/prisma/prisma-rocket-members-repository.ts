import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/dataBase/prisma.service";
import { RocketMembersRepository } from "../rocket-member-repositories";

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository{

    constructor(
        private prisma: PrismaService
    ) {}

    async create(name: string, memberFunction: string): Promise<void>{
        await this.prisma.rocketTeamMember.create({
            data: {
                id: randomUUID(),
                name, 
                function: memberFunction
            }
        })
    }
}