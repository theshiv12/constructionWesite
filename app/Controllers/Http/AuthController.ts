import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUser from 'App/Validators/CreateUserValidator'
import User from 'App/Models/user'
import Employe from 'App/Models/Employe'

export default class AuthController {
     //registration function
  public async register({ request }: HttpContextContract) { 
    const d=request.only(['role_id','dept_id','dept_role_id'])
    const data = await request.validate(CreateUser);
    let userData = await User.create(data);
    d['user_id']=userData.id
    await Employe.create(d);
    return userData
  }
  
   //login function
  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const x =  await auth.attempt(email, password)
    console.log(x);
    return x
    
   
  }
 //auth logout
  public async logout({ auth }: HttpContextContract) {
    return await auth.logout()
    
  }
}

