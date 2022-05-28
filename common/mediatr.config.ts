import { Mediator, mediatorSettings } from "mediatr-ts";

import InversifyResolver, { TypeDiResolver } from "./typedi.resolver";

mediatorSettings.resolver = new TypeDiResolver();

export const mediator = new Mediator();
