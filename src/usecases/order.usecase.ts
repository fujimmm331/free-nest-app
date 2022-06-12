import { Order } from "src/interfaces/orders/order.interface"
import { BaseUseCase } from "./base.usecase"

/**
 * Orderを操作するユースケースクラス
 */
export default class OrderUseCase extends BaseUseCase {
  /**
   * 注文データを作成する
   * @param serviceId 利用するサービスのID
   * @returns 注文データ
   */
  async createOrder(serviceId: string): Promise<Order> {
    return await this.post<Order>('/orders', {
      serviceId
    })
  }

  /**
   * 注文データを更新する
   * @param params 更新に使用するパラメータ
   * @returns 注文データ
   */
  async updateOrder(params: Order): Promise<Order> {
    return await this.patch<Order>(`/orders/${params.id}`, {
      serviceId: params.serviceId,
      status: params.status,
    })
  }
}