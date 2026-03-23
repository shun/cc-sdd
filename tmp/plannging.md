# Google Antigravity 対応計画と実施記録

## 概要
cc-sdd (AI-DLC) に 9番目のAIコーディングエージェントとして「Google Antigravity」のサポートを追加するための計画と実施記録です。

---

## Google Antigravity対応とは何か？（技術的な解説）

`cc-sdd` というツールは、様々なAIエージェント（Claude Code, Cursorなど）に対して「統一された開発ワークフロー（仕様駆動開発）」を適用するための**プロンプトテンプレート（コマンド群）を、各エージェントが読み取れる形式と場所に自動配置するCLIツール**です。

Google Antigravityに「対応する」ということは、具体的に以下の3つの要件を満たすことを意味します。

1. **配置ルールの解決（CLIとしての対応）**
   - ユーザーが `npx cc-sdd@latest --antigravity` と実行した際に、CLIが「Antigravity用の処理だ」と認識できるようにフラグ（`--antigravity`）を定義すること。
   - Antigravityはワークフロー（コマンド群）を `.agent/workflows/` というディレクトリから読み取る仕様であるため、このパスをCLIに教え込むこと。

2. **マニフェスト（設計図）の作成**
   - どのファイルをどこにコピーするかを定義した設計図（`antigravity.json`）を作成し、「Antigravityの場合は、テンプレート群を `.agent/workflows/kiro` にコピーせよ」とCLIに指示すること。

3. **フォーマットの最適化（テンプレートの対応）**
   - Antigravityはワークフローを `Markdown (.md)` 形式で解釈します（※例えばGemini CLIなどは `.toml` 形式を使います）。
   - そのため、Antigravityが正しく解釈できるMarkdown形式のプロンプトファイル（`spec-init.md` など）を用意すること。
   - また、Antigravity用の初期ドキュメント（`GEMINI.md`）を用意し、ユーザーがプロジェクトルートで参照できるようにすること。

**結論として**：
「CLIが `--antigravity` を理解し」、「所定の場所（`.agent/workflows/`）に」、「Antigravityが読める形式（`.md`）でプロンプトを自動配置できるようになった状態」が、Google Antigravityに対応できた状態です。

---

## 実施プランとステータス

### Phase 0: 準備と計画策定
- [x] Antigravityの公式仕様の調査 (Rules, Workflows, Skillsの役割と配置)
- [x] ヒアリングによる不足情報の補完 (配置ディレクトリ、ファイル形式)
- [x] 過去のPR（OpenCode等）を参考にしたテスト・ドキュメント更新方針の策定
- [x] 専用ブランチの作成 (`feature/google-antigravity-support`)

### Phase 1: エージェント定義とマニフェストの追加
- [x] `src/agents/registry.ts` への `antigravity` 定義追加
  - [x] `aliasFlags`: `--antigravity` の設定
  - [x] `recommendedModels`: Gemini系のモデルを設定
  - [x] `layout`: `agentDir: '.agent'`, `commandsDir: '.agent/workflows/kiro'` に設定
  - [x] `completionGuide`: グローバルスキル配置の案内メッセージ追加
- [x] `templates/manifests/antigravity.json` の作成
  - [x] `commands` を `.agent/workflows/kiro` に配置するルールの記述
  - [x] `GEMINI.md` をルートに配置するルールの記述
  - [x] 共通設定 (`settings_common`) の配置ルールの記述
- [x] **Commit**: `feat(agents): Google Antigravityエージェント定義とマニフェストの追加`

### Phase 2: テンプレートの構築
- [x] `templates/agents/antigravity/` ディレクトリの作成
- [x] `docs/GEMINI.md` の作成 (gemini-cliをベースに作成)
- [x] `commands/` へのワークフロープロンプトの配置
  - [x] 形式要件に従い、すべて Markdown 形式 (`.md`) で作成
  - [x] 11個のSpec-Driven コマンドをコピー・適応
- [x] **Commit**: `feat(agents): Google Antigravity向けのテンプレートとワークフローの追加`

### Phase 3: テストの追加と検証
- [x] `test/realManifestAntigravity.test.ts` の新規作成
  - [x] dry-run でのパスマッピング検証テストの実装
  - [x] apply 時のファイル生成検証テストの実装
- [x] `test/agentLayout.test.ts` の更新
  - [x] `antigravity` 用のレイアウトが正しく返却されるかのテスト追加
- [x] テストコードの構文エラー（正規表現エスケープ等）の修正
- [x] `npm run test` (Vitest) による全テストの Pass 確認
- [x] **Commit**: `test: Google Antigravity向けのテスト追加`

### Phase 4: ドキュメントとメタデータの更新
- [x] `tools/cc-sdd/package.json` の更新
  - [x] `keywords` に `antigravity` を追加
  - [x] 説明文の `8 AI agents` を `9 AI agents` に修正
- [x] `README.md` (ルート) の更新
  - [x] タイトル・説明文に Google Antigravity を追加
  - [x] 導入例一覧に `--antigravity` を追加
  - [x] サポートエージェント数を 8 から 9 に変更
- [x] `tools/cc-sdd/README.md` の更新
  - [x] タイトル・説明文に Google Antigravity を追加
  - [x] 導入例一覧に `--antigravity` を追加
  - [x] 対応エージェントテーブルへの追加
- [x] **Commit**: `docs: Google Antigravity対応のドキュメントとpackage.jsonの更新`

### Phase 5: 最終確認
- [x] 全変更のGit状態の確認 (作業ツリーがクリーンであること)
- [x] CLIの動作確認 (`npx tsx src/cli.ts --antigravity --dry-run` が正常に計画を出力すること)