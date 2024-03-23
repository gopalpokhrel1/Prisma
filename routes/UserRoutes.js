import express from 'express'
import  {create_user, delete_user, fetch_all_user, fetch_single_user, update_user} from '../controllers/UserController.js'


const user_router = express.Router();
user_router
.get('/', fetch_all_user)
.get('/:id', fetch_single_user)
.post('/', create_user)
.patch('/:id', update_user)
.delete('/:id', delete_user);



export default user_router