import { IController, IRepository } from "@shared/interfaces";

class ControllerRepository implements IRepository {
    private readonly controllers: Array<IController>; 

    constructor() {
        this.controllers = [];
    }

    public collect(controller: IController): void {
        this.controllers.push(controller);
    }

    public distribute(): Array<IController> {
        return this.controllers;
    }
}


export default new ControllerRepository();