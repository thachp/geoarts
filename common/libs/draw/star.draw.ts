import { Service } from "typedi";

import { Drawable, Point } from "../../interfaces/drawable.interface";
import { Draw } from "./abstract.draw";

interface StarDrawable extends Drawable {
    center: Point;
    point: Point;
    radius: number;
    innerRadius: number;
}

@Service()
export class DrawStar extends Draw {
    public draw = (): StarDrawable => {
        return {
            center: [0, 0],
            point: [100, 100],
            radius: 100,
            innerRadius: 50,
            color: "red",
            thick: 1,
            border: "dashed"
        };
    };
}
