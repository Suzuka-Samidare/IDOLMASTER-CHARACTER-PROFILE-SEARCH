# IDOLMASTER-CHARACTER-PROFILE-SEARCH

im@sparqlを用いたアイドルプロフィール検索APP

## 使用方法
```
$ docker-compose build

$ docker-compose up
```
コンテナがローカルに立ち上がったら、下記のURLを開く。

```
$ open http://localhost:7650/
```

### 画像を表示について
検索時に画像も表示したい場合は、`./api/search_idol_image.py`内にGoogleから提供されている

- Custom Search Engine（CSE）の検索エンジンID
- Custom Search APIのAPIキー

の2つを `docker-compose build` 実行前に独自に上書きする必要があります。

画像取得のソースコードは以下のURLを参考にしました。
https://qiita.com/zak_y/items/42ca0f1ea14f7046108c
