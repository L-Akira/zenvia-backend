import express, { Application, Router } from "express";
import * as http from 'http';
import { IController } from "../interfaces";
import { Methods } from "../interfaces/Methods";

export default class Server {
    private readonly app: Application;
    private readonly port: number;
    private readonly router: Router

    constructor(port?: number) {
        this.app = express();
        this.port = port || 3333;
        this.router = Router();
    }

    public run(): http.Server {
        return this.app.listen(this.port, () => {
            console.log(`Running at port ${this.port}`);
        });
    };

    public getServer(): Application {
        return this.app;
    }

    public getRouter(): Router {
        return this.router;
    }

    public setMiddlewares(middlewares: any[]): void {
        for(const middleware of middlewares) {
            this.app.use(middleware);
        }
    }

    public setControllers(controllers: IController[]): void {
        for (const controller of controllers) {
            for(const route of controller.routes) {
                
                if(route.methods === Methods.GET)
                    this.router.get(controller.commomPath + route.path, route.handler);                    
                
                if(route.methods === Methods.POST)
                    this.router.post(controller.commomPath + route.path, route.handler);
            }
        }
        this.app.use(this.router);
    }
}