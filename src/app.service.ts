import { Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(@InjectConnection() private connection: Connection) {}

  async onModuleInit() {
    const isConnected = this.connection.readyState === 1;
    console.log(
      `MongoDB this.connection status: ${isConnected ? 'connected' : 'disconnected'}`,
    );
  }
}
