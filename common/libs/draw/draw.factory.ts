import { Service } from "typedi";

import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE, SHAPE_TYPE } from "../../enums/shape.type";
import { Drawable } from "../../interfaces/drawable.interface";
import { DrawCircle } from "./circle.draw";
import { DrawLine } from "./line.draw";
import { DrawPolygon } from "./polygon.draw";
import { DrawRect } from "./rect.draw";
import { DrawStar } from "./star.draw";
import { DrawTriangle } from "./triangle.draw";

@Service()
export class DrawFactory {
    constructor(
        private readonly _drawLine: DrawLine,
        private readonly _drawRect: DrawRect,
        private readonly _drawCircle: DrawCircle,
        private readonly _drawPolygon: DrawPolygon,
        private readonly _drawStar: DrawStar,
        private readonly _drawTriangle: DrawTriangle
    ) {}

    public drawable(shape: SHAPE_TYPE, dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE): Drawable {
        switch (shape) {
            case "line":
                return this._drawLine.draw(dimension, block);
            case "rect":
                return this._drawRect.draw(dimension, block);
            case "circle":
                return this._drawCircle.draw(dimension, block);
            case "polygon":
                return this._drawPolygon.draw(dimension, block);
            case "star":
                return this._drawStar.draw(dimension, block);
            case "triangle":
                return this._drawTriangle.draw(dimension, block);
            default:
                return this._drawLine.draw(dimension, block);
        }
    }
}
