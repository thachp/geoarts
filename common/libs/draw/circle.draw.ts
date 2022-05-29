import { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE } from "../../enums/shape.type";
import { Drawable, IDraw, Point } from "../../interfaces/drawable.interface";
import { GenerateRarity } from "../generate.rarity";
import { RandomDrawing } from "../random.drawing";

interface CircleDrawable extends Drawable {
    point: Point;
    radius: number;
}

@Service()
export class DrawCircle implements IDraw {
    constructor(private readonly _randomDrawing: RandomDrawing, private readonly _generateRarity: GenerateRarity) {}

    public draw = (dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE): CircleDrawable => {
        this._randomDrawing.setDimension(dimension);

        const color = this._generateRarity.randomColor();
        return {
            shape: "circle",
            dimension,
            block,
            color,
            color2: this._randomDrawing.randomColor(color),
            point: this._randomDrawing.randomPoint(),
            radius: this._randomDrawing.randomRadius(),
            fill: this._randomDrawing.randomFill(),
            thick: this._randomDrawing.randomThick(),
            border: this._randomDrawing.randomBorder()
        };
    };
}
