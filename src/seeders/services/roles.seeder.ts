import { RolesService } from "src/roles/roles.service"

export class RoleSeeder {
    constructor(private readonly rolesService: RolesService) { }
    async rolesSeeder() {
        await Promise.all(['super_admin', 'admin', 'user', 'doctor'].map(async (name) => {
            await this.rolesService.createRoles(name)
        }))
    }
}