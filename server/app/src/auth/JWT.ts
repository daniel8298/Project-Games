import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.JWT_SECRET || "secret";

export const generateToken = (email: string) => {
  const expiresIn = "1h";
  const token = jwt.sign({ email }, secret, { expiresIn });
  return token;
};

export const verifyToken = (token: string, secretKey: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
