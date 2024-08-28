import { IsString, IsEnum, IsEmail, IsOptional, IsBoolean, IsUUID } from 'class-validator';
// import { GenderType } from 'src/users/entity/users.entity';
// import { GenderType } from '../enums/gender-type.enum'; // Assuming you have an enum defined for GenderType
enum GenderType {
  MALE = 'm',
  FEMALE = 'f',
  OTHER = 'o',
}
export class CreateDoctorDto {
  @IsOptional()
  @IsString()
  user_id?: string;  

  @IsOptional()
  @IsString()
  specilisation?: string;

  @IsOptional()
  @IsBoolean()
  is_online?: boolean;

}