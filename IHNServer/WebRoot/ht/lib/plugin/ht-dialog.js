!function(E,Z){"use strict";var C="ht",q=E[C],j="px",k="left",G="top",D="bottom",B="right",s="innerHTML",u="className",$="",v="width",P="height",T="string",_="position",n="absolute",h="0",A="opacity",Q="background",g=q.Default,N=g.getInternal(),x=q.Color,W=g.animate,V=g.isTouchable,d=null,o=(Math.sqrt,E.parseInt),y=E.setTimeout,O=(Math.round,x.titleIconBackground),X=function(Y){return typeof Y===T||Y instanceof String},i=function(){return document},J=function(z){return i().createElement(z)},c=function(){var q=J("div");return q.tabIndex=-1,q.style.outline="none",q},p=function(){return J("canvas")},r=function(N,x){I(N,"-webkit-transform",x),I(N,"-ms-transform",x),I(N,"transform",x)},I=function(v,T,F){v.style.setProperty(T,F,d)},H=function(R,b,t){g.def(q.widget[R],b,t)},f=function(Z,j){Z.appendChild(j)},K=function(Y,x){Y.removeChild(x)},e=function(){return i().body},L=function(){return i().documentElement},m=function(){return L().clientWidth},S=function(){return L().clientHeight},R=function(S,o,c,V){S.addEventListener(o,c,!!V)},z=function(Y){var v=Y.touches[0];return v?v:Y.changedTouches[0]};N.addMethod(g,{dialogCloseIcon:{width:100,height:100,comps:[{type:"shape",points:[10,10,90,90],segments:[1,2],borderWidth:8,borderColor:O},{type:"shape",points:[90,10,10,90],segments:[1,2],borderWidth:8,borderColor:O}]},dialogMaximizeIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,15,80,75],borderWidth:6,borderColor:O},{type:"rect",rect:[10,10,80,20],background:O}]},dialogRestoreIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,34,56,56],borderWidth:8,borderColor:O},{type:"rect",rect:[10,34,56,14],background:O},{type:"rect",rect:[34,10,56,14],background:O},{type:"rect",rect:[82,10,8,56],background:O},{type:"rect",rect:[66,62,24,8],background:O}]},dialogTitleLabelColor:g.labelSelectColor,dialogTitleLabelFont:(V?"18":"14")+"px arial, sans-serif",dialogContentLabelFont:g.labelFont,dialogTitleBackground:x.titleBackground,dialogHeaderBackground:x.headerBackground,dialogButtonBackground:"#1ABC9C",dialogButtonSelectBackground:"#16A085",dialogButtonLabelColor:"#fff"},!0);var w=function(H){var m=this;m.$1d=H,m.addListeners()};g.def(w,Z,{ms_listener:1,getView:function(){return this.$1d.getView()},clear:function(){delete this.$2d,delete this.$3d,delete this.$4d,delete this.$5d},handle_touchstart:function(y){var P=this,u=P.$1d,D=u.$6d,l=u._config,n=u.$7d,R=y,O=y.target;if(n.contains(O)||g.preventDefault(y),g.isLeftButton(y)){V&&(R=z(y));var G=P.$8d={x:R.pageX,y:R.pageY};P.$9d={x:G.x,y:G.y},!l.maximized&&l.draggable&&D.contains(O)&&(P.$4d=!0,g.startDragging(P,y)),P.handle_mousemove(y)&&(P.$2d=!0,g.startDragging(P,y)),n.contains(y.target)||u.$41d.focus()}},handle_mousedown:function(j){this.handle_touchstart(j)},handle_touchend:function(o){if(g.isLeftButton(o)&&!this.$5d&&!this.$3d){var Y=this,W=Y.$1d,U=o.target,O=W._config,D=W.$18d,w=W.$16d;for(O.closable&&D.contains(U)&&W.hide(),O.maximizable&&w.contains(U)&&(O.maximized?W.restore():W.maximize());U&&(U.className||"").indexOf("dialog-button")<0;)U=U.parentNode;U&&U.buttonItem&&W.action&&W.action(U.buttonItem,o),delete Y.$8d,delete Y.$9d}},handle_mouseup:function(L){this.handle_touchend(L)},handleWindowTouchEnd:function(s){var k=this,L=k.$1d,S=L.$10d;k.$2d&&k.$3d?S.fire({kind:"endResize",target:L,originEvent:s}):k.$4d&&k.$5d&&S.fire({kind:"endMove",target:L,originEvent:s}),this.clear()},handleWindowMouseUp:function(R){this.handleWindowTouchEnd(R)},handle_mousemove:function(Q){var a=this.$1d._config;if(a.maximized)return!1;if("w"!==a.resizeMode&&"h"!==a.resizeMode&&"wh"!==a.resizeMode)return!1;var f=this,Z=f.getView(),A=Z.querySelector(".resize-area"),y=A.getBoundingClientRect(),x={x:y.left,y:y.top,width:y.width,height:y.height};Q=V?z(Q):Q;var d=Q.clientX,R=Q.clientY,e={x:d,y:R};return g.containsPoint(x,e)?(I(Z,"cursor","nwse-resize"),!0):(I(Z,"cursor",$),void 0)},handleWindowTouchMove:function(l){l.preventDefault();var f=l;V&&(f=z(l));var h=this,W=h.$8d,N=h.$9d;if(!(N.x==W.x&&N.y==W.y&&g.getDistance(N,{x:f.pageX,y:f.pageY})<=1)){var _=h.$1d,Z=_._config,t=_.$21d,s=Z.resizeMode||"wh",K=f.pageX-W.x,M=f.pageY-W.y;if(h.$2d){var r=t.offsetWidth,A=t.offsetHeight,E=r+K,L=A+M;if(E=Math.max(E,50),L=Math.max(L,50),"center"===Z.position||Z.position==d){var R={},p=t.getBoundingClientRect();R.x=p.left,R.y=p.top,Z.position=R}"w"===s?(_.setSize(E,A),W.x+=E-r):"h"===s?(_.setSize(r,L),W.y+=L-A):"wh"===s&&(_.setSize(E,L),W.x+=E-r,W.y+=L-A),h.$3d?_.$10d.fire({kind:"betweenResize",target:_,originEvent:l}):(h.$3d=!0,_.$10d.fire({kind:"beginResize",target:_,originEvent:l}))}else if(h.$4d){var F=t.getBoundingClientRect(),P=F.width,Y=F.height,y=m(),v=S(),b=o(t.style.left)||0,J=o(t.style.top)||0,i=b+K,B=J+M;i+P>y&&(i=y-P),B+Y>v&&(B=v-Y),0>i&&(i=0),0>B&&(B=0);var U=i-b,H=B-J;I(t,k,i+j),I(t,G,B+j),W.x+=U,W.y+=H,Z.position={x:i,y:B},h.$5d?_.$10d.fire({kind:"betweenMove",target:_,originEvent:l}):(h.$5d=!0,_.$10d.fire({kind:"beginMove",target:_,originEvent:l}))}}},handleWindowMouseMove:function(K){this.handleWindowTouchMove(K)},handleWindowResize:function(){var g=this,b=g,R=b._config,o=b.$21d,Z=m(),p=S(),T=R.width,N=R.height,w=R.position||"center";R.maximized?(I(o,v,Z+j),I(o,P,p+j),I(o,G,h),I(o,k,h)):(I(o,v,T+j),I(o,P,N+j),"center"===w?(I(o,k,(Z-T)/2+j),I(o,G,(p-N)/2+j)):(I(o,k,w.x+j),I(o,G,w.y+j)))},handle_mousewheel:function(a){a.stopPropagation()},handle_DOMMouseScroll:function(m){m.stopPropagation()}}),q.widget.Dialog=function(E){var P=this,t=P._view=c();t[u]="ht-widget-dialog",I(t,_,n),g.baseZIndex!=d&&I(t,"z-index",g.baseZIndex+"");var D=P.$11d=new w(P);P.bindingHandleWindowResize=D.handleWindowResize.bind(P),P.$10d=new q.Notifier,E&&P.setConfig(E)},H("Dialog",Z,{ms_v:1,setTitle:function(x){this._config.title=x,this.getView().querySelector(".dialog-container-title span").innerHTML=x},$31d:function(){var q=this,d=q.$6d=c(),H=q._config,_=q.$12d=q.$13d();d[u]="dialog-container-title",I(d,"cursor","default"),I(d,"white-space","nowrap"),I(d,"overflow","hidden"),I(d,"font",g.dialogTitleLabelFont),I(d,Q,H.titleBackground||g.dialogTitleBackground),I(d,"color",H.titleColor||g.dialogTitleLabelColor);var r=J("span"),n=q.$25d();if(H.titleAlign&&I(d,"text-align",H.titleAlign),H.titleIcon){var h=q.$14d=q.$15d();f(d,h)}if(r[s]=H.title,f(d,r),H.maximizable){var U=q.$16d=q.$17d();f(_,U)}if(H.closable){var $=q.$18d=q.$19d();f(_,$)}return f(d,_),I(d,"display","block"),I(d,"line-height",n+j),d},$13d:function(){var O=c();return I(O,_,n),I(O,k,h),I(O,B,5+j),I(O,G,h),I(O,D,h),I(O,"text-align",B),I(O,"white-space","nowrap"),O[u]="dialog-title-controls",O},$20d:function(){var E=this.$21d=c(),p=this._config,m=p.borderWidth;return I(E,_,"fixed"),I(E,"box-shadow","rgba(0, 0, 0, 0.2) 0px 5px 10px 0px"),I(E,"padding",h+" "+m+j+" "+m+j+" "+m+j),I(E,"box-sizing","border-box"),I(E,"-moz-box-sizing","border-box"),E[u]="dialog-container",I(E,Q,p.titleBackground||g.dialogTitleBackground),E},$22d:function(){var E,Q=this,r=Q._config,w=Q.$7d=c(),T=r.content,L=0,l=r.contentPadding||0;r.buttons!=d&&r.buttons.length>0&&(L=32),X(T)?w[s]=T:T.getView?(E=T.getView(),f(w,E)):(E=T,f(w,E)),I(w,_,n),I(w,"font",g.dialogContentLabelFont),f(e(),w);var M=w.offsetWidth+1,V=w.offsetHeight,C=Q.$25d();return r.width==d&&(r.width=M+10+2*l),r.height==d&&(r.height=V+C+L+5+2*l),K(e(),w),E&&(I(E,"box-sizing","border-box"),I(E,"-moz-box-sizing","border-box"),I(E,v,"100%"),I(E,P,"100%")),w[u]="dialog-content",I(w,G,C+l+j),I(w,D,L+l+j),I(w,k,l+j),I(w,B,l+j),I(w,"overflow","hidden"),w},$23d:function(){var i=this.$41d=c();return i[u]="dialog-overlay",I(i,v,"100%"),I(i,P,"100%"),I(i,_,"fixed"),I(i,G,h),I(i,k,h),I(i,Q,"rgba(235, 235, 235, 0.7)"),i},_config:d,setSize:function(F,x){var T=this,J=T._config;J&&(J.width=F,J.height=x,T.isShowing()&&(T.bindingHandleWindowResize(),T.iv()))},getConfig:function(){return this._config},$24d:function(){var Y=this._config,U=Y.titleIconSize||16;return V&&(U*=1.2),U},$25d:function(){var f=this._config,K=f.titleHeight||g.widgetTitleHeight;return K},$26d:function(r){I(r,"cursor","pointer"),I(r,"display","inline-block"),I(r,"margin-right",(V?8:4)+j),I(r,"vertical-align",G)},$27d:function(){var H=this.$30d=c(),g=10;return V&&(g=20),I(H,v,g+j),I(H,P,g+j),I(H,_,n),I(H,D,h),I(H,B,h),H[u]="resize-area",H},$15d:function(){var Y=this,i=p();i[u]="dialog-title-control dialog-title-control-icon";var r=Y.$25d(),X=Y.$24d();return Y.$26d(i),N.setCanvas(i,X,r),i},$17d:function(){var L=p();L[u]="dialog-title-control dialog-title-control-maximize";var $=this.$25d(),H=this.$24d();return this.$26d(L),N.setCanvas(L,H,$),L},$19d:function(){var S=p();S[u]="dialog-title-control dialog-title-control-close";var K=this.$25d(),T=this.$24d();return this.$26d(S),N.setCanvas(S,T,K),S},$28d:function(){var q=c();return I(q,Q,"white"),I(q,v,"100%"),I(q,P,"100%"),I(q,_,"relative"),q},$29d:function(){var b=this,i=c();I(i,"line-height",32+j),I(i,_,n),I(i,D,h),I(i,k,h),I(i,"white-space","nowrap"),I(i,"overflow","hidden"),I(i,B,h),I(i,Q,g.dialogHeaderBackground),i[u]="dialog-container-buttons";var x=this._config,C=x.buttonsAlign||B,T=0;return I(i,"text-align",C),b.$42d=[],x.buttons.forEach(function(c){var N=new q.widget.Button,S=N.getView();S[u]="dialog-button",S.buttonItem=c,b.$42d.push(N),N.setBorderColor(d),N.setBackground(g.dialogButtonBackground),N.setSelectBackground(g.dialogButtonSelectBackground),N.setLabelColor(g.dialogButtonLabelColor),I(S,_,"static"),I(S,"display","inline-block"),I(S,"text-align",k),I(S,"height",24+j);var l=V?10:5;C===k||C===B?I(S,"margin-"+C,l+j):0===T||I(S,"margin-"+k,l+j),I(S,"vertical-align","middle");var D=g.getTextSize(N.getLabelFont(),c.label).width+10;N.onClicked=function(z){c.action&&c.action.call(b,c,z)},N.setLabel(c.label),I(S,v,D+j),f(i,N.getView()),T++}),i},setConfig:function(i){if(i){var L=this,T=L._view;L._config=i,L.action=i.action,T[s]=$,i.borderWidth==d&&(i.borderWidth=5);var e=L.$23d(),K=L.$28d(),E=L.$31d(),k=L.$22d(),U=L.$20d(),p=L.$30d=L.$27d();if(f(T,e),f(T,U),f(U,K),f(K,E),f(K,k),i.buttons!=d&&i.buttons.length>0){var B=L.$29d();f(K,B)}f(U,p),i.maximized?(i.maximized=!1,L.bindingHandleWindowResize(),L.maximize(!0)):L.bindingHandleWindowResize(),L.isShowing()&&L.iv()}},hide:function(){var L=this,k=L.$21d,o=L.$41d,N=L._view;N[u]="ht-widget-dialog",W(k).duration(200).scale(.7).set(A,h).end(function(){L.onHidden&&L.onHidden(),K(e(),N),L.$10d.fire({kind:"hide",target:L})}),W(o).duration(200).set(A,h).end(),E.removeEventListener("resize",L.bindingHandleWindowResize)},isShowing:function(){return e().contains(this._view)},$32d:function(){var U=this,o=U._config,i=U.$21d;r(i,$),U.iv(),o.maximized?U.$10d.fire({kind:"maximize",target:U}):U.$10d.fire({kind:"restore",target:U})},maximize:function(Y){var $=this,V=$.$21d,B=$._config;if(!B.maximized){B.maximized=!0,$.$33d(),$.$16d[u]="dialog-title-control dialog-title-control-minimize";var c=m(),I=S(),e=B.width,E=B.height,Z=o(V.style.left)||0,f=o(V.style.top)||0;$.$36d=e,$.$37d=E,$.$34d=Z,$.$35d=f;var s=Y?0:200;W(V).duration(s).set(k,h).set(G,h).set(v,c+j).set(P,I+j).end(function(){$.$32d()})}},restore:function(){var g=this,s=g.$34d,l=g.$35d,h=g.$36d,B=g.$37d,H=g._config;if(H.maximized&&(H.maximized=!1,g.$33d(),g.$16d[u]="dialog-title-control dialog-title-control-maximize",g.isShowing()&&s!=d&&l!=d&&h!=d&&B!=d)){var R=g.$21d;W(R).duration(200).set(k,s+j).set(G,l+j).set(v,h+j).set(P,B+j).end(function(){g.$32d()})}delete g.$34d,delete g.$35d,delete g.$36d,delete g.$37d},show:function(){var K=this,o=K._view,m=K._config,b=K.$21d,H=K.$41d;m&&m.zIndex!=d&&I(o,"z-index",m.zIndex+$),f(e(),o),r(b,"scale(0.7)"),I(b,A,h),K.iv(),K.validate(),K._view[u]+=" dialog-show",y(function(){W(b).duration(200).scale(1).set(A,"1").end(function(){I(b,v,b.clientWidth+j),I(b,P,b.clientHeight+j),K.onShown&&K.onShown(),K.$10d.fire({kind:"show",target:K})}),W(H).duration(200).set(A,"1").end(),R(E,"resize",K.bindingHandleWindowResize)},30)},addEventListener:function(H,n,E){this.$10d.add(H,n,E)},removeEventListener:function(q,u){this.$10d.remove(q,u)},$38d:function(o,K,y,v){var j=N.initContext(o);N.translateAndScale(j,0,0,1),j.clearRect(0,0,y,y);var J=(y-v)/2;g.drawStretchImage(j,g.getImage(K),"fill",0,J,v,v),j.restore()},$33d:function(){var j=this,m=j._config,w=j.$16d,E=m.maximized?g.dialogRestoreIcon:g.dialogMaximizeIcon;if(w&&E){var Z=j.$25d(),a=j.$24d();j.$38d(w,g.getImage(E),Z,a)}},$39d:function(){var $=this,V=$._config,M=$.$14d,n=V.titleIcon;if(M&&n){var E=$.$25d(),N=$.$24d();$.$38d(M,g.getImage(n),E,N)}},$40d:function(){var Z=this,q=Z.$18d,t=g.dialogCloseIcon;if(q&&t){var C=Z.$25d(),H=Z.$24d();Z.$38d(q,g.getImage(t),C,H)}},invalidate:function(e){var _=this,u=_.$42d;_._68I||(_._68I=1,g.callLater(_.validate,_,d,e),_.onInvalidated&&_.onInvalidated(),_._41O("invalidate"));var G=_._config.content;G.invalidate&&G.invalidate(),u&&u.forEach(function(C){C.iv()})},validateImpl:function(){var o=this;o.$40d(),o.$33d(),o.$39d()}})}(this,Object);