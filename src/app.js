import express from "express";
import config from "./config";

const app = express()

//setting
app.set('port', config.port)

export default app