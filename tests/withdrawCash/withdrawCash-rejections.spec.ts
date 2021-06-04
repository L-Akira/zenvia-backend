import request from "supertest";
import Server from "@shared/infra/Server";
import { Application } from "express";
import MiddlewareRepository from "@repositories/MiddlewareRepository";
import ControllerRepository from "@repositories/ControllerRepository";

import "@controllers/index";
import "@shared/infra/index";

let app: Application;
let path: string;

let response = {
    message: "Something in the request is missing or is invalid",
    properties: {
        type: 'BAD_REQUEST',
        code: 400,
    }
}

describe("Withdraw cash endpoint rejections tests", () => {
    before(() => {
        const server = new Server();

        const middlewares = MiddlewareRepository.distribute();
        const controllers = ControllerRepository.distribute();

        server.setMiddlewares(middlewares);
        server.setControllers(controllers);

        app = server.getServer();
        path = '/atm/withdraw';
    });

    it("Should reject request with no value;", (done) => {     
        request(app)
        .get(path)
        .expect(400, response, done);
    });

    it("Should reject request with negative number;", (done) => {  
        request(app)
        .get(path + '?amount=-40')
        .expect(400, response, done);
    });

    it("Should reject request with decimal number;", (done) => {    
        request(app)
        .get(path + '?amount=80.5')
        .expect(400, response, done);
    });

    it("Should reject request with number not divisible by 10;", (done) => {  
        request(app)
        .get(path + '?amount=2021')
        .expect(400, response, done);
    });

    it("Should reject request with string and other characters;", (done) => {  
        request(app)
        .get(path + '?amount=$no number here!!!!')
        .expect(400, response, done);
    });
})