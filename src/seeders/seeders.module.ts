import { Module } from "@nestjs/common";
import { SeederService } from "./seeders.service";
import { RolesService } from "src/roles/roles.service";

@Module({
    imports: [RolesService],
    providers: [SeederService]
})
export class SeederModule { }