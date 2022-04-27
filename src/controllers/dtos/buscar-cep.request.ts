import { IsNumberString } from 'class-validator';

export class BuscarCepRequest {
  @IsNumberString({}, { message: 'cep deve ser um numero' })
  cep: number;
}
