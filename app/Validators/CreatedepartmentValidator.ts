import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatedepartmentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    dept_name: schema.string()
  })

  public messages: CustomMessages = {
      required: 'The {{ field }} is required to create a new account',
  }
}
