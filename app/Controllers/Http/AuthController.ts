import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'

export default class AuthController {

  async loginIndex({view}: HttpContextContract) {
    return view.render('auth/login')
  }

  async loginStore({request, response, auth}: HttpContextContract) {
    const {username, password, remember} = request.only(['username', 'password', 'remember'])
    try {
      await auth.use('web').attempt(username, password, remember)
      response.redirect().toRoute('index.index')
    } catch {
      response.redirect().toRoute('auth.login.index')
    }
  }

  async registerIndex({view}: HttpContextContract) {
    return view.render('auth/register')
  }

  async registerStore({request}: HttpContextContract) {
    const payload = await request.validate(UserValidator)
    // TODO
  }

  async logoutIndex({response, auth}: HttpContextContract) {
    await auth.use('web').logout(true)
    response.redirect().toRoute('auth.login.index')
  }

}
