import { CacheInterceptor } from '@nestjs/cache-manager';
import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
@Injectable()
export class CacheOneInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getArgs();
    const args = ctx.id ? ctx.id : ctx.email ? ctx.email : undefined;
    const key = this.reflector.get('graphqlCacheKey', context.getHandler());
    if (args && key) {
      return `${key} : ${args}`;
    }
    return undefined;
  }
}
