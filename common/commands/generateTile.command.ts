import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";

export class GenerateTileCommand implements IRequest<string> {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

@RequestHandler(GenerateTileCommand)
export class GenerateTileCommandHandler implements IRequestHandler<GenerateTileCommand, string> {
    handle(value: GenerateTileCommand): Promise<string> {
        return Promise.resolve(`Value passed ${value.name}`);
    }
}
