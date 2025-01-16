import { Transform, TransformFnParams } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_colaborador' })
export class Colaborador {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  salario: number;

  @Transform(({ value }: TransformFnParams) => value?.toLowerCase().trim())
  @IsNotEmpty()
  @IsDate()
  @Column({ type: 'date', nullable: false })
  data_admissao: Date;

  @Transform(({ value }: TransformFnParams) => value?.toLowerCase().trim())
  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 255, unique: true, nullable: false })
  email: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  cargo: string;
}
