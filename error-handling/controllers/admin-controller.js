const Admin = require("../models/Admin");
const User = require("../models/User");

const getAllAdmins = async (req, res) => {
  const admin = await Admin.find();
  res.status(200).json({ admin });
};

const createAdmin = async (req, res) => {
  try {
    const { title, userId } = req.body;

    // Check if the user with the given userId exists
    const userExists = await User.exists({ _id: userId });

    if (!userExists) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create the admin document with the provided userId
    const admin = await Admin.create({ title, user: userId });

    res.status(201).json({ admin });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllAdmins,
  createAdmin,
};
