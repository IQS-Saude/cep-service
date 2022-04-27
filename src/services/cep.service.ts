import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { EnderecoResponse } from './dtos/endereco.response';

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  public async obterEndereco(cep: number): Promise<EnderecoResponse> {
    const response = await this.httpService.axiosRef.get<EnderecoResponse>(
      `https://viacep.com.br/ws/${cep.toString().padStart(8, '0')}/json`,
    );

    return response.data;
  }
}
