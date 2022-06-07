# Yourmystar Coding Challenge

あなたはハウスクリーニングサービスの注文をインターネット上で可能にするWebサービスを開発・運用しているエンジニアです。

このアプリケーションでは、ユーザからの注文と請求を処理するために次の2つのAPIを内部的に使用しています。

- [Order(注文)](/docs/order.md)
- [Billing(請求)](/docs/billing.md)

これらのAPIはそれなりに高い稼働率を維持していますが、諸条件により呼び出しに失敗することがあります。
クライアント側に問題があると判断された場合はHTTPステータスコード `400` 、API側に不具合がある場合はHTTPステータスコード `500` を返却するように設計されています。
以下の課題を解くに際しては、この2つ以外の異常レスポンスについて考慮する必要はありません。

また、APIの呼び出しにあたり認証は必要ないものとします。

## 課題
**注文するサービスのID `serviceId` と金額 `amount` を引数として受け取り、
上述のAPIを利用して `Order` と `Billing` を作成する関数 `placeOrder`を実装してください。**

`Order` を作成するとその`status`フィールドには `CREATED` が設定されます。
この`placeOrder`関数では、関連する`Billing` が作成された `Order` の `status` を `PROCESSED`に更新する処理も行ってください。

以上の処理が全て正常に終了した場合は最終的な `Order` リソースを返却してください。
適切な返り値が提供できない場合は `Error` を送出してください。

## 条件
- 利用するプログラミング言語はJavaScriptまたはTypeScriptを使用してください。
  - ランタイムはNode.jsを想定していますが、他のものを使用していただいても構いません。
- MITライセンスの下で公開されているライブラリは自由に使用して構いません。
- ソースコードを含む、動作に必要なファイルやディレクトリは自由に作成してください。
  - 参考のため `index.js` を用意していますが、このファイルを移動したり削除したりしても差し支えありません。
  - 必要に応じて、`package.json` や `.gitignore`などのファイルも修正していただいて構いません。
- その他、この関数を実際に業務で利用・運用するにあたり必要だと思われる機能性を盛り込んでください。

## 提出方法
別途ご連絡差し上げている期限日までに、全ての成果物をこのリポジトリの `main` ブランチにpushしてください。

## 質問等
本課題に関して質問がある場合は、GitHubリポジトリ上でIssueを作成してください。
担当エンジニアが可及的速やかに対応いたします。

## 注意事項
- この課題に関する情報を第三者に対して公開、提供することを固く禁じます。
- この課題を通じて作成された新たに作成されたプログラムの著作権は作成者に帰属します。
- このリポジトリは採用プロセスの終了後に削除されます。提出したプログラムのバックアップ等が必要な場合は提出前にご自身で作成してください。