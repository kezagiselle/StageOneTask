import express from 'express';
const Router = express.Router();
import visitorRouter from "./visitor.js";

Router.use('/visitors', visitorRouter);

export default Router;