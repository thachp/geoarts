import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";

export class GenerateArtCommand implements IRequest<string> {
    name: string = "generateArt";
}

@RequestHandler(GenerateArtCommand)
export class GenerateArtCommandHandler implements IRequestHandler<GenerateArtCommand, string> {
    handle(value: GenerateArtCommand): Promise<string> {
        return Promise.resolve(`Value passed ${value.name}`);
    }
}
