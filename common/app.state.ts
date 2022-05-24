import { atom } from "jotai";

import { defaultState } from "./constants/availabilities.constant";

const appState = atom(defaultState);

export default appState;
