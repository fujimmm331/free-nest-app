import { rest } from 'msw'

/**
 * Billingsに関するモックの詳細を定義するファイル
 */
export const postBillings = rest.post('https://api.yourmystar.jp/billings', (req, res, ctx) => {
  return res(
    ctx.status(201),
    ctx.body(JSON.stringify({
      "id": "auB7hhfm6U",
      "orderId": req.body['orderId'],
      "amount": req.body['amount'],
    }))
  )
})