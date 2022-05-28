import Container, { Service } from "typedi";

import { AppService } from "../availabilities.state";
import { COLOR_TYPE } from "../enums/color.type";
import { SHAPE_TYPE } from "../enums/shape.type";
import { Drawable } from "../interfaces/drawable.interface";

export interface IRarityDrawing {
    toRarity(): Drawable;
}

export interface Rarity {
    shape: Partial<SHAPE_TYPE>;
    color: Partial<COLOR_TYPE>;
}

@Service()
export class RarityDrawing implements IRarityDrawing {
    constructor(private readonly appService: AppService) {}

    toRarity(): Drawable {
        return {};
    }
}
