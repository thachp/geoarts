import range from "lodash.range";
import { pick } from "shuffle-array";
import Container, { Service } from "typedi";

import { COLOR_TYPE } from "../enums/color.type";
import { SHAPE_TYPE } from "../enums/shape.type";

export interface IRarityDrawing {
    calculateRarity(shapes: Array<SHAPE_TYPE>, colors: Array<COLOR_TYPE>): number;
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

export enum ColorRarityScoreCount {
    "other" = 1000,
    "white" = 500,
    "brown" = 500,
    "black" = 400,
    "pink" = 400,
    "orange" = 400,
    "purple" = 300,
    "yellow" = 300,
    "blue" = 200,
    "green" = 200,
    "red" = 100,
    "gold" = 100
}

export enum ShapeRarityScoreCount {
    "none" = 500,
    "line" = 100,
    "polygon" = 50,
    "rect" = 40,
    "triangle" = 40,
    "circle" = 30,
    "diamond" = 20,
    "star" = 10
}

@Service()
export class GenerateRarity implements IRarityDrawing {
    /**
     * Calculate the rarity score of shapes and colors
     * @param shapes
     * @param colors
     * @returns
     */
    public calculateRarity(shapes: Array<SHAPE_TYPE>, colors: Array<COLOR_TYPE>): number {
        let totalRarity = 0;

        for (let shape of shapes) {
            let shapeScore = ShapeRarityScore[shape as any] as unknown as number;
            totalRarity += shapeScore;
        }

        for (let color of colors) {
            let colorScore = ColorRarityScore[color as any] as unknown as number;
            totalRarity += colorScore;
        }

        return totalRarity;
    }

    public randomColor(): COLOR_TYPE {
        const randomColors: Array<COLOR_TYPE> = [];

        for (const property in ColorRarityScoreCount) {
            let items = range(0, ColorRarityScoreCount[property] as any);
            items.map(() => randomColors.push(property as COLOR_TYPE));
        }

        return pick(randomColors, { picks: 1 }) as COLOR_TYPE;
    }

    public randomShape(): SHAPE_TYPE {
        const randomShapes: Array<SHAPE_TYPE> = [];

        for (const property in ShapeRarityScoreCount) {
            let items = range(0, ShapeRarityScoreCount[property] as any);
            items.map(() => randomShapes.push(property as SHAPE_TYPE));
        }

        return pick(randomShapes, { picks: 1 }) as SHAPE_TYPE;
    }
}
