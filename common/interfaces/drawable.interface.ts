import { SHAPE_TYPE } from "../enums/shape.enum";

export type BORDER_TYPE = "none" | "solid" | "dashed" | "dotted" | "double" | "curvy";

export interface Shape {
    type: SHAPE_TYPE;
    cordinates: Array<Array<number>>;
}

export interface Drawable {
    shape: Shape;
    color?: string;
    thick?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    border?: BORDER_TYPE;
}
