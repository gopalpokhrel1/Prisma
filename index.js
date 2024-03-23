import express from 'express';
import dotenv from 'dotenv';
import user_router from './routes/UserRoutes.js';
import post_router from './routes/PostRoutes.js';
import comment_router from './routes/CommentRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/user', user_router)
app.use('/post', post_router)
app.use('/comment', comment_router)
app.listen(8080, ()=> console.log("server started"));