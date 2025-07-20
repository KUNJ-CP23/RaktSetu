const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    UserID: {
      type: Number,
      required: true,
      unique: true,
    },

    Name: {
      type: String,
      required: true,
      trim: true,
    },

    Email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },

    Phone: {
      type: String,
      trim: true,
    },

    Password: {
      type: String,
      required: true,
    },

    // 🔗 Referencing Role collection
    RoleID: {
      type: Number,
      ref: 'Role',
      required: true,
    },

    Gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },

    DOB: {
      type: Date,
    },

    // 🔗 Referencing BloodGroup collection
    BloodGroupID: {
      type: Number,
      ref: 'BloodGroup',
    },

    Location: {
      type: String,
    },

    LastDonationDate: {
      type: Date,
    },

    PrivacySettings: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    GovernmentIDProof: {
      type: String,
    },

    ProfileImage: {
      type: String,
    },

    Verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'CreatedAt',
      updatedAt: 'ModifiedAt',
    },
  }
);

// ✅ Export model and explicitly set collection name to 'Users'
module.exports = mongoose.model('User', userSchema, 'Users');