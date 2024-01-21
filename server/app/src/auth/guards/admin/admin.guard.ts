import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { verifyToken } from '../../../auth/helpers/jwt';
import TokenInterface from '../../../auth/interfaces/token';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const ctx = GqlExecutionContext.create(context);
      const req: Request = ctx.getContext().req;
      const { headers } = req;
      const token = headers['x-auth-token'] as string;

      if (!token) throw new Error();
      const userInfo = verifyToken(token) as TokenInterface;

      if (!userInfo.isAdmin) throw new Error();

      return true;
    } catch (error) {
      return false;
    }
  }
}
