import { ObjectId } from "bson";
import uniq from "lodash.uniq";
import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";
import { pick } from "shuffle-array";
import { Service } from "typedi";

import { DIMENSION_SIZES, DIMENSIONSIZE_TYPE } from "../enums/shape.type";
import { GenerateRarity } from "../libs/generate.rarity";
import { RandomDrawing } from "../libs/random.drawing";
import { TileDrawing } from "../libs/tile.drawing";
import { ArtRepository } from "../repositories/art.repository";
import { ArtViewModel } from "./viewmodels/art.viewmodel";

export class GenerateArtCommand implements IRequest<ArtViewModel> {
    public readonly userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }
}

@RequestHandler(GenerateArtCommand)
@Service()
export class GenerateArtCommandHandler implements IRequestHandler<GenerateArtCommand, boolean> {
    constructor(
        private readonly tile: TileDrawing,
        private readonly _artRepository: ArtRepository,
        private readonly _generateRarity: GenerateRarity,
        private readonly _randomDrawing: RandomDrawing
    ) {}

    async handle(command: GenerateArtCommand): Promise<boolean> {
        const _1x1Manual = pick(DIMENSION_SIZES, { picks: 1 }) as Partial<DIMENSIONSIZE_TYPE>;
        const _3x3 = this.tile.setDimension("3x3").setBlock(1).toTile();
        const _2x2 = [1, 2, 3, 4].map((i) => {
            return this.tile
                .setDimension("2x2")
                .setBlock(i as DIMENSIONSIZE_TYPE)
                .toTile();
        });

        const _1x1 = DIMENSION_SIZES.filter((i) => i !== _1x1Manual).map((i) => {
            return this.tile.setDimension("1x1").setBlock(i).toTile();
        });

        const tiles = [..._1x1, ..._2x2, _3x3];
        const shapes = uniq(tiles.map((i) => i.shape));
        const colors = uniq(tiles.map((i) => i.color));
        const rarityScore = this._generateRarity.calculateRarity(shapes, colors);

        await this._artRepository.create({
            user: {
                connect: {
                    id: command.userId
                }
            },
            slug: new ObjectId(32).toString(),
            threebythree: _3x3 as any,
            twobytwo: _2x2 as any,
            onebyone: _1x1 as any,
            theme: this._randomDrawing.randomTheme(),
            rarities: {
                shapes,
                colors,
                score: rarityScore
            }
        });
        // save to the database
        return Promise.resolve(true);
    }
}
