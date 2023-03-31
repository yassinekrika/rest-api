import express from 'express'

const router = express.Router()

router.get('/', (req, res)=> {
    res.send('we are on user')
})

export default router