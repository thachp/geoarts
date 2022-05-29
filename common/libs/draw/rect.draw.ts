import { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE } from "../../enums/shape.type";
import { Drawable, IDraw, Point } from "../../interfaces/drawable.interface";
import { GenerateRarity } from "../generate.rarity";
import { RandomDrawing } from "../random.drawing";

interface RectDrawable extends Drawable {
    point: Point;
    width: number;
    height: number;
}

@Service()
export class DrawRect implements IDraw {
    constructor(public readonly _generateRarity: GenerateRarity, public readonly _randomDrawing: RandomDrawing) {}

    public draw = (dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE): RectDrawable => {
        const color = this._generateRarity.randomColor();
        const color2 = this._randomDrawing.randomColor(color);
        const point = this._randomDrawing.randomPoint();
        const width = this._randomDrawing.randomWidth();
        const height = this._randomDrawing.randomHeight();
        const thick = this._randomDrawing.randomThick();
        const border = this._randomDrawing.randomBorder();

        return {
            shape: "rect",
            dimension,
            block,
            color,
            color2,
            point,
            width,
            height,
            thick,
            border
        };
    };
}
