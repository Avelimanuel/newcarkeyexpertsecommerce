import {Router} from 'express'

const router = Router()


router.get("/" , (req,res) =>{
    return res.status(200).json({message:"All car batteries fetched"})
})

export {router as carBatRouter}