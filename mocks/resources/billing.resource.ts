import { rest } from 'msw'

/**
 * Billingsに関するモックの詳細を定義するファイル
 */
export const postBillings = rest.post('https://api.yourmystar.jp/billings', (req, res, ctx) => {
  return res(
    // Respond with a 200 status code
    ctx.status(200),
    ctx.body(JSON.stringify({
      "id": "auB7hhfm6U",
      "orderId": "5XGNMiCS56",
      "amount": 10000
    }))
  )
})