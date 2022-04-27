import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from '../services/cep.service';
import { BuscarCepRequest } from './dtos/buscar-cep.request';
import { BuscarCepResponse } from './dtos/buscar-cep.response';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('CepController')
@Controller()
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get('/:cep')
  @ApiParam({ name: 'cep', required: true, description: 'Cep do endereco' })
  @ApiResponse({ type: BuscarCepResponse, status: 200 })
  public async obterCep(
    @Param() params: BuscarCepRequest,
  ): Promise<BuscarCepResponse> {
    const response = await this.cepService.obterEndereco(params.cep);

    return {
      cep: response.cep,
      logradouro: response.logradouro,
      bairro: response.bairro,
      cidade: response.localidade,
      estado: response.uf,
    };
  }
}
