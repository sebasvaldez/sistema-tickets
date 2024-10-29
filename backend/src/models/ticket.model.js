import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    enum:["unrealized", "in progress", "completed"],
    default: "unrealized",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // assignedUser: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
},{
    timestamps: true,
});


export default mongoose.model("Ticket", ticketSchema);
