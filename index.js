(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const n of h)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(h){const n={};return h.integrity&&(n.integrity=h.integrity),h.referrerPolicy&&(n.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?n.credentials="include":h.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(h){if(h.ep)return;h.ep=!0;const n=t(h);fetch(h.href,n)}})();var K,p,ke,E,ce,we,Se,V,R,$,Te,te,Q,Z,j={},B=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function T(o,e){for(var t in e)o[t]=e[t];return o}function ne(o){o&&o.parentNode&&o.parentNode.removeChild(o)}function Fe(o,e,t){var r,h,n,d={};for(n in e)n=="key"?r=e[n]:n=="ref"?h=e[n]:d[n]=e[n];if(arguments.length>2&&(d.children=arguments.length>3?K.call(arguments,2):t),typeof o=="function"&&o.defaultProps!=null)for(n in o.defaultProps)d[n]===void 0&&(d[n]=o.defaultProps[n]);return D(o,d,r,h,null)}function D(o,e,t,r,h){var n={type:o,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:h??++ke,__i:-1,__u:0};return h==null&&p.vnode!=null&&p.vnode(n),n}function w(o){return o.children}function z(o,e){this.props=o,this.context=e}function I(o,e){if(e==null)return o.__?I(o.__,o.__i+1):null;for(var t;e<o.__k.length;e++)if((t=o.__k[e])!=null&&t.__e!=null)return t.__e;return typeof o.type=="function"?I(o):null}function je(o){if(o.__P&&o.__d){var e=o.__v,t=e.__e,r=[],h=[],n=T({},e);n.__v=e.__v+1,p.vnode&&p.vnode(n),he(o.__P,n,e,o.__n,o.__P.namespaceURI,32&e.__u?[t]:null,r,t??I(e),!!(32&e.__u),h),n.__v=e.__v,n.__.__k[n.__i]=n,Ce(r,n,h),e.__e=e.__=null,n.__e!=t&&Pe(n)}}function Pe(o){if((o=o.__)!=null&&o.__c!=null)return o.__e=o.__c.base=null,o.__k.some(function(e){if(e!=null&&e.__e!=null)return o.__e=o.__c.base=e.__e}),Pe(o)}function ye(o){(!o.__d&&(o.__d=!0)&&E.push(o)&&!W.__r++||ce!=p.debounceRendering)&&((ce=p.debounceRendering)||we)(W)}function W(){try{for(var o,e=1;E.length;)E.length>e&&E.sort(Se),o=E.shift(),e=E.length,je(o)}finally{E.length=W.__r=0}}function Le(o,e,t,r,h,n,d,i,c,_,a){var l,N,y,v,k,b,u,f=r&&r.__k||B,L=e.length;for(c=Be(t,e,f,c,L),l=0;l<L;l++)(y=t.__k[l])!=null&&(N=y.__i!=-1&&f[y.__i]||j,y.__i=l,b=he(o,y,N,h,n,d,i,c,_,a),v=y.__e,y.ref&&N.ref!=y.ref&&(N.ref&&re(N.ref,null,y),a.push(y.ref,y.__c||v,y)),k==null&&v!=null&&(k=v),(u=!!(4&y.__u))||N.__k===y.__k?(c=Ee(y,c,o,u),u&&N.__e&&(N.__e=null)):typeof y.type=="function"&&b!==void 0?c=b:v&&(c=v.nextSibling),y.__u&=-7);return t.__e=k,c}function Be(o,e,t,r,h){var n,d,i,c,_,a=t.length,l=a,N=0;for(o.__k=new Array(h),n=0;n<h;n++)(d=e[n])!=null&&typeof d!="boolean"&&typeof d!="function"?(typeof d=="string"||typeof d=="number"||typeof d=="bigint"||d.constructor==String?d=o.__k[n]=D(null,d,null,null,null):q(d)?d=o.__k[n]=D(w,{children:d},null,null,null):d.constructor===void 0&&d.__b>0?d=o.__k[n]=D(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):o.__k[n]=d,c=n+N,d.__=o,d.__b=o.__b+1,i=null,(_=d.__i=We(d,t,c,l))!=-1&&(l--,(i=t[_])&&(i.__u|=2)),i==null||i.__v==null?(_==-1&&(h>a?N--:h<a&&N++),typeof d.type!="function"&&(d.__u|=4)):_!=c&&(_==c-1?N--:_==c+1?N++:(_>c?N--:N++,d.__u|=4))):o.__k[n]=null;if(l)for(n=0;n<a;n++)(i=t[n])!=null&&!(2&i.__u)&&(i.__e==r&&(r=I(i)),Ie(i,i));return r}function Ee(o,e,t,r){var h,n;if(typeof o.type=="function"){for(h=o.__k,n=0;h&&n<h.length;n++)h[n]&&(h[n].__=o,e=Ee(h[n],e,t,r));return e}o.__e!=e&&(r&&(e&&o.type&&!e.parentNode&&(e=I(o)),t.insertBefore(o.__e,e||null)),e=o.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function We(o,e,t,r){var h,n,d,i=o.key,c=o.type,_=e[t],a=_!=null&&(2&_.__u)==0;if(_===null&&i==null||a&&i==_.key&&c==_.type)return t;if(r>(a?1:0)){for(h=t-1,n=t+1;h>=0||n<e.length;)if((_=e[d=h>=0?h--:n++])!=null&&!(2&_.__u)&&i==_.key&&c==_.type)return d}return-1}function ae(o,e,t){e[0]=="-"?o.setProperty(e,t??""):o[e]=t==null?"":typeof t!="number"||ze.test(e)?t:t+"px"}function U(o,e,t,r,h){var n,d;e:if(e=="style")if(typeof t=="string")o.style.cssText=t;else{if(typeof r=="string"&&(o.style.cssText=r=""),r)for(e in r)t&&e in t||ae(o.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||ae(o.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Te,"$1")),d=e.toLowerCase(),e=d in o||e=="onFocusOut"||e=="onFocusIn"?d.slice(2):e.slice(2),o.l||(o.l={}),o.l[e+n]=t,t?r?t[$]=r[$]:(t[$]=te,o.addEventListener(e,n?Z:Q,n)):o.removeEventListener(e,n?Z:Q,n);else{if(h=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in o)try{o[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?o.removeAttribute(e):o.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ne(o){return function(e){if(this.l){var t=this.l[e.type+o];if(e[R]==null)e[R]=te++;else if(e[R]<t[$])return;return t(p.event?p.event(e):e)}}}function he(o,e,t,r,h,n,d,i,c,_){var a,l,N,y,v,k,b,u,f,L,C,A,ie,M,Y,S=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),n=[i=e.__e=t.__e]),(a=p.__b)&&a(e);e:if(typeof S=="function")try{if(u=e.props,f=S.prototype&&S.prototype.render,L=(a=S.contextType)&&r[a.__c],C=a?L?L.props.value:a.__:r,t.__c?b=(l=e.__c=t.__c).__=l.__E:(f?e.__c=l=new S(u,C):(e.__c=l=new z(u,C),l.constructor=S,l.render=Ke),L&&L.sub(l),l.state||(l.state={}),l.__n=r,N=l.__d=!0,l.__h=[],l._sb=[]),f&&l.__s==null&&(l.__s=l.state),f&&S.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=T({},l.__s)),T(l.__s,S.getDerivedStateFromProps(u,l.__s))),y=l.props,v=l.state,l.__v=e,N)f&&S.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),f&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(f&&S.getDerivedStateFromProps==null&&u!==y&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(u,C),e.__v==t.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(u,l.__s,C)===!1){e.__v!=t.__v&&(l.props=u,l.state=l.__s,l.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(O){O&&(O.__=e)}),B.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&d.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(u,l.__s,C),f&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(y,v,k)})}if(l.context=C,l.props=u,l.__P=o,l.__e=!1,A=p.__r,ie=0,f)l.state=l.__s,l.__d=!1,A&&A(e),a=l.render(l.props,l.state,l.context),B.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,A&&A(e),a=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++ie<25);l.state=l.__s,l.getChildContext!=null&&(r=T(T({},r),l.getChildContext())),f&&!N&&l.getSnapshotBeforeUpdate!=null&&(k=l.getSnapshotBeforeUpdate(y,v)),M=a!=null&&a.type===w&&a.key==null?Oe(a.props.children):a,i=Le(o,q(M)?M:[M],e,t,r,h,n,d,i,c,_),l.base=e.__e,e.__u&=-161,l.__h.length&&d.push(l),b&&(l.__E=l.__=null)}catch(O){if(e.__v=null,c||n!=null)if(O.then){for(e.__u|=c?160:128;i&&i.nodeType==8&&i.nextSibling;)i=i.nextSibling;n[n.indexOf(i)]=null,e.__e=i}else{for(Y=n.length;Y--;)ne(n[Y]);ee(e)}else e.__e=t.__e,e.__k=t.__k,O.then||ee(e);p.__e(O,e,t)}else n==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):i=e.__e=Je(t.__e,e,t,r,h,n,d,c,_);return(a=p.diffed)&&a(e),128&e.__u?void 0:i}function ee(o){o&&(o.__c&&(o.__c.__e=!0),o.__k&&o.__k.some(ee))}function Ce(o,e,t){for(var r=0;r<t.length;r++)re(t[r],t[++r],t[++r]);p.__c&&p.__c(e,o),o.some(function(h){try{o=h.__h,h.__h=[],o.some(function(n){n.call(h)})}catch(n){p.__e(n,h.__v)}})}function Oe(o){return typeof o!="object"||o==null||o.__b>0?o:q(o)?o.map(Oe):T({},o)}function Je(o,e,t,r,h,n,d,i,c){var _,a,l,N,y,v,k,b=t.props||j,u=e.props,f=e.type;if(f=="svg"?h="http://www.w3.org/2000/svg":f=="math"?h="http://www.w3.org/1998/Math/MathML":h||(h="http://www.w3.org/1999/xhtml"),n!=null){for(_=0;_<n.length;_++)if((y=n[_])&&"setAttribute"in y==!!f&&(f?y.localName==f:y.nodeType==3)){o=y,n[_]=null;break}}if(o==null){if(f==null)return document.createTextNode(u);o=document.createElementNS(h,f,u.is&&u),i&&(p.__m&&p.__m(e,n),i=!1),n=null}if(f==null)b===u||i&&o.data==u||(o.data=u);else{if(n=n&&K.call(o.childNodes),!i&&n!=null)for(b={},_=0;_<o.attributes.length;_++)b[(y=o.attributes[_]).name]=y.value;for(_ in b)y=b[_],_=="dangerouslySetInnerHTML"?l=y:_=="children"||_ in u||_=="value"&&"defaultValue"in u||_=="checked"&&"defaultChecked"in u||U(o,_,null,y,h);for(_ in u)y=u[_],_=="children"?N=y:_=="dangerouslySetInnerHTML"?a=y:_=="value"?v=y:_=="checked"?k=y:i&&typeof y!="function"||b[_]===y||U(o,_,y,b[_],h);if(a)i||l&&(a.__html==l.__html||a.__html==o.innerHTML)||(o.innerHTML=a.__html),e.__k=[];else if(l&&(o.innerHTML=""),Le(e.type=="template"?o.content:o,q(N)?N:[N],e,t,r,f=="foreignObject"?"http://www.w3.org/1999/xhtml":h,n,d,n?n[0]:t.__k&&I(t,0),i,c),n!=null)for(_=n.length;_--;)ne(n[_]);i||(_="value",f=="progress"&&v==null?o.removeAttribute("value"):v!=null&&(v!==o[_]||f=="progress"&&!v||f=="option"&&v!=b[_])&&U(o,_,v,b[_],h),_="checked",k!=null&&k!=o[_]&&U(o,_,k,b[_],h))}return o}function re(o,e,t){try{if(typeof o=="function"){var r=typeof o.__u=="function";r&&o.__u(),r&&e==null||(o.__u=o(e))}else o.current=e}catch(h){p.__e(h,t)}}function Ie(o,e,t){var r,h;if(p.unmount&&p.unmount(o),(r=o.ref)&&(r.current&&r.current!=o.__e||re(r,null,e)),(r=o.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){p.__e(n,e)}r.base=r.__P=null}if(r=o.__k)for(h=0;h<r.length;h++)r[h]&&Ie(r[h],e,t||typeof o.type!="function");t||ne(o.__e),o.__c=o.__=o.__e=void 0}function Ke(o,e,t){return this.constructor(o,t)}function qe(o,e,t){var r,h,n,d;e==document&&(e=document.documentElement),p.__&&p.__(o,e),h=(r=!1)?null:e.__k,n=[],d=[],he(e,o=e.__k=Fe(w,null,[o]),h||j,j,e.namespaceURI,h?null:e.firstChild?K.call(e.childNodes):null,n,h?h.__e:e.firstChild,r,d),Ce(n,o,d)}K=B.slice,p={__e:function(o,e,t,r){for(var h,n,d;e=e.__;)if((h=e.__c)&&!h.__)try{if((n=h.constructor)&&n.getDerivedStateFromError!=null&&(h.setState(n.getDerivedStateFromError(o)),d=h.__d),h.componentDidCatch!=null&&(h.componentDidCatch(o,r||{}),d=h.__d),d)return h.__E=h}catch(i){o=i}throw o}},ke=0,z.prototype.setState=function(o,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=T({},this.state),typeof o=="function"&&(o=o(T({},t),this.props)),o&&T(t,o),o!=null&&this.__v&&(e&&this._sb.push(e),ye(this))},z.prototype.forceUpdate=function(o){this.__v&&(this.__e=!0,o&&this.__h.push(o),ye(this))},z.prototype.render=w,E=[],we=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Se=function(o,e){return o.__v.__b-e.__v.__b},W.__r=0,V=Math.random().toString(8),R="__d"+V,$="__a"+V,Te=/(PointerCapture)$|Capture$/i,te=0,Q=Ne(!1),Z=Ne(!0);var Ge=0;function s(o,e,t,r,h,n){e||(e={});var d,i,c=e;if("ref"in c)for(i in c={},e)i=="ref"?d=e[i]:c[i]=e[i];var _={type:o,props:c,key:t,ref:d,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ge,__i:-1,__u:0,__source:h,__self:n};if(typeof o=="function"&&(d=o.defaultProps))for(i in d)c[i]===void 0&&(c[i]=d[i]);return p.vnode&&p.vnode(_),_}var H,m,X,pe,J=0,Ae=[],g=p,ue=g.__b,fe=g.__r,me=g.diffed,ge=g.__c,ve=g.unmount,be=g.__;function le(o,e){g.__h&&g.__h(m,o,J||e),J=0;var t=m.__H||(m.__H={__:[],__h:[]});return o>=t.__.length&&t.__.push({}),t.__[o]}function G(o){return J=1,Ye(He,o)}function Ye(o,e,t){var r=le(H++,2);if(r.t=o,!r.__c&&(r.__=[He(void 0,e),function(i){var c=r.__N?r.__N[0]:r.__[0],_=r.t(c,i);c!==_&&(r.__N=[_,r.__[1]],r.__c.setState({}))}],r.__c=m,!m.__f)){var h=function(i,c,_){if(!r.__c.__H)return!0;var a=r.__c.__H.__.filter(function(N){return N.__c});if(a.every(function(N){return!N.__N}))return!n||n.call(this,i,c,_);var l=r.__c.props!==i;return a.some(function(N){if(N.__N){var y=N.__[0];N.__=N.__N,N.__N=void 0,y!==N.__[0]&&(l=!0)}}),n&&n.call(this,i,c,_)||l};m.__f=!0;var n=m.shouldComponentUpdate,d=m.componentWillUpdate;m.componentWillUpdate=function(i,c,_){if(this.__e){var a=n;n=void 0,h(i,c,_),n=a}d&&d.call(this,i,c,_)},m.shouldComponentUpdate=h}return r.__N||r.__}function de(o,e){var t=le(H++,3);!g.__s&&$e(t.__H,e)&&(t.__=o,t.u=e,m.__H.__h.push(t))}function Ve(o){return J=5,Xe(function(){return{current:o}},[])}function Xe(o,e){var t=le(H++,7);return $e(t.__H,e)&&(t.__=o(),t.__H=e,t.__h=o),t.__}function Qe(){for(var o;o=Ae.shift();){var e=o.__H;if(o.__P&&e)try{e.__h.some(F),e.__h.some(oe),e.__h=[]}catch(t){e.__h=[],g.__e(t,o.__v)}}}g.__b=function(o){m=null,ue&&ue(o)},g.__=function(o,e){o&&e.__k&&e.__k.__m&&(o.__m=e.__k.__m),be&&be(o,e)},g.__r=function(o){fe&&fe(o),H=0;var e=(m=o.__c).__H;e&&(X===m?(e.__h=[],m.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(F),e.__h.some(oe),e.__h=[],H=0)),X=m},g.diffed=function(o){me&&me(o);var e=o.__c;e&&e.__H&&(e.__H.__h.length&&(Ae.push(e)!==1&&pe===g.requestAnimationFrame||((pe=g.requestAnimationFrame)||Ze)(Qe)),e.__H.__.some(function(t){t.u&&(t.__H=t.u),t.u=void 0})),X=m=null},g.__c=function(o,e){e.some(function(t){try{t.__h.some(F),t.__h=t.__h.filter(function(r){return!r.__||oe(r)})}catch(r){e.some(function(h){h.__h&&(h.__h=[])}),e=[],g.__e(r,t.__v)}}),ge&&ge(o,e)},g.unmount=function(o){ve&&ve(o);var e,t=o.__c;t&&t.__H&&(t.__H.__.some(function(r){try{F(r)}catch(h){e=h}}),t.__H=void 0,e&&g.__e(e,t.__v))};var xe=typeof requestAnimationFrame=="function";function Ze(o){var e,t=function(){clearTimeout(r),xe&&cancelAnimationFrame(e),setTimeout(o)},r=setTimeout(t,35);xe&&(e=requestAnimationFrame(t))}function F(o){var e=m,t=o.__c;typeof t=="function"&&(o.__c=void 0,t()),m=e}function oe(o){var e=m;o.__c=o.__(),m=e}function $e(o,e){return!o||o.length!==e.length||e.some(function(t,r){return t!==o[r]})}function He(o,e){return typeof e=="function"?e(o):e}const x=({level:o,message:e})=>s("p",{children:["[ ",s("span",{class:`text-${o==0?"green":"red"}`,children:o==0?"OK":"ERROR"})," ] ",e]}),eo=o=>{let e=2-Math.trunc(Math.log10(o));return`https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/${"0".repeat(e)}${o}.png`},_e=({id:o,size:e,className:t})=>{const r=o||Math.round(Math.random()*809);return s("img",{src:eo(r),alt:`pokémon ${r}`,class:t,width:e,height:e})},se="Felipe Izolan",Me=22,Ue="São-Paulo/Brasil",oo={X:"https://x.com/felipeizolann",Mail:"felipeizolan@proton.me",GitHub:"https://github.com/felipeizolan",YouTube:"https://www.youtube.com/@felipeizolann",Codeberg:"https://codeberg.org/felipeizolan"},Re=[{href:"https://izolipe.com/",name:"izolipe.com",description:"My personal website (pt-BR).",tools:["JS","TS","CSS","HTML","AstroJS","MDX"]},{href:"https://github.com/FelipeIzolan/mi",name:"MI",description:"MI (from 'minimal') is a collection of projects.",tools:["C","Lua","Shell","AstroJS","Other"]},{href:"https://github.com/FelipeIzolan/lua-cd3",name:"lua-cd3",description:"Lua lexer, parser & minifier written in pure lua.",tools:["Lua"]}],De=new Date,so=De.getFullYear(),to=[`
                                         .-/+ossooooooo+/:.                                         
                                   ´:osydhyo++:     :yyyyydN@ho:´                                   
                                :sho:´´.       .+o´´d@h./N@@@@@@@@s:                                
                             -s@dd-           :--@s@@@@@@@@@@@@@@@@@Ny:                             
                           /dho´.              ///N@yy::@@@@N+y@dNhd@N@@+´                          
                         /ho´                 ´@@@/-   ´:::sdosNdd@@@o@@@N+                         
                       .h+                   :o@@@@@@@@/:---:::::o@@@@@@@@@@-                       
                      /h.                 ´+s@@@@@@@@@@@@@@@@@@@@dy@@@@Nd@@@@o                      
                     oy´                  :@@@@@@@@@@@@@@@@@@@@@@Nyyo@@@yNdsh@s                     
                    +h:                 -od@@@@@@@@@@@@@@@@@@@@@@@@N.y@@@@@:´+@s                    
                   -@´´                 y@@@@@@@@@@@@@@@@@@@@@@@@@@@N@-d@@N-´´o@:                   
                   h/                   y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h--.´´´.s@                   
                  .NN@y.´                 hh@@@@@@dhhhN@@@@@@@@@@@@@@@@@@@s´´´´-N:                  
                  /dN@@@o´                 ´yyyyyy    syN@@@@@@@@@@@@@@@@h+´´´´´so                  
                  o@@@@@@s//                            h@@@@@@@@@@@@@Nd+-´´´´´´oy                  
                  +N@@@@@@@No++                         h@@@@@@@@@@@@@d:.´´´´´´´ss                  
                  .N@@@@@@@@@@@´                        /+N@@@@@@@@@@@s´´´´´´´´´d:                  
                   dh@@@@@@@@N/´                          @@@@@@@@@@@@/´´´´´´´´:@                   
                   -@o@@@@@@@@-                         yh@@@@@@@@@@@N.ydy´´´´.d/                   
                   oy:@@@@@NNs                         ./@@@@@@@@@N-.:@N:´´´´sy                    
                     syh@@@@d´                           o@@@@@@@Nd+´´y+´´´´´oy                     
                      +hh@@@N-                           oh@@@@Nd/´´´´´´´´´.ys                      
                       -hhN@@´                            oN+++:-´´´´´´´´´/d:                       
                         +ddd.                            ..´´´´´´´´´´´´:yo´                        
                          ´+@d:                             ´´´´´´´´´´/yo´                          
                             :yh/                         ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                  ./oss+:-´   ´-::::///++oyyso/.                                   
                                        ´-:+oooyhhhhhyso+/-´                                        

`,`
                                         .-/+osyyysoooo+/:.                                         
                                   ´:osssh+:ydhs++-.   ´.sN@dyo:´                                   
                                :shoshy-   ´´         ´/o:+@d+y@@@s:                                
                             -s@@@dNhsdy´             -/´hyN@@N@@@@@Ny:                             
                           /d@N@Nh/o. ´                  /+@@hy+d@@@hN@d+´                          
                         /@@@@h+´                        y@@s. ´.ooodod@N@+                         
                       .d@@No.                          .+@@@@NNN+:-:::/s@N@-                       
                      /Ndyy                           ´od@@@@@@@@@@@@@@@@@N@No                      
                     oN- .:                           ´N@@@@@@@@@@@@@@@@@@hhNNs                     
                    +N-/   :o                        +sN@@@@@@@@@@@@@@@@@@@hs@@s                    
                   -@s:´   ´´                        h@@@@@@@@@@@@@@@@@@@@@@@s@N:                   
                   h/´:/ ´´´´.´                      odN@@@@@@@@@@@@@@@@@@@@@@o/@                   
                  .N   ´oN@@@@y--.                     +h@@@@@@ddd@@@@@@@@@@@@@dd:                  
                  /h    :@@@@@@@@h:´                     /yhhhh- .:h@@@@@@@@@@@hso                  
                  oy   .@@@@@@@@@@@s///                           ´´o@@@@@@@@@@:oy                  
                  +h   ´@@@@@@@@@@@@@@@o+++                       ´´s@@@@@@@@@o´ss                  
                  .N    @@@@@@@@@@@@@@@@@@@.                      ´´/s@@@@@@@@.´d:                  
                   d/   -s@@@@@@@@@@@@@@@s/´                      ´´´/@@@@@@@h´:@                   
                   -@´   ´-@@@@@@@@@@@@@@+                      ´ ´:dN@@@@@@@+hd/                   
                    oy      -@@@@@@@@@@@@s                      ´´´./@@@@@@h.hhy                    
                     sy     s@@@@@@@@@o.                       ´´´´´h@@@@Ny./sy                     
                      +h´    h@@@@@@@do                        ´´´´-d@@Ny-´.ys                      
                       -h/    y@@@@@h:                        ´´´´´:d//:.´/d:                       
                         +h:   +N@dh.                       ´´´´´´´..´´´:yo´                        
                          ´+y/  /@d-                        ´´´´´´´´´´/yo´                          
                             :ss:.os-                     ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./ooo+/y/´     ´´.://++oosso/.                                   
                                        ´-:+oooooyhhhyso+/-´                                        

`,`
                                         .-/+oossyyyyso+/:.                                         
                                   ´:oy@Nhs/o// .@@@y+-´::+osyo:´                                   
                                :sdNNNh- /@Ny+´´ ´´        ´´:yy@ys:                                
                             -sN@@@Ny@Nd@@@@++dh             .+/o@@@Ny:                             
                           /d@@@@@@NNN@@hs´+/                 ´´´/y@@hN@+´                          
                         /@N@@@@@@@@@N+:                       ´´.d@h´.yy@+                         
                       .hyN@@@@@@@@h.                           ´´-d@@@d+-+h-                       
                      /h-:@@@yyooy/                              .s@@@@@@@NN@o                      
                     oy´sy@@´    ::                              ´d@@@@@@@@@@@s                     
                    +h ´:@@- :y      od´                         oh@@@@@@@@@@@@s                    
                   -@´   ./yd.´                                  o@@@@@@@@@@@@@@:                   
                   h/         ss ´´.......´                      -@N@@@@@@@@@@@@@                   
                  .N            ´+s@@@@@@@o---´                    :dN@@@N@@@@@@@:                  
                  /h             :+@@@@@@@@@@@s:.                 ´´´+hhhs´-h@@@@o                  
                  oy            ´@@@@@@@@@@@@@@@y///-             ´´´´´´´´´´´@@@@y                  
                  +h             N@@@@@@@@@@@@@@@@@@h+++:         ´´´´´´´´´´´N@@@s                  
                  .N             d@@@@@@@@@@@@@@@@@@@@@@s         ´´´´´´´´´´.s@@@:                  
                   d/            -/N@@@@@@@@@@@@@@@@@@h/-        ´´´´´´´´´´´´y@@@                   
                   -@´             -:@@@@@@@@@@@@@@@@@+          ´´´´´´´´´´.d@@@/                   
                    oy               ´.@@@@@@@@@@@@@@@/          ´.´´´´´´´´.d@@y                    
                     sy              -N@@@@@@@@@@@y:.´          ´´´´´´´´´´´y@@y                     
                      +h´             h@@@@@@@@@@h:            ´´´´´´´´´´´/@@s                      
                       -h/            .N@@@@@@@o:              ´´´´´´´´´´:sd:                       
                         +h:           /@@@@@s-              ´´´´´´´´´´´:yo´                        
                          ´+y/         :@@N.                ´´´´´´´´´´/yo´                          
                             :ss:       sNh´              ´´´´´´´´´:sy/                             
                               ´/ss+-    ´.´            ´´´´´´´-+ss/´                               
                                   ./ooo+:-..:+/.    ´.-:+oosso/.                                   
                                        ´-:+osyyyyosssso+/-´                                        

`,`
                                         .-/+ooosossyso+/:.                                         
                                   ´:oy@@d@Ndyo/-:+:-/hNNy+ssso:´                                   
                                :oyN@@@N@@@Ns- ´sNNso.´´´´ ´´´.:oys:                                
                             -ss//N@@@@@@@@yh@dN@@@@h++@-    ´´´´´:shy:                             
                           /y+´ +N@@@@@@@@@N@@N@@Ny.-s´       ´´´´´´´:sd+´                          
                         /h/  .d@@@@@@@@@@@@@@@@/-             ´´´´´´´´+@d+                         
                       .h+    /@N@@@@@@@@@@@@h:                 ´´´´´´´´.yN@-                       
                      /h.     .-o@@@@hooo++oo+´                  ´´´´´´´´/@@@o                      
                     oy´      /ys@@@N.      -:                   ´´´´´´´´.d@@@s                     
                    +h        ´-.s@@y   sd       -do              ´´´´´´´´s@@@@s                    
                   -@´           ´´´+y@d´´´´                      ´´´.´´´´/@@@@@:                   
                   h/                    .do ´..........          ´´.´´´´´´@@@@@@                   
                  .N                       ´./oh@@@@@@@@----       ´´´´´´´´´oN@N@:                  
                  /h                         .:o@@@@@@@@@@@N::     ´´´´´´´´´´/hoyo                  
                  oy                         /@@@@@@@@@@@@@@@@/++- ´´´´´´´´´´´´´oy                  
                  +h                         /@@@@@@@@@@@@@@@@@@@hoo+´´´´´´´´´´´ss                  
                  .N                         /@@@@@@@@@@@@@@@@@@@@@@d´´´´´´´´´´´d:                  
                   d/                        ./s@@@@@@@@@@@@@@@@@@N+:´´´´´´´´´´:@                   
                   -@´                         ´:o@@@@@@@@@@@@@@@@s´´´´´´´´´´´.d/                   
                    oy                           ´-+@@@@@@@@@@@@@@:.´´´´´´´´´´sy                    
                     sy                          -N@@@@@@@@@@@y/.´´´´´´´´´´´´oy                     
                      +h´                        -@@@@@@@@@@hy´´´´´´´´´´´´´.ys                      
                       -h/                       -@@@@@@@@o+  ´´´´´´´´´´´´/d:                       
                         +h:                     -@@@@@@:.  ´´´´´´´´´´´´:yo´                        
                          ´+y/                  :s@@h       ´´´´´´´´´´/yo´                          
                             :ss:               +@@:´     ´´´´´´´´´:sy/                             
                               ´/ss+-           ´--     ´´´´´´´-+ss/´                               
                                   ./ooo+:-.´´´´´-:+.-.´.:/osso/.                                   
                                        ´-:+ooyhhhhysooo+/-´                                        

`,`
                                         .-/+oooooososo+/:.                                         
                                   ´:oy@@@dhssh@@dNoo::/yoh@dso:´                                   
                                :oyy+:/@@@@@@@@@@@ds+´-oNyo+--.:oss:                                
                             -ss/.    ´yN@@@@@@@@@@@o@@N@@@@@oo+´´./ss:                             
                           /y+´        o@@@@@@@@@@@@@@@N@@@@::+..´´´´.+y+´                          
                         /h/          +@@@@@@@@@@@@@@@@@@@h-   ´´´´´´´´´:h+                         
                       .h+             ohhN@@@@@@@@@@N@@h/      ´´´´´´´´´´+h-                       
                      /h.               //+h@@@@@oooo+oo++       ´´´´´´´´´´.ho                      
                     oy´                :+yhdN@@N       -/´       ´´´´´´´´´´´ss                     
                    +h                   ´...@@@@   .dy       yh ´´´´´´´´´´´´´ys                    
                   -@´                          ´hh@h  ´´     ´´ ´´´´´.´´´´´´´.@:                   
                   h/                                 ´dh´´.......--´´´´´´´´´´´+@                   
                  .N                                     -:sy@@@@@@@/::..´´´´´´´d:                  
                  /h                                       :/N@@@@@@@@@s/´´´´´´´so                  
                  oy                                       @@@@@@@@@@@@@@++-´´´´oy                  
                  +h                                       @@@@@@@@@@@@@@@@ys-´´ss                  
                  .N                                       N@@@@@@@@@@@@@@@@@-´´d:                  
                   d/                                      /o@@@@@@@@@@@@@@@/´´:@                   
                   -@´                                      ´:h@@@@@@@@@@@@/´´.d/                   
                    oy                                        .:@@@@@@@@@Ny´´´sy                    
                     sy                                      -@@@@@@@@@@/.´´´oy                     
                      +h´                                    h@@@@@@@ds.´´´.ys                      
                       -h/                                  :@@@@@@h/.´´´´/d:                       
                         +h:                               ´@@N@d+.´´´´´:yo´                        
                          ´+y/                           .od@h.´´´´´´´/yo´                          
                             :ss:                       .@N+-.´´´´´:sy/                             
                               ´/ss+-                   .-...´´-+ss/´                               
                                   ./ooo+:-´ ´´  ´´´´-/:::+ssso/.                                   
                                        ´-:+osyyyhhhhyso+/-´                                        

`,`
                                        .-/+ooooosoooo+/:.                                         
                                   ´:oshdhd@@hssdod@dd@h@yoyhso:´                                   
                                :oso:.:+/..´:y@@@@@@@@@@Nso//osyhss:                                
                             -ss/´            :sd@@@@@@@@@@@hh@@@Ndshs:                             
                           /y+´                 :@@@@@@@@@@@@N@@@@@oo-+y+´                          
                         /h/                    +@@@@@@@@@@@@@@@@@@s´´´´:h+                         
                       .h+                        shhd@@@@@@@@@@@@@:.´´´´´/h-                       
                      /h.                           +ooh@@@@@ossos++-´´´´´´.ho                      
                     oy´                            ::yd@N@@@.   ´´/:´´´´´´´´ss                     
                    +h                                ...:@@@+  .d+´´´´´y:´´´´ys                    
                   -@´                                    ´´´-d@@:.--´´...´´´´.d:                   
                   h/                                              hh.-----..´´:@                   
                  .N                                               ´´+sh@@@@d:.´d:                  
                  /h                                               ´´´./N@@@@@h.so                  
                  oy                                               ´´´:@@@@@@@@ysy                  
                  +h                                             ´ ´´´/@@@@@@@@@@s                  
                  .N                                             ´ ´´´o@@@@@@@@@@:                  
                   d/                                            ´´´´´:s@@@@@@@@@                   
                   -@.                                           ´´´.´´-s@@@@@@@/                   
                    oy                                          ´´.´´.´´-d@@@NNy                    
                     sy                                         ´´´´´´´y@@@@@hy                     
                      +h´                                      ´´´´´´´o@@@@shs                      
                       -h/                                     ´´´´´´s@@Ns+d:                       
                         +h/.                               ´´´´´´´-h@yo:yo´                        
                          ´+ho´                             ´´´´´+yd+./yo´                          
                             :ss:                         ´´´´´/hs-:sy/                             
                               ´/ss+-                   ´´´´´´.:+ss/´                               
                                   ./ooo+:-´     ´´ ´..--/+osss/.                                   
                                        ´-:+ooosyhhyyyso+/-´                                        

`,`
                                         .-/+oooooooooo+/:.                                         
                                   ´:oy@Nds+:os@@dsshdodN@NN@so:´                                   
                                :oyd+:--.   ss/´´´./oN@@@@@N@Nsydys:                                
                             -ss/-.                   -ohN@@@@@@@@hNNy:                             
                           /h+´                          ´d@@@@@@@@@@@@@+´                          
                         /h/                              .N@@@@@@@@@@@@hh+                         
                       .h+                                  ´hddN@@@@@@@@++h-                       
                      /h.                                      :yy@@@@dhyo:.ho                      
                     oy´                                       ./odNN@@.´´::´ss                     
                    +h                                           .::/@@s´.y.´-hs                    
                   -@´                                            ´´´---y@s-.´-d:                   
                   h/                                             ´´´´´´....d../@                   
                  .N                                              ´´´´´´´´´´´+h@@:                  
                  /h                                              ´´.´´´´´´´´´:@@o                  
                  oy                                              ´´´´´´´´´´´´y@@y                  
                  +N+                                             ´´´´´´´´´´´´h@@s                  
                  .N+                                             ´´´´´´´´´´´.N@@:                  
                   ds                                             ´´´´´´´´´´´.d@@                   
                   -@/    :´                                    ´ ´´´´´´´´´´´´y@/                   
                    o@y´                                        ´´´.´´´´´´´´´-@y                    
                     s@N/                                      ´´´´´´´´´´´´´/Ny                     
                      +@@h´                                    ´´´´´´´´´´´´+Ns                      
                       -@@o                                   ´´´´´´´´´´´.y@:                       
                         +@+´    -+                         ´´´´´´´´´´´.o@o´                        
                          ´+h/  ./.                         ´´´´´´´´´-y@o´                          
                             :ss:                         ´´´´´´´´´/hh/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./ooo+/-´        ´...-:/osso/.                                   
                                        ´-:+oooosyyyyyso+/-´                                        

`,`
                                         .-/+oooooooooo+/:.                                         
                                   ´:oy@@@@@yyo::.+h@@yy@@@N@yo:´                                   
                                :sd@ys/hs:.´´´    ´sh-´´./oy@@NN@@s:                                
                             -sN@@h. ´/´                    ´-shN@@@Ny:                             
                           /dN@ss-                            ´´./@@@@@@+´                          
                         /@do´                                 ´´´.y@@@@@N+                         
                       .ds//                                    ´´´.-oNN@@@@-                       
                      /No                                        ´´´´´´´y@@@@o                      
                     o@.                                          ´´´´´´:/@Nsss                     
                    +h.                                           ´´´´´´´´//dohs                    
                   -@/                                           ´´´.´´.´´´´.:y@:                   
                   h/                                              ´´´´´´´´´´´./@                   
                  .N´                                              ´´´´´´´´´´´´´d:                  
                  /N´.                                            ´´´´´´´´´´´´´´so                  
                  oN-/ .-                                         ´´´´´´´´´´´´´´oy                  
                  +h-  /d++´                                      ´´´´´´´´´´´´´´ss                  
                  .N   ´+h+.                                      ´´´´´´´´´´´´´´d:                  
                   d/ /h´y-                                      ´´´´´´´´´´´´´´:@                   
                   -@-d@s/y        ./´                           ´´´´´´´´´´´´´.d/                   
                    ohN@@N@N+       ´                          ´ ´´´.´´´´´´´´´sy                    
                     sN@@@@@@@+-                                ´´´´´´´´´´´´´oy                     
                      +N@@@@@@@@o                               ´´´´´´´´´´´.ys                      
                       -ds.-y@@@s                              ´´´´´´´´´´´/d:                       
                         +h:  oh/         .y                 ´´´´´´´´´´´:yo´                        
                          ´+y/  -´     -+-                  ´´´´´´´´´´/yo´                          
                             :ss:       ´´                ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./osys+//:´       ´´.-:/osso/.                                   
                                        ´-:+osssooosssoo+/-´                                        

`,`
                                         .-/+oooooooooo+/:.                                         
                                   ´:oy@@@@N@@@@yshs+:-+dN@N@ho:´                                   
                                :sdN@@@@hso-.ysy´´´´´   ´-hs-:oyd@s:                                
                             -sNNNN@@@@@@:   /´              ´´´´-/h@y:                             
                           /d@@@@@@hhs.s-                     ´´´´´´./y@+´                          
                         /@@@@@ds@-                            ´´´´´´´´-yN+                         
                       .d@@@@h. .y.                             ´´´´´´´´´:y@-                       
                      /N@@@@ho                                   ´´´´´´´´´´-ho                      
                     o@@@@hy:                                    ´´´´´´´´´´´.hs                     
                    +@@sd: -´                                     ´´´´´´´´´´´´ys                    
                   -@@@:´ s/                                      ´´´.´´´´´´´´.d:                   
                   h+@d                                           ´´.´´.´´´´´´´:@                   
                  .N:-  ´´                                         ´´´´´´´´´´´´´d:                  
                  /h-/-:d:  :´                                     ´´´´´´´´´´´´´so                  
                  oy/:+Ny/.´s.  ./´                                ´´´´´´´´´´´´´oy                  
                  +h´/´/´/-     +@s+++´´                         ´ ´´´´´´´´´´´´´ss                  
                  .N            .+ydo+´´                         ´´´´´´´´´´´´´´´d:                  
                   d/        ´yyo /@-                            ´´´´´´´´´´´´´´:@                   
                   -@´     -sh@@@..@o           //                ´´´´´´´´´´´´.d/                   
                    oy    .N@@@@@N@@N@o         ´´              ´´´.´´.´´´´´´´sy                    
                     sy   /@@@@@@@@@@@@Ny.´                     ´´´´´´´´´´´´´oy                     
                      +h´  +@@@@@@@@@@@@@@d                    ´´´´´´´´´´´´.ys                      
                       -h/  :h::///s@@@@@d+                   ´´´´´´´´´´´´/d:                       
                         +h:        ´:dNy.           s/     ´´´´´´´´´´´´:yo´                        
                          ´+y/         ´o´      -+-´        ´´´´´´´´´´/yo´                          
                             :ss:               ´.´       ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./osysssyo:::-    ´´´.-/osso/.                                   
                                        ´-:+osyhhysooooo+/-´                                        

`,`
                                         .-/+oooooooooo+/:.                                         
                                   ´:oy@@@@@NN@@@N@@hshyhhyhdho:´                                   
                                :sd@@@@dN@@@@@@yo/.-/yh.´.´´´:+yyss:                                
                             -sN@@@@@dN@@@@@@@@@N+   /-      ´´´.../ss:                             
                           /d@@@@@@@@@@@@@@dyy:´s-            ´´´´´´´.+y+´                          
                         /@@@@@@@@@@@@@N/yN´                   ´´´´´´´´´:h+                         
                       .d@@@@@@@@@@@@N:´  -h.                   ´´´´´´´´´´+h-                       
                      /N@@@@@@@@@@@@@s+                          ´´´´´´´´´´.ho                      
                     oN@@@@@@@@@@@N/oy.                           ´´´´´´´´´´´ss                     
                    +dN@y:h@@N:yN-. ´.                           ´´´´´´´´´´´´´ys                    
                   -@yN- .N@@@d´´  ´@o                            ´´´´.´´´´´´´.d:                   
                   h/s´   /N@@s                                   ´´´´´´´´´´´´´:@                   
                  .N´d.  ´oo.    ´-´                              ´´´´´´´´´´´´´´d:                  
                  /h     ::oo -::s@:   ::                         ´´´´´´´´´´´´´´so                  
                  oy      s+/-+y@ds//  so    //                   ´´´´´´´´´´´´´´oy                  
                  +h       :+:´´o- /o´       N@o+++-.             ´´´´´´´´´´´´´´ss                  
                  .N                         ++hdo+-.´            ´´´´´´´´´´´´´´d:                  
                   d/                    +sss´ h@´                ´´´´´´´´´´´´´:@                   
                   -@´               .oyhN@@@. d@.          ´o: ´´´´´´´´´´´´´´.d/                   
                    oy              s@N@@@@@@@dN@@d´        ´´´ ´´´´.´´´´´´´´´sy                    
                     sy            @@@@@@@@@@@@@@@@N@.´        ´´´´´´´´´´´´´´oy                     
                      +h´          :@@@@@@@@@@@@@@@@@@y        ´´´´´´´´´´´´.ys                      
                       -h/          sN+++++++o@@@@@@d+-       ´´´´´´´´´´´´/d:                       
                         +h:         .        ./@NN-.        ´.y-´´´´´´´:yo´                        
                          ´+y/                   /o      ´o/.´´´´´´´´´/yo´                          
                             :ss:                        ´..´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./ooyhyys/o+ss+:::´´´.-/osso/.                                   
                                        ´-:+osyhhhhhyooo+/-´                                        

`,`
                                         .-/+oosooooooo+/:.                                         
                                   ´:oy@NNNNN@@@NNN@@Nd@ddNN@yo:´                                   
                                :sd@@@@@@@@@@Nh@@@@@@@@o/-++do-:oss:                                
                             -sN@@@@@@@@@@@@dN@@@@@@@@@@@h´ -+´´´´./ss:                             
                           /hNN@@@@@@@@@@@@@@@@@@@@@@hys´++   ´´´´´´´.+y+´                          
                         /@d@@@@@@@@@@@@@@@@@@@@@@+/N+         ´´´´´´´´´:h+                         
                       .d@@@@@@@@@@@@@@@@@@@@@@@h:´  -h:        ´´´´´´´´´´/h-                       
                      /NN@@@@@@@@@@@@@@@@@@@@@@@ho.              ´´´´´´´´´´.ho                      
                     o@hooy@@@@@@@@@@@@@@@@@@@y:oy-               ´´´´´´´´´´´ss                     
                    +@@o  -N@@@@+--o@@@@d.+@s.´ ´.´               ´´´´´´´´´´´´ys                    
                   -N@:   +@@N+´   yN@@@@N+     o@:              ´´´.´´.´´´´´´.d:                   
                   h+´     yy´      -@Nddd-                        ´´´´´´´´´´´´:@                   
                  .@y      yds     ´/h/-´     .-´                  ´´´´´´´´´´´´´d:                  
                  /N.             ´:::oy´ -:::d@-   .:.            ´´´´´´´´´´´´´so                  
                  oy                :s//:-osN@ys+/. :s:   ./-      ´´´´´´´´´´´´´oy                  
                  +h                  /o/:´ +o´ /s-       +@h+++:-´´´´´´´´´´´´´´ss                  
                  .N                                      -+h@s+//..´´´´´´´´´´´´d:                  
                   d/                                 /sss- y@. ´...´´´´´´´´´´´:@                   
                   -Ns                            :oyh@@@@- @N´  ´´´´´´/+´´´´´.d/                   
                    oN-                         +dNN@@@@@@@@@@@/´´.´´.´..´´´´´sy                    
                     sh                       /N@@@@@@@@@@@@@@@@h-´´´´´´´´´´´oy                     
                      +h´                     -@@@@@@@@@@@@@@@@@@s´´´´´´´´´.ys                      
                       -h/                    ´@d+o+++++oN@@@@@o+´´´´´´.´´/d:                       
                         +h:                   -.        -dNN:-´´´´´´´/.:yo´                        
                          ´+y/                             +-´´´´/o-´´/yo´                          
                             :ss:                         ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./oooo+syyssoo:o+sso/::/osso/.                                   
                                        ´-:+osyhhhhhhyso+/-´                                        

`,`
                                         .-/+ooooosoooo+/:.                                         
                                   ´:oyd@@ddhhd@@@@NN@@@NN@@@ho:´                                   
                                :sd@@@@@@@@@@@@@@@@@@dN@@@@@@y+oyhs:                                
                             -sN@@@@@@@@@@@@@@@@@@@@d@@@@@@@@@N@o://ss:                             
                           /ddN@ys@NN@@@@@@@@@@@@@@@@@@@@@@@@@@h/o:´´.+y+´                          
                         /d@hyNh/@@@@@@@@@@@@@@@@@@@@@@@@@@@h/@:´´.´´´´´:h+                         
                       .h+-N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@h/.´.y/´´´´´´´´/h-                       
                      /NNd@@@y@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@y/   ´´´´´´´´´´.ho                      
                     o@@+h@@@s@+///d@@@@@@@@@@@@@@@@@@@@@@N//y-  ´´´´´´´´´´´´ss                     
                    +@@@:@@@@@/    .o@@@@@@d...+@@@@@s.y@/. ´-´   ´´´´´´´´´´´´ys                    
                   -@@@@.N@@o´      yN@@Ny     /NN@@@@@o     h@´  ´´´.´´´´´´´´.d:                   
                   h@@@@o´´          .@y.´       +@Nd@do       ´´ ´´´´´´´´´´´´´:@                   
                  .@@@@@@N+          -hhh:     ´./ho-.     ´-.    ´´.´´´´´´´´´´´d:                  
                  /@@@@@h/´                    ./::+y+ ´:::o@y   -/´´´´´´´´´´´´´so                  
                  o@@@@s                         -so//:/sh@Nso/- /y.´´/+´´´´´´´´oy                  
                  +@@@N´                           .so/: .s+ -s/ ´´´.´hNoo+-´´´´ss                  
                  .@@@@-                                    ´´ ´.´´´.´+y@o+:.´´´d:                  
                   d@@@o                                    ´´ ´´´-yhs´yy´...´´:@                   
                   -@@@N´hd-                                  ´syd@@@s.N/´´´´./d/                   
                    o@@@´/@y                                ´d@@@@@@@NN@@-´´´´sy                    
                     s@@o +.                              .N@@@@@@@@@@@@@s´´´oy                     
                      +@@´                                o@@@@@@@@@@@@@N:´.ys                      
                       -d+                                @d++++++y@@@N+-´/d:                       
                         +h:                             ´-´´´´´´´-@d-´´:yo´                        
                          ´+y/                              ´´´´´´./´.sho´                          
                             :ss:                         ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./ooooy+//:/sssssso/ssyyosso/.                                   
                                        ´-:+osyhhhhhhyso+/-´                                        

`,`
                                         .-/+oooooooooo+/:.                                         
                                   ´:osdN@hsyssdshdN@@@NN@@@@ho:´                                   
                                :ohhdh@@@@@@@@@@@@@@@@@@@@@@@@@@@hs:                                
                             -s@NN@N@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@N@s:                             
                           /d@hN@d+hd@@h:h@N@@@@@@@@@@@@@@@@@@@@@@@@@hyh+´                          
                         /do´-hsdyNyN@@d y@@@@@@@@@@@@@@@@@@@@@@@@@@@s/´/h+                         
                       .d@o´´´..:s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@d/:/+´/h-                       
                      /N@@@N@@@y@@@@@@yoN@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o´´´´.ho                      
                     o@@@@@@@@@//@@@@@hy@s::::/@@@@@@@@@@@@@@@@@@@@@@h/o´´´´´ss                     
                    +@@@@@@@@@@--@@@@@@@@.     .:@@@@@@@s...d@@@@s/Nh-./.´´´´´ys                    
                   -@@@@@@@@@@@@-.NNNNN.        .NN@@Ny     oN@@@@No.´.:@.´´´´.d:                   
                   h@@@@@@@@@@@@@s...             .@d..       +@N@@y´´´´...´´´´:@                   
                  .@@N@@@@@@@@@@@@@@h             .hhhy      ./do:.´´.´:-´´´´´´´d:                  
                  /@´s@@@@@@@@@@@dy:-                       ´++:oh/´///@y´´:.´´´so                  
                  oy -@@@@@@@@@@y.                            ´sso+/sh@hs+´o:´/´oy                  
                  +h .@@@@@@@@@s´                               -so+.-s-:s´´´.@oys                  
                  .N  /@@@@@@@@y                                  ´´´´´-..-´´.yo@:                  
                   d/  h@@@@@@@@                                  ´´´´´....:h/s:@                   
                   -@´´d@@@@@@@@-´hhh-                           ´´´´´´´.y@NN+/d/                   
                    oy  s@@@@@@:´ h@@s                         ´ ´´´...hN@@@@Nyy                    
                     sy  h@@@@No  -d-                          ´´´´´´h@@@@@@@Ny                     
                      +h´ +d@@y´                                ´´´´o@@@@@@@@s                      
                       -h/ ´y+-                               ´´´´´oh////@N@:                       
                         +h:                                 ´´´´´´.´´´.s@o´                        
                          ´+y/                              ´´´´´´´´´´/ho´                          
                             :ss:                         ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./oooo+///s+::::/ssyyyysyyso/.                                   
                                        ´-:+osyhhhhhhyso+/-´                                        

`,`
                                         .-/+oooooooooo+/:.                                         
                                   ´:oooss+shd+o+sydyhh@@@@@@ho:´                                   
                                :osy+.+sosoN@@@@@@@@@@@@@@@@@@@@@ds:                                
                             -ss/+yh@@@@@@@@@@@@@@@@@@@@@@@@@@@@@NN@Ny:                             
                           /y+../hdos@@@@o-Nyd@@h/sd@@N@@@@@@@@@@@@@@@@@+´                          
                         /h/ od+-  ´/+h/sy@Nh@@@@N´/@@@@@@@@@@@@@@@@@@@@@@+                         
                       .h+ .d@@@d-..-----::h@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Nsh-                       
                      /h.-d@@@@@@@@N@@@@@os@@@@@@@os@@@@@@@@@@@@@@@@@@@@@@@hho                      
                     oy´y@@@@@@@@@@@@@@@Ny+:h@@@@@hh@@:////d@@@@@@@@@@@@@@@@/ys                     
                    +h.y@@@@@@@@@@@@@@@@@@: h@@@@@@@@@     ´.h@@@@@N/:o@@@s@/:ys                    
                   -@.d@@@@@@@@@@@@@@@@@@@NN..dNNNN@´        /N@@@d..´´d@@Nd..+d:                   
                   h//@@@@@@@@@@@@@@@@@@@@@@@N....             /@o.´´´´.-@NN/´./@                   
                  .N .N@@@dd@@@@@@@@@@@@@@@@@@@@@@             .ddd:´´´´-ho-´´-´d:                  
                  /h  +hh-  y@@@@@@@@@@@@@@@@Nhy//                 ´´´´´o+oy./y:yo                  
                  oy         s@@@@@@@@@@@@@Nhs                     ´´´´´´/yo/h@+yy                  
                  +h         s@@@@@@@@@@@@@@.´                   ´ ´´´´´´´-o/-//ss                  
                  .N         -+N@@@@@@@@@@@d                     ´ ´´´´´´´´´´´-.d:                  
                   d/          y@@@@@@@@@@@@                     ´´´´´´´´´´´´´.:@                   
                   -@´        o@@@@@@@@@@@@@´ yhhy               ´´´´´´´´´´´´´+N/                   
                    oy        ´.d@@@@@@@@@+.  @@@N              ´´.´´´´´´´´´-h@y                    
                     sy         :@@@@@@@@@+   y@.               ´´´´´´´´´´´:N@y                     
                      +h´        +y@@@@@y´                     ´´´´´´´´´´´/N@s                      
                       -h/         /@o+/                      ´´´´´´´´´´´/sd:                       
                         +h:        ´´                      ´´´´´´´´´´´´:yo´                        
                          ´+y/                              ´´´´´´´´´´/yo´                          
                             :ss:                         ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./ooo++///::::/so:///oyhhhso/.                                   
                                        ´-:+osyhhhhhhyso+/-´                                        

`,`
                                         .-/+oooooooooo+/:.                                         
                                   ´:ososs/.´-:++@h/o+yhh@@@@ho:´                                   
                                :oso:´  /+´´sNy//h@@@@@@@@@@@@@@@@s:                                
                             -ss/´    //@y@@@@@@@@@@@@@@@@@@@@@@@@@@Ny:                             
                           /y+´     ´::o@yyo´@@@@@@ y@y@@N+hhNN@@@@@@@@@+´                          
                         /h/       ´d@h:.   ´::/ho/h@@h@@@@@-+@@@@@@@@@@@N+                         
                       .h+       ´-d@@@N@@h:::-:::::::h@@@@@@@@@@@@@@@@@@@@@-                       
                      /h.      -+N@@@@@@@@@@@@N@@@@@Noy@@@@@@@s@@@@@@@@@@@@@@o                      
                     oy´      -N@@@@@@@@@@@@@@@@@@@@@hy/o@@@@Ny@@s+++y@@@@@@@@s                     
                    +h      ´+@@@@@@@@@@@@@@@@@@@@@@@@N´´N@@@@@@@h´´´´:y@@@@+@Ns                    
                   -@´      yN@@@@@@@@@@@@@@@@@@@@@@@@@@N-.@NNNNo´´´´´..N@@s.:@@:                   
                   h/      ´d@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:...   ´´´.´´./@-´´:@@                   
                  .N         h@@@@@@hhhN@@@@@@@@@@@@@@@@@@@@@NN´  ´´´´´´´.d@:´.o@:                  
                  /h          +yyyy-   sy@@@@@@@@@@@@@@@@@@@ds+´  ´´´´´´´´´´´´.+do                  
                  o@-                    N@@@@@@@@@@@@@@@@d+.´    ´´´´´´´´´´´´´:hy                  
                  +@d+                   N@@@@@@@@@@@@@@@o-´      ´´´´´´´´´´´´´´ds                  
                  .@@@-                  /+N@@@@@@@@@@@@@:        ´´´´´´´´´´´´´´d:                  
                   d@N.                    d@@@@@@@@@@@@@-        ´´´´´´´´´´´´´:@                   
                   -@@/                  /hN@@@@@@@@@@@@@. yhho ´´´´´´´´´´´´´´.d/                   
                    o@d´                 ´.s@@@@@@@@@@@-. -@@@+ ´´´.´´´´´´´´´´sy                    
                     s@.                   :@@@@@@@@@@d   /@:´ ´´´´´´´´´´´´´´oy                     
                      +@.                  ´yh@@@@@dy          ´´´´´´´´´´´´.ys                      
                       -h/                   ´@d+++.´         ´´´´´´´´´´´´/d:                       
                         +h:                  ..            ´´´´´´´´´´´´:yo´                        
                          ´+y/                              ´´´´´´´´´´/yo´                          
                             :ss:                         ´´´´´´´´´:sy/                             
                               ´/ss+-                   ´´´´´´´-+ss/´                               
                                   ./ooo+:-.:::::::::/+yo+ooyso/.                                   
                                        ´-:+osyhhhhhhyso+/-´                                        

`],no=({setPage:o})=>{const[e,t]=G([]),r=s("p",{children:["IzolipeOS - BIOS / v010.2977;",s("br",{}),"Unlicensed 2004-",so,"; Free Software;"]}),h=s(w,{children:[s("p",{children:[s("span",{className:"text-blue",children:"Date:"})," ",De.toLocaleString()]}),s("p",{children:[s("span",{className:"text-blue",children:"Screen:"})," ",window.screen.width,"x",window.screen.height]}),s("p",{children:[s("span",{className:"text-blue",children:"Language:"})," ",window.navigator.language]})]});return de(()=>{let n=0,d=[[r,0],[s(_e,{size:128}),0],[s("p",{children:["Loading ",s("span",{className:"text-orange",children:"Izo-Kernel"}),"..."]}),100],[s(x,{level:0,message:"Input/Output"}),80],[s(x,{level:0,message:"Disk"}),80],[s(x,{level:0,message:"Memory"}),80],[s(x,{level:0,message:"CPU"}),80],[s(x,{level:0,message:"GPU"}),80],[s(x,{level:0,message:"Device"}),80],[s("br",{}),0],[s("p",{children:["Loading ",s("span",{className:"text-orange",children:"System"}),"..."]}),100],[s(x,{level:0,message:"dbus"}),80],[s(x,{level:0,message:"runit"}),80],[s(x,{level:0,message:"kthread"}),80],[s(x,{level:1,message:"kworker"}),80],[s(x,{level:0,message:"network"}),80],[s("br",{}),0],[s("p",{children:["Loading ",s("span",{className:"text-orange",children:"Shell"}),"..."]}),100],[s(x,{level:0,message:"bash"}),80],[s(x,{level:0,message:"Environment"}),80],[s("br",{}),0],[h,50],[s("br",{}),0],[s("p",{children:["Loading ",s("span",{className:"text-orange",children:"User Interface"}),"..."]}),80]];for(let[i,c]of d)setTimeout(()=>t(_=>[..._,i]),n+=c);setTimeout(()=>{o("user-interface")},n+800)},[]),e},P=({href:o,className:e,children:t})=>s("a",{class:`text-cyan ${e??""}`,href:o,children:t||o}),ho=s("div",{className:"flex align-items gap-4",children:[s("img",{src:"/profile.png",alt:"profile",width:152,height:152}),s("div",{children:[s("p",{children:"------------------------------------"}),s("p",{children:[s("span",{className:"text-blue",children:"Name"}),": ",se]}),s("p",{children:[s("span",{className:"text-blue",children:"Year Old"}),": ",Me]}),s("p",{children:[s("span",{className:"text-blue",children:"Location"}),": ",Ue]}),s("p",{children:"------------------------------------"}),s("p",{children:"Hi! I'm a self-taught programmer."}),s("p",{children:"Passionate about mathematics & computer-science."}),s("p",{children:["This project was built using ",s(P,{href:"https://github.com/vitejs/vite",children:"vite"}),", ",s(P,{href:"https://github.com/preactjs/preact",children:"preact"})," & ",s(P,{href:"https://github.com/unocss/unocss",children:"unocss"}),"."]})]})]}),ro=s(w,{children:[s("p",{children:["-| ",s("span",{className:"text-green",children:"SOCIAL"})," |-"]}),Object.entries(oo).map(([o,e])=>s("p",{children:[s("span",{className:"text-blue",children:o}),": ",s(P,{href:e})]}))]}),lo=s(w,{children:[s("p",{children:["-| ",s("span",{className:"text-green",children:"PROJECTS"})," |-"]}),Re.map(({href:o,name:e,description:t,tools:r},h)=>s(w,{children:[s("p",{children:["--| ",s("span",{className:"text-green",children:["PROJECT ",h+1]})," |--"]}),s("p",{children:[s("span",{className:"text-blue",children:"Name"}),": ",e]}),s("p",{children:[s("span",{className:"text-blue",children:"Description"}),": ",t]}),s("p",{children:[s("span",{className:"text-blue",children:"Tools"}),": ",r.join(", ")]}),s(P,{className:"block",href:o})]}))]}),_o=s("p",{children:[s("span",{className:"text-blue",children:"./"}),s("br",{}),"|-- Tiny.ttf",s("br",{}),"|-- ",s("span",{className:"text-blue",children:"cursor/"}),s("br",{}),"|",s("span",{className:"m-[3ch]",children:["|-- ",s("span",{className:"text-purple",children:"default.png"})]}),s("br",{}),"|",s("span",{className:"m-[3ch]",children:["|-- ",s("span",{className:"text-purple",children:"pointer.png"})]}),s("br",{}),"|",s("span",{className:"m-[3ch]",children:["|-- ",s("span",{className:"text-purple",children:"text.png"})]}),s("br",{}),"|-- ",s("span",{className:"text-purple",children:"favicon.svg"}),s("br",{}),"|-- index.css",s("br",{}),"|-- index.html",s("br",{}),"|-- index.js",s("br",{}),"`-- ",s("span",{className:"text-purple",children:"profie.png"})]}),io=s(w,{children:[s("p",{children:["-| ",s("span",{className:"text-green",children:"HELP"})," |-"]}),s("p",{children:["--| ",s("span",{className:"text-green",children:"MAIN"})," |--"]}),s("p",{children:[s("span",{className:"text-purple",children:"'UI'"})," - Change to user-interface mode."]}),s("p",{children:[s("span",{className:"text-purple",children:"'ABOUT'"})," - About me."]}),s("p",{children:[s("span",{className:"text-purple",children:"'SOCIAL'"})," - List my social links."]}),s("p",{children:[s("span",{className:"text-purple",children:"'PROJECT'"})," - List my favorite projects."]}),s("p",{children:["--| ",s("span",{className:"text-green",children:"UTILS"})," |--"]}),s("p",{children:[s("span",{className:"text-purple",children:"'PKM'"})," - Print a random pokémon."]}),s("p",{children:[s("span",{className:"text-purple",children:"'TREE'"})," - List all files/folder in a tree format."]}),s("p",{children:[s("span",{className:"text-purple",children:"'HELP'"})," - List all commands."]}),s("p",{children:[s("span",{className:"text-purple",children:"'CLEAR'"})," - Clear terminal screen."]}),s("p",{children:[s("span",{className:"text-purple",children:"'FETCH'"})," - Print system information."]}),s("p",{children:[s("span",{className:"text-purple",children:"'REBOOT'"})," - Reboot system."]})]}),co=s("div",{className:"flex items-center gap-4",children:[s(_e,{size:168}),s("div",{children:[s("p",{children:[s("span",{className:"text-blue",children:"guest"}),"@",s("span",{className:"text-orange",children:"izolipe_os"})]}),s("p",{children:"------------------------------------"}),s("p",{children:[s("span",{className:"text-blue",children:"OS"}),": IzolipeOS x86_64"]}),s("p",{children:[s("span",{className:"text-blue",children:"Kernel"}),": Izo-Kernel 6.12"]}),s("p",{children:[s("span",{className:"text-blue",children:"CPU"}),": AMD Ryzen 5 7520U (8) @ 4.38 GHz"]}),s("p",{children:[s("span",{className:"text-blue",children:"GPU"}),": AMD Radeon 610M"]}),s("p",{children:[s("span",{className:"text-blue",children:"RAM"}),": 8 GiB"]}),s("p",{children:"------------------------------------"})]})]}),yo=({setPage:o})=>{const e=Ve(null),[t,r]=G([s("p",{children:"Welcome to the terminal!"}),s("p",{children:["Type ",s("span",{className:"text-purple",children:"'UI'"})," to change to user-interface mode."]}),s("p",{children:["Type ",s("span",{className:"text-purple",children:"'HELP'"})," to list all commands."]}),s("br",{})]),h=(i,c=!0)=>{let _=[...t,i];c&&_.push(s("br",{})),r(_)},n={ui:()=>o("user-interface"),about:()=>h(ho),social:()=>h(ro),project:()=>h(lo),pkm:()=>h(s(_e,{size:128,className:"block"}),!1),tree:()=>h(_o),help:()=>h(io),fetch:()=>h(co),clear:()=>r([]),reboot:()=>o("boot")},d=(i,c)=>{if(i=="Enter"){if(e.current.value="",c=="")return r([...t,s("br",{})]);c=c.trim().toLowerCase(),n[c]?n[c]():h(s("p",{children:["bash: ",c,": command not found."]}),!1)}};return de(()=>{e.current.scrollIntoView(!1),e.current.focus()},[t]),s(w,{children:[t,s("label",{className:"text-green",children:">"}),s("input",{ref:e,type:"text",className:"text-white bg-transparent border-none outline-none ml-2 w-9/10",spellcheck:!1,placeholder:"Enter a command...",onKeyDown:i=>d(i.key,e.current.value)})]})},ao=({fps:o,frames:e,style:t,className:r})=>{const[h,n]=G(0);return de(()=>{let d=setInterval(()=>{n(i=>(i+1)%e.length)},1e3*(1/o));return()=>clearInterval(d)},[]),s("pre",{className:r,style:{fontFamily:"monospace",...t},children:e[h]})},No=({setPage:o})=>s("main",{className:"text-center",children:[s("header",{className:"flex flex-col justify-evenly items-center sm:flex-row",children:[s(ao,{frames:to,fps:8,style:{fontSize:5,lineHeight:1.2}}),s("div",{className:"flex flex-col gap-2",children:[s("h1",{className:"text-green font-normal",children:se}),s("p",{children:"The pseudo-best programmer in the earth!"}),s("button",{className:"hidden bg-transparent text-red border-none sm:block",onClick:()=>o("terminal"),children:[">"," ENTER TERMINAL ","<"]})]})]}),s("hr",{className:"border border-dashed border-white my-16"}),s("section",{className:"flex flex-col justify-evenly items-center sm:flex-row-reverse sm:text-left",children:[s("img",{src:"/profile.png",alt:"profile",width:168,height:168}),s("div",{children:[s("h2",{className:"text-green font-normal",children:"ABOUT-ME"}),s("br",{}),s("p",{children:[s("span",{className:"text-blue",children:"Name"}),": ",se]}),s("p",{children:[s("span",{className:"text-blue",children:"Year Old"}),": ",Me]}),s("p",{children:[s("span",{className:"text-blue",children:"Location"}),": ",Ue]}),s("br",{}),s("p",{children:"Hi! I'm a self-taught programmer."}),s("p",{children:"Passionate about mathematics & computer-science."})]})]}),s("hr",{className:"border border-dashed border-white my-16"}),s("section",{children:[s("h2",{className:"text-green font-normal",children:"PROJECTS"}),s("br",{}),s("ul",{className:"text-left list-none",children:Re.map(({href:e,name:t,description:r,tools:h})=>s("li",{className:"p-4 my-2 border border-dashed border-white",children:[s("p",{children:[s("span",{className:"text-blue",children:"Name:"})," ",t]}),s("p",{children:[s("span",{className:"text-blue",children:"Description:"})," ",r]}),s("p",{children:[s("span",{className:"text-blue",children:"Tools"}),": ",h.join(", ")]}),s(P,{className:"block",href:e})]}))})]}),s("hr",{className:"border border-dashed border-white my-16"}),s("footer",{children:s("p",{children:["This project was built using ",s(P,{href:"https://github.com/vitejs/vite",children:"vite"}),", ",s(P,{href:"https://github.com/preactjs/preact",children:"preact"})," & ",s(P,{href:"https://github.com/unocss/unocss",children:"unocss"}),"."]})})]}),po=()=>{const[o,e]=G("boot");switch(o){case"boot":return s(no,{setPage:e});case"terminal":return s(yo,{setPage:e});case"user-interface":return s(No,{setPage:e});default:return s(w,{})}};qe(s(po,{}),document.getElementById("app"));
