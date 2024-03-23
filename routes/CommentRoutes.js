import express from 'express'
import { create_comment, delete_comment, get_comment, update_comment } from '../controllers/CommentController.js';
const comment_router = express.Router();

comment_router
.get("/", get_comment)
.post("/", create_comment)
.patch("/:id", update_comment)
.delete("/:id", delete_comment)

export default comment_router