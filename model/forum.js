import mongoose from "mongoose";

const forumSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  schoolName:{ type: String, required: true },
  facultyName:{ type: String, required: true},
  departmentName:{ type: String, required: true}
});

const Forum = mongoose.model("Forum", forumSchema);

export default Forum;
