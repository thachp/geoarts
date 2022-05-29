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

export const shapeRarityScore = {
    none: 0,
    line: 1,
    polygon: 2,
    square: 3,
    triangle: 4,
    circle: 5,
    diamond: 6,
    star: 7
};

export const colorRarityScore = {
    other: 0,
    white: 1,
    brown: 2,
    black: 3,
    pink: 4,
    purple: 5,
    yellow: 6,
    blue: 7,
    green: 8,
    red: 9,
    gold: 10
};

@Service()
export class GenerateRarity implements IRarityDrawing {
    toRarity(): Rarity {
        const colorIndex = this._randomColor();
        const shapeIndex = this._randomShape();
        const score = this._calculateRarity(shapeIndex, colorIndex);

        const color = Object.keys(colorRarityScore)[colorIndex];
        const shape = Object.keys(shapeRarityScore)[shapeIndex];

        return {
            shape: SHAPE_TYPES[shape as any],
            color: COLOR_TYPES[color as any],
            score
        };
    }

    private _calculateRarity(shapeIndex: number = 0, colorIndex: number = 0): number {
        const colorScore = Object.values(colorRarityScore)[colorIndex];
        const shapeScore = Object.values(shapeRarityScore)[shapeIndex];
        return shapeScore * colorScore;
    }

    private _randomColor(): number {
        return pick(COLOR_TYPES, { picks: 1 })[0] as any;
    }
    private _randomShape(): number {
        return pick(SHAPE_TYPES, { picks: 1 })[0] as any;
    }
}
