# hexo-tag-cloudmusic
这是一个为Hexo编写的网易云音乐标签插件

## 概述

hexo-tag-cloudmusic是一个为Hexo编写的网易云音乐标签插件，它允许你以标签的形式在页面和文章中插入网易云音乐的widget。它支持iframe和flash两种形式的widget，你只需要在页面或者文章中使用{% cloudmusic sid%}这样的结构就可以在网页中展示一个网易云音乐的widget，这里的sid可以是单曲的ID或者是歌单的ID，一切都取决于你。在博客的配置文件中你可以进一步配置该插件的具体细节。


## 安装

安装hexo-tag-music非常地简单，你只需要使用下面的命令：
```
npm install hexo-tag-music --save
```

## 配置
```
# CloudMusic
widgetType:  flash ## It can be embed or iframe
widgetSize:  small ## It can be small or blarge
autoPlay:  0 ## It can be 0 to set autoPlay disable or 1 to set autoPlay enable
```

## 使用
例如下列标记可以快速地插入这首[歌](http://music.163.com/#/song?id=20744792)
```
{% cloudmusic 20744792 %}
```


