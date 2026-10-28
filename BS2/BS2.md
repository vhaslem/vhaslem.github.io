---
layout: default
title: Bullstats #2
permalink: /BS2/
use_math: true
---


### **Football is Anti-Analytics**
***9/19/2026***

I do genuinely enjoy sports analytics, but we need to talk about soccer. This started because I was thinking about this tweet. While it's obviously a facetious representation of Messi, it does draw from reality a little bit. Why is so much of the football/soccer world dominated by a 5'7" Argentine?

![Soccer is one of those sports](/BS2/tweet1.png)

This is an instance where maybe measureable features are insufficient to truly gage whether a player is good or not. This is antithetical to sports like basketball, where height and shooting percentage are often not only immensely valuable for a team's performance, they are significant barriers to entry into the sport professionally. An example is Zach Edey, the Canadian basketball player who didn't even pick up the sport until he was 16 years old. But at 7'4", few people, even amongst college players, could compete with him defensively or offensively. While there are NBA players with competitive careers who have been under 6'0", they make up for it with tremendous speed, shooting, passing, or game sense. Footballers are different. Being a physically imposing footballer is helpful in some instances, but is insufficient. Speed, handling, and other skillsets are desirable, but many strategies don't require footballers to use all these skills.

#### Footballer Position Analysis

To test this, I first evaluated FIFA players using a kNN classifier to identify players position using scaled physical feature and technical skill attributes. I use a multi-label version of kNN to handle players who switch positions.

![kNN Attempt](/BS2/average_f1_score_vs_k.png)

While this attempt is decent, it doesn't produce a high enough F1 score to be a consistent classifier. I could flip coins and have better odds than even the highest performing classifier. Let's take another look using a 50-epoch multi-label neural network.

![Neural Net](/BS2/training_validation_loss_accuracy.png)

So we do start to see decent classifier numbers with the neural net. The next step is to see if we can predict footballers who are good at the game, or at least highly paid.  This regression neural net measures the same skillsets against their value in euros. While value often is controlled by more information than just skillset, it's still a useful measure of what clubs estimate the player to be worth. This also aligns in the logic used by the MLB for baseball player pricing, where player value is determined by average per unit outcome measurements that lead to runs, wins, and eventual championships. Can we reduce professional footballers to these statistical measurements in the same fashion?

![Value Neural Net](/BS2/training_history_rnn.png)

This answer is inconclusive. While the neural net performs really well and may need some tuning to reach a 95% benchmark or higher, it should be more conclusive than that. While this certainly implies that outside factors skew the value - Ronaldo may be washed up, but he sells a lot of kits - there may just be some error here that we have no way to control for. But figuring out the factors that determine player value in FIFA is something that can be answered.


