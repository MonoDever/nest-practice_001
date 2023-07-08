import { Module } from '@nestjs/common';
import { UserInformationService } from './user-information.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInformation } from './repositories/user-information.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserInformation])],
    providers: [UserInformationService],
    exports: [UserInformationService]
})
export class UserInformationModule {}
