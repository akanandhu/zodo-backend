import { IsString, IsEnum, IsEmail, IsOptional, IsBoolean, IsUUID } from 'class-validator';
// import { GenderType } from 'src/users/entity/users.entity';
// import { GenderType } from '../enums/gender-type.enum'; // Assuming you have an enum defined for GenderType
enum GenderType {
  MALE = 'm',
  FEMALE = 'f',
  OTHER = 'o',
}
export class CreateUserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEnum(GenderType)
  gender: GenderType;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsOptional()
  @IsString({ each: true })
  roles?: string[]; // Assuming you'll send role names
}