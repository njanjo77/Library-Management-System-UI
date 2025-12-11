import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Member } from './Member';
import { Book } from './Book';

@Table({
  tableName: 'Comments',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Comment extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'comment_id',
  })
  comment_id!: number;

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
    type: DataType.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 5,
    },
  })
  rating!: number | null;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  comment!: string | null;

  @BelongsTo(() => Member)
  member!: Member;

  @BelongsTo(() => Book)
  book!: Book;
}