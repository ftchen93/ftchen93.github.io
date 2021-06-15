---
title: "My First Post Cont"
date: 2021-03-27T15:45:39+08:00
authur: FtChen
cover: img/davies-designs-studio-_UCVrH-ZIIg-unsplash.jpeg
categories:
  - blog
draft: false
---

Continue my last post..
<!--more-->

# Continue my last post

I was wrong in my last post, I thought my blog setup is complete.
But it's not actualy. I missed out one more step, deploy to Github.
Although I have push my blog to GitHub, but the page just won't run.
It's always showing me a Error 404 page (and I thought it's due do my custom domain settings)

Then I found out that I have to use GitHub action in order to make my blog up and running!
Referer Link: https://gohugo.io/hosting-and-deployment/hosting-on-github/

1. First, I have to create a file in ```.github/workflows/gh-pages.yml``` which containing the following content
    ```
    name: github pages

    on:
        push:
            branches:
                - main  # Set a branch to deploy

    jobs:
        deploy:
        runs-on: ubuntu-18.04
        steps:
            - uses: actions/checkout@v2
              with:
                submodules: true  # Fetch Hugo themes (true OR recursive)
                fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

            - name: Setup Hugo
              uses: peaceiris/actions-hugo@v2
              with:
                hugo-version: 'latest'
                # extended: true

            - name: Build
              run: hugo --minify

            - name: Deploy
              uses: peaceiris/actions-gh-pages@v3
              with:
                github_token: ${{ secrets.GITHUB_TOKEN }}
                publish_dir: ./public
   ```
   And there is also documentation for [more advance setup](https://github.com/marketplace/actions/hugo-setup).