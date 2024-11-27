import { Schema, model } from "mongoose";

const jugadorSchema = new Schema({
    name:String,
    appat: String,
    number: Number
})

export const jugadorModel = model("Jugadores", jugadorSchema)