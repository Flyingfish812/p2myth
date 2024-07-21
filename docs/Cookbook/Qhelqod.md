# Qhelqod

> The Power of Leverage

Author: ah_ii

Proofread: Flyingfish812

> From Editor: This cookbook is too long, I suggest you only pick the part you need to read.

## Introduction

Qhelqod is a balanced ship with both offensive and defensive capabilities. The classic skill combo of Barrier and Mega Bomb guarantees the lower limit, while the main is able to pop turrets accurately, making Qhelqod a solid choice for beginners. Most importantly, the Gamma Apex grants Barrier the ability to reflect enemy lasers and deal high damage, which greatly improves Qhelqod’s upper limit in laser missions, allowing it to unleash limitless power in the hands of experienced pilots. This guide will first walk you through the main, Aura and Zen of Gamma Qhelqod (hereinafter referred to as “Qhelqod”), and then focus on speedrun strategies in laser missions.

## Main Weapon

Uqtor Bolts fire two columns of fast-travelling bullets forward continuously, so the randomness of critical damage has minimal impact. This means you don’t have to consider main cooldown and crit, allowing you to put more attention on Aura and Zen which are the main source of damage in laser missions. However, the main should not be overlooked, because sometimes its details can have a significant impact on speed and survival.

### Killing Time Required

Since Qhelqod is suitable for all laser missions, you need to master the killing time required by the main for invaders (mainly Sparrows and Ravens) of all affinities, be it Unprotected, Shielded or Armored. Because this allows you to **predict and switch targets earlier to avoid missing**. This is especially important in Act 1. For example, when facing Sparrows and Ravens, switching targets quickly or not may result in a time difference of about 1s. But fortunately, you don't need to practice it specially, because muscle memory will form slowly.

### Main Deceleration

The main shots slow down after traveling a fixed distance. This is not problematic in most cases. However, when you need to switch targets frequently, such as in Act 1, you should still fly closer and **hit invaders with full-speed main shots** to avoid missing.

The deceleration can be used to pre-fire more easily, so that a backrow Sparrow will be destroyed by the slow bullet the moment it arrives. Although it doesn't sound much, this will reduce the number of targets for laser reflection, making the reflection success rate higher.

### Utilizing Two Columns

The main is divided into two columns, neither too far nor too close. There are different techniques when facing different invaders.

1. When facing Sparrows, try to have each column attack one Sparrow each to maximize efficiency.
2. When facing Armored invaders with small cockpits, such as Herons, try to aim one column at the cockpit to crit. For Armored invaders with cockpits large enough, such as Vultures, Condors and Rocs, you should try to **aim both columns at the cockpit to crit**.
3. When facing Vultures, if you aim at the middle of the two turrets on the left or right side, the two columns of main shots can hit the two turrets separately and destroy them synchronously.
4. When facing Condors and Rocs, you can **aim one column at a backrow turret** to destroy it.
5. The last point, and the one that is most easily overlooked, is that you can deliberately make one column miss. But why? Because laser reflection depends on laser turrets, in some cases, you may need to leave a certain invader or turret alive so that they can successfully shoot lasers for Barrier reflection. The "preconditioning" of invaders such as lowering HP will be introduced later.

## Reflector Barrier

Reflector Barrier (hereinafter referred to as "Barrier") is the only qualitative upgrade of Barrier, which makes its **outer surface** reflect all lasers hit, causing damage to invaders. In this way, Barrier is transformed from a defensive Aura into an offensive Aura. The more lasers, the stronger the offensive capabilities. This is because the damage dealt by Barrier reflection is indirect, and **the potential amount of damage is not necessarily proportional to the energy held.**

A traditional offensive Aura such as Missile Swarm has a cycle like this: Gain energy - Release Missile Swarm - Deal damage

The part that determines the amount of damage is the size of the Aura, which is the amount of energy held. Therefore, the more energy you have, the more damage you can deal.

However, Barrier’s cycle is like this: Gain energy - Place Barrier - Reflect enemy lasers - Deal damage

There are two parts that determine the amount of damage: the Barrier and the reflected enemy lasers. The former is controllable, the latter not so much. Even if you have enough energy and a lot of large Barriers, if there are only a few laser turrets, the reflections will not cause much damage. On the contrary, if you have very little energy, only enough to put down the smallest Barrier, and multiple tracking lasers are aiming at the core, a round of reflections can still cause high damage.

This simple and clear principle is the basis for understanding Barrier gameplay. Therefore, the gameplay will be introduced by focusing on the two elements of Barrier laser reflection, namely Barrier and lasers.

### Target Selection

When an enemy laser (source laser) hits the outer surface of a Barrier, a reflected laser is immediately generated at the point of contact and **randomly selects an invader as a target, firing at a random part of the selected invader**. The target invader is usually the invader that fired the incoming laser (source invader), but can also be a random invader outside the Barrier.

The reflected laser has a certain tracking effect on the target it selects, and will automatically adjust the angle according to the movement of the invader. However, note that in rare cases, this will cause the reflected laser to deviate from the target and miss.

### Reflection Duration

The duration of the reflected laser is equal to the duration of the source laser, up to 1s (assuming the Barrier exists and is in contact with the source laser the whole time). However, note that **the reflected laser disappears immediately after the selected invader is destroyed**, even if the source laser still exists. Combined with its random target selection characteristics, this will bring a lot of variables.

Let's assume a scenario where there are two Sparrows with 1 HP standing still in a row, and only the backrow Sparrow is equipped with laser. Then, there are two possibilities when reflecting. The first possibility is that the backrow Sparrow is selected as target. In this case, the reflected laser will first pass through the front Sparrow and then hit the backrow Sparrow, so both of them will be destroyed. The second possibility is that the front Sparrow is selected as target. In this case, the reflected laser disappears after destroying the target, causing the backrow Sparrow to survive. From this example, it can be seen that when the total number of reflected lasers is less than the total number of invaders alive, even if they line up perfectly, the result is still unpredictable.

Therefore, when you want to take out all invaders on the field with one round of laser reflection, you need to **make sure that the total number of reflected lasers is greater than or equal to the total number of invaders on the field**. Moreover, as mentioned above, since reflected lasers tend to choose the source invader as target, you need to try to **ensure that the remaining invaders on the field all have laser turrets**. Because it is very likely that the multiple lasers fired by an invader are all reflected back to itself, while the invader without laser turrets is unscathed. However, when mass laser MIRVs appear, this situation can be better avoided.

### Damage Calculation

Each reflected laser deals 10 damage per second, but knowing the damage amount alone is of limited help in damage calculation, because:

1. The randomness of the reflected lasers' target selection may cause imbalanced damage distribution. This can cause them to deal excessive damage to some invaders and insufficient damage to others.
2. The randomness of the reflected lasers’ invader part selection may cause a large number of reflected lasers to hit a certain source laser turret. This will quickly destroy it, causing the reflected lasers to disappear due to the disappearance of the source laser. Invader is not destroyed because the reflection damage is interrupted.

Therefore, when you want to wipe out all invaders on the field with a round of laser reflection, you always need to leave a margin so that **the potential reflected damage is (much) greater than the total HP of invaders**. In general, the higher the potential reflected damage is than the total invader HP, and the higher the total number of reflected lasers is than the total number of invaders, the greater the possibility of taking out all invaders at once. This also means that damage calculation is not a set thing.

### Preconditioning

In order to increase the success rate of one-shotting all invaders on the field with Barrier reflection, you often need to **precondition the invaders with the main or Mega Bomb to lower their total HP or reduce the number of selectable targets for reflection**. To do this, you have to observe the layouts of invaders and laser turrets to determine what kind of preconditioning is needed. This is one of the most challenging aspects of Qhelqod and requires a lot of trial and error. Please pay attention to the following points:

1. Generally speaking, you should **reflect as many lasers as possible and try to cause more damage than you actually need** to reduce the impact of randomness. This will increase the margin of error of preconditioning.
2. Although Sparrows of any affinity equipped with lasers can be killed directly by their own lasers being reflected, their large presence greatly increases the randomness of the reflected lasers’ target selection. Therefore, if Sparrows are the only invaders remaining, you need to ensure that their number is small enough when reflecting, such as less than three. This is most common in Act 1 and 2. In later acts, if the number of source lasers on the field is tight, you also need to **try to eliminate Sparrows** when preconditioning.
3. For Ravens, Herons and Eagles, if the amount of potential reflected damage from their source lasers is less than or equal to their health (with Armored enemies you need to take damage reduction into account), they cannot be killed by their own laser reflections. In the absence of other source lasers, you need to precondition to lower the health below the amount of reflected damage.
4. When using the main to lower HP when preconditioning, because it is difficult to directly damage the hull, you will inevitably cause more damage to a certain turret. At this time, it is obvious that you need to sacrifice the turret that generates the least amount of source lasers.
5. After using Mega Bomb, when facing Shielded or Armored Ravens with low health hiding in the back, you may want to fly to the upper half of the screen and use the main to clean up, to reduce the number of selectable targets.

### Barrier Fade-Out Time

The health of a Barrier is proportional to its radius, and the health is consumed when blocking bullets or reflecting lasers. Even if it is not damaged, the Barrier will disappear on its own after a certain period of time. The smaller the Barrier, the faster it disappears.

The fade-out time is the short time that the Barrier continues to remain in place after the health is exhausted, lasting about 0.6s. This time is fixed and is **independent of the radius**. The outline of the Barrier will fade and eventually disappear. During this short period of time, Barrier is **still able to continue reflecting lasers** or blocking bullets. Almost all uses of Barrier are based on this key feature, which is also the core reason why Barrier reflection has great damaging potential with only a small amount of energy.

However, according to actual experience, the fade-out time **does NOT mean invincibility**, because if too many lasers hit a Barrier at the same time, it will still disappear directly, as if the fade-out time is skipped. So, the fade-out time can be understood as the Barrier instantly regaining a lot of health when its normal health is exhausted, but it only lasts for a short time. Therefore, when it receives too much damage, the large amount of health gained in that instant is also directly consumed, causing the Barrier to disappear directly.

This feature allows Barriers to be used to "block" Doomsday Lasers. Doomsday Laser do not have the ability to remove Barriers, they just deal massive damage, so it takes a very brief time for them to break through the high HP of each placed Barrier. A little bit of it adds up, so by stacking a lot of Barriers, you can temporarily block Doomsday Lasers, and even reflect a small amount of damage. Of course, this technique requires strict Barrier placement, so use it with caution.

Although powerful, it is very difficult to make the best use of the fade-out time of each Barrier. Because the slightest mistake in timing and health judgment will cause it to trigger prematurely, causing lasers to leak and hit the core. Therefore, when reflecting lasers, you need to try to keep yourself under the protection of two or more layers of Barriers. **This is because the fade-out time of multiple layers of Barriers is much safer and more reliable than that of one layer**.

### Barrier Placement (No Laser MIRVs)

Barriers cannot do damage on their own, they rely on source lasers to do damage, which means that the placement and timing of Barriers is closely related to the position and firing timing of enemy laser turrets. In addition, in laser missions with high bullet density, the placement of Barriers is also related to Mega Bomb charging positions. Therefore, the placement and size of the Barrier depends on the role you want it to play, whether it is offensive or defensive.

In the Act 1 and 2, invaders generally appear above the horizontal centerline of the screen. Therefore, it is necessary to ensure that the highest point of the Barrier is near the horizontal centerline or lower to **avoid encapsulating invaders**. The general move is to quickly slide the ship down to place Barrier after gaining energy, and then fly back to the original position to destroy invaders with main or charge Mega Bomb, and repeat the cycle. These Barriers can reflect lasers and block stray bullets to help charge Mega Bomb. At this time, **Barrier can be placed as soon as you have energy**, but there are a few details to pay attention to:

1. New Barrier can be placed a little behind the old Barrier to **make full use of the old Barrier's fade-out time** in order to increase energy efficiency. This is very helpful when facing dense bullets.
2. Two or more Barriers can be **placed horizontally in an alternating pattern** like Audi logo, and part of the Barrier can be placed outside the screen. This is done to increase the total width of the reflection surface so that lasers that extend outside the screen can also be reflected.
3. When ensuring that enough lasers can be reflected and invaders can be one-shotted, it is better to use the same amount of energy to place a single large Barrier rather than multiple small barriers, to reduce unnecessary movements and lower the number of operations.

In the following acts, the above details still apply, but there are a few other points to note:

1. Due to the increase in the amounts of bullets and lasers, a single layer of Barrier sometimes cannot stably complete a round of reflection. At this time, if energy is sufficient, it is recommended to **stack two or more layers to reflect. In addition, Barriers can be placed in advance to prepare for upcoming waves**.
2. Try to have a rough idea of the remaining health of each Barrier placed, and anticipate when they will be destroyed. This is not complicated, because enemy lasers deal additional damage to Barriers, so in laser-heavy missions, even the largest Barriers will disappear after a round of reflections. Therefore, all Barriers placed in the front row to reflect lasers can be considered **disposable**.
3. When facing dense bullets, placing a Barrier too early may cause it to not last until the moment of reflection. At this time, you may want to use the remaining Barriers on the field or place a small Barrier to help survive and absorb energy particles or graze bullets. Wait until the moment before lasers fire, you can then place a max size Barrier to reflect as many lasers as possible to maximize damage.
4. When you need to reflect multiple rounds of lasers in the same wave, please pay attention to energy conservation. **Do NOT absorb all energy at once**.
5. When invaders appear at a very low position, Barrier positions should also be lowered accordingly to avoid encapsulation. Therefore, you will need to frequently fly to the bottom line of the screen to place Barriers. At this time, pay attention to quickly adjust the relative position of your finger and the ship.

### Barrier Placement (With Laser MIRVs)

The large amount of lasers generated by laser MIRVs is an important source of reflection damage, so they need to be fully utilized.

Before introducing how to deal with laser MIRVs, let's first understand its characteristics. Laser MIRVs are similar to bullet MIRVs in that they both have a **0.5s delay after being fired before they can be detonated**. During this 0.5s, its properties are like bullets, and a collision with the core will cause death. After 0.5s, the approach of the ship will cause them to be detonated. After a 1s delay, 5 or 9 lasers lasting about 0.6s are evenly shot out from the explosion point in all directions. This duration is close to Barrier fade-out time, which means that the smallest Barrier can usually successfully reflect a round of lasers emitted from laser MIRVs.

When facing laser MIRV turrets, the first thing to do is to observe. Unlike normal laser turrets that take 3s to fire after invaders enter the field, **the firing time of laser MIRV launchers or bloomers are not fixed, and it is impossible to tell from their appearances**. Therefore, only by playing the game can you observe when these turrets fire. The relationship between the firing timing of normal lasers and laser MIRV turrets directly affects the way to deal with them. There are two main ways:

1. When all or most laser MIRVs are fired at least 1s before normal lasers, you can **fly out of the Barrier relatively freely to activate as many laser MIRVs as possible at once** without being blocked by normal lasers that fire later. To do this, first you need to place down a large Barrier when invaders arrive. The lower the laser MIRV turrets are, the lower this Barrier should be. Then, when the first round of laser MIRVs are fired, immediately fly out of the Barrier from the bottom center of the screen upwards a little, detonate all laser MIRVs, and quickly return. After returning, you can place a second Barrier a little below the first Barrier to ensure safety. At this point, if all invaders on the field can be one-shotted by reflections, you can start to prepare for the next wave in advance, such as charging Mega Bomb.
2. When all or most laser MIRVs in a wave are fired after normal lasers, or before normal lasers, but the interval is less than 1s, it is difficult to fly out of the Barrier safely. Because normal lasers will block movement, and the screen may have already been filled with bullets. This forces you to activate laser MIRVs when the ship is inside the Barrier. At this time, you need to make sure that the first Barrier reflects as many normal lasers as possible, while not absorbing too many undetonated laser MIRVs. When laser MIRVs are fired, you need to **move slightly in the upper part inside the Barrier to activate as many of them as possible**. Due to the limited activation position, they may not detonate at the same time. Therefore, you need to place the second and subsequent Barriers as soon as you have energy, and make them block as many rounds of lasers as possible to maximize damage.

There are some other Barrier placement techniques that help increase speed, or further increase reflected damage. This is helpful when you need to squeeze more damage out of the laser MIRVs faster, whether it is because invaders have too much HP, or because the turrets’ tiers are too low, or the level of laser MIRVs they produce is too low. The specific techniques are as follows:

1. After activating all laser MIRVs, the second Barrier can be placed sideways and slightly up, so that it overlaps less with the first Barrier. This will **increase the total width of the reflection surface**, causing more damage. You can hide in the overlap area during the reflection to ensure safety.
2. When you have enough energy, you can place two large symmetrical Barriers against the lower left and right edges of the screen. This will increase the total width of the reflection surface and reflect more lasers from laser MIRVs. This is usually effective when facing a Condor or Roc.
3. When you need to fly out of the barrier to quickly activate all laser MIRVs, it is very important to **find an appropriate activation path**. Depending on the positions of turrets and bullets on the field, the path can be adjusted accordingly.
4. Usually, you can fly into laser MIRVs as soon as you see it appear, without calculating the 0.5s detonation delay. This is because players have reaction time, and the max move speed of ships are limited. Therefore, when you fly to their positions, 0.5s have passed.
5. A large Barrier closer to the laser MIRV detonation point will reflect more lasers it generates (same for spread laser turrets, as you can place Barriers close to their muzzles). You can put the top of the Barrier close to laser MIRV launchers and then detonate laser MIRVs they shoot as early as possible. Alternatively, you can detonate them first and then place the Barrier close to their detonation points. The advantage of the former is that you can move more safely to activate them because the Barrier will also block incoming bullets; the advantage of the latter is that the delayed Barrier placement prevents you from accidentally absorbing undetonated laser MIRVs.
6. Small Barriers placed high up on the screen effectively increase the total width of the reflection surface. But in fast-paced missions, there is usually no opportunity to do this. However, it is suitable for dealing with Rocs, because they come in slowly, giving you plenty of time to prepare. This requires delicate energy control.

### Speed Lasers

Barriers are good at blocking speed lasers, as they do less damage than normal lasers. However, reflecting them also does less damage, so they are not a major source of damage. Just be aware that they fire 1s after locking onto the core, so they may affect laser MIRV activation paths. When there are too many of them blocking your way, depending on the firing time of laser MIRVs, you will need to decide whether to activate them with the ship being inside the Barrier, or wait until speed lasers disappear before activating them all together.

The last and most important point about Barriers is that the situation is ever-changing. You don't have to stick to given rules. The key is to find a way to play that suits you in each mission.

## Mega Bomb

Reflector Barrier is fun, but please don’t forget the destructive power of Mega Bomb. And for Qhelqod, there are more opportunities to Zen charging than other ships because Barriers provide excellent protection.

The usage of Mega Bomb is described in detail in the Proxymar guide, which is recommended for reading.

Here are some things to pay special attention to:

1. Mega Bomb directly damages invaders’ hulls, unlike the main and reflected lasers, which sometimes hit turrets. This means that **Mega Bomb is the most reliable means of preconditioning**, since it is less possible for reflection damage being lost due to accidental destructions of laser turrets, reducing randomness.
2. Another advantage of Mega Bomb preconditioning is that it takes out Sparrows and Unprotected Ravens instantly, reducing the number of operations. Fast preconditioning also means reduced randomness.
3. In most cases, you need to **charge Mega Bomb inside the Barrier, close to the top edge, to make full use of the core damage**. The general move is to quickly swipe the ship down (the distance is roughly equal to Barrier radius) to place the Barrier, and then quickly return to the original position to start charging the Zen.
4. The Mega Bomb core should cover as many Herons and Eagles as possible, especially when they appear in the front row. **Pre-charging Mega Bomb is very helpful**, because it alleviates the impact of the invaders’ random movements.
5. The Mega Bomb core should be used placed on front row Vultures. When facing the backrow Vultures, if the number of source lasers is insufficient, coring it will save you about 1.5s. However, when there are two or more Herons or Eagles in front, you may still want to core them. Of course, sometimes you can also bet on them to converge with the Vulture.
6. When choosing Zen charging positions, especially when charging times become longer, you need to consider turret collision more than bullets, because Barriers can’t save you from that. After all, Qhelqod is not Baqlor.
7. When facing some Vultures, Condors or Rocs, coring them or not determines whether they can be one-shotted later by laser reflections.

## Speedrun Strategies

Surprisingly, Qhelqod’s speedrun strategy in laser missions **revolves around Mega Bomb** rather than laser reflections.

This is because Barrier laser reflection outputs damage only when enemy lasers fire, which means there is a delay. In comparison, a charged Mega Bomb is able to deal damage the moment the invaders arrive, and it is possible to directly take them all out before lasers fire, which is naturally faster than laser reflection. In addition, even if you decide to use laser reflection to eliminate invaders, you often need to precondition using Mega Bomb.

However, as a Zen, too much continuous use will cause a significant increase in charging time, which will have a counterproductive effect. Therefore, it is imperative that we judge the Mega Bomb’s value in each wave, in order to make reasonable choices and maximize efficiency.

### Mega Bomb Value

We need to judge the value of Mega Bomb based on invader formation (including the layout of invaders and laser turrets). For each formation, we need to ask ourselves two questions and get answers by playing. We can divide formations into 4 categories based on the permutations and combinations of these two questions and the corresponding answers. The table is as follows:

| Formation Type | (When using the main only,) Can invaders be destroyed before  the first round of lasers fire? | (When using the main only,) Can invaders be destroyed by the  first round of laser reflection? |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Type A         | Y                                                            | Y                                                            |
| Type B         | Y                                                            | N                                                            |
| Type C         | N                                                            | Y                                                            |
| Type D         | N                                                            | N                                                            |

(The first round of lasers refers to the first one of normal lasers and the lasers generated by the laser MIRVs, and does not include speed lasers.)

Next, we will discuss the value of Mega Bomb in each of the 4 categories of formations.

- Type A:

    | Formation Type | (When using the main only,) Can invaders be destroyed before  the first round of lasers fire? | (When using the main only,) Can invaders be destroyed by the  first round of laser reflection? |
    | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | Type A         | Y                                                            | Y                                                            |

    This formation is usually seen in Act 1 and 2, and is usually composed of Sparrows and/or Ravens, and sometimes Heron. In addition, they are usually equipped with enough lasers, making the potential reflection damage greater than their total HP. Or, although lasers are insufficient, the main can easily lower their HP, allowing the reflection to one-shot.

    With the exception of Wave X-1, using Mega Bomb in this formation is **less valuable**, as there are too few invaders, wasting AoE damaging capability. Therefore, this formation is **suitable for letting Mega Bomb cool down** and using the main to deal with invaders.

    In addition, this formation is very **suitable for main preconditioning before one-shotting with reflection**. You can place a Barrier immediately after short main preconditioning and **pre-charge Mega Bomb** for next wave.

    However, when the previous wave is also a Type A formation, you can pre-charge Mega Bomb in the previous wave and vaporize all invaders in this wave instantly. The premise for this is that the Mega Bomb has been fully cooled down and the next wave does not require Mega Bomb. Or, act transition is coming next, giving you more time to charge.

- Type B:

    | Formation Type | (When using the main only,) Can invaders be destroyed before  the first round of lasers fire? | (When using the main only,) Can invaders be destroyed by the  first round of laser reflection? |
    | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | Type B         | Y                                                            | N                                                            |

    The only difference between this formation and Type A formation is that invaders are not equipped with any laser turret. In laser missions, this formation rarely appears.

    Except for wave X-1, using Mega Bomb in this formation is **less valuable**, reason being similar to Type A formation. However, when the previous wave is a Type A formation, you can pre-charge Mega Bomb in the previous wave and vaporize all invaders in this wave instantly. The premise for this is that the Mega Bomb has been fully cooled down and the next wave does not require Mega Bomb. Or, act transition is coming next, giving you more time to charge.

- Type C:

    | Formation Type | (When using the main only,) Can invaders be destroyed before  the first round of lasers fire? | (When using the main only,) Can invaders be destroyed by the  first round of laser reflection? |
    | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | Type C         | N                                                            | Y                                                            |


    This formation usually appears from Act 2. There are a wide variety of combinations, from Sparrows to Rocs. The biggest feature is that **source lasers are abundant, usually including plenty laser MIRVs**. Another feature is that although the total HP of invaders may be high, the number of them (especially Sparrows and Ravens) is small, so the need for preconditioning is low.

    Using Mega Bomb in this formation is **generally low value**, as lasers are so numerous that a round of Barrier reflection is capable of doing so much damage and one-shotting everything, making Mega Bomb’s damage less critical. Therefore, this formation is **suitable for letting Mega Bomb cool down** and using laser reflection to kill invaders.

    However, when two conditions are met at the same time, Mega Bomb has higher value: first, Mega Bomb (in conjunction with the main) is able to destroy invaders before lasers fire; second, Mega Bomb has been fully cooled down, and the increase in charge time has little to no effect on upcoming waves.

    Additionally, this formation is **best suited for main preconditioning before one-shotting with reflection**. You can place Barriers right after preconditioning (and quickly activate all laser MIRVs) and **pre-charge Mega Bomb** for next wave.

    This formation is the most comfortable one because the choice is flexible. Moreover, tons of damage are dealt by simply reflecting a round of lasers, allowing you to pre-charge Mega Bomb easily.

- Type D:

    | Formation Type | (When using the main only,) Can invaders be destroyed before  the first round of lasers fire? | (When using the main only,) Can invaders be destroyed by the  first round of laser reflection? |
    | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
    | Type D         | N                                                            | N                                                            |


    This formation appears in large numbers starting from Act 2. There are a wide variety of combinations, from Sparrows to Rocs. The biggest feature is that the potential reflection damage is lower than the total HP of invaders, or there are too many selectable targets for reflection. Therefore, preconditioning cannot be completed by the main alone.

    Using Mega Bomb in this formation has the **highest value**. Because often times, **after Mega Bomb preconditioning, the formation instantly meets the conditions for reflection one-shotting**. This is a huge help because it allows you to place Barriers in advance and pre-charge for the next wave. And if the next wave happens to be this formation, you can pre-charge again. This kind of interlocking 

    After releasing Mega Bomb, when you are unsure whether the conditions for one-shotting with reflections is met, or when multiple waves of reflection are required to eliminate invaders, you have to use the main to finish off the remaining ones after the lasers are fired.

    In addition, when Mega Bomb (in conjunction with the main) is able to destroy invaders before lasers fire, the value of using Mega Bomb is also very high. Try to pre-charge so that the core will explode on the key invaders as soon as they arrive, to alleviates the impact of the invaders’ random movements.

    Since this type of formation appears frequently, **you may need to charge in consecutive waves**, so the charging time will inevitably become longer. However, try to release it before lasers fire.

    Analyzing the value of using Mega Bomb in various formations and thinking about how they connect with the previous and next waves (what advantages does pre-charging bring) help us better judge priorities and optimize its use.

## Conclusion

Mastering the placement of Barriers is a basic skill, while the essence of Qhelqod speed-running is to efficiently reflect lasers through preconditioning to try to create opportunities for pre-charging Mega Bomb and maximize its benefits. There is no unique solution to the same task. Different strategies and rhythms may lead to the same result in different ways.


