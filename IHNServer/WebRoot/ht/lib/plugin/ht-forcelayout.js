!function(D,h){"use strict";var M="ht",y=M+".layout.",V=D[M]||module.parent.exports.ht,l=V.List,u=V.DataModel,d=V.Node,F=V.Edge,e=V.Group,A=Math,x=A.sqrt,R=A.random,s=A.max,$=A.min,O=function(h){return h*h};V.Default.getInternal().addMSMap({ms_force:function(G){G._interval=50,G._stepCount=10,G._motionLimit=.01,G._edgeRepulsion=.65,G._nodeRepulsion=.65,G._damper=1,G._maxMotion=0,G._motionRatio=0,G.init=function(D){var d=this;D instanceof u?d.dm=D:d.gv=D,d._nodeMap={},d._nodes=new l,d._edges=new l},G.start=function(){var b=this,s=b.gv;if(!b._timer){var E=b.cdm=s?s.dm():b.dm;E.mm(b.handleDataModelChange,b),E.md(b.handleDataPropertyChange,b),s&&s.mp(b.handleGV,b),E.each(function(T){if(b.isVisible(T)&&b.isLayoutable(T)&&T instanceof d)if(b instanceof J){var j=T.p3();T.p3([j[0]+R(),j[1]+R(),j[2]+R()])}else j=T.p(),T.p(j.x+R(),j.y+R())}),b._timer=setInterval(function(){b.relax()},b._interval),b._damper=1}},G.stop=function(){var A=this;A._timer&&(A.cdm.umm(A.handleDataModelChange,A),A.cdm.umd(A.handleDataPropertyChange,A),A.gv&&A.gv.ump(A.handleGV,A),clearInterval(A._timer),delete A._timer,delete A.cdm)},G.handleGV=function(g){var e=this;if("dataModel"===g.property){var F=g.oldValue,j=g.newValue;F&&(F.umm(e.handleDataModelChange,e),F.umd(e.handleDataPropertyChange,e)),this.cdm=j,j.mm(e.handleDataModelChange,e),j.md(e.handleDataPropertyChange,e)}},G.relax=function(){var v=this;if(!(v._damper<.1&&v._maxMotion<v._motionLimit)){this.cdm.each(function(r){v.isVisible(r)&&(r instanceof F?v.addEdge(r):r instanceof d&&v.addNode(r))});for(var M,x,N=0,q=v._edges,t=v._nodes,V=t.size();N<v._stepCount;N++){for(q.each(v.relaxEdge,v),M=0;V>M;M++)for(x=0;V>x;x++)v.relaxNode(t.get(M),t.get(x));v.moveNode()}v._isAdjusting=1,t.each(function(G){G.fix||(G.p?G.v.p3(G.p):G.v.p(G.x,G.y))}),delete v._isAdjusting,v._nodeMap={},t.clear(),q.clear(),v.onRelaxed()}},G.onRelaxed=function(){},G.isRunning=function(){return!!this._timer},G.isVisible=function(n){return n.s("layoutable")===!1?!1:this.gv?this.gv.isVisible(n):!0},G.isLayoutable=function(d){if(d.s("layoutable")===!1)return!1;if(d instanceof e)return!1;var b=this;return b.gv?b.gv.isMovable(d)&&!b.gv.isSelected(d):!(b.cdm||b.dm).sm().co(d)},G.getNodeRepulsion=function(){return this._nodeRepulsion},G.setNodeRepulsion=function(B){this._nodeRepulsion=B,this._damper=1},G.getEdgeRepulsion=function(){return this._edgeRepulsion},G.setEdgeRepulsion=function(k){this._edgeRepulsion=k,this._damper=1},G.getStepCount=function(){return this._stepCount},G.setStepCount=function(E){this._stepCount=E,this._damper=1},G.getInterval=function(){return this._interval},G.setInterval=function(D){var Z=this;Z._interval!==D&&(Z._interval=D,Z._timer&&(clearInterval(Z._timer),Z._timer=setInterval(function(){Z.relax()},D)))},G.handleDataPropertyChange=function(V){!this._isAdjusting&&this.isVisible(V.data)&&(this._damper=1)},G.handleDataModelChange=function(){this._damper=1},G.damp=function(){var N=this._maxMotion,f=this._damper;this._motionRatio<=.001&&((.2>N||N>1&&.9>f)&&f>.01?this._damper-=.01:.4>N&&f>.003?this._damper-=.003:f>1e-4&&(this._damper-=1e-4)),N<this._motionLimit&&(this._damper=0)}}}),V.layout.ForceLayout=function(l){this.init(l)},V.Default.def(y+"ForceLayout",h,{ms_force:1,getLimitBounds:function(){return this._limitBounds},setLimitBounds:function(q){this._limitBounds=q,this._damper=1},getNodeSize:function(V){var Z=this.gv;return Z&&Z.getDataUIBounds?Z.getDataUIBounds(V):V.getRect()},addNode:function(X){var u=this,h=u._nodeMap[X._id];if(h)return h;var i=X.p();h={v:X,x:i.x,y:i.y,dx:0,dy:0,fix:!u.isLayoutable(X),s:u.getNodeSize(X)};var F=h.s,K=x(O(F.width)+O(F.height))*u._nodeRepulsion;return h.r=1>K?100:K,u._nodeMap[X._id]=h,u._nodes.add(h),h},addEdge:function(O){if(O._40I&&O._41I){var B=this,z=B.addNode(O._40I),M=B.addNode(O._41I),E={s:z,t:M};M=M.s,z=z.s;var j=M.width+z.width,r=M.height+z.height;E.length=x(j*j+r*r)*B._edgeRepulsion,E.length<=0&&(E.length=100),B._edges.add(E)}},relaxEdge:function(I){var E=I.t,P=I.s,k=E.x-P.x,i=E.y-P.y,Q=x(k*k+i*i),V=100*I.length,Y=.25*k/V*Q,m=.25*i/V*Q;E.dx=E.dx-Y,E.dy=E.dy-m,P.dx=P.dx+Y,P.dy=P.dy+m},relaxNode:function(b,G){if(b!==G){var z=0,x=0,s=b.x-G.x,T=b.y-G.y,O=s*s+T*T;0===O?(z=R(),x=R()):36e4>O&&(z=s/O,x=T/O);var M=b.r*G.r/400;z*=M,x*=M,b.dx+=z,b.dy+=x,G.dx-=z,G.dy-=x}},moveNode:function(){var S=this,d=S._limitBounds,m=S._maxMotion,K=0,P=S._damper;S._nodes.each(function(C){if(!C.fix){var e=C.dx*P,B=C.dy*P;if(C.dx=e/2,C.dy=B/2,K=s(x(e*e+B*B),K),C.x+=s(-40,$(40,e)),C.y+=s(-40,$(40,B)),d){C.x<d.x&&(C.x=d.x,S.adjust(1,0)),C.y<d.y&&(C.y=d.y,S.adjust(0,1));var _=C.s;C.x+_.width>d.x+d.width&&(C.x=d.x+d.width-_.width,S.adjust(-1,0)),C.y+_.height>d.y+d.height&&(C.y=d.y+d.height-_.height,S.adjust(0,-1))}}}),S._maxMotion=K,S._motionRatio=K>0?m/K-1:0,S.damp()},adjust:function(l,X){var j=this._limitBounds;this._nodes.each(function(E){l>0?(!j||E.x+E.s.width+l<j.x+j.width)&&(E.x+=l):(!j||E.x+l>j.x)&&(E.x+=l),X>0?(!j||E.y+E.s.height+X<j.y+j.height)&&(E.y+=X):(!j||E.y+X>j.y)&&(E.y+=X)})}});var J=V.layout.Force3dLayout=function(v){this.init(v)};V.Default.def(y+"Force3dLayout",h,{ms_force:1,getNodeSize3d:function(p){return p.s3()},addNode:function(P){var l=this,c=l._nodeMap[P._id];if(c)return c;c={v:P,p:P.p3(),d:[0,0,0],fix:!l.isLayoutable(P),s:l.getNodeSize3d(P)};var R=c.s,E=V.Default.getDistance(R)*l._nodeRepulsion;return c.r=1>E?100:E,l._nodeMap[P._id]=c,l._nodes.add(c),c},addEdge:function(R){if(R._40I&&R._41I){var E=this,P=E.addNode(R._40I),W=E.addNode(R._41I),Q={s:P,t:W};W=W.s,P=P.s,Q.length=x(O(W[0]+P[0])+O(W[1]+P[1])+O(W[2]+P[2]))*E._edgeRepulsion,Q.length<=0&&(Q.length=100),E._edges.add(Q)}},relaxEdge:function(S){var v=S.t.p,e=S.s.p,O=S.t.d,y=S.s.d,Q=v[0]-e[0],G=v[1]-e[1],E=v[2]-e[2],W=x(Q*Q+G*G+E*E),K=100*S.length,F=.25*Q/K*W,A=.25*G/K*W,i=.25*E/K*W;O[0]-=F,O[1]-=A,O[2]-=i,y[0]+=F,y[1]+=A,y[2]+=i},relaxNode:function(e,j){if(e!==j){var D=e.p,S=j.p,q=0,G=0,T=0,U=D[0]-S[0],m=D[1]-S[1],d=D[2]-S[2],Q=U*U+m*m+d*d;0===Q?(q=R(),G=R(),T=R()):216e6>Q&&(q=U/Q,G=m/Q,T=d/Q);var w=e.r*j.r/400,p=e.d,K=j.d;q*=w,G*=w,T*=w,p[0]+=q,p[1]+=G,p[2]+=T,K[0]-=q,K[1]-=G,K[2]-=T}},moveNode:function(){var S=this,Y=S._maxMotion,g=0,p=S._damper;S._nodes.each(function(u){if(!u.fix){var v=u.p,P=u.d,i=P[0]*p,D=P[1]*p,T=P[2]*p;P[0]=i/2,P[1]=D/2,P[2]=T/2,g=s(x(i*i+D*D+T*T),g),v[0]+=s(-40,$(40,i)),v[1]+=s(-40,$(40,D)),v[2]+=s(-40,$(40,T))}}),S._maxMotion=g,S._motionRatio=g>0?Y/g-1:0,S.damp()}})}(this,Object);