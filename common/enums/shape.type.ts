export const SHAPE_TYPES = ["none", "line", "circle", "triangle", "rect", "star", "polygon"] as const;
export const DIMENSION_TYPES = ["1x1", "2x2", "3x3"] as const;
export const DIMENSION_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export const THICK_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
export const BORDER_TYPES = ["none", "solid", "dashed", "dotted", "double", "curvy"] as const;

export type SHAPE_TYPE = typeof SHAPE_TYPES[number];
export type DIMENSION_TYPE = typeof DIMENSION_TYPES[number];
export type DIMENSIONSIZE_TYPE = typeof DIMENSION_SIZES[number];
export type BORDER_TYPE = typeof BORDER_TYPES[number];
export type THICK_TYPE = typeof THICK_SIZES[number];
