import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,

}))

app.use(express.json({limit:"16kb"}))//These all are used to setup backend these are only the major setup we use
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes
import userRouter from "./routes/user.routes.js";

//routes declaration

app.use("/api/v1/users",userRouter)

// http://localhost:8000/api/v1/users/register ---> url  aise banegi
export { app }