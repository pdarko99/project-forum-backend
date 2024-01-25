import Forum from "../../model/forum.js";
import User from "../../model/user.js";

const getAllForums = async (req, res) => {
  try {
    const forums = await Forum.find({ userId: req.userData.userId });

    res.status(200).json({
      message: "Successful",
      forums,
    });
  } catch (error) {
    res.status(401).json({
      error: error,
      message: "Failed to retrieve forums",
    });
  }
};

const createForum = async (req, res) => {
  const url = "http://localhost:4200/home";
  let forum = { ...req.body };
  forum.userId = req.userData.userId;
  try {
    const newForum = new Forum(forum);

    const forumResponse = await newForum.save();

    const link = `${url}/${forumResponse._id}`;

    res.status(200).json({
      message: "Successful",
      link,
    });
  } catch (error) {
    res.status(401).json({
      error: error,
      message: "Failed to create forum",
    });
  }
};

const appendForumId = async () => {
  let forumIdToBeAdded = req.forum.forumIdToBeAdded;
  try {
    // Step 1: Retrieve the User Document
    const user = await User.findById(req.userData.userId);

    if (!user) return res.status(401).json({ message: "User not found" });

    user.forumField.push(forumIdToBeAdded);

    await user.save();

    res.status(200).json({
      message: "Successful",
      link,
    });
  } catch (error) {
    res.status(401).json({
      error: error,
      message: "Failed to add forum",
    });
  }
};

export { appendForumId, createForum, getAllForums };
