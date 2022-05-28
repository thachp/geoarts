import { Service } from "typedi";

import { DIMENSION_TYPE, SHAPE_TYPE } from "../enums/shape.enum";

export interface ITileDrawing {}

@Service()
export class TileDrawing implements ITileDrawing {
    private _dimension: DIMENSION_TYPE;
    private _shape: SHAPE_TYPE;

    constructor() {
        this._dimension = "3x3";
        this._shape = "circle";
    }

    set shape(shape: SHAPE_TYPE) {
        this._shape = shape;
    }

    set dimension(dimension: DIMENSION_TYPE) {
        this._dimension = dimension;
    }

    draw() {
        //
    }
}
