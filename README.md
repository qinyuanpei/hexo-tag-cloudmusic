# hexo-tag-cloudmusic
This is a hexo tag plugin for cloudmusic

## Introduction

This is a hexo tag plugin for cloudmusic


## Installation

To install, run the following command in the root directory of hexo
```
npm install hexo-tag-cloudmusic --save
```

To config if you need in the __config.yml of hexo
```
# CloudMusic
widgetType:  flash ## It can be flash or iframe
widgetSize:  small ## It can be small or big or custom if widgetType is iframe
autoPlay:  0 ## It can be 0 to set autoPlay disable or 1 to set autoPlay enable
width: 278　## Set the widget width if widgetType is irfame and widgetSize is custom
height: 32　## Set the widget height if widgetType is irfame and widgetSize is custom
```

## Usage
```
{% cloudmusic 20744788 %}
```


# hexo-tag-cloudmusic
这是一个为Hexo编写的网易云音乐标签插件

## 概述

hexo-tag-cloudmusic是一个为Hexo编写的网易云音乐标签插件，它允许你以标签的形式在页面和文章中插入网易云音乐的widget。它支持iframe和flash两种形式的widget，你只需要在页面或者文章中使用{% cloudmusic sid%}这样的结构就可以在网页中展示一个网易云音乐的widget，这里的sid可以是单曲的ID或者是歌单的ID，一切都取决于你。在博客的配置文件中你可以进一步配置该插件的具体细节。


## Installation

To install, run the following command in the root directory of hexo
```
npm install hexo-tag-cloudmusic --save
```

To config if you need in the __config.yml of hexo
```
# CloudMusic
widgetType:  flash ## It can be flash or iframe
widgetSize:  small ## It can be small or big or custom if widgetType is iframe
autoPlay:  0 ## It can be 0 to set autoPlay disable or 1 to set autoPlay enable
width: 278　## Set the widget width if widgetType is irfame and widgetSize is custom
height: 32　## Set the widget height if widgetType is irfame and widgetSize is custom
```

## Usage
```
{% cloudmusic 20744788 %}
```


