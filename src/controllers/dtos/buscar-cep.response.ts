import { ApiProperty } from '@nestjs/swagger';

export class BuscarCepResponse {
  @ApiProperty({ example: '15061747' })
  cep: string;
  @ApiProperty({ example: 'Rua Francisco de Assis Orefice Goncalves' })
  logradouro: string;
  @ApiProperty({ example: 'Residencial Jardins' })
  bairro: string;
  @ApiProperty({ example: 'São José do Rio Preto' })
  cidade: string;
  @ApiProperty({ example: 'SP' })
  estado: string;
}
