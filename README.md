# キングダム リーダー診断

キングダム実写映画5作に登場した武将16名から、あなたが本能的に惹かれるリーダー像を診断するWebアプリです。

## ファイル構成

```
index.html          メインページ（OGP設定込み）
css/style.css        スタイル
js/data.js            16人のキャラクターデータ・12問の質問データ
js/app.js             診断のメインロジック
js/canvas-card.js     結果画像（PNG）生成ロジック
assets/ogp.png         デフォルトのOGP画像（1200x630）
assets/favicon.ico, apple-touch-icon.png  ファビコン類
```

## GitHub Pagesで公開する手順

1. このフォルダの中身をリポジトリのルート（またはお好きなブランチ）にアップロード
2. リポジトリの **Settings → Pages** を開く
3. **Source** を「Deploy from a branch」にする
4. ブランチを `main`、フォルダを `/ (root)` に設定して **Save**
5. 数十秒〜1分ほどで `https://ユーザー名.github.io/リポジトリ名/` が公開されます

## 公開後にやること（重要）

`index.html` 内の以下2箇所は、実際に公開されたURLに書き換えてください（現状は空欄・相対パスのままです）。

```html
<meta property="og:url" content="">
<meta property="og:image" content="assets/ogp.png">
```

例：
```html
<meta property="og:url" content="https://ユーザー名.github.io/リポジトリ名/">
<meta property="og:image" content="https://ユーザー名.github.io/リポジトリ名/assets/ogp.png">
```

X（Twitter）は絶対URLでないとOGP画像を正しく読み込まないことがあるため、公開後にこの2行だけは必ず絶対URLに直してください。

## 診断ロジックについて

- 4軸（本能⇔理性／前線⇔知略／王道⇔異端／仲間⇔単独）のスコア型診断
- 12問、1問=1軸のみに対して対称に±1加点（各軸の合計は-3, -1, +1, +3のいずれか）
- 16人のキャラクターベクトルとのユークリッド距離が最も近い人物を結果として表示
- キャラクターデータ・質問文・スコアリングロジックの調整は `js/data.js` のみ編集すれば反映されます
