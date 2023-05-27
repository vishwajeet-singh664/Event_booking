import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
const router= express.Router()


//create new User
// router.post('/', createUser)
//update User
router.put('/:id',verifyUser , updateUser)
//delete User
router.delete('/:id',verifyAdmin , deleteUser)
//getsingle User
router.get('/:id',verifyUser , getSingleUser)
//getall User
router.get('/',verifyAdmin , getAllUser)

export default router;