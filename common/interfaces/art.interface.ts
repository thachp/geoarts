import { COLOR } from "../enums/color.enum";
import { SHAPE_TYPE } from "../enums/shape.enum";
import { Drawable } from "./drawable.interface";

export interface Art {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at?: Date;
    rarities: {
        shapes: Array<SHAPE_TYPE>;
        colors: Array<COLOR>;
    };
    _1x1Manual: number; // 1 item;
    _3x3: Drawable; // 1 item
    _2x2: Array<Drawable>; // 4 items
    _1x1: Array<Drawable>; // 8 items
}
