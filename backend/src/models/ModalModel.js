import mongoose from "mongoose";

const ModalModel = new mongoose.Schema({
    width: { type: Number, required: true },
    height: { type: Number, required: true },
});

export default mongoose.model("Modal", ModalModel);
