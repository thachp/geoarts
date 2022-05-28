import { Service } from "typedi";

import { Drawable, Point } from "../../interfaces/drawable.interface";
import { Draw } from "./abstract.draw";

interface SquareDrawable extends Drawable {
    point: Point;
    width: number;
    height: number;
}

@Service()
export class DrawRect implements Draw {
    public draw = (): SquareDrawable => {
        return {
            point: [0, 0],
            width: 100,
            height: 100,
            color: "red",
            thick: 1,
            border: "dashed"
        };
    };
}
