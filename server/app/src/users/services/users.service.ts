import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUser } from '../dto/registerUser.input';
import { LoginUser } from '../dto/loginUser.input';
import { comparePassword, generateUserPassword } from '../helpers/bcrypt';
import { UpdateUser } from '../dto/updateUser.input';
import { generateAuthToken } from '../../auth/helpers/jwt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Users } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async register(userInput: RegisterUser) {
    try {
      const { email } = userInput;
      const userExist = await this.usersRepository.existsBy({ email });
      if (userExist) throw new Error('user Already Exists');
      const encryptedPassword = generateUserPassword(userInput.password);
      if (encryptedPassword) userInput.password = encryptedPassword;
      const newUser = this.usersRepository.create(userInput);
      await this.usersRepository.save(newUser);
      await this.cacheManager.reset();
      return newUser;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async login(userInput: LoginUser) {
    try {
      const { email, password: passwordFromClient } = userInput;
      const userFromDb = await this.usersRepository.findOne({
        where: { email },
      });
      if (!userFromDb) throw new Error('Invalid email or password');
      const { id, firstName, isAdmin, password: passwordFromDb } = userFromDb;
      const isPasswordValid = comparePassword(
        passwordFromClient,
        passwordFromDb,
      );
      if (!isPasswordValid) throw new Error('Invalid email or password');
      const token = generateAuthToken({ id, firstName, isAdmin });
      return token;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findUsers() {
    try {
      const usersFromDb = await this.usersRepository.find();
      console.log('usersFromDb', usersFromDb);

      if (!usersFromDb.length) throw new Error('no any users');
      console.log('Users from Db');
      return usersFromDb;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findUser(id: number) {
    try {
      const userFromDb = await this.usersRepository.findOne({
        where: { id },
      });
      if (!userFromDb) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      console.log('user from DB!');
      return userFromDb;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async update(id: number, userInput: UpdateUser) {
    try {
      if (!userInput) {
        throw new BadRequestException('Update input is empty.');
      }
      const userToUpdate = await this.usersRepository.findOne({
        where: { id },
      });
      if (!userToUpdate) throw new Error(`User with id ${id} not found`);
      this.usersRepository.merge(userToUpdate, userInput);
      const updatedUser = await this.usersRepository.save(userToUpdate);
      if (!updatedUser) throw new Error(`User with id ${id} not update`);
      await this.cacheManager.reset();
      return updatedUser;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async remove(id: number) {
    try {
      const userToDelete = await this.usersRepository.findOne({
        where: { id },
      });
      if (!userToDelete) throw new Error(`User with id ${id} not found`);
      const userDeleted = await this.usersRepository.remove(userToDelete);
      if (!userDeleted) throw new Error(`User with id ${id} not deleted`);
      await this.cacheManager.reset();
      return userDeleted;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
