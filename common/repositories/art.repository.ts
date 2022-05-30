import { Art, Prisma, PrismaClient } from "@prisma/client";
import { Service } from "typedi";

import { IRepository } from "../interfaces/repository.interface";
import { prisma } from "../prisma.config";

@Service()
export class ArtRepository implements IRepository {
    public readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = prisma;
    }
    findAll(where: Prisma.ArtWhereInput): Promise<Art[]> {
        return this._prisma.art.findMany({
            where
        });
    }
    getById(id: string): Promise<Art | null> {
        return this._prisma.art.findUnique({
            where: { id }
        });
    }
    create(data: Prisma.ArtCreateInput): Promise<Art> {
        return this._prisma.art.create({
            data
        });
    }
    update(id: string, data: Prisma.ArtUpdateInput): Promise<Art> {
        return this._prisma.art.update({
            where: { id },
            data
        });
    }
    delete(id: string): Promise<Art> {
        return this._prisma.art.delete({
            where: { id }
        });
    }
}
