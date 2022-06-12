import { rest } from 'msw'

/**
 * Ordersに関するモックの詳細を定義するファイル
 */
export const postOrders = rest.post('https://api.yourmystar.jp/orders', (req, res, ctx) => {
  return res(
    ctx.status(201),
    ctx.body(JSON.stringify({
      "id": "5XGNMiCS56",
      "serviceId": req.body['serviceId'],
      "status": "CREATED"
    }))

    // error
    // ctx.status(422)
  )
})

export const patchOrders = rest.patch('https://api.yourmystar.jp/orders/:orderId', (req, res, ctx) => {
  return res(
    ctx.status(201),
    ctx.body(JSON.stringify({
      "id": req.params['orderId'],
      "serviceId": req.body['serviceId'],
      "status": req.body['status'],
    }))

    // error
    // ctx.status(422)
  )
})