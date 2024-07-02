import mongoose from "mongoose";
import {model, Schema} from "mongoose";

const visitorSchema = new mongoose.Schema({
    client_ip: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    greeting: {
        type: String,
        required: true
    }
});
const visitorModel = mongoose.model('visitor', visitorSchema);
export default visitorModel;