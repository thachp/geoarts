import { Mediator, mediatorSettings } from "mediatr-ts";

import TypeDiResolver from "./typedi.resolver";

mediatorSettings.resolver = new TypeDiResolver();

export const mediator = new Mediator();
