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
    result: {
      cash: {
        "100x": 0,
        "50x": 0,
        "20x": 0,
        "10x": 0,
      },
      properties: {
        code: 200,
        type: "SUCCESS"
      }
    }
  }

describe('Withdraw cash endpoint successes tests', () => {
    before(() => {
        const server = new Server();

        const middlewares = MiddlewareRepository.distribute();
        const controllers = ControllerRepository.distribute();

        server.setMiddlewares(middlewares);
        server.setControllers(controllers);

        app = server.getServer();
        path = '/atm/withdraw';
    });

    afterEach(() => {
        const { cash } = response.result;
        cash["100x"] = cash["50x"] = cash["20x"] = cash["10x"] = 0;
    })

    it("Should return 1 bank note of R$100 for R$100,00 requested;", (done) => {
        response.result.cash["100x"] = 1;

        request(app)
        .get(path + '?amount=100')
        .expect(200, response, done);
    });

    
    it("Should return 1 bank note of R$50 for R$50,00 requested;", (done) => {
        response.result.cash["50x"] = 1;

        request(app)
        .get(path + '?amount=50')
        .expect(200, response, done);
    });

    it("Should return 1 bank note of R$20 for R$20,00 requested;", (done) => {
        response.result.cash["20x"] = 1;

        request(app)
        .get(path + '?amount=20')
        .expect(200, response, done);
    });

    it("Should return 1 bank note of R$10 for R$10,00 requested;", (done) => {
        response.result.cash["10x"] = 1;

        request(app)
        .get(path + '?amount=10')
        .expect(200, response, done);
    });
   
    it("Should return 1 bank note of R$50, 1 bank note of R$20 and 1 bank note of R$10 for R$80,00 requested;", (done) => {
        const { cash } = response.result;
        cash["50x"] = cash["20x"] = cash["10x"] = 1;

        request(app)
        .get(path + '?amount=80')
        .expect(200, response, done);
    });

    it("Should return 450 bank notes of R$100, 1 bank note of R$20 an 1 bank note of R$10 for R$45.030,00 requested;", (done) => {
        const { cash } = response.result;
        cash["100x"] = 450;
        cash["20x"] = cash["10x"] = 1;

        request(app)
        .get(path + '?amount=45030')
        .expect(200, response, done);
    });

    it("Should return 10000 bank notes of R$100 and 1 bank note of R$20 for R$1.000.000.020,00 requested;", (done) => {
        const { cash } = response.result;
        cash["100x"] = 10000000;
        cash["20x"] = 1;

        request(app)
        .get(path + '?amount=1000000020')
        .expect(200, response, done);
    });
})