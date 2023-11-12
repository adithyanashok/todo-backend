import { default as mongoose } from 'mongoose';
import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './router/user.router.js'
import todoRouter from './router/todo.router.js'
const app = express();

app.use(bodyParser.json())

app.use('/', userRouter)
app.use('/todo', todoRouter)
const port = 3000;

config();


const connect = () => {
    mongoose.connect(process.env.MONGODB).then(() => {
        console.log("MongoDB connected");
    })
}

app.listen(port, () => {
    connect();
    console.log(`server listening on port http://localhost:${port}/`);
});