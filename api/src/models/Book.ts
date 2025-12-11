import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { BorrowRecord } from './BorrowRecord';
import { Comment } from './Comment';

@Table({
  tableName: 'Books',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Book extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'book_id',
  })
  book_id!: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  author!: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    unique: true,
  })
  isbn!: string | null;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  genre!: string | null;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'available_copies',
  })
  available_copies!: number;

  @HasMany(() => BorrowRecord)
  borrowRecords!: BorrowRecord[];

  @HasMany(() => Comment)
  comments!: Comment[];
}