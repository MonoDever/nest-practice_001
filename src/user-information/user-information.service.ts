import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInformation } from './repositories/user-information.entity';

@Injectable()
export class UserInformationService {
    constructor(
        @InjectRepository(UserInformation)
        private readonly userInformationRepository:Repository<UserInformation>,
    ){}

    async findAll(): Promise<UserInformation[]>{
        return this.userInformationRepository.find();
    }

    // async findByid(id): Promise<UserInformation[]>{
    //     return this.userInformationRepository.find(id);
    // }

    async findByUserId(userId): Promise<UserInformation[]>{
        return this.userInformationRepository.find({where: {userId: userId}});
    }

    create(userInfo){
        const newUserInfo = new UserInformation();
        newUserInfo.userId = userInfo.userId;
        newUserInfo.email = userInfo.email;
        newUserInfo.address = userInfo.address;
        newUserInfo.mobile = userInfo.mobile;
        this.userInformationRepository.save(newUserInfo);
    }

    async updateUserInformation(userInfo){
        const updateUserInfo = await this.userInformationRepository.find(userInfo.id);
        updateUserInfo[0].email = userInfo.email;
        updateUserInfo[0].address = userInfo.address;
        updateUserInfo[0].mobile = userInfo.mobile;
        await this.userInformationRepository.save(updateUserInfo[0]); 
    }
}
