import eventModel from "../model/event.model.js";
import todoDoneModel from "../model/todo.done.model.js";

export const createEvent = async (req, res, next) => {
    console.log(`event ${req.body}`)
    try {
        const event = new eventModel(req.body);
        const savedEvent = await event.save();
        res.json({ status: true, success: savedEvent });
    } catch (error) {
        throw error;
    }
}

export const getEvents = async (req, res, next) => {
    console.log(`getEvents ${req.params.id}`)
    const { userId } = req.params
    try {
        const event = await eventModel.find({ userId: req.params.id });
        console.log(event);
        res.json({ status: true, success: event });
    } catch (error) {
        throw error;
    }
}

export const deleteEvent = async (req, res, next) => {
    console.log(`delete ${req.params.id}`)
    const { id } = req.params
    try {
        const event = await eventModel.findById(req.params.id)

        if (!event) return res.status(404).json("Event not found")

        await eventModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted");

    } catch (error) {
        throw error;
    }
}

export const updateEvent = async (req, res, next) => {
    console.log(`edit ${req.body.date}`)
    const { id } = req.params
    try {
        const event = await eventModel.findById(req.params.id)

        if (!event) return res.status(404).json("Event not found")

        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                date: req.body.date,
                desc: req.body.desc,

            }
        },
            { new: true }
        )
        res.json({ status: true, message: "updated" });

    } catch (error) {
        throw error;
    }
}