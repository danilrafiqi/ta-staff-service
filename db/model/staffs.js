const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    role: {
      type: String,
      enum: ["SUPPORT", "ACCOUNTING", "MARKETING", "ADMIN"]
    },
    staff_status: {
      type: String,
      enum: ["active", "suspended", "not active", "deleted"]
    },
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff"
    },
    foto: { type: String },
    activated_at: { type: Date },
    suspended_at: { type: Date },
    suspended_reason: { type: String },
    deleted_at: { type: String }
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
