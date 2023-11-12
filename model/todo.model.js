import mongoose from "mongoose";

const TodoScema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        title: { type: String, required: true },
        desc: { type: String, required: true },
    },
    { timestamps: true }
);
export default mongoose.model("Todo", TodoScema);