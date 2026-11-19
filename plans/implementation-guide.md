# 伞伴项目实施指南（对齐 V4.1 学生版）

> **定位：** [`product-plan-v4.1-student.md`](product-plan-v4.1-student.md) 的执行手册。  
> **原则：** 方案 + 可演示 H5 + 低成本硬件验证 + Git 过程留痕；本学期不做真实收费、不上架微信小程序。  
> **保留：** Cloudflare Pages、PWA。  
> **不做：** Vite 生产构建 / 类小程序码 / 演示视频硬要求；不预建空 `tests/` 模板。

---

## 一、三阶段总览

| 阶段 | 时间 | 核心任务 |
|------|------|----------|
| A 概念与原型 | 第 1–2 周 | 原型可演示 + PWA + Pages 上线 + 运行/验收说明 + 规范提交 |
| B 硬件验证与协作规范 | 第 3–7 周 | 真伞实测；双方案分支取舍；仓库约定与 `AGENTS.md` |
| C 收束与复盘 | 约第 10–13 周 | 范围控制、PR 与回归、README 复现、许可证、复盘、结项洁净 |

**提交原则：** 每完成一小步就 `git commit` 一次；一次提交只做一类事；禁止无必要的 `push --force`。

---

## 二、阶段 A：概念与原型（第 1–2 周）

### 2.1 操作步骤

| 步骤 | 具体操作 | 产出 | 建议 Commit |
|------|----------|------|-------------|
| A1 | **写清怎么运行**<br>本地如何打开原型；后续 Pages 链接预留位置 | README「快速开始」 | `docs: 补充运行与打开说明` |
| A2 | **写本周完成标准**<br>例如：引导可走完、有模拟标识、失物页无推销高亮 | 短清单（可写在 README） | `docs: 添加本周验收约定` |
| A3 | **说明个人改动**<br>用几句话写你改了什么、为什么（可写在 commit 说明或 README） | 文字说明 | 随功能提交 |
| A4 | **请同学试跑**<br>按你的说明打开，收集 3–5 条反馈（脱敏后写入过程摘录） | 试跑反馈摘要 | `docs: 记录同伴试跑反馈` |
| A5 | **原型对照方案自查**<br>3 步引导、非实时定位文案、寻伞限时、失物平等选项、模拟数据标识 | 自查结论 | `docs: 原型对照方案自查` |
| A6 | **确认 / 小改交互**<br>缺什么补什么；现有 V4 已覆盖主流程则可少改 | 可打开的原型 | `feat: …`（有改动时） |
| A7 | **加 PWA**<br>确认 `manifest.json`、图标、页面已引用；完整「添加到主屏幕」需 HTTPS（见 A8） | PWA 配置 | `feat: 添加 PWA 支持` |
| A8 | **部署 Cloudflare Pages**<br>见 §2.2；手机 4G 打开验证 | 公网链接 | `docs: 记录 Pages 部署链接` |
| A9 | **生成 H5 体验二维码（可选）**<br>把 Pages 链接做成普通二维码；**必须标注「H5 演示，非微信小程序」** | `prototype/qrcode-h5.png` | `assets: 添加 H5 体验二维码` |
| A10 | **更新 README**<br>Pages 链接、二维码、本地打开、PWA、模拟边界、验收点 | README | `docs: README 增加体验入口` |
| A11 | **规范用 Git**<br>改前 `status`，提交前看 `diff`；重要提交后核对无夹带无关文件 | 清晰历史 | 规范 message |
| A12 | **做一次可控回退演练**<br>故意小改 → `git revert` 回退并推送（保留历史，不 force） | 一条 revert 记录 | `revert: …` |

### 2.2 Cloudflare Pages

静态 HTML，**无需** `pnpm build`。

1. 打开 [Cloudflare Pages](https://pages.cloudflare.com/)，用 GitHub 登录。  
2. 连接仓库 `Lzzc-b/sanbuddy-umbrella`。  
3. Framework = **None**；Build command = **留空**；Build output directory = **`prototype`**。  
4. 入口为 `prototype/index.html`（跳转 V4 原型）。  
5. 把链接写进 README 后再提交一次。  

**当前在线地址：** https://sanbuddy-umbrella.pages.dev/  

**体验二维码：** [`prototype/qrcode-h5.png`](../prototype/qrcode-h5.png)（扫码打开上述 H5；**非微信小程序**）。

### 2.3 PWA

- `prototype/manifest.json`、`prototype/icons/`、原型页引用  
- **不做** Service Worker 离线缓存  
- 在 Pages 的 HTTPS 域名上测「添加到主屏幕」

### 2.4 阶段 A 完成标志

- [x] 本地与 Pages 都能走通主流程  
- [x] README 有运行说明、验收约定、模拟边界  
- [ ] 有同伴试跑反馈摘录  
- [x] 提交历史清晰，并有一次 revert 演练  
- [x] 手机可将站点添加到主屏幕（PWA）

---

## 三、阶段 B：硬件验证与仓库约定（第 3–7 周）

### 3.1 低成本物料（参考）

| 物料 | 建议 | 预算 |
|------|------|------|
| 伞 | 自有 / 借用 | ¥0 |
| BLE 防丢标签 | 「蓝牙防丢器 双向查找 蜂鸣器」白牌 | ¥15–20 |
| NFC（可选） | NTAG215 | ¥数元 |
| 固定 | 胶带 / 橡皮筋 | ¥2 内 |

**选购：** 要双向查找 + 蜂鸣；不要 GPS；不要开放 SDK。

### 3.2 操作步骤

| 步骤 | 具体操作 | 产出 | 建议 Commit |
|------|----------|------|-------------|
| B1 | 采购并验收：配对、蜂鸣、伞柄能否固定 | 选型说明 | `docs: 记录真伞与标签选型` |
| B2 | 安装并拍照（建议本人同框） | 照片（控制体积） | `docs: 上传安装实拍` |
| B3 | 分离提醒实测 ≥1 次（环境、距离、结果） | 实测记录 | `test: BLE 分离提醒实测` |
| B4 | 声光寻物实测 ≥1 次 | 实测记录 | `test: 声光寻物实测` |
| B5 | （可选）NFC 写入 Pages 链接；取出电池后仍可读 | 记录 / 截图 | `test: NFC 无电读取` |
| B6 | 写清局限：非 IP67、非长测续航、胶带临时固定等 | 验证小结 | `docs: 硬件验证小结与局限` |
| B7 | **双方案探索**<br>从同一基线开两个分支，试两种做法（例：文案/布局不同，或 Pages 配置不同） | 两个分支 | 分支推送 |
| B8 | **写对比与取舍标准**，合并或选留一条；在 PR 里写清为何选它、另一方案为何不采用 | 对比短文 + PR | `docs: 双方案对比` + merge |
| B9 | **写清仓库约定**<br>目录含义、模拟边界、Pages 输出目录=`prototype` | README / 本手册 | `docs: 明确仓库约定` |
| B10 | **新增根目录 `AGENTS.md`**<br>给协作者/AI：结构、能改什么、不能做什么、如何提交 | `AGENTS.md` | `docs: 添加 AGENTS.md` |
| B11 | **交接验收**<br>换设备或请同学只凭 README + AGENTS.md 独立打开成功 | 交接记录一小节 | `docs: 交接验收记录` |

**不做：** 自研主板、IP67 认证、量产、真实支付。

### 3.3 阶段 B 完成标志

- [ ] 分离提醒、寻物各成功 ≥1 次并有记录/照片  
- [ ] 局限已写明  
- [ ] 有双分支对比与合并/选留记录  
- [ ] 有 `AGENTS.md`，他人能按文档打开项目  

---

## 四、阶段 C：收束与复盘（约第 10–13 周）

### 4.1 操作步骤

| 步骤 | 具体操作 | 产出 | 建议 Commit |
|------|----------|------|-------------|
| C1 | **写清范围「三不」**<br>例：不扩真实支付、不上架小程序、不自研主板 | README 或短文 | `docs: 明确项目范围` |
| C2 | **改动走 Pull Request**<br>自己或同学按 checklist 看过再合并 | PR 记录 | 通过 PR 合并 |
| C3 | **可重复验证**<br>列出主流程走查步骤（引导→寻伞→电量→失物）；改完再跑一遍，坏了先修 | 验证步骤说明 | `docs` / `fix` |
| C4 | **微里程碑可核验**<br>如「Pages 可开」「PWA 可加主屏」「分离提醒实测 1 次」在 README 勾选 | README 完成度 | 分次提交 |
| C5 | **README 无损复现**<br>陌生人只凭 README：克隆 → 打开或访问 Pages → 按验收点点一遍 | README | `docs: README 无损复现` |
| C6 | **贡献说明**<br>如何提 Issue/建议；有 Issue/PR 则及时回应 | README 一小段 | `docs: 补充贡献说明` |
| C7 | **添加 `LICENSE`**（建议 MIT） | 根目录 LICENSE | `docs: 添加 LICENSE` |
| C8 | **更新完成度**<br>已完成 / 模拟 / 下一步 分栏清晰 | README | `docs: 更新项目完成度` |
| C9 | **过程日志**<br>关键时间线、失败与改进 | 过程日志 md | `docs: 添加过程日志` |
| C10 | **写人机协作复盘**<br>过程事实、哪些你决策/验收、哪些 AI 协助、反思改进 | `plans/ai-collab-review.md` | `docs: 添加协作复盘` |
| C11 | **3 分钟讲稿**<br>分清已做与未做 | 讲稿 md | `docs: 添加答辩讲稿` |
| C12 | **结项整理**<br>无密钥、无无关大文件、无半成品误传；确认本地+Pages 可跑 | 干净仓库 | `chore: 结项前仓库整理` |
| C13 | **关键决策写清依据**<br>为何 H5、为何白牌标签、为何 Pages/PWA | 与方案/本手册互链 | `docs: 补充关键决策说明` |
| C14 | （可选）打 Tag：`v1.0.0-student-final` | Git Tag | `git tag` + `git push --tags` |

### 4.2 阶段 C 完成标志

- [ ] 范围与三不明确；有 PR 与回归习惯  
- [ ] README 可无损复现；有 LICENSE  
- [ ] 有过程日志、协作复盘、讲稿  
- [ ] 仓库干净，Pages/PWA 可跑，决策有据  

---

## 五、仓库目录（目标形态）

```text
sanbuddy-umbrella/
├── README.md
├── LICENSE
├── AGENTS.md
├── plans/
│   ├── product-plan-v4.1-student.md
│   ├── implementation-guide.md
│   └── ai-collab-review.md          # 有内容再提交
└── prototype/
    ├── index.html
    ├── sanbuddy-prototype-v4.html
    ├── manifest.json
    ├── qrcode-h5.png                  # H5 体验二维码（非小程序）
    └── icons/
```

硬件照片、实测记录等：**有内容再新增**，不预建空目录。

---

## 六、答辩话术（精简）

| 问题 | 回应要点 |
|------|----------|
| 为什么不做真小程序？ | 方案规定网页演示；H5 + Pages 更新快；PWA 可加到主屏幕。 |
| 为什么用便宜标签？ | 验证分离提醒与寻物链路；局限已在文档声明。 |
| 防水/续航呢？ | 须样机实测后才能宣称；本学期标为未验证。 |

---

*对齐 product-plan-v4.1-student.md · 操作步骤已融入过程要求 · 保留 Cloudflare Pages + PWA*
