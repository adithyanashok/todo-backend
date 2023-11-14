import mongoose from "mongoose";

const EventSchema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        date: { type: Date, required: true },
        title: { type: String, required: true },
        desc: { type: String, required: true },
    },
    { timestamps: true }
);
export default mongoose.model("Event", EventSchema);