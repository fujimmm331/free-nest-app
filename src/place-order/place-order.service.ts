import { Injectable } from '@nestjs/common';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';

@Injectable()
export class PlaceOrderService {
  call(createPlaceOrderDto: CreatePlaceOrderDto) {
    return 'This action adds a new placeOrder';
  }
}
