import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";
import { pick } from "shuffle-array";

import { DIMENSION_TYPE } from "../enums/shape.enum";
import { Drawable, Shape } from "../interfaces/drawable.interface";

export class GenerateTileCommand implements IRequest<DIMENSION_TYPE> {
    public readonly type: DIMENSION_TYPE;

    constructor(type: DIMENSION_TYPE) {
        this.type = type;
    }
}

@RequestHandler(GenerateTileCommand)
export class GenerateTileCommandHandler implements IRequestHandler<GenerateTileCommand, Drawable> {
    handle(value: GenerateTileCommand): Promise<Drawable> {
        const shape: Shape = {
            type: "circle",
            cordinates: []
        };

        const drawable: Drawable = {
            shape,
            color: "red",
            thick: pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) as any,
            border: "none"
        };
        return Promise.resolve(drawable);
    }
}
