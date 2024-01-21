import { SetMetadata } from '@nestjs/common';

export const GraphqlCacheKey = (cacheKeyValue: string) =>
  SetMetadata('graphqlCacheKey', cacheKeyValue);
