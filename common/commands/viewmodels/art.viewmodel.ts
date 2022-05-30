import { COLOR_TYPE } from "../../enums/color.type";
import { SHAPE_TYPE } from "../../enums/shape.type";
import { Drawable } from "../../interfaces/drawable.interface";

export interface ArtViewModel {
    id: string;
    name: string;
    description: string;
    created_at: Date;
    updated_at?: Date;
    rarities: {
        shapes: Array<SHAPE_TYPE>;
        colors: Array<COLOR_TYPE>;
        rarityScore: number;
    };
    _3x3: Drawable; // 1 item
    _2x2: Array<Drawable>; // 4 items
    _1x1: Array<Drawable>; // 8 items
}
