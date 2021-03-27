---
title: My First Post
date: 2021-03-21T11:38:15+08:00
lastmod: 2021-03-21T11:38:15+08:00
author: FtChen
# avatar: /img/author.jpg
# authorlink: https://author.site
cover: /img/cover.jpg
categories:
  - blog
tags:
draft: false
---

Start a New Blog, again. This is my first post here.

<!--more-->


# Start a New Blog, again

Decided to build a blog using HUGO, again.   
Yes, long time ago I did build a blog before but was abandoned and did not update for super long time.   
Why not create another one to note down my learning journey?


1. To install hugo

    ```brew install hugo```

2. To check and verify hugo version

    ```hugo version```

3. Skip this if you don't intend to host your blog on Github.

    ```git init```

4. Download a theme, here I choose [dream](https://github.com/g1eny0ung/hugo-theme-dream) as my blog theme.
    ```
    cd themes
    git clone https://github.com/g1eny0ung/hugo-theme-dream.git dream
    ```

5. Here an alternative to add themes(from official [docs](https://gohugo.io/getting-started/quick-start/))

    ```git submodule add https://github.com/g1eny0ung/hugo-theme-dream.git themes/dream```

6. Add some content on my blog, creating first post!

    ```hugo new posts/my-first-post.md```

7. Start hugo server locally, and it can be access via localhost:xxxx (xxxx equals to port number)

    ```hugo server -D```

8. Again, follow if you wish to host your blog on Github
    ```
    git add .
    it commit -m "my first commit"
    git remote add origin https://github.com/ftchen93/ftchen93.github.io.git
    git push origin master
    ```

9. You're all set. After all those comand, you should able to view your blog on Github(or local). For example, my blog URL as follow

    ```https://ftchen93.github.io```