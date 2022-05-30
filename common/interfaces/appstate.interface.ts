import { ArtViewModel } from "../commands/viewmodels/art.viewmodel";

export interface AppState {
    // max number of arts this generator can generate
    maxArtsCount: number;

    // the available arts
    arts: Array<ArtViewModel>;
}
