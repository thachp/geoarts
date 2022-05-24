import { COLOR } from "../enums/color.enum";
import { SHAPE } from "../enums/shape.enum";
import { Drawable } from "./drawable.interface";

export interface Art {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    rarities: {
        shapes: Array<SHAPE>;
        colors: Array<COLOR>;
    };
    _3x3: Drawable;
    _2x2: Array<Drawable>;
    _1x1: Array<Drawable>;
}
