import express from "express";
import {json} from 'body-parser'
import { currentuser } from "./routes/current-user";
import { signin } from "./routes/signin";
import { signout } from "./routes/signout";
import { signup } from "./routes/signup";

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
// Start Server
app.listen(3000, ()=>{
    console.log("Listening auth service on 3000!!");
})