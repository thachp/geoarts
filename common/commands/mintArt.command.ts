import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";
import { Service } from "typedi";

export class MintArtCommand implements IRequest<string> {
    name: string = "exportArt";
}

@RequestHandler(MintArtCommand)
@Service()
export class MintArtCommandHandler implements IRequestHandler<MintArtCommand, string> {
    handle(value: MintArtCommand): Promise<string> {
        return Promise.resolve(`Value passed ${value.name}`);
    }
}
