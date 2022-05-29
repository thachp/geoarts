export type BORDER_TYPE = "none" | "solid" | "dashed" | "dotted" | "double" | "curvy";

export type Point = [number, number];

export interface Drawable {
    color?: string;
    thick?: number;
    fill?: boolean;
    border?: BORDER_TYPE;
}
