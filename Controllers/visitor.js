import visitorModel from "../Model/visitor.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";

const addVisitor = asyncWrapper(async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newVisitor = await visitorModel.create(req.body);
    return res.status(201).json(newVisitor);
});
const getAllVisitors = asyncWrapper(async (req, res, next) =>{
    const visitors = await visitorModel.find({});
    if(visitors){
        return res.status(201).json({
            nbHits: visitors.length,
            visitors
        });
    }
})

const visitorsControllers = {
    addVisitor,
    getAllVisitors
}
export default visitorsControllers;