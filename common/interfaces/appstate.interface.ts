import { Art } from "./art.interface";
import { Rarity } from "./rarity.interface";

export interface AppState {
    // max number of arts this generator can generate
    maxArtsCount: number;

    // rarity of the art by shape and color
    rarities: Rarity;

    // the available arts
    arts: Array<Art>;
}
