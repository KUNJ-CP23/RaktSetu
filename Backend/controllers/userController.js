const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $lookup: {
          from: "Roles",
          localField: "RoleID",
          foreignField: "RoleID",
          as: "RoleInfo",
        },
      },
      {
        $addFields: {
          RoleInfo: { $arrayElemAt: ["$RoleInfo", 0] },
        },
      },
      {
        $lookup: {
          from: "BloodGroups",
          localField: "BloodGroupID",
          foreignField: "BloodGroupID",
          as: "BloodGroupInfo",
        },
      },
      {
        $addFields: {
          BloodGroupInfo: { $arrayElemAt: ["$BloodGroupInfo", 0] },
        },
      },
      {
        $project: {
          _id: 1,
          UserName: "$Name",
          Email: "$Email",
          Phone: "$Phone",
          Gender: "$Gender", // ✅ corrected
          DOB: "$DOB", // ✅ corrected
          Location: "$Location",
          UserID: "$UserID",
          RoleName: "$RoleInfo.Name", // ✅ correcte
          BloodGroupName: "$BloodGroupInfo.Name", // ✅ corrected
          RHFactor: "$BloodGroupInfo.RHFactor",
        },
      },
    ]);

    users.forEach((element, index, array) => {
      console.log("DEMOOOO" + users[index].UserID);
    });
    console.log("adgfafkjl;ljhghf" + users.length);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ UserID: id });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user", error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await User.deleteOne({ UserID: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete role", error: error.message });
  }
};
// Insert User
exports.insertUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User inserted successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to insert user", error: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findOneAndUpdate({ UserID: id }, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

// Login User
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const bcrypt = require('bcryptjs'); // use this if passwords are hashed

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and Password are required" });

    const user = await User.findOne({ Email: email });

    if (!user) return res.status(404).json({ message: "User not found" });

  
    if (user.Password !== password)
      return res.status(401).json({ message: "Invalid credentials" });

    const payload = {
      id: user.UserID,
      role: user.Role,
      email: user.Email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.UserID,
        name: user.Name,
        email: user.Email,
        role: user.Role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};
