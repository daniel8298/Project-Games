interface TokenInterface {
  id: number;
  firstName: string;
  isAdmin: boolean;
  iat?: number;
}

export interface UserPayloadInterface extends Request {
  user: TokenInterface;
}

export default TokenInterface;
