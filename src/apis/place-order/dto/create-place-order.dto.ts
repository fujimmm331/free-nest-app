import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
/**
 * 注文に必要なパラメーター
 */
export class CreatePlaceOrderDto {
  /**
   * 注文するサービスID
   */
  @IsNotEmpty()
  @IsString()
  serviceId: string

  /**
   * 注文の金額
   */
  @IsNotEmpty()
  @IsNumber()
  amount: number
}
