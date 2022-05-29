import random from "lodash.random";
import { pick } from "shuffle-array";
import { Service } from "typedi";

import { BORDER_TYPES, THICK_SIZES, THICK_TYPE } from "../enums/shape.type";
import { BORDER_TYPE, Point } from "../interfaces/drawable.interface";

export interface IRandomDrawing {
    randomPoint(rangeX: number, rangeY: number): Point;
    randomThick(): THICK_TYPE;
    randomBorder(): BORDER_TYPE;
    randomFill(): boolean;
}

@Service()
export class RandomDrawing implements IRandomDrawing {
    randomPoint(rangeX: number, rangeY: number): Point {
        const x = random(0, rangeX);
        const y = random(0, rangeY);
        return [x, y];
    }

    randomThick(): THICK_TYPE {
        return pick(THICK_SIZES, { picks: 1 }) as THICK_TYPE;
    }

    randomBorder(): BORDER_TYPE {
        return pick(BORDER_TYPES, { picks: 1 }) as BORDER_TYPE;
    }

    randomFill(): boolean {
        return random(0, 1) === 1;
    }
}
