import { IsString, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @IsString() // ¡Aquí está el cambio!
  @MaxLength(100)
  name: string;

  @IsString() // ¡Aquí está el cambio!
  @MaxLength(255)
  description: string;

  @IsString() // ¡Aquí está el cambio!
  @MaxLength(255)
  image: string;

  @IsString() // ¡Aquí está el cambio!
  @MaxLength(255)
  languages: string;
}
