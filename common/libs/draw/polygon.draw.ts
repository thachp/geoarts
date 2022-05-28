import { Service } from "typedi";

import { Drawable, Point } from "../../interfaces/drawable.interface";
import { Draw } from "./abstract.draw";

interface PolygonDrawable extends Drawable {
    path: Array<Point>;
}

@Service()
export class DrawPolygon extends Draw {
    public draw = (): PolygonDrawable => {
        return {
            path: [],
            color: "red",
            thick: 1,
            border: "dashed"
        };
    };
}
