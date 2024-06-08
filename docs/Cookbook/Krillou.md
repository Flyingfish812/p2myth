# Krillou

> Stand still, charge, avoid turret collision, and win.

Author: Flyingfish812

## Introduction

Krillou's attack patterns are quite standard, with a Main Weapon firing every 0.35 seconds, a Stun EMP that stuns invaders, and a Mega Bomb. While attacking, it also incorporates a touch of defense. The interesting aspect of this skill combination is that the duration of the Stun EMP is just enough to charge a Mega Bomb to inflict massive area damage. This allows players to charge the Mega Bomb without being restricted by the timing between two waves.

What's even more intriguing is its Compressed Blast APEX, which expands the core explosion range of the bomb, preventing invaders from escaping during the charge time. Combined with the Stun EMP, this skill can be used frequently, leading to unexpected results in certain levels.

This guide will focus on the application of the Compressed Blast APEX, without distinguishing between basic and advanced sections.

## Main Weapon

Based on practical observations, Krillou's Main Weapon damage is approximately 12, including an area damage of 2. The bullet speed of the Main Weapon is moderate, with no significant drawbacks, making it rather unremarkable. However, in speedrunning, missing a single shot from the intermittent Main Weapon can disrupt the entire game's rhythm. Therefore, improving the Main Weapon lies in the ability to accurately fire bullets at invaders in a timely manner, similar to Jeria's prefire skill.

The technique for prefiring is almost identical to Jeria's, with one difference being that Krillou's Main Weapon interval (0.35 seconds) is shorter than Jeria's (0.4 seconds). In fact, from the perspective of accuracy requirements, Krillou is more challenging. Most players find Jeria more difficult to operate because Jeria's Main Weapon alternates significantly between left and right, demanding higher precision in positioning. Although Krillou also follows the left-right alternating rule, each shot from the Main Weapon does not deviate excessively from the center, thus allowing the alternation to be largely ignored in positioning operations.

Additionally, it is recommended to attack at close range with Krillou's Main Weapon to reduce the chances of missing. The ideal Main Weapon operation is demonstrated as follows.

<img src="/KrillouCB/krillou1.gif" style={{zoom:0.75}}/>

## Damage Calculation

Damage calculation is a key consideration for most intermittent-firing Main Weapons, typically presented as "how many shots are needed to eliminate an invader." During gameplay, understanding the number of Main Weapon shots required for different invaders in advance can help develop a more systematic approach. It's important to note that the Stun EMP's damage can often replace the final shot. Therefore, in practice, make full use of the Stun EMP whenever possible.

Here are some common data points:

|       | Armored                                                      | Shielded                                                     | Unprotected                                             |
| ----- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| Raven | 2 mains                                                      | 3 mains<br />2 mains + moderate aura                         | 3 mains<br />2 mains + moderate aura                    |
| Heron | 5 mains<br />4 mains + 3 blasts<br />4 mains + big aura<br />CB + full aura | 7 mains<br />6 mains + 1~2 blasts<br />CB + moderate aura    | 6 mains<br />5 mains + 2 blasts<br />CB                 |
| Eagle | 9 mains<br />8 mains + moderate aura<br />CB + 4 mains       | 11 mains<br />10 mains + big aura<br />10 mains + 5 blasts<br />CB + 4 mains | 10 mains<br />9 mains + moderate aura<br />CB + 4 mains |

We don't consider vultures, condors and rocs, as they always need tens of mains to eliminate. In missions, please focus on how to optimize your strategy to invaders smaller than eagle.

## Compressed Blast (CB)

Krillou's essence lies in the use of the Compressed Blast. Unlike the usual method of charging the bomb first and then using the aura, Krillou's Compressed Blast typically requires using the Stun EMP first before charging the bomb. This is because, in missions with denser darts, finding the right time to charge can be difficult. Using the Stun EMP first can provide additional charging time. Moreover, the benefits of the Compressed Blast are significant. When Herons and Eagles appear in groups, successfully using the Compressed Blast can greatly alleviate pressure.

The following figure demonstrates an example of using the Compressed Blast. When the invaders are ready, use the Stun EMP immediately, then charge a bomb to eliminate the invaders. Since the Stun EMP deals up to 10 damage, it is usually sufficient to make up for any shortfall in the Compressed Blast's damage.

<img src="/KrillouCB/krillou2.gif" style={{zoom:0.75}}/>

Of course, while this technique seems straightforward, there is a significant issue: how to determine the position for the Mega Bomb. Unlike the Ion Cannon, the stun effect of the Stun EMP does not stop the invaders from moving. In other words, while charging the bomb, although the invaders cannot fire, they can still randomly move, causing their turrets to collide with your Ship's core.

Additionally, the Compressed Blast has a range of only 200, so you have to charge in the middle of the invaders to ensure it covers more invaders. In practical use, the Compressed Blast does not consider the position of Sparrows (as they will be directly eliminated by the Stun EMP); we are more concerned with covering as many large invaders as possible. Here are two key points for your reference.

1. In front of the first row, like MBC them

    Remember this: the charge point of the bomb is not at the core of your Ship, but rather at a position in front of it. Therefore, do not mistakenly think that your ship needs to be inbetween the invaders when using the Compressed Blast. You just need to ensure that the bomb charges within the invaders. Being slightly closer than the frontmost invader can minimize the chance of the invaders' turrets colliding with your core while ensuring the Compressed Blast's range covers the invaders in the back row. 

    <img src="/KrillouCB/krillou3.gif" style={{zoom:0.75}}/>

    <img src="/KrillouCB/krillou4.gif" style={{zoom:0.75}}/>

    Blindly charging in front not only increases the risk of accidents:

    <img src="/KrillouCB/krillou5.gif" style={{zoom:0.75}}/>

    But also makes it difficult to cover the front row of Invaders that should be targeted:

    <img src="/KrillouCB/krillou6.gif" style={{zoom:0.75}}/>

2. Predict the trajectory of the bullets

    Enemy bullets, especially darts, have a higher priority than your Ship's skills. This means that even if you use the Stun EMP the moment the invaders are ready, turrets that have already targeted your core will still fire bullets. If you spend too much time finding a safe position, the remaining stun duration won't be enough to charge the bomb.

    The following examples show two basic anticipations. The first dart tracking you will always fire forward, so you just need to slightly avoid the turret's position. The T3 fan-shaped darts also follows this rule; just move slightly to the side to dodge it.

    <img src="/KrillouCB/krillou7.jpg" style={{zoom:1}}/>

    <img src="/KrillouCB/krillou8.jpg" style={{zoom:1}}/>

    For more complex situations, such as a wave that includes caged MIRVs, the strategy becomes more intricate. When the distance is greater, the circle of bullets from a caged MIRV can be seen as a fan-shaped area pointing straight ahead. Therefore, a common strategy is to slightly avoid the area directly below the caged MIRV to charge the bomb. Depending on the situation, the chosen response may vary. The example below shows one anticipation method:

    <img src="/KrillouCB/krillou9.gif" style={{zoom:0.75}}/>

    Another common handling technique is when your energy is sufficient to support two consecutive full auras. Use the first aura to deal with the caged MIRV, then use the Stun EMP again and charge the bomb after dodging these bullets. This can prevent difficult-to-predict bullet trajectories on the field, making bomb charging more efficient.

    <img src="/KrillouCB/krillou10.gif" style={{zoom:0.75}}/>

    If you're not very skilled at predicting bullet trajectories, there's an alternative solution. Bullets are fired based on whether your core is within the fan-shaped attack range. Therefore, you can choose to release the Stun EMP at the top while moving the Ship to the front row to charge the bomb. This method completely avoids all darts on the field, leaving only the most regular bullets to predict and dodge. The only downside is that it doesn't align with most players' natural operational instincts.

    <img src="/KrillouCB/krillou11.gif" style={{zoom:0.75}}/>

## Off-topics

Krillou's aura skill is Stun EMP. In the first wave of invaders that include caged MIRV Sparrows, you can fully utilize the grazing skill to efficiently use the caged MIRV bullets for perfect timing. Unlike normal Mega Bomb grazing, Compressed Blast requires you to actively approach the caged MIRV instead of quickly sliding past them. When you have a full aura, you can try to lightly graze the caged MIRV like touching water, allowing you to continuously use the Stun EMP to improve survivability. For example, you can try this operation:

<img src="/KrillouCB/krillou12.gif" style={{zoom:0.75}}/>

## Conclusion

Krillou's speedrun key points are fewer compared to other ships. The main challenge lies in choosing the appropriate bomb charging position and timing. The skill level required is not high, focusing more on muscle memory developed through practice. In bullet-dense missions, it's particularly important to efficiently use the Compressed Blast to eliminate the more threatening invaders.