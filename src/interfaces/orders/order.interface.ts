/**
 * 注文に関するインターフェイス
 */
export interface Order {
  id: string
  serviceId: string
  status: 'CREATED' | 'PROCESSED'
}