import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfiguration {
  static addSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Servico de CEP')
      .setDescription('Serviço responsavel por buscar informacoes de CEP`s')
      .setVersion(process.env.npm_package_version)
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`/cep/api`, app, document);
  }
}
