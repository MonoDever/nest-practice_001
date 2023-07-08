import { HttpException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { User } from './repositories/user.entity';
import { UserInformation } from 'src/user-information/repositories/user-information.entity';
import { UserInformationService } from 'src/user-information/user-information.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { Http2ServerResponse } from 'http2';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
        private userInformationService: UserInformationService,
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    async findById(id): Promise<User[]>{
        return this.userRepository.find(id);
    }

    async create(user){
        const newUser = new User();
        newUser.username = user.username;
        newUser.firstname = user.firstname;
        newUser.lastname = user.lastname;
        newUser.active = user.lastname;

        const newUserInfo = new UserInformation();

        await this.userRepository.manager.transaction(async (transactionalEntitymanager) => {
            const newUserSuccessed = await transactionalEntitymanager.save(newUser)
            newUserInfo.userId = newUserSuccessed.id; 
            await transactionalEntitymanager.save(newUserInfo)
        })
        return newUser;
    }

    async updateUser(user){
        const updateUser = await this.userRepository.find({where: {id : user.id}});
        updateUser[0].username = user.username;
        updateUser[0].firstname = user.firstname;
        updateUser[0].lastname = user.lastname;


        await this.userRepository.manager.transaction(async (transactionalEntityManager) =>{
            await transactionalEntityManager.save(updateUser[0]);
            const updateUserInfo = await this.userInformationService.findByUserId(updateUser[0].id);
            Logger.log(`id: ${updateUser[0].id} \n ${JSON.stringify(updateUserInfo)}`);
            updateUserInfo[0].email = user.email;
            Logger.log(`email : ${user.email}`)
            await transactionalEntityManager.save(updateUserInfo);
        })
        Logger.log(JSON.stringify(updateUser[0]))
        return updateUser;
    }

    async deleteUser(id){
        const updateUser = await this.userRepository.find(id);
        updateUser[0].active = true;
        await this.userRepository.save(updateUser[0]);
    }
}