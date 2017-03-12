/**
* hexo-tag-cloudmusic
* https://github.com/qinyuanpei/hexo-tag-cloudmusic.git
* Copyright (c) 2015, qinyuanpei
* Licensed under the MIT license.
* Syntax:
* {% cloudmusic [s_id] [single] %}
*/

hexo.extend.tag.register('cloudmusic', function(args){

  //网易云音乐id 
  var sid = args[0];
  var config = hexo.config.cloudmusic || {};
  var widgetType = hexo.config.widgetType || 'embed';
  var widgetSize = config.widgetSize || 'small';
  var autoPlay = config.autoPlay || 1;

  if(widgetType == "iframe"){
    return createByIFrame(sid, autoPlay, widgetSize);
  }else if(widgetType == 'embed'){
  	return crateByEmbed(sid, autoPlay, widgetSize);
  }

});

function crateByEmbed(sid, autoPlay, widgetSize)
{
   if(widgetSize == 'large'){
      return '<embed src="http://music.163.com/style/swf/widget.swf?sid=' + sid + '&type=2&auto=' + autoPlay + '&width=320&height=66" width="340" height="86"  allowNetworking="all"></embed>';
   }else if(widgetSize == 'small'){
      return '<embed src="http://music.163.com/style/swf/widget.swf?sid=' + sid + '&type=2&auto=' + autoPlay + '&width=278&height=32" width="298" height="52"  allowNetworking="all"></embed>';
   }
}

function createByIFrame(sid, autoPlay, widgetSize)
{
  if(widgetSize == 'large'){
    return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=351 height=86 src="http://music.163.com/outchain/player?type=2&id=' + sid + '&auto=' + autoPlay + '&height=66"></iframe>';
  }else if(widgetSize == 'small'){
    return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=' + sid + '&auto=' + autoPlay +'&height=32"></iframe>';
  }
}