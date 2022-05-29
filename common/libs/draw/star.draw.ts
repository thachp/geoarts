import { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE } from "../../enums/shape.type";
import { Drawable, IDraw, Point } from "../../interfaces/drawable.interface";
import { GenerateRarity } from "../generate.rarity";
import { RandomDrawing } from "../random.drawing";

interface StarDrawable extends Drawable {
    center: Point;
    point: Point;
    radius: number;
    innerRadius: number;
}

@Service()
export class DrawStar implements IDraw {
    constructor(public readonly _generateRarity: GenerateRarity, public readonly _randomDrawing: RandomDrawing) {}

    public draw = (dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE): StarDrawable => {
        const color = this._generateRarity.randomColor();

        return {
            shape: "star",
            dimension,
            block,
            color,
            color2: this._randomDrawing.randomColor(color),
            fill: this._randomDrawing.randomFill(),
            center: this._randomDrawing.randomPoint(),
            point: this._randomDrawing.randomPoint(),
            radius: this._randomDrawing.randomRadius(),
            innerRadius: this._randomDrawing.randomRadius(),
            thick: this._randomDrawing.randomThick(),
            border: this._randomDrawing.randomBorder()
        };
    };
}
