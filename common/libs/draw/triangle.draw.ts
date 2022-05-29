import { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE } from "../../enums/shape.type";
import { Drawable, IDraw, Point } from "../../interfaces/drawable.interface";
import { GenerateRarity } from "../generate.rarity";
import { RandomDrawing } from "../random.drawing";

interface TriangleDrawable extends Drawable {
    point: Point;
    width: number;
}
@Service()
export class DrawTriangle implements IDraw {
    constructor(public readonly _generateRarity: GenerateRarity, public readonly _randomDrawing: RandomDrawing) {}

    public draw = (dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE): TriangleDrawable => {
        const color = this._generateRarity.randomColor();
        const color2 = this._randomDrawing.randomColor(color);

        return {
            shape: "triangle",
            dimension,
            block,
            color,
            color2,
            fill: this._randomDrawing.randomFill(),
            point: this._randomDrawing.randomPoint(),
            width: this._randomDrawing.randomWidth(),
            thick: this._randomDrawing.randomThick(),
            border: this._randomDrawing.randomBorder()
        };
    };
}
