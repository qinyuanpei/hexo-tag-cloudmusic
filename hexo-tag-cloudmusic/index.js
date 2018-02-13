/**
* hexo-tag-cloudmusic
* https://github.com/qinyuanpei/hexo-tag-cloudmusic.git
* Copyright (c) 2015, qinyuanpei
* Licensed under the MIT license.
* Syntax:
* {% cloudmusic id=[sid]...%}

for (var i in args) {
  var k = args[i].split('=')[0],

      v = args[i].split("=").length < 2 ? "true" : args[i].slice(args[i].indexOf('=')+1);
*/

hexo.extend.tag.register('cloudmusic', function(args){
  var config = {};
  config.autoPlay = true; //默认自动播放
  config.isSingle = true; //默认为单曲ID
  config.widgetType = 'iframe'; //默认为iframe
  config.widgetSize = 'large'; //默认为large

  for (var arg in args){
    var key = args[i].split('=')[0];
    var value = args[i].split('=')[1];
    if(key == 'id') config.sid = value;
    if(key == 'isSingle') config.isSingle = value;
    if(key == 'autoPlay') config.autoPlay = value;
    if(key == 'widgetSize') config.widgetSize = value;
    if(key == 'widgetType') config.widgetType = value;
  }
   
  var sid = config.sid; 
  var autoPlay = config.autoPlay == true? '1':'0';
  var isSingle = config.isSingle == true? '2' : '0'
  var widgetType = config.widgetType || 'iframe';
  var widgetSize = config.widgetSize || 'large';

  if(widgetType == "iframe"){
    return createByIFrame(sid, autoPlay, widgetSize,isSingle);
  }else if(widgetType == 'embed'){
  	return crateByEmbed(sid, autoPlay, widgetSize,isSingle);
  }

});

/* 
网易云音乐Flash插件 
@param sid: 网易云音乐单曲或者歌单ID
@param autoPlay: 是否自动播放
@param isSingle: 是否为单曲
@param widgetSzie: 插件大小，支持small和large两种形式
*/
function crateByEmbed(sid, autoPlay, widgetSize,isSingle)
{
   if(widgetSize == 'large'){
      return '<embed src="http://music.163.com/style/swf/widget.swf?sid=' + sid + '&type=' + isSingle + '&auto=' + autoPlay + '&width=320&height=66" width="340" height="86"  allowNetworking="all"></embed>';
   }else if(widgetSize == 'small'){
      return '<embed src="http://music.163.com/style/swf/widget.swf?sid=' + sid + '&type=' + isSingle + '&auto=' + autoPlay + '&width=278&height=32" width="298" height="52"  allowNetworking="all"></embed>';
   }
}

/* 
网易云音乐Flash插件 
@param sid: 网易云音乐单曲或者歌单ID
@param autoPlay: 是否自动播放
@param isSingle: 是否为单曲
@param widgetSzie: 插件大小，支持small和large两种形式
*/
function createByIFrame(sid, autoPlay, widgetSize,isSingle)
{
  if(widgetSize == 'large'){
    return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=351 height=86 src="http://music.163.com/outchain/player?type=' + isSingle + '&id=' + sid + '&auto=' + autoPlay + '&height=66"></iframe>';
  }else if(widgetSize == 'small'){
    return '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=' + isSingle + '&id=' + sid + '&auto=' + autoPlay +'&height=32"></iframe>';
  }
}