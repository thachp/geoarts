import { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE } from "../../enums/shape.type";
import { Drawable, IDraw, Point } from "../../interfaces/drawable.interface";
import { GenerateRarity } from "../generate.rarity";
import { RandomDrawing } from "../random.drawing";

interface PolygonDrawable extends Drawable {
    path: Array<Point>;
}

@Service()
export class DrawPolygon implements IDraw {
    constructor(public readonly _generateRarity: GenerateRarity, public readonly _randomDrawing: RandomDrawing) {}

    public draw = (dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE): PolygonDrawable => {
        const color = this._generateRarity.randomColor();
        const color2 = this._randomDrawing.randomColor(color);
        const fill = this._randomDrawing.randomFill();
        const thick = this._randomDrawing.randomThick();
        const border = this._randomDrawing.randomBorder();
        const path = this._randomDrawing.randomPath();

        return {
            shape: "polygon",
            dimension,
            block,
            color,
            color2,
            fill,
            path,
            thick,
            border
        };
    };
}
