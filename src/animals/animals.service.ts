import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnimalsService {
  db: PrismaService
  constructor(db: PrismaService){
    this.db = db;
  }

  create(createAnimalDto: CreateAnimalDto) {
    return this.db.animals.create({
      data: createAnimalDto
    })
  }

  findAll() {
    return this.db.animals.findMany();
  }

  async findOne(id: number) {
    return await this.db.animals.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return await this.db.animals.update({
      where: {
        id:id,
      },
      data: updateAnimalDto
    })
  }

  remove(id: number) {
    return this.db.animals.delete({
      where: {
        id: id
      }
    })
  }
}
