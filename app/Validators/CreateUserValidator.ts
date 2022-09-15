import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
 
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name:schema.string(),
    address:schema.string(),
    email: schema.string([
      rules.email(),
      rules.unique({ table: 'users', column: 'email' })
    ]),
    password: schema.string([
      rules.confirmed(),
      rules.minLength(4),
      rules.maxLength(16)
    ]),
    mobile_num: schema.string([
      rules.minLength(10),
      rules.maxLength(14),
      rules.unique({ table: 'users', column: 'email' })

    ]),

  })

  public messages: CustomMessages = {
      required: 'The {{ field }} is required to create a new account',
      'email.unique': 'email unique voilation are fail' 
  }
}


