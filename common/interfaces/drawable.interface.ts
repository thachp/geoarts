import { COLOR_TYPE } from "../enums/color.type";
import { DIMENSION_TYPE, DIMENSIONSIZE_TYPE, SHAPE_TYPE, THICK_TYPE } from "../enums/shape.type";

export type BORDER_TYPE = "none" | "solid" | "dashed" | "dotted" | "double" | "curvy";

export type Point = [number, number];

export interface Drawable {
    shape: SHAPE_TYPE;
    dimension: DIMENSION_TYPE;
    block: DIMENSIONSIZE_TYPE;
    color: COLOR_TYPE;
    color2: string;
    rarityScore?: number;
    thick?: THICK_TYPE;
    fill?: boolean;
    border?: BORDER_TYPE;
}

export interface IDraw {
    draw(dimension: DIMENSION_TYPE, block: DIMENSIONSIZE_TYPE, color: COLOR_TYPE): Drawable;
}
