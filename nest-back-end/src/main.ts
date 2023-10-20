import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PixKeyGrpcUnknownErrorFilter } from './pix-keys/filters/pix-key-grpc-unknown-error.filter';
import { PixKeyAlreadyExistsErrorFilter } from './pix-keys/filters/pix-key-already-exists-error';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new PixKeyAlreadyExistsErrorFilter(),
    new PixKeyGrpcUnknownErrorFilter(),
  );

  await app.listen(3000);
}
bootstrap();
