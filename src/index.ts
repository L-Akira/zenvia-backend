import Server from "@shared/infra/Server";
import ControllerRepository from "@repositories/ControllerRepository";
import MiddlewareRepository from "@repositories/MiddlewareRepository";

import "@shared/infra/index";
import "@controllers/index";

const server = new Server(3333);

const middlewares = MiddlewareRepository.distribute();
const controllers = ControllerRepository.distribute();

server.setMiddlewares(middlewares);
server.setControllers(controllers);
server.run();
