import { Controller, Get } from '@nestjs/common';
import { CepService } from '../services/cep.service';

@Controller()
export class AppController {
  constructor(private readonly cepService: CepService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
