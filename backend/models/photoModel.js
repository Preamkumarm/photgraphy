import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
    name: {type:String, required: true},
    category: {type:String, reqired: true},
    image: {type:String, required: true}
})

const photoModel = mongoose.model("photo", photoSchema);

export default photoModel;