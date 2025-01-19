import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  const config = app.get(ConfigService);
  const port = config.get<number>('PORT');

  await app.listen(port, () => {
    console.log(`Server up & running at http://localhost:${port}/api`);
  });
}
bootstrap();
