import { Rarity } from "./rarity.interface";

export interface Settings {
    // max number of arts this generator can generate
    maxArtsCount: number;

    // rarity of the art by shape and color
    rarities: Rarity;
}
