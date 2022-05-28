import dot from "dot-prop-immutable";
import { atomWithProxy } from "jotai/valtio";
import { Service } from "typedi";
import { proxy } from "valtio/vanilla";

import { AppState } from "./interfaces/appstate.interface";

const defaultState: AppState = {
    maxArtsCount: 1000,
    arts: [],
    rarities: {
        shape: {
            star: 5,
            circle: 10,
            triangle: 25,
            square: 50,
            polygon: 100,
            line: 1000,
            none: 1000
        },
        color: {
            gold: 10,
            red: 50,
            green: 50,
            blue: 50,
            yellow: 100,
            purple: 100,
            pink: 500,
            black: 500,
            brown: 500,
            white: 1000,
            other: 10000
        }
    }
};

const proxyAppState = proxy(defaultState);
export const appStateAtom = atomWithProxy(proxyAppState);

@Service()
export class AppService {
    private _appState: AppState;

    constructor() {
        this._appState = proxyAppState;
    }

    /**
     * Get the current state of the app by path
     * @param path
     * @returns
     */
    getState(path: string): AppState {
        return dot.get(this._appState, path);
    }

    /**
     * Update the state of the app by path
     * @param path
     * @param value
     */
    updateState(path: string, value: any) {
        dot.set(this._appState, path, value);
    }
}
