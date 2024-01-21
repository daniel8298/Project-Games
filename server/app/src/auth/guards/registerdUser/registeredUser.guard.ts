import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { verifyToken } from '../../helpers/jwt';
import TokenInterface, { UserPayloadInterface } from '../../interfaces/token';

@Injectable()
export class RegisteredUserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const ctx = GqlExecutionContext.create(context);
      const req: UserPayloadInterface = ctx.getContext().req;
      const { headers } = req;
      const paramsValue = ctx.getArgs();
      const token = headers['x-auth-token'] as string;
      if (!token) return false;

      const userInfo = verifyToken(token) as TokenInterface;
      if (userInfo.id !== paramsValue.id) throw new UnauthorizedException();

      return true;
    } catch (error) {
      return false;
    }
  }
}
