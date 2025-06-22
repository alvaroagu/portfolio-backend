import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Importa ConfigModule y ConfigService

@Module({
  // imports: [
  //   MongooseModule.forRoot(
  //     'URL HERE ',
  //   ),
  //   ProjectsModule,
  // ],
  imports: [
    ConfigModule.forRoot({
      // Configura ConfigModule
      isGlobal: true, // Esto hace que el módulo de configuración esté disponible globalmente
      envFilePath: '.env', // Especifica la ruta de tu archivo .env
    }),
    MongooseModule.forRootAsync({
      // Usa forRootAsync para cargar la URL de forma asíncrona
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'), // Obtiene la URL de la variable de entorno
      }),
      inject: [ConfigService],
    }),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
