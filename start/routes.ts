/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('department_create','DepartmentsController.create_department')

Route.post('register' ,"AuthController.register")
Route.post('login' ,"AuthController.login")
Route.post('logout' ,"AuthController.logout")
Route.post('create-department' ,"DepartmentsController.create_department")
Route.post('create-department-role' ,"DepartmentsController.create_department_role")
// Route.post('create-role' ,"DepartmentsController.create_role")




