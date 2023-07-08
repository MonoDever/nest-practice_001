import { IsString, IsInt,IsBoolean} from 'class-validator';

export class UserDTO {
    @IsString()
    username:string;
    @IsString()
    firstname:string;
    @IsString()
    lastname:string;
    @IsBoolean()
    active:boolean;
}