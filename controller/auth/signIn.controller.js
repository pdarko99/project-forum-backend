import jwt from "jsonwebtoken";
import User from "../../model/user.js";
import { comparePassword } from "./util.js";

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
      .populate("forumField")
      .exec();

    if (!user)
      return res.status(401).json({ message: "Email or password is wrong" });

    console.log(user);
    const validPassword = await comparePassword(
      req.body.password,
      user.password
    );

    if (!validPassword)
      return res.status(401).json({ message: "Email or password is wrong" });

    const token = jwt.sign({ email: user.email, userId: user._id }, "token", {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Auth Successful",
      token,
      expiresIn: 3600,
      userId: user._id,
      firstName: user.firstName,
      forum: user.forumField,
    });
  } catch (error) {
    res.status(401).json({
      error: error,
      message: "Auth Failed",
    });
  }
};

export default userLogin;
