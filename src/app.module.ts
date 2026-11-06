import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransacoesModule } from './transacoes/transacoes.module';

@Module({
  imports: [
    // Conexão com o MongoDB Atlas (usuário de teste)
    MongooseModule.forRoot('mongodb+srv://pedro_teste:Teste2026abc@cluster0.0lqwepj.mongodb.net/financas?retryWrites=true&w=majority'),
    TransacoesModule,
  ],
})
export class AppModule {}
