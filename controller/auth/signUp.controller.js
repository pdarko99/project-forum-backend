import jwt from "jsonwebtoken";
import User from "../../model/user.js";
import { hashPassword } from "./util.js";

const createUser = async (req, res) => {
  const user = { ...req.body };

  try {
    user.password = await hashPassword(user.password);

    const newUser = new User(user);
    console.log(newUser, "from newUser");

    const userResponse = await newUser.save();
    console.log(userResponse, "from userResponse");

    const token = jwt.sign(
      { email: user.email, userId: userResponse._id },
      "token",
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({
      message: "User Created",
      token,
      expiresIn: 3600,
      userId: userResponse._id,
      firstName: userResponse.firstName,
    });
  } catch (error) {
    if (error.message.includes("E11000")) {
      return res.status(401).json({ message: "Email already exists" });
    }
    res.status(500).json({
      error: error,
    });
  }
};

export default createUser;
