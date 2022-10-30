import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({trim: true}, [
      rules.alpha(),
      rules.unique({table: 'users', column: 'username', caseInsensitive: true})
    ]),
    password: schema.string({}, [
      rules.minLength(8),
      rules.confirmed('passwordConfirmation')
    ]),
    passwordConfirmation: schema.string({}),
  })

  public messages: CustomMessages = {}
}
