import { pick } from "shuffle-array";
import Container, { Service } from "typedi";

import { COLOR_TYPE, COLOR_TYPES } from "../enums/color.type";
import { SHAPE_TYPE, SHAPE_TYPES } from "../enums/shape.type";

export interface IRarityDrawing {
    calculateRarity(shape: SHAPE_TYPE, color: COLOR_TYPE): number;
    randomColor(): COLOR_TYPE;
    randomShape(): SHAPE_TYPE;
}

export interface Rarity {
    shape: Partial<SHAPE_TYPE>;
    color: Partial<COLOR_TYPE>;
    rarityScore: number;
}

export enum ShapeRarityScore {
    "none" = 0,
    "line" = 1,
    "polygon" = 2,
    "rect" = 3,
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
    "orange" = 5,
    "purple" = 6,
    "yellow" = 7,
    "blue" = 8,
    "green" = 9,
    "red" = 10,
    "gold" = 11
}

@Service()
export class GenerateRarity implements IRarityDrawing {
    public calculateRarity(shape: SHAPE_TYPE = "none", color: COLOR_TYPE = "other"): number {
        const shapeScore = ShapeRarityScore[shape as any] as unknown as number;
        const colorScore = ColorRarityScore[color as any] as unknown as number;
        return shapeScore * colorScore;
    }

    public randomColor(): COLOR_TYPE {
        return pick(COLOR_TYPES, { picks: 1 }) as COLOR_TYPE;
    }

    public randomShape(): SHAPE_TYPE {
        return pick(SHAPE_TYPES, { picks: 1 }) as SHAPE_TYPE;
    }
}
