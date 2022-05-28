import { Service } from "typedi";

import { Drawable, Point } from "../../interfaces/drawable.interface";
import { Draw } from "./abstract.draw";

interface CircleDrawable extends Drawable {
    point: Point;
    radius: number;
}

@Service()
export class DrawCircle extends Draw {
    public draw = (): CircleDrawable => {
        return {
            point: [0, 0],
            radius: 100,
            color: "red",
            thick: 1,
            border: "dashed"
        };
    };
}