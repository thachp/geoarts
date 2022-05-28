import { Service } from "typedi";

import { COLOR_TYPE } from "../enums/color.type";
import { SHAPE_TYPE, THICK_TYPE } from "../enums/shape.type";
import { BORDER_TYPE, Point } from "../interfaces/drawable.interface";

export interface IRandomDrawing {
    randomPoint(rangeX: number, rangeY: number): Point;
    randomColor(): COLOR_TYPE;
    randomThick(): THICK_TYPE;
    randomBorder(): BORDER_TYPE;
    randomShape(): SHAPE_TYPE;
}

@Service()
export class RandomDrawing implements IRandomDrawing {
    randomPoint(rangeX: number, rangeY: number): Point {
        throw new Error("Method not implemented.");
    }
    randomColor(): COLOR_TYPE {
        throw new Error("Method not implemented.");
    }
    randomThick(): THICK_TYPE {
        throw new Error("Method not implemented.");
    }
    randomBorder(): BORDER_TYPE {
        throw new Error("Method not implemented.");
    }
    randomShape(): SHAPE_TYPE {
        throw new Error("Method not implemented.");
    }
}
