import { Controller, Post, Body, HttpCode, } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';

/**
 * 注文処理に関するコントローラー
 */
@Controller('place-order')
export class PlaceOrderController {
  constructor(private readonly placeOrderService: PlaceOrderService) { }

  @Post()
  @HttpCode(201)
  async create(@Body() createPlaceOrderDto: CreatePlaceOrderDto) {
    return await this.placeOrderService.call(createPlaceOrderDto)
  }
}
