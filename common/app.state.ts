import dot from "dot-prop-immutable";
import { atomWithProxy } from "jotai/valtio";
import { Service } from "typedi";
import { proxy } from "valtio/vanilla";

import { AppState } from "./interfaces/appstate.interface";

const defaultState: AppState = {
    maxArtsCount: 1000,
    arts: []
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
