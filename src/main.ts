import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS (¡Añade esto!)
  app.enableCors({
    origin: [
      'https://alvarweb.vercel.app/', // Reemplaza con tu dominio en producción
      'http://localhost:3000', // Para desarrollo local
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization,Accept',
    credentials: true, // Habilita si usas cookies/tokens de autenticación
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
