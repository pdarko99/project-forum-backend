import Forum from "../../model/user.js";

const getAllForums = async (req, res) => {
  console.log(req.userData);
  try {
    const forums = await Forum.findById(req.userData.userId);

    res.status(200).json({
      message: "Successful",
      forums,
    });
  } catch (error) {
    console.log(error, 'from error');
    res.status(401).json({
      error: error,
      message: "Failed to retrieve forums",
    });
  }
};

export default getAllForums;
