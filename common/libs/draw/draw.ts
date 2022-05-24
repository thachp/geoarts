import { Drawable } from "../../interfaces/drawable.interface";

export interface IDraw {
    draw: () => Drawable;
}

export abstract class Draw implements IDraw {
    abstract draw: () => Drawable;
}
