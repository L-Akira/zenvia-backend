import ControllerRepository from "@repositories/ControllerRepository";
import ATMController from "./ATMController/ATMController";

ControllerRepository.collect(new ATMController());
