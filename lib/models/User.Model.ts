import {AllowNull, Column, HasMany, IsEmail, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import TaskModel from "./Task.Model";

@Table
export default class User extends Model<User> {

  @PrimaryKey
  @Column
  public id: string;

  @Column
  public name: string;

  @Column
  public passwd: string;

  @IsEmail
  @Column
  public email: string;

  @HasMany(() => TaskModel)
  public posts: TaskModel[];

}
