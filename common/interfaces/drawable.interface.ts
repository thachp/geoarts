import { SHAPE } from "../enums/shape.enum";

export type BORDER_TYPE = "none" | "solid" | "dashed" | "dotted" | "double" | "curvy";

export interface Drawable {
    shape: SHAPE;
    cordinate?: Array<Array<number>>;
    color?: string;
    thick?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    border?: BORDER_TYPE;
}
