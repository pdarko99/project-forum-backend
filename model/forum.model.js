import mongoose from "mongoose";

const forumSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Forum = mongoose.model("Forum", forumSchema);

export default Forum;
