import { rest } from 'msw'

/**
 * Ordersに関するモックの詳細を定義するファイル
 */
export const postOrders = rest.post('https://api.yourmystar.jp/orders', (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    // ctx.status(200),
    // ctx.body(JSON.stringify({
    //   "id": "5XGNMiCS56",
    //   "serviceId": "0x3SUBYOax",
    //   "status": "CREATED"
    // }))

    // error
    ctx.status(400)
  )
})