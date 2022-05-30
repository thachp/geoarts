import { Prisma, PrismaClient, User } from "@prisma/client";
import { Service } from "typedi";

import { IRepository } from "../interfaces/repository.interface";
import { prisma } from "../prisma.config";

@Service()
export class UserRepository implements IRepository {
    public readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = prisma;
    }

    findAll(where: Prisma.UserWhereInput): Promise<User[]> {
        return this._prisma.user.findMany({
            where
        });
    }

    getById(id: string): Promise<User | null> {
        return this._prisma.user.findUnique({
            where: { id }
        });
    }

    create(data: Prisma.UserCreateInput): Promise<User> {
        return this._prisma.user.create({
            data
        });
    }

    update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
        return this._prisma.user.update({
            where: { id },
            data
        });
    }

    delete(id: string): Promise<User> {
        return this._prisma.user.delete({
            where: { id }
        });
    }
}
