export type BORDER_TYPE = "none" | "solid" | "dashed" | "dotted" | "double" | "curvy";

export type Point = [number, number];

export interface Drawable {
    color?: string;
    thick?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    border?: BORDER_TYPE;
}
