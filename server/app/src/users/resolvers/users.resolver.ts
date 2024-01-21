import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterUser } from '../dto/registerUser.input';
import { UsersService } from '../services/users.service';
import { UserObject } from '../models/user.model';
import { LoginUser } from '../dto/loginUser.input';
import { UpdateUser } from '../dto/updateUser.input';
import { AdminGuard } from '../../auth/guards/admin/admin.guard';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { CacheOneInterceptor } from '../../redis/cacheInterceptor';
import { GraphqlCacheKey } from '../../redis/graphqlCecheKey.decorator';
import { RegisteredUserGuard } from 'src/auth/guards/registerdUser/registeredUser.guard';
import { RegisteredAdminUserGuard } from 'src/auth/guards/registerdUser/registeredAdminUser.guard';

const pubsub = new PubSub();

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => String)
  @UsePipes(new ValidationPipe())
  async registerUser(@Args('inputUser') inputUser: RegisterUser) {
    try {
      const newUser = await this.usersService.register(inputUser);
      if (newUser) return 'User Register Success!';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Mutation(() => String)
  @UsePipes(new ValidationPipe())
  async loginUser(@Args('inputUser') inputUser: LoginUser) {
    try {
      const token = await this.usersService.login(inputUser);
      return token;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Query(() => [UserObject])
  @UseGuards(AdminGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheKey('users')
  async users() {
    try {
      const users = await this.usersService.findUsers();
      return users;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Query(() => UserObject)
  @UseGuards(RegisteredUserGuard)
  @UseInterceptors(CacheOneInterceptor)
  @GraphqlCacheKey('user')
  async user(@Args('id') id: number) {
    try {
      const user = await this.usersService.findUser(id);
      pubsub.publish('userSearch', { userSearch: 'success' });
      return user;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Mutation(() => String)
  @UseGuards(RegisteredUserGuard)
  async updateUser(
    @Args('id') id: number,
    @Args('inputUser') inputUser: UpdateUser,
  ) {
    try {
      const updatedUser = await this.usersService.update(id, inputUser);
      if (updatedUser) return 'User Update!';
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  @Mutation(() => String)
  @UseGuards(RegisteredAdminUserGuard)
  async deleteUser(@Args('id') id: number) {
    try {
      const userDeleted = await this.usersService.remove(id);
      if (userDeleted) return 'User Deleted!';
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Subscription(() => String)
  userSearch() {
    return pubsub.asyncIterator('userSearch');
  }
}
