import { Service } from "typedi";

import { Drawable, Point } from "../../interfaces/drawable.interface";
import { Draw } from "./abstract.draw";

interface TriangleDrawable extends Drawable {
    point: Point;
    width: number;
}
@Service()
export class DrawTriangle extends Draw {
    public draw = (): TriangleDrawable => {
        return {
            point: [0, 0],
            width: 100,
            color: "red",
            thick: 1,
            border: "dashed"
        };
    };
}
