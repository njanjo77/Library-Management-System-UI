import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Member } from './Member';
import { Book } from './Book';

@Table({
  tableName: 'BorrowRecords',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class BorrowRecord extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'borrow_id',
  })
  borrow_id!: number;

  @ForeignKey(() => Member)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'member_id',
  })
  member_id!: number;

  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'book_id',
  })
  book_id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'borrow_date',
  })
  borrow_date!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'due_date',
  })
  due_date!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: 'return_date',
  })
  return_date!: Date | null;

  @Column({
    type: DataType.ENUM('Borrowed', 'Overdue', 'Returned', 'Pending'),
    allowNull: false,
  })
  status!: 'Borrowed' | 'Overdue' | 'Returned' | 'Pending';

  @BelongsTo(() => Member)
  member!: Member;

  @BelongsTo(() => Book)
  book!: Book;
}