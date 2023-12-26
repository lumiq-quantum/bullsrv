import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { MyQueueConsumer } from './app.provider';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'myqueue',
    })
  ],
  controllers: [AppController],
  providers: [AppService, MyQueueConsumer],
})
export class AppModule {}
