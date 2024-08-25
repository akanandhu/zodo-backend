import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { RoleSeeder } from "./services/roles.seeder";

@Injectable()
export class SeederService implements OnApplicationBootstrap {
    constructor(private readonly RolesSeeder: RoleSeeder) { }

    async onApplicationBootstrap() {
        console.log("Seeding started !!");
        await this.RolesSeeder.rolesSeeder();
    }
}