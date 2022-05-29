import { Service } from "typedi";

import { THICK_TYPE } from "../enums/shape.type";
import { BORDER_TYPE, Point } from "../interfaces/drawable.interface";

export interface IRandomDrawing {
    randomPoint(rangeX: number, rangeY: number): Point;
    randomThick(): THICK_TYPE;
    randomBorder(): BORDER_TYPE;
}

@Service()
export class RandomDrawing implements IRandomDrawing {
    randomPoint(rangeX: number, rangeY: number): Point {
        throw new Error("Method not implemented.");
    }
    randomThick(): THICK_TYPE {
        throw new Error("Method not implemented.");
    }
    randomBorder(): BORDER_TYPE {
        throw new Error("Method not implemented.");
    }

    randomFill(): boolean {
        throw new Error("Method not implemented.");
    }
}
