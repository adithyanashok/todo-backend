import mongoose from "mongoose";

const DoneTodoScema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        title: { type: String, required: true },
        desc: { type: String, required: true },
    },
    { timestamps: true }
);
export default mongoose.model("DoneTodo", DoneTodoScema);