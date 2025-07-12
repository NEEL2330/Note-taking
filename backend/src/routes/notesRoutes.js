import express from "express"; 
import {CreateNote, PostNotes, UpdateNotes, DeleteNotes} from '../controller/notesController.js'

const router = express.Router() 

router.get("/", CreateNote);

router.post("/", PostNotes);

router.put("/:id", UpdateNotes);

router.delete("/:id", DeleteNotes);

export default router;