/** @license

 DHTML Snowstorm! JavaScript-based Snow for web pages
 --------------------------------------------------------
 Version 2.0, EXPERIMENTAL DEV/WORK-IN-PROGRESS build
 (Previous rev: 1.41.20101113)
 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/snowstorm/license.txt
*/
var snowStorm=function(g,e){function l(c,d){if(isNaN(d))d=0;return Math.random()*c+d}function D(c){return parseInt(l(2),10)===1?c*-1:c}function U(){var c,d=e.createElement("style"),j=e.implementation||{hasFeature:function(){return false}};d.type="text/css";z.insertBefore(d,z.firstChild);c=d.sheet||d.styleSheet;return(j.hasFeature("CSS2","")?function(f){if(!(c&&f))return false;var b=false;try{c.insertRule(f,0);b=!/unknown/i.test(c.cssRules[0].cssText);c.deleteRule(c.cssRules.length-1)}catch(i){}return b}:
function(f){if(!(c&&f))return false;c.cssText=f;return c.cssText.length!==0&&!/unknown/i.test(c.cssText)&&c.cssText.replace(/\r+|\n+/g,"").indexOf(f.split(" ")[0])===0})('@font-face { font-family: "font"; src: "wwflakes-webfont.ttf"; }')}function J(){if(this.excludeMobile&&!K||!this.excludeMobile)g.setTimeout(function(){a.start(true)},20);a.events.remove(g,"load",J)}this.flakesMax=128;this.flakesMaxActive=48;this.flakesMinActive=24;this.flakeScale=1;this.animationInterval=42;this.excludeMobile=true;
this.flakeBottom=null;this.followMouse=true;this.snowColor="#fff";this.snowCharacter="&bull;";this.snowStick=true;this.targetElement=null;this.useMeltEffect=true;this.usePositionFixed=this.useTwinkleEffect=false;this.freezeOnBlur=this.useOpacity=true;this.flakeRightOffset=this.flakeLeftOffset=0;this.flakeHeight=this.flakeWidth=15;this.vMaxX=3;this.vMaxY=2;this.zIndex=0;this.use3DRotate=this.use2DRotate=this.useWebFont=this.useScaling=true;this.scaleOffset=60;this.webFontCharacters=["%","'","(","6",
"7","j","C","e","f","o"];this.webFontCharactersSubset=["%","'"];var a=this,v=this,z,H,A,L,I,M,N,q=navigator.userAgent,s=q.match(/msie/i),E=q.match(/msie 6/i),K=q.match(/mobile/i),V=s&&e.compatMode==="BackCompat";q.match(/(ipad|iphone|ipod)/i);var O=K||V||E,k=null,w=null,r=null,x=null,B=null,P=null,Q=0,m=1,R=m*1.1,C=1,y=0,F=false;q=e.createElement("div");var t={snow:null,snowCharacter:null};a:{try{q.style.opacity="0.5"}catch(W){E=false;break a}E=true}var n={opacity:E,transforms:{ie:typeof q.style["-ms-transform"]!==
"undefined"?"-ms-transform":null,moz:typeof q.style.MozTransform!=="undefined"?"MozTransform":null,opera:typeof q.style.OTransform!=="undefined"?"OTransform":null,webkit:typeof q.style.webkitTransform!=="undefined"?"webkitTransform":null,prop:null}},S=false,T=e.createDocumentFragment();n.transforms.prop=n.transforms.moz||n.transforms.webkit||n.transforms.ie||n.transforms.opera;this.timer=null;this.flakes=[];this.active=this.disabled=false;this.meltFrameCount=20;this.meltFrames=[];this.types=100;this.timing=
{frameCount:0,timestamp:0,lastTimestamp:0,wasSlow:null,slowInterval:Math.max(50,a.animationInterval*1.1),ping:function(){a.timing.lastTimestamp=(new Date).getTime();a.timing.frameCount++>a.timing.slowInterval&&a.timing.reset()},tooSlow:function(){var c=a.timing.report()>a.timing.slowInterval;if(c)a.timing.wasSlow=true;return c},reset:function(c){a.timing.frameCount=0;a.timing.timestamp=(new Date).getTime()+(c||0);if(a.timing.wasSlow===false&&a.flakesMaxActive<a.flakesMax-1)a.flakesMaxActive+=2;a.timing.wasSlow=
false},report:function(){return a.timing.frameCount<1?0:parseInt((a.timing.lastTimestamp-a.timing.timestamp)/a.timing.frameCount,10)}};this.events=function(){function c(i){i=f.call(i);var o=i.length;if(j){i[1]="on"+i[1];o>3&&i.pop()}else o===3&&i.push(false);return i}function d(i,o){var p=i.shift(),G=[b[o]];j?p[G](i[0],i[1]):p[G].apply(p,i)}var j=!g.addEventListener&&g.attachEvent,f=Array.prototype.slice,b={add:j?"attachEvent":"addEventListener",remove:j?"detachEvent":"removeEventListener"};return{add:function(){d(c(arguments),
"add")},remove:function(){d(c(arguments),"remove")}}}();this.getSnowCharacter=function(){var c=a.useWebFont?a.use2DRotate?n.transforms.webkit&&!navigator.userAgent.match(/chrome/i)?a.webFontCharacters:a.webFontCharactersSubset:a.webFontCharactersSubset:null;return!c?a.snowCharacter:c[parseInt(Math.random()*c.length,10)]};this.randomizeWind=function(){B=D(l(a.vMaxX,0.2));P=l(a.vMaxY,0.2);if(a.flakes)for(var c=a.flakes.length;c--;)a.flakes[c].active&&a.flakes[c].setVelocities()};this.scrollHandler=
function(){x=a.flakeBottom?0:parseInt(g.scrollY||e.documentElement.scrollTop||e.body.scrollTop,10);if(isNaN(x))x=0;if(!F&&!a.flakeBottom&&a.flakes)for(var c=a.flakes.length;c--;)a.flakes[c].active===0&&a.flakes[c].stick()};this.resizeHandler=function(){if(g.innerWidth||g.innerHeight){k=g.innerWidth-(!s?2:2)-a.flakeRightOffset;r=a.flakeBottom?a.flakeBottom:g.innerHeight}else{k=(e.documentElement.clientWidth||e.body.clientWidth||e.body.scrollWidth)-(!s?8:0)-a.flakeRightOffset;r=a.flakeBottom?a.flakeBottom:
e.documentElement.clientHeight||e.body.clientHeight||e.body.scrollHeight}if(r<e.body.scrollHeight)k-=16;w=parseInt(k/2,10)};this.resizeHandlerAlt=function(){k=a.targetElement.offsetLeft+a.targetElement.offsetWidth-a.flakeRightOffset;r=a.flakeBottom?a.flakeBottom:a.targetElement.offsetTop+a.targetElement.offsetHeight;w=parseInt(k/2,10)};this.motionHandler=function(c){var d=c.x;c=c.y;var j;if(y===-90||y===90){j=d;d=c;c=j}if(B<0)B=Math.abs(B);if(d!==null){if(y===90)d*=-1;if(d<0){d=Math.max(-1,d)/1;m=
Math.max(-R,m+1.1*d)}else if(d>0){d=Math.min(1,d)/1;m=Math.min(R,m+1.1*d)}}else if(Math.abs(m)>0.1)m*=0.9;if(c!==null){if(y===-90)c*=-1;if(c<0){c=Math.max(-1,c)/1;if(C<1)C-=c}else if(c>0){c=Math.min(1,c)/1;if(C>-1)C-=c}}};this.tiltHandler={iOS:function(c){a.motionHandler({x:c.accelerationIncludingGravity.x/8,y:c.accelerationIncludingGravity.y/8})},moz:function(c){a.motionHandler({x:c.x*-1,y:c.y})}};this.orientationHandler={iOS:function(){y=g.orientation},moz:{}};this.freeze=function(){if(a.disabled)return false;
else a.disabled=1;clearInterval(a.timer)};this.resume=function(){if(a.disabled)a.disabled=0;else return false;a.timerInit()};this.toggleSnow=function(){if(a.flakes.length){a.active=!a.active;if(a.active){a.show();a.resume()}else{a.stop();a.freeze()}}else a.start()};this.stop=function(){this.freeze();for(var c=this.flakes.length;c--;)this.flakes[c].hide();a.events.remove(g,"scroll",a.scrollHandler);a.events.remove(g,"resize",a.resizeHandler);if(a.freezeOnBlur)if(s){a.events.remove(e,"focusout",a.freeze);
a.events.remove(e,"focusin",a.resume)}else{a.events.remove(g,"blur",a.freeze);a.events.remove(g,"focus",a.resume)}};this.show=function(){for(var c=this.flakes.length;c--;)this.flakes[c].show()};this.SnowFlake=function(c,d,j,f){var b=this,i=[],o=c.useWebFont?1:0,p=c.useWebFont?3:0,G=Math.random(1);this.type=null;this.x=j||parseInt(l(k-20),10);this.y=!isNaN(f)?f:-l(r)-12;this.vY=this.vX=null;this.angle=0;this.angleOffset=parseInt(Math.random()*360,10);this.angleMultiplier=D(Math.random()*2);this.rotateDirection=
D(1+D(Math.random()*1));this.vAmp=null;this.melting=false;this.meltFrameCount=c.meltFrameCount;this.meltFrames=c.meltFrames;this.twinkleFrame=this.meltFrame=0;this.active=1;this.opacity=this.scale=this.fontSize=null;this.character=c.getSnowCharacter();this.o=t.snow.cloneNode(true);this.oNode=c.useWebFont?this.o.childNodes[0]:this.o;this.oNode.innerHTML=this.character;this.flakeHeight=this.flakeWidth=null;this.visible=false;T.appendChild(this.o);this.setType=function(h){if(b.type===h||b.melting)return false;
b.type=h;b.vAmp=1+h/c.types*2;b.fontSize=9+h/c.types*(c.useWebFont?14:10)*c.flakeScale;b.scale=h/c.types;b.opacity=0.5+(h+1)/c.types*0.5;b.setOpacity(b.o,b.opacity);b.flakeWidth=b.fontSize+o;b.flakeHeight=b.fontSize+p;if(!c.useWebFont){b.oNode.style.marginBottom=-(b.flakeHeight/2.35)+G+"px";b.oNode.style.lineHeight=b.flakeHeight+4+"px"}b.o.style.fontSize=b.fontSize+"px";b.o.style.width=b.flakeWidth+"px";b.o.style.height=b.flakeHeight+"px"};this.refresh=function(h){if(isNaN(b.x)||isNaN(b.y)||!h&&b.y<
-b.flakeHeight)return false;b.o.style.left=b.x+"px";b.o.style.top=b.y+"px"};this.stick=function(){if(O||c.targetElement!==e.documentElement&&c.targetElement!==e.body){b.y=r+x-b.flakeHeight-(s&&c.useWebFont?1:0);b.o.style.top=b.y+"px"}else if(c.flakeBottom)b.o.style.top=c.flakeBottom+"px";else{b.hide();b.o.style.top="auto";b.o.style.bottom="0px";b.o.style.position="fixed";b.show()}};this.vCheck=function(){if(b.vX>=0&&b.vX<0.2)b.vX=0.2;else if(b.vX<0&&b.vX>-0.2)b.vX=-0.2;if(b.vY>=0&&b.vY<0.2)b.vY=0.2};
this.applyTransform=function(h){if(c.use2DRotate&&b.y>=-b.flakeHeight&&(n.transforms.webkit||this.fontSize>=14)){var u=Math.abs(Math.min(3,b.angleOffset+h*b.angleMultiplier));if(!c.use3DRotate||!n.transforms.webkit)i.push("rotate("+h+"deg)");else{if(Math.abs(u)>360)u=0;i.push("rotate("+h+"deg) rotate3D(0,1,0,"+u+"deg)")}b.oNode.style[n.transforms.prop]=i.join(" ");i=[]}};this.move=function(){var h=b.vX*m*b.scale,u;b.x+=h;b.y+=b.vY*b.vAmp*C;if(b.x>=k||k-b.x<b.flakeWidth)b.x=0;else if(h<0&&b.x-c.flakeLeftOffset<
0-b.flakeWidth)b.x=k-b.flakeWidth-1;h=r+x-b.y;if(c.useScaling){u=Math.floor(Math.max(0,Math.min(c.types,h*(100/c.scaleOffset)/(r+x)*d)));b.setType(u)}if(c.use2DRotate&&n.transforms.prop){b.angle+=5*m*b.rotateDirection;if(Math.abs(b.angle)>=360)b.angle=0;b.applyTransform(b.angle)}if(h<=b.flakeHeight){b.active=0;c.snowStick?b.stick():b.recycle()}else{if(c.useMeltEffect&&b.active&&b.type<3&&!b.melting&&Math.random()>0.998){b.melting=true;b.melt()}if(c.useTwinkleEffect)if(b.twinkleFrame){b.twinkleFrame--;
b.o.style.visibility=b.twinkleFrame&&b.twinkleFrame%2===0?"hidden":"visible"}else if(Math.random()>0.9)b.twinkleFrame=parseInt(Math.random()*20,10)}b.refresh()};this.animate=function(){b.move()};this.setVelocities=function(){b.vX=B+l(c.vMaxX*0.2,0.1);b.vY=P+l(c.vMaxY*0.2,0.1)};this.setOpacity=function(h,u){if(c.useOpacity&&n.opacity)h.style.opacity=u};this.melt=function(){if(!c.useMeltEffect||!b.melting)b.recycle();else if(b.meltFrame<b.meltFrameCount){b.meltFrame++;b.setOpacity(b.o,b.opacity*b.meltFrames[b.meltFrame]);
b.o.style.fontSize=b.fontSize-b.fontSize*(b.meltFrame/b.meltFrameCount)+"px";if(!c.useWebFont)b.oNode.style.marginBottom=-(b.flakeHeight/2.35)-Math.random(1)+"px"}else b.recycle()};this.show=function(){if(!b.visible){b.visible=true;b.o.style.display="block"}};this.hide=function(){if(b.visible){b.visible=false;b.o.style.display="none"}};this.recycle=function(h){b.hide();b.meltFrame=0;b.melting=false;if(h||N<c.flakesMaxActive&&!b.active){b.o.style.position=F?"fixed":"absolute";b.o.style.bottom="auto";
b.setType(d);b.setVelocities();b.vCheck();b.setOpacity(b.o,b.opacity);b.o.style.padding="0px";b.o.style.margin="0px";b.o.style.fontSize=b.fontSize+"px";b.x=parseInt(l(k-b.flakeWidth-20),10);b.y=parseInt(l(r)*-1,10)-b.flakeHeight;b.refresh(true);b.show();b.active=1}else b.active=0};this.setType(d);this.recycle(true);this.refresh(true)};this.snow=function(){var c=0,d=0,j=0,f=null,b;f=[];var i=[],o=[],p=v.timing.tooSlow();for(b=a.flakes.length;b--;){if(a.flakes[b].active===1){a.flakes[b].move();p&&a.flakes[b].active===
1&&!a.flakes[b].melting&&f.push(b);c++}else if(a.flakes[b].active===0){d++;o.push(b)}else{j++;i.push(b)}a.flakes[b].melting&&a.flakes[b].melt()}N=c;if(c>a.flakesMaxActive&&f.length){d=a.flakes[f[parseInt(Math.random()*f.length,10)]];d.melting=true}if(p&&c>v.flakesMinActive&&f.length){d=a.flakes[f[parseInt(Math.random()*f.length,10)]];d.melting=true;a.timing.reset()}if(p){a.flakesMaxActive>a.flakesMinActive&&a.flakesMaxActive--;if(o.length){d=a.flakes[o[parseInt(Math.random()*o.length,10)]];if(d.active===
0&&!a.snowStick)d.recycle();else d.melting=true}}if(!p&&c<a.flakesMaxActive){if(f.length){d=a.flakes[f[parseInt(Math.random()*f.length,10)]];d.melting=true}f=a.flakes[parseInt(l(a.flakes.length),10)];if(f.active===0)f.melting=true}if(a.flakes.length<a.flakesMaxActive&&(a.flakes.length<a.flakesMinActive||!p)){c=(new Date).getTime();if(c-Q>333){Q=c;a.createSnow(1,false)}}a.timing.ping()};this.mouseMove=function(c){if(!a.followMouse)return true;c=parseInt(c.clientX,10);if(c<w)m=-1.1+c/w*1.1;else{c-=
w;m=c/w*1.1}};this.createTemplate=function(){t.snow=e.createElement("div");t.snow.className="snowflake";t.snowCharacter=e.createElement("div");var c=t.snow.style,d=t.snowCharacter.style;c.MozUserSelect="none";c.KhtmlUserSelect="none";c.WebkitlUserSelect="none";c.color=v.snowColor;c.margin="0px";c.padding="0px";c.position=F?"fixed":"absolute";c.fontFamily=(a.useWebFont?"WWFlakesRegular,":"")+"arial,verdana,sans-serif";c.overflow="hidden";c.fontWeight="normal";c.zIndex=v.zIndex;d.display="block";d.cursor=
"default";d.position="absolute";d.bottom="0px";d.left="1px";d.overflow="hidden";v.useWebFont&&t.snow.appendChild(t.snowCharacter)};this.createSnow=function(c,d){for(var j=0;j<c&&a.flakes.length<a.flakesMax;j++){a.flakes.push(new a.SnowFlake(a,parseInt(l(v.types),10)));if(d||j>a.flakesMaxActive)a.flakes[a.flakes.length-1].active=-1}v.targetElement.appendChild(T)};this.timerInit=function(){a.timing.reset(a.animationInterval);a.timer=setInterval(a.snow,a.animationInterval)};this.init=function(){if(a.useWebFont)if(U()){H=
e.createElement("style");I={rule:"@font-face",value:["font-family: 'WWFlakesRegular';","src: url('wwflakes-webfont.eot');","src: local('\u263a'), url('wwflakes-webfont.woff') format('woff'), url('wwflakes-webfont.ttf') format('truetype');","font-weight: normal;","font-style: normal;"]};L=I.rule+" {\n"+I.value.join("\n")+"\n}";M=e.createTextNode(L);if(s){A=e.createElement("link");A.rel="stylesheet";A.type="text/css";A.href="wwflakes-webfont.css";z.appendChild(A)}else{H.appendChild(M);z.appendChild(H)}}else{a.useWebFont=
false;a.use2DRotate=false}else{a.useWebFont=false;a.use2DRotate=false}a.createTemplate();for(var c=0;c<a.meltFrameCount;c++)a.meltFrames.push(1-c/a.meltFrameCount);y=typeof g.orientation!=="undefined"?g.orientation:0;a.randomizeWind();a.createSnow(2);a.events.add(g,"devicemotion",a.tiltHandler.iOS);a.events.add(g,"MozOrientation",a.tiltHandler.moz);a.events.add(e.body,"orientationchange",a.orientationHandler.iOS);a.events.add(g,"resize",a.resizeHandler);a.events.add(g,"scroll",a.scrollHandler);if(a.freezeOnBlur)if(s){a.events.add(e,
"focusout",a.freeze);a.events.add(e,"focusin",a.resume)}else{a.events.add(g,"blur",a.freeze);a.events.add(g,"focus",a.resume)}a.resizeHandler();a.scrollHandler();if(a.followMouse)a.events.add(s?e:g,"mousemove",a.mouseMove);a.animationInterval=Math.max(20,a.animationInterval);a.timerInit()};this.start=function(c){if(S){if(c)return true}else S=true;if(typeof a.targetElement==="string"){c=a.targetElement;a.targetElement=e.getElementById(c);if(!a.targetElement)throw Error('Snowstorm: Unable to get targetElement "'+
c+'"');}if(!a.targetElement)a.targetElement=!s?e.documentElement?e.documentElement:e.body:e.body;if(a.targetElement!==e.documentElement&&a.targetElement!==e.body)a.resizeHandler=a.resizeHandlerAlt;z=e.getElementsByTagName("head")[0];a.resizeHandler();a.usePositionFixed=a.usePositionFixed&&!O;F=a.usePositionFixed;if(k&&r&&!a.disabled){a.init();a.active=true}};a.events.add(g,"load",J,false);return this}(window,document);
