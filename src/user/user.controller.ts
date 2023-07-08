import { Controller,Get,Post,Body,Put, Patch } from '@nestjs/common';
import { UserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    async findAll(): Promise<UserDTO[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findById(id): Promise<UserDTO[]> {
        return this.userService.findById(id);
    }

    @Post('')
    create(@Body() createUserDto: UserDTO) {
        this.userService.create(createUserDto);
        return createUserDto;
    }
    @Put('')
    updateUser(@Body() updateUserDto: UserDTO){
        this.userService.updateUser(updateUserDto);
        return updateUserDto;
    }
    @Patch('')
    deleteUser(@Body() id: number){
        this.userService.deleteUser(id);
        return "success";
    }
    // @Post('UpdateUserInfo')
    // updateUserInfo(@Body() )
}
