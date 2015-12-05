!function(g,n){"use strict";var L="ht",d=g[L],w="position",H="absolute",x="px",i="left",Z="top",v="innerHTML",u="className",e="width",N="height",z="0",Q="▶",O="display",$="none",B="visibility",J="user-select",A="margin",m="padding",E=null,f=d.Color,W=d.Default,G=W.getInternal(),p=g.setTimeout,R=g.setInterval,j=g.clearTimeout,k=g.clearInterval,y=g.parseInt,c=W.isLeftButton,M=W.isDragging,q=W.startDragging,X=W.getDistance,t=W.isTouchable,s=f.widgetIconHighlight,K=f.widgetIconBorder,r=f.widgetIconGradient,P=function(){return document},S=function(y,t){return y.querySelectorAll(t)},Y=function(Y,B){var y=P().createElement(Y);return"ul"===Y&&(F(y,w,"relative"),F(y,A,z),F(y,m,z),F(y,"list-style",$),F(y,"box-sizing","border-box"),F(y,"-moz-box-sizing","border-box"),F(y,O,"inline-block"),F(y,"vertical-align","text-bottom"),F(y,"border","1px solid "+W.contextMenuBorderColor),F(y,"box-shadow","0 0 16px 1px "+W.contextMenuShadowColor),F(y,"overflow","hidden"),B||F(y,"border-radius",5+x)),y},T=function(K){var f=K.touches[0];return f?f:K.changedTouches[0]},h=function(){return Y("div")},C=function(){return Y("canvas")},F=function(p,M,q){p.style.setProperty(M,q,E)},l=function(Z,t,u){W.def(d.widget[Z],t,u)},I=function(A,$){A.appendChild($)},V=function(A,L){A.removeChild(L)},b=function(){return P().body},U=function(y,E,G,B){y.addEventListener(E,G,!!B)},o=function(r,g,J,w){r.removeEventListener(g,J,!!w)};G.addMethod(W,{contextMenuCheckIcon:{width:16,height:16,comps:[{type:"border",rect:[1,1,14,14],width:1,color:K},{type:"shape",points:[13,3,7,12,4,8],borderWidth:2,borderColor:s}]},contextMenuRadioIcon:{width:16,height:16,comps:[{type:"circle",rect:[2,2,12,12],borderWidth:1,borderColor:K},{type:"circle",rect:[4,4,8,8],borderWidth:1,borderColor:s,gradient:W.imageGradient,gradientColor:r,background:s}]},contextMenuLabelFont:(t?"16":"13")+"px arial, sans-serif",contextMenuLabelColor:"#000",contextMenuBackground:"#fff",contextMenuDisabledLabelColor:"#888",contextMenuHoverBackground:"#648BFE",contextMenuHoverLabelColor:"#fff",contextMenuSeparatorWidth:1,contextMenuSeparatorColor:"#E5E5E5",contextMenuScrollerColor1:"#FDFDFD",contextMenuScrollerColor2:"#D3D3D3",contextMenuScrollerBorderColor:"#C3C3C3",contextMenuBorderColor:"#C3C3C3",contextMenuShadowColor:"rgba(128, 128, 128, 0.5)"},!0);var D=function(K){var S=this,W=K._view;if(S.$11b=K,S.addListeners(),U(W,"contextmenu",function(r){r.preventDefault()}),!t){var p=S.$37b=S.$36b.bind(S);U(W,"mouseover",p),U(W,"mouseout",p)}};W.def(D,n,{ms_listener:1,getView:function(){return this.$11b._view},handle_touchstart:function(w){if(W.preventDefault(w),c(w)){for(var P=this,i=P.$11b,z=P.getView(),C=z.children,N=0;N<C.length;N++){var f=C[N],O=f.$24b,A=f.$25b;if(O&&O.contains(w.target))return i.scrollUp(f),P.$28b=p(function(){P.$29b=R(function(){i.scrollUp(f)},100)},500),q(P,w),void 0;if(A&&A.contains(w.target))return i.scrollDown(f),P.$28b=p(function(){P.$29b=R(function(){i.scrollDown(f)},100)},500),q(P,w),void 0}t&&(w=T(w)),P.$30b={x:w.pageX,y:w.pageY}}},handle_mousedown:function(R){this.handle_touchstart(R)},handle_touchend:function(Y){if(c(Y)){var k=this,r=k.$30b,y=t?{x:T(Y).pageX,y:T(Y).pageY}:{x:Y.pageX,y:Y.pageY};if(!r||X(r,y)>1)return delete k.$30b,void 0;for(var G=k.getView(),$=k.$11b,W=Y.target,q=E,x=E,j=$._items,b=G.$26b,Z=0;Z<b.length;Z++)if(x=b[Z],x.contains(W)){q=x.getAttribute("data-id");break}if(q&&j){var h=$.$17b(j,function(c){return c._id===q});if(h){var M=!1;h.disabled instanceof Function?M=h.disabled.call($,h):h.disabled===!0&&(M=!0),M||(h.items?t&&k.$36b(x,!0):$.$1b(h,Y))}}delete k.$30b}},$36b:function(T,E){if(!M()){var w,p=this,n=p.$11b,C=p.getView(),Q=n.$20b||C.children[0],t=n.$19b,R=C.$26b,N=C.children,e=T.target,D=C.getBoundingClientRect(),g=W.getWindowInfo(),$=g.width,z=g.height,J=function(W){for(var B=0;B<N.length;B++){var O=N[B],m=new RegExp(W+"$"),S=O[u];if(S&&(m.test(S)||S.indexOf(W+" ")>=0))return O}},K=function(L){for(var N=0;N<R.length;N++){var p=R[N],j=new RegExp(L+"$"),l=p[u];if(l&&(j.test(l)||l.indexOf(L+" ")>=0))return p}},q=function(n){var g=K("menu-item"+n.$45b),L=g.getBoundingClientRect(),E=L.top-D.top,q=L.left-D.left;F(n,Z,E+x),F(n,i,q+L.width+x);var b=n.getBoundingClientRect(),T=b.top,B=b.left,H=b.height,P=b.width,h=T+H+2,Y=B+P+2;h>z&&F(n,Z,E+z-h+x),Y>$&&F(n,i,q-P+x)};if(E)w=T;else{if("mouseover"===T.type){for(var y=0;y<R.length;y++){var o=R[y];if(o.contains(e)){w=o;break}}if(!w&&t){var b=t.parentNode,H=J("submenu"+t.getAttribute("data-id"));(H&&H.contains(e)||b&&b.contains(e))&&(w=t)}}else if("mouseout"===T.type){for(var Y=!1,f=T.relatedTarget,y=0;y<N.length;y++){var j=N[y];if("hidden"!==j.style.visibility&&j.contains(f)){Y=!0;break}}if(Y)return}!w&&Q&&(w=K("menu-item"+(Q.$45b||"NaN")))}if(w!=t){if(t)for(var U=t;U;){U[u]=U[u].replace(" menu-item-hover",""),U[u].indexOf("disabled")<0&&(F(U,"background-color",W.contextMenuBackground),F(U,"color",W.contextMenuLabelColor));var A=J("submenu"+U.getAttribute("data-id"));A&&F(A,B,"hidden");var _=U.parentNode;U=K("menu-item"+(_.$45b||"NaN"))}if(w){for(var P=w,I=[];P;){P[u]+=" menu-item-hover",P[u].indexOf("disabled")<0&&(F(P,"background-color",W.contextMenuHoverBackground),F(P,"color",W.contextMenuHoverLabelColor));var d=J("submenu"+P.getAttribute("data-id"));d&&(F(d,B,"visible"),I.push(d));var _=P.parentNode;P=K("menu-item"+(_.$45b||"NaN"))}I.reverse(),I.forEach(function(h){q(h)})}}n.$19b=w,n.$20b=w?w.parentNode:C.children[0]}},handle_mouseup:function(H){this.handle_touchend(H)},handleWindowTouchEnd:function(){var l=this;l.$28b!=E&&(j(l.$28b),delete l.$28b),l.$29b!=E&&(k(l.$29b),delete l.$29b),delete l.$34b,delete l.$30b,delete l.$35b},handleWindowMouseUp:function(L){this.handleWindowTouchEnd(L)},handle_mousemove:function(i){this.handle_touchmove(i)},handle_touchmove:function(d){if(!M()&&c(d)){for(var y=this,S=y.getView().children,g=E,R=0;R<S.length;R++){var B=S[R];if(B.contains(d.target)){g=B;break}}var z=y.$30b,k=t?{x:T(d).pageX,y:T(d).pageY}:{x:d.pageX,y:d.pageY};g&&z&&X(z,k)>2&&(q(y,d),y.$34b=g,y.$35b=g.$18b)}},handleWindowTouchMove:function(l){var K=this,p=K.$11b,F=K.$34b,h=K.$35b,U=K.$30b;if(U&&F){var R=t?{x:T(l).pageX,y:T(l).pageY}:{x:l.pageX,y:l.pageY},z=R.y-U.y;z>0?p.scrollUp(F,F.$18b-(h-z)):p.scrollDown(F,h-z-F.$18b)}},handleWindowMouseMove:function(G){this.handleWindowTouchMove(G)},$10b:function(h,S){h.preventDefault();for(var W=this,T=W.getView().children,Z=E,s=0;s<T.length;s++){var g=T[s];if(g.contains(h.target)){Z=g;break}}if(Z){var u=this.$11b,v=u.getRowHeight();Math.abs(S)>.05&&(S>0?u.scrollUp(Z,S*v):0>S&&u.scrollDown(Z,-S*v))}},handle_mousewheel:function(I){this.$10b(I,I.wheelDelta/40)},handle_DOMMouseScroll:function(x){this.$10b(x,-x.detail)},$44b:function(M){this.getView().contains(M.target)||this.$11b.hide()},$41b:function(x){this.$11b.show(x)},$4b:function(u,C){var R=this.$11b;if(C=C||R._items,C&&C.length&&u.keyCode){var P=[u.keyCode];u.shiftKey&&P.push(16),u.ctrlKey&&P.push(17),u.altKey&&P.push(18),/mac/.test(g.navigator?g.navigator.userAgent.toLowerCase():"")?u.metaKey&&P.push(17):u.metaKey&&P.push(91),P.sort();var Q=P.join(),U=R.$17b(C,function(y){if(y.key){var N=y.key.slice(0);return N.sort(),Q===N.join()}});if(U){U.preventDefault!==!1&&u.preventDefault();var s=!1;U.disabled instanceof Function?s=U.disabled.call(R,U):U.disabled===!0&&(s=!0),s||R.$1b(U,u)}}},$39b:function(b){var H=this,e=T(b);H.$32b={x:e.pageX,y:e.pageY}},$38b:function(B){var W=this,Y=T(B);W.$31b={x:Y.pageX,y:Y.pageY},W.$33b=p(function(){W.$31b&&(W.$32b?X(W.$31b,W.$32b)<10&&W.$11b.show(B):W.$11b.show(B)),delete W.$33b,delete W.$31b,delete W.$32b},600)},$40b:function(){var H=this;H.$33b!=E&&(j(H.$33b),delete H.$33b,delete H.$31b,delete H.$32b)}}),d.widget.ContextMenu=function(t){var N=this,d=N._view=h();d[u]="ht-widget-contextmenu",N.setItems(t),N.$13b=new D(N),F(d,"font",W.contextMenuLabelFont),F(d,w,H),F(d,"cursor","default"),F(d,"-webkit-"+J,$),F(d,"-moz-"+J,$),F(d,"-ms-"+J,$),F(d,J,$),F(d,"box-sizing","border-box"),F(d,"-moz-box-sizing","border-box"),W.baseZIndex!=E&&F(d,"z-index",y(W.baseZIndex)+2+""),N.$3b=function(o){N.$13b.$4b(o)}},l("ContextMenu",n,{$5b:0,_items:E,$21b:E,_enableGlobalKey:!1,ms_v:1,enableGlobalKey:function(){var l=this,n=l._enableGlobalKey;n===!1&&(U(P(),"keydown",l.$3b),l._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,o(P(),"keydown",this.$3b)},setItems:function(j){this._items=j},setVisibleFunc:function(h){this.$16b=h},setLabelMaxWidth:function(Y){this.$43b=Y},$1b:function(y,D){var j=this;if("check"===y.type)y.selected=!y.selected;else if("radio"===y.type){var T=y.groupId;j.$17b(j._items,function(g){g.groupId===T&&(g.selected=!1)}),y.selected=!0}if(j.hide(),y.action)y.action.apply(y.scope||j,[y,D]);else if(y.href){var S=y.linkTarget||"_self";g.open(y.href,S)}},getItemByProperty:function(b,n,e){var O=this;if(e=e||O._items,!e||0===e.length)return E;var U=O.$17b(e,function(z){return z[b]===n});return U||E},scrollUp:function(w,K){var f=this;if(K=K==E?20:K,K=y(K),0!==K){var H=0;w.$18b>K&&(H=w.$18b-K),f.$42b(w,H),w.scrollTop=H,w.$18b=H}},scrollDown:function(m,t){var Y=this;if(t=t==E?20:t,t=y(t),0!==t){var G=m.$22b,X=m.$23b,h=G-X;X+m.$18b+t<G&&(h=m.$18b+t),Y.$42b(m,h),m.scrollTop=h,m.$18b=h}},$42b:function(I,y){y=y==E?I.$18b:y;var B=I.$24b,j=I.$25b;B&&(F(B,"top",y+x),0==y?F(B,O,$):F(B,O,"block")),j&&(F(j,"bottom",-y+x),y==I.$22b-I.$23b?F(j,O,$):F(j,O,"block"))},getRowHeight:function(){return this._view.querySelector(".menu-item").offsetHeight},$17b:function(Q,f){for(var S=0;S<Q.length;S++){var $=Q[S];if(f($))return $;if($.items){var b=this.$17b($.items,f);if(b)return b}}},$2b:function(G,c){for(var r=this,i=0;i<G.length;i++){r.$5b++;var q=G[i];if(!r.$16b||r.$16b.call(r,q)){var n=Y("li"),S=r.$5b+"";if(F(n,"white-space","nowrap"),F(n,O,"block"),"separator"===q){var j=h();j[u]="separator",F(j,N,W.contextMenuSeparatorWidth+x),F(j,"background",W.contextMenuSeparatorColor),I(n,j)}else{q._id=S,n.setAttribute("data-id",S);var k=Y("span"),l=Y("span"),b=C(),f=h();if(F(k,O,"inline-block"),F(l,O,"inline-block"),b[u]="prefix",F(b,O,"inline-block"),F(b,e,"1em"),F(b,N,"1em"),F(b,"vertical-align","middle"),F(b,A,"0 0.2em"),"check"===q.type&&q.selected?b[u]+=" check-prefix":"radio"===q.type&&q.selected&&(b[u]+=" radio-prefix"),I(n,b),q.icon){var D=C();D[u]="contextmenu-item-icon",F(D,O,"inline-block"),F(D,"vertical-align","middle"),F(D,N,"1.2em"),F(D,e,"1.2em"),F(D,"margin-right","0.2em"),D.$50b=q.icon,I(k,D)}if(l[v]=q.label,I(k,l),I(n,k),f[u]="suffix",F(f,O,"inline-block"),F(f,"margin-left","1em"),F(f,"margin-right","0.4em"),F(f,"text-align","right"),F(f,"font-size","75%"),q.items&&(f[v]=Q),q.suffix&&(f[v]=q.suffix),I(n,f),n[u]="menu-item menu-item"+S,F(n,"background-color",W.contextMenuBackground),F(n,"color",W.contextMenuLabelColor),F(n,m,"3px 0"),q.disabled instanceof Function){var K=q.disabled.call(r,q);K&&(n[u]+=" disabled",F(n,"color",W.contextMenuDisabledLabelColor))}else q.disabled&&(n[u]+=" disabled",F(n,"color",W.contextMenuDisabledLabelColor));if(q.items){r.$21b||(r.$21b=new d.List);var M=Y("ul",r._r);M[u]="submenu"+S,M.$45b=S,F(M,B,"hidden"),F(M,w,H),I(r._view,M),r.$21b.add(M),r.$2b(q.items,M)}}I(c,n)}}},rebuild:function(){var S=this,u=S._items,B=S._view;if(B&&(B[v]="",S.$21b=E,S.$5b=0,S.$19b=E,S.$20b=E,B.$26b=E,u&&0!==u.length)){var h=Y("ul",S._r);I(B,h),S.$2b(u,h)}},addTo:function(X){if(X){var e=this,T=e.$13b;if(e.$12b=X,e.$9b=function(R){T.$44b(R)},e.$27b=function(b){T.$41b(b)},t){var N=e.$6b=function(Z){T.$38b(Z)},u=e.$7b=function(l){T.$39b(l)},f=e.$8b=function(j){T.$40b(j)};U(X,"touchstart",N,!0),U(X,"touchmove",u),U(X,"touchend",f)}else U(X,"contextmenu",e.$27b)}},show:function(l,B,K){var r=this,K=K==E?!0:!1,L=r._view;if(L){if(r.invalidate(),1===arguments.length){var Y=l;if(t){var M=T(Y);l=M.pageX,B=M.pageY}else l=Y.pageX,B=Y.pageY}var D=W.getWindowInfo(),C=D.width,Q=D.height,n=D.left,d=D.top,$={pageX:l,pageY:B,clientX:l-n,clientY:B-d,target:1,originEvent:Y},N=$.clientX,V=$.clientY,s=function(y){y.style.height=Q-6+x;var d=h(),l=h(),k=function(A){F(A,w,H),F(A,"text-align","center"),F(A,e,"100%"),F(A,"font-size",10+x),F(A,"padding","2px 0"),F(A,"border","0px solid "+W.contextMenuScrollerBorderColor),F(A,"background-color",W.contextMenuScrollerColor1),A.style.backgroundImage="-webkit-linear-gradient(top, "+W.contextMenuScrollerColor1+", "+W.contextMenuScrollerColor2+")",A.style.backgroundImage="linear-gradient(to bottom, "+W.contextMenuScrollerColor1+", "+W.contextMenuScrollerColor2+")"};d[u]="menu-arrow-item menu-arrow-item-top",l[u]="menu-arrow-item menu-arrow-item-bottom",k(d),F(d,"top",z),F(d,"left",z),F(d,"border-bottom-width",1+x),d[v]="▲",k(l),F(l,"bottom",z),F(l,"left",z),F(l,"border-top-width",1+x),l[v]="▼",y.$24b=d,y.$25b=l,y.$18b=y.scrollTop,y.$22b=y.scrollHeight,y.$23b=y.clientHeight,I(y,d),I(y,l),r.$42b(y)};r.beforeShow&&r.beforeShow($);var f=r._items;if(f&&(Y&&Y.preventDefault(),f.length)){r.rebuild(),I(b(),L),L.$26b=S(L,".menu-item");var G=L.children[0];G.offsetHeight>Q&&s(G);var X=V+(K?1:0),k=N+(K?1:0),p=function(s){for(var J=0,u=0,z=0,H=r.$43b;z<s.children.length;z++){var w=s.children[z];if(w.getAttribute("data-id")){var h=w.children[1],j=w.children[2],l=h.children;if(H){var d=l[0];l.length>1&&(d=l[1]),d.offsetWidth>H&&(d[v]="<marquee scrollamount='3'>"+d[v]+"</marquee>",d.children[0].style.verticalAlign="text-bottom",F(d,e,H+x),F(d,O,"inline-block"))}var K=h.offsetWidth,Q=j.offsetWidth;K>J&&(J=K),Q>u&&(u=Q)}}for(z=0;z<s.children.length;z++){var w=s.children[z];if(w.getAttribute("data-id")){var h=w.children[1],j=w.children[2],C=h.children[0],D=h.children[1];!D&&C.style.width&&F(C,e,J+x),F(h,e,J+x),F(j,e,u+x)}}};p(G);var o=V+3+L.offsetHeight,q=N+3+L.offsetWidth;o>Q?F(L,Z,X-(o-Q)+d+x):F(L,Z,X+d+x),q>C?F(L,i,k-(q-C)+n+x):F(L,i,k+n+x);var R=r.$21b;R&&R.each(function(S){p(S),S.offsetHeight>Q&&s(S)}),r.$9b&&U(P(),t?"touchstart":"mousedown",r.$9b,!0),r.afterShow&&r.afterShow($),r.$47b()}}},isShowing:function(){return this._view?this._view.parentNode!=E:!1},getRelatedView:function(){return this.$12b},hide:function(){var i=this,J=i._view;J&&J.parentNode&&(V(J.parentNode,J),o(P(),t?"touchstart":"mousedown",i.$9b,!0),i.afterHide&&i.afterHide())},dispose:function(){var b=this,q=b.$12b,y=b._view;y&&(y.parentNode&&V(y.parentNode,y),b.disableGlobalKey(),q&&(t?(o(q,"touchstart",b.$6b,!0),o(q,"touchmove",b.$7b),o(q,"touchend",b.$8b)):o(q,"contextmenu",b.$27b)),b._view=b._items=b.$21b=b.$19b=b.$12b=b.beforeShow=b.afterShow=b.afterHide=b.$9b=b.$3b=b.$6b=b.$7b=b.$8b=b.$27b=E)},$46b:function(R,i,f,T){var y=G.initContext(R);G.translateAndScale(y,0,0,1),y.clearRect(0,0,f,T),W.drawStretchImage(y,W.getImage(i),"fill",0,0,f,T),y.restore()},$47b:function(){var I,w,t,U=this,K=U._view;if(U.isShowing()){var B=S(K,".check-prefix");for(t=0;t<B.length;t++){var Y=B[t];I=Y.clientWidth,w=Y.clientHeight,Y.$48b=I,Y.$49b=w,G.setCanvas(Y,I,w)}var l=S(K,".radio-prefix");for(t=0;t<l.length;t++){var k=l[t];I=k.clientWidth,w=k.clientHeight,k.$48b=I,k.$49b=w,G.setCanvas(k,I,w)}var j=S(K,".contextmenu-item-icon");for(t=0;t<j.length;t++){var O=j[t];I=O.clientWidth,w=O.clientHeight,O.$48b=I,O.$49b=w,G.setCanvas(O,I,w)}}},validateImpl:function(){var i,v,t,G=this,E=G._view;if(G.isShowing()){var R=S(E,".check-prefix");for(t=0;t<R.length;t++){var l=R[t];i=l.$48b,v=l.$49b,i&&v&&G.$46b(l,W.contextMenuCheckIcon,i,v)}var w=S(E,".radio-prefix");for(t=0;t<w.length;t++){var m=w[t];i=m.$48b,v=m.$49b,i&&v&&G.$46b(m,W.contextMenuRadioIcon,i,v)}var U=S(E,".contextmenu-item-icon");for(t=0;t<U.length;t++){var C=U[t];i=C.$48b,v=C.$49b,i&&v&&G.$46b(C,W.getImage(C.$50b),i,v)}}}})}(this,Object);