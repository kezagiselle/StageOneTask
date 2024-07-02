import visitorsControllers from "../Controllers/visitor.js";
import express from 'express';
const visitorRouter = express.Router();

visitorRouter.post('/add',visitorsControllers.addVisitor);
visitorRouter.get('/getAll', visitorsControllers.getAllVisitors);

export default visitorRouter;