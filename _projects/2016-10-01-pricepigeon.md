---
hidden: false
layout: project
thumbnail: https://user-images.githubusercontent.com/11284580/37729325-1277d90e-2d13-11e8-8bc6-afcdc5cac242.jpg
title: price-pigeon
timeframe: October 2016
description: SpotPrice mapping module for CloudFormation templates.
tags: code
pictures:
related:
---

![](https://user-images.githubusercontent.com/11284580/37729325-1277d90e-2d13-11e8-8bc6-afcdc5cac242.jpg)
<br>
<span class='txt-em'>Pigeon illustration by [Joseph Wilkins](https://brightonillustrators.co.uk/portfolios/Joseph_Wilkins)</span>

<br>

The answer to inconsistent spot price bids.

<br>

Prior to `price-pigeon`, Mapbox platform team members would hand-tweak spot price bids to get us the best balance between constantly needing to spin up new instances, and saving money on the AWS spot market. Since each Mapbox service can run on a variety of instance types (and they have a lot of services!) that meant a lot of small adjustments and no clear guidelines for where to start. `Price-pigeon` allowed us to set bids as a percentage of the OnDemand price for that instance type, taking out some of the guess work of good bids and saving Mapbox thousands of dollars a month.

<br>

`Price-pigeon` uses the [AWS Price List API](https://aws.amazon.com/blogs/aws/new-aws-price-list-api/) to generate a mapping of OnDemand prices by instance type. This mapping can be used during instance creation to make accurate spot bid prices.

<br>

Check it out on [`github`](https://github.com/mapbox/price-pigeon) and [`npm`](https://www.npmjs.com/package/@mapbox/price-pigeon)!
