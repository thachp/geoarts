import { pick } from "shuffle-array";
import Container, { Service } from "typedi";

import { COLOR_TYPE, COLOR_TYPES } from "../enums/color.type";
import { SHAPE_TYPE, SHAPE_TYPES } from "../enums/shape.type";
import { Drawable } from "../interfaces/drawable.interface";

export interface IRarityDrawing {
    toRarity(): Drawable;
}

export interface Rarity {
    shape: Partial<SHAPE_TYPE>;
    color: Partial<COLOR_TYPE>;
    score: number;
}

export enum ShapeRarityScore {
    "none" = 0,
    "line" = 1,
    "polygon" = 2,
    "square" = 3,
    "triangle" = 4,
    "circle" = 5,
    "diamond" = 6,
    "star" = 7
}

export enum ColorRarityScore {
    "other" = 0,
    "white" = 1,
    "brown" = 2,
    "black" = 3,
    "pink" = 4,
    "purple" = 5,
    "yellow" = 6,
    "blue" = 7,
    "green" = 8,
    "red" = 9,
    "gold" = 10
}

@Service()
export class GenerateRarity implements IRarityDrawing {
    toRarity(): Rarity {
        const color = this._randomColor();
        const shape = this._randomShape();
        const score = this._calculateRarity(shape, color);

        return {
            shape,
            color,
            score
        };
    }

    private _calculateRarity(shape: SHAPE_TYPE = "none", color: COLOR_TYPE = "other"): number {
        const shapeScore = ShapeRarityScore[shape as any] as unknown as number;
        const colorScore = ColorRarityScore[color as any] as unknown as number;
        return shapeScore * colorScore;
    }

    private _randomColor(): COLOR_TYPE {
        return pick(COLOR_TYPES, { picks: 1 }) as COLOR_TYPE;
    }
    private _randomShape(): SHAPE_TYPE {
        return pick(SHAPE_TYPES, { picks: 1 }) as SHAPE_TYPE;
    }
}
