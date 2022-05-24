import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";

export class ExportArtCommand implements IRequest<string> {
    name: string = "exportArt";
}

@RequestHandler(ExportArtCommand)
export class ExportArtCommandHandler implements IRequestHandler<ExportArtCommand, string> {
    handle(value: ExportArtCommand): Promise<string> {
        return Promise.resolve(`Value passed ${value.name}`);
    }
}
