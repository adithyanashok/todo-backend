import eventModel from "../model/event.model.js";

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