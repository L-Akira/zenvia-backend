import MiddlewareRepository from "@repositories/MiddlewareRepository";
import cors from "cors";
import express from "express";

MiddlewareRepository.collect(cors());
MiddlewareRepository.collect(express.json());