import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DepartmentRole extends BaseModel {
  @column({ isPrimary: true })
  public id: number
   
  @column()
  public dept_id: number
  
  @column()
  public dept_role_name: String
  
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
