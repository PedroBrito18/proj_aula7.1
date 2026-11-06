import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateTransacaoDto {
  @IsString() @IsNotEmpty()
  descricao: string;

  @IsNumber() @Min(0)
  valor: number;

  @IsIn(['receita', 'despesa'])
  tipo: string;

  @IsString() @IsNotEmpty()
  categoria: string;

  @IsOptional() @IsBoolean()
  consumoConsciente?: boolean;
}
