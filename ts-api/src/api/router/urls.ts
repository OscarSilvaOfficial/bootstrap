import { Router } from 'express'
import { Controller } from '../controller/index'

export const router = Router()

router.get('/', Controller.select)
router.post('/', Controller.insert)
//router.patch('/:user_id', Controller.update)
//router.delete('/:user_id', Controller.delete)