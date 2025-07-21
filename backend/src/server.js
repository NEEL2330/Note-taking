import express from 'express';
import cors from 'cors'
import dotenv from "dotenv"

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();



//Middleware
app.use(cors())
app.use(express.json());
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and URL is ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server started");
    })
});