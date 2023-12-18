import mongoose from "mongoose";

const forumSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true},
});

const User = mongoose.model("Forum", forumSchema);

export default User;
