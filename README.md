## 起動と終了

```bash
$ docker-compose up
$ docker-compose down
```

## ディレクトリ構成

### src

**apis**<br>
アプリにて実装したAPIを置くディレクトリ

**interfaces**<br>
型の情報を定義するディレクトリ

**usecases**<br>
外部のAPIを呼ぶユースケースクラスに関するディレクトリ


### mocks

**resources**<br>
モックしたいAPIを定義するディレクトリ


Nest is [MIT licensed](LICENSE).
