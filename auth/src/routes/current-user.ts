import express from 'express'

const router = express.Router();

router.get('/api/user/currentuser', (req,res)=>{
    res.status(200).send({})
})

export {router as currentuser}