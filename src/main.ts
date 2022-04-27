import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerConfiguration } from './configurations/swagger.configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('cep');
  app.useGlobalPipes(new ValidationPipe());
  SwaggerConfiguration.addSwagger(app);

  await app.listen(process.env.APP_PORT);
}
bootstrap()
  .then(() =>
    Logger.log(
      `Application started successfully! Listening on port ${process.env.APP_PORT}`,
    ),
  )
  .catch(Logger.error);
