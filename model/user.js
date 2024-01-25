import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true, default: false },
  forumField: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Forum",
      required: false,
    },
  ],
});

const User = mongoose.model("User", usersSchema);

export default User;
