import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transacao } from './transacao.schema';
import { CreateTransacaoDto } from './create-transacao.dto';

@Injectable()
export class TransacoesService {
  constructor(@InjectModel(Transacao.name) private model: Model<Transacao>) {}

  criar(dto: CreateTransacaoDto) {
    return this.model.create(dto);
  }

  async listar() {
    const historico = await this.model.find().lean().exec();

    const totalReceitas = historico
      .filter((t) => t.tipo === 'receita')
      .reduce((acc, t) => acc + t.valor, 0);

    const despesas = historico.filter((t) => t.tipo === 'despesa');
    const totalDespesas = despesas.reduce((acc, t) => acc + t.valor, 0);

    const totalGastoImpulso = despesas
      .filter((t) => t.consumoConsciente === false)
      .reduce((acc, t) => acc + t.valor, 0);

    return {
      historico,
      metricas: {
        saldoTotal: totalReceitas - totalDespesas,
        totalDespesas,
        totalGastoImpulso,
      },
    };
  }
}
