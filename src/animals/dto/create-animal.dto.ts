import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateAnimalDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    breed: string

    @IsInt()
    @IsNotEmpty()
    age: number

    @IsString()
    @IsOptional()
    adoptiveName?: string
}
