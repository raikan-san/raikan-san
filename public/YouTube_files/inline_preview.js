(function(g){var window=this;'use strict';var lpb=function(a){g.U.call(this,{I:"div",S:"ytp-inline-preview-ui"});this.pg=!1;this.player=a;this.T(a,"onStateChange",this.wR);this.T(a,"videodatachange",this.ox);this.T(a,"onInlinePreviewModeChange",this.j6);this.yf=new g.cu(this.yw,null,this);g.L(this,this.yf)},H6=function(a){g.xV.call(this,a);
this.j=new lpb(this.player);g.L(this,this.j);this.j.hide();g.qU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.nu(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w(lpb,g.U);g.k=lpb.prototype;
g.k.jO=function(){this.tooltip=new g.WX(this.player,this);g.L(this,this.tooltip);g.qU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.hd=new g.dW(this.player);g.L(this,this.hd);this.vk=new g.U({I:"div",Ma:["ytp-inline-preview-scrim"]});g.L(this,this.vk);this.vk.Ea(this.element);this.T(this.vk.element,"click",this.mJ);this.Hj=new g.PX(this.player,this,300);g.L(this,this.Hj);this.Hj.Ea(this.vk.element);this.controls=new g.U({I:"div",S:"ytp-inline-preview-controls"});g.L(this,this.controls);
this.controls.Ea(this.element);var a=new g.gX(this.player,this,!1);g.L(this,a);a.Ea(this.controls.element);a=new g.NX(this.player,this);g.L(this,a);a.Ea(this.controls.element);this.Sc=new g.nX(this.player,this);g.L(this,this.Sc);g.qU(this.player,this.Sc.element,4);this.T(this.player,"appresize",this.Lb);this.T(this.player,"fullscreentoggled",this.Lb);this.Lb()};
g.k.show=function(){g.du(this.yf);this.pg||(this.jO(),this.pg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Sc.show();this.player.Ra("onInlinePreviewUiReady")};
g.k.hide=function(){this.yf.stop();g.U.prototype.hide.call(this);this.player.isInline()||this.pg&&this.Sc.hide()};
g.k.ya=function(){g.U.prototype.ya.call(this)};
g.k.mJ=function(a){a.target===this.vk.element&&this.player.Ra("onExpandInlinePreview",a)};
g.k.j6=function(){g.qu(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.Ye=function(){this.Sc.Hc();this.Hj.Hc()};
g.k.yw=function(){this.Ye();g.du(this.yf)};
g.k.Lb=function(){g.zX(this.Sc,0,this.player.qb().getPlayerSize().width,!1);g.oX(this.Sc)};
g.k.wR=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.ox=function(a,b){if(this.player.isInline()){g.qu(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.aC);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.qu(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Dc=function(){return this.tooltip};
g.k.Mg=function(){return!1};
g.k.wg=function(){return!1};
g.k.nm=function(){return!1};
g.k.iK=function(){};
g.k.rq=function(){};
g.k.bz=function(){};
g.k.pn=function(){return null};
g.k.BH=function(){return null};
g.k.AN=function(){return new g.we(0,0)};
g.k.Qk=function(){return new g.Ar(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Kw=function(a,b,c,d,e){var f=d=0,h=0,l=g.Or(a);if(b){c=g.lu(b,"ytp-mute-button");var m=g.lu(b,"ytp-subtitles-button"),n=g.Mr(b,this.element);b=g.Or(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.qb().getPlayerSize().width;h=g.me(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.Xp=function(){};
g.k.fm=function(){return!1};
g.k.vF=function(){};
g.k.bB=function(){};
g.k.Fr=function(){};
g.k.Er=function(){};
g.k.Ou=function(){};
g.k.Ms=function(){};
g.k.cF=function(){};g.w(H6,g.xV);H6.prototype.wl=function(){return!1};
H6.prototype.load=function(){this.player.hideControls();this.j.show()};
H6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.wV("inline_preview",H6);})(_yt_player);
