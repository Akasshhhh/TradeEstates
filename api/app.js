import express from "express";
import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";
import testRoutes from "./routes/test.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import messageRoutes from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config()

const app = express()

app.use(cors({origin: process.env.CLIENT_URL, credentials: true})) //We need credentials as true if we are going to use cookies
app.use(express.json())
app.use(cookieParser())

app.use('/api/posts', postRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/test', testRoutes)
app.use('/api/users', userRoutes)
app.use('/api/chats', chatRoutes)
app.use('/api/messages', messageRoutes)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");

})

