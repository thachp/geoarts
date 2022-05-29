import { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE } from "../../enums/shape.type";
import { Drawable, IDraw, Point } from "../../interfaces/drawable.interface";
import { GenerateRarity } from "../generate.rarity";
import { RandomDrawing } from "../random.drawing";

interface LineDrawable extends Drawable {
    point1: Point;
    point2: Point;
    radius: number;
}

@Service()
export class DrawLine implements IDraw {
    constructor(public readonly _generateRarity: GenerateRarity, public readonly _randomDrawing: RandomDrawing) {}

    public draw = (dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE): LineDrawable => {
        this._randomDrawing.setDimension(dimension);

        const color = this._generateRarity.randomColor();
        const color2 = this._randomDrawing.randomColor(color);
        const point1 = this._randomDrawing.randomPoint();
        const point2 = this._randomDrawing.randomPoint();
        const radius = this._randomDrawing.randomRadius();
        const thick = this._randomDrawing.randomThick();
        const border = this._randomDrawing.randomBorder();
        const fill = this._randomDrawing.randomFill();

        return {
            shape: "line",
            dimension,
            block,
            color,
            color2,
            point1,
            point2,
            radius,
            thick,
            fill,
            border
        };
    };
}
