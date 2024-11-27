import mongoose from "mongoose";
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { test } from "./backend/controllers/jugadores.controller.js";

dotenv.config()

mongoose.connect(process.env.db_url)
.then(()=>{
    console.log("Si hay conexion")
})
.catch((error)=>{
    console.log("no jala", error)
})

const app = express();
app.use(cors())
app.listen(4001, ()=>{
    console.log("se escucha")
})

test()