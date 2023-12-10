import mongoose from "mongoose";

const TodoScema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        title: { type: String, required: true },
        note: { type: String, required: true },
        time: { type: String, required: true },
        date: { type: Date, required: true },
        dateString: { type: String, required: true },

    },

    { timestamps: true }
);
export default mongoose.model("Todo", TodoScema);