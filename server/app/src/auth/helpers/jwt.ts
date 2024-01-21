import { sign, verify } from 'jsonwebtoken';
import TokenInterface from '../interfaces/token';
import { config } from 'dotenv';
config();

const { JWT_KEY } = process.env;

export const generateAuthToken = (user: TokenInterface) =>
  sign(user, JWT_KEY, { expiresIn: '1h' });

export const verifyToken = (tokenFromClient: string) =>
  verify(tokenFromClient, JWT_KEY);
