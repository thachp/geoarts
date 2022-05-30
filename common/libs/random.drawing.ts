import random from "lodash.random";
import range from "lodash.range";
import randomColor from "randomcolor";
import { pick } from "shuffle-array";
import { Service } from "typedi";

import { ARTTHEME_TYPE, ARTTHEME_TYPES } from "../enums/arttheme.type";
import { COLOR_TYPE } from "../enums/color.type";
import { BORDER_TYPES, DIMENSION_TYPE, THICK_SIZES, THICK_TYPE } from "../enums/shape.type";
import { BORDER_TYPE, Point } from "../interfaces/drawable.interface";

export interface IRandomDrawing {
    randomPoint(rangeX: number, rangeY: number): Point;
    randomThick(): THICK_TYPE;
    randomBorder(): BORDER_TYPE;
    randomFill(): boolean;
    randomWidth(): number;
    randomHeight(): number;
    randomRadius(): number;
    randomPath(): Array<Point>;
}

@Service()
export class RandomDrawing implements IRandomDrawing {
    private _dimension: DIMENSION_TYPE = "1x1";

    private _maxRangeX: number = 200;
    private _maxRangeY: number = 200;
    private _maxRadius: number = 100;
    private _maxHeight: number = 200;
    private _maxWidth: number = 100;
    private _maxPathCount: number = 10;

    setDimension(dimension: DIMENSION_TYPE) {
        this._dimension = dimension;

        if (dimension === "1x1") {
            this._maxRadius = 100;
            this._maxRangeX = 200;
            this._maxRangeY = 200;
            this._maxHeight = 200;
            this._maxWidth = 100;
            this._maxPathCount = 10;
        }

        if (dimension === "2x2") {
            this._maxRadius = 200;
            this._maxRangeX = 400;
            this._maxRangeY = 400;
            this._maxHeight = 400;
            this._maxWidth = 200;
            this._maxPathCount = 20;
        }

        if (dimension === "3x3") {
            this._maxRadius = 300;
            this._maxRangeX = 600;
            this._maxRangeY = 600;
            this._maxHeight = 600;
            this._maxWidth = 300;
            this._maxPathCount = 30;
        }
    }

    randomPath(): Array<Point> {
        const pathCount = random(1, this._maxPathCount);
        return range(pathCount).map(() => this.randomPoint());
    }

    randomColor(color: COLOR_TYPE): string {
        return randomColor({
            luminosity: "random",
            hue: color === "other" ? "random" : color
        });
    }

    randomRadius(): number {
        return random(0, this._maxRadius);
    }

    randomHeight(): number {
        return random(0, this._maxHeight);
    }

    randomWidth(): number {
        return random(0, this._maxWidth);
    }

    randomPoint(): Point {
        const x = random(0, this._maxRangeX);
        const y = random(0, this._maxRangeY);
        return [x, y];
    }

    randomTheme(): ARTTHEME_TYPE {
        return pick(ARTTHEME_TYPES, { picks: 1 }) as ARTTHEME_TYPE;
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
