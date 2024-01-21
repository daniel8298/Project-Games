// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersResolver } from './users.resolver';
// import { UsersService } from '../services/users.service';
// import { UserInterface } from '../interfaces/usersInterfaces';
// import { userArrayToUpdate, usersArray } from '../../../test/usersArray';
// import { Repository } from 'typeorm';
// import { Users } from '../entities/user.entity';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CACHE_MANAGER } from '@nestjs/cache-manager';

// describe('UsersResolver', () => {
//   let usersResolver: UsersResolver;
//   let usersService: UsersService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UsersService,
//         UsersResolver,
//         {
//           provide: getRepositoryToken(Users),
//           useClass: Repository,
//         },
//         {
//           provide: CACHE_MANAGER,
//           useValue: {},
//         },
//       ],
//     }).compile();

//     usersService = module.get<UsersService>(UsersService);
//     usersResolver = module.get<UsersResolver>(UsersResolver);
//   });
//   it('should be defined', () => {
//     expect(usersResolver).toBeDefined();
//   });

//   describe('users', () => {
//     it('should return an array of users', async () => {
//       const usersData: UserInterface[] = usersArray;
//       jest
//         .spyOn(usersService, 'findUsers')
//         .mockImplementation(() => Promise.resolve(usersData));

//       const result = await usersResolver.users();
//       console.log(result);

//       expect(result).toEqual(usersData);
//     });
//   });

//   describe('user', () => {
//     it('should return a user object', async () => {
//       const userData: UserInterface[] = usersArray;
//       jest
//         .spyOn(usersService, 'findUser')
//         .mockImplementation((userId) =>
//           Promise.resolve(userData.find((user) => user.id === userId)),
//         );

//       const result = await usersResolver.user(2);
//       console.log(result);

//       expect(result).toEqual(userData[1]);
//     });
//   });

//   describe('updateUser', () => {
//     it('should return the updated user', async () => {
//       const userData: UserInterface[] = usersArray;
//       jest
//         .spyOn(usersService, 'update')
//         .mockImplementation(() => Promise.resolve(userArrayToUpdate));
//       // .mockImplementation((userId, updatedData) => {
//       //   const updatedUser = {
//       //     ...userData.find((user) => user.id === userId),
//       //     ...updatedData,
//       //   };
//       //   return Promise.resolve(updatedUser);
//       // });

//       const result = await usersResolver.updateUser(2, userArrayToUpdate);
//       console.log('update', result);

//       expect(result).toEqual(userArrayToUpdate);
//     });
//   });
// });

////////////////////////////////////
// import { Test, TestingModule } from '@nestjs/testing';
// import { UsersResolver } from './users.resolver';
// import { UsersService } from '../services/users.service';
// import { UserObject } from '../models/user.model';
// import { CACHE_MANAGER } from '@nestjs/cache-manager';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Users } from '../entities/user.entity';
// import { Repository } from 'typeorm';
// // import { UsersService } from './users.service';
// // import { UserType } from './dto/create-user.dto/create-user.dto';
// describe('UsersResolver', () => {
//   let usersResolver: UsersResolver;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         UsersResolver,
//         UsersService,
//         {
//           provide: getRepositoryToken(Users),
//           useClass: Repository,
//           useFactory: () => ({
//             user: jest.fn((id: number) => UserObject),
//             users: jest.fn(() => [UserObject]),
//           }),
//         },
//         {
//           provide: CACHE_MANAGER,
//           useValue: {},
//         },
//       ],
//     }).compile();
//     usersResolver = module.get<UsersResolver>(UsersResolver);
//   });
//   it('should be defined', () => {
//     expect(usersResolver).toBeDefined();
//   });
//   describe('user', () => {
//     it('should be user', async () => {
//       const user = await usersResolver.user(1);
//       expect(user).toEqual({
//         email: 'daniel12345@gmail.com',
//         firstName: 'avi',
//         id: 1,
//         isAdmin: true,
//         lastName: 'perez',
//         password:
//           '$2a$10$FBDwq..T8UUGDLtjlGpPzuJStBzeVdgQXO3R.vAaQ1JAfnfh5GnKG',
//       });
//     });
//   });
//   describe('users', () => {
//     it('is should be users', async () => {
//       const users = await usersResolver.users();
//       expect(users).toContain(UserObject);
//     });
//   });
// });

/////////////last ////////////////////////////

import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';

import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { Users } from '../entities/user.entity';
import { UsersService } from '../services/users.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { UpdateUser } from '../dto/updateUser.input';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useClass: Repository,
        },
        {
          provide: CACHE_MANAGER,
          // useClass: Cache,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('updateUser', () => {
    it('should update user and return the updated user', async () => {
      const userId = 1;
      const updateUserData: UpdateUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'daniel8298@gmail.com',
        password: 'A206209942z@',
      };

      const updatedUserMock = {
        id: userId,
        firstName: 'Daniel',
        lastName: 'Doe',
        email: 'daniel8298@gmail.com',
        password: 'A206209942z@',
        isAdmin: true,
      };

      jest
        .spyOn(service, 'update')
        .mockImplementation(async () => Promise.resolve(updatedUserMock));

      const result = await resolver.updateUser(userId, updateUserData);
      console.log('result', result);

      console.log('updatedUserMock', updatedUserMock);
      expect(result).toEqual(updatedUserMock);
    });

    it('should throw BadRequestException if update input is empty', async () => {
      const userId = 1;
      const updateUserData: UpdateUser = null; // or undefined

      await expect(resolver.updateUser(userId, updateUserData)).rejects.toThrow(
        BadRequestException,
      );
    });

    // Add more test cases as needed
  });
});
