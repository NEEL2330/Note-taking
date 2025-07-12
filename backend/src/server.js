import express from 'express';
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes)


app.get("/api/notes", (req,res) => {
    res.send("hello")
});

app.listen(5000, () => {
    console.log("Server started");
}); 