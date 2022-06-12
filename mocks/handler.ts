import { setupServer } from 'msw/node'
import { postBillings } from "./resources/billing.resource"
import { postOrders } from "./resources/order.resource"

/**
 * モックしたいAPIを定義するファイル
 */
const handlers = [
  postBillings,
  postOrders,
]

export const mockServer = setupServer(...handlers)