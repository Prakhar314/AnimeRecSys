# AnimeRecSys
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Prakhar314/AnimeRecSys)

The model used is a collaborative filtering based recommender system built using Tensorflow 2.0 on [this Kaggle dataset][1].

This WebApp primarily uses Express,React and Node.

A version is deployed [here](https://prakhar314.github.io/AnimeRecSys/#/). Currently the backend is hosted on Glitch which **takes a lot of time** to wake up and process (~2 minutes).

## Overview
### 1. Anime Details
> View a show's details and get recommendations for similar shows to watch. 

This data is obtained from the [MAL dataset][1] and [AniList API](https://anilist.gitbook.io/anilist-apiv2-docs/).
### 2. Recommendations
> Provide their ratings for some shows and get recommendations based on those ratings. 
These can be entered manually or imported from MAL. 

[Jikan](https://jikan.docs.apiary.io/) is used to get user ratings.

The ratings are used to train neural network, followed by making predictions from this network. It takes a lot(~2 minutes) of time to train. So, I have used Bull to queue jobs. To track job progress, polling is used.
### 3. Search
> Search for anime using keywords and tags. 

I have used FuseJS for fuzzy searching. Tags were in the [MAL dataset][1].

## Todo
- [ ] Remove duplicates from recommendations
- [ ] Speed up the neural network
- [ ] Dark theme


## Links
- [MyAnimeList Dataset][1]
- [Neural collaborative filtering][2]


[1]: https://www.kaggle.com/qvinhdo/myanimelist
[2]: https://arxiv.org/abs/1708.05031