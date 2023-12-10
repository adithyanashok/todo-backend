import todoModel from "../model/todo.model.js";
import donetodoModel from "../model/todo.done.model.js";
import moment from "moment-timezone";
import notesModel from "../model/notes.model.js";
export const addNote = async (req, res, next) => {
    console.log(`note ${req.body.date}`)
    try {

        const note = new notesModel(req.body);
        const savednote = await note.save();
        res.json({ status: true, success: savednote });
    } catch (error) {
        throw error;
    }
}

export const getNote = async (req, res, next) => {
    console.log(`get ${req.params.id}`)
    const { userId } = req.params

    try {
        const note = await notesModel.find({ userId: req.params.id });
        res.status(200).json(note);
    } catch (error) {
        throw error;
    }
}


export const deleteNote = async (req, res, next) => {
    console.log(`delete ${req.params.id}`)
    const { id } = req.params
    try {
        const todo = await notesModel.findById(req.params.id)

        if (!todo) return res.status(404).json({ status: false, message: "Note not found" })

        await notesModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ status: true, message: "Deleted" });

    } catch (error) {
        throw error;
    }
}

export const editNote = async (req, res) => {
    console.log("userid", req.body)
    try {
        // Find the note to edit
        const note = await notesModel.findById(req.params.id)
        if (!note) return res.status(404).json('Note not found')
        const editednote = await notesModel.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                desc: req.body.desc,

            }
        },
            { new: true }
        )
        res.status(200).json({ status: true, success: editednote });

    } catch (err) {
        console.log(err);
        throw err;
    }
}

