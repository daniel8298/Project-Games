import mongoose, { Schema, Document } from "mongoose";
import { transporter } from "../../nodemailer/transporter";
import { mailOptions } from "../../nodemailer/mailOptions";
import { mailOptionsInterface } from "../../interfaces/mailOptionsInterface";

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
});

interface UserDocument extends Document {
  _id: any;
  email: string;
  password?: string;
}

UserSchema.pre<UserDocument>("save", function () {
  const details: mailOptionsInterface = {
    to: this.email,
  };
  transporter.sendMail(mailOptions(details), function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

export const User = mongoose.model<UserDocument>("User", UserSchema);
