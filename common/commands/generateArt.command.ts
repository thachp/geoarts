import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";
import { pick } from "shuffle-array";
import { Service } from "typedi";

import { Art } from "../interfaces/art.interface";
import { TileDrawing } from "../libs/Tile.drawing";

export class GenerateArtCommand implements IRequest<string> {}

@RequestHandler(GenerateArtCommand)
@Service()
export class GenerateArtCommandHandler implements IRequestHandler<GenerateArtCommand, Art> {
    constructor(private readonly _tile: TileDrawing) {}

    handle(command: GenerateArtCommand): Promise<Art> {
        const _1x1Manual = pick([1, 2, 3, 4, 5, 6, 7, 8, 9], { picks: 1 }) as number;

        const art: Art = {
            id: "uuid",
            name: "Patrick",
            description: "Hello, World!",
            created_at: new Date(),
            updated_at: new Date(),
            rarities: {
                shapes: [],
                colors: []
            },
            _1x1Manual,
            _3x3: {},
            _2x2: [],
            _1x1: []
        };

        return Promise.resolve(art);
    }
}
