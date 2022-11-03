import express, { Router } from 'express'
import { ping } from '../../controllers/ping.controller'

const router: Router = express.Router()

router.get('/v1/ping', ping)

export default router
