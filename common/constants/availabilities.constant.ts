import { COLOR } from "../enums/color.enum";
import { AppState } from "../interfaces/appstate.interface";

export const defaultState: AppState = {
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
            [COLOR.GOLD]: 10,
            [COLOR.RED]: 50,
            [COLOR.GREEN]: 50,
            [COLOR.BLUE]: 50,
            [COLOR.YELLOW]: 100,
            [COLOR.PURPLE]: 100,
            [COLOR.PINK]: 500,
            [COLOR.BROWN]: 1000,
            [COLOR.BLACK]: 1000,
            [COLOR.WHITE]: 1000,
            [COLOR.OTHER]: 10000
        }
    }
};
