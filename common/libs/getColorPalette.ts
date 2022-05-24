import randomColor from "randomcolor";

import { COLOR } from "../enums/color.enum";

export const getColorPalette = (hue: COLOR, colorCount: number = 3) => {
    return randomColor({
        count: colorCount,
        luminosity: "bright",
        format: "hex",
        hue
    });
};
