import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaceOrderService } from './place-order.service';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';

@Controller('place-order')
export class PlaceOrderController {
  constructor(private readonly placeOrderService: PlaceOrderService) {}

  @Post()
  create(@Body() createPlaceOrderDto: CreatePlaceOrderDto) {
    return this.placeOrderService.call(createPlaceOrderDto);
  }
}
