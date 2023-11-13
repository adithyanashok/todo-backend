import todoModel from "../model/todo.model.js";
import donetodoModel from "../model/todo.done.model.js";

export const addATodo = async (req, res, next) => {
    console.log(`todoModel ${req.body}`)
    try {
        const todo = new todoModel(req.body);
        const savedTodo = await todo.save();
        res.json({ status: true, success: savedTodo });
    } catch (error) {
        throw error;
    }
}

export const getTodos = async (req, res, next) => {
    console.log(`get ${req.params.id}`)
    const { userId } = req.params
    try {
        const todo = await todoModel.find({ userId: req.params.id });
        console.log(todo);
        res.status(200).json(todo);
    } catch (error) {
        throw error;
    }
}

export const getDoneTodos = async (req, res, next) => {
    console.log(`get ${req.params.id}`)
    const { userId } = req.params
    try {
        const todo = await donetodoModel.find({ userId: req.params.id });
        console.log(todo);
        res.status(200).json(todo);
    } catch (error) {
        throw error;
    }
}

export const deleteTodos = async (req, res, next) => {
    console.log(`delete ${req.params.id}`)
    const { id } = req.params
    try {
        const todo = await todoModel.findById(req.params.id)

        if (!todo) return res.status(404).json("Todo not found")



        await todoModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted");

    } catch (error) {
        throw error;
    }
}

export const doneTodo = async (req, res, next) => {
    console.log(req.body);
    try {
        const doneTodo = new donetodoModel(req.body);
        const savedTodo = await doneTodo.save();
        res.json({ status: true, success: savedTodo });
    } catch (error) {
        throw error;
    }
}