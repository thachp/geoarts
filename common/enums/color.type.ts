export const COLOR_TYPES = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "gold",
    "other"
] as const;

export type COLOR_TYPE = typeof COLOR_TYPES[number];
