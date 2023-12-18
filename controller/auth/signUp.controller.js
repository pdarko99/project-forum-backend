import User from "../../model/user.js";
import jwt from "jsonwebtoken";
import { hashPassword } from "./util.js";

const createUser = async (req, res) => {
  console.log(req.body);
  const user = { ...req.body };

  try {
    user.password = await hashPassword(user.password);

    const newUser = new User(user);

    const userResponse = await newUser.save();

    const token = jwt.sign({ email: user.email, userId: user._id }, "token", {
      expiresIn: "1h",
    });

    res.status(201).json({
      message: "User Created",
      token,
      expiresIn: 3600,
      userId: userResponse._id,
      firstName: userResponse.firstName
    });
  } catch (error) {
    console.log(error.message, 'from message');
    if(error.message.includes("E11000")){
      return res.status(401).json({ message: "Email already exists" });
    }
    res.status(500).json({
      error: error,
    });
  }
};

export default createUser;
