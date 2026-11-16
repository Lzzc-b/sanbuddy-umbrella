# 硬件原型设计说明

## 精简版 V4 更新：两种伞型与 CR2032

![手动与半自动智能雨伞硬件概念图](../assets/hardware-prototype-v3.png)

![半自动智能伞柄爆炸概念图](../assets/hardware-exploded-v2.png)

新版图由内置 imagegen 生成。手动版与半自动版共用 BLE、蜂鸣器、LED、无源 NFC 与 CR2032 模块；半自动版需把电子件放在伞柄下部，避开弹簧通道。电池仓设想为免工具旋转结构，伞套附 1 颗备用 CR2032。图中二维码是**不可扫描的视觉占位**。

爆炸图只是装配概念。接头锁止、密封圈尺寸、PCB 固定、电池仓防水、IP67 和 12–18 个月续航都尚未验证。无源 NFC 和印刷二维码在电池耗尽后仍能被使用；BLE、蜂鸣器与 LED 则不能在完全断电时工作。

生成提示词摘要：`manual and semi-automatic folding smart umbrellas with detachable handle, tool-free CR2032 cap, spare cell in umbrella sleeve, LED, buzzer, NFC and QR`；`exploded semi-automatic handle with separated spring channel, sealed lower electronics bay, BLE PCB, piezo buzzer, LED, twist-open CR2032 cartridge, passive NFC and QR`。生成方式：内置 imagegen。

## 新版整伞原型与伞柄爆炸图

![新版智能雨伞硬件原型图](../assets/hardware-prototype-v2.png)

![智能伞柄爆炸概念图](../assets/hardware-exploded-v1.png)

新版两图由内置 imagegen 生成，均为概念渲染。图中的二维码是视觉占位，**不能扫描用于真实归还**。爆炸图表达部件组成与大致装配顺序；PCB 布线、接头锁止、密封圈尺寸、电池更换方式及防水等级均未完成工程验证。

生成提示词摘要：`realistic product render of folding smart umbrella with detachable handle, LED, buzzer grille, NFC and QR return sticker`；`isometric exploded view of smart umbrella handle with detachable shaft connector, O-ring, BLE PCB, piezo buzzer, LED, coin cell, passive NFC sticker, QR sticker and lower shell, no motor or GPS`。

## 原版概念图与结构示意

![智能雨伞硬件外观概念图](../assets/hardware-concept.png)

上图为 AI 生成的**外观概念渲染**，只用于展示设计方向；连接器尺寸、材料、内部空间和防水性能未经工程验证。生成提示词：`realistic studio render of a compact folded black umbrella and detachable matte charcoal ergonomic handle; discreet LED, NFC tap symbol, small speaker port; inset open umbrella; no text or watermark`。生成方式：内置 imagegen。

![智能雨伞硬件结构图](../assets/hardware-diagram.svg)

## 部件与作用

| 部件 | 作用 | 设计注意点 |
| --- | --- | --- |
| 伞面、伞骨、伞杆 | 挡雨与支撑 | 优先保证正常雨伞的强度、开合和重量 |
| 可拆卸伞柄 | 容纳电子模块 | 连接处要抗松动、防进水 |
| BLE 低功耗蓝牙模块 | 近场连接、分离检测 | 无法独立提供实时 GPS 位置 |
| 蜂鸣器、LED | 近场找伞时发声发光 | 声量、耗电和防水需实测 |
| 纽扣电池/电池仓 | 供电 | 续航需要根据发射频率与实际使用测试 |
| NFC 标签＋二维码 | 拾获者打开归还页 | NFC 不会主动发射位置；二维码作为兼容入口 |

## 数据流

伞柄 BLE → 手机检测连接状态 → 手机在分离时记录自身位置 → 用户查看最后出现位置。天气提醒则需要天气服务与手机通知权限。此图没有表达已完成的电路板、PCB 或量产结构。
