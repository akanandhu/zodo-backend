import { Injectable } from "@nestjs/common";
import { RoleSeeder } from "./services/roles.seeder";

@Injectable()
export class SeederService {
    constructor(private readonly RolesSeeder: RoleSeeder) { }

    async onApplicationBootstrap() {
        console.log("hitting")
        await this.RolesSeeder.rolesSeeder();
    }
}