import { IRequest, IRequestHandler, RequestHandler } from "mediatr-ts";
import { Service } from "typedi";

export class ExportArtCommand implements IRequest<string> {
    name: string = "exportArt";
}

@RequestHandler(ExportArtCommand)
@Service()
export class ExportArtCommandHandler implements IRequestHandler<ExportArtCommand, string> {
    handle(value: ExportArtCommand): Promise<string> {
        return Promise.resolve(`Value passed ${value.name}`);
    }
}
