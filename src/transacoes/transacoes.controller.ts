import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransacoesService } from './transacoes.service';
import { CreateTransacaoDto } from './create-transacao.dto';

@Controller('transacoes')
export class TransacoesController {
  constructor(private readonly service: TransacoesService) {}

  @Post()
  criar(@Body() dto: CreateTransacaoDto) {
    return this.service.criar(dto);
  }

  @Get()
  listar() {
    return this.service.listar();
  }
}
