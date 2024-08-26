import { Module } from "@nestjs/common";
import { SeederService } from "./seeders.service";
import { RolesService } from "src/roles/roles.service";
import { RoleSeeder } from "./services/roles.seeder";

@Module({
    imports: [RolesService],
    providers: [SeederService, RoleSeeder]
})
export class SeederModule { }