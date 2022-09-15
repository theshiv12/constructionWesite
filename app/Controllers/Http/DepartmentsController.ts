import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
// import Role from 'App/Models/Role';
import Department from 'App/Models/Department';
import DepartmentRole from 'App/Models/DepartmentRole';
import CreatedepartmentValidator from 'App/Validators/CreatedepartmentValidator';
import CreatedepartmentRoleValidator from 'App/Validators/CreatedepartmentroleValidator';
// import CreateRoleValidatore from 'App/Validators/CreateroleValidator'
export default class DepartmentsController {
    public async create_department({ request }: HttpContextContract) {
        const data = await request.validate(CreatedepartmentValidator);
        let deptdata = await Department.create(data);
        return deptdata
      }
      public async create_department_role({ request }: HttpContextContract) {
        const data = await request.validate(CreatedepartmentRoleValidator);
        let deptdata = await DepartmentRole.create(data);
        return deptdata
      }
      // public async create_role({ request }: HttpContextContract) {
      //   const data = await request.validate(CreateRoleValidatore);
      //   let deptdata = await Role.create(data);
      //   return deptdata
      // }
      public async list_roles({ request }: HttpContextContract) {
      }
      public async list_department_role({ request }: HttpContextContract) {
      }
      public async list_department({ request }: HttpContextContract) {
      }
}