import Forum from "../../model/forum.js";

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
  let forum = { ...req.body };
  forum.userId = req.userData.userId;
  try {
    const newForum = new Forum(forum);

    const forumResponse = await newForum.save();

    const link = `forum/${forumResponse._id}/${forumResponse.name}`;

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

export { createForum, getAllForums };
