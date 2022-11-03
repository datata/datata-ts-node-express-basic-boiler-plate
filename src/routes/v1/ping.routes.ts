import express from "express";
import { ping } from "../../controllers/ping.controller";

const router = express.Router();

router.get('/v1/ping', ping);

export { router };