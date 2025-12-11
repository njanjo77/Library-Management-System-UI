import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Settings',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Setting extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'setting_id',
  })
  setting_id!: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
    field: 'key_name',
  })
  key_name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  value!: string;
}