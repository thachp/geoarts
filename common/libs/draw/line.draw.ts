import { Service } from "typedi";

import { Drawable, Point } from "../../interfaces/drawable.interface";
import { Draw } from "./abstract.draw";

interface LineDrawable extends Drawable {
    point1: Point;
    point2: Point;
    radius: number;
}

@Service()
export class DrawLine extends Draw {
    public draw = (): LineDrawable => {
        return {
            point1: [0, 0],
            point2: [100, 100],
            radius: 100,
            color: "red",
            thick: 1,
            border: "dashed"
        };
    };
}
