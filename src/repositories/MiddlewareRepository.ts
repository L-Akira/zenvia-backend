import { IRepository } from "@shared/interfaces";

class MiddlewareRespository implements IRepository {
    private readonly middlewares: Array<any>;

    constructor() {
        this.middlewares = [];
    }

    collect(middleware: any): void {
        this.middlewares.push(middleware);
    }

    distribute(): Array<any> {
        return this.middlewares;
    }
}

export default new MiddlewareRespository();
