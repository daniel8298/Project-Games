import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { verifyToken } from 'src/auth/helpers/jwt';
import TokenInterface, {
  UserPayloadInterface,
} from 'src/auth/interfaces/token';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const ctx = GqlExecutionContext.create(context);
      const req: UserPayloadInterface = ctx.getContext().req;
      const { headers } = req;
      const token = headers['x-auth-token'] as string;
      if (!token) return false;

      const userInfo = verifyToken(token) as TokenInterface;
      if (!userInfo) throw new Error();

      req.user = userInfo;

      return true;
    } catch (error) {
      return false;
    }
  }
}
