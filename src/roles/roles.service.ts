import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from './entity/roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Roles)
  private readonly rolesRepository: Repository<Roles>) { }

  async create(createRoleDto: CreateRoleDto) {
    const roleData = new Roles();
    roleData.title = createRoleDto.name
    roleData.created_at = new Date();
    return await this.rolesRepository.save(roleData)
  }

  async createOrSkip(createRoleDto: CreateRoleDto) {
    const role = await this.rolesRepository.findOne({
      where: {
        title: createRoleDto.name
      }
    })
    if (!role) {
      const roleData = new Roles();
      roleData.title = createRoleDto.name;
      roleData.created_at = new Date();
      await this.rolesRepository.save(roleData)

    } else {
      return "Role already exists";
    }
  }

  async findAll(role: string) {
    const roles = await this.rolesRepository.find({
      where: {
        title: role
      }
    })

    return roles
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }

  async createRoles(role: string) {
    if (this.findAll(role)) {
      console.log("hitting")
      return "Role Already Exists"
    } else {
      console.log("hitting-else")
      await this.create({
        name: role
      })
    }
  }
}
