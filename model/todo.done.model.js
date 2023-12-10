import mongoose from "mongoose";

const DoneTodoScema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        title: { type: String, required: true },
        note: { type: String, required: true },
        time: { type: String, required: true },
        date: { type: Date, required: true },
    },
    { timestamps: true }
);
export default mongoose.model("DoneTodo", DoneTodoScema);