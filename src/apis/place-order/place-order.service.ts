import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import BillingUseCase from 'src/usecases/billing.usecase';
import OrderUseCase from 'src/usecases/order.usecase';
import { CreatePlaceOrderDto } from './dto/create-place-order.dto';
/**
 * 注文処理に関するサービスクラス
 */
@Injectable()
export class PlaceOrderService {
  constructor(private httpService: HttpService) { }

  /**
   * 注文処理を行う
   * @param createPlaceOrderDto サービスID、請求額
   * @returns 注文データ
   */
  async call(createPlaceOrderDto: CreatePlaceOrderDto) {
    const orderUseCase = new OrderUseCase(this.httpService)
    const billingUseCase = new BillingUseCase(this.httpService)

    const order = await orderUseCase.createOrder(createPlaceOrderDto.serviceId)
    await billingUseCase.createBilling({
      orderId: order.id,
      amount: createPlaceOrderDto.amount,
    })
    const updatedOrder = await orderUseCase.updateOrder({
      id: order.id,
      serviceId: order.serviceId,
      status: 'PROCESSED',
    })

    return { data: updatedOrder }
  }
}
