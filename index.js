/**
* hexo-tag-cloudmusic
* https://github.com/Z4Tech/hexo-tag-bilibili.git
* Copyright (c) 2015, Z4Tech
* Licensed under the MIT license.
* Syntax:
* {% bilibili [av_id] %} or {% bilibili [av_id] [page] %}
*/

hexo.extend.tag.register('cloudmusic', function(args){
  var sid = args[0];
  var config = hexo.config.cloudmusic || {};
  var widgetType = hexo.config.widgetType || 'flash';
  var widgetSize = config.widgetSize || 'small';
  var autoPlay = config.autoPlay || 1;

  if(widgetType == 'iframe'){
  	if(widgetSize=='small'){
  		return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=' + sid + '&auto=' + autoPlay +'&height=32"></iframe>';
  	}else if(widgetSize=='big'){
  		return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=351 height=86 src="http://music.163.com/outchain/player?type=2&id=' + sid + '&auto=' + autoPlay + '&height=66"></iframe>';
  	}
  }else{
  	if(widgetSize=='small'){
  		return '<embed src="http://music.163.com/style/swf/widget.swf?sid=' + sid + '&type=2&auto=' + autoPlay + '&width=278&height=32" width="298" height="52"  allowNetworking="all"></embed>';
  	}else{
  		return '<embed src="http://music.163.com/style/swf/widget.swf?sid=' + sid + '&type=2&auto=' + autoPlay + '&width=320&height=66" width="340" height="86"  allowNetworking="all"></embed>';
  	}
  }
});