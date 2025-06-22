import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alvar:yOzDPJsbVuKB6ekn@cluster0.xkzybxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
