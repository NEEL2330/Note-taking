export const CreateNote = (req,res) => {
    res.send("hello")
};

export const PostNotes = (req,res) => {
    res.json({message: "Posted successfullly"});
};

export const UpdateNotes = (req,res) => {
    res.json({message: "Updated successfullly"});
};

export const DeleteNotes = (req,res) => {
    res.json({message: "Deleted"});
};