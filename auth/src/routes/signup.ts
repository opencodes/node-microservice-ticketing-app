import express, { Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

const router = express.Router();

router.post('/api/user/signup', [
    body('email')
        .isEmail()
        .withMessage('Expected a valid email'),
    body('password')
        .trim()
        .isLength({min:4, max:20})
        .withMessage('Expected valid password')
    ],(req:Request, res:Response)=>{
    const {email, password} = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }
    throw new DatabaseConnectionError();
    res.status(200).send({})
})

export {router as signup}