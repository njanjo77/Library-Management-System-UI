import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BorrowRecord } from './BorrowRecord';
import { Comment } from './Comment';

@Table({
  tableName: 'Members',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Member extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'member_id',
  })
  member_id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'membership_date',
  })
  membership_date!: Date;

  @Column({
    type: DataType.ENUM('Active', 'Inactive', 'Banned'),
    allowNull: false,
  })
  status!: 'Active' | 'Inactive' | 'Banned';

  @HasMany(() => BorrowRecord)
  borrowRecords!: BorrowRecord[];

  @HasMany(() => Comment)
  comments!: Comment[];
}