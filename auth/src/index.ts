import express from "express";
import 'express-async-errors'
import {json} from 'body-parser'
import { currentuser } from "./routes/current-user";
import { signin } from "./routes/signin";
import { signout } from "./routes/signout";
import { signup } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
const app = express();

app.use(json())
// Routes
app.use(currentuser);
app.use(signin)
app.use(signout)
app.use(signup)

app.get('/api/user', (req, res)=>{
    res.send({
        "message":"Auth service is working fine!!"
    })
})

app.all('*', async (req, res)=>{
    throw new NotFoundError()
})
app.use(errorHandler)
// Start Server
app.listen(3000, ()=>{
    console.log("Listening auth service on 3000!!");
})