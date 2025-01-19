import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(240)
  name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(240)
  description: string;
}
