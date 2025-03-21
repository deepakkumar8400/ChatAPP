import mongoose from 'mongoose';

const conversationModel=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
   }],
    message:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
   }]
},{timestamp:true})

export const Conversation=mongoose.model("conversationModel",conversationModel);
