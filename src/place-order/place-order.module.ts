import { Module } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';
import { PlaceOrderController } from './place-order.controller';

@Module({
  controllers: [PlaceOrderController],
  providers: [PlaceOrderService]
})
export class PlaceOrderModule {}
