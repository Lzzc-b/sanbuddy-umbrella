# ☂️ 伞伴 · SanBuddy

### 让用户忘记这是一把智能伞，只记得这是一把好伞。

> 先做好伞，再做安静的防丢；服务只在需要时出现。

围绕两件小事展开：**出门忘带伞**，以及 **伞落在别处找不回**。  
当前为学生项目版：**方案 + 可交互原型 + 真伞最小验证 + Git 过程留痕**，本阶段不开展真实收费。

[产品方案 V4.1](plans/product-plan-v4.1-student.md) · [本学期实施指南](plans/implementation-guide.md) · [远期伞柄工程设计输入](plans/hardware-design-input-v1.md) · [在线体验](https://sanbuddy-umbrella.pages.dev/) · [可交互原型](prototype/sanbuddy-prototype-v4.html)

---

## 🧭 设计哲学

| 原则 | 含义 |
| --- | --- |
| 🧱 **好伞是 1，智能是 0** | 伞面、骨架、握感、重量是底线 |
| 🔕 **可靠，但不吵** | 需要时刚好准备好，而不是不断汇报 |
| 🛟 **服务按需浮现** | 订阅只在失物场景平等出现，不推销 |

---

## ✨ 核心功能

| 功能 | 方案要点 | 待验证 |
| --- | --- | --- |
| 🌂 手动 / 半自动两款 | 智能模块相同；半自动电子仓避开弹簧 | 握感、重量、连接强度 |
| 🚪 忘带与防丢 | 提醒规则、离开检测、最后出现位置 | 后台蓝牙、误报率 |
| 💡 声光寻伞 | 蜂鸣器 + LED，限时停止 | 功耗、声量、防水 |
| 🔋 四级电量 | 低电量降级；可换 CR2032 | 续航与低电策略 |
| 🏷️ 断电仍可归还 | 无源 NFC + 二维码 | 真实可扫标签 |
| 🌧️ 应急与失物兜底 | 避雨 / 借伞 / 联络；选项平等展示 | 第三方服务与履约 |

### 📌 定位边界（诚实口径）

- **没有**伞的实时 GPS / 地图追踪；禁止宣传「定位多远公里」  
- 近场：BLE 连接时声光寻伞（常见约 **10–30 m**，视标签与遮挡）  
- 「最后出现位置」= 断连时的 **手机位置**；伞被带走后**不会更新**  
- **更远（远期）：** 优先考虑找物网络 / 众包上报；蜂窝+GNSS 为重路线、非本学期默认（详见方案 §六）  
- 电池耗尽后：BLE / 蜂鸣 / LED 不可用；**NFC 与二维码仍可用**  
- 网页原型中的蓝牙、天气、通知、位置等均为 **模拟数据**

---

## 🔧 硬件要点

以下为[远期一体式伞柄的工程设计输入](plans/hardware-design-input-v1.md)，对应[外观概念图](prototype/hardware/concept.jpg)和[爆炸示意图](prototype/hardware/exploded.jpg)；目前没有该伞柄的施工图或样机。

工程设计输入采用 [FARE 1182 自动开伞直柄](https://www.fare.de/de/AC.Stockschirm.FARE.Collection.Square-grau--1182/)作为公开机械参考，并附有[带尺寸标注的占位布置图](plans/handle-reference-layout-v1.svg)和[伞柄立体概念图](plans/handle-3d-concept-v1.png)。图中仅 10 mm 伞杆直径来自公开产品资料，其余尺寸待实物测绘，布置图和立体概念图不可直接用于加工。

```text
伞面 / 伞骨 / 伞杆     → 挡雨与结构（优先级最高）
可拆卸智能伞柄         → BLE · 蜂鸣器 · LED · 无源 NFC · CR2032
备用电池（伞套卡槽）   → 附赠 1 颗 CR2032，免工具旋转仓
```

- ❌ 不做：充电口、线性马达、独立 GPS、屏幕  
- 🎯 续航 / IP67：设计目标，需样机实测  
- 🔁 归还入口：NFC 与二维码指向同一匿名联系页（本身不定位）

本学期按[实施指南](plans/implementation-guide.md)计划用**真伞 + 市售 BLE 防丢标签**做最小验证，不自研主板；仓库尚无真伞实测记录。

---

## 🔒 隐私与数据

最小权限：附近设备 · 位置 · 通知

| 数据 | 存放 | 保留 |
| --- | --- | --- |
| 原始 GPS 轨迹 | 仅端侧 | 永不上传 |
| 常驻点标签 | 端侧为主 | 至用户删除 |
| 位置快照 | 云端（远期） | 7 天 / 订阅 90 天 |
| NFC 消息 | 云端中转 | ≤24h，送达即删 |

当前原型阶段数据均为本地模拟。

---

## 🎯 价值假设（学生阶段）

本阶段 **不设收入目标**：

1. 是否接受「先是好伞，其次才是智能」  
2. 「安静防丢 + 最后出现位置」是否好懂、够用  
3. 丢后兜底是否有人愿意付费（只测意愿）

远期若验证成立，再考虑硬件利润定价与失物场景可选订阅。

---

## 🗓️ 学期路线图

| 阶段 | 时间 | 目标 |
| --- | --- | --- |
| **A** 概念与原型 | 第 1–2 周 | 方案入库、原型可演示、测试记录 |
| **B** 真伞最小验证 | 第 3–5 周 | 安装标签；分离提醒 / 寻物实测 |
| **C** 复盘答辩 | 最后 1 周 | 完成度、过程复盘、三分钟讲稿 |

### 学生版指标

| 维度 | 目标 |
| --- | --- |
| 原型可演示 | 引导 / 防丢 / 寻伞 / 电量 / 失物流程走通 |
| 概念边界清晰 | 标明非实时定位与模拟项 |
| 硬件可行 | 分离提醒与寻物各成功 ≥1 次并留记录 |
| 过程可证明 | Git 提交与过程日志有时间线 |

---

## 📁 仓库文档

| 路径 | 说明 |
| --- | --- |
| [`plans/product-plan-v4.1-student.md`](plans/product-plan-v4.1-student.md) | 完整产品方案（学生项目版） |
| [`plans/implementation-guide.md`](plans/implementation-guide.md) | 执行手册（含 Cloudflare Pages / PWA） |
| [`plans/hardware-design-input-v1.md`](plans/hardware-design-input-v1.md) | 远期一体式伞柄的工程设计输入与测试计划；尚无施工图或样机 |
| [`AGENTS.md`](AGENTS.md) | 协作者 / AI 仓库约定 |
| [`LICENSE`](LICENSE) | MIT |
| [`prototype/sanbuddy-prototype-v4.html`](prototype/sanbuddy-prototype-v4.html) | 可交互原型（V4，本地双击或 Pages 打开） |
| [`prototype/manifest.json`](prototype/manifest.json) | PWA 配置 |
| [`prototype/qrcode-h5.png`](prototype/qrcode-h5.png) | H5 体验二维码（非微信小程序） |

### 快速开始

1. 打开 https://sanbuddy-umbrella.pages.dev/ ，或本地打开 `prototype/index.html`
2. 走完：引导 → 首页 → 寻伞 → 电量（我的）→ 失物
3. （可选）手机浏览器「添加到主屏幕」体验 PWA

### 本阶段验收约定

- [x] 在线 Pages 可打开主流程
- [x] 文案标明模拟数据 / 非实时定位边界
- [x] PWA 可添加到手机主屏幕
- [ ] 同伴试跑反馈已记录（脱敏后入库）

### 体验入口

- **在线（推荐）：** https://sanbuddy-umbrella.pages.dev/
- **体验二维码（H5 演示，非微信小程序）：**

  ![伞伴 H5 体验二维码](prototype/qrcode-h5.png)

- **本地：** 打开 [`prototype/index.html`](prototype/index.html) 或 `sanbuddy-prototype-v4.html`
- **Cloudflare Pages：** 已部署；源目录 `prototype`，Build 留空（详见实施指南）
- **PWA：** 已在手机浏览器验证可「添加到主屏幕」（打开在线链接后添加）
- **边界：** 天气 / 蓝牙 / 位置 / 电量均为模拟，不连接真实设备

> 建议：每完成一小步就提交一次 Git，保留真实过程时间线。

---

**☂️ 伞伴 SanBuddy** — 好伞优先 · 服务按需 · 备用电池
