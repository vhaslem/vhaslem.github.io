---
layout: default
title: Bullstats #1
permalink: /BS1/
use_math: true
---

### **Bullstats: The Ranking Problem**
***9/15/2026***

When I was seven years old, I was gifted a set of small pennants for every active Major League Baseball team. Why? Still not sure. I honestly didn't even watch the MLB, and still don't consistently follow it. But I loved these pennants. I would arrange them according to MLB rankings every morning when they were updated in the newspaper. I enjoyed ranking the teams more than I enjoyed any particular team itself, and this stayed true in many fashions of my life as well as my interests.

I'm not alone in this. People will rank anything -- movies, teams, local restaurants -- and place a tremendous amount of value on a thing's rank and its associated value to them. I even used a list of rankings to decide on which type of pens to buy for school last year, and the Zebra Sarasa Clips haven't let me down yet. Part of the utility of a ranking is it assigns a nice discrete ordering to something that might be super complicated. It makes evaluation so much easier, and helps inform decisions. I think rankings have become particularly common in a data rich environment and with social media, where people, corporations, newsrooms, and anyone ever can rank things and share them.

I'm kind of sick of this! Because while I love rankings, I become highly skeptical of the quality of rankings no matter how grounded in reality these rankings are. This is caused by a mixture of issues with rankings themselves and with the way people use rankings to convey information and extend their influence.

To better describe my issues, I will talk about one of my least favorite rankings on a particularly controversial topic. That's right y'all, Let's talk about the US News & World Report Best Colleges.

I know I'm late to the party on this topic. Please read ***Weapons of Math Destruction*** by Cathy O'Neil for an expert dive into the gaming of this system over the past 30 years. Her critique dives into how the ranking system is designed and the effect on colleges prioritizing certain benchmarks for the sake of ranking alone.

#### Overview
Here is the 2026 US News ranking of top 230ish national universities along with their admission rates (All data other than US News ranking is from [College Scorecard](https://collegescorecard.ed.gov/)). Some colleges have [dropped out of the US News rankings](https://www.bestcolleges.com/news/these-schools-dropped-out-of-us-news-rankings/) because they disagree heavily with the methodology.
<iframe src="admissionrate.html" width="100%" height="500px" style="border:none;"></iframe>

College admission rates are another hotly contested issue, because the experience of applying to college suggests the idea that lower admission rates automatically imply the college is better. What makes a college better? Great question. Prestige, return on investment, and student happiness in life are many gauges in which we measure the performance of a college. My first issue with rankings is that rank is a ***nonparametric statistic***, or it doesn't depend on an underlying distribution. If we assign rankings on a points based system and don't describe the underlying distribution, we don't know rank-by-rank significance of school. And using rankings in this fashion reinforces an incredibly damaging belief to the millions of students who compete for spots in top universities every year, because students believe that ***higher rankings will proportionately improve life and life trajectory***. While we already see this doesn't hold for admission rate, let's also examine some other valuable metrics.

A great example is 10 year median earnings, or what students expect to make 10 years after their freshman year of college. While this number is often skewed in favor of engineering/business dominant schools and disadvantages the liberal arts, money is often a good measure of how students feel retrospectively about their life decisions.

<iframe src="future_earnings.html" width="100%" height="500px" style="border:none;"></iframe>

Here we see another nonlinear trend which still agrees with ranking (for the most part). 

Here is cost evaluated against ranking, which has the most clear pattern in this dataset:

<iframe src="cost.html" width="100%" height="500px" style="border:none;"></iframe>

In which I see three categories: 1. High ranking expensive schools 2. Medium to low ranking expensive schools and 3. Medium to low ranking cheaper schools. Which clearly implies that US News has an upper limit for how highly ranked a school is if it is cost effective.

But if we evaluate 10-year return against cost, we see a potentially more useful relationship emerge:

<iframe src="costreturnregression.html" width="100%" height="500px" style="border:none;"></iframe>


So while value is clearly high for the top 20 or so schools, the falloff is tremendous for schools with decently high rankings. So the only meaningful difference between low ROI medium tier schools and low ROI low tier schools is the amount of money you pay. 
#### Let's make up our own stats
But we should engage with how ROI is best calculated.
I've calculated short term ROI as:

$$
ROI = Earnings_{6yr} + \frac{Earnings_{6yr} + Earnings_{8yr}}{2} + Earnings_{10yr} + \frac{Earnings_{8yr} + Earnings_{10yr}}{2} - 5 \times MedianAcademicYearCost
$$

Which measures the expected net gain/loss after 10 years, assuming 5 years of education and 5 years of work. This measure of ROI is credited to the [Georgetown College ROI Data Tool](https://cew.georgetown.edu/cew-reports/roi2025/). It's an imperfect measure, but I'd argue that the college you attended is most impactful to your career in the first few years of work and less meaningful down the road. So here is Rank against ROI:

<iframe src="roi.html" width="100%" height="500px" style="border:none;"></iframe>

Do you see the pattern in this figure? Because I don't. When we change our evaluation metric to a much more useful measure, the pattern ceases to exist. And US News doesn't want you to know this, because they want colleges to play by their rules and coerce schools into adherence to their ranking. But obviously there are more factors to defining college value as well. Law, medicine, and other prestige fields often place value on the ranking itself. While I'm not going to use the rankings themselves as a value (since I don't trust US News), acceptance rate is a helpful tool to measure perceived prestige. 
Here is ROI regressed against acceptance rate:
<iframe src="roi_arate_3_means.html" width="100%" height="500px" style="border:none;"></iframe>
Which kind of looks like nothing, except the colors show the correlation between rank and acceptance rate observed earlier. But here is the ROI/Rank figure from earlier with a 3-means clustering classifier using acceptance rate and ROI:

<iframe src="roi_3_means.html" width="100%" height="500px" style="border:none;"></iframe>
Which allows us to better evaluate ROI classes with some inclusion for admission rate as a prestige factor. This categorization doesn't automatically qualify △-schools as good, ○-schools as mediocre, and □-schools as poor performing. This metric doesn't account for everything, but it allows us to reevaluate the earlier 10-year earnings against ranking figure.

<iframe src="future_earnings_3_means.html" width="100%" height="500px" style="border:none;"></iframe>
So while this figure remains functionally identical, ○-schools and □-schools with high 10-year earnings should be questioned. They may still be strong schools, but their value isn't conveyed by prestige and ROI alone. So if prestige and ROI are the primary reasons to attend such a school, maybe an alternative should be considered.

The compression of information in rankings is an essential flaw. At the end of the day, a 3-means clustering tool is insufficient. Student happiness and success metrics are surveyed by Princeton Review and Gallup-Purdue, but containing measures such as cost, ROI, and even nonnumeric measures involving demographics and student culture can't all be captured by this singular value. Let's not pretend that the US News and World Report is an impressive feat. Anyone can make a system and assign points for certain metrics. It doesn't mean the system accurately reflects the true value for you as an individual student. 

#### Conclusion

Applying to college is messy. It's hard to be methodical about choosing the right college because every school wants your money. And with the incoming demographic dropoff, schools are desperate, and will inflate their public perceptions in any way possible. So make the decision simpler:

| -------- |  | This school will make me happy | This school will not make me happy |
| -------- | | -------- | -------- |
| **I can afford this school**  |  | Apply! Ane be excited about your future!  | Don't even apply.  |
| **I can't afford this school** |  | Apply! Because why not!  | Don't even apply. |

And just ask people who went there how they liked it. The people who make rankings don't know anything anyways.

