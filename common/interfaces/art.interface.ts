import { COLOR_TYPE } from "../enums/color.type";
import { SHAPE_TYPE } from "../enums/shape.type";
import { Drawable } from "./drawable.interface";

export interface Art {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at?: Date;
    rarities: {
        shapes: Array<SHAPE_TYPE>;
        colors: Array<COLOR_TYPE>;
    };
    manual: Drawable; // 1 item;
    _3x3: Drawable; // 1 item
    _2x2: Array<Drawable>; // 4 items
    _1x1: Array<Drawable>; // 8 items
}
