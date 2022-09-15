import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatedepartmentroleValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    dept_role_name: schema.string()
  })

  public messages: CustomMessages = {
      required: 'The {{ field }} is required to create a new account',
  }
}
