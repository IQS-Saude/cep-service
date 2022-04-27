import { Module } from '@nestjs/common';
import { CepController } from './controllers/cep.controller';
import { CepService } from './services/cep.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [CepController],
  providers: [CepService],
})
export class AppModule {}
