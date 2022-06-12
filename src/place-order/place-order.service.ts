import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';
/**
 * 注文に関するサービスクラス
 */
@Injectable()
export class PlaceOrderService {
  constructor(private httpService: HttpService) { }

  async call(createPlaceOrderDto: CreatePlaceOrderDto) {
    return 'This action adds a new placeOrder';
  }
}
