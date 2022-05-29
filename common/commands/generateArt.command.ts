import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";
import { pick } from "shuffle-array";
import { Service } from "typedi";

import { DIMENSION_SIZES, DIMENSIONSIZE_TYPE } from "../enums/shape.type";
import { Art } from "../interfaces/art.interface";
import { TileDrawing } from "../libs/tile.drawing";

export class GenerateArtCommand implements IRequest<string> {
    public readonly id: string;
    public readonly name: string;
    public readonly description: string;

    constructor(id: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

@RequestHandler(GenerateArtCommand)
@Service()
export class GenerateArtCommandHandler implements IRequestHandler<GenerateArtCommand, boolean> {
    constructor(private readonly tile: TileDrawing) {}

    handle(command: GenerateArtCommand): Promise<boolean> {
        const _1x1Manual = pick(DIMENSION_SIZES, { picks: 1 }) as Partial<DIMENSIONSIZE_TYPE>;
        const manual = this.tile.setBlock(_1x1Manual).setDimension("1x1").toTile();
        const _3x3 = this.tile.setDimension("3x3").toTile();
        const _2x2 = [1, 2, 3, 4].map((i) => {
            return this.tile
                .setDimension("2x2")
                .setBlock(i as DIMENSIONSIZE_TYPE)
                .toTile();
        });

        const _1x1 = DIMENSION_SIZES.filter((i) => i != _1x1Manual).map((i) => {
            return this.tile.setDimension("1x1").setBlock(i).toTile();
        });

        const art: Art = {
            id: command.id,
            name: command.name,
            description: command.description,
            created_at: new Date(),
            rarities: {
                shapes: [],
                colors: []
            },
            manual,
            _3x3,
            _2x2,
            _1x1
        };

        // save to the database
        return Promise.resolve(true);
    }
}
