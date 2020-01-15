import { BelongsTo, Column, ForeignKey, Model, NotNull, Table } from "sequelize-typescript";
import UserModel from "./User.Model";

@Table
export default class Task extends Model<Task> {
    @Column
    public name: string;

    @Column
    public state: State;

    @ForeignKey(() => UserModel)
    @Column
    public userId!: string;

    @BelongsTo(() => UserModel)
    public user!: UserModel;
}

enum State {
    Scheduled = "Scheduled",
    Proceeding = "Proceeding",
    Pending = "Pending",
}
