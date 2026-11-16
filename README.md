# 伞伴：智能雨伞课程项目

面向大一零基础课程展示的**软件交互原型与产品方案**。解决两个问题：出门忘带伞、用完容易把伞落下。项目没有接入真实硬件、天气接口或定位服务；页面上的相关数据均明确标注为模拟。

![智能雨伞硬件外观概念图](assets/hardware-concept.png)

## 立即运行

**推荐双击 `sanbuddy-prototype-v4-improved.html`**：这是根据新版 V4 方案完善的单文件交互原型，三张硬件图已内嵌，离线打开也能显示。`index.html` 是之前的简化演示版。也可在项目目录运行 `python -m http.server 8000` 后打开 `http://localhost:8000/sanbuddy-prototype-v4-improved.html`。不需要安装依赖。

## 演示顺序（约 3 分钟）

1. 点击“模拟：把伞落下”，观察分离提醒和最后出现位置。
2. 点击“模拟：即将下雨”，观察忘带伞提醒；再点击“模拟：找回雨伞”，观察提醒变化。
3. 点击“模拟：声光寻伞”，说明真实产品需蓝牙模块、蜂鸣器和 LED。
4. 操作“雨天应急”和“失物模式”，说明外部服务需要真实接口及用户确认。
5. 展示 [硬件结构图](assets/hardware-diagram.svg) 和 [实施计划](docs/plan.md)。

## 核心问题与解决方案

| 问题 | 软件原型展示 | 真实产品还需解决 |
| --- | --- | --- |
| 忘带伞 | 天气与携伞状态组合提醒 | 天气接口、可靠的伞与手机状态检测、通知授权 |
| 伞落在别处 | 分离提醒、最后出现位置 | 蓝牙硬件、系统后台运行与定位权限验证 |
| 伞在附近找不到 | 声光寻伞流程 | 蜂鸣器、LED、电源和蓝牙控制 |
| 真丢了 | 失物模式、NFC 归还和可选兜底流程 | NFC/二维码标签、匿名联系服务、实际售后规则 |
| 雨天没伞 | 避雨、共享伞、打车决策入口 | 地图、库存、叫车等第三方合作接口 |

**关键边界：**“最后出现位置”是手机与伞断连时的手机位置，不是伞的实时位置。仅靠网页或小程序不能证明后台防丢可靠。若将来要实现持续蓝牙监听，应先在目标手机上验证后台运行能力，再决定使用原生 App、系统查找网络或其他技术路线。

## 仓库内容

| 路径 | 用途 |
| --- | --- |
| `sanbuddy-prototype-v4-improved.html` | 新版 V4 单文件交互原型，内嵌三张硬件图 |
| `index.html`、`style.css`、`script.js` | 之前的简化演示版 |
| `assets/hardware-concept.png` | AI 生成的硬件外观概念图 |
| `assets/hardware-diagram.svg` | 可编辑硬件结构示意图 |
| `assets/hardware-prototype-v2.png` | 新版整伞硬件原型图 |
| `assets/hardware-exploded-v1.png` | 伞柄爆炸概念图 |
| `docs/plan.md` | 需求、问题、开发步骤和验收标准 |
| `docs/hardware.md` | 硬件组成及实现边界 |
| `docs/demo.md` | 展示讲稿与测试记录模板 |
| `.gitignore` | 排除临时文件 |

## 提交 GitHub

在 GitHub 新建**空仓库** `smart-umbrella`，不要勾选初始化 README。然后在本目录执行：

```powershell
git init
git add .
git commit -m "Add smart umbrella course prototype"
git branch -M main
git remote add origin https://github.com/你的用户名/smart-umbrella.git
git push -u origin main
```

上传前检查 `git status` 和 `git remote -v`。不要提交个人手机号、真实定位、账号密码、API 密钥或微信聊天原图。可选：在 GitHub 仓库 Settings → Pages 中选择 `Deploy from a branch`、`main`、`/ (root)`，获得在线演示地址。

## 当前完成情况

- [x] 需求与 V4 方案对照
- [x] 可运行前端原型
- [x] 硬件外观概念图与结构图
- [x] 演示与提交说明
- [ ] 真实硬件、真实后台蓝牙与天气接口（本次软件原型范围之外）
