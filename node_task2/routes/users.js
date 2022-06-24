import express from 'express';

import {getUser,createUser,getUserWithId,deleteUser,updateUser} from '../controllers/users.js';


const router = express.Router();
router.get('/', getUser);//('/user/')
router.post('/', createUser);//for creating a new user
router.get('/:id', getUserWithId);//getting user details using id
router.delete('/:id',deleteUser);//for deleting a user
router.patch('/:id',updateUser);//patch is used to modify partial data,whereas put is used to modify complete data
export default router;