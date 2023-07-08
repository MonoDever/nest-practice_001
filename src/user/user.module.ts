import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './repositories/user.entity';
import { UserInformationModule } from 'src/user-information/user-information.module';


@Module({
    imports: [TypeOrmModule.forFeature([User]),
    UserInformationModule
],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
