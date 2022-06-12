import { Module } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';
import { PlaceOrderController } from './place-order.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PlaceOrderController],
  providers: [PlaceOrderService]
})
export class PlaceOrderModule { }
