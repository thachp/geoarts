import { Art } from "./art.interface";

export interface AppState {
    // max number of arts this generator can generate
    maxArtsCount: number;

    // the available arts
    arts: Array<Art>;
}
