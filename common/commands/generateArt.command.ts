import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";

import { Art } from "../interfaces/art.interface";

export class GenerateArtCommand implements IRequest<string> {
    name: string = "generateArt";
}

@RequestHandler(GenerateArtCommand)
export class GenerateArtCommandHandler implements IRequestHandler<GenerateArtCommand, Art> {
    handle(value: GenerateArtCommand): Promise<Art> {
        const art: Art = {
            id: "test",
            name: "test",
            description: "test",
            created_at: new Date(),
            rarities: {
                shapes: [],
                colors: []
            },
            _3x3: {
                shape: {
                    type: "circle",
                    cordinates: []
                }
            },
            _2x2: [],
            _1x1: []
        };

        return Promise.resolve(art);
    }
}
