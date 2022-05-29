import Container, { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE } from "../enums/shape.type";
import { Drawable } from "../interfaces/drawable.interface";
import { RandomDrawing } from "./random.drawing";

export interface ITileDrawing {
    toTile(): Drawable;
}

@Service()
export class TileDrawing implements ITileDrawing {
    private _dimension: DIMENSION_TYPE;
    private _block: DIMENSIONSIZE_TYPE = 1;

    constructor(private readonly _randomDrawing: RandomDrawing) {
        this._dimension = "3x3";
    }

    setBlock(block: Partial<DIMENSIONSIZE_TYPE>) {
        this._block = block;
        return this;
    }

    setDimension(dimension: DIMENSION_TYPE) {
        this._dimension = dimension;
        return this;
    }

    toTile(): Drawable {
        return {};
    }
}
