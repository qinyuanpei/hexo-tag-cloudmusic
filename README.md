# hexo-tag-cloudmusic
This is a hexo tag plugin for cloudmusic

## Introduction

This is a hexo tag plugin for cloudmusic


## Installation

To install, run the following command in the root directory of hexo:
```
npm install hexo-tag-cloudmusic --save
```

To config if you nedd in the __config.yml of Hexo:
```
# CloudMusic
widgetType:  flash ## It can be flash or iframe
widgetSize:  small ## It can be small or big or custom if widgetType is iframe
autoPlay:  0 ## It can be 0 to set autoPlay disable or 1 to set autoPlay enable
width: 278　## Set the widget width if the widgetType is irfame and the widgetSize is custom
height: 32　##　Set the widget height if the widgetType is irfame and the widgetSize is custom
```

## Usage
```
{% cloudmusic 20744788 %}
```


