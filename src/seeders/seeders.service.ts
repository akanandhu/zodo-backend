import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { RoleSeeder } from "./services/roles.seeder";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class SeederService implements OnApplicationBootstrap {
    constructor(private readonly rolesSrvice: RolesService) { }

    async onApplicationBootstrap() {
        console.log("Seeding started !!");
        // await this.rolesSeeder.rolesSeeder();
    }
}