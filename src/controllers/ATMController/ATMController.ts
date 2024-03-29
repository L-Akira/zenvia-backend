import { IController, IRoutes, Methods } from "@shared/interfaces";import { ObjectValidator } from "@shared/providers";
import { Request, Response } from "express";
import { RequestChecker, Withdrawer } from "./services";

export default class ATMController implements IController {
    public commomPath: string;
    public routes: Array<IRoutes>;

    constructor() {
        this.commomPath = '/atm';
        this.routes = [
            {
                path: '/withdraw',
                methods: Methods.GET,
                handler: this.withdrawCash,
            },
        ];
    }

    private async withdrawCash(request: Request, response: Response) {
        const requestChecker = new RequestChecker(new ObjectValidator);
        const isValidRequest = await requestChecker.execute(request.query);
        
        if(!isValidRequest)
            return response
                .status(400)
                .json({ 
                    message: 'Something in the request is missing or is invalid',
                    properties: {
                        type: 'BAD_REQUEST',
                        code: 400,
                    }
                });
        
        const withdrawer = new Withdrawer();
        const amount = Number(request.query.amount);
        const cash = await withdrawer.execute(amount);

        return response
            .status(200)
            .json({
                result: {
                    cash,
                    properties: {
                        code: 200,
                        type: 'SUCCESS',
                    }
                }
            });
    }
}
