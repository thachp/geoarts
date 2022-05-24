import { COLOR } from "../enums/color.enum";
import { SHAPE } from "../enums/shape.enum";
import { Settings } from "../interfaces/settings.interface";

export const defaultAvaibilities: Settings = {
    maxArtsCount: 1000,
    rarities: {
        shape: {
            [SHAPE.CIRCLE]: 100,
            [SHAPE.TRIANGLE]: 250,
            [SHAPE.SQUARE]: 500,
            [SHAPE.POLYGON]: 1000,
            [SHAPE.LINE]: 10000,
            [SHAPE.NONE]: 100000
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
