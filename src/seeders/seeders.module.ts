import { Module } from "@nestjs/common";
import { SeederService } from "./seeders.service";
import { RolesModule } from "src/roles/roles.module";
import { RoleSeeder } from "./services/roles.seeder";

@Module({
    imports: [RolesModule],
    providers: [SeederService, RoleSeeder]
})
export class SeederModule { }