import { Billing } from "src/interfaces/billings/billing.interface"
import { BaseUseCase } from "./base.usecase"

/**
 * Billingを操作するユースケースクラス
 */
export default class BillingUseCase extends BaseUseCase {
  /**
   * 請求データを作成する
   * @param params 対象の注文ID、請求額
   * @returns 請求データ
   */
  async createBilling(params: { orderId: string, amount: number }): Promise<Billing> {
    return await this.post<Billing>('/billings', {
      orderId: params.orderId,
      amount: params.amount,
    })
  }
}