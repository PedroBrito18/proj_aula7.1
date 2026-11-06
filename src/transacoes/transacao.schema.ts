import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransacaoDocument = HydratedDocument<Transacao>;

@Schema({ timestamps: true })
export class Transacao {
  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  valor: number;

  @Prop({ required: true, enum: ['receita', 'despesa'] })
  tipo: string;

  @Prop({ required: true })
  categoria: string;

  @Prop({ default: true })
  consumoConsciente: boolean;
}

export const TransacaoSchema = SchemaFactory.createForClass(Transacao);
