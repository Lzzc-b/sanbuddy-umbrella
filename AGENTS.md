# AGENTS.md · 伞伴 SanBuddy

给协作者与 AI 助手：改仓库前先读本文件与 [`README.md`](README.md)。

## 项目是什么

学生项目：**方案 + 可交互 H5 原型 + 真伞最小验证 + Git 过程留痕**。  
不真实收费、不上架微信小程序、不自研主板。

在线演示：https://sanbuddy-umbrella.pages.dev/  
源目录：`prototype/`（Cloudflare Pages 输出目录同此）。

## 目录约定

| 路径 | 含义 |
| --- | --- |
| `README.md` | 产品概览、快速开始、验收约定、体验入口 |
| `plans/product-plan-v4.1-student.md` | 学生版产品方案 |
| `plans/implementation-guide.md` | 分阶段执行手册 |
| `prototype/` | 静态 H5 + PWA；入口 `index.html` → V4 原型 |
| `LICENSE` | MIT |
| `AGENTS.md` | 本约定 |

有实测照片、过程日志、协作复盘时再新增文件，**不预建空目录**。

## 可以改

- 方案与实施指南中的文案、验收勾选、过程记录（脱敏）
- 原型交互与文案（保持「模拟数据 / 非实时定位」边界清晰）
- PWA `manifest.json` 与图标（勿引入 Service Worker 离线缓存，除非方案明确要求）
- README 体验链接、二维码说明、完成度勾选

## 不要做

- 不要把网页演示改写成「已上架微信小程序」或暗示可收费
- 不要提交密钥、账号 Cookie、未脱敏的同学姓名/联系方式
- 不要预建空的 `tests/`、`miniprogram/` 等半成品目录
- 不要无必要的 `git push --force`；回退用 `git revert`，保留历史
- 不要把大体积未压缩原图、无关二进制塞进仓库

## 怎么提交

1. 改前：`git status`；提交前：看 `git diff`
2. 一次提交只做一类事；message 用约定前缀，例如 `docs:` / `feat:` / `test:` / `revert:`
3. 重要步骤按实施指南推进；Pages 输出目录固定为 `prototype`，Build 命令留空

## 边界（必须写在用户可见处）

- 「最后出现位置」= 断连时的**手机位置**，不是伞的实时 GPS  
- 原型中的蓝牙 / 天气 / 通知 / 电量为**模拟数据**  
- H5 二维码标注：**非微信小程序**
