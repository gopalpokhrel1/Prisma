import express from 'express'
import { create_post, delete_post, get_post, update_post } from '../controllers/PostController.js';

const post_router = express.Router();

post_router
.get('/', get_post)
.post('/', create_post)
.patch('/:id', update_post)
.delete('/:id', delete_post)

export default post_router