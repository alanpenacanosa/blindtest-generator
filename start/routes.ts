import Route from '@ioc:Adonis/Core/Route'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

Route.get('/', 'IndexController.index').as('index.index')

Route.group(() => {
  Route.get('/login', 'AuthController.loginIndex').as('auth.login.index')
  Route.post('/login', 'AuthController.loginStore').as('auth.login.store')
  Route.get('/register', 'AuthController.registerIndex').as('auth.register.index')
  Route.post('/register', 'AuthController.registerStore').as('auth.register.store')
  Route.get('/logout', 'AuthController.logoutIndex').as('auth.logout.index')
}).prefix('/auth')

// Temporary
Route.get('/theme-cheatsheet', ({view}: HttpContextContract) => view.render('index/theme-cheatsheet'))
