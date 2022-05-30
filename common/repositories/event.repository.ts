import { Event, Prisma, PrismaClient } from "@prisma/client";
import { Service } from "typedi";

import { IRepository } from "../interfaces/repository.interface";
import { prisma } from "../prisma.config";

@Service()
export class EventRepository implements IRepository {
    public readonly _prisma: PrismaClient;

    constructor() {
        this._prisma = prisma;
    }
    findAll(where: Prisma.EventWhereInput): Promise<Event[]> {
        return this._prisma.event.findMany({
            where
        });
    }
    getById(id: string): Promise<Event | null> {
        return this._prisma.event.findUnique({
            where: { id }
        });
    }
    create(data: Prisma.EventCreateInput): Promise<Event> {
        return this._prisma.event.create({
            data
        });
    }

    update(id: string, data: Prisma.EventUpdateInput): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
