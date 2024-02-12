# Invaders and Turrets

> That's something you combat with.

## Introduction

In the game, there are 7 types of invaders in 3 different affinities: Shielded, Armored, and Unprotected. The invaders from small to large are: Sparrow, Raven, Heron, Eagle, Vulture, Condor, and Roc.

The XP earned for killing each invader type is shown below. It is the same for all ranks, all leagues and all mission types. Note that when using revives, the invaders killed during the Act where you are unable to pass through are also counted.

| Invader | Exp  |
| ------- | ---- |
| Sparrow | 1    |
| Raven   | 6    |
| Heron   | 14   |
| Eagle   | 24   |
| Vulture | 60   |
| Condor  | 100  |
| Roc     | 180  |

The hitpoint of each type of invaders is the same, no matter which league you are in. Their hitpoints are as follows:

|         | Shielded | Shield+Hull | Armored | Hull |
| ------- | -------- | ----------- | ------- | ---- |
| Sparrow | 5        | 2+3         | 4       | 5    |
| Raven   | 31       | 13+18       | 24      | 27   |
| Heron   | 73       | 31+42       | 56      | 63   |
| Eagle   | 128      | 55+73       | 99      | 110  |
| Vulture | 315      | 135+180     | 243     | 270  |
| Condor  | 525      | 225+300     | 405     | 450  |
| Roc     | 945      | 405+540     | 729     | 810  |

## Ship Main Weapon vs Invader Affinity

There are 3 different affinities of invaders: Unprotected, Shield and Armor. A fun fact, but all invaders are actually named after birds. All except Roc are real life birds, while a Roc is mythical gigantic bird, with claws big enough to catch an elephant.

All ship weapons deal normal damage to Unprotected invaders. However, ships with HI weapons can deal crits to Unprotected invaders. There is a 25% chance of dealing crits. Each projectile that hits the invaders is subjected to this probability, which explains why many HI rapid firing main weapons appear to crit all their shots. Each crit does 1.5 times damage of the normal main weapon damage. On average, this means a ≈12% DPS bonus from HI weapons.

Shield invaders have a blue outline around them which is their shield. While the shield is up, they are unable to be harmed. This means that you are unable to pop off any turrets while the shield is up. Shields account for ≈40% of their total health. They have overall, ≈25% more health than Unprotected invaders. Once their shield is down, they act like Unprotected invaders and HI weapons can deal crits on them. Ships with SB main weapons deal 150% more damage to shields, or 2.5 times the damage of other weapon affinities. Because shields only account for ≈40% of their health, the overall effectiveness of SB ships is ≈30% more than AP weapons. If any invader stripped of its shield is untouched for 4s (you do not deal any form of damage to it), it will completely regenerate its shield back to full health, however any damage done to its hull remains.

AP main weapons are the only weapons that are able to deal full 100% damage to Armor invaders (discount apexes). All other kinds of damage, which includes HI and SB weapons, even damage dealt through Auras and Zens (even if it's by a ship with an AP main weapon), are reduced by 30%. (This excludes apexes, as some apexes clearly state the Aura or Zen is AP and thus deal the full 100% damage on armor invaders) However, if you deal any form of damage to the cockpits of Armor invaders, you bypass this armor damage reduction and deal the full 100% damage. You can even score crits with a HI weapon if you aim it at the cockpit of Armor invaders.

The table below shows the penalty in the average time to kill a sufficiently large invader for using a mismatched main weapon affinity, taking the matching weapon affinity as the base. All base cases are underlined below. The table also includes Aura/Zen, which have no affinity (discounting apexes) and thus suffer a penalty in all cases. For armor invaders, the HI and SB weapons did not hit the cockpit of armor invaders (this bypasses armor damage reduction) at any point of time.

It can thus be concluded that Armor invaders are the most resistant. Thus, it is crucial to have a ship with an AP main weapon. It can also be said that it is not essential to have a good ship that has a HI weapon since the penalty is much less than that of Shield and Armor invaders.

Invaders can sometimes appear to be moving outside of your screen boundaries. However, they are not actually outside of your straight firing weapon's range, because the camera actually moves when you change sides of the field. This means that there is actually much more horizontal space than you can actually see.

The following sections explain the different types of turrets that can be mounted on the different types of invaders generally speaking, as well as the health of each of the 3 affinities of each invader type. By generally speaking, some missions have exceptions which can feature turrets that are not listed under the corresponding invader here. These turret layouts refer to mostly the General mission types. Go to the Missions section, then under each of the mission types to find out these exceptions. Note that Armor invaders are always 90% of the health of Unprotected invaders, rounded down to the nearest integer. The Shield of Shield invaders are also 2/3 of the health of the corresponding Unprotected invader type, while the hull of Shield invaders are always exactly half the health of the corresponding Unprotected invader type, both rounded down to the nearest integer.（这句话你看下是不是英文原文写错了）

Also of noteworthy in relation to turrets, if an invader has no turrets left alive i.e. all turrets are popped off, it's health (separate from turret health, although damaging a turret also does the same damage to the invader itself) will decay until zero, where it will self destruct.

## Turrets

Each invader will be equipped with several types of turrets. An annoying thing is that, there is distance where bullets continue to exist even as they exit your screen, and thus are able to deal damage to barriers that span beyond the screen. This distance is exactly 7, that is to say, bullets still exist within this distance (and may even fly back to screen!). 

Generally speaking, each type of turret is divided into 4 tiers. For some turrets, we have an additional tier 0 to differentiate them from tier 1 (since they usually have the appearance of tier 1 turrets but with weaker attacks). Each tier of turret has a different mark, the mark corresponds to the frequency and cooling time of the turret. The higher the mark, the lower the attack frequency and the shorter the cooling time.

Currently, there are 19 types of turrets in the game. The turrets are as follows:

1. Pellet
    - Fixed
    - Spinner
    - Wall
2. Darts
    - Tracker
    - Spinner
3. Shurikens
    - Tracker
    - Tide
    - Spinner
4. Boomerangs
5. MIRV (Bullet / Laser)
    - Launcher
    - Bloomer
    - **Caged**
6. Laser
    - Shotgun
    - Tracker
    - Speed
7. Doomsdays
    - Bomb
    - Laser
    - MIRV
    - Super MIRV

## Detailed Page

- [Invaders](Invaders.md)

- [Pellets](Pellets.md)
- [Darts](Darts.md)
- [Shurikens](Shurikens.md)
- [Boomerangs](Boomerangs.md)
- [Lasers](Lasers.md)
- [MIRVs](MIRVs.md)
- [Doomsdays](Doomsdays.md)