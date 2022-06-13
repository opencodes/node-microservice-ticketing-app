import express from 'express'

const router = express.Router();

router.post('/api/user/signin', (req,res)=>{
    res.status(200).send({})
})

export {router as signin}