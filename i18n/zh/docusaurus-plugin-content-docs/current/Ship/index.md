import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import tag from '/src/css/tag.module.css';

# 所有战机

> 战机图鉴，用于查询战机信息

## 简介

游戏中的战机分为三种类型：破盾型、穿甲型和暴击型。战机的主武器分别针对不同类型的敌机。

- 破盾：对敌机护盾造成 2.5 倍伤害。
- 穿甲：忽略装甲敌机 30% 的伤害减免。
- 暴击：攻击时有 25% 的几率造成 150% 的伤害。

战机的技能分为三类：主武器、光环、禅宗。光环和禅宗的介绍已在各自的章节中提供。

战机的主武器也随着升级而发生变化。与光环和禅宗不同，主武器升级到终极等级几乎不会带来任何质变，所以战机的主武器一般都是最后升级的。

以下是战机升级的数据：

| 等级 | 1    | 2    | 3    | 4    | 5    | 终极 |
| --- | ---- | ---- | ---- | ---- | ---- | ---- |
| 花费 | 0    | 100  | 250  | 500  | 750  | 1250 |

## 战机目录

施工中……

<Tabs>
  <TabItem value="shield" label="破盾" attributes={{className: tag.shield}}>
    破盾战机：
    <a href="Shinova">
        <img src="/ships/ship_1.png" style={{zoom:0.2}}/>
    </a>
    <a href="NC-150">
        <img src="/ships/ship_2.png" style={{zoom:0.2}}/>
    </a>
  </TabItem>
  <TabItem value="armor" label="穿甲" attributes={{className: tag.armor}}>
    穿甲战机：
  </TabItem>
  <TabItem value="hull" label="暴击" attributes={{className: tag.hull}}>
    暴击战机：
  </TabItem>
</Tabs>