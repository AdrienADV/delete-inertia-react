import { BaseModel, column } from '@adonisjs/lucid/orm'
export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string
}