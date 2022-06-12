import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaceOrderModule } from './place-order/place-order.module';

@Module({
  imports: [PlaceOrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
