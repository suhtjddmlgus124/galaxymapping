(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function yu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Oh={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function iM(){if(zv)return Qo;zv=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:f,ref:o!==void 0?o:null,props:c}}return Qo.Fragment=t,Qo.jsx=n,Qo.jsxs=n,Qo}var Fv;function aM(){return Fv||(Fv=1,Oh.exports=iM()),Oh.exports}var $=aM(),Ph={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function rM(){if(Hv)return ce;Hv=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(N,tt,yt){this.props=N,this.context=tt,this.refs=b,this.updater=yt||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function L(N,tt,yt){this.props=N,this.context=tt,this.refs=b,this.updater=yt||S}var w=L.prototype=new x;w.constructor=L,M(w,y.prototype),w.isPureReactComponent=!0;var C=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function z(N,tt,yt,St,Z,pt){return yt=pt.ref,{$$typeof:a,type:N,key:tt,ref:yt!==void 0?yt:null,props:pt}}function j(N,tt){return z(N.type,tt,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function D(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(yt){return tt[yt]})}var H=/\/+/g;function st(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?D(""+N.key):tt.toString(36)}function nt(){}function ht(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(nt,nt):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,tt,yt,St,Z){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var Tt=!1;if(N===null)Tt=!0;else switch(pt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(N.$$typeof){case a:case t:Tt=!0;break;case g:return Tt=N._init,ft(Tt(N._payload),tt,yt,St,Z)}}if(Tt)return Z=Z(N),Tt=St===""?"."+st(N,0):St,C(Z)?(yt="",Tt!=null&&(yt=Tt.replace(H,"$&/")+"/"),ft(Z,tt,yt,"",function(se){return se})):Z!=null&&(U(Z)&&(Z=j(Z,yt+(Z.key==null||N&&N.key===Z.key?"":(""+Z.key).replace(H,"$&/")+"/")+Tt)),tt.push(Z)),1;Tt=0;var Ct=St===""?".":St+":";if(C(N))for(var wt=0;wt<N.length;wt++)St=N[wt],pt=Ct+st(St,wt),Tt+=ft(St,tt,yt,pt,Z);else if(wt=v(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(St=N.next()).done;)St=St.value,pt=Ct+st(St,wt++),Tt+=ft(St,tt,yt,pt,Z);else if(pt==="object"){if(typeof N.then=="function")return ft(ht(N),tt,yt,St,Z);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function I(N,tt,yt){if(N==null)return N;var St=[],Z=0;return ft(N,St,"","",function(pt){return tt.call(yt,pt,Z++)}),St}function Y(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(yt){(N._status===0||N._status===-1)&&(N._status=1,N._result=yt)},function(yt){(N._status===0||N._status===-1)&&(N._status=2,N._result=yt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var W=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Et(){}return ce.Children={map:I,forEach:function(N,tt,yt){I(N,function(){tt.apply(this,arguments)},yt)},count:function(N){var tt=0;return I(N,function(){tt++}),tt},toArray:function(N){return I(N,function(tt){return tt})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ce.Component=y,ce.Fragment=n,ce.Profiler=o,ce.PureComponent=L,ce.StrictMode=r,ce.Suspense=d,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},ce.cache=function(N){return function(){return N.apply(null,arguments)}},ce.cloneElement=function(N,tt,yt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var St=M({},N.props),Z=N.key,pt=void 0;if(tt!=null)for(Tt in tt.ref!==void 0&&(pt=void 0),tt.key!==void 0&&(Z=""+tt.key),tt)!G.call(tt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&tt.ref===void 0||(St[Tt]=tt[Tt]);var Tt=arguments.length-2;if(Tt===1)St.children=yt;else if(1<Tt){for(var Ct=Array(Tt),wt=0;wt<Tt;wt++)Ct[wt]=arguments[wt+2];St.children=Ct}return z(N.type,Z,void 0,void 0,pt,St)},ce.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ce.createElement=function(N,tt,yt){var St,Z={},pt=null;if(tt!=null)for(St in tt.key!==void 0&&(pt=""+tt.key),tt)G.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Z[St]=tt[St]);var Tt=arguments.length-2;if(Tt===1)Z.children=yt;else if(1<Tt){for(var Ct=Array(Tt),wt=0;wt<Tt;wt++)Ct[wt]=arguments[wt+2];Z.children=Ct}if(N&&N.defaultProps)for(St in Tt=N.defaultProps,Tt)Z[St]===void 0&&(Z[St]=Tt[St]);return z(N,pt,void 0,void 0,null,Z)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:h,render:N}},ce.isValidElement=U,ce.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Y}},ce.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},ce.startTransition=function(N){var tt=F.T,yt={};F.T=yt;try{var St=N(),Z=F.S;Z!==null&&Z(yt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Et,W)}catch(pt){W(pt)}finally{F.T=tt}},ce.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ce.use=function(N){return F.H.use(N)},ce.useActionState=function(N,tt,yt){return F.H.useActionState(N,tt,yt)},ce.useCallback=function(N,tt){return F.H.useCallback(N,tt)},ce.useContext=function(N){return F.H.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N,tt){return F.H.useDeferredValue(N,tt)},ce.useEffect=function(N,tt,yt){var St=F.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(N,tt)},ce.useId=function(){return F.H.useId()},ce.useImperativeHandle=function(N,tt,yt){return F.H.useImperativeHandle(N,tt,yt)},ce.useInsertionEffect=function(N,tt){return F.H.useInsertionEffect(N,tt)},ce.useLayoutEffect=function(N,tt){return F.H.useLayoutEffect(N,tt)},ce.useMemo=function(N,tt){return F.H.useMemo(N,tt)},ce.useOptimistic=function(N,tt){return F.H.useOptimistic(N,tt)},ce.useReducer=function(N,tt,yt){return F.H.useReducer(N,tt,yt)},ce.useRef=function(N){return F.H.useRef(N)},ce.useState=function(N){return F.H.useState(N)},ce.useSyncExternalStore=function(N,tt,yt){return F.H.useSyncExternalStore(N,tt,yt)},ce.useTransition=function(){return F.H.useTransition()},ce.version="19.1.0",ce}var Gv;function wp(){return Gv||(Gv=1,Ph.exports=rM()),Ph.exports}var P=wp();const Br=yu(P);var Ih={exports:{}},$o={},Bh={exports:{}},zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function sM(){return Vv||(Vv=1,function(a){function t(I,Y){var W=I.length;I.push(Y);t:for(;0<W;){var Et=W-1>>>1,N=I[Et];if(0<o(N,Y))I[Et]=Y,I[W]=N,W=Et;else break t}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Y=I[0],W=I.pop();if(W!==Y){I[0]=W;t:for(var Et=0,N=I.length,tt=N>>>1;Et<tt;){var yt=2*(Et+1)-1,St=I[yt],Z=yt+1,pt=I[Z];if(0>o(St,W))Z<N&&0>o(pt,St)?(I[Et]=pt,I[Z]=W,Et=Z):(I[Et]=St,I[yt]=W,Et=yt);else if(Z<N&&0>o(pt,W))I[Et]=pt,I[Z]=W,Et=Z;else break t}}return Y}function o(I,Y){var W=I.sortIndex-Y.sortIndex;return W!==0?W:I.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var d=[],p=[],g=1,_=null,v=3,S=!1,M=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var Y=n(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=I)r(p),Y.sortIndex=Y.expirationTime,t(d,Y);else break;Y=n(p)}}function F(I){if(b=!1,C(I),!M)if(n(d)!==null)M=!0,G||(G=!0,st());else{var Y=n(p);Y!==null&&ft(F,Y.startTime-I)}}var G=!1,z=-1,j=5,U=-1;function D(){return y?!0:!(a.unstable_now()-U<j)}function H(){if(y=!1,G){var I=a.unstable_now();U=I;var Y=!0;try{t:{M=!1,b&&(b=!1,L(z),z=-1),S=!0;var W=v;try{e:{for(C(I),_=n(d);_!==null&&!(_.expirationTime>I&&D());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,v=_.priorityLevel;var N=Et(_.expirationTime<=I);if(I=a.unstable_now(),typeof N=="function"){_.callback=N,C(I),Y=!0;break e}_===n(d)&&r(d),C(I)}else r(d);_=n(d)}if(_!==null)Y=!0;else{var tt=n(p);tt!==null&&ft(F,tt.startTime-I),Y=!1}}break t}finally{_=null,v=W,S=!1}Y=void 0}}finally{Y?st():G=!1}}}var st;if(typeof w=="function")st=function(){w(H)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ht=nt.port2;nt.port1.onmessage=H,st=function(){ht.postMessage(null)}}else st=function(){x(H,0)};function ft(I,Y){z=x(function(){I(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var W=v;v=Y;try{return I()}finally{v=W}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=v;v=I;try{return Y()}finally{v=W}},a.unstable_scheduleCallback=function(I,Y,W){var Et=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Et+W:Et):W=Et,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,I={id:g++,callback:Y,priorityLevel:I,startTime:W,expirationTime:N,sortIndex:-1},W>Et?(I.sortIndex=W,t(p,I),n(d)===null&&I===n(p)&&(b?(L(z),z=-1):b=!0,ft(F,W-Et))):(I.sortIndex=N,t(d,I),M||S||(M=!0,G||(G=!0,st()))),I},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(I){var Y=v;return function(){var W=v;v=Y;try{return I.apply(this,arguments)}finally{v=W}}}}(zh)),zh}var kv;function oM(){return kv||(kv=1,Bh.exports=sM()),Bh.exports}var Fh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function lM(){if(Xv)return Ln;Xv=1;var a=wp();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},Ln.flushSync=function(d){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,d)return d()}finally{f.T=p,r.p=g,r.d.f()}},Ln.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(d,p))},Ln.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},Ln.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(d)},Ln.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);r.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(d)},Ln.requestFormReset=function(d){r.d.r(d)},Ln.unstable_batchedUpdates=function(d,p){return d(p)},Ln.useFormState=function(d,p,g){return f.H.useFormState(d,p,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var Wv;function Ex(){if(Wv)return Fh.exports;Wv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Fh.exports=lM(),Fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function cM(){if(jv)return $o;jv=1;var a=oM(),t=wp(),n=Ex();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,l=i;;){var u=s.return;if(u===null)break;var m=u.alternate;if(m===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===s)return h(u),e;if(m===l)return h(u),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=m;else{for(var E=!1,A=u.child;A;){if(A===s){E=!0,s=u,l=m;break}if(A===l){E=!0,l=u,s=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===s){E=!0,s=m,l=u;break}if(A===l){E=!0,l=m,s=u;break}A=A.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case F:return"Suspense";case G:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case w:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:ht(e.type)||"Memo";case j:i=e._payload,e=e._init;try{return ht(e(i))}catch{}}return null}var ft=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},Et=[],N=-1;function tt(e){return{current:e}}function yt(e){0>N||(e.current=Et[N],Et[N]=null,N--)}function St(e,i){N++,Et[N]=e.current,e.current=i}var Z=tt(null),pt=tt(null),Tt=tt(null),Ct=tt(null);function wt(e,i){switch(St(Tt,i),St(pt,e),St(Z,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?hv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=hv(i),e=dv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(Z),St(Z,e)}function se(){yt(Z),yt(pt),yt(Tt)}function qt(e){e.memoizedState!==null&&St(Ct,e);var i=Z.current,s=dv(i,e.type);i!==s&&(St(pt,e),St(Z,s))}function Le(e){pt.current===e&&(yt(Z),yt(pt)),Ct.current===e&&(yt(Ct),jo._currentValue=W)}var Ne=Object.prototype.hasOwnProperty,he=a.unstable_scheduleCallback,V=a.unstable_cancelCallback,de=a.unstable_shouldYield,ye=a.unstable_requestPaint,le=a.unstable_now,kt=a.unstable_getCurrentPriorityLevel,Se=a.unstable_ImmediatePriority,Kt=a.unstable_UserBlockingPriority,re=a.unstable_NormalPriority,an=a.unstable_LowPriority,O=a.unstable_IdlePriority,T=a.log,at=a.unstable_setDisableYieldValue,mt=null,_t=null;function ut(e){if(typeof T=="function"&&at(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(mt,e)}catch{}}var It=Math.clz32?Math.clz32:Xt,Lt=Math.log,Vt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Lt(e)/Vt|0)|0}var Mt=256,Bt=4194304;function Yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var u=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~m,l!==0?u=Yt(l):(E&=A,E!==0?u=Yt(E):s||(s=A&~e,s!==0&&(u=Yt(s))))):(A=l&~m,A!==0?u=Yt(A):E!==0?u=Yt(E):s||(s=l&~e,s!==0&&(u=Yt(s)))),u===0?0:i!==0&&i!==u&&(i&m)===0&&(m=u&-u,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:u}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ae(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Nt(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function bt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function zt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,i,s,l,u,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(s=E&~s;0<s;){var dt=31-It(s),vt=1<<dt;A[dt]=0,B[dt]=-1;var rt=et[dt];if(rt!==null)for(et[dt]=null,dt=0;dt<rt.length;dt++){var ot=rt[dt];ot!==null&&(ot.lane&=-536870913)}s&=~vt}l!==0&&xt(e,l,0),m!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function xt(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-It(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function Ht(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-It(s),u=1<<l;u&i|e[l]&i&&(e[l]|=i),s&=~u}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Re(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Lv(e.type))}function Yn(e,i){var s=Y.p;try{return Y.p=e,i()}finally{Y.p=s}}var vn=Math.random().toString(36).slice(2),fn="__reactFiber$"+vn,Tn="__reactProps$"+vn,Hn="__reactContainer$"+vn,sr="__reactEvents$"+vn,Rl="__reactListeners$"+vn,Cl="__reactHandles$"+vn,or="__reactResources$"+vn,xa="__reactMarker$"+vn;function ya(e){delete e[fn],delete e[Tn],delete e[sr],delete e[Rl],delete e[Cl]}function Fi(e){var i=e[fn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Hn]||s[fn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=_v(e);e!==null;){if(s=e[fn])return s;e=_v(e)}return i}e=s,s=e.parentNode}return null}function Hi(e){if(e=e[fn]||e[Hn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function lr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function Sa(e){var i=e[or];return i||(i=e[or]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function on(e){e[xa]=!0}var wl=new Set,Dl={};function Gi(e,i){R(e,i),R(e+"Capture",i)}function R(e,i){for(Dl[e]=i,e=0;e<i.length;e++)wl.add(i[e])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},ct={};function Q(e){return Ne.call(ct,e)?!0:Ne.call(lt,e)?!1:K.test(e)?ct[e]=!0:(lt[e]=!0,!1)}function At(e,i,s){if(Q(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ut(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Pt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var Ft,te;function Qt(e){if(Ft===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ft=i&&i[1]||"",te=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+e+te}var Wt=!1;function pe(e,i){if(!e||Wt)return"";Wt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var rt=ot}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ot){rt=ot}e.call(vt.prototype)}}else{try{throw Error()}catch(ot){rt=ot}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&rt&&typeof ot.stack=="string")return[ot.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var B=E.split(`
`),et=A.split(`
`);for(u=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(l===B.length||u===et.length)for(l=B.length-1,u=et.length-1;1<=l&&0<=u&&B[l]!==et[u];)u--;for(;1<=l&&0<=u;l--,u--)if(B[l]!==et[u]){if(l!==1||u!==1)do if(l--,u--,0>u||B[l]!==et[u]){var dt=`
`+B[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=u);break}}}finally{Wt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Qt(s):""}function De(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Qt("Activity");default:return""}}function We(e){try{var i="";do i+=De(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $t(e){var i=Me(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Je(e){e._valueTracker||(e._valueTracker=$t(e))}function Ae(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Me(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ea=/[\n"\\]/g;function je(e){return e.replace(Ea,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Vi(e,i,s,l,u,m,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ee(i)):e.value!==""+Ee(i)&&(e.value=""+Ee(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,E,Ee(i)):s!=null?Dn(e,E,Ee(s)):l!=null&&e.removeAttribute("value"),u==null&&m!=null&&(e.defaultChecked=!!m),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ee(A):e.removeAttribute("name")}function ke(e,i,s,l,u,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+Ee(s):"",i=i!=null?""+Ee(i):s,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Dn(e,i,s){i==="number"&&wn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function hn(e,i,s,l){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Ee(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function xn(e,i,s){if(i!=null&&(i=""+Ee(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Ee(s):""}function bn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ft(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Ee(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Ti(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ki=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ki.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function dm(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&hm(e,u,l)}else for(var m in i)i.hasOwnProperty(m)&&hm(e,m,i[m])}function Lu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return nS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Nu=null;function Ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,qr=null;function pm(e){var i=Hi(e);if(i&&(e=i.stateNode)){var s=e[Tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Vi(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+je(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var u=l[Tn]||null;if(!u)throw Error(r(90));Vi(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Ae(l)}break t;case"textarea":xn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&hn(e,!!s.multiple,i,!1)}}}var Pu=!1;function mm(e,i,s){if(Pu)return e(i,s);Pu=!0;try{var l=e(i);return l}finally{if(Pu=!1,(Yr!==null||qr!==null)&&(gc(),Yr&&(i=Yr,e=qr,qr=Yr=null,pm(i),e)))for(i=0;i<e.length;i++)pm(e[i])}}function ao(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Tn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(Xi)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Iu=!1}var Ma=null,Bu=null,Ll=null;function gm(){if(Ll)return Ll;var e,i=Bu,s=i.length,l,u="value"in Ma?Ma.value:Ma.textContent,m=u.length;for(e=0;e<s&&i[e]===u[e];e++);var E=s-e;for(l=1;l<=E&&i[s-l]===u[m-l];l++);return Ll=u.slice(e,1<l?1-l:void 0)}function Nl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function _m(){return!1}function Gn(e){function i(s,l,u,m,E){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(s=e[A],this[A]=s?s(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ol:_m,this.isPropagationStopped=_m,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),i}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Gn(cr),so=g({},cr,{view:0,detail:0}),iS=Gn(so),zu,Fu,oo,Il=g({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(zu=e.screenX-oo.screenX,Fu=e.screenY-oo.screenY):Fu=zu=0,oo=e),zu)},movementY:function(e){return"movementY"in e?e.movementY:Fu}}),vm=Gn(Il),aS=g({},Il,{dataTransfer:0}),rS=Gn(aS),sS=g({},so,{relatedTarget:0}),Hu=Gn(sS),oS=g({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),lS=Gn(oS),cS=g({},cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uS=Gn(cS),fS=g({},cr,{data:0}),xm=Gn(fS),hS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=pS[e])?!!i[e]:!1}function Gu(){return mS}var gS=g({},so,{key:function(e){if(e.key){var i=hS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_S=Gn(gS),vS=g({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Gn(vS),xS=g({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),yS=Gn(xS),SS=g({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=Gn(SS),MS=g({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=Gn(MS),bS=g({},cr,{newState:0,oldState:0}),AS=Gn(bS),RS=[9,13,27,32],Vu=Xi&&"CompositionEvent"in window,lo=null;Xi&&"documentMode"in document&&(lo=document.documentMode);var CS=Xi&&"TextEvent"in window&&!lo,Sm=Xi&&(!Vu||lo&&8<lo&&11>=lo),Em=" ",Mm=!1;function Tm(e,i){switch(e){case"keyup":return RS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function wS(e,i){switch(e){case"compositionend":return bm(i);case"keypress":return i.which!==32?null:(Mm=!0,Em);case"textInput":return e=i.data,e===Em&&Mm?null:e;default:return null}}function DS(e,i){if(Zr)return e==="compositionend"||!Vu&&Tm(e,i)?(e=gm(),Ll=Bu=Ma=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sm&&i.locale!=="ko"?null:i.data;default:return null}}var US={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!US[e.type]:i==="textarea"}function Rm(e,i,s,l){Yr?qr?qr.push(l):qr=[l]:Yr=l,i=Ec(i,"onChange"),0<i.length&&(s=new Pl("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var co=null,uo=null;function LS(e){ov(e,0)}function Bl(e){var i=lr(e);if(Ae(i))return e}function Cm(e,i){if(e==="change")return i}var wm=!1;if(Xi){var ku;if(Xi){var Xu="oninput"in document;if(!Xu){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),Xu=typeof Dm.oninput=="function"}ku=Xu}else ku=!1;wm=ku&&(!document.documentMode||9<document.documentMode)}function Um(){co&&(co.detachEvent("onpropertychange",Lm),uo=co=null)}function Lm(e){if(e.propertyName==="value"&&Bl(uo)){var i=[];Rm(i,uo,e,Ou(e)),mm(LS,i)}}function NS(e,i,s){e==="focusin"?(Um(),co=i,uo=s,co.attachEvent("onpropertychange",Lm)):e==="focusout"&&Um()}function OS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bl(uo)}function PS(e,i){if(e==="click")return Bl(i)}function IS(e,i){if(e==="input"||e==="change")return Bl(i)}function BS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var qn=typeof Object.is=="function"?Object.is:BS;function fo(e,i){if(qn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Ne.call(i,u)||!qn(e[u],i[u]))return!1}return!0}function Nm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Om(e,i){var s=Nm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Nm(s)}}function Pm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Pm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Im(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=wn(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=wn(e.document)}return i}function Wu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var zS=Xi&&"documentMode"in document&&11>=document.documentMode,Kr=null,ju=null,ho=null,Yu=!1;function Bm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yu||Kr==null||Kr!==wn(l)||(l=Kr,"selectionStart"in l&&Wu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=Ec(ju,"onSelect"),0<l.length&&(i=new Pl("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=Kr)))}function ur(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Qr={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},qu={},zm={};Xi&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function fr(e){if(qu[e])return qu[e];if(!Qr[e])return e;var i=Qr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in zm)return qu[e]=i[s];return e}var Fm=fr("animationend"),Hm=fr("animationiteration"),Gm=fr("animationstart"),FS=fr("transitionrun"),HS=fr("transitionstart"),GS=fr("transitioncancel"),Vm=fr("transitionend"),km=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function pi(e,i){km.set(e,i),Gi(i,[e])}var Xm=new WeakMap;function ii(e,i){if(typeof e=="object"&&e!==null){var s=Xm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:We(i)},Xm.set(e,i),i)}return{value:e,source:i,stack:We(i)}}var ai=[],$r=0,Ku=0;function zl(){for(var e=$r,i=Ku=$r=0;i<e;){var s=ai[i];ai[i++]=null;var l=ai[i];ai[i++]=null;var u=ai[i];ai[i++]=null;var m=ai[i];if(ai[i++]=null,l!==null&&u!==null){var E=l.pending;E===null?u.next=u:(u.next=E.next,E.next=u),l.pending=u}m!==0&&Wm(s,u,m)}}function Fl(e,i,s,l){ai[$r++]=e,ai[$r++]=i,ai[$r++]=s,ai[$r++]=l,Ku|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qu(e,i,s,l){return Fl(e,i,s,l),Hl(e)}function Jr(e,i){return Fl(e,null,null,i),Hl(e)}function Wm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var u=!1,m=e.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(u=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,u&&i!==null&&(u=31-It(s),e=m.hiddenUpdates,l=e[u],l===null?e[u]=[i]:l.push(i),i.lane=s|536870912),m):null}function Hl(e){if(50<zo)throw zo=0,ah=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ts={};function VS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,i,s,l){return new VS(e,i,s,l)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,i){var s=e.alternate;return s===null?(s=Zn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function jm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Gl(e,i,s,l,u,m){var E=0;if(l=e,typeof e=="function")$u(e)&&(E=1);else if(typeof e=="string")E=XE(e,s,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Zn(31,s,i,u),e.elementType=U,e.lanes=m,e;case M:return hr(s.children,u,m,i);case b:E=8,u|=24;break;case y:return e=Zn(12,s,i,u|2),e.elementType=y,e.lanes=m,e;case F:return e=Zn(13,s,i,u),e.elementType=F,e.lanes=m,e;case G:return e=Zn(19,s,i,u),e.elementType=G,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case w:E=10;break t;case L:E=9;break t;case C:E=11;break t;case z:E=14;break t;case j:E=16,l=null;break t}E=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return i=Zn(E,s,i,u),i.elementType=e,i.type=l,i.lanes=m,i}function hr(e,i,s,l){return e=Zn(7,e,l,i),e.lanes=s,e}function Ju(e,i,s){return e=Zn(6,e,null,i),e.lanes=s,e}function tf(e,i,s){return i=Zn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var es=[],ns=0,Vl=null,kl=0,ri=[],si=0,dr=null,ji=1,Yi="";function pr(e,i){es[ns++]=kl,es[ns++]=Vl,Vl=e,kl=i}function Ym(e,i,s){ri[si++]=ji,ri[si++]=Yi,ri[si++]=dr,dr=e;var l=ji;e=Yi;var u=32-It(l)-1;l&=~(1<<u),s+=1;var m=32-It(i)+u;if(30<m){var E=u-u%5;m=(l&(1<<E)-1).toString(32),l>>=E,u-=E,ji=1<<32-It(i)+u|s<<u|l,Yi=m+e}else ji=1<<m|s<<u|l,Yi=e}function ef(e){e.return!==null&&(pr(e,1),Ym(e,1,0))}function nf(e){for(;e===Vl;)Vl=es[--ns],es[ns]=null,kl=es[--ns],es[ns]=null;for(;e===dr;)dr=ri[--si],ri[si]=null,Yi=ri[--si],ri[si]=null,ji=ri[--si],ri[si]=null}var In=null,tn=null,Ue=!1,mr=null,bi=!1,af=Error(r(519));function gr(e){var i=Error(r(418,""));throw go(ii(i,e)),af}function qm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[fn]=e,i[Tn]=l,s){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(s=0;s<Ho.length;s++)xe(Ho[s],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),ke(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Je(i);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),bn(i,l.value,l.defaultValue,l.children),Je(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||fv(i.textContent,s)?(l.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),l.onScroll!=null&&xe("scroll",i),l.onScrollEnd!=null&&xe("scrollend",i),l.onClick!=null&&(i.onclick=Mc),i=!0):i=!1,i||gr(e)}function Zm(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:In=In.return}}function po(e){if(e!==In)return!1;if(!Ue)return Zm(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||yh(e.type,e.memoizedProps)),s=!s),s&&tn&&gr(e),Zm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){tn=gi(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}tn=null}}else i===27?(i=tn,Fa(e.type)?(e=Th,Th=null,tn=e):tn=i):tn=In?gi(e.stateNode.nextSibling):null;return!0}function mo(){tn=In=null,Ue=!1}function Km(){var e=mr;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),mr=null),e}function go(e){mr===null?mr=[e]:mr.push(e)}var rf=tt(null),_r=null,qi=null;function Ta(e,i,s){St(rf,i._currentValue),i._currentValue=s}function Zi(e){e._currentValue=rf.current,yt(rf)}function sf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function of(e,i,s,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var m=u.dependencies;if(m!==null){var E=u.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=u;for(var B=0;B<i.length;B++)if(A.context===i[B]){m.lanes|=s,A=m.alternate,A!==null&&(A.lanes|=s),sf(m.return,s,e),l||(E=null);break t}m=A.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),sf(E,s,e),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===e){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function _o(e,i,s,l){e=null;for(var u=i,m=!1;u!==null;){if(!m){if((u.flags&524288)!==0)m=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var A=u.type;qn(u.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(u===Ct.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(jo):e=[jo])}u=u.return}e!==null&&of(i,e,s,l),i.flags|=262144}function Xl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vr(e){_r=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Qm(_r,e)}function Wl(e,i){return _r===null&&vr(e),Qm(e,i)}function Qm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},qi===null){if(e===null)throw Error(r(308));qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else qi=qi.next=i;return s}var kS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},XS=a.unstable_scheduleCallback,WS=a.unstable_NormalPriority,dn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new kS,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&XS(WS,function(){e.controller.abort()})}var xo=null,cf=0,is=0,as=null;function jS(e,i){if(xo===null){var s=xo=[];cf=0,is=fh(),as={status:"pending",value:void 0,then:function(l){s.push(l)}}}return cf++,i.then($m,$m),i}function $m(){if(--cf===0&&xo!==null){as!==null&&(as.status="fulfilled");var e=xo;xo=null,is=0,as=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function YS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var Jm=I.S;I.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&jS(e,i),Jm!==null&&Jm(e,i)};var xr=tt(null);function uf(){var e=xr.current;return e!==null?e:Ye.pooledCache}function jl(e,i){i===null?St(xr,xr.current):St(xr,i.pool)}function tg(){var e=uf();return e===null?null:{parent:dn._currentValue,pool:e}}var yo=Error(r(460)),eg=Error(r(474)),Yl=Error(r(542)),ff={then:function(){}};function ng(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ql(){}function ig(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ql,ql),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,rg(e),e;default:if(typeof i.status=="string")i.then(ql,ql);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,rg(e),e}throw So=i,yo}}var So=null;function ag(){if(So===null)throw Error(r(459));var e=So;return So=null,e}function rg(e){if(e===yo||e===Yl)throw Error(r(483))}var ba=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ie&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Hl(e),Wm(e,null,s),i}return Fl(e,l,i,s),Hl(e)}function Eo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Ht(e,s)}}function pf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?u=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?u=m=i:m=m.next=i}else u=m=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var mf=!1;function Mo(){if(mf){var e=as;if(e!==null)throw e}}function To(e,i,s,l){mf=!1;var u=e.updateQueue;ba=!1;var m=u.firstBaseUpdate,E=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,et=B.next;B.next=null,E===null?m=et:E.next=et,E=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==E&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=B))}if(m!==null){var vt=u.baseState;E=0,dt=et=B=null,A=m;do{var rt=A.lane&-536870913,ot=rt!==A.lane;if(ot?(Te&rt)===rt:(l&rt)===rt){rt!==0&&rt===is&&(mf=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ne=e,Jt=A;rt=i;var He=s;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){vt=ne.call(He,vt,rt);break t}vt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,rt=typeof ne=="function"?ne.call(He,vt,rt):ne,rt==null)break t;vt=g({},vt,rt);break t;case 2:ba=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[rt]:ot.push(rt))}else ot={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=ot,B=vt):dt=dt.next=ot,E|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);dt===null&&(B=vt),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,m===null&&(u.shared.lanes=0),Pa|=E,e.lanes=E,e.memoizedState=vt}}function sg(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function og(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)sg(s[e],i)}var rs=tt(null),Zl=tt(0);function lg(e,i){e=na,St(Zl,e),St(rs,i),na=e|i.baseLanes}function gf(){St(Zl,na),St(rs,rs.current)}function _f(){na=Zl.current,yt(rs),yt(Zl)}var Ca=0,me=null,ze=null,ln=null,Kl=!1,ss=!1,yr=!1,Ql=0,bo=0,os=null,qS=0;function rn(){throw Error(r(321))}function vf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!qn(e[s],i[s]))return!1;return!0}function xf(e,i,s,l,u,m){return Ca=m,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Wg:jg,yr=!1,m=s(l,u),yr=!1,ss&&(m=ug(i,s,l,u)),cg(e),m}function cg(e){I.H=ic;var i=ze!==null&&ze.next!==null;if(Ca=0,ln=ze=me=null,Kl=!1,bo=0,os=null,i)throw Error(r(300));e===null||yn||(e=e.dependencies,e!==null&&Xl(e)&&(yn=!0))}function ug(e,i,s,l){me=e;var u=0;do{if(ss&&(os=null),bo=0,ss=!1,25<=u)throw Error(r(301));if(u+=1,ln=ze=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=eE,m=i(s,l)}while(ss);return m}function ZS(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?Ao(i):i,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(me.flags|=1024),i}function yf(){var e=Ql!==0;return Ql=0,e}function Sf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Ef(e){if(Kl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Kl=!1}Ca=0,ln=ze=me=null,ss=!1,bo=Ql=0,os=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?me.memoizedState=ln=e:ln=ln.next=e,ln}function cn(){if(ze===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var i=ln===null?me.memoizedState:ln.next;if(i!==null)ln=i,ze=e;else{if(e===null)throw me.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?me.memoizedState=ln=e:ln=ln.next=e}return ln}function Mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var i=bo;return bo+=1,os===null&&(os=[]),e=ig(os,e,i),i=me,(ln===null?i.memoizedState:ln.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Wg:jg),e}function $l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===w)return Un(e)}throw Error(r(438,String(e)))}function Tf(e){var i=null,s=me.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Mf(),me.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=D;return i.index++,s}function Ki(e,i){return typeof i=="function"?i(e):i}function Jl(e){var i=cn();return bf(i,ze,e)}function bf(e,i,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=e.baseQueue,m=l.pending;if(m!==null){if(u!==null){var E=u.next;u.next=m.next,m.next=E}i.baseQueue=u=m,l.pending=null}if(m=e.baseState,u===null)e.memoizedState=m;else{i=u.next;var A=E=null,B=null,et=i,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(Te&vt)===vt:(Ca&vt)===vt){var rt=et.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===is&&(dt=!0);else if((Ca&rt)===rt){et=et.next,rt===is&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=vt,E=m):B=B.next=vt,me.lanes|=rt,Pa|=rt;vt=et.action,yr&&s(m,vt),m=et.hasEagerState?et.eagerState:s(m,vt)}else rt={lane:vt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(A=B=rt,E=m):B=B.next=rt,me.lanes|=vt,Pa|=vt;et=et.next}while(et!==null&&et!==i);if(B===null?E=m:B.next=A,!qn(m,e.memoizedState)&&(yn=!0,dt&&(s=as,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=B,l.lastRenderedState=m}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Af(e){var i=cn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,m=i.memoizedState;if(u!==null){s.pending=null;var E=u=u.next;do m=e(m,E.action),E=E.next;while(E!==u);qn(m,i.memoizedState)||(yn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function fg(e,i,s){var l=me,u=cn(),m=Ue;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!qn((ze||u).memoizedState,s);E&&(u.memoizedState=s,yn=!0),u=u.queue;var A=pg.bind(null,l,u,e);if(Ro(2048,8,A,[e]),u.getSnapshot!==i||E||ln!==null&&ln.memoizedState.tag&1){if(l.flags|=2048,ls(9,tc(),dg.bind(null,l,u,s,i),null),Ye===null)throw Error(r(349));m||(Ca&124)!==0||hg(l,i,s)}return s}function hg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=me.updateQueue,i===null?(i=Mf(),me.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function dg(e,i,s,l){i.value=s,i.getSnapshot=l,mg(i)&&gg(e)}function pg(e,i,s){return s(function(){mg(i)&&gg(e)})}function mg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!qn(e,s)}catch{return!0}}function gg(e){var i=Jr(e,2);i!==null&&ti(i,e,2)}function Rf(e){var i=Vn();if(typeof e=="function"){var s=e;if(e=s(),yr){ut(!0);try{s()}finally{ut(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},i}function _g(e,i,s,l){return e.baseState=s,bf(e,ze,typeof l=="function"?l:Ki)}function KS(e,i,s,l,u){if(nc(e))throw Error(r(485));if(e=i.action,e!==null){var m={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,vg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function vg(e,i){var s=i.action,l=i.payload,u=e.state;if(i.isTransition){var m=I.T,E={};I.T=E;try{var A=s(u,l),B=I.S;B!==null&&B(E,A),xg(e,i,A)}catch(et){Cf(e,i,et)}finally{I.T=m}}else try{m=s(u,l),xg(e,i,m)}catch(et){Cf(e,i,et)}}function xg(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){yg(e,i,l)},function(l){return Cf(e,i,l)}):yg(e,i,s)}function yg(e,i,s){i.status="fulfilled",i.value=s,Sg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,vg(e,s)))}function Cf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Sg(i),i=i.next;while(i!==l)}e.action=null}function Sg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Eg(e,i){return i}function Mg(e,i){if(Ue){var s=Ye.formState;if(s!==null){t:{var l=me;if(Ue){if(tn){e:{for(var u=tn,m=bi;u.nodeType!==8;){if(!m){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}m=u.data,u=m==="F!"||m==="F"?u:null}if(u){tn=gi(u.nextSibling),l=u.data==="F!";break t}}gr(l)}l=!1}l&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Eg,lastRenderedState:i},s.queue=l,s=Vg.bind(null,me,l),l.dispatch=s,l=Rf(!1),m=Nf.bind(null,me,!1,l.queue),l=Vn(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,s=KS.bind(null,me,u,m,s),u.dispatch=s,l.memoizedState=e,[i,s,!1]}function Tg(e){var i=cn();return bg(i,ze,e)}function bg(e,i,s){if(i=bf(e,i,Eg)[0],e=Jl(Ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ao(i)}catch(E){throw E===yo?Yl:E}else l=i;i=cn();var u=i.queue,m=u.dispatch;return s!==i.memoizedState&&(me.flags|=2048,ls(9,tc(),QS.bind(null,u,s),null)),[l,m,e]}function QS(e,i){e.action=i}function Ag(e){var i=cn(),s=ze;if(s!==null)return bg(i,s,e);cn(),i=i.memoizedState,s=cn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function ls(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=Mf(),me.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function tc(){return{destroy:void 0,resource:void 0}}function Rg(){return cn().memoizedState}function ec(e,i,s,l){var u=Vn();l=l===void 0?null:l,me.flags|=e,u.memoizedState=ls(1|i,tc(),s,l)}function Ro(e,i,s,l){var u=cn();l=l===void 0?null:l;var m=u.memoizedState.inst;ze!==null&&l!==null&&vf(l,ze.memoizedState.deps)?u.memoizedState=ls(i,m,s,l):(me.flags|=e,u.memoizedState=ls(1|i,m,s,l))}function Cg(e,i){ec(8390656,8,e,i)}function wg(e,i){Ro(2048,8,e,i)}function Dg(e,i){return Ro(4,2,e,i)}function Ug(e,i){return Ro(4,4,e,i)}function Lg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Ng(e,i,s){s=s!=null?s.concat([e]):null,Ro(4,4,Lg.bind(null,i,e),s)}function wf(){}function Og(e,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&vf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Pg(e,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&vf(i,l[1]))return l[0];if(l=e(),yr){ut(!0);try{e()}finally{ut(!1)}}return s.memoizedState=[l,i],l}function Df(e,i,s){return s===void 0||(Ca&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=z_(),me.lanes|=e,Pa|=e,s)}function Ig(e,i,s,l){return qn(s,i)?s:rs.current!==null?(e=Df(e,s,l),qn(e,i)||(yn=!0),e):(Ca&42)===0?(yn=!0,e.memoizedState=s):(e=z_(),me.lanes|=e,Pa|=e,i)}function Bg(e,i,s,l,u){var m=Y.p;Y.p=m!==0&&8>m?m:8;var E=I.T,A={};I.T=A,Nf(e,!1,i,s);try{var B=u(),et=I.S;if(et!==null&&et(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=YS(B,l);Co(e,i,dt,Jn(e))}else Co(e,i,l,Jn(e))}catch(vt){Co(e,i,{then:function(){},status:"rejected",reason:vt},Jn())}finally{Y.p=m,I.T=E}}function $S(){}function Uf(e,i,s,l){if(e.tag!==5)throw Error(r(476));var u=zg(e).queue;Bg(e,u,i,W,s===null?$S:function(){return Fg(e),s(l)})}function zg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:W},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Fg(e){var i=zg(e).next.queue;Co(e,i,{},Jn())}function Lf(){return Un(jo)}function Hg(){return cn().memoizedState}function Gg(){return cn().memoizedState}function JS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=Jn();e=Aa(s);var l=Ra(i,e,s);l!==null&&(ti(l,i,s),Eo(l,i,s)),i={cache:lf()},e.payload=i;return}i=i.return}}function tE(e,i,s){var l=Jn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},nc(e)?kg(i,s):(s=Qu(e,i,s,l),s!==null&&(ti(s,e,l),Xg(s,i,l)))}function Vg(e,i,s){var l=Jn();Co(e,i,s,l)}function Co(e,i,s,l){var u={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(nc(e))kg(i,u);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,A=m(E,s);if(u.hasEagerState=!0,u.eagerState=A,qn(A,E))return Fl(e,i,u,0),Ye===null&&zl(),!1}catch{}finally{}if(s=Qu(e,i,u,l),s!==null)return ti(s,e,l),Xg(s,i,l),!0}return!1}function Nf(e,i,s,l){if(l={lane:2,revertLane:fh(),action:l,hasEagerState:!1,eagerState:null,next:null},nc(e)){if(i)throw Error(r(479))}else i=Qu(e,s,l,2),i!==null&&ti(i,e,2)}function nc(e){var i=e.alternate;return e===me||i!==null&&i===me}function kg(e,i){ss=Kl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Xg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Ht(e,s)}}var ic={readContext:Un,use:$l,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},Wg={readContext:Un,use:$l,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:Cg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ec(4194308,4,Lg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ec(4194308,4,e,i)},useInsertionEffect:function(e,i){ec(4,2,e,i)},useMemo:function(e,i){var s=Vn();i=i===void 0?null:i;var l=e();if(yr){ut(!0);try{e()}finally{ut(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Vn();if(s!==void 0){var u=s(i);if(yr){ut(!0);try{s(i)}finally{ut(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=tE.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=Rf(e);var i=e.queue,s=Vg.bind(null,me,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:wf,useDeferredValue:function(e,i){var s=Vn();return Df(s,e,i)},useTransition:function(){var e=Rf(!1);return e=Bg.bind(null,me,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=me,u=Vn();if(Ue){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Ye===null)throw Error(r(349));(Te&124)!==0||hg(l,i,s)}u.memoizedState=s;var m={value:s,getSnapshot:i};return u.queue=m,Cg(pg.bind(null,l,m,e),[e]),l.flags|=2048,ls(9,tc(),dg.bind(null,l,m,s,i),null),s},useId:function(){var e=Vn(),i=Ye.identifierPrefix;if(Ue){var s=Yi,l=ji;s=(l&~(1<<32-It(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Ql++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=qS++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Lf,useFormState:Mg,useActionState:Mg,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Nf.bind(null,me,!0,s),s.dispatch=i,[e,i]},useMemoCache:Tf,useCacheRefresh:function(){return Vn().memoizedState=JS.bind(null,me)}},jg={readContext:Un,use:$l,useCallback:Og,useContext:Un,useEffect:wg,useImperativeHandle:Ng,useInsertionEffect:Dg,useLayoutEffect:Ug,useMemo:Pg,useReducer:Jl,useRef:Rg,useState:function(){return Jl(Ki)},useDebugValue:wf,useDeferredValue:function(e,i){var s=cn();return Ig(s,ze.memoizedState,e,i)},useTransition:function(){var e=Jl(Ki)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:Lf,useFormState:Tg,useActionState:Tg,useOptimistic:function(e,i){var s=cn();return _g(s,ze,e,i)},useMemoCache:Tf,useCacheRefresh:Gg},eE={readContext:Un,use:$l,useCallback:Og,useContext:Un,useEffect:wg,useImperativeHandle:Ng,useInsertionEffect:Dg,useLayoutEffect:Ug,useMemo:Pg,useReducer:Af,useRef:Rg,useState:function(){return Af(Ki)},useDebugValue:wf,useDeferredValue:function(e,i){var s=cn();return ze===null?Df(s,e,i):Ig(s,ze.memoizedState,e,i)},useTransition:function(){var e=Af(Ki)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:fg,useId:Hg,useHostTransitionStatus:Lf,useFormState:Ag,useActionState:Ag,useOptimistic:function(e,i){var s=cn();return ze!==null?_g(s,ze,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:Gg},cs=null,wo=0;function ac(e){var i=wo;return wo+=1,cs===null&&(cs=[]),ig(cs,e,i)}function Do(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function rc(e,i){throw i.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Yg(e){var i=e._init;return i(e._payload)}function qg(e){function i(q,k){if(e){var J=q.deletions;J===null?(q.deletions=[k],q.flags|=16):J.push(k)}}function s(q,k){if(!e)return null;for(;k!==null;)i(q,k),k=k.sibling;return null}function l(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=Wi(q,k),q.index=0,q.sibling=null,q}function m(q,k,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<k?(q.flags|=67108866,k):J):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function E(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,k,J,gt){return k===null||k.tag!==6?(k=Ju(J,q.mode,gt),k.return=q,k):(k=u(k,J),k.return=q,k)}function B(q,k,J,gt){var Gt=J.type;return Gt===M?dt(q,k,J.props.children,gt,J.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===j&&Yg(Gt)===k.type)?(k=u(k,J.props),Do(k,J),k.return=q,k):(k=Gl(J.type,J.key,J.props,null,q.mode,gt),Do(k,J),k.return=q,k)}function et(q,k,J,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=tf(J,q.mode,gt),k.return=q,k):(k=u(k,J.children||[]),k.return=q,k)}function dt(q,k,J,gt,Gt){return k===null||k.tag!==7?(k=hr(J,q.mode,gt,Gt),k.return=q,k):(k=u(k,J),k.return=q,k)}function vt(q,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ju(""+k,q.mode,J),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return J=Gl(k.type,k.key,k.props,null,q.mode,J),Do(J,k),J.return=q,J;case S:return k=tf(k,q.mode,J),k.return=q,k;case j:var gt=k._init;return k=gt(k._payload),vt(q,k,J)}if(ft(k)||st(k))return k=hr(k,q.mode,J,null),k.return=q,k;if(typeof k.then=="function")return vt(q,ac(k),J);if(k.$$typeof===w)return vt(q,Wl(q,k),J);rc(q,k)}return null}function rt(q,k,J,gt){var Gt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Gt!==null?null:A(q,k,""+J,gt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Gt?B(q,k,J,gt):null;case S:return J.key===Gt?et(q,k,J,gt):null;case j:return Gt=J._init,J=Gt(J._payload),rt(q,k,J,gt)}if(ft(J)||st(J))return Gt!==null?null:dt(q,k,J,gt,null);if(typeof J.then=="function")return rt(q,k,ac(J),gt);if(J.$$typeof===w)return rt(q,k,Wl(q,J),gt);rc(q,J)}return null}function ot(q,k,J,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return q=q.get(J)||null,A(k,q,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case v:return q=q.get(gt.key===null?J:gt.key)||null,B(k,q,gt,Gt);case S:return q=q.get(gt.key===null?J:gt.key)||null,et(k,q,gt,Gt);case j:var ge=gt._init;return gt=ge(gt._payload),ot(q,k,J,gt,Gt)}if(ft(gt)||st(gt))return q=q.get(J)||null,dt(k,q,gt,Gt,null);if(typeof gt.then=="function")return ot(q,k,J,ac(gt),Gt);if(gt.$$typeof===w)return ot(q,k,J,Wl(k,gt),Gt);rc(k,gt)}return null}function ne(q,k,J,gt){for(var Gt=null,ge=null,jt=k,ee=k=0,En=null;jt!==null&&ee<J.length;ee++){jt.index>ee?(En=jt,jt=null):En=jt.sibling;var Ce=rt(q,jt,J[ee],gt);if(Ce===null){jt===null&&(jt=En);break}e&&jt&&Ce.alternate===null&&i(q,jt),k=m(Ce,k,ee),ge===null?Gt=Ce:ge.sibling=Ce,ge=Ce,jt=En}if(ee===J.length)return s(q,jt),Ue&&pr(q,ee),Gt;if(jt===null){for(;ee<J.length;ee++)jt=vt(q,J[ee],gt),jt!==null&&(k=m(jt,k,ee),ge===null?Gt=jt:ge.sibling=jt,ge=jt);return Ue&&pr(q,ee),Gt}for(jt=l(jt);ee<J.length;ee++)En=ot(jt,q,ee,J[ee],gt),En!==null&&(e&&En.alternate!==null&&jt.delete(En.key===null?ee:En.key),k=m(En,k,ee),ge===null?Gt=En:ge.sibling=En,ge=En);return e&&jt.forEach(function(Xa){return i(q,Xa)}),Ue&&pr(q,ee),Gt}function Jt(q,k,J,gt){if(J==null)throw Error(r(151));for(var Gt=null,ge=null,jt=k,ee=k=0,En=null,Ce=J.next();jt!==null&&!Ce.done;ee++,Ce=J.next()){jt.index>ee?(En=jt,jt=null):En=jt.sibling;var Xa=rt(q,jt,Ce.value,gt);if(Xa===null){jt===null&&(jt=En);break}e&&jt&&Xa.alternate===null&&i(q,jt),k=m(Xa,k,ee),ge===null?Gt=Xa:ge.sibling=Xa,ge=Xa,jt=En}if(Ce.done)return s(q,jt),Ue&&pr(q,ee),Gt;if(jt===null){for(;!Ce.done;ee++,Ce=J.next())Ce=vt(q,Ce.value,gt),Ce!==null&&(k=m(Ce,k,ee),ge===null?Gt=Ce:ge.sibling=Ce,ge=Ce);return Ue&&pr(q,ee),Gt}for(jt=l(jt);!Ce.done;ee++,Ce=J.next())Ce=ot(jt,q,ee,Ce.value,gt),Ce!==null&&(e&&Ce.alternate!==null&&jt.delete(Ce.key===null?ee:Ce.key),k=m(Ce,k,ee),ge===null?Gt=Ce:ge.sibling=Ce,ge=Ce);return e&&jt.forEach(function(nM){return i(q,nM)}),Ue&&pr(q,ee),Gt}function He(q,k,J,gt){if(typeof J=="object"&&J!==null&&J.type===M&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:t:{for(var Gt=J.key;k!==null;){if(k.key===Gt){if(Gt=J.type,Gt===M){if(k.tag===7){s(q,k.sibling),gt=u(k,J.props.children),gt.return=q,q=gt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===j&&Yg(Gt)===k.type){s(q,k.sibling),gt=u(k,J.props),Do(gt,J),gt.return=q,q=gt;break t}s(q,k);break}else i(q,k);k=k.sibling}J.type===M?(gt=hr(J.props.children,q.mode,gt,J.key),gt.return=q,q=gt):(gt=Gl(J.type,J.key,J.props,null,q.mode,gt),Do(gt,J),gt.return=q,q=gt)}return E(q);case S:t:{for(Gt=J.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){s(q,k.sibling),gt=u(k,J.children||[]),gt.return=q,q=gt;break t}else{s(q,k);break}else i(q,k);k=k.sibling}gt=tf(J,q.mode,gt),gt.return=q,q=gt}return E(q);case j:return Gt=J._init,J=Gt(J._payload),He(q,k,J,gt)}if(ft(J))return ne(q,k,J,gt);if(st(J)){if(Gt=st(J),typeof Gt!="function")throw Error(r(150));return J=Gt.call(J),Jt(q,k,J,gt)}if(typeof J.then=="function")return He(q,k,ac(J),gt);if(J.$$typeof===w)return He(q,k,Wl(q,J),gt);rc(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(s(q,k.sibling),gt=u(k,J),gt.return=q,q=gt):(s(q,k),gt=Ju(J,q.mode,gt),gt.return=q,q=gt),E(q)):s(q,k)}return function(q,k,J,gt){try{wo=0;var Gt=He(q,k,J,gt);return cs=null,Gt}catch(jt){if(jt===yo||jt===Yl)throw jt;var ge=Zn(29,jt,null,q.mode);return ge.lanes=gt,ge.return=q,ge}finally{}}}var us=qg(!0),Zg=qg(!1),oi=tt(null),Ai=null;function wa(e){var i=e.alternate;St(pn,pn.current&1),St(oi,e),Ai===null&&(i===null||rs.current!==null||i.memoizedState!==null)&&(Ai=e)}function Kg(e){if(e.tag===22){if(St(pn,pn.current),St(oi,e),Ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ai=e)}}else Da()}function Da(){St(pn,pn.current),St(oi,oi.current)}function Qi(e){yt(oi),Ai===e&&(Ai=null),yt(pn)}var pn=tt(0);function sc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Mh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Of(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Pf={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=Jn(),u=Aa(l);u.payload=i,s!=null&&(u.callback=s),i=Ra(e,u,l),i!==null&&(ti(i,e,l),Eo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=Jn(),u=Aa(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Ra(e,u,l),i!==null&&(ti(i,e,l),Eo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=Jn(),l=Aa(s);l.tag=2,i!=null&&(l.callback=i),i=Ra(e,l,s),i!==null&&(ti(i,e,s),Eo(i,e,s))}};function Qg(e,i,s,l,u,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!fo(s,l)||!fo(u,m):!0}function $g(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Pf.enqueueReplaceState(i,i.state,null)}function Sr(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}var oc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Jg(e){oc(e)}function t_(e){console.error(e)}function e_(e){oc(e)}function lc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function n_(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function If(e,i,s){return s=Aa(s),s.tag=3,s.payload={element:null},s.callback=function(){lc(e,i)},s}function i_(e){return e=Aa(e),e.tag=3,e}function a_(e,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var m=l.value;e.payload=function(){return u(m)},e.callback=function(){n_(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){n_(i,s,l),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function nE(e,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&_o(i,s,u,!0),s=oi.current,s!==null){switch(s.tag){case 13:return Ai===null?sh():s.alternate===null&&en===0&&(en=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===ff?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),lh(e,l,u)),!1;case 22:return s.flags|=65536,l===ff?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),lh(e,l,u)),!1}throw Error(r(435,s.tag))}return lh(e,l,u),sh(),!1}if(Ue)return i=oi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==af&&(e=Error(r(422),{cause:l}),go(ii(e,s)))):(l!==af&&(i=Error(r(423),{cause:l}),go(ii(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=ii(l,s),u=If(e.stateNode,l,u),pf(e,u),en!==4&&(en=2)),!1;var m=Error(r(520),{cause:l});if(m=ii(m,s),Bo===null?Bo=[m]:Bo.push(m),en!==4&&(en=2),i===null)return!0;l=ii(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=If(s.stateNode,l,e),pf(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ia===null||!Ia.has(m))))return s.flags|=65536,u&=-u,s.lanes|=u,u=i_(u),a_(u,e,s,l),pf(s,u),!1}s=s.return}while(s!==null);return!1}var r_=Error(r(461)),yn=!1;function An(e,i,s,l){i.child=e===null?Zg(i,null,s,l):us(i,e.child,s,l)}function s_(e,i,s,l,u){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var A in l)A!=="ref"&&(E[A]=l[A])}else E=l;return vr(i),l=xf(e,i,s,E,m,u),A=yf(),e!==null&&!yn?(Sf(e,i,u),$i(e,i,u)):(Ue&&A&&ef(i),i.flags|=1,An(e,i,l,u),i.child)}function o_(e,i,s,l,u){if(e===null){var m=s.type;return typeof m=="function"&&!$u(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,l_(e,i,m,l,u)):(e=Gl(s.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Xf(e,u)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:fo,s(E,l)&&e.ref===i.ref)return $i(e,i,u)}return i.flags|=1,e=Wi(m,l),e.ref=i.ref,e.return=i,i.child=e}function l_(e,i,s,l,u){if(e!==null){var m=e.memoizedProps;if(fo(m,l)&&e.ref===i.ref)if(yn=!1,i.pendingProps=l=m,Xf(e,u))(e.flags&131072)!==0&&(yn=!0);else return i.lanes=e.lanes,$i(e,i,u)}return Bf(e,i,s,l,u)}function c_(e,i,s){var l=i.pendingProps,u=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,m=0;u!==null;)m=m|u.lanes|u.childLanes,u=u.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return u_(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(i,m!==null?m.cachePool:null),m!==null?lg(i,m):gf(),Kg(i);else return i.lanes=i.childLanes=536870912,u_(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(jl(i,m.cachePool),lg(i,m),Da(),i.memoizedState=null):(e!==null&&jl(i,null),gf(),Da());return An(e,i,u,s),i.child}function u_(e,i,s,l){var u=uf();return u=u===null?null:{parent:dn._currentValue,pool:u},i.memoizedState={baseLanes:s,cachePool:u},e!==null&&jl(i,null),gf(),Kg(i),e!==null&&_o(e,i,l,!0),null}function cc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Bf(e,i,s,l,u){return vr(i),s=xf(e,i,s,l,void 0,u),l=yf(),e!==null&&!yn?(Sf(e,i,u),$i(e,i,u)):(Ue&&l&&ef(i),i.flags|=1,An(e,i,s,u),i.child)}function f_(e,i,s,l,u,m){return vr(i),i.updateQueue=null,s=ug(i,l,s,u),cg(e),l=yf(),e!==null&&!yn?(Sf(e,i,m),$i(e,i,m)):(Ue&&l&&ef(i),i.flags|=1,An(e,i,s,m),i.child)}function h_(e,i,s,l,u){if(vr(i),i.stateNode===null){var m=ts,E=s.contextType;typeof E=="object"&&E!==null&&(m=Un(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Pf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},hf(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Un(E):ts,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Of(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Pf.enqueueReplaceState(m,m.state,null),To(i,l,m,u),Mo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var A=i.memoizedProps,B=Sr(s,A);m.props=B;var et=m.context,dt=s.contextType;E=ts,typeof dt=="object"&&dt!==null&&(E=Un(dt));var vt=s.getDerivedStateFromProps;dt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||et!==E)&&$g(i,m,l,E),ba=!1;var rt=i.memoizedState;m.state=rt,To(i,l,m,u),Mo(),et=i.memoizedState,A||rt!==et||ba?(typeof vt=="function"&&(Of(i,s,vt,l),et=i.memoizedState),(B=ba||Qg(i,s,B,l,rt,et,E))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),m.props=l,m.state=et,m.context=E,l=B):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,df(e,i),E=i.memoizedProps,dt=Sr(s,E),m.props=dt,vt=i.pendingProps,rt=m.context,et=s.contextType,B=ts,typeof et=="object"&&et!==null&&(B=Un(et)),A=s.getDerivedStateFromProps,(et=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==vt||rt!==B)&&$g(i,m,l,B),ba=!1,rt=i.memoizedState,m.state=rt,To(i,l,m,u),Mo();var ot=i.memoizedState;E!==vt||rt!==ot||ba||e!==null&&e.dependencies!==null&&Xl(e.dependencies)?(typeof A=="function"&&(Of(i,s,A,l),ot=i.memoizedState),(dt=ba||Qg(i,s,dt,l,rt,ot,B)||e!==null&&e.dependencies!==null&&Xl(e.dependencies))?(et||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ot,B),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ot,B)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ot),m.props=l,m.state=ot,m.context=B,l=dt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,cc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=us(i,e.child,null,u),i.child=us(i,null,s,u)):An(e,i,s,u),i.memoizedState=m.state,e=i.child):e=$i(e,i,u),e}function d_(e,i,s,l){return mo(),i.flags|=256,An(e,i,s,l),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(e){return{baseLanes:e,cachePool:tg()}}function Hf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=li),e}function p_(e,i,s){var l=i.pendingProps,u=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),E&&(u=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(u?wa(i):Da(),Ue){var A=tn,B;if(B=A){t:{for(B=A,A=bi;B.nodeType!==8;){if(!A){A=null;break t}if(B=gi(B.nextSibling),B===null){A=null;break t}}A=B}A!==null?(i.memoizedState={dehydrated:A,treeContext:dr!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},B=Zn(18,null,null,0),B.stateNode=A,B.return=i,i.child=B,In=i,tn=null,B=!0):B=!1}B||gr(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Mh(A)?i.lanes=32:i.lanes=536870912,null;Qi(i)}return A=l.children,l=l.fallback,u?(Da(),u=i.mode,A=uc({mode:"hidden",children:A},u),l=hr(l,u,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,u=i.child,u.memoizedState=Ff(s),u.childLanes=Hf(e,E,s),i.memoizedState=zf,l):(wa(i),Gf(i,A))}if(B=e.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(m)i.flags&256?(wa(i),i.flags&=-257,i=Vf(e,i,s)):i.memoizedState!==null?(Da(),i.child=e.child,i.flags|=128,i=null):(Da(),u=l.fallback,A=i.mode,l=uc({mode:"visible",children:l.children},A),u=hr(u,A,s,null),u.flags|=2,l.return=i,u.return=i,l.sibling=u,i.child=l,us(i,e.child,null,s),l=i.child,l.memoizedState=Ff(s),l.childLanes=Hf(e,E,s),i.memoizedState=zf,i=u);else if(wa(i),Mh(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var et=E.dgst;E=et,l=Error(r(419)),l.stack="",l.digest=E,go({value:l,source:null,stack:null}),i=Vf(e,i,s)}else if(yn||_o(e,i,s,!1),E=(s&e.childLanes)!==0,yn||E){if(E=Ye,E!==null&&(l=s&-s,l=(l&42)!==0?1:ie(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==B.retryLane))throw B.retryLane=l,Jr(e,l),ti(E,e,l),r_;A.data==="$?"||sh(),i=Vf(e,i,s)}else A.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,tn=gi(A.nextSibling),In=i,Ue=!0,mr=null,bi=!1,e!==null&&(ri[si++]=ji,ri[si++]=Yi,ri[si++]=dr,ji=e.id,Yi=e.overflow,dr=i),i=Gf(i,l.children),i.flags|=4096);return i}return u?(Da(),u=l.fallback,A=i.mode,B=e.child,et=B.sibling,l=Wi(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,et!==null?u=Wi(et,u):(u=hr(u,A,s,null),u.flags|=2),u.return=i,l.return=i,l.sibling=u,i.child=l,l=u,u=i.child,A=e.child.memoizedState,A===null?A=Ff(s):(B=A.cachePool,B!==null?(et=dn._currentValue,B=B.parent!==et?{parent:et,pool:et}:B):B=tg(),A={baseLanes:A.baseLanes|s,cachePool:B}),u.memoizedState=A,u.childLanes=Hf(e,E,s),i.memoizedState=zf,l):(wa(i),s=e.child,e=s.sibling,s=Wi(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Gf(e,i){return i=uc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function uc(e,i){return e=Zn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vf(e,i,s){return us(i,e.child,null,s),e=Gf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function m_(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),sf(e.return,i,s)}function kf(e,i,s,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=u)}function g_(e,i,s){var l=i.pendingProps,u=l.revealOrder,m=l.tail;if(An(e,i,l.children,s),l=pn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&m_(e,s,i);else if(e.tag===19)m_(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(St(pn,l),u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&sc(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),kf(i,!1,u,s,m);break;case"backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&sc(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}kf(i,!0,s,null,m);break;case"together":kf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Pa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(_o(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=Wi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Wi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Xf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Xl(e)))}function iE(e,i,s){switch(i.tag){case 3:wt(i,i.stateNode.containerInfo),Ta(i,dn,e.memoizedState.cache),mo();break;case 27:case 5:qt(i);break;case 4:wt(i,i.stateNode.containerInfo);break;case 10:Ta(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(wa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?p_(e,i,s):(wa(i),e=$i(e,i,s),e!==null?e.sibling:null);wa(i);break;case 19:var u=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(_o(e,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return g_(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(pn,pn.current),l)break;return null;case 22:case 23:return i.lanes=0,c_(e,i,s);case 24:Ta(i,dn,e.memoizedState.cache)}return $i(e,i,s)}function __(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)yn=!0;else{if(!Xf(e,s)&&(i.flags&128)===0)return yn=!1,iE(e,i,s);yn=(e.flags&131072)!==0}else yn=!1,Ue&&(i.flags&1048576)!==0&&Ym(i,kl,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,u=l._init;if(l=u(l._payload),i.type=l,typeof l=="function")$u(l)?(e=Sr(l,e),i.tag=1,i=h_(null,i,l,e,s)):(i.tag=0,i=Bf(null,i,l,e,s));else{if(l!=null){if(u=l.$$typeof,u===C){i.tag=11,i=s_(null,i,l,e,s);break t}else if(u===z){i.tag=14,i=o_(null,i,l,e,s);break t}}throw i=ht(l)||l,Error(r(306,i,""))}}return i;case 0:return Bf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Sr(l,i.pendingProps),h_(e,i,l,u,s);case 3:t:{if(wt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;u=m.element,df(e,i),To(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Ta(i,dn,l),l!==m.cache&&of(i,[dn],s,!0),Mo(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=d_(e,i,l,s);break t}else if(l!==u){u=ii(Error(r(424)),i),go(u),i=d_(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=gi(e.firstChild),In=i,Ue=!0,mr=null,bi=!0,s=Zg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(mo(),l===u){i=$i(e,i,s);break t}An(e,i,l,s)}i=i.child}return i;case 26:return cc(e,i),e===null?(s=Sv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,l=Tc(Tt.current).createElement(s),l[fn]=i,l[Tn]=e,Cn(l,s,e),on(l),i.stateNode=l):i.memoizedState=Sv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return qt(i),e===null&&Ue&&(l=i.stateNode=vv(i.type,i.pendingProps,Tt.current),In=i,bi=!0,u=tn,Fa(i.type)?(Th=u,tn=gi(l.firstChild)):tn=u),An(e,i,i.pendingProps.children,s),cc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((u=l=tn)&&(l=UE(l,i.type,i.pendingProps,bi),l!==null?(i.stateNode=l,In=i,tn=gi(l.firstChild),bi=!1,u=!0):u=!1),u||gr(i)),qt(i),u=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,yh(u,m)?l=null:E!==null&&yh(u,E)&&(i.flags|=32),i.memoizedState!==null&&(u=xf(e,i,ZS,null,null,s),jo._currentValue=u),cc(e,i),An(e,i,l,s),i.child;case 6:return e===null&&Ue&&((e=s=tn)&&(s=LE(s,i.pendingProps,bi),s!==null?(i.stateNode=s,In=i,tn=null,e=!0):e=!1),e||gr(i)),null;case 13:return p_(e,i,s);case 4:return wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=us(i,null,l,s):An(e,i,l,s),i.child;case 11:return s_(e,i,i.type,i.pendingProps,s);case 7:return An(e,i,i.pendingProps,s),i.child;case 8:return An(e,i,i.pendingProps.children,s),i.child;case 12:return An(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ta(i,i.type,l.value),An(e,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,vr(i),u=Un(u),l=l(u),i.flags|=1,An(e,i,l,s),i.child;case 14:return o_(e,i,i.type,i.pendingProps,s);case 15:return l_(e,i,i.type,i.pendingProps,s);case 19:return g_(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=uc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Wi(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return c_(e,i,s);case 24:return vr(i),l=Un(dn),e===null?(u=uf(),u===null&&(u=Ye,m=lf(),u.pooledCache=m,m.refCount++,m!==null&&(u.pooledCacheLanes|=s),u=m),i.memoizedState={parent:l,cache:u},hf(i),Ta(i,dn,u)):((e.lanes&s)!==0&&(df(e,i),To(i,null,null,s),Mo()),u=e.memoizedState,m=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ta(i,dn,l)):(l=m.cache,Ta(i,dn,l),l!==u.cache&&of(i,[dn],s,!0))),An(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ji(e){e.flags|=4}function v_(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Av(i)){if(i=oi.current,i!==null&&((Te&4194048)===Te?Ai!==null:(Te&62914560)!==Te&&(Te&536870912)===0||i!==Ai))throw So=ff,eg;e.flags|=8192}}function fc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Nt():536870912,e.lanes|=i,ps|=i)}function Uo(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function aE(e,i,s){var l=i.pendingProps;switch(nf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Zi(dn),se(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(po(i)?Ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Km())),Ke(i),null;case 26:return s=i.memoizedState,e===null?(Ji(i),s!==null?(Ke(i),v_(i,s)):(Ke(i),i.flags&=-16777217)):s?s!==e.memoizedState?(Ji(i),Ke(i),v_(i,s)):(Ke(i),i.flags&=-16777217):(e.memoizedProps!==l&&Ji(i),Ke(i),i.flags&=-16777217),null;case 27:Le(i),s=Tt.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Ke(i),null}e=Z.current,po(i)?qm(i):(e=vv(u,l,s),i.stateNode=e,Ji(i))}return Ke(i),null;case 5:if(Le(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ji(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Ke(i),null}if(e=Z.current,po(i))qm(i);else{switch(u=Tc(Tt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(s,{is:l.is}):u.createElement(s)}}e[fn]=i,e[Tn]=l;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(Cn(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ji(i)}}return Ke(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(e=Tt.current,po(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,u=In,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[fn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||fv(e.nodeValue,s)),e||gr(i)}else e=Tc(e).createTextNode(l),e[fn]=i,i.stateNode=e}return Ke(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=po(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=i}else mo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),u=!1}else u=Km(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Qi(i),i):(Qi(i),null)}if(Qi(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==u&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),fc(i,i.updateQueue),Ke(i),null;case 4:return se(),e===null&&mh(i.stateNode.containerInfo),Ke(i),null;case 10:return Zi(i.type),Ke(i),null;case 19:if(yt(pn),u=i.memoizedState,u===null)return Ke(i),null;if(l=(i.flags&128)!==0,m=u.rendering,m===null)if(l)Uo(u,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=sc(e),m!==null){for(i.flags|=128,Uo(u,!1),e=m.updateQueue,i.updateQueue=e,fc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)jm(s,e),s=s.sibling;return St(pn,pn.current&1|2),i.child}e=e.sibling}u.tail!==null&&le()>pc&&(i.flags|=128,l=!0,Uo(u,!1),i.lanes=4194304)}else{if(!l)if(e=sc(m),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,fc(i,e),Uo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Ue)return Ke(i),null}else 2*le()-u.renderingStartTime>pc&&s!==536870912&&(i.flags|=128,l=!0,Uo(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=le(),i.sibling=null,e=pn.current,St(pn,l?e&1|2:e&1),i):(Ke(i),null);case 22:case 23:return Qi(i),_f(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),s=i.updateQueue,s!==null&&fc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&yt(xr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Zi(dn),Ke(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function rE(e,i){switch(nf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Zi(dn),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Le(i),null;case 13:if(Qi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));mo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return yt(pn),null;case 4:return se(),null;case 10:return Zi(i.type),null;case 22:case 23:return Qi(i),_f(),e!==null&&yt(xr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Zi(dn),null;case 25:return null;default:return null}}function x_(e,i){switch(nf(i),i.tag){case 3:Zi(dn),se();break;case 26:case 27:case 5:Le(i);break;case 4:se();break;case 13:Qi(i);break;case 19:yt(pn);break;case 10:Zi(i.type);break;case 22:case 23:Qi(i),_f(),e!==null&&yt(xr);break;case 24:Zi(dn)}}function Lo(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&e)===e){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==u)}}catch(A){Xe(i,i.return,A)}}function Ua(e,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var m=u.next;l=m;do{if((l.tag&e)===e){var E=l.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,u=i;var B=s,et=A;try{et()}catch(dt){Xe(u,B,dt)}}}l=l.next}while(l!==m)}}catch(dt){Xe(i,i.return,dt)}}function y_(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{og(i,s)}catch(l){Xe(e,e.return,l)}}}function S_(e,i,s){s.props=Sr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Xe(e,i,l)}}function No(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(u){Xe(e,i,u)}}function Ri(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Xe(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Xe(e,i,u)}else s.current=null}function E_(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Xe(e,e.return,u)}}function Wf(e,i,s){try{var l=e.stateNode;AE(l,e.type,s,i),l[Tn]=i}catch(u){Xe(e,e.return,u)}}function M_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fa(e.type)||e.tag===4}function jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||M_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Mc));else if(l!==4&&(l===27&&Fa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Yf(e,i,s),e=e.sibling;e!==null;)Yf(e,i,s),e=e.sibling}function hc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Fa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(hc(e,i,s),e=e.sibling;e!==null;)hc(e,i,s),e=e.sibling}function T_(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Cn(i,l,s),i[fn]=e,i[Tn]=s}catch(m){Xe(e,e.return,m)}}var ta=!1,sn=!1,qf=!1,b_=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function sE(e,i){if(e=e.containerInfo,vh=Dc,e=Im(e),Wu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,A=-1,B=-1,et=0,dt=0,vt=e,rt=null;e:for(;;){for(var ot;vt!==s||u!==0&&vt.nodeType!==3||(A=E+u),vt!==m||l!==0&&vt.nodeType!==3||(B=E+l),vt.nodeType===3&&(E+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)rt=vt,vt=ot;for(;;){if(vt===e)break e;if(rt===s&&++et===u&&(A=E),rt===m&&++dt===l&&(B=E),(ot=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ot}s=A===-1||B===-1?null:{start:A,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(xh={focusedElem:e,selectionRange:s},Dc=!1,Sn=i;Sn!==null;)if(i=Sn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Sn=e;else for(;Sn!==null;){switch(i=Sn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,u=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ne=Sr(s.type,u,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(ne,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Xe(s,s.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Eh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Sn=e;break}Sn=i.return}}function A_(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:La(e,s),l&4&&Lo(5,s);break;case 1:if(La(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){Xe(s,s.return,E)}else{var u=Sr(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Xe(s,s.return,E)}}l&64&&y_(s),l&512&&No(s,s.return);break;case 3:if(La(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{og(e,i)}catch(E){Xe(s,s.return,E)}}break;case 27:i===null&&l&4&&T_(s);case 26:case 5:La(e,s),i===null&&l&4&&E_(s),l&512&&No(s,s.return);break;case 12:La(e,s);break;case 13:La(e,s),l&4&&w_(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=mE.bind(null,s),NE(e,s))));break;case 22:if(l=s.memoizedState!==null||ta,!l){i=i!==null&&i.memoizedState!==null||sn,u=ta;var m=sn;ta=l,(sn=i)&&!m?Na(e,s,(s.subtreeFlags&8772)!==0):La(e,s),ta=u,sn=m}break;case 30:break;default:La(e,s)}}function R_(e){var i=e.alternate;i!==null&&(e.alternate=null,R_(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ya(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,kn=!1;function ea(e,i,s){for(s=s.child;s!==null;)C_(e,i,s),s=s.sibling}function C_(e,i,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(mt,s)}catch{}switch(s.tag){case 26:sn||Ri(s,i),ea(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Ri(s,i);var l=Ze,u=kn;Fa(s.type)&&(Ze=s.stateNode,kn=!1),ea(e,i,s),Vo(s.stateNode),Ze=l,kn=u;break;case 5:sn||Ri(s,i);case 6:if(l=Ze,u=kn,Ze=null,ea(e,i,s),Ze=l,kn=u,Ze!==null)if(kn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(m){Xe(s,i,m)}else try{Ze.removeChild(s.stateNode)}catch(m){Xe(s,i,m)}break;case 18:Ze!==null&&(kn?(e=Ze,gv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ko(e)):gv(Ze,s.stateNode));break;case 4:l=Ze,u=kn,Ze=s.stateNode.containerInfo,kn=!0,ea(e,i,s),Ze=l,kn=u;break;case 0:case 11:case 14:case 15:sn||Ua(2,s,i),sn||Ua(4,s,i),ea(e,i,s);break;case 1:sn||(Ri(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&S_(s,i,l)),ea(e,i,s);break;case 21:ea(e,i,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,ea(e,i,s),sn=l;break;default:ea(e,i,s)}}function w_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ko(e)}catch(s){Xe(i,i.return,s)}}function oE(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new b_),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new b_),i;default:throw Error(r(435,e.tag))}}function Zf(e,i){var s=oE(e);i.forEach(function(l){var u=gE.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}function Kn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],m=e,E=i,A=E;t:for(;A!==null;){switch(A.tag){case 27:if(Fa(A.type)){Ze=A.stateNode,kn=!1;break t}break;case 5:Ze=A.stateNode,kn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Ze===null)throw Error(r(160));C_(m,E,u),Ze=null,kn=!1,m=u.alternate,m!==null&&(m.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)D_(i,e),i=i.sibling}var mi=null;function D_(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(i,e),Qn(e),l&4&&(Ua(3,e,e.return),Lo(3,e),Ua(5,e,e.return));break;case 1:Kn(i,e),Qn(e),l&512&&(sn||s===null||Ri(s,s.return)),l&64&&ta&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=mi;if(Kn(i,e),Qn(e),l&512&&(sn||s===null||Ri(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":m=u.getElementsByTagName("title")[0],(!m||m[xa]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=u.createElement(l),u.head.insertBefore(m,u.querySelector("head > title"))),Cn(m,l,s),m[fn]=e,on(m),l=m;break t;case"link":var E=Tv("link","href",u).get(l+(s.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(A,1);break e}}m=u.createElement(l),Cn(m,l,s),u.head.appendChild(m);break;case"meta":if(E=Tv("meta","content",u).get(l+(s.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(A,1);break e}}m=u.createElement(l),Cn(m,l,s),u.head.appendChild(m);break;default:throw Error(r(468,l))}m[fn]=e,on(m),l=m}e.stateNode=l}else bv(u,e.type,e.stateNode);else e.stateNode=Mv(u,l,e.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?bv(u,e.type,e.stateNode):Mv(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Wf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Kn(i,e),Qn(e),l&512&&(sn||s===null||Ri(s,s.return)),s!==null&&l&4&&Wf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Kn(i,e),Qn(e),l&512&&(sn||s===null||Ri(s,s.return)),e.flags&32){u=e.stateNode;try{Ti(u,"")}catch(ot){Xe(e,e.return,ot)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Wf(e,u,s!==null?s.memoizedProps:u)),l&1024&&(qf=!0);break;case 6:if(Kn(i,e),Qn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(ot){Xe(e,e.return,ot)}}break;case 3:if(Rc=null,u=mi,mi=bc(i.containerInfo),Kn(i,e),mi=u,Qn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ko(i.containerInfo)}catch(ot){Xe(e,e.return,ot)}qf&&(qf=!1,U_(e));break;case 4:l=mi,mi=bc(e.stateNode.containerInfo),Kn(i,e),Qn(e),mi=l;break;case 12:Kn(i,e),Qn(e);break;case 13:Kn(i,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(eh=le()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zf(e,l)));break;case 22:u=e.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,et=ta,dt=sn;if(ta=et||u,sn=dt||B,Kn(i,e),sn=dt,ta=et,Qn(e),l&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||B||ta||sn||Er(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(m=B.stateNode,u)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=B.stateNode;var vt=B.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ot){Xe(B,B.return,ot)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ot){Xe(B,B.return,ot)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Zf(e,s))));break;case 19:Kn(i,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zf(e,l)));break;case 30:break;case 21:break;default:Kn(i,e),Qn(e)}}function Qn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(M_(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,m=jf(e);hc(e,m,u);break;case 5:var E=s.stateNode;s.flags&32&&(Ti(E,""),s.flags&=-33);var A=jf(e);hc(e,A,E);break;case 3:case 4:var B=s.stateNode.containerInfo,et=jf(e);Yf(e,et,B);break;default:throw Error(r(161))}}catch(dt){Xe(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function U_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;U_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function La(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)A_(e,i.alternate,i),i=i.sibling}function Er(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ua(4,i,i.return),Er(i);break;case 1:Ri(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&S_(i,i.return,s),Er(i);break;case 27:Vo(i.stateNode);case 26:case 5:Ri(i,i.return),Er(i);break;case 22:i.memoizedState===null&&Er(i);break;case 30:Er(i);break;default:Er(i)}e=e.sibling}}function Na(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Na(u,m,s),Lo(4,m);break;case 1:if(Na(u,m,s),l=m,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Xe(l,l.return,et)}if(l=m,u=l.updateQueue,u!==null){var A=l.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)sg(B[u],A)}catch(et){Xe(l,l.return,et)}}s&&E&64&&y_(m),No(m,m.return);break;case 27:T_(m);case 26:case 5:Na(u,m,s),s&&l===null&&E&4&&E_(m),No(m,m.return);break;case 12:Na(u,m,s);break;case 13:Na(u,m,s),s&&E&4&&w_(u,m);break;case 22:m.memoizedState===null&&Na(u,m,s),No(m,m.return);break;case 30:break;default:Na(u,m,s)}i=i.sibling}}function Kf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&vo(s))}function Qf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e))}function Ci(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)L_(e,i,s,l),i=i.sibling}function L_(e,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(e,i,s,l),u&2048&&Lo(9,i);break;case 1:Ci(e,i,s,l);break;case 3:Ci(e,i,s,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){Ci(e,i,s,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Xe(i,i.return,B)}}else Ci(e,i,s,l);break;case 13:Ci(e,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Ci(e,i,s,l):Oo(e,i):m._visibility&2?Ci(e,i,s,l):(m._visibility|=2,fs(e,i,s,l,(i.subtreeFlags&10256)!==0)),u&2048&&Kf(E,i);break;case 24:Ci(e,i,s,l),u&2048&&Qf(i.alternate,i);break;default:Ci(e,i,s,l)}}function fs(e,i,s,l,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,E=i,A=s,B=l,et=E.flags;switch(E.tag){case 0:case 11:case 15:fs(m,E,A,B,u),Lo(8,E);break;case 23:break;case 22:var dt=E.stateNode;E.memoizedState!==null?dt._visibility&2?fs(m,E,A,B,u):Oo(m,E):(dt._visibility|=2,fs(m,E,A,B,u)),u&&et&2048&&Kf(E.alternate,E);break;case 24:fs(m,E,A,B,u),u&&et&2048&&Qf(E.alternate,E);break;default:fs(m,E,A,B,u)}i=i.sibling}}function Oo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,u=l.flags;switch(l.tag){case 22:Oo(s,l),u&2048&&Kf(l.alternate,l);break;case 24:Oo(s,l),u&2048&&Qf(l.alternate,l);break;default:Oo(s,l)}i=i.sibling}}var Po=8192;function hs(e){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)N_(e),e=e.sibling}function N_(e){switch(e.tag){case 26:hs(e),e.flags&Po&&e.memoizedState!==null&&jE(mi,e.memoizedState,e.memoizedProps);break;case 5:hs(e);break;case 3:case 4:var i=mi;mi=bc(e.stateNode.containerInfo),hs(e),mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,hs(e),Po=i):hs(e));break;default:hs(e)}}function O_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Io(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,I_(l,e)}O_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)P_(e),e=e.sibling}function P_(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,dc(e)):Io(e);break;default:Io(e)}}function dc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Sn=l,I_(l,e)}O_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ua(8,i,i.return),dc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,dc(i));break;default:dc(i)}e=e.sibling}}function I_(e,i){for(;Sn!==null;){var s=Sn;switch(s.tag){case 0:case 11:case 15:Ua(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Sn=l;else t:for(s=e;Sn!==null;){l=Sn;var u=l.sibling,m=l.return;if(R_(l),l===s){Sn=null;break t}if(u!==null){u.return=m,Sn=u;break t}Sn=m}}}var lE={getCacheForType:function(e){var i=Un(dn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},cE=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ye=null,ve=null,Te=0,Be=0,$n=null,Oa=!1,ds=!1,$f=!1,na=0,en=0,Pa=0,Mr=0,Jf=0,li=0,ps=0,Bo=null,Xn=null,th=!1,eh=0,pc=1/0,mc=null,Ia=null,Rn=0,Ba=null,ms=null,gs=0,nh=0,ih=null,B_=null,zo=0,ah=null;function Jn(){if((Ie&2)!==0&&Te!==0)return Te&-Te;if(I.T!==null){var e=is;return e!==0?e:fh()}return Re()}function z_(){li===0&&(li=(Te&536870912)===0||Ue?X():536870912);var e=oi.current;return e!==null&&(e.flags|=32),li}function ti(e,i,s){(e===Ye&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(_s(e,0),za(e,Te,li,!1)),zt(e,s),((Ie&2)===0||e!==Ye)&&(e===Ye&&((Ie&2)===0&&(Mr|=s),en===4&&za(e,Te,li,!1)),wi(e))}function F_(e,i,s){if((Ie&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),u=l?hE(e,i):oh(e,i,!0),m=l;do{if(u===0){ds&&!l&&za(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!uE(s)){u=oh(e,i,!1),m=!1;continue}if(u===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var A=e;u=Bo;var B=A.current.memoizedState.isDehydrated;if(B&&(_s(A,E).flags|=256),E=oh(A,E,!1),E!==2){if($f&&!B){A.errorRecoveryDisabledLanes|=m,Mr|=m,u=4;break t}m=Xn,Xn=u,m!==null&&(Xn===null?Xn=m:Xn.push.apply(Xn,m))}u=E}if(m=!1,u!==2)continue}}if(u===1){_s(e,0),za(e,i,0,!0);break}t:{switch(l=e,m=u,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:za(l,i,li,!Oa);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=eh+300-le(),10<u)){if(za(l,i,li,!Oa),Zt(l,0,!0)!==0)break t;l.timeoutHandle=pv(H_.bind(null,l,s,Xn,mc,th,i,li,Mr,ps,Oa,m,2,-0,0),u);break t}H_(l,s,Xn,mc,th,i,li,Mr,ps,Oa,m,0,-0,0)}}break}while(!0);wi(e)}function H_(e,i,s,l,u,m,E,A,B,et,dt,vt,rt,ot){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Wo={stylesheets:null,count:0,unsuspend:WE},N_(i),vt=YE(),vt!==null)){e.cancelPendingCommit=vt(Y_.bind(null,e,i,m,s,l,u,E,A,B,dt,1,rt,ot)),za(e,m,E,!et);return}Y_(e,i,m,s,l,u,E,A,B)}function uE(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],m=u.getSnapshot;u=u.value;try{if(!qn(m(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function za(e,i,s,l){i&=~Jf,i&=~Mr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var m=31-It(u),E=1<<m;l[m]=-1,u&=~E}s!==0&&xt(e,s,i)}function gc(){return(Ie&6)===0?(Fo(0),!1):!0}function rh(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,qi=_r=null,Ef(e),cs=null,wo=0,e=ve;for(;e!==null;)x_(e.alternate,e),e=e.return;ve=null}}function _s(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,CE(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),rh(),Ye=e,ve=s=Wi(e.current,null),Te=i,Be=0,$n=null,Oa=!1,ds=Dt(e,i),$f=!1,ps=li=Jf=Mr=Pa=en=0,Xn=Bo=null,th=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-It(l),m=1<<u;i|=e[u],l&=~m}return na=i,zl(),s}function G_(e,i){me=null,I.H=ic,i===yo||i===Yl?(i=ag(),Be=3):i===eg?(i=ag(),Be=4):Be=i===r_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,ve===null&&(en=1,lc(e,ii(i,e.current)))}function V_(){var e=I.H;return I.H=ic,e===null?ic:e}function k_(){var e=I.A;return I.A=lE,e}function sh(){en=4,Oa||(Te&4194048)!==Te&&oi.current!==null||(ds=!0),(Pa&134217727)===0&&(Mr&134217727)===0||Ye===null||za(Ye,Te,li,!1)}function oh(e,i,s){var l=Ie;Ie|=2;var u=V_(),m=k_();(Ye!==e||Te!==i)&&(mc=null,_s(e,i)),i=!1;var E=en;t:do try{if(Be!==0&&ve!==null){var A=ve,B=$n;switch(Be){case 8:rh(),E=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(i=!0);var et=Be;if(Be=0,$n=null,vs(e,A,B,et),s&&ds){E=0;break t}break;default:et=Be,Be=0,$n=null,vs(e,A,B,et)}}fE(),E=en;break}catch(dt){G_(e,dt)}while(!0);return i&&e.shellSuspendCounter++,qi=_r=null,Ie=l,I.H=u,I.A=m,ve===null&&(Ye=null,Te=0,zl()),E}function fE(){for(;ve!==null;)X_(ve)}function hE(e,i){var s=Ie;Ie|=2;var l=V_(),u=k_();Ye!==e||Te!==i?(mc=null,pc=le()+500,_s(e,i)):ds=Dt(e,i);t:do try{if(Be!==0&&ve!==null){i=ve;var m=$n;e:switch(Be){case 1:Be=0,$n=null,vs(e,i,m,1);break;case 2:case 9:if(ng(m)){Be=0,$n=null,W_(i);break}i=function(){Be!==2&&Be!==9||Ye!==e||(Be=7),wi(e)},m.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:ng(m)?(Be=0,$n=null,W_(i)):(Be=0,$n=null,vs(e,i,m,7));break;case 5:var E=null;switch(ve.tag){case 26:E=ve.memoizedState;case 5:case 27:var A=ve;if(!E||Av(E)){Be=0,$n=null;var B=A.sibling;if(B!==null)ve=B;else{var et=A.return;et!==null?(ve=et,_c(et)):ve=null}break e}}Be=0,$n=null,vs(e,i,m,5);break;case 6:Be=0,$n=null,vs(e,i,m,6);break;case 8:rh(),en=6;break t;default:throw Error(r(462))}}dE();break}catch(dt){G_(e,dt)}while(!0);return qi=_r=null,I.H=l,I.A=u,Ie=s,ve!==null?0:(Ye=null,Te=0,zl(),en)}function dE(){for(;ve!==null&&!de();)X_(ve)}function X_(e){var i=__(e.alternate,e,na);e.memoizedProps=e.pendingProps,i===null?_c(e):ve=i}function W_(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=f_(s,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=f_(s,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:Ef(i);default:x_(s,i),i=ve=jm(i,na),i=__(s,i,na)}e.memoizedProps=e.pendingProps,i===null?_c(e):ve=i}function vs(e,i,s,l){qi=_r=null,Ef(i),cs=null,wo=0;var u=i.return;try{if(nE(e,u,i,s,Te)){en=1,lc(e,ii(s,e.current)),ve=null;return}}catch(m){if(u!==null)throw ve=u,m;en=1,lc(e,ii(s,e.current)),ve=null;return}i.flags&32768?(Ue||l===1?e=!0:ds||(Te&536870912)!==0?e=!1:(Oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=oi.current,l!==null&&l.tag===13&&(l.flags|=16384))),j_(i,e)):_c(i)}function _c(e){var i=e;do{if((i.flags&32768)!==0){j_(i,Oa);return}e=i.return;var s=aE(i.alternate,i,na);if(s!==null){ve=s;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);en===0&&(en=5)}function j_(e,i){do{var s=rE(e.alternate,e);if(s!==null){s.flags&=32767,ve=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=s}while(e!==null);en=6,ve=null}function Y_(e,i,s,l,u,m,E,A,B){e.cancelPendingCommit=null;do vc();while(Rn!==0);if((Ie&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=Ku,Rt(e,s,m,E,A,B),e===Ye&&(ve=Ye=null,Te=0),ms=i,Ba=e,gs=s,nh=m,ih=u,B_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_E(re,function(){return $_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,u=Y.p,Y.p=2,E=Ie,Ie|=4;try{sE(e,i,s)}finally{Ie=E,Y.p=u,I.T=l}}Rn=1,q_(),Z_(),K_()}}function q_(){if(Rn===1){Rn=0;var e=Ba,i=ms,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=Y.p;Y.p=2;var u=Ie;Ie|=4;try{D_(i,e);var m=xh,E=Im(e.containerInfo),A=m.focusedElem,B=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&Pm(A.ownerDocument.documentElement,A)){if(B!==null&&Wu(A)){var et=B.start,dt=B.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var vt=A.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ot=rt.getSelection(),ne=A.textContent.length,Jt=Math.min(B.start,ne),He=B.end===void 0?Jt:Math.min(B.end,ne);!ot.extend&&Jt>He&&(E=He,He=Jt,Jt=E);var q=Om(A,Jt),k=Om(A,He);if(q&&k&&(ot.rangeCount!==1||ot.anchorNode!==q.node||ot.anchorOffset!==q.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var J=vt.createRange();J.setStart(q.node,q.offset),ot.removeAllRanges(),Jt>He?(ot.addRange(J),ot.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ot.addRange(J))}}}}for(vt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&vt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var gt=vt[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Dc=!!vh,xh=vh=null}finally{Ie=u,Y.p=l,I.T=s}}e.current=i,Rn=2}}function Z_(){if(Rn===2){Rn=0;var e=Ba,i=ms,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=Y.p;Y.p=2;var u=Ie;Ie|=4;try{A_(e,i.alternate,i)}finally{Ie=u,Y.p=l,I.T=s}}Rn=3}}function K_(){if(Rn===4||Rn===3){Rn=0,ye();var e=Ba,i=ms,s=gs,l=B_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,ms=Ba=null,Q_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Pe(s),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(mt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,u=Y.p,Y.p=2,I.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var A=l[E];m(A.value,{componentStack:A.stack})}}finally{I.T=i,Y.p=u}}(gs&3)!==0&&vc(),wi(e),u=e.pendingLanes,(s&4194090)!==0&&(u&42)!==0?e===ah?zo++:(zo=0,ah=e):zo=0,Fo(0)}}function Q_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,vo(i)))}function vc(e){return q_(),Z_(),K_(),$_()}function $_(){if(Rn!==5)return!1;var e=Ba,i=nh;nh=0;var s=Pe(gs),l=I.T,u=Y.p;try{Y.p=32>s?32:s,I.T=null,s=ih,ih=null;var m=Ba,E=gs;if(Rn=0,ms=Ba=null,gs=0,(Ie&6)!==0)throw Error(r(331));var A=Ie;if(Ie|=4,P_(m.current),L_(m,m.current,E,s),Ie=A,Fo(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(mt,m)}catch{}return!0}finally{Y.p=u,I.T=l,Q_(e,i)}}function J_(e,i,s){i=ii(s,i),i=If(e.stateNode,i,2),e=Ra(e,i,2),e!==null&&(zt(e,2),wi(e))}function Xe(e,i,s){if(e.tag===3)J_(e,e,s);else for(;i!==null;){if(i.tag===3){J_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ia===null||!Ia.has(l))){e=ii(s,e),s=i_(2),l=Ra(i,s,2),l!==null&&(a_(s,l,i,e),zt(l,2),wi(l));break}}i=i.return}}function lh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new cE;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||($f=!0,u.add(s),e=pE.bind(null,e,i,s),i.then(e,e))}function pE(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ye===e&&(Te&s)===s&&(en===4||en===3&&(Te&62914560)===Te&&300>le()-eh?(Ie&2)===0&&_s(e,0):Jf|=s,ps===Te&&(ps=0)),wi(e)}function tv(e,i){i===0&&(i=Nt()),e=Jr(e,i),e!==null&&(zt(e,i),wi(e))}function mE(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),tv(e,s)}function gE(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),tv(e,s)}function _E(e,i){return he(e,i)}var xc=null,xs=null,ch=!1,yc=!1,uh=!1,Tr=0;function wi(e){e!==xs&&e.next===null&&(xs===null?xc=xs=e:xs=xs.next=e),yc=!0,ch||(ch=!0,xE())}function Fo(e,i){if(!uh&&yc){uh=!0;do for(var s=!1,l=xc;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var m=0;else{var E=l.suspendedLanes,A=l.pingedLanes;m=(1<<31-It(42|e)+1)-1,m&=u&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,av(l,m))}else m=Te,m=Zt(l,l===Ye?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Dt(l,m)||(s=!0,av(l,m));l=l.next}while(s);uh=!1}}function vE(){ev()}function ev(){yc=ch=!1;var e=0;Tr!==0&&(RE()&&(e=Tr),Tr=0);for(var i=le(),s=null,l=xc;l!==null;){var u=l.next,m=nv(l,i);m===0?(l.next=null,s===null?xc=u:s.next=u,u===null&&(xs=s)):(s=l,(e!==0||(m&3)!==0)&&(yc=!0)),l=u}Fo(e)}function nv(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-It(m),A=1<<E,B=u[E];B===-1?((A&s)===0||(A&l)!==0)&&(u[E]=ae(A,i)):B<=i&&(e.expiredLanes|=A),m&=~A}if(i=Ye,s=Te,s=Zt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&V(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Dt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&V(l),Pe(s)){case 2:case 8:s=Kt;break;case 32:s=re;break;case 268435456:s=O;break;default:s=re}return l=iv.bind(null,e),s=he(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&V(l),e.callbackPriority=2,e.callbackNode=null,2}function iv(e,i){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(vc()&&e.callbackNode!==s)return null;var l=Te;return l=Zt(e,e===Ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(F_(e,l,i),nv(e,le()),e.callbackNode!=null&&e.callbackNode===s?iv.bind(null,e):null)}function av(e,i){if(vc())return null;F_(e,i,!0)}function xE(){wE(function(){(Ie&6)!==0?he(Se,vE):ev()})}function fh(){return Tr===0&&(Tr=X()),Tr}function rv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function sv(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function yE(e,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var m=rv((u[Tn]||null).action),E=l.submitter;E&&(i=(i=E[Tn]||null)?rv(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var A=new Pl("action","action",null,l,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Tr!==0){var B=E?sv(u,E):new FormData(u);Uf(s,{pending:!0,data:B,method:u.method,action:m},null,B)}}else typeof m=="function"&&(A.preventDefault(),B=E?sv(u,E):new FormData(u),Uf(s,{pending:!0,data:B,method:u.method,action:m},m,B))},currentTarget:u}]})}}for(var hh=0;hh<Zu.length;hh++){var dh=Zu[hh],SE=dh.toLowerCase(),EE=dh[0].toUpperCase()+dh.slice(1);pi(SE,"on"+EE)}pi(Fm,"onAnimationEnd"),pi(Hm,"onAnimationIteration"),pi(Gm,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(FS,"onTransitionRun"),pi(HS,"onTransitionStart"),pi(GS,"onTransitionCancel"),pi(Vm,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function ov(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var A=l[E],B=A.instance,et=A.currentTarget;if(A=A.listener,B!==m&&u.isPropagationStopped())break t;m=A,u.currentTarget=et;try{m(u)}catch(dt){oc(dt)}u.currentTarget=null,m=B}else for(E=0;E<l.length;E++){if(A=l[E],B=A.instance,et=A.currentTarget,A=A.listener,B!==m&&u.isPropagationStopped())break t;m=A,u.currentTarget=et;try{m(u)}catch(dt){oc(dt)}u.currentTarget=null,m=B}}}}function xe(e,i){var s=i[sr];s===void 0&&(s=i[sr]=new Set);var l=e+"__bubble";s.has(l)||(lv(i,e,2,!1),s.add(l))}function ph(e,i,s){var l=0;i&&(l|=4),lv(s,e,l,i)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function mh(e){if(!e[Sc]){e[Sc]=!0,wl.forEach(function(s){s!=="selectionchange"&&(ME.has(s)||ph(s,!1,e),ph(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Sc]||(i[Sc]=!0,ph("selectionchange",!1,i))}}function lv(e,i,s,l){switch(Lv(i)){case 2:var u=KE;break;case 8:u=QE;break;default:u=wh}s=u.bind(null,i,s,e),u=void 0,!Iu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function gh(e,i,s,l,u){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var A=l.stateNode.containerInfo;if(A===u)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;A!==null;){if(E=Fi(A),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){l=m=E;continue t}A=A.parentNode}}l=l.return}mm(function(){var et=m,dt=Ou(s),vt=[];t:{var rt=km.get(e);if(rt!==void 0){var ot=Pl,ne=e;switch(e){case"keypress":if(Nl(s)===0)break t;case"keydown":case"keyup":ot=_S;break;case"focusin":ne="focus",ot=Hu;break;case"focusout":ne="blur",ot=Hu;break;case"beforeblur":case"afterblur":ot=Hu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=yS;break;case Fm:case Hm:case Gm:ot=lS;break;case Vm:ot=ES;break;case"scroll":case"scrollend":ot=iS;break;case"wheel":ot=TS;break;case"copy":case"cut":case"paste":ot=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ym;break;case"toggle":case"beforetoggle":ot=AS}var Jt=(i&4)!==0,He=!Jt&&(e==="scroll"||e==="scrollend"),q=Jt?rt!==null?rt+"Capture":null:rt;Jt=[];for(var k=et,J;k!==null;){var gt=k;if(J=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||J===null||q===null||(gt=ao(k,q),gt!=null&&Jt.push(Go(k,gt,J))),He)break;k=k.return}0<Jt.length&&(rt=new ot(rt,ne,null,s,dt),vt.push({event:rt,listeners:Jt}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",rt&&s!==Nu&&(ne=s.relatedTarget||s.fromElement)&&(Fi(ne)||ne[Hn]))break t;if((ot||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(ne=s.relatedTarget||s.toElement,ot=et,ne=ne?Fi(ne):null,ne!==null&&(He=c(ne),Jt=ne.tag,ne!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(ot=null,ne=et),ot!==ne)){if(Jt=vm,gt="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=ym,gt="onPointerLeave",q="onPointerEnter",k="pointer"),He=ot==null?rt:lr(ot),J=ne==null?rt:lr(ne),rt=new Jt(gt,k+"leave",ot,s,dt),rt.target=He,rt.relatedTarget=J,gt=null,Fi(dt)===et&&(Jt=new Jt(q,k+"enter",ne,s,dt),Jt.target=J,Jt.relatedTarget=He,gt=Jt),He=gt,ot&&ne)e:{for(Jt=ot,q=ne,k=0,J=Jt;J;J=ys(J))k++;for(J=0,gt=q;gt;gt=ys(gt))J++;for(;0<k-J;)Jt=ys(Jt),k--;for(;0<J-k;)q=ys(q),J--;for(;k--;){if(Jt===q||q!==null&&Jt===q.alternate)break e;Jt=ys(Jt),q=ys(q)}Jt=null}else Jt=null;ot!==null&&cv(vt,rt,ot,Jt,!1),ne!==null&&He!==null&&cv(vt,He,ne,Jt,!0)}}t:{if(rt=et?lr(et):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Gt=Cm;else if(Am(rt))if(wm)Gt=IS;else{Gt=OS;var ge=NS}else ot=rt.nodeName,!ot||ot.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?et&&Lu(et.elementType)&&(Gt=Cm):Gt=PS;if(Gt&&(Gt=Gt(e,et))){Rm(vt,Gt,s,dt);break t}ge&&ge(e,rt,et),e==="focusout"&&et&&rt.type==="number"&&et.memoizedProps.value!=null&&Dn(rt,"number",rt.value)}switch(ge=et?lr(et):window,e){case"focusin":(Am(ge)||ge.contentEditable==="true")&&(Kr=ge,ju=et,ho=null);break;case"focusout":ho=ju=Kr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Bm(vt,s,dt);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":Bm(vt,s,dt)}var jt;if(Vu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Zr?Tm(e,s)&&(ee="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ee="onCompositionStart");ee&&(Sm&&s.locale!=="ko"&&(Zr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Zr&&(jt=gm()):(Ma=dt,Bu="value"in Ma?Ma.value:Ma.textContent,Zr=!0)),ge=Ec(et,ee),0<ge.length&&(ee=new xm(ee,e,null,s,dt),vt.push({event:ee,listeners:ge}),jt?ee.data=jt:(jt=bm(s),jt!==null&&(ee.data=jt)))),(jt=CS?wS(e,s):DS(e,s))&&(ee=Ec(et,"onBeforeInput"),0<ee.length&&(ge=new xm("onBeforeInput","beforeinput",null,s,dt),vt.push({event:ge,listeners:ee}),ge.data=jt)),yE(vt,e,et,s,dt)}ov(vt,i)})}function Go(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Ec(e,i){for(var s=i+"Capture",l=[];e!==null;){var u=e,m=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||m===null||(u=ao(e,s),u!=null&&l.unshift(Go(e,u,m)),u=ao(e,i),u!=null&&l.push(Go(e,u,m))),e.tag===3)return l;e=e.return}return[]}function ys(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cv(e,i,s,l,u){for(var m=i._reactName,E=[];s!==null&&s!==l;){var A=s,B=A.alternate,et=A.stateNode;if(A=A.tag,B!==null&&B===l)break;A!==5&&A!==26&&A!==27||et===null||(B=et,u?(et=ao(s,m),et!=null&&E.unshift(Go(s,et,B))):u||(et=ao(s,m),et!=null&&E.push(Go(s,et,B)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var TE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function uv(e){return(typeof e=="string"?e:""+e).replace(TE,`
`).replace(bE,"")}function fv(e,i){return i=uv(i),uv(e)===i}function Mc(){}function Fe(e,i,s,l,u,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ti(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ti(e,""+l);break;case"className":Ut(e,"class",l);break;case"tabIndex":Ut(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(e,s,l);break;case"style":dm(e,l,m);break;case"data":if(i!=="object"){Ut(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ul(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Fe(e,i,"name",u.name,u,null),Fe(e,i,"formEncType",u.formEncType,u,null),Fe(e,i,"formMethod",u.formMethod,u,null),Fe(e,i,"formTarget",u.formTarget,u,null)):(Fe(e,i,"encType",u.encType,u,null),Fe(e,i,"method",u.method,u,null),Fe(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Ul(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Mc);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Ul(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":xe("beforetoggle",e),xe("toggle",e),At(e,"popover",l);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":At(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=eS.get(s)||s,At(e,s,l))}}function _h(e,i,s,l,u,m){switch(s){case"style":dm(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Ti(e,l):(typeof l=="number"||typeof l=="bigint")&&Ti(e,""+l);break;case"onScroll":l!=null&&xe("scroll",e);break;case"onScrollEnd":l!=null&&xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),m=e[Tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,u),typeof l=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,u);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):At(e,s,l)}}}function Cn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var l=!1,u=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Fe(e,i,m,E,s,null)}}u&&Fe(e,i,"srcSet",s.srcSet,s,null),l&&Fe(e,i,"src",s.src,s,null);return;case"input":xe("invalid",e);var A=m=E=u=null,B=null,et=null;for(l in s)if(s.hasOwnProperty(l)){var dt=s[l];if(dt!=null)switch(l){case"name":u=dt;break;case"type":E=dt;break;case"checked":B=dt;break;case"defaultChecked":et=dt;break;case"value":m=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,i));break;default:Fe(e,i,l,dt,s,null)}}ke(e,m,A,B,et,E,u,!1),Je(e);return;case"select":xe("invalid",e),l=E=m=null;for(u in s)if(s.hasOwnProperty(u)&&(A=s[u],A!=null))switch(u){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":l=A;default:Fe(e,i,u,A,s,null)}i=m,s=E,e.multiple=!!l,i!=null?hn(e,!!l,i,!1):s!=null&&hn(e,!!l,s,!0);return;case"textarea":xe("invalid",e),m=u=l=null;for(E in s)if(s.hasOwnProperty(E)&&(A=s[E],A!=null))switch(E){case"value":l=A;break;case"defaultValue":u=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Fe(e,i,E,A,s,null)}bn(e,l,u,m),Je(e);return;case"option":for(B in s)if(s.hasOwnProperty(B)&&(l=s[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Fe(e,i,B,l,s,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(l=0;l<Ho.length;l++)xe(Ho[l],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(l=s[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Fe(e,i,et,l,s,null)}return;default:if(Lu(i)){for(dt in s)s.hasOwnProperty(dt)&&(l=s[dt],l!==void 0&&_h(e,i,dt,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Fe(e,i,A,l,s,null))}function AE(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,m=null,E=null,A=null,B=null,et=null,dt=null;for(ot in s){var vt=s[ot];if(s.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=vt;default:l.hasOwnProperty(ot)||Fe(e,i,ot,null,l,vt)}}for(var rt in l){var ot=l[rt];if(vt=s[rt],l.hasOwnProperty(rt)&&(ot!=null||vt!=null))switch(rt){case"type":m=ot;break;case"name":u=ot;break;case"checked":et=ot;break;case"defaultChecked":dt=ot;break;case"value":E=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,i));break;default:ot!==vt&&Fe(e,i,rt,ot,l,vt)}}Vi(e,E,A,B,et,dt,m,u);return;case"select":ot=E=A=rt=null;for(m in s)if(B=s[m],s.hasOwnProperty(m)&&B!=null)switch(m){case"value":break;case"multiple":ot=B;default:l.hasOwnProperty(m)||Fe(e,i,m,null,l,B)}for(u in l)if(m=l[u],B=s[u],l.hasOwnProperty(u)&&(m!=null||B!=null))switch(u){case"value":rt=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==B&&Fe(e,i,u,m,l,B)}i=A,s=E,l=ot,rt!=null?hn(e,!!s,rt,!1):!!l!=!!s&&(i!=null?hn(e,!!s,i,!0):hn(e,!!s,s?[]:"",!1));return;case"textarea":ot=rt=null;for(A in s)if(u=s[A],s.hasOwnProperty(A)&&u!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Fe(e,i,A,null,l,u)}for(E in l)if(u=l[E],m=s[E],l.hasOwnProperty(E)&&(u!=null||m!=null))switch(E){case"value":rt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==m&&Fe(e,i,E,u,l,m)}xn(e,rt,ot);return;case"option":for(var ne in s)if(rt=s[ne],s.hasOwnProperty(ne)&&rt!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Fe(e,i,ne,null,l,rt)}for(B in l)if(rt=l[B],ot=s[B],l.hasOwnProperty(B)&&rt!==ot&&(rt!=null||ot!=null))switch(B){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Fe(e,i,B,rt,l,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in s)rt=s[Jt],s.hasOwnProperty(Jt)&&rt!=null&&!l.hasOwnProperty(Jt)&&Fe(e,i,Jt,null,l,rt);for(et in l)if(rt=l[et],ot=s[et],l.hasOwnProperty(et)&&rt!==ot&&(rt!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,i));break;default:Fe(e,i,et,rt,l,ot)}return;default:if(Lu(i)){for(var He in s)rt=s[He],s.hasOwnProperty(He)&&rt!==void 0&&!l.hasOwnProperty(He)&&_h(e,i,He,void 0,l,rt);for(dt in l)rt=l[dt],ot=s[dt],!l.hasOwnProperty(dt)||rt===ot||rt===void 0&&ot===void 0||_h(e,i,dt,rt,l,ot);return}}for(var q in s)rt=s[q],s.hasOwnProperty(q)&&rt!=null&&!l.hasOwnProperty(q)&&Fe(e,i,q,null,l,rt);for(vt in l)rt=l[vt],ot=s[vt],!l.hasOwnProperty(vt)||rt===ot||rt==null&&ot==null||Fe(e,i,vt,rt,l,ot)}var vh=null,xh=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function hv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function yh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sh=null;function RE(){var e=window.event;return e&&e.type==="popstate"?e===Sh?!1:(Sh=e,!0):(Sh=null,!1)}var pv=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(e){return mv.resolve(null).then(e).catch(DE)}:pv;function DE(e){setTimeout(function(){throw e})}function Fa(e){return e==="head"}function gv(e,i){var s=i,l=0,u=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=e.ownerDocument;if(s&1&&Vo(E.documentElement),s&2&&Vo(E.body),s&4)for(s=E.head,Vo(s),E=s.firstChild;E;){var A=E.nextSibling,B=E.nodeName;E[xa]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=A}}if(u===0){e.removeChild(m),Ko(i);return}u--}else s==="$"||s==="$?"||s==="$!"?u++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);Ko(i)}function Eh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Eh(s),ya(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function UE(e,i,s,l){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[xa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function LE(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=gi(e.nextSibling),e===null))return null;return e}function Mh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function NE(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function gi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Th=null;function _v(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function vv(e,i,s){switch(i=Tc(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Vo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ya(e)}var ci=new Map,xv=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=Y.d;Y.d={f:OE,r:PE,D:IE,C:BE,L:zE,m:FE,X:GE,S:HE,M:VE};function OE(){var e=ia.f(),i=gc();return e||i}function PE(e){var i=Hi(e);i!==null&&i.tag===5&&i.type==="form"?Fg(i):ia.r(e)}var Ss=typeof document>"u"?null:document;function yv(e,i,s){var l=Ss;if(l&&typeof i=="string"&&i){var u=je(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),xv.has(u)||(xv.add(u),e={rel:e,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Cn(i,"link",e),on(i),l.head.appendChild(i)))}}function IE(e){ia.D(e),yv("dns-prefetch",e,null)}function BE(e,i){ia.C(e,i),yv("preconnect",e,i)}function zE(e,i,s){ia.L(e,i,s);var l=Ss;if(l&&e&&i){var u='link[rel="preload"][as="'+je(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+je(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+je(s.imageSizes)+'"]')):u+='[href="'+je(e)+'"]';var m=u;switch(i){case"style":m=Es(e);break;case"script":m=Ms(e)}ci.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),ci.set(m,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(ko(m))||i==="script"&&l.querySelector(Xo(m))||(i=l.createElement("link"),Cn(i,"link",e),on(i),l.head.appendChild(i)))}}function FE(e,i){ia.m(e,i);var s=Ss;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+je(l)+'"][href="'+je(e)+'"]',m=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ms(e)}if(!ci.has(m)&&(e=g({rel:"modulepreload",href:e},i),ci.set(m,e),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xo(m)))return}l=s.createElement("link"),Cn(l,"link",e),on(l),s.head.appendChild(l)}}}function HE(e,i,s){ia.S(e,i,s);var l=Ss;if(l&&e){var u=Sa(l).hoistableStyles,m=Es(e);i=i||"default";var E=u.get(m);if(!E){var A={loading:0,preload:null};if(E=l.querySelector(ko(m)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=ci.get(m))&&bh(e,s);var B=E=l.createElement("link");on(B),Cn(B,"link",e),B._p=new Promise(function(et,dt){B.onload=et,B.onerror=dt}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ac(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:A},u.set(m,E)}}}function GE(e,i){ia.X(e,i);var s=Ss;if(s&&e){var l=Sa(s).hoistableScripts,u=Ms(e),m=l.get(u);m||(m=s.querySelector(Xo(u)),m||(e=g({src:e,async:!0},i),(i=ci.get(u))&&Ah(e,i),m=s.createElement("script"),on(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(u,m))}}function VE(e,i){ia.M(e,i);var s=Ss;if(s&&e){var l=Sa(s).hoistableScripts,u=Ms(e),m=l.get(u);m||(m=s.querySelector(Xo(u)),m||(e=g({src:e,async:!0,type:"module"},i),(i=ci.get(u))&&Ah(e,i),m=s.createElement("script"),on(m),Cn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(u,m))}}function Sv(e,i,s,l){var u=(u=Tt.current)?bc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Es(s.href),s=Sa(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Es(s.href);var m=Sa(u).hoistableStyles,E=m.get(e);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=u.querySelector(ko(e)))&&!m._p&&(E.instance=m,E.state.loading=5),ci.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ci.set(e,s),m||kE(u,e,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ms(s),s=Sa(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Es(e){return'href="'+je(e)+'"'}function ko(e){return'link[rel="stylesheet"]['+e+"]"}function Ev(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function kE(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Cn(i,"link",s),on(i),e.head.appendChild(i))}function Ms(e){return'[src="'+je(e)+'"]'}function Xo(e){return"script[async]"+e}function Mv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+je(s.href)+'"]');if(l)return i.instance=l,on(l),l;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),on(l),Cn(l,"style",u),Ac(l,s.precedence,e),i.instance=l;case"stylesheet":u=Es(s.href);var m=e.querySelector(ko(u));if(m)return i.state.loading|=4,i.instance=m,on(m),m;l=Ev(s),(u=ci.get(u))&&bh(l,u),m=(e.ownerDocument||e).createElement("link"),on(m);var E=m;return E._p=new Promise(function(A,B){E.onload=A,E.onerror=B}),Cn(m,"link",l),i.state.loading|=4,Ac(m,s.precedence,e),i.instance=m;case"script":return m=Ms(s.src),(u=e.querySelector(Xo(m)))?(i.instance=u,on(u),u):(l=s,(u=ci.get(m))&&(l=g({},s),Ah(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),on(u),Cn(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ac(l,s.precedence,e));return i.instance}function Ac(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,m=u,E=0;E<l.length;E++){var A=l[E];if(A.dataset.precedence===i)m=A;else if(m!==u)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function bh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ah(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Rc=null;function Tv(e,i,s){if(Rc===null){var l=new Map,u=Rc=new Map;u.set(s,l)}else u=Rc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var m=s[u];if(!(m[xa]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var A=l.get(E);A?A.push(m):l.set(E,[m])}}return l}function bv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function XE(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Av(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Wo=null;function WE(){}function jE(e,i,s){if(Wo===null)throw Error(r(475));var l=Wo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=Es(s.href),m=e.querySelector(ko(u));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Cc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=m,on(m);return}m=e.ownerDocument||e,s=Ev(s),(u=ci.get(u))&&bh(s,u),m=m.createElement("link"),on(m);var E=m;E._p=new Promise(function(A,B){E.onload=A,E.onerror=B}),Cn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Cc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function YE(){if(Wo===null)throw Error(r(475));var e=Wo;return e.stylesheets&&e.count===0&&Rh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Rh(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)Rh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wc=null;function Rh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wc=new Map,i.forEach(qE,e),wc=null,Cc.call(e))}function qE(e,i){if(!(i.state.loading&4)){var s=wc.get(e);if(s)var l=s.get(null);else{s=new Map,wc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<u.length;m++){var E=u[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}u=i.instance,E=u.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,u),s.set(E,u),this.count++,l=Cc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),m?m.parentNode.insertBefore(u,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var jo={$$typeof:w,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function ZE(e,i,s,l,u,m,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Rv(e,i,s,l,u,m,E,A,B,et,dt,vt){return e=new ZE(e,i,s,E,A,B,et,vt),i=1,m===!0&&(i|=24),m=Zn(3,null,null,i),e.current=m,m.stateNode=e,i=lf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},hf(m),e}function Cv(e){return e?(e=ts,e):ts}function wv(e,i,s,l,u,m){u=Cv(u),l.context===null?l.context=u:l.pendingContext=u,l=Aa(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Ra(e,l,i),s!==null&&(ti(s,e,i),Eo(s,e,i))}function Dv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Ch(e,i){Dv(e,i),(e=e.alternate)&&Dv(e,i)}function Uv(e){if(e.tag===13){var i=Jr(e,67108864);i!==null&&ti(i,e,67108864),Ch(e,67108864)}}var Dc=!0;function KE(e,i,s,l){var u=I.T;I.T=null;var m=Y.p;try{Y.p=2,wh(e,i,s,l)}finally{Y.p=m,I.T=u}}function QE(e,i,s,l){var u=I.T;I.T=null;var m=Y.p;try{Y.p=8,wh(e,i,s,l)}finally{Y.p=m,I.T=u}}function wh(e,i,s,l){if(Dc){var u=Dh(l);if(u===null)gh(e,i,l,Uc,s),Nv(e,l);else if(JE(u,e,i,s,l))l.stopPropagation();else if(Nv(e,l),i&4&&-1<$E.indexOf(e)){for(;u!==null;){var m=Hi(u);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Yt(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var B=1<<31-It(E);A.entanglements[1]|=B,E&=~B}wi(m),(Ie&6)===0&&(pc=le()+500,Fo(0))}}break;case 13:A=Jr(m,2),A!==null&&ti(A,m,2),gc(),Ch(m,2)}if(m=Dh(l),m===null&&gh(e,i,l,Uc,s),m===u)break;u=m}u!==null&&l.stopPropagation()}else gh(e,i,l,null,s)}}function Dh(e){return e=Ou(e),Uh(e)}var Uc=null;function Uh(e){if(Uc=null,e=Fi(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Uc=e,null}function Lv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case Se:return 2;case Kt:return 8;case re:case an:return 32;case O:return 268435456;default:return 32}default:return 32}}var Lh=!1,Ha=null,Ga=null,Va=null,Yo=new Map,qo=new Map,ka=[],$E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(e,i){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function Zo(e,i,s,l,u,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[u]},i!==null&&(i=Hi(i),i!==null&&Uv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function JE(e,i,s,l,u){switch(i){case"focusin":return Ha=Zo(Ha,e,i,s,l,u),!0;case"dragenter":return Ga=Zo(Ga,e,i,s,l,u),!0;case"mouseover":return Va=Zo(Va,e,i,s,l,u),!0;case"pointerover":var m=u.pointerId;return Yo.set(m,Zo(Yo.get(m)||null,e,i,s,l,u)),!0;case"gotpointercapture":return m=u.pointerId,qo.set(m,Zo(qo.get(m)||null,e,i,s,l,u)),!0}return!1}function Ov(e){var i=Fi(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,Yn(e.priority,function(){if(s.tag===13){var l=Jn();l=ie(l);var u=Jr(s,l);u!==null&&ti(u,s,l),Ch(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Dh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Nu=l,s.target.dispatchEvent(l),Nu=null}else return i=Hi(s),i!==null&&Uv(i),e.blockedOn=s,!1;i.shift()}return!0}function Pv(e,i,s){Lc(e)&&s.delete(i)}function tM(){Lh=!1,Ha!==null&&Lc(Ha)&&(Ha=null),Ga!==null&&Lc(Ga)&&(Ga=null),Va!==null&&Lc(Va)&&(Va=null),Yo.forEach(Pv),qo.forEach(Pv)}function Nc(e,i){e.blockedOn===i&&(e.blockedOn=null,Lh||(Lh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,tM)))}var Oc=null;function Iv(e){Oc!==e&&(Oc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Oc===e&&(Oc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(Uh(l||s)===null)continue;break}var m=Hi(s);m!==null&&(e.splice(i,3),i-=3,Uf(m,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Ko(e){function i(B){return Nc(B,e)}Ha!==null&&Nc(Ha,e),Ga!==null&&Nc(Ga,e),Va!==null&&Nc(Va,e),Yo.forEach(i),qo.forEach(i);for(var s=0;s<ka.length;s++){var l=ka[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ka.length&&(s=ka[0],s.blockedOn===null);)Ov(s),s.blockedOn===null&&ka.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],m=s[l+1],E=u[Tn]||null;if(typeof m=="function")E||Iv(s);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(u=m,E=m[Tn]||null)A=E.formAction;else if(Uh(u)!==null)continue}else A=E.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Iv(s)}}}function Nh(e){this._internalRoot=e}Pc.prototype.render=Nh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Jn();wv(s,l,e,i,null,null)},Pc.prototype.unmount=Nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;wv(e.current,2,null,e,null,null),gc(),i[Hn]=null}};function Pc(e){this._internalRoot=e}Pc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Re();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ka.length&&i!==0&&i<ka[s].priority;s++);ka.splice(s,0,e),s===0&&Ov(e)}};var Bv=t.version;if(Bv!=="19.1.0")throw Error(r(527,Bv,"19.1.0"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var eM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{mt=Ic.inject(eM),_t=Ic}catch{}}return $o.createRoot=function(e,i){if(!o(e))throw Error(r(299));var s=!1,l="",u=Jg,m=t_,E=e_,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=Rv(e,1,!1,null,null,s,l,u,m,E,A,null),e[Hn]=i.current,mh(e),new Nh(i)},$o.hydrateRoot=function(e,i,s){if(!o(e))throw Error(r(299));var l=!1,u="",m=Jg,E=t_,A=e_,B=null,et=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(B=s.unstable_transitionCallbacks),s.formState!==void 0&&(et=s.formState)),i=Rv(e,1,!0,i,s??null,l,u,m,E,A,B,et),i.context=Cv(null),s=i.current,l=Jn(),l=ie(l),u=Aa(l),u.callback=null,Ra(s,u,l),s=l,i.current.lanes=s,zt(i,s),wi(i),e[Hn]=i.current,mh(e),new Pc(i)},$o.version="19.1.0",$o}var Yv;function uM(){if(Yv)return Ih.exports;Yv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Ih.exports=cM(),Ih.exports}var fM=uM(),Jo={},qv;function hM(){if(qv)return Jo;qv=1,Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.parse=f,Jo.serialize=p;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,S){const M=new c,b=v.length;if(b<2)return M;const y=(S==null?void 0:S.decode)||g;let x=0;do{const L=v.indexOf("=",x);if(L===-1)break;const w=v.indexOf(";",x),C=w===-1?b:w;if(L>C){x=v.lastIndexOf(";",L-1)+1;continue}const F=h(v,x,L),G=d(v,L,F),z=v.slice(F,G);if(M[z]===void 0){let j=h(v,L+1,C),U=d(v,C,j);const D=y(v.slice(j,U));M[z]=D}x=C+1}while(x<b);return M}function h(v,S,M){do{const b=v.charCodeAt(S);if(b!==32&&b!==9)return S}while(++S<M);return M}function d(v,S,M){for(;S>M;){const b=v.charCodeAt(--S);if(b!==32&&b!==9)return S+1}return M}function p(v,S,M){const b=(M==null?void 0:M.encode)||encodeURIComponent;if(!a.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=b(S);if(!t.test(y))throw new TypeError(`argument val is invalid: ${S}`);let x=v+"="+y;if(!M)return x;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);x+="; Max-Age="+M.maxAge}if(M.domain){if(!n.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);x+="; Domain="+M.domain}if(M.path){if(!r.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);x+="; Path="+M.path}if(M.expires){if(!_(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);x+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(x+="; HttpOnly"),M.secure&&(x+="; Secure"),M.partitioned&&(x+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return x}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function _(v){return o.call(v)==="[object Date]"}return Jo}hM();var Zv="popstate";function dM(a={}){function t(o,c){let{pathname:f="/",search:h="",hash:d=""}=Xr(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ud("",{pathname:f,search:h,hash:d},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let f=o.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let d=o.location.href,p=d.indexOf("#");h=p===-1?d:d.slice(0,p)}return h+"#"+(typeof c=="string"?c:fl(c))}function r(o,c){Mi(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return mM(t,n,r,a)}function Qe(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function Mi(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pM(){return Math.random().toString(36).substring(2,10)}function Kv(a,t){return{usr:a.state,key:a.key,idx:t}}function Ud(a,t,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof t=="string"?Xr(t):t,state:n,key:t&&t.key||r||pM()}}function fl({pathname:a="/",search:t="",hash:n=""}){return t&&t!=="?"&&(a+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Xr(a){let t={};if(a){let n=a.indexOf("#");n>=0&&(t.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(t.search=a.substring(r),a=a.substring(0,r)),a&&(t.pathname=a)}return t}function mM(a,t,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,f=o.history,h="POP",d=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let y=g(),x=y==null?null:y-p;p=y,d&&d({action:h,location:b.location,delta:x})}function v(y,x){h="PUSH";let L=Ud(b.location,y,x);n&&n(L,y),p=g()+1;let w=Kv(L,p),C=b.createHref(L);try{f.pushState(w,"",C)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;o.location.assign(C)}c&&d&&d({action:h,location:b.location,delta:1})}function S(y,x){h="REPLACE";let L=Ud(b.location,y,x);n&&n(L,y),p=g();let w=Kv(L,p),C=b.createHref(L);f.replaceState(w,"",C),c&&d&&d({action:h,location:b.location,delta:0})}function M(y){return gM(y)}let b={get action(){return h},get location(){return a(o,f)},listen(y){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Zv,_),d=y,()=>{o.removeEventListener(Zv,_),d=null}},createHref(y){return t(o,y)},createURL:M,encodeLocation(y){let x=M(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return f.go(y)}};return b}function gM(a,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:fl(a);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Mx(a,t,n="/"){return _M(a,t,n,!1)}function _M(a,t,n,r){let o=typeof t=="string"?Xr(t):t,c=_a(o.pathname||"/",n);if(c==null)return null;let f=Tx(a);vM(f);let h=null;for(let d=0;h==null&&d<f.length;++d){let p=wM(c);h=RM(f[d],p,r)}return h}function Tx(a,t=[],n=[],r=""){let o=(c,f,h)=>{let d={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};d.relativePath.startsWith("/")&&(Qe(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length));let p=pa([r,d.relativePath]),g=n.concat(d);c.children&&c.children.length>0&&(Qe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Tx(c.children,t,g,p)),!(c.path==null&&!c.index)&&t.push({path:p,score:bM(p,c.index),routesMeta:g})};return a.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))o(c,f);else for(let d of bx(c.path))o(c,f,d)}),t}function bx(a){let t=a.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let f=bx(r.join("/")),h=[];return h.push(...f.map(d=>d===""?c:[c,d].join("/"))),o&&h.push(...f),h.map(d=>a.startsWith("/")&&d===""?"/":d)}function vM(a){a.sort((t,n)=>t.score!==n.score?n.score-t.score:AM(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var xM=/^:[\w-]+$/,yM=3,SM=2,EM=1,MM=10,TM=-2,Qv=a=>a==="*";function bM(a,t){let n=a.split("/"),r=n.length;return n.some(Qv)&&(r+=TM),t&&(r+=SM),n.filter(o=>!Qv(o)).reduce((o,c)=>o+(xM.test(c)?yM:c===""?EM:MM),r)}function AM(a,t){return a.length===t.length&&a.slice(0,-1).every((r,o)=>r===t[o])?a[a.length-1]-t[t.length-1]:0}function RM(a,t,n=!1){let{routesMeta:r}=a,o={},c="/",f=[];for(let h=0;h<r.length;++h){let d=r[h],p=h===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",_=mu({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},g),v=d.route;if(!_&&p&&n&&!r[r.length-1].route.index&&(_=mu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),f.push({params:o,pathname:pa([c,_.pathname]),pathnameBase:NM(pa([c,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(c=pa([c,_.pathnameBase]))}return f}function mu(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=CM(a.path,a.caseSensitive,a.end),o=t.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},v)=>{if(g==="*"){let M=h[v]||"";f=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const S=h[v];return _&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:a}}function CM(a,t=!1,n=!0){Mi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,d)=>(r.push({paramName:h,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function wM(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),a}}function _a(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function DM(a,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?Xr(a):a;return{pathname:n?n.startsWith("/")?n:UM(n,t):t,search:OM(r),hash:PM(o)}}function UM(a,t){let n=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Hh(a,t,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function LM(a){return a.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ax(a){let t=LM(a);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Rx(a,t,n,r=!1){let o;typeof a=="string"?o=Xr(a):(o={...a},Qe(!o.pathname||!o.pathname.includes("?"),Hh("?","pathname","search",o)),Qe(!o.pathname||!o.pathname.includes("#"),Hh("#","pathname","hash",o)),Qe(!o.search||!o.search.includes("#"),Hh("#","search","hash",o)));let c=a===""||o.pathname==="",f=c?"/":o.pathname,h;if(f==null)h=n;else{let _=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}h=_>=0?t[_]:"/"}let d=DM(o,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(p||g)&&(d.pathname+="/"),d}var pa=a=>a.join("/").replace(/\/\/+/g,"/"),NM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),OM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,PM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function IM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Cx=["POST","PUT","PATCH","DELETE"];new Set(Cx);var BM=["GET",...Cx];new Set(BM);var eo=P.createContext(null);eo.displayName="DataRouter";var Su=P.createContext(null);Su.displayName="DataRouterState";var wx=P.createContext({isTransitioning:!1});wx.displayName="ViewTransition";var zM=P.createContext(new Map);zM.displayName="Fetchers";var FM=P.createContext(null);FM.displayName="Await";var Bi=P.createContext(null);Bi.displayName="Navigation";var vl=P.createContext(null);vl.displayName="Location";var zi=P.createContext({outlet:null,matches:[],isDataRoute:!1});zi.displayName="Route";var Dp=P.createContext(null);Dp.displayName="RouteError";function HM(a,{relative:t}={}){Qe(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=P.useContext(Bi),{hash:o,pathname:c,search:f}=yl(a,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:pa([n,c])),r.createHref({pathname:h,search:f,hash:o})}function xl(){return P.useContext(vl)!=null}function Wr(){return Qe(xl(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(vl).location}var Dx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ux(a){P.useContext(Bi).static||P.useLayoutEffect(a)}function Up(){let{isDataRoute:a}=P.useContext(zi);return a?tT():GM()}function GM(){Qe(xl(),"useNavigate() may be used only in the context of a <Router> component.");let a=P.useContext(eo),{basename:t,navigator:n}=P.useContext(Bi),{matches:r}=P.useContext(zi),{pathname:o}=Wr(),c=JSON.stringify(Ax(r)),f=P.useRef(!1);return Ux(()=>{f.current=!0}),P.useCallback((d,p={})=>{if(Mi(f.current,Dx),!f.current)return;if(typeof d=="number"){n.go(d);return}let g=Rx(d,JSON.parse(c),o,p.relative==="path");a==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:pa([t,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[t,n,c,o,a])}P.createContext(null);function VM(){let{matches:a}=P.useContext(zi),t=a[a.length-1];return t?t.params:{}}function yl(a,{relative:t}={}){let{matches:n}=P.useContext(zi),{pathname:r}=Wr(),o=JSON.stringify(Ax(n));return P.useMemo(()=>Rx(a,JSON.parse(o),r,t==="path"),[a,o,r,t])}function kM(a,t){return Lx(a,t)}function Lx(a,t,n,r){var L;Qe(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:c}=P.useContext(Bi),{matches:f}=P.useContext(zi),h=f[f.length-1],d=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let w=_&&_.path||"";Nx(p,!_||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let v=Wr(),S;if(t){let w=typeof t=="string"?Xr(t):t;Qe(g==="/"||((L=w.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),S=w}else S=v;let M=S.pathname||"/",b=M;if(g!=="/"){let w=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=!c&&n&&n.matches&&n.matches.length>0?n.matches:Mx(a,{pathname:b});Mi(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=qM(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},d,w.params),pathname:pa([g,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:pa([g,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),f,n,r);return t&&x?P.createElement(vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function XM(){let a=JM(),t=IM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:c},"ErrorBoundary")," or"," ",P.createElement("code",{style:c},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:o},n):null,f)}var WM=P.createElement(XM,null),jM=class extends P.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,t){return t.location!==a.location||t.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:t.error,location:t.location,revalidation:a.revalidation||t.revalidation}}componentDidCatch(a,t){console.error("React Router caught the following error during render",a,t)}render(){return this.state.error!==void 0?P.createElement(zi.Provider,{value:this.props.routeContext},P.createElement(Dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function YM({routeContext:a,match:t,children:n}){let r=P.useContext(eo);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),P.createElement(zi.Provider,{value:a},n)}function qM(a,t=[],n=null,r=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let o=a,c=n==null?void 0:n.errors;if(c!=null){let d=o.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);Qe(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let f=!1,h=-1;if(n)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=d),p.route.id){let{loaderData:g,errors:_}=n,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||v){f=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let _,v=!1,S=null,M=null;n&&(_=c&&p.route.id?c[p.route.id]:void 0,S=p.route.errorElement||WM,f&&(h<0&&g===0?(Nx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,M=null):h===g&&(v=!0,M=p.route.hydrateFallbackElement||null)));let b=t.concat(o.slice(0,g+1)),y=()=>{let x;return _?x=S:v?x=M:p.route.Component?x=P.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,P.createElement(YM,{match:p,routeContext:{outlet:d,matches:b,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?P.createElement(jM,{location:n.location,revalidation:n.revalidation,component:S,error:_,children:y(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):y()},null)}function Lp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ZM(a){let t=P.useContext(eo);return Qe(t,Lp(a)),t}function KM(a){let t=P.useContext(Su);return Qe(t,Lp(a)),t}function QM(a){let t=P.useContext(zi);return Qe(t,Lp(a)),t}function Np(a){let t=QM(a),n=t.matches[t.matches.length-1];return Qe(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function $M(){return Np("useRouteId")}function JM(){var r;let a=P.useContext(Dp),t=KM("useRouteError"),n=Np("useRouteError");return a!==void 0?a:(r=t.errors)==null?void 0:r[n]}function tT(){let{router:a}=ZM("useNavigate"),t=Np("useNavigate"),n=P.useRef(!1);return Ux(()=>{n.current=!0}),P.useCallback(async(o,c={})=>{Mi(n.current,Dx),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:t,...c}))},[a,t])}var $v={};function Nx(a,t,n){!t&&!$v[a]&&($v[a]=!0,Mi(!1,n))}P.memo(eT);function eT({routes:a,future:t,state:n}){return Lx(a,void 0,n,t)}function Xs(a){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nT({basename:a="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:c=!1}){Qe(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=P.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=Xr(n));let{pathname:d="/",search:p="",hash:g="",state:_=null,key:v="default"}=n,S=P.useMemo(()=>{let M=_a(d,f);return M==null?null:{location:{pathname:M,search:p,hash:g,state:_,key:v},navigationType:r}},[f,d,p,g,_,v,r]);return Mi(S!=null,`<Router basename="${f}"> is not able to match the URL "${d}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:P.createElement(Bi.Provider,{value:h},P.createElement(vl.Provider,{children:t,value:S}))}function Ox({children:a,location:t}){return kM(Ld(a),t)}function Ld(a,t=[]){let n=[];return P.Children.forEach(a,(r,o)=>{if(!P.isValidElement(r))return;let c=[...t,o];if(r.type===P.Fragment){n.push.apply(n,Ld(r.props.children,c));return}Qe(r.type===Xs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Ld(r.props.children,c)),n.push(f)}),n}var ou="get",lu="application/x-www-form-urlencoded";function Eu(a){return a!=null&&typeof a.tagName=="string"}function iT(a){return Eu(a)&&a.tagName.toLowerCase()==="button"}function aT(a){return Eu(a)&&a.tagName.toLowerCase()==="form"}function rT(a){return Eu(a)&&a.tagName.toLowerCase()==="input"}function sT(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function oT(a,t){return a.button===0&&(!t||t==="_self")&&!sT(a)}var Bc=null;function lT(){if(Bc===null)try{new FormData(document.createElement("form"),0),Bc=!1}catch{Bc=!0}return Bc}var cT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gh(a){return a!=null&&!cT.has(a)?(Mi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lu}"`),null):a}function uT(a,t){let n,r,o,c,f;if(aT(a)){let h=a.getAttribute("action");r=h?_a(h,t):null,n=a.getAttribute("method")||ou,o=Gh(a.getAttribute("enctype"))||lu,c=new FormData(a)}else if(iT(a)||rT(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=a.getAttribute("formaction")||h.getAttribute("action");if(r=d?_a(d,t):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||ou,o=Gh(a.getAttribute("formenctype"))||Gh(h.getAttribute("enctype"))||lu,c=new FormData(h,a),!lT()){let{name:p,type:g,value:_}=a;if(g==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,_)}}else{if(Eu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ou,r=null,o=lu,f=a}return c&&o==="text/plain"&&(f=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:f}}function Op(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}async function fT(a,t){if(a.id in t)return t[a.id];try{let n=await import(a.module);return t[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hT(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function dT(a,t,n){let r=await Promise.all(a.map(async o=>{let c=t.routes[o.route.id];if(c){let f=await fT(c,n);return f.links?f.links():[]}return[]}));return _T(r.flat(1).filter(hT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Jv(a,t,n,r,o,c){let f=(d,p)=>n[p]?d.route.id!==n[p].route.id:!0,h=(d,p)=>{var g;return n[p].pathname!==d.pathname||((g=n[p].route.path)==null?void 0:g.endsWith("*"))&&n[p].params["*"]!==d.params["*"]};return c==="assets"?t.filter((d,p)=>f(d,p)||h(d,p)):c==="data"?t.filter((d,p)=>{var _;let g=r.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(f(d,p)||h(d,p))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(a,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function pT(a,t,{includeHydrateFallback:n}={}){return mT(a.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function mT(a){return[...new Set(a)]}function gT(a){let t={},n=Object.keys(a).sort();for(let r of n)t[r]=a[r];return t}function _T(a,t){let n=new Set;return new Set(t),a.reduce((r,o)=>{let c=JSON.stringify(gT(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vT=new Set([100,101,204,205]);function xT(a,t){let n=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n.pathname==="/"?n.pathname="_root.data":t&&_a(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Px(){let a=P.useContext(eo);return Op(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function yT(){let a=P.useContext(Su);return Op(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Pp=P.createContext(void 0);Pp.displayName="FrameworkContext";function Ix(){let a=P.useContext(Pp);return Op(a,"You must render this element inside a <HydratedRouter> element"),a}function ST(a,t){let n=P.useContext(Pp),[r,o]=P.useState(!1),[c,f]=P.useState(!1),{onFocus:h,onBlur:d,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=t,v=P.useRef(null);P.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let b=x=>{x.forEach(L=>{f(L.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[a]),P.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{o(!0)},M=()=>{o(!1),f(!1)};return n?a!=="intent"?[c,v,{}]:[c,v,{onFocus:tl(h,S),onBlur:tl(d,M),onMouseEnter:tl(p,S),onMouseLeave:tl(g,M),onTouchStart:tl(_,S)}]:[!1,v,{}]}function tl(a,t){return n=>{a&&a(n),n.defaultPrevented||t(n)}}function ET({page:a,...t}){let{router:n}=Px(),r=P.useMemo(()=>Mx(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?P.createElement(TT,{page:a,matches:r,...t}):null}function MT(a){let{manifest:t,routeModules:n}=Ix(),[r,o]=P.useState([]);return P.useEffect(()=>{let c=!1;return dT(a,t,n).then(f=>{c||o(f)}),()=>{c=!0}},[a,t,n]),r}function TT({page:a,matches:t,...n}){let r=Wr(),{manifest:o,routeModules:c}=Ix(),{basename:f}=Px(),{loaderData:h,matches:d}=yT(),p=P.useMemo(()=>Jv(a,t,d,o,r,"data"),[a,t,d,o,r]),g=P.useMemo(()=>Jv(a,t,d,o,r,"assets"),[a,t,d,o,r]),_=P.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,b=!1;if(t.forEach(x=>{var w;let L=o.routes[x.route.id];!L||!L.hasLoader||(!p.some(C=>C.route.id===x.route.id)&&x.route.id in h&&((w=c[x.route.id])!=null&&w.shouldRevalidate)||L.hasClientLoader?b=!0:M.add(x.route.id))}),M.size===0)return[];let y=xT(a,f);return b&&M.size>0&&y.searchParams.set("_routes",t.filter(x=>M.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[f,h,r,o,p,t,a,c]),v=P.useMemo(()=>pT(g,o),[g,o]),S=MT(g);return P.createElement(P.Fragment,null,_.map(M=>P.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),v.map(M=>P.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),S.map(({key:M,link:b})=>P.createElement("link",{key:M,...b})))}function bT(...a){return t=>{a.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bx&&(window.__reactRouterVersion="7.6.0")}catch{}function AT({basename:a,children:t,window:n}){let r=P.useRef();r.current==null&&(r.current=dM({window:n,v5Compat:!0}));let o=r.current,[c,f]=P.useState({action:o.action,location:o.location}),h=P.useCallback(d=>{P.startTransition(()=>f(d))},[f]);return P.useLayoutEffect(()=>o.listen(h),[o,h]),P.createElement(nT,{basename:a,children:t,location:c.location,navigationType:c.action,navigator:o})}var zx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zs=P.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:f,state:h,target:d,to:p,preventScrollReset:g,viewTransition:_,...v},S){let{basename:M}=P.useContext(Bi),b=typeof p=="string"&&zx.test(p),y,x=!1;if(typeof p=="string"&&b&&(y=p,Bx))try{let U=new URL(window.location.href),D=p.startsWith("//")?new URL(U.protocol+p):new URL(p),H=_a(D.pathname,M);D.origin===U.origin&&H!=null?p=H+D.search+D.hash:x=!0}catch{Mi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=HM(p,{relative:o}),[w,C,F]=ST(r,v),G=DT(p,{replace:f,state:h,target:d,preventScrollReset:g,relative:o,viewTransition:_});function z(U){t&&t(U),U.defaultPrevented||G(U)}let j=P.createElement("a",{...v,...F,href:y||L,onClick:x||c?t:z,ref:bT(S,C),target:d,"data-discover":!b&&n==="render"?"true":void 0});return w&&!b?P.createElement(P.Fragment,null,j,P.createElement(ET,{page:L})):j});Zs.displayName="Link";var RT=P.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:f,viewTransition:h,children:d,...p},g){let _=yl(f,{relative:p.relative}),v=Wr(),S=P.useContext(Su),{navigator:M,basename:b}=P.useContext(Bi),y=S!=null&&PT(_)&&h===!0,x=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,L=v.pathname,w=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(L=L.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&b&&(w=_a(w,b)||w);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let F=L===x||!o&&L.startsWith(x)&&L.charAt(C)==="/",G=w!=null&&(w===x||!o&&w.startsWith(x)&&w.charAt(x.length)==="/"),z={isActive:F,isPending:G,isTransitioning:y},j=F?t:void 0,U;typeof r=="function"?U=r(z):U=[r,F?"active":null,G?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(z):c;return P.createElement(Zs,{...p,"aria-current":j,className:U,ref:g,style:D,to:f,viewTransition:h},typeof d=="function"?d(z):d)});RT.displayName="NavLink";var CT=P.forwardRef(({discover:a="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:c,method:f=ou,action:h,onSubmit:d,relative:p,preventScrollReset:g,viewTransition:_,...v},S)=>{let M=NT(),b=OT(h,{relative:p}),y=f.toLowerCase()==="get"?"get":"post",x=typeof h=="string"&&zx.test(h),L=w=>{if(d&&d(w),w.defaultPrevented)return;w.preventDefault();let C=w.nativeEvent.submitter,F=(C==null?void 0:C.getAttribute("formmethod"))||f;M(C||w.currentTarget,{fetcherKey:t,method:F,navigate:n,replace:o,state:c,relative:p,preventScrollReset:g,viewTransition:_})};return P.createElement("form",{ref:S,method:y,action:b,onSubmit:r?d:L,...v,"data-discover":!x&&a==="render"?"true":void 0})});CT.displayName="Form";function wT(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fx(a){let t=P.useContext(eo);return Qe(t,wT(a)),t}function DT(a,{target:t,replace:n,state:r,preventScrollReset:o,relative:c,viewTransition:f}={}){let h=Up(),d=Wr(),p=yl(a,{relative:c});return P.useCallback(g=>{if(oT(g,t)){g.preventDefault();let _=n!==void 0?n:fl(d)===fl(p);h(a,{replace:_,state:r,preventScrollReset:o,relative:c,viewTransition:f})}},[d,h,p,n,r,t,a,o,c,f])}var UT=0,LT=()=>`__${String(++UT)}__`;function NT(){let{router:a}=Fx("useSubmit"),{basename:t}=P.useContext(Bi),n=$M();return P.useCallback(async(r,o={})=>{let{action:c,method:f,encType:h,formData:d,body:p}=uT(r,t);if(o.navigate===!1){let g=o.fetcherKey||LT();await a.fetch(g,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await a.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:d,body:p,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,t,n])}function OT(a,{relative:t}={}){let{basename:n}=P.useContext(Bi),r=P.useContext(zi);Qe(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...yl(a||".",{relative:t})},f=Wr();if(a==null){c.search=f.search;let h=new URLSearchParams(c.search),d=h.getAll("index");if(d.some(g=>g==="")){h.delete("index"),d.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();c.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:pa([n,c.pathname])),fl(c)}function PT(a,t={}){let n=P.useContext(wx);Qe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fx("useViewTransitionState"),o=yl(a,{relative:t.relative});if(!n.isTransitioning)return!1;let c=_a(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=_a(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mu(o.pathname,f)!=null||mu(o.pathname,c)!=null}[...vT];var IT=Ex();const Gs=yu(IT);var Vh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var t0;function BT(){return t0||(t0=1,function(a){(function(){var t={}.hasOwnProperty;function n(){for(var c="",f=0;f<arguments.length;f++){var h=arguments[f];h&&(c=o(c,r(h)))}return c}function r(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return n.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var f="";for(var h in c)t.call(c,h)&&c[h]&&(f=o(f,h));return f}function o(c,f){return f?c?c+" "+f:c+f:c}a.exports?(n.default=n,a.exports=n):window.classNames=n})()}(Vh)),Vh.exports}var zT=BT();const Oe=yu(zT);function Nd(){return Nd=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},Nd.apply(null,arguments)}function Hx(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)!==-1)continue;n[r]=a[r]}return n}function e0(a){return"default"+a.charAt(0).toUpperCase()+a.substr(1)}function FT(a){var t=HT(a,"string");return typeof t=="symbol"?t:String(t)}function HT(a,t){if(typeof a!="object"||a===null)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function GT(a,t,n){var r=P.useRef(a!==void 0),o=P.useState(t),c=o[0],f=o[1],h=a!==void 0,d=r.current;return r.current=h,!h&&d&&c!==t&&f(t),[h?a:c,P.useCallback(function(p){for(var g=arguments.length,_=new Array(g>1?g-1:0),v=1;v<g;v++)_[v-1]=arguments[v];n&&n.apply(void 0,[p].concat(_)),f(p)},[n])]}function Gx(a,t){return Object.keys(t).reduce(function(n,r){var o,c=n,f=c[e0(r)],h=c[r],d=Hx(c,[e0(r),r].map(FT)),p=t[r],g=GT(h,f,a[p]),_=g[0],v=g[1];return Nd({},d,(o={},o[r]=_,o[p]=v,o))},a)}function Od(a,t){return Od=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Od(a,t)}function VT(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,Od(a,t)}const kT=["xxl","xl","lg","md","sm","xs"],XT="xs",Mu=P.createContext({prefixes:{},breakpoints:kT,minBreakpoint:XT}),{Consumer:SU,Provider:EU}=Mu;function qe(a,t){const{prefixes:n}=P.useContext(Mu);return a||n[t]||t}function Vx(){const{breakpoints:a}=P.useContext(Mu);return a}function kx(){const{minBreakpoint:a}=P.useContext(Mu);return a}function Ip(a){return a&&a.ownerDocument||document}function WT(a){var t=Ip(a);return t&&t.defaultView||window}function jT(a,t){return WT(a).getComputedStyle(a,t)}var YT=/([A-Z])/g;function qT(a){return a.replace(YT,"-$1").toLowerCase()}var ZT=/^ms-/;function zc(a){return qT(a).replace(ZT,"-ms-")}var KT=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function QT(a){return!!(a&&KT.test(a))}function Hr(a,t){var n="",r="";if(typeof t=="string")return a.style.getPropertyValue(zc(t))||jT(a).getPropertyValue(zc(t));Object.keys(t).forEach(function(o){var c=t[o];!c&&c!==0?a.style.removeProperty(zc(o)):QT(o)?r+=o+"("+c+") ":n+=zc(o)+": "+c+";"}),r&&(n+="transform: "+r+";"),a.style.cssText+=";"+n}var kh={exports:{}},Xh,n0;function $T(){if(n0)return Xh;n0=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Xh=a,Xh}var Wh,i0;function JT(){if(i0)return Wh;i0=1;var a=$T();function t(){}function n(){}return n.resetWarningCache=t,Wh=function(){function r(f,h,d,p,g,_){if(_!==a){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var c={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return c.PropTypes=c,c},Wh}var a0;function tb(){return a0||(a0=1,kh.exports=JT()()),kh.exports}var eb=tb();const $a=yu(eb),r0={disabled:!1},Xx=Br.createContext(null);var nb=function(t){return t.scrollTop},rl="unmounted",Ur="exited",Di="entering",Ja="entered",gu="exiting",va=function(a){VT(t,a);function t(r,o){var c;c=a.call(this,r,o)||this;var f=o,h=f&&!f.isMounting?r.enter:r.appear,d;return c.appearStatus=null,r.in?h?(d=Ur,c.appearStatus=Di):d=Ja:r.unmountOnExit||r.mountOnEnter?d=rl:d=Ur,c.state={status:d},c.nextCallback=null,c}t.getDerivedStateFromProps=function(o,c){var f=o.in;return f&&c.status===rl?{status:Ur}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var c=null;if(o!==this.props){var f=this.state.status;this.props.in?f!==Di&&f!==Ja&&(c=Di):(f===Di||f===Ja)&&(c=gu)}this.updateStatus(!1,c)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,c,f,h;return c=f=h=o,o!=null&&typeof o!="number"&&(c=o.exit,f=o.enter,h=o.appear!==void 0?o.appear:f),{exit:c,enter:f,appear:h}},n.updateStatus=function(o,c){if(o===void 0&&(o=!1),c!==null)if(this.cancelNextCallback(),c===Di){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:Gs.findDOMNode(this);f&&nb(f)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ur&&this.setState({status:rl})},n.performEnter=function(o){var c=this,f=this.props.enter,h=this.context?this.context.isMounting:o,d=this.props.nodeRef?[h]:[Gs.findDOMNode(this),h],p=d[0],g=d[1],_=this.getTimeouts(),v=h?_.appear:_.enter;if(!o&&!f||r0.disabled){this.safeSetState({status:Ja},function(){c.props.onEntered(p)});return}this.props.onEnter(p,g),this.safeSetState({status:Di},function(){c.props.onEntering(p,g),c.onTransitionEnd(v,function(){c.safeSetState({status:Ja},function(){c.props.onEntered(p,g)})})})},n.performExit=function(){var o=this,c=this.props.exit,f=this.getTimeouts(),h=this.props.nodeRef?void 0:Gs.findDOMNode(this);if(!c||r0.disabled){this.safeSetState({status:Ur},function(){o.props.onExited(h)});return}this.props.onExit(h),this.safeSetState({status:gu},function(){o.props.onExiting(h),o.onTransitionEnd(f.exit,function(){o.safeSetState({status:Ur},function(){o.props.onExited(h)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,c){c=this.setNextCallback(c),this.setState(o,c)},n.setNextCallback=function(o){var c=this,f=!0;return this.nextCallback=function(h){f&&(f=!1,c.nextCallback=null,o(h))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},n.onTransitionEnd=function(o,c){this.setNextCallback(c);var f=this.props.nodeRef?this.props.nodeRef.current:Gs.findDOMNode(this),h=o==null&&!this.props.addEndListener;if(!f||h){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],p=d[0],g=d[1];this.props.addEndListener(p,g)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===rl)return null;var c=this.props,f=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var h=Hx(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Br.createElement(Xx.Provider,{value:null},typeof f=="function"?f(o,h):Br.cloneElement(Br.Children.only(f),h))},t}(Br.Component);va.contextType=Xx;va.propTypes={};function Ts(){}va.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ts,onEntering:Ts,onEntered:Ts,onExit:Ts,onExiting:Ts,onExited:Ts};va.UNMOUNTED=rl;va.EXITED=Ur;va.ENTERING=Di;va.ENTERED=Ja;va.EXITING=gu;function ib(a){return a.code==="Escape"||a.keyCode===27}function ab(){const a=P.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function Sl(a){if(!a||typeof a=="function")return null;const{major:t}=ab();return t>=19?a.props.ref:a.ref}const Tu=!!(typeof window<"u"&&window.document&&window.document.createElement);var Pd=!1,Id=!1;try{var jh={get passive(){return Pd=!0},get once(){return Id=Pd=!0}};Tu&&(window.addEventListener("test",jh,jh),window.removeEventListener("test",jh,!0))}catch{}function rb(a,t,n,r){if(r&&typeof r!="boolean"&&!Id){var o=r.once,c=r.capture,f=n;!Id&&o&&(f=n.__once||function h(d){this.removeEventListener(t,h,c),n.call(this,d)},n.__once=f),a.addEventListener(t,f,Pd?r:c)}a.addEventListener(t,n,r)}function sb(a,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;a.removeEventListener(t,n,o),n.__once&&a.removeEventListener(t,n.__once,o)}function _u(a,t,n,r){return rb(a,t,n,r),function(){sb(a,t,n,r)}}function ob(a,t,n,r){if(r===void 0&&(r=!0),a){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),a.dispatchEvent(o)}}function lb(a){var t=Hr(a,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function cb(a,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||ob(a,"transitionend",!0)},t+n),c=_u(a,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),c()}}function ub(a,t,n,r){n==null&&(n=lb(a)||0);var o=cb(a,n,r),c=_u(a,"transitionend",t);return function(){o(),c()}}function s0(a,t){const n=Hr(a,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Wx(a,t){const n=s0(a,"transitionDuration"),r=s0(a,"transitionDelay"),o=ub(a,c=>{c.target===a&&(o(),t(c))},n+r)}function fb(a){a.offsetHeight}const o0=a=>!a||typeof a=="function"?a:t=>{a.current=t};function hb(a,t){const n=o0(a),r=o0(t);return o=>{n&&n(o),r&&r(o)}}function db(a,t){return P.useMemo(()=>hb(a,t),[a,t])}function pb(a){return a&&"setState"in a?Gs.findDOMNode(a):a??null}const Bp=Br.forwardRef(({onEnter:a,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:c,addEndListener:f,children:h,childRef:d,...p},g)=>{const _=P.useRef(null),v=db(_,d),S=G=>{v(pb(G))},M=G=>z=>{G&&_.current&&G(_.current,z)},b=P.useCallback(M(a),[a]),y=P.useCallback(M(t),[t]),x=P.useCallback(M(n),[n]),L=P.useCallback(M(r),[r]),w=P.useCallback(M(o),[o]),C=P.useCallback(M(c),[c]),F=P.useCallback(M(f),[f]);return $.jsx(va,{ref:g,...p,onEnter:b,onEntered:x,onEntering:y,onExit:L,onExited:C,onExiting:w,addEndListener:F,nodeRef:_,children:typeof h=="function"?(G,z)=>h(G,{...z,ref:S}):Br.cloneElement(h,{ref:S})})});Bp.displayName="TransitionWrapper";function mb(a){const t=P.useRef(a);return P.useEffect(()=>{t.current=a},[a]),t}function zp(a){const t=mb(a);return P.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const Fp=a=>P.forwardRef((t,n)=>$.jsx("div",{...t,ref:n,className:Oe(t.className,a)}));function gb(a){const t=P.useRef(a);return P.useEffect(()=>{t.current=a},[a]),t}function ua(a){const t=gb(a);return P.useCallback(function(...n){return t.current&&t.current(...n)},[t])}function _b(){const a=P.useRef(!0),t=P.useRef(()=>a.current);return P.useEffect(()=>(a.current=!0,()=>{a.current=!1}),[]),t.current}function vb(a){const t=P.useRef(null);return P.useEffect(()=>{t.current=a}),t.current}const xb=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",yb=typeof document<"u",l0=yb||xb?P.useLayoutEffect:P.useEffect,Sb=["as","disabled"];function Eb(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function Mb(a){return!a||a.trim()==="#"}function jx({tagName:a,disabled:t,href:n,target:r,rel:o,role:c,onClick:f,tabIndex:h=0,type:d}){a||(n!=null||r!=null||o!=null?a="a":a="button");const p={tagName:a};if(a==="button")return[{type:d||"button",disabled:t},p];const g=v=>{if((t||a==="a"&&Mb(n))&&v.preventDefault(),t){v.stopPropagation();return}f==null||f(v)},_=v=>{v.key===" "&&(v.preventDefault(),g(v))};return a==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:c??"button",disabled:void 0,tabIndex:t?void 0:h,href:n,target:a==="a"?r:void 0,"aria-disabled":t||void 0,rel:a==="a"?o:void 0,onClick:g,onKeyDown:_},p]}const Yx=P.forwardRef((a,t)=>{let{as:n,disabled:r}=a,o=Eb(a,Sb);const[c,{tagName:f}]=jx(Object.assign({tagName:n,disabled:r},o));return $.jsx(f,Object.assign({},o,c,{ref:t}))});Yx.displayName="Button";const Tb=["onKeyDown"];function bb(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function Ab(a){return!a||a.trim()==="#"}const qx=P.forwardRef((a,t)=>{let{onKeyDown:n}=a,r=bb(a,Tb);const[o]=jx(Object.assign({tagName:"a"},r)),c=ua(f=>{o.onKeyDown(f),n==null||n(f)});return Ab(r.href)||r.role==="button"?$.jsx("a",Object.assign({ref:t},r,o,{onKeyDown:c})):$.jsx("a",Object.assign({ref:t},r,{onKeyDown:n}))});qx.displayName="Anchor";const Rb={[Di]:"show",[Ja]:"show"},Zx=P.forwardRef(({className:a,children:t,transitionClasses:n={},onEnter:r,...o},c)=>{const f={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},h=P.useCallback((d,p)=>{fb(d),r==null||r(d,p)},[r]);return $.jsx(Bp,{ref:c,addEndListener:Wx,...f,onEnter:h,childRef:Sl(t),children:(d,p)=>P.cloneElement(t,{...p,className:Oe("fade",a,t.props.className,Rb[d],n[d])})})});Zx.displayName="Fade";const Cb={"aria-label":$a.string,onClick:$a.func,variant:$a.oneOf(["white"])},Hp=P.forwardRef(({className:a,variant:t,"aria-label":n="Close",...r},o)=>$.jsx("button",{ref:o,type:"button",className:Oe("btn-close",t&&`btn-close-${t}`,a),"aria-label":n,...r}));Hp.displayName="CloseButton";Hp.propTypes=Cb;const Gp=P.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=qe(t,"card-body"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));Gp.displayName="CardBody";const Kx=P.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=qe(t,"card-footer"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));Kx.displayName="CardFooter";const Vp=P.createContext(null);Vp.displayName="CardHeaderContext";const Qx=P.forwardRef(({bsPrefix:a,className:t,as:n="div",...r},o)=>{const c=qe(a,"card-header"),f=P.useMemo(()=>({cardHeaderBsPrefix:c}),[c]);return $.jsx(Vp.Provider,{value:f,children:$.jsx(n,{ref:o,...r,className:Oe(t,c)})})});Qx.displayName="CardHeader";const $x=P.forwardRef(({bsPrefix:a,className:t,variant:n,as:r="img",...o},c)=>{const f=qe(a,"card-img");return $.jsx(r,{ref:c,className:Oe(n?`${f}-${n}`:f,t),...o})});$x.displayName="CardImg";const Jx=P.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=qe(t,"card-img-overlay"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));Jx.displayName="CardImgOverlay";const ty=P.forwardRef(({className:a,bsPrefix:t,as:n="a",...r},o)=>(t=qe(t,"card-link"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));ty.displayName="CardLink";const wb=Fp("h6"),ey=P.forwardRef(({className:a,bsPrefix:t,as:n=wb,...r},o)=>(t=qe(t,"card-subtitle"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));ey.displayName="CardSubtitle";const ny=P.forwardRef(({className:a,bsPrefix:t,as:n="p",...r},o)=>(t=qe(t,"card-text"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));ny.displayName="CardText";const Db=Fp("h5"),iy=P.forwardRef(({className:a,bsPrefix:t,as:n=Db,...r},o)=>(t=qe(t,"card-title"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));iy.displayName="CardTitle";const ay=P.forwardRef(({bsPrefix:a,className:t,bg:n,text:r,border:o,body:c=!1,children:f,as:h="div",...d},p)=>{const g=qe(a,"card");return $.jsx(h,{ref:p,...d,className:Oe(t,g,n&&`bg-${n}`,r&&`text-${r}`,o&&`border-${o}`),children:c?$.jsx(Gp,{children:f}):f})});ay.displayName="Card";const ma=Object.assign(ay,{Img:$x,Title:iy,Subtitle:ey,Body:Gp,Link:ty,Text:ny,Header:Qx,Footer:Kx,ImgOverlay:Jx});function Ub({as:a,bsPrefix:t,className:n,...r}){t=qe(t,"col");const o=Vx(),c=kx(),f=[],h=[];return o.forEach(d=>{const p=r[d];delete r[d];let g,_,v;typeof p=="object"&&p!=null?{span:g,offset:_,order:v}=p:g=p;const S=d!==c?`-${d}`:"";g&&f.push(g===!0?`${t}${S}`:`${t}${S}-${g}`),v!=null&&h.push(`order${S}-${v}`),_!=null&&h.push(`offset${S}-${_}`)}),[{...r,className:Oe(n,...f,...h)},{as:a,bsPrefix:t,spans:f}]}const Bd=P.forwardRef((a,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:c,spans:f}]=Ub(a);return $.jsx(o,{...r,ref:t,className:Oe(n,!f.length&&c)})});Bd.displayName="Col";const bu=P.forwardRef(({bsPrefix:a,fluid:t=!1,as:n="div",className:r,...o},c)=>{const f=qe(a,"container"),h=typeof t=="string"?`-${t}`:"-fluid";return $.jsx(n,{ref:c,...o,className:Oe(r,t?`${f}${h}`:f)})});bu.displayName="Container";var Lb=Function.prototype.bind.call(Function.prototype.call,[].slice);function Lr(a,t){return Lb(a.querySelectorAll(t))}function Nb(){const[,a]=P.useReducer(t=>t+1,0);return a}function c0(a,t){if(a.contains)return a.contains(t);if(a.compareDocumentPosition)return a===t||!!(a.compareDocumentPosition(t)&16)}const zd=P.createContext(null),Au=(a,t=null)=>a!=null?String(a):t||null,kp=P.createContext(null);kp.displayName="NavContext";const Ob="data-rr-ui-",Pb="rrUi";function Ru(a){return`${Ob}${a}`}function Ib(a){return`${Pb}${a}`}const ry=P.createContext(Tu?window:void 0);ry.Provider;function Xp(){return P.useContext(ry)}const Bb=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",zb=typeof document<"u",Fb=zb||Bb?P.useLayoutEffect:P.useEffect,sy=P.createContext(null);sy.displayName="NavbarContext";$a.string,$a.bool,$a.bool,$a.bool,$a.bool;const Fd=P.forwardRef(({bsPrefix:a,className:t,fluid:n=!1,rounded:r=!1,roundedCircle:o=!1,thumbnail:c=!1,...f},h)=>(a=qe(a,"img"),$.jsx("img",{ref:h,...f,className:Oe(t,n&&`${a}-fluid`,r&&"rounded",o&&"rounded-circle",c&&`${a}-thumbnail`)})));Fd.displayName="Image";const u0=a=>!a||typeof a=="function"?a:t=>{a.current=t};function Hb(a,t){const n=u0(a),r=u0(t);return o=>{n&&n(o),r&&r(o)}}function Cu(a,t){return P.useMemo(()=>Hb(a,t),[a,t])}const oy=P.createContext(null),Gb=["as","active","eventKey"];function Vb(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function Wp({key:a,onClick:t,active:n,id:r,role:o,disabled:c}){const f=P.useContext(zd),h=P.useContext(kp),d=P.useContext(oy);let p=n;const g={role:o};if(h){!o&&h.role==="tablist"&&(g.role="tab");const _=h.getControllerId(a??null),v=h.getControlledId(a??null);g[Ru("event-key")]=a,g.id=_||r,p=n==null&&a!=null?h.activeKey===a:n,(p||!(d!=null&&d.unmountOnExit)&&!(d!=null&&d.mountOnEnter))&&(g["aria-controls"]=v)}return g.role==="tab"&&(g["aria-selected"]=p,p||(g.tabIndex=-1),c&&(g.tabIndex=-1,g["aria-disabled"]=!0)),g.onClick=ua(_=>{c||(t==null||t(_),a!=null&&f&&!_.isPropagationStopped()&&f(a,_))}),[g,{isActive:p}]}const ly=P.forwardRef((a,t)=>{let{as:n=Yx,active:r,eventKey:o}=a,c=Vb(a,Gb);const[f,h]=Wp(Object.assign({key:Au(o,c.href),active:r},c));return f[Ru("active")]=h.isActive,$.jsx(n,Object.assign({},c,f,{ref:t}))});ly.displayName="NavItem";const kb=["as","onSelect","activeKey","role","onKeyDown"];function Xb(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}const f0=()=>{},h0=Ru("event-key"),cy=P.forwardRef((a,t)=>{let{as:n="div",onSelect:r,activeKey:o,role:c,onKeyDown:f}=a,h=Xb(a,kb);const d=Nb(),p=P.useRef(!1),g=P.useContext(zd),_=P.useContext(oy);let v,S;_&&(c=c||"tablist",o=_.activeKey,v=_.getControlledId,S=_.getControllerId);const M=P.useRef(null),b=w=>{const C=M.current;if(!C)return null;const F=Lr(C,`[${h0}]:not([aria-disabled=true])`),G=C.querySelector("[aria-selected=true]");if(!G||G!==document.activeElement)return null;const z=F.indexOf(G);if(z===-1)return null;let j=z+w;return j>=F.length&&(j=0),j<0&&(j=F.length-1),F[j]},y=(w,C)=>{w!=null&&(r==null||r(w,C),g==null||g(w,C))},x=w=>{if(f==null||f(w),!_)return;let C;switch(w.key){case"ArrowLeft":case"ArrowUp":C=b(-1);break;case"ArrowRight":case"ArrowDown":C=b(1);break;default:return}C&&(w.preventDefault(),y(C.dataset[Ib("EventKey")]||null,w),p.current=!0,d())};P.useEffect(()=>{if(M.current&&p.current){const w=M.current.querySelector(`[${h0}][aria-selected=true]`);w==null||w.focus()}p.current=!1});const L=Cu(t,M);return $.jsx(zd.Provider,{value:y,children:$.jsx(kp.Provider,{value:{role:c,activeKey:Au(o),getControlledId:v||f0,getControllerId:S||f0},children:$.jsx(n,Object.assign({},h,{onKeyDown:x,ref:L,role:c}))})})});cy.displayName="Nav";const uy=Object.assign(cy,{Item:ly}),fy=P.forwardRef(({bsPrefix:a,active:t,disabled:n,eventKey:r,className:o,variant:c,action:f,as:h,...d},p)=>{a=qe(a,"list-group-item");const[g,_]=Wp({key:Au(r,d.href),active:t,...d}),v=zp(M=>{if(n){M.preventDefault(),M.stopPropagation();return}g.onClick(M)});n&&d.tabIndex===void 0&&(d.tabIndex=-1,d["aria-disabled"]=!0);const S=h||(f?d.href?"a":"button":"div");return $.jsx(S,{ref:p,...d,...g,onClick:v,className:Oe(o,a,_.isActive&&"active",n&&"disabled",c&&`${a}-${c}`,f&&`${a}-action`)})});fy.displayName="ListGroupItem";const hy=P.forwardRef((a,t)=>{const{className:n,bsPrefix:r,variant:o,horizontal:c,numbered:f,as:h="div",...d}=Gx(a,{activeKey:"onSelect"}),p=qe(r,"list-group");let g;return c&&(g=c===!0?"horizontal":`horizontal-${c}`),$.jsx(uy,{ref:t,...d,as:h,className:Oe(n,p,o&&`${p}-${o}`,g&&`${p}-${g}`,f&&`${p}-numbered`)})});hy.displayName="ListGroup";const Yh=Object.assign(hy,{Item:fy});function qh(a){a===void 0&&(a=Ip());try{var t=a.activeElement;return!t||!t.nodeName?null:t}catch{return a.body}}function Wb(a){const t=P.useRef(a);return t.current=a,t}function jb(a){const t=Wb(a);P.useEffect(()=>()=>t.current(),[])}function Yb(a=document){const t=a.defaultView;return Math.abs(t.innerWidth-a.documentElement.clientWidth)}const d0=Ru("modal-open");class jp{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Yb(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(Hr(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(d0,""),Hr(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(d0),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Zh=(a,t)=>Tu?a==null?(t||Ip()).body:(typeof a=="function"&&(a=a()),a&&"current"in a&&(a=a.current),a&&("nodeType"in a||a.getBoundingClientRect)?a:null):null;function qb(a,t){const n=Xp(),[r,o]=P.useState(()=>Zh(a,n==null?void 0:n.document));if(!r){const c=Zh(a);c&&o(c)}return P.useEffect(()=>{},[t,r]),P.useEffect(()=>{const c=Zh(a);c!==r&&o(c)},[a,r]),r}function Zb({children:a,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const c=P.useRef(null),f=P.useRef(t),h=ua(n);P.useEffect(()=>{t?f.current=!0:h(c.current)},[t,h]);const d=Cu(c,Sl(a)),p=P.cloneElement(a,{ref:d});return t?p:o||!f.current&&r?null:p}const Kb=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Qb(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}function $b(a){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:c,onExited:f,addEndListener:h,children:d}=a,p=Qb(a,Kb);const g=P.useRef(null),_=Cu(g,Sl(d)),v=C=>F=>{C&&g.current&&C(g.current,F)},S=P.useCallback(v(t),[t]),M=P.useCallback(v(n),[n]),b=P.useCallback(v(r),[r]),y=P.useCallback(v(o),[o]),x=P.useCallback(v(c),[c]),L=P.useCallback(v(f),[f]),w=P.useCallback(v(h),[h]);return Object.assign({},p,{nodeRef:g},t&&{onEnter:S},n&&{onEntering:M},r&&{onEntered:b},o&&{onExit:y},c&&{onExiting:x},f&&{onExited:L},h&&{addEndListener:w},{children:typeof d=="function"?(C,F)=>d(C,Object.assign({},F,{ref:_})):P.cloneElement(d,{ref:_})})}const Jb=["component"];function tA(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}const eA=P.forwardRef((a,t)=>{let{component:n}=a,r=tA(a,Jb);const o=$b(r);return $.jsx(n,Object.assign({ref:t},o))});function nA({in:a,onTransition:t}){const n=P.useRef(null),r=P.useRef(!0),o=ua(t);return l0(()=>{if(!n.current)return;let c=!1;return o({in:a,element:n.current,initial:r.current,isStale:()=>c}),()=>{c=!0}},[a,o]),l0(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function iA({children:a,in:t,onExited:n,onEntered:r,transition:o}){const[c,f]=P.useState(!t);t&&c&&f(!1);const h=nA({in:!!t,onTransition:p=>{const g=()=>{p.isStale()||(p.in?r==null||r(p.element,p.initial):(f(!0),n==null||n(p.element)))};Promise.resolve(o(p)).then(g,_=>{throw p.in||f(!0),_})}}),d=Cu(h,Sl(a));return c&&!t?null:P.cloneElement(a,{ref:d})}function p0(a,t,n){return a?$.jsx(eA,Object.assign({},n,{component:a})):t?$.jsx(iA,Object.assign({},n,{transition:t})):$.jsx(Zb,Object.assign({},n))}const aA=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function rA(a,t){if(a==null)return{};var n={};for(var r in a)if({}.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;n[r]=a[r]}return n}let Kh;function sA(a){return Kh||(Kh=new jp({ownerDocument:a==null?void 0:a.document})),Kh}function oA(a){const t=Xp(),n=a||sA(t),r=P.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:P.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:P.useCallback(o=>{r.current.backdrop=o},[])})}const dy=P.forwardRef((a,t)=>{let{show:n=!1,role:r="dialog",className:o,style:c,children:f,backdrop:h=!0,keyboard:d=!0,onBackdropClick:p,onEscapeKeyDown:g,transition:_,runTransition:v,backdropTransition:S,runBackdropTransition:M,autoFocus:b=!0,enforceFocus:y=!0,restoreFocus:x=!0,restoreFocusOptions:L,renderDialog:w,renderBackdrop:C=de=>$.jsx("div",Object.assign({},de)),manager:F,container:G,onShow:z,onHide:j=()=>{},onExit:U,onExited:D,onExiting:H,onEnter:st,onEntering:nt,onEntered:ht}=a,ft=rA(a,aA);const I=Xp(),Y=qb(G),W=oA(F),Et=_b(),N=vb(n),[tt,yt]=P.useState(!n),St=P.useRef(null);P.useImperativeHandle(t,()=>W,[W]),Tu&&!N&&n&&(St.current=qh(I==null?void 0:I.document)),n&&tt&&yt(!1);const Z=ua(()=>{if(W.add(),qt.current=_u(document,"keydown",wt),se.current=_u(document,"focus",()=>setTimeout(Tt),!0),z&&z(),b){var de,ye;const le=qh((de=(ye=W.dialog)==null?void 0:ye.ownerDocument)!=null?de:I==null?void 0:I.document);W.dialog&&le&&!c0(W.dialog,le)&&(St.current=le,W.dialog.focus())}}),pt=ua(()=>{if(W.remove(),qt.current==null||qt.current(),se.current==null||se.current(),x){var de;(de=St.current)==null||de.focus==null||de.focus(L),St.current=null}});P.useEffect(()=>{!n||!Y||Z()},[n,Y,Z]),P.useEffect(()=>{tt&&pt()},[tt,pt]),jb(()=>{pt()});const Tt=ua(()=>{if(!y||!Et()||!W.isTopModal())return;const de=qh(I==null?void 0:I.document);W.dialog&&de&&!c0(W.dialog,de)&&W.dialog.focus()}),Ct=ua(de=>{de.target===de.currentTarget&&(p==null||p(de),h===!0&&j())}),wt=ua(de=>{d&&ib(de)&&W.isTopModal()&&(g==null||g(de),de.defaultPrevented||j())}),se=P.useRef(),qt=P.useRef(),Le=(...de)=>{yt(!0),D==null||D(...de)};if(!Y)return null;const Ne=Object.assign({role:r,ref:W.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ft,{style:c,className:o,tabIndex:-1});let he=w?w(Ne):$.jsx("div",Object.assign({},Ne,{children:P.cloneElement(f,{role:"document"})}));he=p0(_,v,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:U,onExiting:H,onExited:Le,onEnter:st,onEntering:nt,onEntered:ht,children:he});let V=null;return h&&(V=C({ref:W.setBackdropRef,onClick:Ct}),V=p0(S,M,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:V})),$.jsx($.Fragment,{children:Gs.createPortal($.jsxs($.Fragment,{children:[V,he]}),Y)})});dy.displayName="Modal";const lA=Object.assign(dy,{Manager:jp});function cA(a,t){return a.classList?a.classList.contains(t):(" "+(a.className.baseVal||a.className)+" ").indexOf(" "+t+" ")!==-1}function uA(a,t){a.classList?a.classList.add(t):cA(a,t)||(typeof a.className=="string"?a.className=a.className+" "+t:a.setAttribute("class",(a.className&&a.className.baseVal||"")+" "+t))}function m0(a,t){return a.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function fA(a,t){a.classList?a.classList.remove(t):typeof a.className=="string"?a.className=m0(a.className,t):a.setAttribute("class",m0(a.className&&a.className.baseVal||"",t))}const bs={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class py extends jp{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,Hr(n,{[t]:`${parseFloat(Hr(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],Hr(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(uA(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";Lr(n,bs.FIXED_CONTENT).forEach(c=>this.adjustAndStore(r,c,t.scrollBarWidth)),Lr(n,bs.STICKY_CONTENT).forEach(c=>this.adjustAndStore(o,c,-t.scrollBarWidth)),Lr(n,bs.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(o,c,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();fA(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";Lr(n,bs.FIXED_CONTENT).forEach(c=>this.restore(r,c)),Lr(n,bs.STICKY_CONTENT).forEach(c=>this.restore(o,c)),Lr(n,bs.NAVBAR_TOGGLER).forEach(c=>this.restore(o,c))}}let Qh;function hA(a){return Qh||(Qh=new py(a)),Qh}const my=P.createContext({onHide(){}}),gy=P.forwardRef(({closeLabel:a="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...c},f)=>{const h=P.useContext(my),d=zp(()=>{h==null||h.onHide(),r==null||r()});return $.jsxs("div",{ref:f,...c,children:[o,n&&$.jsx(Hp,{"aria-label":a,variant:t,onClick:d})]})});gy.displayName="AbstractModalHeader";const _y=P.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=qe(t,"nav-item"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));_y.displayName="NavItem";const vy=P.forwardRef(({bsPrefix:a,className:t,as:n=qx,active:r,eventKey:o,disabled:c=!1,...f},h)=>{a=qe(a,"nav-link");const[d,p]=Wp({key:Au(o,f.href),active:r,disabled:c,...f});return $.jsx(n,{...f,...d,ref:h,disabled:c,className:Oe(t,a,c&&"disabled",p.isActive&&"active")})});vy.displayName="NavLink";const xy=P.forwardRef((a,t)=>{const{as:n="div",bsPrefix:r,variant:o,fill:c=!1,justify:f=!1,navbar:h,navbarScroll:d,className:p,activeKey:g,..._}=Gx(a,{activeKey:"onSelect"}),v=qe(r,"nav");let S,M,b=!1;const y=P.useContext(sy),x=P.useContext(Vp);return y?(S=y.bsPrefix,b=h??!0):x&&({cardHeaderBsPrefix:M}=x),$.jsx(uy,{as:n,ref:t,activeKey:g,className:Oe(p,{[v]:!b,[`${S}-nav`]:b,[`${S}-nav-scroll`]:b&&d,[`${M}-${o}`]:!!M,[`${v}-${o}`]:!!o,[`${v}-fill`]:c,[`${v}-justified`]:f}),..._})});xy.displayName="Nav";const $h=Object.assign(xy,{Item:_y,Link:vy}),Hd=new WeakMap,g0=(a,t)=>{if(!a||!t)return;const n=Hd.get(t)||new Map;Hd.set(t,n);let r=n.get(a);return r||(r=t.matchMedia(a),r.refCount=0,n.set(r.media,r)),r};function dA(a,t=typeof window>"u"?void 0:window){const n=g0(a,t),[r,o]=P.useState(()=>n?n.matches:!1);return Fb(()=>{let c=g0(a,t);if(!c)return o(!1);let f=Hd.get(t);const h=()=>{o(c.matches)};return c.refCount++,c.addListener(h),h(),()=>{c.removeListener(h),c.refCount--,c.refCount<=0&&(f==null||f.delete(c.media)),c=void 0}},[a]),r}function pA(a){const t=Object.keys(a);function n(h,d){return h===d?d:h?`${h} and ${d}`:d}function r(h){return t[Math.min(t.indexOf(h)+1,t.length-1)]}function o(h){const d=r(h);let p=a[d];return typeof p=="number"?p=`${p-.2}px`:p=`calc(${p} - 0.2px)`,`(max-width: ${p})`}function c(h){let d=a[h];return typeof d=="number"&&(d=`${d}px`),`(min-width: ${d})`}function f(h,d,p){let g;typeof h=="object"?(g=h,p=d,d=!0):(d=d||!0,g={[h]:d});let _=P.useMemo(()=>Object.entries(g).reduce((v,[S,M])=>((M==="up"||M===!0)&&(v=n(v,c(S))),(M==="down"||M===!0)&&(v=n(v,o(S))),v),""),[JSON.stringify(g)]);return dA(_,p)}return f}const mA=pA({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),yy=P.forwardRef(({className:a,bsPrefix:t,as:n="div",...r},o)=>(t=qe(t,"offcanvas-body"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));yy.displayName="OffcanvasBody";const gA={[Di]:"show",[Ja]:"show"},Sy=P.forwardRef(({bsPrefix:a,className:t,children:n,in:r=!1,mountOnEnter:o=!1,unmountOnExit:c=!1,appear:f=!1,...h},d)=>(a=qe(a,"offcanvas"),$.jsx(Bp,{ref:d,addEndListener:Wx,in:r,mountOnEnter:o,unmountOnExit:c,appear:f,...h,childRef:Sl(n),children:(p,g)=>P.cloneElement(n,{...g,className:Oe(t,n.props.className,(p===Di||p===gu)&&`${a}-toggling`,gA[p])})})));Sy.displayName="OffcanvasToggling";const Ey=P.forwardRef(({bsPrefix:a,className:t,closeLabel:n="Close",closeButton:r=!1,...o},c)=>(a=qe(a,"offcanvas-header"),$.jsx(gy,{ref:c,...o,className:Oe(t,a),closeLabel:n,closeButton:r})));Ey.displayName="OffcanvasHeader";const _A=Fp("h5"),My=P.forwardRef(({className:a,bsPrefix:t,as:n=_A,...r},o)=>(t=qe(t,"offcanvas-title"),$.jsx(n,{ref:o,className:Oe(a,t),...r})));My.displayName="OffcanvasTitle";function vA(a){return $.jsx(Sy,{...a})}function xA(a){return $.jsx(Zx,{...a})}const Ty=P.forwardRef(({bsPrefix:a,className:t,children:n,"aria-labelledby":r,placement:o="start",responsive:c,show:f=!1,backdrop:h=!0,keyboard:d=!0,scroll:p=!1,onEscapeKeyDown:g,onShow:_,onHide:v,container:S,autoFocus:M=!0,enforceFocus:b=!0,restoreFocus:y=!0,restoreFocusOptions:x,onEntered:L,onExit:w,onExiting:C,onEnter:F,onEntering:G,onExited:z,backdropClassName:j,manager:U,renderStaticNode:D=!1,...H},st)=>{const nt=P.useRef();a=qe(a,"offcanvas");const[ht,ft]=P.useState(!1),I=zp(v),Y=mA(c||"xs","up");P.useEffect(()=>{ft(c?f&&!Y:f)},[f,c,Y]);const W=P.useMemo(()=>({onHide:I}),[I]);function Et(){return U||(p?(nt.current||(nt.current=new py({handleContainerOverflow:!1})),nt.current):hA())}const N=(Z,...pt)=>{Z&&(Z.style.visibility="visible"),F==null||F(Z,...pt)},tt=(Z,...pt)=>{Z&&(Z.style.visibility=""),z==null||z(...pt)},yt=P.useCallback(Z=>$.jsx("div",{...Z,className:Oe(`${a}-backdrop`,j)}),[j,a]),St=Z=>$.jsx("div",{...Z,...H,className:Oe(t,c?`${a}-${c}`:a,`${a}-${o}`),"aria-labelledby":r,children:n});return $.jsxs($.Fragment,{children:[!ht&&(c||D)&&St({}),$.jsx(my.Provider,{value:W,children:$.jsx(lA,{show:ht,ref:st,backdrop:h,container:S,keyboard:d,autoFocus:M,enforceFocus:b&&!p,restoreFocus:y,restoreFocusOptions:x,onEscapeKeyDown:g,onShow:_,onHide:I,onEnter:N,onEntering:G,onEntered:L,onExit:w,onExiting:C,onExited:tt,manager:Et(),transition:vA,backdropTransition:xA,renderBackdrop:yt,renderDialog:St})})]})});Ty.displayName="Offcanvas";const Jh=Object.assign(Ty,{Body:yy,Header:Ey,Title:My}),by=P.forwardRef(({bsPrefix:a,className:t,as:n="div",...r},o)=>{const c=qe(a,"row"),f=Vx(),h=kx(),d=`${c}-cols`,p=[];return f.forEach(g=>{const _=r[g];delete r[g];let v;_!=null&&typeof _=="object"?{cols:v}=_:v=_;const S=g!==h?`-${g}`:"";v!=null&&p.push(`${d}${S}-${v}`)}),$.jsx(n,{ref:o,...r,className:Oe(t,c,...p)})});by.displayName="Row";const El=P.forwardRef(({bsPrefix:a,className:t,striped:n,bordered:r,borderless:o,hover:c,size:f,variant:h,responsive:d,...p},g)=>{const _=qe(a,"table"),v=Oe(t,_,h&&`${_}-${h}`,f&&`${_}-${f}`,n&&`${_}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${_}-bordered`,o&&`${_}-borderless`,c&&`${_}-hover`),S=$.jsx("table",{...p,className:v,ref:g});if(d){let M=`${_}-responsive`;return typeof d=="string"&&(M=`${M}-${d}`),$.jsx("div",{className:M,children:S})}return S});El.displayName="Table";function yA(){return $.jsxs(Jh,{show:!0,backdrop:!1,scroll:!0,className:"bg-body-secondary text-dark",style:{width:"17rem"},children:[$.jsx(Jh.Header,{className:"fs-2 fw-bold",children:"프로젝트기반연구"}),$.jsx(Jh.Body,{className:"d-flex flex-column p-2",children:$.jsxs($h,{as:Yh,children:[$.jsx(Yh.Item,{children:$.jsx($h.Link,{to:"/mapping/",as:Zs,children:"은하 지도"})}),$.jsx(Yh.Item,{children:$.jsx($h.Link,{to:"/galaxy/",as:Zs,children:"은하 목록"})})]})})]})}const Yp=[{id:0,name:"M51",ra:13.5,dec:202.5,distance:3.1,photo:"/photo/M51_photo.jpg",metadata:"1Bin, 1800s x 6ea",spectrum:"/spectrum/M51_spectrum.png",dateTime:"2025년 5월 6일 22시 30분 ~ 2025년 5월 7일 00시 21분"}];function SA({galaxy:a}){const t=Up();return $.jsx("tr",{onClick:()=>{t(`/galaxy/${a.id}/`)},children:$.jsx("td",{children:a.name})})}function EA(){return $.jsxs(bu,{className:"my-3",children:[$.jsx("h3",{children:"은하 목록"}),$.jsxs(El,{hover:!0,children:[$.jsx("thead",{className:"table-dark",children:$.jsx("tr",{children:$.jsx("th",{children:"이름"})})}),$.jsx("tbody",{children:Yp.map(a=>$.jsx(SA,{galaxy:a},a.id))})]})]})}const Nr={telescope:{main:{optical:"OfficinaStellare, RiFast600(Claiber=600mm, f/3.8, F=2280mm, RC based)",spectrometer:"LISA High Luminosity Spectrograph(Shelyak Instruments)",camera:{spectrometerCamera:"ZWO ASI2600mm Pro (Temp. -15℃)",mirrorCamera:"ZWO ASI174mm Mini"}},guide:{optical:"sky rover 102 super ed doublet apo (Claiber=102mm, f/7, F=714mm)",camera:"ZWO ASI1600mm Cool"}},location:"세종특별자치시 달빛1로 265 세종과학예술영재학교 천문대(SAO)"};function MA({galaxy:a}){return $.jsxs(ma,{className:"mb-3",children:[$.jsx(ma.Header,{className:"fs-5 fw-bold",children:"사진"}),$.jsx(ma.Body,{children:$.jsx(El,{children:$.jsxs("tbody",{children:[$.jsx("tr",{className:"table-dark",children:$.jsx("th",{children:"은하 사진"})}),$.jsx("tr",{children:$.jsx("td",{className:"text-center",children:$.jsx(Fd,{fluid:!0,src:`/galaxymapping/${a.photo}`,style:{width:"100%",height:"100%",objectFit:"contain"}})})}),$.jsx("tr",{className:"table-dark",children:$.jsx("th",{children:"스펙트럼 사진"})}),$.jsx("tr",{children:$.jsx("td",{className:"text-center",children:$.jsx(Fd,{fluid:!0,src:`/galaxymapping/${a.spectrum}`})})})]})})})]})}function TA({galaxy:a}){return $.jsxs(ma,{className:"mb-3",children:[$.jsx(ma.Header,{className:"fs-5 fw-bold",children:"촬영 정보"}),$.jsx(ma.Body,{children:$.jsx(El,{children:$.jsxs("tbody",{children:[$.jsxs("tr",{children:[$.jsx("th",{children:"촬영 설정"}),$.jsx("td",{children:a.metadata})]}),$.jsxs("tr",{children:[$.jsx("th",{children:"촬영 일자 및 시간"}),$.jsx("td",{children:a.dateTime})]}),$.jsxs("tr",{children:[$.jsx("th",{children:"촬영 장소"}),$.jsx("td",{children:Nr.location})]})]})})})]})}function bA(){return $.jsxs(ma,{children:[$.jsx(ma.Header,{className:"fs-5 fw-bold",children:"망원경 제원"}),$.jsx(ma.Body,{children:$.jsxs(El,{children:[$.jsxs("colgroup",{children:[$.jsx("col",{width:"15%"}),$.jsx("col",{width:"85%"})]}),$.jsxs("tbody",{children:[$.jsx("tr",{className:"table-dark",children:$.jsx("th",{colSpan:2,children:"주 망원경"})}),$.jsxs("tr",{children:[$.jsx("th",{children:"광학계"}),$.jsx("td",{children:Nr.telescope.main.optical})]}),$.jsxs("tr",{children:[$.jsx("th",{children:"분광기"}),$.jsx("td",{children:Nr.telescope.main.spectrometer})]}),$.jsxs("tr",{children:[$.jsx("th",{children:"스펙트럼 카메라"}),$.jsx("td",{children:Nr.telescope.main.camera.spectrometerCamera})]}),$.jsxs("tr",{children:[$.jsxs("th",{children:["미러",$.jsx("br",{}),"카메라"]}),$.jsx("td",{children:Nr.telescope.main.camera.mirrorCamera})]}),$.jsx("tr",{className:"table-dark",children:$.jsx("th",{colSpan:2,children:"가이드 망원경"})}),$.jsxs("tr",{children:[$.jsx("th",{children:"광학계"}),$.jsx("td",{children:Nr.telescope.guide.optical})]}),$.jsxs("tr",{children:[$.jsx("th",{children:"카메라"}),$.jsx("td",{children:Nr.telescope.guide.camera})]})]})]})})]})}function AA(){const{galaxyId:a}=VM(),t=Yp[Number(a)];return $.jsxs(bu,{className:"my-3",children:[$.jsx("h2",{className:"fw-bold mb-3",children:t.name}),$.jsx("hr",{}),$.jsxs(by,{className:"g-3",children:[$.jsx(Bd,{className:"col-12 col-lg-6",children:$.jsx(MA,{galaxy:t})}),$.jsxs(Bd,{className:"col-12 col-lg-6",children:[$.jsx(TA,{galaxy:t}),$.jsx(bA,{})]})]})]})}function RA(){return $.jsxs(bu,{className:"my-3",children:[$.jsx(Zs,{to:"/mapping/",className:"btn btn-sasadark",children:"매핑"}),$.jsx(Zs,{to:"/galaxy/",className:"btn btn-sasadark",children:"은하 목록"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qp="177",Ws={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CA=0,_0=1,wA=2,Ay=1,DA=2,ca=3,ir=0,jn=1,fa=2,er=0,js=1,v0=2,x0=3,y0=4,UA=5,Pr=100,LA=101,NA=102,OA=103,PA=104,IA=200,BA=201,zA=202,FA=203,Gd=204,Vd=205,HA=206,GA=207,VA=208,kA=209,XA=210,WA=211,jA=212,YA=213,qA=214,kd=0,Xd=1,Wd=2,Ks=3,jd=4,Yd=5,qd=6,Zd=7,Zp=0,ZA=1,KA=2,nr=0,QA=1,$A=2,JA=3,t1=4,e1=5,n1=6,i1=7,Ry=300,Qs=301,$s=302,Kd=303,Qd=304,wu=306,$d=1e3,zr=1001,Jd=1002,Ei=1003,a1=1004,Fc=1005,Li=1006,td=1007,Fr=1008,Pi=1009,Cy=1010,wy=1011,hl=1012,Kp=1013,Gr=1014,ha=1015,Ml=1016,Qp=1017,$p=1018,dl=1020,Dy=35902,Uy=1021,Ly=1022,Si=1023,pl=1026,ml=1027,Ny=1028,Jp=1029,Oy=1030,tm=1031,em=1033,cu=33776,uu=33777,fu=33778,hu=33779,tp=35840,ep=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37808,lp=37809,cp=37810,up=37811,fp=37812,hp=37813,dp=37814,pp=37815,mp=37816,gp=37817,_p=37818,vp=37819,xp=37820,yp=37821,du=36492,Sp=36494,Ep=36495,Py=36283,Mp=36284,Tp=36285,bp=36286,r1=3200,s1=3201,Iy=0,o1=1,tr="",fi="srgb",Js="srgb-linear",vu="linear",Ge="srgb",As=7680,S0=519,l1=512,c1=513,u1=514,By=515,f1=516,h1=517,d1=518,p1=519,E0=35044,M0="300 es",da=2e3,xu=2001;class jr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let T0=1234567;const ll=Math.PI/180,gl=180/Math.PI;function no(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function _e(a,t,n){return Math.max(t,Math.min(n,a))}function nm(a,t){return(a%t+t)%t}function m1(a,t,n,r,o){return r+(a-t)*(o-r)/(n-t)}function g1(a,t,n){return a!==t?(n-a)/(t-a):0}function cl(a,t,n){return(1-n)*a+n*t}function _1(a,t,n,r){return cl(a,t,1-Math.exp(-n*r))}function v1(a,t=1){return t-Math.abs(nm(a,t*2)-t)}function x1(a,t,n){return a<=t?0:a>=n?1:(a=(a-t)/(n-t),a*a*(3-2*a))}function y1(a,t,n){return a<=t?0:a>=n?1:(a=(a-t)/(n-t),a*a*a*(a*(a*6-15)+10))}function S1(a,t){return a+Math.floor(Math.random()*(t-a+1))}function E1(a,t){return a+Math.random()*(t-a)}function M1(a){return a*(.5-Math.random())}function T1(a){a!==void 0&&(T0=a);let t=T0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function b1(a){return a*ll}function A1(a){return a*gl}function R1(a){return(a&a-1)===0&&a!==0}function C1(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function w1(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function D1(a,t,n,r,o){const c=Math.cos,f=Math.sin,h=c(n/2),d=f(n/2),p=c((t+r)/2),g=f((t+r)/2),_=c((t-r)/2),v=f((t-r)/2),S=c((r-t)/2),M=f((r-t)/2);switch(o){case"XYX":a.set(h*g,d*_,d*v,h*p);break;case"YZY":a.set(d*v,h*g,d*_,h*p);break;case"ZXZ":a.set(d*_,d*v,h*g,h*p);break;case"XZX":a.set(h*g,d*M,d*S,h*p);break;case"YXY":a.set(d*S,h*g,d*M,h*p);break;case"ZYZ":a.set(d*M,d*S,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Hs(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Bn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Ap={DEG2RAD:ll,RAD2DEG:gl,generateUUID:no,clamp:_e,euclideanModulo:nm,mapLinear:m1,inverseLerp:g1,lerp:cl,damp:_1,pingpong:v1,smoothstep:x1,smootherstep:y1,randInt:S1,randFloat:E1,randFloatSpread:M1,seededRandom:T1,degToRad:b1,radToDeg:A1,isPowerOfTwo:R1,ceilPowerOfTwo:C1,floorPowerOfTwo:w1,setQuaternionFromProperEuler:D1,normalize:Bn,denormalize:Hs};class oe{constructor(t=0,n=0){oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*o+t.x,this.y=c*o+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vr{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,c,f,h){let d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];const v=c[f+0],S=c[f+1],M=c[f+2],b=c[f+3];if(h===0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(h===1){t[n+0]=v,t[n+1]=S,t[n+2]=M,t[n+3]=b;return}if(_!==b||d!==v||p!==S||g!==M){let y=1-h;const x=d*v+p*S+g*M+_*b,L=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const F=Math.sqrt(w),G=Math.atan2(F,x*L);y=Math.sin(y*G)/F,h=Math.sin(h*G)/F}const C=h*L;if(d=d*y+v*C,p=p*y+S*C,g=g*y+M*C,_=_*y+b*C,y===1-h){const F=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=F,p*=F,g*=F,_*=F}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,r,o,c,f){const h=r[o],d=r[o+1],p=r[o+2],g=r[o+3],_=c[f],v=c[f+1],S=c[f+2],M=c[f+3];return t[n]=h*M+g*_+d*S-p*v,t[n+1]=d*M+g*v+p*_-h*S,t[n+2]=p*M+g*S+h*v-d*_,t[n+3]=g*M-h*_-d*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,d=Math.sin,p=h(r/2),g=h(o/2),_=h(c/2),v=d(r/2),S=d(o/2),M=d(c/2);switch(f){case"XYZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"YXZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"ZXY":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"ZYX":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"YZX":this._x=v*g*_+p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_-v*S*M;break;case"XZY":this._x=v*g*_-p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],c=n[8],f=n[1],h=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=r+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(c-p)*S,this._z=(f-o)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(g-d)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(c-p)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(f-o)/S,this._x=(c+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,c=t._z,f=t._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=r*g+f*h+o*p-c*d,this._y=o*g+f*d+c*h-r*p,this._z=c*g+f*p+r*d-o*h,this._w=f*g-r*h-o*d-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=o,this._z=c,this;const d=1-h*h;if(d<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=f*_+this._w*v,this._x=r*_+this._x*v,this._y=o*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,n=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(b0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(b0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,c=t.x,f=t.y,h=t.z,d=t.w,p=2*(f*o-h*r),g=2*(h*n-c*o),_=2*(c*r-f*n);return this.x=n+d*p+f*_-h*g,this.y=r+d*g+h*p-c*_,this.z=o+d*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,c=t.z,f=n.x,h=n.y,d=n.z;return this.x=o*d-c*h,this.y=c*f-r*d,this.z=r*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new it,b0=new Vr;class ue{constructor(t,n,r,o,c,f,h,d,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,f,h,d,p)}set(t,n,r,o,c,f,h,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,f=r[0],h=r[3],d=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],M=r[8],b=o[0],y=o[3],x=o[6],L=o[1],w=o[4],C=o[7],F=o[2],G=o[5],z=o[8];return c[0]=f*b+h*L+d*F,c[3]=f*y+h*w+d*G,c[6]=f*x+h*C+d*z,c[1]=p*b+g*L+_*F,c[4]=p*y+g*w+_*G,c[7]=p*x+g*C+_*z,c[2]=v*b+S*L+M*F,c[5]=v*y+S*w+M*G,c[8]=v*x+S*C+M*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return n*f*g-n*h*p-r*c*g+r*h*d+o*c*p-o*f*d}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=g*f-h*p,v=h*d-g*c,S=p*c-f*d,M=n*_+r*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=_*b,t[1]=(o*p-g*r)*b,t[2]=(h*r-o*f)*b,t[3]=v*b,t[4]=(g*n-o*d)*b,t[5]=(o*c-h*n)*b,t[6]=S*b,t[7]=(r*d-p*n)*b,t[8]=(f*n-r*c)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,c,f,h){const d=Math.cos(c),p=Math.sin(c);return this.set(r*d,r*p,-r*(d*f+p*h)+f+t,-o*p,o*d,-o*(-p*f+d*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(nd.makeScale(t,n)),this}rotate(t){return this.premultiply(nd.makeRotation(-t)),this}translate(t,n){return this.premultiply(nd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new ue;function zy(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function _l(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function U1(){const a=_l("canvas");return a.style.display="block",a}const A0={};function Ys(a){a in A0||(A0[a]=!0,console.warn(a))}function L1(a,t,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function N1(a){const t=a.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function O1(a){const t=a.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const R0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P1(){const a={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===tr?vu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Js]:{primaries:t,whitePoint:r,transfer:vu,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:R0,fromXYZ:C0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),a}const we=P1();function ga(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function qs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Rs;class I1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Rs===void 0&&(Rs=_l("canvas")),Rs.width=t.width,Rs.height=t.height;const o=Rs.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=_l("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ga(n[r]/255)*255):n[r]=ga(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let B1=0;class im{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=no(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(id(o[f].image)):c.push(id(o[f]))}else c=id(o);r.url=c}return n||(t.images[this.uuid]=r),r}}function id(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?I1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z1=0;const ad=new it;class Fn extends jr{constructor(t=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=zr,o=zr,c=Li,f=Fr,h=Si,d=Pi,p=Fn.DEFAULT_ANISOTROPY,g=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=no(),this.name="",this.source=new im(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ry)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $d:t.x=t.x-Math.floor(t.x);break;case zr:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $d:t.y=t.y-Math.floor(t.y);break;case zr:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ry;Fn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,n=0,r=0,o=1){nn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,c;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],S=d[5],M=d[9],b=d[2],y=d[6],x=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(p+1)/2,C=(S+1)/2,F=(x+1)/2,G=(g+v)/4,z=(_+b)/4,j=(M+y)/4;return w>C&&w>F?w<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(w),o=G/r,c=z/r):C>F?C<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(C),r=G/o,c=j/o):F<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),r=z/c,o=j/c),this.set(r,o,c,n),this}let L=Math.sqrt((y-M)*(y-M)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(_-b)/L,this.z=(v-g)/L,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=_e(this.x,t.x,n.x),this.y=_e(this.y,t.y,n.y),this.z=_e(this.z,t.z,n.z),this.w=_e(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=_e(this.x,t,n),this.y=_e(this.y,t,n),this.z=_e(this.z,t,n),this.w=_e(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F1 extends jr{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new nn(0,0,t,n),this.scissorTest=!1,this.viewport=new nn(0,0,t,n);const o={width:t,height:n,depth:r.depth},c=new Fn(o);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new im(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends F1{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Fy extends Fn{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class H1 extends Fn{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl{constructor(t=new it(1/0,1/0,1/0),n=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(_i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(_i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=_i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,_i):_i.fromBufferAttribute(c,f),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hc.copy(r.boundingBox)),Hc.applyMatrix4(t.matrixWorld),this.union(Hc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(el),Gc.subVectors(this.max,el),Cs.subVectors(t.a,el),ws.subVectors(t.b,el),Ds.subVectors(t.c,el),Wa.subVectors(ws,Cs),ja.subVectors(Ds,ws),br.subVectors(Cs,Ds);let n=[0,-Wa.z,Wa.y,0,-ja.z,ja.y,0,-br.z,br.y,Wa.z,0,-Wa.x,ja.z,0,-ja.x,br.z,0,-br.x,-Wa.y,Wa.x,0,-ja.y,ja.x,0,-br.y,br.x,0];return!rd(n,Cs,ws,Ds,Gc)||(n=[1,0,0,0,1,0,0,0,1],!rd(n,Cs,ws,Ds,Gc))?!1:(Vc.crossVectors(Wa,ja),n=[Vc.x,Vc.y,Vc.z],rd(n,Cs,ws,Ds,Gc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new it,new it,new it,new it,new it,new it,new it,new it],_i=new it,Hc=new Tl,Cs=new it,ws=new it,Ds=new it,Wa=new it,ja=new it,br=new it,el=new it,Gc=new it,Vc=new it,Ar=new it;function rd(a,t,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){Ar.fromArray(a,c);const h=o.x*Math.abs(Ar.x)+o.y*Math.abs(Ar.y)+o.z*Math.abs(Ar.z),d=t.dot(Ar),p=n.dot(Ar),g=r.dot(Ar);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const G1=new Tl,nl=new it,sd=new it;class am{constructor(t=new it,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):G1.setFromPoints(t).getCenter(r);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nl.subVectors(t,this.center);const n=nl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(nl,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nl.copy(t.center).add(sd)),this.expandByPoint(nl.copy(t.center).sub(sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new it,od=new it,kc=new it,Ya=new it,ld=new it,Xc=new it,cd=new it;class rm{constructor(t=new it,n=new it(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){od.copy(t).add(n).multiplyScalar(.5),kc.copy(n).sub(t).normalize(),Ya.copy(this.origin).sub(od);const c=t.distanceTo(n)*.5,f=-this.direction.dot(kc),h=Ya.dot(this.direction),d=-Ya.dot(kc),p=Ya.lengthSq(),g=Math.abs(1-f*f);let _,v,S,M;if(g>0)if(_=f*d-h,v=f*h-d,M=c*g,_>=0)if(v>=-M)if(v<=M){const b=1/g;_*=b,v*=b,S=_*(_+f*v+2*h)+v*(f*_+v+2*d)+p}else v=c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*d)+p;else v=-c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*d)+p;else v<=-M?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-d),c),S=-_*_+v*(v+2*d)+p):v<=M?(_=0,v=Math.min(Math.max(-c,-d),c),S=v*(v+2*d)+p):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-d),c),S=-_*_+v*(v+2*d)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(od).addScaledVector(kc,v),S}intersectSphere(t,n){ra.subVectors(t.center,this.origin);const r=ra.dot(this.direction),o=ra.dot(ra)-r*r,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=r-f,d=r+f;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,c,f,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),_>=0?(h=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),r>d||h>o)||((h>r||r!==r)&&(r=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,n,r,o,c){ld.subVectors(n,t),Xc.subVectors(r,t),cd.crossVectors(ld,Xc);let f=this.direction.dot(cd),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ya.subVectors(this.origin,t);const d=h*this.direction.dot(Xc.crossVectors(Ya,Xc));if(d<0)return null;const p=h*this.direction.dot(ld.cross(Ya));if(p<0||d+p>f)return null;const g=-h*Ya.dot(cd);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,n,r,o,c,f,h,d,p,g,_,v,S,M,b,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,f,h,d,p,g,_,v,S,M,b,y)}set(t,n,r,o,c,f,h,d,p,g,_,v,S,M,b,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=f,x[9]=h,x[13]=d,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=M,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,o=1/Us.setFromMatrixColumn(t,0).length(),c=1/Us.setFromMatrixColumn(t,1).length(),f=1/Us.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,M=h*g,b=h*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=S+M*p,n[5]=v-b*p,n[9]=-h*d,n[2]=b-v*p,n[6]=M+S*p,n[10]=f*d}else if(t.order==="YXZ"){const v=d*g,S=d*_,M=p*g,b=p*_;n[0]=v+b*h,n[4]=M*h-S,n[8]=f*p,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=S*h-M,n[6]=b+v*h,n[10]=f*d}else if(t.order==="ZXY"){const v=d*g,S=d*_,M=p*g,b=p*_;n[0]=v-b*h,n[4]=-f*_,n[8]=M+S*h,n[1]=S+M*h,n[5]=f*g,n[9]=b-v*h,n[2]=-f*p,n[6]=h,n[10]=f*d}else if(t.order==="ZYX"){const v=f*g,S=f*_,M=h*g,b=h*_;n[0]=d*g,n[4]=M*p-S,n[8]=v*p+b,n[1]=d*_,n[5]=b*p+v,n[9]=S*p-M,n[2]=-p,n[6]=h*d,n[10]=f*d}else if(t.order==="YZX"){const v=f*d,S=f*p,M=h*d,b=h*p;n[0]=d*g,n[4]=b-v*_,n[8]=M*_+S,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*_+M,n[10]=v-b*_}else if(t.order==="XZY"){const v=f*d,S=f*p,M=h*d,b=h*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+b,n[5]=f*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=h*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V1,t,k1)}lookAt(t,n,r){const o=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),qa.crossVectors(r,ei),qa.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),qa.crossVectors(r,ei)),qa.normalize(),Wc.crossVectors(ei,qa),o[0]=qa.x,o[4]=Wc.x,o[8]=ei.x,o[1]=qa.y,o[5]=Wc.y,o[9]=ei.y,o[2]=qa.z,o[6]=Wc.z,o[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,f=r[0],h=r[4],d=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],M=r[2],b=r[6],y=r[10],x=r[14],L=r[3],w=r[7],C=r[11],F=r[15],G=o[0],z=o[4],j=o[8],U=o[12],D=o[1],H=o[5],st=o[9],nt=o[13],ht=o[2],ft=o[6],I=o[10],Y=o[14],W=o[3],Et=o[7],N=o[11],tt=o[15];return c[0]=f*G+h*D+d*ht+p*W,c[4]=f*z+h*H+d*ft+p*Et,c[8]=f*j+h*st+d*I+p*N,c[12]=f*U+h*nt+d*Y+p*tt,c[1]=g*G+_*D+v*ht+S*W,c[5]=g*z+_*H+v*ft+S*Et,c[9]=g*j+_*st+v*I+S*N,c[13]=g*U+_*nt+v*Y+S*tt,c[2]=M*G+b*D+y*ht+x*W,c[6]=M*z+b*H+y*ft+x*Et,c[10]=M*j+b*st+y*I+x*N,c[14]=M*U+b*nt+y*Y+x*tt,c[3]=L*G+w*D+C*ht+F*W,c[7]=L*z+w*H+C*ft+F*Et,c[11]=L*j+w*st+C*I+F*N,c[15]=L*U+w*nt+C*Y+F*tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],c=t[12],f=t[1],h=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],S=t[14],M=t[3],b=t[7],y=t[11],x=t[15];return M*(+c*d*_-o*p*_-c*h*v+r*p*v+o*h*S-r*d*S)+b*(+n*d*S-n*p*v+c*f*v-o*f*S+o*p*g-c*d*g)+y*(+n*p*_-n*h*S-c*f*_+r*f*S+c*h*g-r*p*g)+x*(-o*h*g-n*d*_+n*h*v+o*f*_-r*f*v+r*d*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],f=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],S=t[11],M=t[12],b=t[13],y=t[14],x=t[15],L=_*y*p-b*v*p+b*d*S-h*y*S-_*d*x+h*v*x,w=M*v*p-g*y*p-M*d*S+f*y*S+g*d*x-f*v*x,C=g*b*p-M*_*p+M*h*S-f*b*S-g*h*x+f*_*x,F=M*_*d-g*b*d-M*h*v+f*b*v+g*h*y-f*_*y,G=n*L+r*w+o*C+c*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return t[0]=L*z,t[1]=(b*v*c-_*y*c-b*o*S+r*y*S+_*o*x-r*v*x)*z,t[2]=(h*y*c-b*d*c+b*o*p-r*y*p-h*o*x+r*d*x)*z,t[3]=(_*d*c-h*v*c-_*o*p+r*v*p+h*o*S-r*d*S)*z,t[4]=w*z,t[5]=(g*y*c-M*v*c+M*o*S-n*y*S-g*o*x+n*v*x)*z,t[6]=(M*d*c-f*y*c-M*o*p+n*y*p+f*o*x-n*d*x)*z,t[7]=(f*v*c-g*d*c+g*o*p-n*v*p-f*o*S+n*d*S)*z,t[8]=C*z,t[9]=(M*_*c-g*b*c-M*r*S+n*b*S+g*r*x-n*_*x)*z,t[10]=(f*b*c-M*h*c+M*r*p-n*b*p-f*r*x+n*h*x)*z,t[11]=(g*h*c-f*_*c-g*r*p+n*_*p+f*r*S-n*h*S)*z,t[12]=F*z,t[13]=(g*b*o-M*_*o+M*r*v-n*b*v-g*r*y+n*_*y)*z,t[14]=(M*h*o-f*b*o-M*r*d+n*b*d+f*r*y-n*h*y)*z,t[15]=(f*_*o-g*h*o+g*r*d-n*_*d-f*r*v+n*h*v)*z,this}scale(t){const n=this.elements,r=t.x,o=t.y,c=t.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=t.x,h=t.y,d=t.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+r,g*d-o*f,0,p*d-o*h,g*d+o*f,c*d*d+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,c,f){return this.set(1,r,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,c=n._x,f=n._y,h=n._z,d=n._w,p=c+c,g=f+f,_=h+h,v=c*p,S=c*g,M=c*_,b=f*g,y=f*_,x=h*_,L=d*p,w=d*g,C=d*_,F=r.x,G=r.y,z=r.z;return o[0]=(1-(b+x))*F,o[1]=(S+C)*F,o[2]=(M-w)*F,o[3]=0,o[4]=(S-C)*G,o[5]=(1-(v+x))*G,o[6]=(y+L)*G,o[7]=0,o[8]=(M+w)*z,o[9]=(y-L)*z,o[10]=(1-(v+b))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;let c=Us.set(o[0],o[1],o[2]).length();const f=Us.set(o[4],o[5],o[6]).length(),h=Us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],vi.copy(this);const p=1/c,g=1/f,_=1/h;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,n.setFromRotationMatrix(vi),r.x=c,r.y=f,r.z=h,this}makePerspective(t,n,r,o,c,f,h=da){const d=this.elements,p=2*c/(n-t),g=2*c/(r-o),_=(n+t)/(n-t),v=(r+o)/(r-o);let S,M;if(h===da)S=-(f+c)/(f-c),M=-2*f*c/(f-c);else if(h===xu)S=-f/(f-c),M=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,r,o,c,f,h=da){const d=this.elements,p=1/(n-t),g=1/(r-o),_=1/(f-c),v=(n+t)*p,S=(r+o)*g;let M,b;if(h===da)M=(f+c)*_,b=-2*_;else if(h===xu)M=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=b,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Us=new it,vi=new $e,V1=new it(0,0,0),k1=new it(1,1,1),qa=new it,Wc=new it,ei=new it,w0=new $e,D0=new Vr;class Ii{constructor(t=0,n=0,r=0,o=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],d=o[1],p=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return w0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(w0,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return D0.setFromEuler(this),this.setFromQuaternion(D0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let X1=0;const U0=new it,Ls=new Vr,sa=new $e,jc=new it,il=new it,W1=new it,j1=new Vr,L0=new it(1,0,0),N0=new it(0,1,0),O0=new it(0,0,1),P0={type:"added"},Y1={type:"removed"},Ns={type:"childadded",child:null},ud={type:"childremoved",child:null};class Pn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const t=new it,n=new Ii,r=new Vr,o=new it(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $e},normalMatrix:{value:new ue}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ls.setFromAxisAngle(t,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,n){return Ls.setFromAxisAngle(t,n),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(L0,t)}rotateY(t){return this.rotateOnAxis(N0,t)}rotateZ(t){return this.rotateOnAxis(O0,t)}translateOnAxis(t,n){return U0.copy(t).applyQuaternion(this.quaternion),this.position.add(U0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(L0,t)}translateY(t){return this.translateOnAxis(N0,t)}translateZ(t){return this.translateOnAxis(O0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?jc.copy(t):jc.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(il,jc,this.up):sa.lookAt(jc,il,this.up),this.quaternion.setFromRotationMatrix(sa),o&&(sa.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(sa),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P0),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Y1),ud.child=t,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P0),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,t,W1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(il,j1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];c(t.shapes,_)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(t.animations,d))}}if(n){const h=f(t.geometries),d=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),M=f(t.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function f(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Pn.DEFAULT_UP=new it(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new it,oa=new it,fd=new it,la=new it,Os=new it,Ps=new it,I0=new it,hd=new it,dd=new it,pd=new it,md=new nn,gd=new nn,_d=new nn;class yi{constructor(t=new it,n=new it,r=new it){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),xi.subVectors(t,n),o.cross(xi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,r,o,c){xi.subVectors(o,n),oa.subVectors(r,n),fd.subVectors(t,n);const f=xi.dot(xi),h=xi.dot(oa),d=xi.dot(fd),p=oa.dot(oa),g=oa.dot(fd),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(p*d-h*g)*v,M=(f*g-h*d)*v;return c.set(1-S-M,M,S)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,n,r,o,c,f,h,d){return this.getBarycoord(t,n,r,o,la)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,la.x),d.addScaledVector(f,la.y),d.addScaledVector(h,la.z),d)}static getInterpolatedAttribute(t,n,r,o,c,f){return md.setScalar(0),gd.setScalar(0),_d.setScalar(0),md.fromBufferAttribute(t,n),gd.fromBufferAttribute(t,r),_d.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(md,c.x),f.addScaledVector(gd,c.y),f.addScaledVector(_d,c.z),f}static isFrontFacing(t,n,r,o){return xi.subVectors(r,n),oa.subVectors(t,n),xi.cross(oa).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),xi.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return yi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,c){return yi.getInterpolation(t,this.a,this.b,this.c,n,r,o,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,c=this.c;let f,h;Os.subVectors(o,r),Ps.subVectors(c,r),hd.subVectors(t,r);const d=Os.dot(hd),p=Ps.dot(hd);if(d<=0&&p<=0)return n.copy(r);dd.subVectors(t,o);const g=Os.dot(dd),_=Ps.dot(dd);if(g>=0&&_<=g)return n.copy(o);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return f=d/(d-g),n.copy(r).addScaledVector(Os,f);pd.subVectors(t,c);const S=Os.dot(pd),M=Ps.dot(pd);if(M>=0&&S<=M)return n.copy(c);const b=S*p-d*M;if(b<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(r).addScaledVector(Ps,h);const y=g*M-S*_;if(y<=0&&_-g>=0&&S-M>=0)return I0.subVectors(c,o),h=(_-g)/(_-g+(S-M)),n.copy(o).addScaledVector(I0,h);const x=1/(y+b+v);return f=b*x,h=v*x,n.copy(r).addScaledVector(Os,f).addScaledVector(Ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Yc={h:0,s:0,l:0};function vd(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class be{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,r,o=we.workingColorSpace){return this.r=t,this.g=n,this.b=r,we.colorSpaceToWorking(this,o),this}setHSL(t,n,r,o=we.workingColorSpace){if(t=nm(t,1),n=_e(n,0,1),r=_e(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=vd(f,c,t+1/3),this.g=vd(f,c,t),this.b=vd(f,c,t-1/3)}return we.colorSpaceToWorking(this,o),this}setStyle(t,n=fi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fi){const r=Hy[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return we.workingToColorSpace(On.copy(this),t),Math.round(_e(On.r*255,0,255))*65536+Math.round(_e(On.g*255,0,255))*256+Math.round(_e(On.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(On.copy(this),n);const r=On.r,o=On.g,c=On.b,f=Math.max(r,o,c),h=Math.min(r,o,c);let d,p;const g=(h+f)/2;if(h===f)d=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case r:d=(o-c)/_+(o<c?6:0);break;case o:d=(c-r)/_+2;break;case c:d=(r-o)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(On.copy(this),n),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=fi){we.workingToColorSpace(On.copy(this),t);const n=On.r,r=On.g,o=On.b;return t!==fi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+n,Za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Za),t.getHSL(Yc);const r=cl(Za.h,Yc.h,n),o=cl(Za.s,Yc.s,n),c=cl(Za.l,Yc.l,n);return this.setHSL(r,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new be;be.NAMES=Hy;let q1=0;class bl extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=no(),this.name="",this.type="Material",this.blending=js,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Vd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gd&&(r.blendSrc=this.blendSrc),this.blendDst!==Vd&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const h in c){const d=c[h];delete d.metadata,f.push(d)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class om extends bl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new it,qc=new oe;let Z1=0;class Ni{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=E0,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)qc.fromBufferAttribute(this,n),qc.applyMatrix3(t),this.setXY(n,qc.x,qc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Hs(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Bn(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Hs(n,this.array)),n}setX(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Hs(n,this.array)),n}setY(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Hs(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Hs(n,this.array)),n}setW(t,n){return this.normalized&&(n=Bn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,c){return t*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array),c=Bn(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==E0&&(t.usage=this.usage),t}}class Gy extends Ni{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Vy extends Ni{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Oi extends Ni{constructor(t,n,r){super(new Float32Array(t),n,r)}}let K1=0;const ui=new $e,xd=new Pn,Is=new it,ni=new Tl,al=new Tl,Mn=new it;class rr extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zy(t)?Vy:Gy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,n,r){return ui.makeTranslation(t,n,r),this.applyMatrix4(ui),this}scale(t,n,r){return ui.makeScale(t,n,r),this.applyMatrix4(ui),this}lookAt(t){return xd.lookAt(t),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Oi(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new am);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];al.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ni.min,al.min),ni.expandByPoint(Mn),Mn.addVectors(ni.max,al.max),ni.expandByPoint(Mn)):(ni.expandByPoint(al.min),ni.expandByPoint(al.max))}ni.getCenter(r);let o=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),o=Math.max(o,r.distanceToSquared(Mn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),d&&(Is.fromBufferAttribute(t,p),Mn.add(Is)),o=Math.max(o,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],d=[];for(let j=0;j<r.count;j++)h[j]=new it,d[j]=new it;const p=new it,g=new it,_=new it,v=new oe,S=new oe,M=new oe,b=new it,y=new it;function x(j,U,D){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,D),v.fromBufferAttribute(c,j),S.fromBufferAttribute(c,U),M.fromBufferAttribute(c,D),g.sub(p),_.sub(p),S.sub(v),M.sub(v);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(H),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(H),h[j].add(b),h[U].add(b),h[D].add(b),d[j].add(y),d[U].add(y),d[D].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let j=0,U=L.length;j<U;++j){const D=L[j],H=D.start,st=D.count;for(let nt=H,ht=H+st;nt<ht;nt+=3)x(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const w=new it,C=new it,F=new it,G=new it;function z(j){F.fromBufferAttribute(o,j),G.copy(F);const U=h[j];w.copy(U),w.sub(F.multiplyScalar(F.dot(U))).normalize(),C.crossVectors(G,U);const H=C.dot(d[j])<0?-1:1;f.setXYZW(j,w.x,w.y,w.z,H)}for(let j=0,U=L.length;j<U;++j){const D=L[j],H=D.start,st=D.count;for(let nt=H,ht=H+st;nt<ht;nt+=3)z(t.getX(nt+0)),z(t.getX(nt+1)),z(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new it,c=new it,f=new it,h=new it,d=new it,p=new it,g=new it,_=new it;if(t)for(let v=0,S=t.count;v<S;v+=3){const M=t.getX(v+0),b=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,y),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),h.add(g),d.add(g),p.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),_.subVectors(o,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Mn.fromBufferAttribute(t,n),Mn.normalize(),t.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let S=0,M=0;for(let b=0,y=d.length;b<y;b++){h.isInterleavedBufferAttribute?S=d[b]*h.data.stride+h.offset:S=d[b]*g;for(let x=0;x<g;x++)v[M++]=p[S++]}return new Ni(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,r=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=t(d,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=t(v,r);d.push(S)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,d=f.length;h<d;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const d in r){const p=r[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(o[d]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B0=new $e,Rr=new rm,Zc=new am,z0=new it,Kc=new it,Qc=new it,$c=new it,yd=new it,Jc=new it,F0=new it,tu=new it;class di extends Pn{constructor(t=new rr,n=new om){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Jc.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],_=c[d];g!==0&&(yd.fromBufferAttribute(_,t),f?Jc.addScaledVector(yd,g):Jc.addScaledVector(yd.sub(n),g))}n.add(Jc)}return n}raycast(t,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Zc.copy(r.boundingSphere),Zc.applyMatrix4(c),Rr.copy(t.ray).recast(t.near),!(Zc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Zc,z0)===null||Rr.origin.distanceToSquared(z0)>(t.far-t.near)**2))&&(B0.copy(c).invert(),Rr.copy(t.ray).applyMatrix4(B0),!(r.boundingBox!==null&&Rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Rr)))}_computeIntersections(t,n,r){let o;const c=this.geometry,f=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,b=v.length;M<b;M++){const y=v[M],x=f[y.materialIndex],L=Math.max(y.start,S.start),w=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,F=w;C<F;C+=3){const G=h.getX(C),z=h.getX(C+1),j=h.getX(C+2);o=eu(this,x,t,r,p,g,_,G,z,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let y=M,x=b;y<x;y+=3){const L=h.getX(y),w=h.getX(y+1),C=h.getX(y+2);o=eu(this,f,t,r,p,g,_,L,w,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(f))for(let M=0,b=v.length;M<b;M++){const y=v[M],x=f[y.materialIndex],L=Math.max(y.start,S.start),w=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=L,F=w;C<F;C+=3){const G=C,z=C+1,j=C+2;o=eu(this,x,t,r,p,g,_,G,z,j),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let y=M,x=b;y<x;y+=3){const L=y,w=y+1,C=y+2;o=eu(this,f,t,r,p,g,_,L,w,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Q1(a,t,n,r,o,c,f,h){let d;if(t.side===jn?d=r.intersectTriangle(f,c,o,!0,h):d=r.intersectTriangle(o,c,f,t.side===ir,h),d===null)return null;tu.copy(h),tu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(tu);return p<n.near||p>n.far?null:{distance:p,point:tu.clone(),object:a}}function eu(a,t,n,r,o,c,f,h,d,p){a.getVertexPosition(h,Kc),a.getVertexPosition(d,Qc),a.getVertexPosition(p,$c);const g=Q1(a,t,n,r,Kc,Qc,$c,F0);if(g){const _=new it;yi.getBarycoord(F0,Kc,Qc,$c,_),o&&(g.uv=yi.getInterpolatedAttribute(o,h,d,p,_,new oe)),c&&(g.uv1=yi.getInterpolatedAttribute(c,h,d,p,_,new oe)),f&&(g.normal=yi.getInterpolatedAttribute(f,h,d,p,_,new it),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new it,materialIndex:0};yi.getNormal(Kc,Qc,$c,v.normal),g.face=v,g.barycoord=_}return g}class Al extends rr{constructor(t=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const d=[],p=[],g=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,r,n,t,f,c,0),M("z","y","x",1,-1,r,n,-t,f,c,1),M("x","z","y",1,1,t,r,n,o,f,2),M("x","z","y",1,-1,t,r,-n,o,f,3),M("x","y","z",1,-1,t,n,r,o,c,4),M("x","y","z",-1,-1,t,n,-r,o,c,5),this.setIndex(d),this.setAttribute("position",new Oi(p,3)),this.setAttribute("normal",new Oi(g,3)),this.setAttribute("uv",new Oi(_,2));function M(b,y,x,L,w,C,F,G,z,j,U){const D=C/z,H=F/j,st=C/2,nt=F/2,ht=G/2,ft=z+1,I=j+1;let Y=0,W=0;const Et=new it;for(let N=0;N<I;N++){const tt=N*H-nt;for(let yt=0;yt<ft;yt++){const St=yt*D-st;Et[b]=St*L,Et[y]=tt*w,Et[x]=ht,p.push(Et.x,Et.y,Et.z),Et[b]=0,Et[y]=0,Et[x]=G>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(yt/z),_.push(1-N/j),Y+=1}}for(let N=0;N<j;N++)for(let tt=0;tt<z;tt++){const yt=v+tt+ft*N,St=v+tt+ft*(N+1),Z=v+(tt+1)+ft*(N+1),pt=v+(tt+1)+ft*N;d.push(yt,St,pt),d.push(St,Z,pt),W+=6}h.addGroup(S,W,U),S+=W,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(a){const t={};for(const n in a){t[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function zn(a){const t={};for(let n=0;n<a.length;n++){const r=to(a[n]);for(const o in r)t[o]=r[o]}return t}function $1(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function ky(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const J1={clone:to,merge:zn};var tR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends bl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tR,this.fragmentShader=eR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=$1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Xy extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=da}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new it,H0=new oe,G0=new oe;class hi extends Xy{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,n){return this.getViewBounds(t,H0,G0),n.subVectors(G0,H0)}setViewOffset(t,n,r,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ll*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/d,n-=f.offsetY*r/p,o*=f.width/d,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,zs=1;class nR extends Pn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(Bs,zs,t,n);o.layers=this.layers,this.add(o);const c=new hi(Bs,zs,t,n);c.layers=this.layers,this.add(c);const f=new hi(Bs,zs,t,n);f.layers=this.layers,this.add(f);const h=new hi(Bs,zs,t,n);h.layers=this.layers,this.add(h);const d=new hi(Bs,zs,t,n);d.layers=this.layers,this.add(d);const p=new hi(Bs,zs,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,h,d]=n;for(const p of n)this.remove(p);if(t===da)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===xu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,c),t.setRenderTarget(r,1,o),t.render(n,f),t.setRenderTarget(r,2,o),t.render(n,h),t.setRenderTarget(r,3,o),t.render(n,d),t.setRenderTarget(r,4,o),t.render(n,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(_,v,S),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Wy extends Fn{constructor(t=[],n=Qs,r,o,c,f,h,d,p,g){super(t,n,r,o,c,f,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iR extends kr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new Wy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Al(5,5,5),c=new ar({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:er});c.uniforms.tEquirect.value=n;const f=new di(o,c),h=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Li),new nR(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,r,o);t.setRenderTarget(c)}}class sl extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aR={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,c=null,f=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const y=n.getJointPose(b,r),x=this._getHandJoint(p,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(aR)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new sl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class rR extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ed=new it,sR=new it,oR=new ue;class Qa{constructor(t=new it(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=Ed.subVectors(r,n).cross(sR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||oR.getNormalMatrix(t),o=this.coplanarPoint(Ed).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new am,nu=new it;class lm{constructor(t=new Qa,n=new Qa,r=new Qa,o=new Qa,c=new Qa,f=new Qa){this.planes=[t,n,r,o,c,f]}set(t,n,r,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=da){const r=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],d=o[3],p=o[4],g=o[5],_=o[6],v=o[7],S=o[8],M=o[9],b=o[10],y=o[11],x=o[12],L=o[13],w=o[14],C=o[15];if(r[0].setComponents(d-c,v-p,y-S,C-x).normalize(),r[1].setComponents(d+c,v+p,y+S,C+x).normalize(),r[2].setComponents(d+f,v+g,y+M,C+L).normalize(),r[3].setComponents(d-f,v-g,y-M,C-L).normalize(),r[4].setComponents(d-h,v-_,y-b,C-w).normalize(),n===da)r[5].setComponents(d+h,v+_,y+b,C+w).normalize();else if(n===xu)r[5].setComponents(h,_,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(nu.x=o.normal.x>0?t.max.x:t.min.x,nu.y=o.normal.y>0?t.max.y:t.min.y,nu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(nu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jy extends Fn{constructor(t,n,r=Gr,o,c,f,h=Ei,d=Ei,p,g=pl,_=1){if(g!==pl&&g!==ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,f,h,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new im(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Du extends rr{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(r),d=Math.floor(o),p=h+1,g=d+1,_=t/h,v=n/d,S=[],M=[],b=[],y=[];for(let x=0;x<g;x++){const L=x*v-f;for(let w=0;w<p;w++){const C=w*_-c;M.push(C,-L,0),b.push(0,0,1),y.push(w/h),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<h;L++){const w=L+p*x,C=L+p*(x+1),F=L+1+p*(x+1),G=L+1+p*x;S.push(w,C,G),S.push(C,F,G)}this.setIndex(S),this.setAttribute("position",new Oi(M,3)),this.setAttribute("normal",new Oi(b,3)),this.setAttribute("uv",new Oi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Du(t.width,t.height,t.widthSegments,t.heightSegments)}}class ul extends rr{constructor(t=1,n=32,r=16,o=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const d=Math.min(f+h,Math.PI);let p=0;const g=[],_=new it,v=new it,S=[],M=[],b=[],y=[];for(let x=0;x<=r;x++){const L=[],w=x/r;let C=0;x===0&&f===0?C=.5/n:x===r&&d===Math.PI&&(C=-.5/n);for(let F=0;F<=n;F++){const G=F/n;_.x=-t*Math.cos(o+G*c)*Math.sin(f+w*h),_.y=t*Math.cos(f+w*h),_.z=t*Math.sin(o+G*c)*Math.sin(f+w*h),M.push(_.x,_.y,_.z),v.copy(_).normalize(),b.push(v.x,v.y,v.z),y.push(G+C,1-w),L.push(p++)}g.push(L)}for(let x=0;x<r;x++)for(let L=0;L<n;L++){const w=g[x][L+1],C=g[x][L],F=g[x+1][L],G=g[x+1][L+1];(x!==0||f>0)&&S.push(w,C,G),(x!==r-1||d<Math.PI)&&S.push(C,F,G)}this.setIndex(S),this.setAttribute("position",new Oi(M,3)),this.setAttribute("normal",new Oi(b,3)),this.setAttribute("uv",new Oi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class V0 extends bl{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iy,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lR extends bl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cR extends bl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const k0={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class uR{constructor(t,n,r){const o=this;let c=!1,f=0,h=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=r,this.itemStart=function(g){h++,c===!1&&o.onStart!==void 0&&o.onStart(g,f,h),c=!0},this.itemEnd=function(g){f++,o.onProgress!==void 0&&o.onProgress(g,f,h),f===h&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],M=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const fR=new uR;class cm{constructor(t){this.manager=t!==void 0?t:fR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const r=this;return new Promise(function(o,c){r.load(t,o,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}cm.DEFAULT_MATERIAL_NAME="__DEFAULT";class hR extends cm{constructor(t){super(t)}load(t,n,r,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=k0.get(t);if(f!==void 0)return c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0),f;const h=_l("img");function d(){g(),k0.add(t,this),n&&n(this),c.manager.itemEnd(t)}function p(_){g(),o&&o(_),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){h.removeEventListener("load",d,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),c.manager.itemStart(t),h.src=t,h}}class dR extends cm{constructor(t){super(t)}load(t,n,r,o){const c=new Fn,f=new hR(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},r,o),c}}class Yy extends Pn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Md=new $e,X0=new it,W0=new it;class pR{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lm,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,r=this.matrix;X0.setFromMatrixPosition(t.matrixWorld),n.position.copy(X0),W0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(W0),n.updateMatrixWorld(),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qy extends Xy{constructor(t=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mR extends pR{constructor(){super(new qy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gR extends Yy{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new mR}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _R extends Yy{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class vR extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const j0=new $e;class xR{constructor(t,n,r=0,o=1/0){this.ray=new rm(t,n),this.near=r,this.far=o,this.camera=null,this.layers=new sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return j0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(j0),this}intersectObject(t,n=!0,r=[]){return Rp(t,this,r,n),r.sort(Y0),r}intersectObjects(t,n=!0,r=[]){for(let o=0,c=t.length;o<c;o++)Rp(t[o],this,r,n);return r.sort(Y0),r}}function Y0(a,t){return a.distance-t.distance}function Rp(a,t,n,r){let o=!0;if(a.layers.test(t.layers)&&a.raycast(t,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let f=0,h=c.length;f<h;f++)Rp(c[f],t,n,!0)}}class q0{constructor(t=1,n=0,r=0){this.radius=t,this.phi=n,this.theta=r}set(t,n,r){return this.radius=t,this.phi=n,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,r){return this.radius=Math.sqrt(t*t+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(_e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class yR extends jr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Z0(a,t,n,r){const o=SR(r);switch(n){case Uy:return a*t;case Ny:return a*t/o.components*o.byteLength;case Jp:return a*t/o.components*o.byteLength;case Oy:return a*t*2/o.components*o.byteLength;case tm:return a*t*2/o.components*o.byteLength;case Ly:return a*t*3/o.components*o.byteLength;case Si:return a*t*4/o.components*o.byteLength;case em:return a*t*4/o.components*o.byteLength;case cu:case uu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case fu:case hu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case ep:case ip:return Math.max(a,16)*Math.max(t,8)/4;case tp:case np:return Math.max(a,8)*Math.max(t,8)/2;case ap:case rp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case sp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case op:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case lp:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case cp:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case up:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case fp:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case hp:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case dp:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case pp:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case mp:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case gp:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case _p:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case vp:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case xp:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case yp:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case du:case Sp:case Ep:return Math.ceil(a/4)*Math.ceil(t/4)*16;case Py:case Mp:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Tp:case bp:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SR(a){switch(a){case Pi:case Cy:return{byteLength:1,components:1};case hl:case wy:case Ml:return{byteLength:2,components:1};case Qp:case $p:return{byteLength:2,components:4};case Gr:case Kp:case ha:return{byteLength:4,components:1};case Dy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zy(){let a=null,t=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=a.requestAnimationFrame(o),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function ER(a){const t=new WeakMap;function n(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=a.createBuffer();a.bindBuffer(d,v),a.bufferData(d,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,d,p){const g=d.array,_=d.updateRanges;if(a.bindBuffer(p,h),_.length===0)a.bufferSubData(p,0,g);else{_.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<_.length;S++){const M=_[v],b=_[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++v,_[v]=b)}_.length=v+1;for(let S=0,M=_.length;S<M;S++){const b=_[S];a.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(a.deleteBuffer(d.buffer),t.delete(h))}function f(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:f}}var MR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$R=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JR="gl_FragColor = linearToOutputTexel( gl_FragColor );",tC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_C=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,EC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$C=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_w=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ww=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$w=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:MR,alphahash_pars_fragment:TR,alphamap_fragment:bR,alphamap_pars_fragment:AR,alphatest_fragment:RR,alphatest_pars_fragment:CR,aomap_fragment:wR,aomap_pars_fragment:DR,batching_pars_vertex:UR,batching_vertex:LR,begin_vertex:NR,beginnormal_vertex:OR,bsdfs:PR,iridescence_fragment:IR,bumpmap_pars_fragment:BR,clipping_planes_fragment:zR,clipping_planes_pars_fragment:FR,clipping_planes_pars_vertex:HR,clipping_planes_vertex:GR,color_fragment:VR,color_pars_fragment:kR,color_pars_vertex:XR,color_vertex:WR,common:jR,cube_uv_reflection_fragment:YR,defaultnormal_vertex:qR,displacementmap_pars_vertex:ZR,displacementmap_vertex:KR,emissivemap_fragment:QR,emissivemap_pars_fragment:$R,colorspace_fragment:JR,colorspace_pars_fragment:tC,envmap_fragment:eC,envmap_common_pars_fragment:nC,envmap_pars_fragment:iC,envmap_pars_vertex:aC,envmap_physical_pars_fragment:mC,envmap_vertex:rC,fog_vertex:sC,fog_pars_vertex:oC,fog_fragment:lC,fog_pars_fragment:cC,gradientmap_pars_fragment:uC,lightmap_pars_fragment:fC,lights_lambert_fragment:hC,lights_lambert_pars_fragment:dC,lights_pars_begin:pC,lights_toon_fragment:gC,lights_toon_pars_fragment:_C,lights_phong_fragment:vC,lights_phong_pars_fragment:xC,lights_physical_fragment:yC,lights_physical_pars_fragment:SC,lights_fragment_begin:EC,lights_fragment_maps:MC,lights_fragment_end:TC,logdepthbuf_fragment:bC,logdepthbuf_pars_fragment:AC,logdepthbuf_pars_vertex:RC,logdepthbuf_vertex:CC,map_fragment:wC,map_pars_fragment:DC,map_particle_fragment:UC,map_particle_pars_fragment:LC,metalnessmap_fragment:NC,metalnessmap_pars_fragment:OC,morphinstance_vertex:PC,morphcolor_vertex:IC,morphnormal_vertex:BC,morphtarget_pars_vertex:zC,morphtarget_vertex:FC,normal_fragment_begin:HC,normal_fragment_maps:GC,normal_pars_fragment:VC,normal_pars_vertex:kC,normal_vertex:XC,normalmap_pars_fragment:WC,clearcoat_normal_fragment_begin:jC,clearcoat_normal_fragment_maps:YC,clearcoat_pars_fragment:qC,iridescence_pars_fragment:ZC,opaque_fragment:KC,packing:QC,premultiplied_alpha_fragment:$C,project_vertex:JC,dithering_fragment:tw,dithering_pars_fragment:ew,roughnessmap_fragment:nw,roughnessmap_pars_fragment:iw,shadowmap_pars_fragment:aw,shadowmap_pars_vertex:rw,shadowmap_vertex:sw,shadowmask_pars_fragment:ow,skinbase_vertex:lw,skinning_pars_vertex:cw,skinning_vertex:uw,skinnormal_vertex:fw,specularmap_fragment:hw,specularmap_pars_fragment:dw,tonemapping_fragment:pw,tonemapping_pars_fragment:mw,transmission_fragment:gw,transmission_pars_fragment:_w,uv_pars_fragment:vw,uv_pars_vertex:xw,uv_vertex:yw,worldpos_vertex:Sw,background_vert:Ew,background_frag:Mw,backgroundCube_vert:Tw,backgroundCube_frag:bw,cube_vert:Aw,cube_frag:Rw,depth_vert:Cw,depth_frag:ww,distanceRGBA_vert:Dw,distanceRGBA_frag:Uw,equirect_vert:Lw,equirect_frag:Nw,linedashed_vert:Ow,linedashed_frag:Pw,meshbasic_vert:Iw,meshbasic_frag:Bw,meshlambert_vert:zw,meshlambert_frag:Fw,meshmatcap_vert:Hw,meshmatcap_frag:Gw,meshnormal_vert:Vw,meshnormal_frag:kw,meshphong_vert:Xw,meshphong_frag:Ww,meshphysical_vert:jw,meshphysical_frag:Yw,meshtoon_vert:qw,meshtoon_frag:Zw,points_vert:Kw,points_frag:Qw,shadow_vert:$w,shadow_frag:Jw,sprite_vert:tD,sprite_frag:eD},Ot={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ui={basic:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new be(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:zn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:zn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new be(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:zn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:zn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:zn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:zn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:zn([Ot.common,Ot.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:zn([Ot.lights,Ot.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ui.physical={uniforms:zn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const iu={r:0,b:0,g:0},wr=new Ii,nD=new $e;function iD(a,t,n,r,o,c,f){const h=new be(0);let d=c===!0?0:1,p,g,_=null,v=0,S=null;function M(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?n:t).get(C)),C}function b(w){let C=!1;const F=M(w);F===null?x(h,d):F&&F.isColor&&(x(F,1),C=!0);const G=a.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(w,C){const F=M(C);F&&(F.isCubeTexture||F.mapping===wu)?(g===void 0&&(g=new di(new Al(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:to(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),wr.copy(C.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(nD.makeRotationFromEuler(wr)),g.material.toneMapped=we.getTransfer(F.colorSpace)!==Ge,(_!==F||v!==F.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,_=F,v=F.version,S=a.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new di(new Du(2,2),new ar({name:"BackgroundMaterial",uniforms:to(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=we.getTransfer(F.colorSpace)!==Ge,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||v!==F.version||S!==a.toneMapping)&&(p.material.needsUpdate=!0,_=F,v=F.version,S=a.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function x(w,C){w.getRGB(iu,ky(a)),r.buffers.color.setClear(iu.r,iu.g,iu.b,C,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,C=1){h.set(w),d=C,x(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,x(h,d)},render:b,addToRenderList:y,dispose:L}}function aD(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,f=!1;function h(D,H,st,nt,ht){let ft=!1;const I=_(nt,st,H);c!==I&&(c=I,p(c.object)),ft=S(D,nt,st,ht),ft&&M(D,nt,st,ht),ht!==null&&t.update(ht,a.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,C(D,H,st,nt),ht!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function d(){return a.createVertexArray()}function p(D){return a.bindVertexArray(D)}function g(D){return a.deleteVertexArray(D)}function _(D,H,st){const nt=st.wireframe===!0;let ht=r[D.id];ht===void 0&&(ht={},r[D.id]=ht);let ft=ht[H.id];ft===void 0&&(ft={},ht[H.id]=ft);let I=ft[nt];return I===void 0&&(I=v(d()),ft[nt]=I),I}function v(D){const H=[],st=[],nt=[];for(let ht=0;ht<n;ht++)H[ht]=0,st[ht]=0,nt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:nt,object:D,attributes:{},index:null}}function S(D,H,st,nt){const ht=c.attributes,ft=H.attributes;let I=0;const Y=st.getAttributes();for(const W in Y)if(Y[W].location>=0){const N=ht[W];let tt=ft[W];if(tt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;I++}return c.attributesNum!==I||c.index!==nt}function M(D,H,st,nt){const ht={},ft=H.attributes;let I=0;const Y=st.getAttributes();for(const W in Y)if(Y[W].location>=0){let N=ft[W];N===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),ht[W]=tt,I++}c.attributes=ht,c.attributesNum=I,c.index=nt}function b(){const D=c.newAttributes;for(let H=0,st=D.length;H<st;H++)D[H]=0}function y(D){x(D,0)}function x(D,H){const st=c.newAttributes,nt=c.enabledAttributes,ht=c.attributeDivisors;st[D]=1,nt[D]===0&&(a.enableVertexAttribArray(D),nt[D]=1),ht[D]!==H&&(a.vertexAttribDivisor(D,H),ht[D]=H)}function L(){const D=c.newAttributes,H=c.enabledAttributes;for(let st=0,nt=H.length;st<nt;st++)H[st]!==D[st]&&(a.disableVertexAttribArray(st),H[st]=0)}function w(D,H,st,nt,ht,ft,I){I===!0?a.vertexAttribIPointer(D,H,st,ht,ft):a.vertexAttribPointer(D,H,st,nt,ht,ft)}function C(D,H,st,nt){b();const ht=nt.attributes,ft=st.getAttributes(),I=H.defaultAttributeValues;for(const Y in ft){const W=ft[Y];if(W.location>=0){let Et=ht[Y];if(Et===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Et=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Et=D.instanceColor)),Et!==void 0){const N=Et.normalized,tt=Et.itemSize,yt=t.get(Et);if(yt===void 0)continue;const St=yt.buffer,Z=yt.type,pt=yt.bytesPerElement,Tt=Z===a.INT||Z===a.UNSIGNED_INT||Et.gpuType===Kp;if(Et.isInterleavedBufferAttribute){const Ct=Et.data,wt=Ct.stride,se=Et.offset;if(Ct.isInstancedInterleavedBuffer){for(let qt=0;qt<W.locationSize;qt++)x(W.location+qt,Ct.meshPerAttribute);D.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let qt=0;qt<W.locationSize;qt++)y(W.location+qt);a.bindBuffer(a.ARRAY_BUFFER,St);for(let qt=0;qt<W.locationSize;qt++)w(W.location+qt,tt/W.locationSize,Z,N,wt*pt,(se+tt/W.locationSize*qt)*pt,Tt)}else{if(Et.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)x(W.location+Ct,Et.meshPerAttribute);D.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)y(W.location+Ct);a.bindBuffer(a.ARRAY_BUFFER,St);for(let Ct=0;Ct<W.locationSize;Ct++)w(W.location+Ct,tt/W.locationSize,Z,N,tt*pt,tt/W.locationSize*Ct*pt,Tt)}}else if(I!==void 0){const N=I[Y];if(N!==void 0)switch(N.length){case 2:a.vertexAttrib2fv(W.location,N);break;case 3:a.vertexAttrib3fv(W.location,N);break;case 4:a.vertexAttrib4fv(W.location,N);break;default:a.vertexAttrib1fv(W.location,N)}}}}L()}function F(){j();for(const D in r){const H=r[D];for(const st in H){const nt=H[st];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete H[st]}delete r[D]}}function G(D){if(r[D.id]===void 0)return;const H=r[D.id];for(const st in H){const nt=H[st];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete H[st]}delete r[D.id]}function z(D){for(const H in r){const st=r[H];if(st[D.id]===void 0)continue;const nt=st[D.id];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete st[D.id]}}function j(){U(),f=!0,c!==o&&(c=o,p(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:j,resetDefaultState:U,dispose:F,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:L}}function rD(a,t,n){let r;function o(p){r=p}function c(p,g){a.drawArrays(r,p,g),n.update(g,r,1)}function f(p,g,_){_!==0&&(a.drawArraysInstanced(r,p,g,_),n.update(g,r,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,r,1)}function d(p,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)f(p[M],g[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b]*v[b];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function sD(a,t,n,r){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==Si&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===Ml&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Pi&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ha&&!j)}function d(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),w=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,G=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:C,vertexTextures:F,maxSamples:G}}function oD(a){const t=this;let n=null,r=0,o=!1,c=!1;const f=new Qa,h=new ue,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,x=a.get(_);if(!o||M===null||M.length===0||c&&!y)c?g(null):p();else{const L=c?0:r,w=L*4;let C=x.clippingState||null;d.value=C,C=g(M,v,w,S);for(let F=0;F!==w;++F)C[F]=n[F];x.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,S,M){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=d.value,M!==!0||y===null){const x=S+b*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let w=0,C=S;w!==b;++w,C+=4)f.copy(_[w]).applyMatrix4(L,h),f.normal.toArray(y,C),y[C+3]=f.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function lD(a){let t=new WeakMap;function n(f,h){return h===Kd?f.mapping=Qs:h===Qd&&(f.mapping=$s),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Kd||h===Qd)if(t.has(f)){const d=t.get(f).texture;return n(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const p=new iR(d.height);return p.fromEquirectangularTexture(a,f),t.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const ks=4,K0=[.125,.215,.35,.446,.526,.582],Ir=20,Td=new qy,Q0=new be;let bd=null,Ad=0,Rd=0,Cd=!1;const Or=(1+Math.sqrt(5))/2,Fs=1/Or,$0=[new it(-Or,Fs,0),new it(Or,Fs,0),new it(-Fs,0,Or),new it(Fs,0,Or),new it(0,Or,-Fs),new it(0,Or,Fs),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],cD=new it;class J0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,o=100,c={}){const{size:f=256,position:h=cD}=c;bd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,r,o,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bd,Ad,Rd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,au(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Qs||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ml,format:Si,colorSpace:Js,depthBuffer:!1},o=tx(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tx(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uD(c)),this._blurMaterial=fD(c,t,n)}return o}_compileMaterial(t){const n=new di(this._lodPlanes[0],t);this._renderer.compile(n,Td)}_sceneToCubeUV(t,n,r,o,c){const d=new hi(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Q0),_.toneMapping=nr,_.autoClear=!1;const M=new om({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),b=new di(new Al,M);let y=!1;const x=t.background;x?x.isColor&&(M.color.copy(x),t.background=null,y=!0):(M.color.copy(Q0),y=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(d.up.set(0,p[L],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[L],c.y,c.z)):w===1?(d.up.set(0,0,p[L]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[L],c.z)):(d.up.set(0,p[L],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[L]));const C=this._cubeSize;au(o,w*C,L>2?C:0,C,C),_.setRenderTarget(o),y&&_.render(b,d),_.render(t,d)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=S,_.autoClear=v,t.background=x}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===Qs||t.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new di(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;au(n,0,0,3*d,2*d),r.setRenderTarget(n),r.render(f,Td)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=$0[(o-c-1)%$0.length];this._blur(t,c-1,c,f,h)}n.autoClear=r}_blur(t,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,r,o,"latitudinal",c),this._halfBlur(f,t,r,r,o,"longitudinal",c)}_halfBlur(t,n,r,o,c,f,h){const d=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new di(this._lodPlanes[o],p),v=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ir-1),b=c/M,y=isFinite(c)?1+Math.floor(g*b):Ir;y>Ir&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ir}`);const x=[];let L=0;for(let z=0;z<Ir;++z){const j=z/b,U=Math.exp(-j*j/2);x.push(U),z===0?L+=U:z<y&&(L+=2*U)}for(let z=0;z<x.length;z++)x[z]=x[z]/L;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-r;const C=this._sizeLods[o],F=3*C*(o>w-ks?o-w+ks:0),G=4*(this._cubeSize-C);au(n,F,G,3*C,2*C),d.setRenderTarget(n),d.render(_,Td)}}function uD(a){const t=[],n=[],r=[];let o=a;const c=a-ks+1+K0.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);n.push(h);let d=1/h;f>a-ks?d=K0[f-a+ks-1]:f===0&&(d=0),r.push(d);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,b=3,y=2,x=1,L=new Float32Array(b*M*S),w=new Float32Array(y*M*S),C=new Float32Array(x*M*S);for(let G=0;G<S;G++){const z=G%3*2/3-1,j=G>2?0:-1,U=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];L.set(U,b*M*G),w.set(v,y*M*G);const D=[G,G,G,G,G,G];C.set(D,x*M*G)}const F=new rr;F.setAttribute("position",new Ni(L,b)),F.setAttribute("uv",new Ni(w,y)),F.setAttribute("faceIndex",new Ni(C,x)),t.push(F),o>ks&&o--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function tx(a,t,n){const r=new kr(a,t,n);return r.texture.mapping=wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function au(a,t,n,r,o){a.viewport.set(t,n,r,o),a.scissor.set(t,n,r,o)}function fD(a,t,n){const r=new Float32Array(Ir),o=new it(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function ex(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function nx(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function um(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hD(a){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const d=h.mapping,p=d===Kd||d===Qd,g=d===Qs||d===$s;if(p||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new J0(a)),_=p?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new J0(a)),_=p?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function dD(a){const t={};function n(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=a.getExtension(r)}return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ys("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function pD(a,t,n,r){const o={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",f),delete o[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const S in v)t.update(v[S],a.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,M=_.attributes.position;let b=0;if(S!==null){const L=S.array;b=S.version;for(let w=0,C=L.length;w<C;w+=3){const F=L[w+0],G=L[w+1],z=L[w+2];v.push(F,G,G,z,z,F)}}else if(M!==void 0){const L=M.array;b=M.version;for(let w=0,C=L.length/3-1;w<C;w+=3){const F=w+0,G=w+1,z=w+2;v.push(F,G,G,z,z,F)}}else return;const y=new(zy(v)?Vy:Gy)(v,1);y.version=b;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function mD(a,t,n){let r;function o(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function d(v,S){a.drawElements(r,S,c,v*f),n.update(S,r,1)}function p(v,S,M){M!==0&&(a.drawElementsInstanced(r,S,c,v*f,M),n.update(S,r,M))}function g(v,S,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];n.update(y,r,1)}function _(v,S,M,b){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)p(v[x]/f,S[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,b,0,M);let x=0;for(let L=0;L<M;L++)x+=S[L]*b[L];n.update(x,r,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function gD(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function _D(a,t,n){const r=new WeakMap,o=new nn;function c(f,h,d){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let D=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var S=D;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let C=0;M===!0&&(C=1),b===!0&&(C=2),y===!0&&(C=3);let F=h.attributes.position.count*C,G=1;F>t.maxTextureSize&&(G=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*G*4*_),j=new Fy(z,F,G,_);j.type=ha,j.needsUpdate=!0;const U=C*4;for(let H=0;H<_;H++){const st=x[H],nt=L[H],ht=w[H],ft=F*G*4*H;for(let I=0;I<st.count;I++){const Y=I*U;M===!0&&(o.fromBufferAttribute(st,I),z[ft+Y+0]=o.x,z[ft+Y+1]=o.y,z[ft+Y+2]=o.z,z[ft+Y+3]=0),b===!0&&(o.fromBufferAttribute(nt,I),z[ft+Y+4]=o.x,z[ft+Y+5]=o.y,z[ft+Y+6]=o.z,z[ft+Y+7]=0),y===!0&&(o.fromBufferAttribute(ht,I),z[ft+Y+8]=o.x,z[ft+Y+9]=o.y,z[ft+Y+10]=o.z,z[ft+Y+11]=ht.itemSize===4?o.w:1)}}v={count:_,texture:j,size:new oe(F,G)},r.set(h,v),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const b=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(a,"morphTargetBaseInfluence",b),d.getUniforms().setValue(a,"morphTargetInfluences",p)}d.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function vD(a,t,n,r){let o=new WeakMap;function c(d){const p=r.render.frame,g=d.geometry,_=t.get(d,g);if(o.get(_)!==p&&(t.update(_),o.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(n.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,a.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return _}function f(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const Ky=new Fn,ix=new jy(1,1),Qy=new Fy,$y=new H1,Jy=new Wy,ax=[],rx=[],sx=new Float32Array(16),ox=new Float32Array(9),lx=new Float32Array(4);function io(a,t,n){const r=a[0];if(r<=0||r>0)return a;const o=t*n;let c=ax[o];if(c===void 0&&(c=new Float32Array(o),ax[o]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(c,h)}return c}function gn(a,t){if(a.length!==t.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==t[n])return!1;return!0}function _n(a,t){for(let n=0,r=t.length;n<r;n++)a[n]=t[n]}function Uu(a,t){let n=rx[t];n===void 0&&(n=new Int32Array(t),rx[t]=n);for(let r=0;r!==t;++r)n[r]=a.allocateTextureUnit();return n}function xD(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function yD(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;a.uniform2fv(this.addr,t),_n(n,t)}}function SD(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gn(n,t))return;a.uniform3fv(this.addr,t),_n(n,t)}}function ED(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;a.uniform4fv(this.addr,t),_n(n,t)}}function MD(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;lx.set(r),a.uniformMatrix2fv(this.addr,!1,lx),_n(n,r)}}function TD(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;ox.set(r),a.uniformMatrix3fv(this.addr,!1,ox),_n(n,r)}}function bD(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;sx.set(r),a.uniformMatrix4fv(this.addr,!1,sx),_n(n,r)}}function AD(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function RD(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;a.uniform2iv(this.addr,t),_n(n,t)}}function CD(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;a.uniform3iv(this.addr,t),_n(n,t)}}function wD(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;a.uniform4iv(this.addr,t),_n(n,t)}}function DD(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function UD(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;a.uniform2uiv(this.addr,t),_n(n,t)}}function LD(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;a.uniform3uiv(this.addr,t),_n(n,t)}}function ND(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;a.uniform4uiv(this.addr,t),_n(n,t)}}function OD(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(ix.compareFunction=By,c=ix):c=Ky,n.setTexture2D(t||c,o)}function PD(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||$y,o)}function ID(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||Jy,o)}function BD(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||Qy,o)}function zD(a){switch(a){case 5126:return xD;case 35664:return yD;case 35665:return SD;case 35666:return ED;case 35674:return MD;case 35675:return TD;case 35676:return bD;case 5124:case 35670:return AD;case 35667:case 35671:return RD;case 35668:case 35672:return CD;case 35669:case 35673:return wD;case 5125:return DD;case 36294:return UD;case 36295:return LD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return OD;case 35679:case 36299:case 36307:return PD;case 35680:case 36300:case 36308:case 36293:return ID;case 36289:case 36303:case 36311:case 36292:return BD}}function FD(a,t){a.uniform1fv(this.addr,t)}function HD(a,t){const n=io(t,this.size,2);a.uniform2fv(this.addr,n)}function GD(a,t){const n=io(t,this.size,3);a.uniform3fv(this.addr,n)}function VD(a,t){const n=io(t,this.size,4);a.uniform4fv(this.addr,n)}function kD(a,t){const n=io(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function XD(a,t){const n=io(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function WD(a,t){const n=io(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function jD(a,t){a.uniform1iv(this.addr,t)}function YD(a,t){a.uniform2iv(this.addr,t)}function qD(a,t){a.uniform3iv(this.addr,t)}function ZD(a,t){a.uniform4iv(this.addr,t)}function KD(a,t){a.uniform1uiv(this.addr,t)}function QD(a,t){a.uniform2uiv(this.addr,t)}function $D(a,t){a.uniform3uiv(this.addr,t)}function JD(a,t){a.uniform4uiv(this.addr,t)}function t2(a,t,n){const r=this.cache,o=t.length,c=Uu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==o;++f)n.setTexture2D(t[f]||Ky,c[f])}function e2(a,t,n){const r=this.cache,o=t.length,c=Uu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||$y,c[f])}function n2(a,t,n){const r=this.cache,o=t.length,c=Uu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||Jy,c[f])}function i2(a,t,n){const r=this.cache,o=t.length,c=Uu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||Qy,c[f])}function a2(a){switch(a){case 5126:return FD;case 35664:return HD;case 35665:return GD;case 35666:return VD;case 35674:return kD;case 35675:return XD;case 35676:return WD;case 5124:case 35670:return jD;case 35667:case 35671:return YD;case 35668:case 35672:return qD;case 35669:case 35673:return ZD;case 5125:return KD;case 36294:return QD;case 36295:return $D;case 36296:return JD;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}class r2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=zD(n.type)}}class s2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=a2(n.type)}}class o2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function cx(a,t){a.seq.push(t),a.map[t.id]=t}function l2(a,t,n){const r=a.name,o=r.length;for(wd.lastIndex=0;;){const c=wd.exec(r),f=wd.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&f+2===o){cx(n,p===void 0?new r2(h,a,t):new s2(h,a,t));break}else{let _=n.map[h];_===void 0&&(_=new o2(h),cx(n,_)),n=_}}}class pu{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=t.getActiveUniform(n,o),f=t.getUniformLocation(n,c.name);l2(c,f,this)}}setValue(t,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],d=r[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&r.push(f)}return r}}function ux(a,t,n){const r=a.createShader(t);return a.shaderSource(r,n),a.compileShader(r),r}const c2=37297;let u2=0;function f2(a,t){const n=a.split(`
`),r=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const fx=new ue;function h2(a){we._getMatrix(fx,we.workingColorSpace,a);const t=`mat3( ${fx.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(a)){case vu:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function hx(a,t,n){const r=a.getShaderParameter(t,a.COMPILE_STATUS),o=a.getShaderInfoLog(t).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+f2(a.getShaderSource(t),f)}else return o}function d2(a,t){const n=h2(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function p2(a,t){let n;switch(t){case QA:n="Linear";break;case $A:n="Reinhard";break;case JA:n="Cineon";break;case t1:n="ACESFilmic";break;case n1:n="AgX";break;case i1:n="Neutral";break;case e1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ru=new it;function m2(){we.getLuminanceCoefficients(ru);const a=ru.x.toFixed(4),t=ru.y.toFixed(4),n=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function _2(a){const t=[];for(const n in a){const r=a[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function v2(a,t){const n={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(t,o),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function ol(a){return a!==""}function dx(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function px(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(a){return a.replace(x2,S2)}const y2=new Map;function S2(a,t){let n=fe[t];if(n===void 0){const r=y2.get(t);if(r!==void 0)n=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cp(n)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(a){return a.replace(E2,M2)}function M2(a,t,n,r){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function gx(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function T2(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ay?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===DA?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function b2(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Qs:case $s:t="ENVMAP_TYPE_CUBE";break;case wu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function A2(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function R2(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Zp:t="ENVMAP_BLENDING_MULTIPLY";break;case ZA:t="ENVMAP_BLENDING_MIX";break;case KA:t="ENVMAP_BLENDING_ADD";break}return t}function C2(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function w2(a,t,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const d=T2(n),p=b2(n),g=A2(n),_=R2(n),v=C2(n),S=g2(n),M=_2(c),b=o.createProgram();let y,x,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ol).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ol).join(`
`),x.length>0&&(x+=`
`)):(y=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),x=[gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?fe.tonemapping_pars_fragment:"",n.toneMapping!==nr?p2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,d2("linearToOutputTexel",n.outputColorSpace),m2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ol).join(`
`)),f=Cp(f),f=dx(f,n),f=px(f,n),h=Cp(h),h=dx(h,n),h=px(h,n),f=mx(f),h=mx(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===M0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===M0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=L+y+f,C=L+x+h,F=ux(o,o.VERTEX_SHADER,w),G=ux(o,o.FRAGMENT_SHADER,C);o.attachShader(b,F),o.attachShader(b,G),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function z(H){if(a.debug.checkShaderErrors){const st=o.getProgramInfoLog(b).trim(),nt=o.getShaderInfoLog(F).trim(),ht=o.getShaderInfoLog(G).trim();let ft=!0,I=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(ft=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,b,F,G);else{const Y=hx(o,F,"vertex"),W=hx(o,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+Y+`
`+W)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||ht==="")&&(I=!1);I&&(H.diagnostics={runnable:ft,programLog:st,vertexShader:{log:nt,prefix:y},fragmentShader:{log:ht,prefix:x}})}o.deleteShader(F),o.deleteShader(G),j=new pu(o,b),U=v2(o,b)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(b,c2)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=u2++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=G,this}let D2=0;class U2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new L2(t),n.set(t,r)),r}}class L2{constructor(t){this.id=D2++,this.code=t,this.usedTimes=0}}function N2(a,t,n,r,o,c,f){const h=new sm,d=new U2,p=new Set,g=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,D,H,st,nt){const ht=st.fog,ft=nt.geometry,I=U.isMeshStandardMaterial?st.environment:null,Y=(U.isMeshStandardMaterial?n:t).get(U.envMap||I),W=Y&&Y.mapping===wu?Y.image.height:null,Et=M[U.type];U.precision!==null&&(S=o.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=N!==void 0?N.length:0;let yt=0;ft.morphAttributes.position!==void 0&&(yt=1),ft.morphAttributes.normal!==void 0&&(yt=2),ft.morphAttributes.color!==void 0&&(yt=3);let St,Z,pt,Tt;if(Et){const Re=Ui[Et];St=Re.vertexShader,Z=Re.fragmentShader}else St=U.vertexShader,Z=U.fragmentShader,d.update(U),pt=d.getVertexShaderID(U),Tt=d.getFragmentShaderID(U);const Ct=a.getRenderTarget(),wt=a.state.buffers.depth.getReversed(),se=nt.isInstancedMesh===!0,qt=nt.isBatchedMesh===!0,Le=!!U.map,Ne=!!U.matcap,he=!!Y,V=!!U.aoMap,de=!!U.lightMap,ye=!!U.bumpMap,le=!!U.normalMap,kt=!!U.displacementMap,Se=!!U.emissiveMap,Kt=!!U.metalnessMap,re=!!U.roughnessMap,an=U.anisotropy>0,O=U.clearcoat>0,T=U.dispersion>0,at=U.iridescence>0,mt=U.sheen>0,_t=U.transmission>0,ut=an&&!!U.anisotropyMap,It=O&&!!U.clearcoatMap,Lt=O&&!!U.clearcoatNormalMap,Vt=O&&!!U.clearcoatRoughnessMap,Xt=at&&!!U.iridescenceMap,Mt=at&&!!U.iridescenceThicknessMap,Bt=mt&&!!U.sheenColorMap,Yt=mt&&!!U.sheenRoughnessMap,Zt=!!U.specularMap,Dt=!!U.specularColorMap,ae=!!U.specularIntensityMap,X=_t&&!!U.transmissionMap,Nt=_t&&!!U.thicknessMap,bt=!!U.gradientMap,zt=!!U.alphaMap,Rt=U.alphaTest>0,xt=!!U.alphaHash,Ht=!!U.extensions;let ie=nr;U.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(ie=a.toneMapping);const Pe={shaderID:Et,shaderType:U.type,shaderName:U.name,vertexShader:St,fragmentShader:Z,defines:U.defines,customVertexShaderID:pt,customFragmentShaderID:Tt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:qt,batchingColor:qt&&nt._colorsTexture!==null,instancing:se,instancingColor:se&&nt.instanceColor!==null,instancingMorph:se&&nt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ct===null?a.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Js,alphaToCoverage:!!U.alphaToCoverage,map:Le,matcap:Ne,envMap:he,envMapMode:he&&Y.mapping,envMapCubeUVHeight:W,aoMap:V,lightMap:de,bumpMap:ye,normalMap:le,displacementMap:v&&kt,emissiveMap:Se,normalMapObjectSpace:le&&U.normalMapType===o1,normalMapTangentSpace:le&&U.normalMapType===Iy,metalnessMap:Kt,roughnessMap:re,anisotropy:an,anisotropyMap:ut,clearcoat:O,clearcoatMap:It,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Vt,dispersion:T,iridescence:at,iridescenceMap:Xt,iridescenceThicknessMap:Mt,sheen:mt,sheenColorMap:Bt,sheenRoughnessMap:Yt,specularMap:Zt,specularColorMap:Dt,specularIntensityMap:ae,transmission:_t,transmissionMap:X,thicknessMap:Nt,gradientMap:bt,opaque:U.transparent===!1&&U.blending===js&&U.alphaToCoverage===!1,alphaMap:zt,alphaTest:Rt,alphaHash:xt,combine:U.combine,mapUv:Le&&b(U.map.channel),aoMapUv:V&&b(U.aoMap.channel),lightMapUv:de&&b(U.lightMap.channel),bumpMapUv:ye&&b(U.bumpMap.channel),normalMapUv:le&&b(U.normalMap.channel),displacementMapUv:kt&&b(U.displacementMap.channel),emissiveMapUv:Se&&b(U.emissiveMap.channel),metalnessMapUv:Kt&&b(U.metalnessMap.channel),roughnessMapUv:re&&b(U.roughnessMap.channel),anisotropyMapUv:ut&&b(U.anisotropyMap.channel),clearcoatMapUv:It&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&b(U.sheenRoughnessMap.channel),specularMapUv:Zt&&b(U.specularMap.channel),specularColorMapUv:Dt&&b(U.specularColorMap.channel),specularIntensityMapUv:ae&&b(U.specularIntensityMap.channel),transmissionMapUv:X&&b(U.transmissionMap.channel),thicknessMapUv:Nt&&b(U.thicknessMap.channel),alphaMapUv:zt&&b(U.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(le||an),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ft.attributes.uv&&(Le||zt),fog:!!ht,useFog:U.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:wt,skinning:nt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:ie,decodeVideoTexture:Le&&U.map.isVideoTexture===!0&&we.getTransfer(U.map.colorSpace)===Ge,decodeVideoTextureEmissive:Se&&U.emissiveMap.isVideoTexture===!0&&we.getTransfer(U.emissiveMap.colorSpace)===Ge,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===fa,flipSided:U.side===jn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Ht&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&U.extensions.multiDraw===!0||qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function x(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)D.push(H),D.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(L(D,U),w(D,U),D.push(a.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function L(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function w(U,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reverseDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const D=M[U.type];let H;if(D){const st=Ui[D];H=J1.clone(st.uniforms)}else H=U.uniforms;return H}function F(U,D){let H;for(let st=0,nt=g.length;st<nt;st++){const ht=g[st];if(ht.cacheKey===D){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new w2(a,D,U,c),g.push(H)),H}function G(U){if(--U.usedTimes===0){const D=g.indexOf(U);g[D]=g[g.length-1],g.pop(),U.destroy()}}function z(U){d.remove(U)}function j(){d.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:F,releaseProgram:G,releaseShaderCache:z,programs:g,dispose:j}}function O2(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function o(f,h,d){a.get(f)[h]=d}function c(){a=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:c}}function P2(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function _x(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function vx(){const a=[];let t=0;const n=[],r=[],o=[];function c(){t=0,n.length=0,r.length=0,o.length=0}function f(_,v,S,M,b,y){let x=a[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:M,renderOrder:_.renderOrder,z:b,group:y},a[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=M,x.renderOrder=_.renderOrder,x.z=b,x.group=y),t++,x}function h(_,v,S,M,b,y){const x=f(_,v,S,M,b,y);S.transmission>0?r.push(x):S.transparent===!0?o.push(x):n.push(x)}function d(_,v,S,M,b,y){const x=f(_,v,S,M,b,y);S.transmission>0?r.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function p(_,v){n.length>1&&n.sort(_||P2),r.length>1&&r.sort(v||_x),o.length>1&&o.sort(v||_x)}function g(){for(let _=t,v=a.length;_<v;_++){const S=a[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:h,unshift:d,finish:g,sort:p}}function I2(){let a=new WeakMap;function t(r,o){const c=a.get(r);let f;return c===void 0?(f=new vx,a.set(r,[f])):o>=c.length?(f=new vx,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function B2(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new it,color:new be};break;case"SpotLight":n={position:new it,direction:new it,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new it,color:new be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new it,skyColor:new be,groundColor:new be};break;case"RectAreaLight":n={color:new be,position:new it,halfWidth:new it,halfHeight:new it};break}return a[t.id]=n,n}}}function z2(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let F2=0;function H2(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function G2(a){const t=new B2,n=z2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new it);const o=new it,c=new $e,f=new $e;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,M=0,b=0,y=0,x=0,L=0,w=0,C=0,F=0,G=0,z=0;p.sort(H2);for(let U=0,D=p.length;U<D;U++){const H=p[U],st=H.color,nt=H.intensity,ht=H.distance,ft=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=st.r*nt,_+=st.g*nt,v+=st.b*nt;else if(H.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(H.sh.coefficients[I],nt);z++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.directionalShadow[S]=W,r.directionalShadowMap[S]=ft,r.directionalShadowMatrix[S]=H.shadow.matrix,L++}r.directional[S]=I,S++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(st).multiplyScalar(nt),I.distance=ht,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,r.spot[b]=I;const Y=H.shadow;if(H.map&&(r.spotLightMap[F]=H.map,F++,Y.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[b]=Y.matrix,H.castShadow){const W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,r.spotShadow[b]=W,r.spotShadowMap[b]=ft,C++}b++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy(st).multiplyScalar(nt),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=I,y++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const Y=H.shadow,W=n.get(H);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,r.pointShadow[M]=W,r.pointShadowMap[M]=ft,r.pointShadowMatrix[M]=H.shadow.matrix,w++}r.point[M]=I,M++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(nt),I.groundColor.copy(H.groundColor).multiplyScalar(nt),r.hemi[x]=I,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const j=r.hash;(j.directionalLength!==S||j.pointLength!==M||j.spotLength!==b||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==L||j.numPointShadows!==w||j.numSpotShadows!==C||j.numSpotMaps!==F||j.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=y,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+F-G,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,j.directionalLength=S,j.pointLength=M,j.spotLength=b,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=L,j.numPointShadows=w,j.numSpotShadows=C,j.numSpotMaps=F,j.numLightProbes=z,r.version=F2++)}function d(p,g){let _=0,v=0,S=0,M=0,b=0;const y=g.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const w=p[x];if(w.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),_++}else if(w.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(w.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),f.identity(),c.copy(w.matrixWorld),c.premultiply(y),f.extractRotation(c),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),M++}else if(w.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),v++}else if(w.isHemisphereLight){const C=r.hemi[b];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(y),b++}}}return{setup:h,setupView:d,state:r}}function xx(a){const t=new G2(a),n=[],r=[];function o(g){p.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function f(g){r.push(g)}function h(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:c,pushShadow:f}}function V2(a){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new xx(a),t.set(o,[h])):c>=f.length?(h=new xx(a),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const k2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W2(a,t,n){let r=new lm;const o=new oe,c=new oe,f=new nn,h=new lR({depthPacking:s1}),d=new cR,p={},g=n.maxTextureSize,_={[ir]:jn,[jn]:ir,[fa]:fa},v=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:k2,fragmentShader:X2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new rr;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new di(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ay;let x=this.type;this.render=function(G,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const U=a.getRenderTarget(),D=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),st=a.state;st.setBlending(er),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const nt=x!==ca&&this.type===ca,ht=x===ca&&this.type!==ca;for(let ft=0,I=G.length;ft<I;ft++){const Y=G[ft],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Et=W.getFrameExtents();if(o.multiply(Et),c.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Et.x),o.x=c.x*Et.x,W.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Et.y),o.y=c.y*Et.y,W.mapSize.y=c.y)),W.map===null||nt===!0||ht===!0){const tt=this.type!==ca?{minFilter:Ei,magFilter:Ei}:{};W.map!==null&&W.map.dispose(),W.map=new kr(o.x,o.y,tt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const N=W.getViewportCount();for(let tt=0;tt<N;tt++){const yt=W.getViewport(tt);f.set(c.x*yt.x,c.y*yt.y,c.x*yt.z,c.y*yt.w),st.viewport(f),W.updateMatrices(Y,tt),r=W.getFrustum(),C(z,j,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===ca&&L(W,j),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(U,D,H)};function L(G,z){const j=t.update(b);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new kr(o.x,o.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,a.setRenderTarget(G.mapPass),a.clear(),a.renderBufferDirect(z,null,j,v,b,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,a.setRenderTarget(G.map),a.clear(),a.renderBufferDirect(z,null,j,S,b,null)}function w(G,z,j,U){let D=null;const H=j.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)D=H;else if(D=j.isPointLight===!0?d:h,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const st=D.uuid,nt=z.uuid;let ht=p[st];ht===void 0&&(ht={},p[st]=ht);let ft=ht[nt];ft===void 0&&(ft=D.clone(),ht[nt]=ft,z.addEventListener("dispose",F)),D=ft}if(D.visible=z.visible,D.wireframe=z.wireframe,U===ca?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:_[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,j.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const st=a.properties.get(D);st.light=j}return D}function C(G,z,j,U,D){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===ca)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,G.matrixWorld);const nt=t.update(G),ht=G.material;if(Array.isArray(ht)){const ft=nt.groups;for(let I=0,Y=ft.length;I<Y;I++){const W=ft[I],Et=ht[W.materialIndex];if(Et&&Et.visible){const N=w(G,Et,U,D);G.onBeforeShadow(a,G,z,j,nt,N,W),a.renderBufferDirect(j,null,nt,N,G,W),G.onAfterShadow(a,G,z,j,nt,N,W)}}}else if(ht.visible){const ft=w(G,ht,U,D);G.onBeforeShadow(a,G,z,j,nt,ft,null),a.renderBufferDirect(j,null,nt,ft,G,null),G.onAfterShadow(a,G,z,j,nt,ft,null)}}const st=G.children;for(let nt=0,ht=st.length;nt<ht;nt++)C(st[nt],z,j,U,D)}function F(G){G.target.removeEventListener("dispose",F);for(const j in p){const U=p[j],D=G.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const j2={[kd]:Xd,[Wd]:qd,[jd]:Zd,[Ks]:Yd,[Xd]:kd,[qd]:Wd,[Zd]:jd,[Yd]:Ks};function Y2(a,t){function n(){let X=!1;const Nt=new nn;let bt=null;const zt=new nn(0,0,0,0);return{setMask:function(Rt){bt!==Rt&&!X&&(a.colorMask(Rt,Rt,Rt,Rt),bt=Rt)},setLocked:function(Rt){X=Rt},setClear:function(Rt,xt,Ht,ie,Pe){Pe===!0&&(Rt*=ie,xt*=ie,Ht*=ie),Nt.set(Rt,xt,Ht,ie),zt.equals(Nt)===!1&&(a.clearColor(Rt,xt,Ht,ie),zt.copy(Nt))},reset:function(){X=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let X=!1,Nt=!1,bt=null,zt=null,Rt=null;return{setReversed:function(xt){if(Nt!==xt){const Ht=t.get("EXT_clip_control");xt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Nt=xt;const ie=Rt;Rt=null,this.setClear(ie)}},getReversed:function(){return Nt},setTest:function(xt){xt?Ct(a.DEPTH_TEST):wt(a.DEPTH_TEST)},setMask:function(xt){bt!==xt&&!X&&(a.depthMask(xt),bt=xt)},setFunc:function(xt){if(Nt&&(xt=j2[xt]),zt!==xt){switch(xt){case kd:a.depthFunc(a.NEVER);break;case Xd:a.depthFunc(a.ALWAYS);break;case Wd:a.depthFunc(a.LESS);break;case Ks:a.depthFunc(a.LEQUAL);break;case jd:a.depthFunc(a.EQUAL);break;case Yd:a.depthFunc(a.GEQUAL);break;case qd:a.depthFunc(a.GREATER);break;case Zd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}zt=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Rt!==xt&&(Nt&&(xt=1-xt),a.clearDepth(xt),Rt=xt)},reset:function(){X=!1,bt=null,zt=null,Rt=null,Nt=!1}}}function o(){let X=!1,Nt=null,bt=null,zt=null,Rt=null,xt=null,Ht=null,ie=null,Pe=null;return{setTest:function(Re){X||(Re?Ct(a.STENCIL_TEST):wt(a.STENCIL_TEST))},setMask:function(Re){Nt!==Re&&!X&&(a.stencilMask(Re),Nt=Re)},setFunc:function(Re,Yn,vn){(bt!==Re||zt!==Yn||Rt!==vn)&&(a.stencilFunc(Re,Yn,vn),bt=Re,zt=Yn,Rt=vn)},setOp:function(Re,Yn,vn){(xt!==Re||Ht!==Yn||ie!==vn)&&(a.stencilOp(Re,Yn,vn),xt=Re,Ht=Yn,ie=vn)},setLocked:function(Re){X=Re},setClear:function(Re){Pe!==Re&&(a.clearStencil(Re),Pe=Re)},reset:function(){X=!1,Nt=null,bt=null,zt=null,Rt=null,xt=null,Ht=null,ie=null,Pe=null}}}const c=new n,f=new r,h=new o,d=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,S=[],M=null,b=!1,y=null,x=null,L=null,w=null,C=null,F=null,G=null,z=new be(0,0,0),j=0,U=!1,D=null,H=null,st=null,nt=null,ht=null;const ft=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=Y>=2);let Et=null,N={};const tt=a.getParameter(a.SCISSOR_BOX),yt=a.getParameter(a.VIEWPORT),St=new nn().fromArray(tt),Z=new nn().fromArray(yt);function pt(X,Nt,bt,zt){const Rt=new Uint8Array(4),xt=a.createTexture();a.bindTexture(X,xt),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ht=0;Ht<bt;Ht++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Nt,0,a.RGBA,1,1,zt,0,a.RGBA,a.UNSIGNED_BYTE,Rt):a.texImage2D(Nt+Ht,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Rt);return xt}const Tt={};Tt[a.TEXTURE_2D]=pt(a.TEXTURE_2D,a.TEXTURE_2D,1),Tt[a.TEXTURE_CUBE_MAP]=pt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[a.TEXTURE_2D_ARRAY]=pt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Tt[a.TEXTURE_3D]=pt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ct(a.DEPTH_TEST),f.setFunc(Ks),ye(!1),le(_0),Ct(a.CULL_FACE),V(er);function Ct(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function wt(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function se(X,Nt){return _[X]!==Nt?(a.bindFramebuffer(X,Nt),_[X]=Nt,X===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Nt),X===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Nt),!0):!1}function qt(X,Nt){let bt=S,zt=!1;if(X){bt=v.get(Nt),bt===void 0&&(bt=[],v.set(Nt,bt));const Rt=X.textures;if(bt.length!==Rt.length||bt[0]!==a.COLOR_ATTACHMENT0){for(let xt=0,Ht=Rt.length;xt<Ht;xt++)bt[xt]=a.COLOR_ATTACHMENT0+xt;bt.length=Rt.length,zt=!0}}else bt[0]!==a.BACK&&(bt[0]=a.BACK,zt=!0);zt&&a.drawBuffers(bt)}function Le(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const Ne={[Pr]:a.FUNC_ADD,[LA]:a.FUNC_SUBTRACT,[NA]:a.FUNC_REVERSE_SUBTRACT};Ne[OA]=a.MIN,Ne[PA]=a.MAX;const he={[IA]:a.ZERO,[BA]:a.ONE,[zA]:a.SRC_COLOR,[Gd]:a.SRC_ALPHA,[XA]:a.SRC_ALPHA_SATURATE,[VA]:a.DST_COLOR,[HA]:a.DST_ALPHA,[FA]:a.ONE_MINUS_SRC_COLOR,[Vd]:a.ONE_MINUS_SRC_ALPHA,[kA]:a.ONE_MINUS_DST_COLOR,[GA]:a.ONE_MINUS_DST_ALPHA,[WA]:a.CONSTANT_COLOR,[jA]:a.ONE_MINUS_CONSTANT_COLOR,[YA]:a.CONSTANT_ALPHA,[qA]:a.ONE_MINUS_CONSTANT_ALPHA};function V(X,Nt,bt,zt,Rt,xt,Ht,ie,Pe,Re){if(X===er){b===!0&&(wt(a.BLEND),b=!1);return}if(b===!1&&(Ct(a.BLEND),b=!0),X!==UA){if(X!==y||Re!==U){if((x!==Pr||C!==Pr)&&(a.blendEquation(a.FUNC_ADD),x=Pr,C=Pr),Re)switch(X){case js:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case v0:a.blendFunc(a.ONE,a.ONE);break;case x0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case y0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case js:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case v0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case x0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case y0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,w=null,F=null,G=null,z.set(0,0,0),j=0,y=X,U=Re}return}Rt=Rt||Nt,xt=xt||bt,Ht=Ht||zt,(Nt!==x||Rt!==C)&&(a.blendEquationSeparate(Ne[Nt],Ne[Rt]),x=Nt,C=Rt),(bt!==L||zt!==w||xt!==F||Ht!==G)&&(a.blendFuncSeparate(he[bt],he[zt],he[xt],he[Ht]),L=bt,w=zt,F=xt,G=Ht),(ie.equals(z)===!1||Pe!==j)&&(a.blendColor(ie.r,ie.g,ie.b,Pe),z.copy(ie),j=Pe),y=X,U=!1}function de(X,Nt){X.side===fa?wt(a.CULL_FACE):Ct(a.CULL_FACE);let bt=X.side===jn;Nt&&(bt=!bt),ye(bt),X.blending===js&&X.transparent===!1?V(er):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const zt=X.stencilWrite;h.setTest(zt),zt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Se(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ct(a.SAMPLE_ALPHA_TO_COVERAGE):wt(a.SAMPLE_ALPHA_TO_COVERAGE)}function ye(X){D!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),D=X)}function le(X){X!==CA?(Ct(a.CULL_FACE),X!==H&&(X===_0?a.cullFace(a.BACK):X===wA?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):wt(a.CULL_FACE),H=X}function kt(X){X!==st&&(I&&a.lineWidth(X),st=X)}function Se(X,Nt,bt){X?(Ct(a.POLYGON_OFFSET_FILL),(nt!==Nt||ht!==bt)&&(a.polygonOffset(Nt,bt),nt=Nt,ht=bt)):wt(a.POLYGON_OFFSET_FILL)}function Kt(X){X?Ct(a.SCISSOR_TEST):wt(a.SCISSOR_TEST)}function re(X){X===void 0&&(X=a.TEXTURE0+ft-1),Et!==X&&(a.activeTexture(X),Et=X)}function an(X,Nt,bt){bt===void 0&&(Et===null?bt=a.TEXTURE0+ft-1:bt=Et);let zt=N[bt];zt===void 0&&(zt={type:void 0,texture:void 0},N[bt]=zt),(zt.type!==X||zt.texture!==Nt)&&(Et!==bt&&(a.activeTexture(bt),Et=bt),a.bindTexture(X,Nt||Tt[X]),zt.type=X,zt.texture=Nt)}function O(){const X=N[Et];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function at(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(X){St.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Yt(X){Z.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function Zt(X,Nt){let bt=p.get(Nt);bt===void 0&&(bt=new WeakMap,p.set(Nt,bt));let zt=bt.get(X);zt===void 0&&(zt=a.getUniformBlockIndex(Nt,X.name),bt.set(X,zt))}function Dt(X,Nt){const zt=p.get(Nt).get(X);d.get(Nt)!==zt&&(a.uniformBlockBinding(Nt,zt,X.__bindingPointIndex),d.set(Nt,zt))}function ae(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Et=null,N={},_={},v=new WeakMap,S=[],M=null,b=!1,y=null,x=null,L=null,w=null,C=null,F=null,G=null,z=new be(0,0,0),j=0,U=!1,D=null,H=null,st=null,nt=null,ht=null,St.set(0,0,a.canvas.width,a.canvas.height),Z.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ct,disable:wt,bindFramebuffer:se,drawBuffers:qt,useProgram:Le,setBlending:V,setMaterial:de,setFlipSided:ye,setCullFace:le,setLineWidth:kt,setPolygonOffset:Se,setScissorTest:Kt,activeTexture:re,bindTexture:an,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:at,texImage2D:Xt,texImage3D:Mt,updateUBOMapping:Zt,uniformBlockBinding:Dt,texStorage2D:Lt,texStorage3D:Vt,texSubImage2D:mt,texSubImage3D:_t,compressedTexSubImage2D:ut,compressedTexSubImage3D:It,scissor:Bt,viewport:Yt,reset:ae}}function q2(a,t,n,r,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new oe,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,T){return S?new OffscreenCanvas(O,T):_l("canvas")}function b(O,T,at){let mt=1;const _t=an(O);if((_t.width>at||_t.height>at)&&(mt=at/Math.max(_t.width,_t.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(mt*_t.width),It=Math.floor(mt*_t.height);_===void 0&&(_=M(ut,It));const Lt=T?M(ut,It):_;return Lt.width=ut,Lt.height=It,Lt.getContext("2d").drawImage(O,0,0,ut,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+It+")."),Lt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),O;return O}function y(O){return O.generateMipmaps}function x(O){a.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(O,T,at,mt,_t=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=T;if(T===a.RED&&(at===a.FLOAT&&(ut=a.R32F),at===a.HALF_FLOAT&&(ut=a.R16F),at===a.UNSIGNED_BYTE&&(ut=a.R8)),T===a.RED_INTEGER&&(at===a.UNSIGNED_BYTE&&(ut=a.R8UI),at===a.UNSIGNED_SHORT&&(ut=a.R16UI),at===a.UNSIGNED_INT&&(ut=a.R32UI),at===a.BYTE&&(ut=a.R8I),at===a.SHORT&&(ut=a.R16I),at===a.INT&&(ut=a.R32I)),T===a.RG&&(at===a.FLOAT&&(ut=a.RG32F),at===a.HALF_FLOAT&&(ut=a.RG16F),at===a.UNSIGNED_BYTE&&(ut=a.RG8)),T===a.RG_INTEGER&&(at===a.UNSIGNED_BYTE&&(ut=a.RG8UI),at===a.UNSIGNED_SHORT&&(ut=a.RG16UI),at===a.UNSIGNED_INT&&(ut=a.RG32UI),at===a.BYTE&&(ut=a.RG8I),at===a.SHORT&&(ut=a.RG16I),at===a.INT&&(ut=a.RG32I)),T===a.RGB_INTEGER&&(at===a.UNSIGNED_BYTE&&(ut=a.RGB8UI),at===a.UNSIGNED_SHORT&&(ut=a.RGB16UI),at===a.UNSIGNED_INT&&(ut=a.RGB32UI),at===a.BYTE&&(ut=a.RGB8I),at===a.SHORT&&(ut=a.RGB16I),at===a.INT&&(ut=a.RGB32I)),T===a.RGBA_INTEGER&&(at===a.UNSIGNED_BYTE&&(ut=a.RGBA8UI),at===a.UNSIGNED_SHORT&&(ut=a.RGBA16UI),at===a.UNSIGNED_INT&&(ut=a.RGBA32UI),at===a.BYTE&&(ut=a.RGBA8I),at===a.SHORT&&(ut=a.RGBA16I),at===a.INT&&(ut=a.RGBA32I)),T===a.RGB&&at===a.UNSIGNED_INT_5_9_9_9_REV&&(ut=a.RGB9_E5),T===a.RGBA){const It=_t?vu:we.getTransfer(mt);at===a.FLOAT&&(ut=a.RGBA32F),at===a.HALF_FLOAT&&(ut=a.RGBA16F),at===a.UNSIGNED_BYTE&&(ut=It===Ge?a.SRGB8_ALPHA8:a.RGBA8),at===a.UNSIGNED_SHORT_4_4_4_4&&(ut=a.RGBA4),at===a.UNSIGNED_SHORT_5_5_5_1&&(ut=a.RGB5_A1)}return(ut===a.R16F||ut===a.R32F||ut===a.RG16F||ut===a.RG32F||ut===a.RGBA16F||ut===a.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(O,T){let at;return O?T===null||T===Gr||T===dl?at=a.DEPTH24_STENCIL8:T===ha?at=a.DEPTH32F_STENCIL8:T===hl&&(at=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gr||T===dl?at=a.DEPTH_COMPONENT24:T===ha?at=a.DEPTH_COMPONENT32F:T===hl&&(at=a.DEPTH_COMPONENT16),at}function F(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ei&&O.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function G(O){const T=O.target;T.removeEventListener("dispose",G),j(T),T.isVideoTexture&&g.delete(T)}function z(O){const T=O.target;T.removeEventListener("dispose",z),D(T)}function j(O){const T=r.get(O);if(T.__webglInit===void 0)return;const at=O.source,mt=v.get(at);if(mt){const _t=mt[T.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&U(O),Object.keys(mt).length===0&&v.delete(at)}r.remove(O)}function U(O){const T=r.get(O);a.deleteTexture(T.__webglTexture);const at=O.source,mt=v.get(at);delete mt[T.__cacheKey],f.memory.textures--}function D(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let _t=0;_t<T.__webglFramebuffer[mt].length;_t++)a.deleteFramebuffer(T.__webglFramebuffer[mt][_t]);else a.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)a.deleteFramebuffer(T.__webglFramebuffer[mt]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=O.textures;for(let mt=0,_t=at.length;mt<_t;mt++){const ut=r.get(at[mt]);ut.__webglTexture&&(a.deleteTexture(ut.__webglTexture),f.memory.textures--),r.remove(at[mt])}r.remove(O)}let H=0;function st(){H=0}function nt(){const O=H;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),H+=1,O}function ht(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ft(O,T){const at=r.get(O);if(O.isVideoTexture&&Kt(O),O.isRenderTargetTexture===!1&&O.version>0&&at.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(at,O,T);return}}n.bindTexture(a.TEXTURE_2D,at.__webglTexture,a.TEXTURE0+T)}function I(O,T){const at=r.get(O);if(O.version>0&&at.__version!==O.version){Tt(at,O,T);return}n.bindTexture(a.TEXTURE_2D_ARRAY,at.__webglTexture,a.TEXTURE0+T)}function Y(O,T){const at=r.get(O);if(O.version>0&&at.__version!==O.version){Tt(at,O,T);return}n.bindTexture(a.TEXTURE_3D,at.__webglTexture,a.TEXTURE0+T)}function W(O,T){const at=r.get(O);if(O.version>0&&at.__version!==O.version){Ct(at,O,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,at.__webglTexture,a.TEXTURE0+T)}const Et={[$d]:a.REPEAT,[zr]:a.CLAMP_TO_EDGE,[Jd]:a.MIRRORED_REPEAT},N={[Ei]:a.NEAREST,[a1]:a.NEAREST_MIPMAP_NEAREST,[Fc]:a.NEAREST_MIPMAP_LINEAR,[Li]:a.LINEAR,[td]:a.LINEAR_MIPMAP_NEAREST,[Fr]:a.LINEAR_MIPMAP_LINEAR},tt={[l1]:a.NEVER,[p1]:a.ALWAYS,[c1]:a.LESS,[By]:a.LEQUAL,[u1]:a.EQUAL,[d1]:a.GEQUAL,[f1]:a.GREATER,[h1]:a.NOTEQUAL};function yt(O,T){if(T.type===ha&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===td||T.magFilter===Fc||T.magFilter===Fr||T.minFilter===Li||T.minFilter===td||T.minFilter===Fc||T.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,Et[T.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,Et[T.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,Et[T.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,N[T.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,tt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==Fc&&T.minFilter!==Fr||T.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");a.texParameterf(O,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function St(O,T){let at=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",G));const mt=T.source;let _t=v.get(mt);_t===void 0&&(_t={},v.set(mt,_t));const ut=ht(T);if(ut!==O.__cacheKey){_t[ut]===void 0&&(_t[ut]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,at=!0),_t[ut].usedTimes++;const It=_t[O.__cacheKey];It!==void 0&&(_t[O.__cacheKey].usedTimes--,It.usedTimes===0&&U(T)),O.__cacheKey=ut,O.__webglTexture=_t[ut].texture}return at}function Z(O,T,at){return Math.floor(Math.floor(O/at)/T)}function pt(O,T,at,mt){const ut=O.updateRanges;if(ut.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,at,mt,T.data);else{ut.sort((Mt,Bt)=>Mt.start-Bt.start);let It=0;for(let Mt=1;Mt<ut.length;Mt++){const Bt=ut[It],Yt=ut[Mt],Zt=Bt.start+Bt.count,Dt=Z(Yt.start,T.width,4),ae=Z(Bt.start,T.width,4);Yt.start<=Zt+1&&Dt===ae&&Z(Yt.start+Yt.count-1,T.width,4)===Dt?Bt.count=Math.max(Bt.count,Yt.start+Yt.count-Bt.start):(++It,ut[It]=Yt)}ut.length=It+1;const Lt=a.getParameter(a.UNPACK_ROW_LENGTH),Vt=a.getParameter(a.UNPACK_SKIP_PIXELS),Xt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Mt=0,Bt=ut.length;Mt<Bt;Mt++){const Yt=ut[Mt],Zt=Math.floor(Yt.start/4),Dt=Math.ceil(Yt.count/4),ae=Zt%T.width,X=Math.floor(Zt/T.width),Nt=Dt,bt=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ae),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),n.texSubImage2D(a.TEXTURE_2D,0,ae,X,Nt,bt,at,mt,T.data)}O.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Lt),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Vt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Xt)}}function Tt(O,T,at){let mt=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=a.TEXTURE_3D);const _t=St(O,T),ut=T.source;n.bindTexture(mt,O.__webglTexture,a.TEXTURE0+at);const It=r.get(ut);if(ut.version!==It.__version||_t===!0){n.activeTexture(a.TEXTURE0+at);const Lt=we.getPrimaries(we.workingColorSpace),Vt=T.colorSpace===tr?null:we.getPrimaries(T.colorSpace),Xt=T.colorSpace===tr||Lt===Vt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Mt=b(T.image,!1,o.maxTextureSize);Mt=re(T,Mt);const Bt=c.convert(T.format,T.colorSpace),Yt=c.convert(T.type);let Zt=w(T.internalFormat,Bt,Yt,T.colorSpace,T.isVideoTexture);yt(mt,T);let Dt;const ae=T.mipmaps,X=T.isVideoTexture!==!0,Nt=It.__version===void 0||_t===!0,bt=ut.dataReady,zt=F(T,Mt);if(T.isDepthTexture)Zt=C(T.format===ml,T.type),Nt&&(X?n.texStorage2D(a.TEXTURE_2D,1,Zt,Mt.width,Mt.height):n.texImage2D(a.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Bt,Yt,null));else if(T.isDataTexture)if(ae.length>0){X&&Nt&&n.texStorage2D(a.TEXTURE_2D,zt,Zt,ae[0].width,ae[0].height);for(let Rt=0,xt=ae.length;Rt<xt;Rt++)Dt=ae[Rt],X?bt&&n.texSubImage2D(a.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Bt,Yt,Dt.data):n.texImage2D(a.TEXTURE_2D,Rt,Zt,Dt.width,Dt.height,0,Bt,Yt,Dt.data);T.generateMipmaps=!1}else X?(Nt&&n.texStorage2D(a.TEXTURE_2D,zt,Zt,Mt.width,Mt.height),bt&&pt(T,Mt,Bt,Yt)):n.texImage2D(a.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Bt,Yt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Nt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,zt,Zt,ae[0].width,ae[0].height,Mt.depth);for(let Rt=0,xt=ae.length;Rt<xt;Rt++)if(Dt=ae[Rt],T.format!==Si)if(Bt!==null)if(X){if(bt)if(T.layerUpdates.size>0){const Ht=Z0(Dt.width,Dt.height,T.format,T.type);for(const ie of T.layerUpdates){const Pe=Dt.data.subarray(ie*Ht/Dt.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Rt,0,0,ie,Dt.width,Dt.height,1,Bt,Pe)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,Mt.depth,Bt,Dt.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Rt,Zt,Dt.width,Dt.height,Mt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?bt&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,Mt.depth,Bt,Yt,Dt.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Rt,Zt,Dt.width,Dt.height,Mt.depth,0,Bt,Yt,Dt.data)}else{X&&Nt&&n.texStorage2D(a.TEXTURE_2D,zt,Zt,ae[0].width,ae[0].height);for(let Rt=0,xt=ae.length;Rt<xt;Rt++)Dt=ae[Rt],T.format!==Si?Bt!==null?X?bt&&n.compressedTexSubImage2D(a.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Bt,Dt.data):n.compressedTexImage2D(a.TEXTURE_2D,Rt,Zt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?bt&&n.texSubImage2D(a.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Bt,Yt,Dt.data):n.texImage2D(a.TEXTURE_2D,Rt,Zt,Dt.width,Dt.height,0,Bt,Yt,Dt.data)}else if(T.isDataArrayTexture)if(X){if(Nt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,zt,Zt,Mt.width,Mt.height,Mt.depth),bt)if(T.layerUpdates.size>0){const Rt=Z0(Mt.width,Mt.height,T.format,T.type);for(const xt of T.layerUpdates){const Ht=Mt.data.subarray(xt*Rt/Mt.data.BYTES_PER_ELEMENT,(xt+1)*Rt/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Bt,Yt,Ht)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,Yt,Mt.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Zt,Mt.width,Mt.height,Mt.depth,0,Bt,Yt,Mt.data);else if(T.isData3DTexture)X?(Nt&&n.texStorage3D(a.TEXTURE_3D,zt,Zt,Mt.width,Mt.height,Mt.depth),bt&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,Yt,Mt.data)):n.texImage3D(a.TEXTURE_3D,0,Zt,Mt.width,Mt.height,Mt.depth,0,Bt,Yt,Mt.data);else if(T.isFramebufferTexture){if(Nt)if(X)n.texStorage2D(a.TEXTURE_2D,zt,Zt,Mt.width,Mt.height);else{let Rt=Mt.width,xt=Mt.height;for(let Ht=0;Ht<zt;Ht++)n.texImage2D(a.TEXTURE_2D,Ht,Zt,Rt,xt,0,Bt,Yt,null),Rt>>=1,xt>>=1}}else if(ae.length>0){if(X&&Nt){const Rt=an(ae[0]);n.texStorage2D(a.TEXTURE_2D,zt,Zt,Rt.width,Rt.height)}for(let Rt=0,xt=ae.length;Rt<xt;Rt++)Dt=ae[Rt],X?bt&&n.texSubImage2D(a.TEXTURE_2D,Rt,0,0,Bt,Yt,Dt):n.texImage2D(a.TEXTURE_2D,Rt,Zt,Bt,Yt,Dt);T.generateMipmaps=!1}else if(X){if(Nt){const Rt=an(Mt);n.texStorage2D(a.TEXTURE_2D,zt,Zt,Rt.width,Rt.height)}bt&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Bt,Yt,Mt)}else n.texImage2D(a.TEXTURE_2D,0,Zt,Bt,Yt,Mt);y(T)&&x(mt),It.__version=ut.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Ct(O,T,at){if(T.image.length!==6)return;const mt=St(O,T),_t=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+at);const ut=r.get(_t);if(_t.version!==ut.__version||mt===!0){n.activeTexture(a.TEXTURE0+at);const It=we.getPrimaries(we.workingColorSpace),Lt=T.colorSpace===tr?null:we.getPrimaries(T.colorSpace),Vt=T.colorSpace===tr||It===Lt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Xt=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let xt=0;xt<6;xt++)!Xt&&!Mt?Bt[xt]=b(T.image[xt],!0,o.maxCubemapSize):Bt[xt]=Mt?T.image[xt].image:T.image[xt],Bt[xt]=re(T,Bt[xt]);const Yt=Bt[0],Zt=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),ae=w(T.internalFormat,Zt,Dt,T.colorSpace),X=T.isVideoTexture!==!0,Nt=ut.__version===void 0||mt===!0,bt=_t.dataReady;let zt=F(T,Yt);yt(a.TEXTURE_CUBE_MAP,T);let Rt;if(Xt){X&&Nt&&n.texStorage2D(a.TEXTURE_CUBE_MAP,zt,ae,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){Rt=Bt[xt].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){const ie=Rt[Ht];T.format!==Si?Zt!==null?X?bt&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,ie.width,ie.height,Zt,ie.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?bt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,ie.width,ie.height,Zt,Dt,ie.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,ae,ie.width,ie.height,0,Zt,Dt,ie.data)}}}else{if(Rt=T.mipmaps,X&&Nt){Rt.length>0&&zt++;const xt=an(Bt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,zt,ae,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){X?bt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt[xt].width,Bt[xt].height,Zt,Dt,Bt[xt].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,Bt[xt].width,Bt[xt].height,0,Zt,Dt,Bt[xt].data);for(let Ht=0;Ht<Rt.length;Ht++){const Pe=Rt[Ht].image[xt].image;X?bt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Pe.width,Pe.height,Zt,Dt,Pe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,ae,Pe.width,Pe.height,0,Zt,Dt,Pe.data)}}else{X?bt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,Dt,Bt[xt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,Zt,Dt,Bt[xt]);for(let Ht=0;Ht<Rt.length;Ht++){const ie=Rt[Ht];X?bt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Zt,Dt,ie.image[xt]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,ae,Zt,Dt,ie.image[xt])}}}y(T)&&x(a.TEXTURE_CUBE_MAP),ut.__version=_t.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function wt(O,T,at,mt,_t,ut){const It=c.convert(at.format,at.colorSpace),Lt=c.convert(at.type),Vt=w(at.internalFormat,It,Lt,at.colorSpace),Xt=r.get(T),Mt=r.get(at);if(Mt.__renderTarget=T,!Xt.__hasExternalTextures){const Bt=Math.max(1,T.width>>ut),Yt=Math.max(1,T.height>>ut);_t===a.TEXTURE_3D||_t===a.TEXTURE_2D_ARRAY?n.texImage3D(_t,ut,Vt,Bt,Yt,T.depth,0,It,Lt,null):n.texImage2D(_t,ut,Vt,Bt,Yt,0,It,Lt,null)}n.bindFramebuffer(a.FRAMEBUFFER,O),Se(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,mt,_t,Mt.__webglTexture,0,kt(T)):(_t===a.TEXTURE_2D||_t>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,mt,_t,Mt.__webglTexture,ut),n.bindFramebuffer(a.FRAMEBUFFER,null)}function se(O,T,at){if(a.bindRenderbuffer(a.RENDERBUFFER,O),T.depthBuffer){const mt=T.depthTexture,_t=mt&&mt.isDepthTexture?mt.type:null,ut=C(T.stencilBuffer,_t),It=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Lt=kt(T);Se(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Lt,ut,T.width,T.height):at?a.renderbufferStorageMultisample(a.RENDERBUFFER,Lt,ut,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ut,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,It,a.RENDERBUFFER,O)}else{const mt=T.textures;for(let _t=0;_t<mt.length;_t++){const ut=mt[_t],It=c.convert(ut.format,ut.colorSpace),Lt=c.convert(ut.type),Vt=w(ut.internalFormat,It,Lt,ut.colorSpace),Xt=kt(T);at&&Se(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Xt,Vt,T.width,T.height):Se(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Xt,Vt,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Vt,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function qt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const _t=mt.__webglTexture,ut=kt(T);if(T.depthTexture.format===pl)Se(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_t,0,ut):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,_t,0);else if(T.depthTexture.format===ml)Se(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_t,0,ut):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Le(O){const T=r.get(O),at=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const _t=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",_t)};mt.addEventListener("dispose",_t),T.__depthDisposeCallback=_t}T.__boundDepthTexture=mt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const mt=O.texture.mipmaps;mt&&mt.length>0?qt(T.__webglFramebuffer[0],O):qt(T.__webglFramebuffer,O)}else if(at){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=a.createRenderbuffer(),se(T.__webglDepthbuffer[mt],O,!1);else{const _t=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[mt];a.bindRenderbuffer(a.RENDERBUFFER,ut),a.framebufferRenderbuffer(a.FRAMEBUFFER,_t,a.RENDERBUFFER,ut)}}else{const mt=O.texture.mipmaps;if(mt&&mt.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),se(T.__webglDepthbuffer,O,!1);else{const _t=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ut),a.framebufferRenderbuffer(a.FRAMEBUFFER,_t,a.RENDERBUFFER,ut)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ne(O,T,at){const mt=r.get(O);T!==void 0&&wt(mt.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),at!==void 0&&Le(O)}function he(O){const T=O.texture,at=r.get(O),mt=r.get(T);O.addEventListener("dispose",z);const _t=O.textures,ut=O.isWebGLCubeRenderTarget===!0,It=_t.length>1;if(It||(mt.__webglTexture===void 0&&(mt.__webglTexture=a.createTexture()),mt.__version=T.version,f.memory.textures++),ut){at.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[Lt]=[];for(let Vt=0;Vt<T.mipmaps.length;Vt++)at.__webglFramebuffer[Lt][Vt]=a.createFramebuffer()}else at.__webglFramebuffer[Lt]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)at.__webglFramebuffer[Lt]=a.createFramebuffer()}else at.__webglFramebuffer=a.createFramebuffer();if(It)for(let Lt=0,Vt=_t.length;Lt<Vt;Lt++){const Xt=r.get(_t[Lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&Se(O)===!1){at.__webglMultisampledFramebuffer=a.createFramebuffer(),at.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Lt=0;Lt<_t.length;Lt++){const Vt=_t[Lt];at.__webglColorRenderbuffer[Lt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,at.__webglColorRenderbuffer[Lt]);const Xt=c.convert(Vt.format,Vt.colorSpace),Mt=c.convert(Vt.type),Bt=w(Vt.internalFormat,Xt,Mt,Vt.colorSpace,O.isXRRenderTarget===!0),Yt=kt(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt,Bt,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Lt,a.RENDERBUFFER,at.__webglColorRenderbuffer[Lt])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(at.__webglDepthRenderbuffer=a.createRenderbuffer(),se(at.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ut){n.bindTexture(a.TEXTURE_CUBE_MAP,mt.__webglTexture),yt(a.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Vt=0;Vt<T.mipmaps.length;Vt++)wt(at.__webglFramebuffer[Lt][Vt],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Vt);else wt(at.__webglFramebuffer[Lt],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(T)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(It){for(let Lt=0,Vt=_t.length;Lt<Vt;Lt++){const Xt=_t[Lt],Mt=r.get(Xt);n.bindTexture(a.TEXTURE_2D,Mt.__webglTexture),yt(a.TEXTURE_2D,Xt),wt(at.__webglFramebuffer,O,Xt,a.COLOR_ATTACHMENT0+Lt,a.TEXTURE_2D,0),y(Xt)&&x(a.TEXTURE_2D)}n.unbindTexture()}else{let Lt=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Lt,mt.__webglTexture),yt(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let Vt=0;Vt<T.mipmaps.length;Vt++)wt(at.__webglFramebuffer[Vt],O,T,a.COLOR_ATTACHMENT0,Lt,Vt);else wt(at.__webglFramebuffer,O,T,a.COLOR_ATTACHMENT0,Lt,0);y(T)&&x(Lt),n.unbindTexture()}O.depthBuffer&&Le(O)}function V(O){const T=O.textures;for(let at=0,mt=T.length;at<mt;at++){const _t=T[at];if(y(_t)){const ut=L(O),It=r.get(_t).__webglTexture;n.bindTexture(ut,It),x(ut),n.unbindTexture()}}}const de=[],ye=[];function le(O){if(O.samples>0){if(Se(O)===!1){const T=O.textures,at=O.width,mt=O.height;let _t=a.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,It=r.get(O),Lt=T.length>1;if(Lt)for(let Xt=0;Xt<T.length;Xt++)n.bindFramebuffer(a.FRAMEBUFFER,It.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,It.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Vt=O.texture.mipmaps;Vt&&Vt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Xt=0;Xt<T.length;Xt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(_t|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(_t|=a.STENCIL_BUFFER_BIT)),Lt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,It.__webglColorRenderbuffer[Xt]);const Mt=r.get(T[Xt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Mt,0)}a.blitFramebuffer(0,0,at,mt,0,0,at,mt,_t,a.NEAREST),d===!0&&(de.length=0,ye.length=0,de.push(a.COLOR_ATTACHMENT0+Xt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(de.push(ut),ye.push(ut),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ye)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Lt)for(let Xt=0;Xt<T.length;Xt++){n.bindFramebuffer(a.FRAMEBUFFER,It.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xt,a.RENDERBUFFER,It.__webglColorRenderbuffer[Xt]);const Mt=r.get(T[Xt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,It.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Xt,a.TEXTURE_2D,Mt,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const T=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function kt(O){return Math.min(o.maxSamples,O.samples)}function Se(O){const T=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Kt(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function re(O,T){const at=O.colorSpace,mt=O.format,_t=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||at!==Js&&at!==tr&&(we.getTransfer(at)===Ge?(mt!==Si||_t!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function an(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=ft,this.setTexture2DArray=I,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Ne,this.setupRenderTarget=he,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Se}function Z2(a,t){function n(r,o=tr){let c;const f=we.getTransfer(o);if(r===Pi)return a.UNSIGNED_BYTE;if(r===Qp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===$p)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Dy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Cy)return a.BYTE;if(r===wy)return a.SHORT;if(r===hl)return a.UNSIGNED_SHORT;if(r===Kp)return a.INT;if(r===Gr)return a.UNSIGNED_INT;if(r===ha)return a.FLOAT;if(r===Ml)return a.HALF_FLOAT;if(r===Uy)return a.ALPHA;if(r===Ly)return a.RGB;if(r===Si)return a.RGBA;if(r===pl)return a.DEPTH_COMPONENT;if(r===ml)return a.DEPTH_STENCIL;if(r===Ny)return a.RED;if(r===Jp)return a.RED_INTEGER;if(r===Oy)return a.RG;if(r===tm)return a.RG_INTEGER;if(r===em)return a.RGBA_INTEGER;if(r===cu||r===uu||r===fu||r===hu)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===cu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===cu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tp||r===ep||r===np||r===ip)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===tp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap||r===rp||r===sp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ap||r===rp)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===sp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===op||r===lp||r===cp||r===up||r===fp||r===hp||r===dp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===yp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===op)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===up)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_p)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yp)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===du||r===Sp||r===Ep)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===du)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Py||r===Mp||r===Tp||r===bp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===du)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Mp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const K2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const o=new Fn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new ar({vertexShader:K2,fragmentShader:Q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new Du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J2 extends jr{constructor(t,n){super();const r=this;let o=null,c=1,f=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,S=null,M=null;const b=new $2,y=n.getContextAttributes();let x=null,L=null;const w=[],C=[],F=new oe;let G=null;const z=new hi;z.viewport=new nn;const j=new hi;j.viewport=new nn;const U=[z,j],D=new vR;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pt=w[Z];return pt===void 0&&(pt=new Sd,w[Z]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Z){let pt=w[Z];return pt===void 0&&(pt=new Sd,w[Z]=pt),pt.getGripSpace()},this.getHand=function(Z){let pt=w[Z];return pt===void 0&&(pt=new Sd,w[Z]=pt),pt.getHandSpace()};function nt(Z){const pt=C.indexOf(Z.inputSource);if(pt===-1)return;const Tt=w[pt];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,p||f),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ht(){o.removeEventListener("select",nt),o.removeEventListener("selectstart",nt),o.removeEventListener("selectend",nt),o.removeEventListener("squeeze",nt),o.removeEventListener("squeezestart",nt),o.removeEventListener("squeezeend",nt),o.removeEventListener("end",ht),o.removeEventListener("inputsourceschange",ft);for(let Z=0;Z<w.length;Z++){const pt=C[Z];pt!==null&&(C[Z]=null,w[Z].disconnect(pt))}H=null,st=null,b.reset(),t.setRenderTarget(x),S=null,v=null,_=null,o=null,L=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",nt),o.addEventListener("selectstart",nt),o.addEventListener("selectend",nt),o.addEventListener("squeeze",nt),o.addEventListener("squeezestart",nt),o.addEventListener("squeezeend",nt),o.addEventListener("end",ht),o.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ct=null,wt=null;y.depth&&(wt=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=y.stencil?ml:pl,Ct=y.stencil?dl:Gr);const se={colorFormat:n.RGBA8,depthFormat:wt,scaleFactor:c};_=new XRWebGLBinding(o,n),v=_.createProjectionLayer(se),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new kr(v.textureWidth,v.textureHeight,{format:Si,type:Pi,depthTexture:new jy(v.textureWidth,v.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Tt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new kr(S.framebufferWidth,S.framebufferHeight,{format:Si,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),p=null,f=await o.requestReferenceSpace(h),St.setContext(o),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ft(Z){for(let pt=0;pt<Z.removed.length;pt++){const Tt=Z.removed[pt],Ct=C.indexOf(Tt);Ct>=0&&(C[Ct]=null,w[Ct].disconnect(Tt))}for(let pt=0;pt<Z.added.length;pt++){const Tt=Z.added[pt];let Ct=C.indexOf(Tt);if(Ct===-1){for(let se=0;se<w.length;se++)if(se>=C.length){C.push(Tt),Ct=se;break}else if(C[se]===null){C[se]=Tt,Ct=se;break}if(Ct===-1)break}const wt=w[Ct];wt&&wt.connect(Tt)}}const I=new it,Y=new it;function W(Z,pt,Tt){I.setFromMatrixPosition(pt.matrixWorld),Y.setFromMatrixPosition(Tt.matrixWorld);const Ct=I.distanceTo(Y),wt=pt.projectionMatrix.elements,se=Tt.projectionMatrix.elements,qt=wt[14]/(wt[10]-1),Le=wt[14]/(wt[10]+1),Ne=(wt[9]+1)/wt[5],he=(wt[9]-1)/wt[5],V=(wt[8]-1)/wt[0],de=(se[8]+1)/se[0],ye=qt*V,le=qt*de,kt=Ct/(-V+de),Se=kt*-V;if(pt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Se),Z.translateZ(kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),wt[10]===-1)Z.projectionMatrix.copy(pt.projectionMatrix),Z.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Kt=qt+kt,re=Le+kt,an=ye-Se,O=le+(Ct-Se),T=Ne*Le/re*Kt,at=he*Le/re*Kt;Z.projectionMatrix.makePerspective(an,O,T,at,Kt,re),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Et(Z,pt){pt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let pt=Z.near,Tt=Z.far;b.texture!==null&&(b.depthNear>0&&(pt=b.depthNear),b.depthFar>0&&(Tt=b.depthFar)),D.near=j.near=z.near=pt,D.far=j.far=z.far=Tt,(H!==D.near||st!==D.far)&&(o.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,st=D.far),z.layers.mask=Z.layers.mask|2,j.layers.mask=Z.layers.mask|4,D.layers.mask=z.layers.mask|j.layers.mask;const Ct=Z.parent,wt=D.cameras;Et(D,Ct);for(let se=0;se<wt.length;se++)Et(wt[se],Ct);wt.length===2?W(D,z,j):D.projectionMatrix.copy(z.projectionMatrix),N(Z,D,Ct)};function N(Z,pt,Tt){Tt===null?Z.matrix.copy(pt.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pt.projectionMatrix),Z.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=gl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Z){d=Z,v!==null&&(v.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(D)};let tt=null;function yt(Z,pt){if(g=pt.getViewerPose(p||f),M=pt,g!==null){const Tt=g.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let Ct=!1;Tt.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let qt=0;qt<Tt.length;qt++){const Le=Tt[qt];let Ne=null;if(S!==null)Ne=S.getViewport(Le);else{const V=_.getViewSubImage(v,Le);Ne=V.viewport,qt===0&&(t.setRenderTargetTextures(L,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(L))}let he=U[qt];he===void 0&&(he=new hi,he.layers.enable(qt),he.viewport=new nn,U[qt]=he),he.matrix.fromArray(Le.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Le.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),qt===0&&(D.matrix.copy(he.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(he)}const wt=o.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const qt=_.getDepthInformation(Tt[0]);qt&&qt.isValid&&qt.texture&&b.init(t,qt,o.renderState)}}for(let Tt=0;Tt<w.length;Tt++){const Ct=C[Tt],wt=w[Tt];Ct!==null&&wt!==void 0&&wt.update(Ct,pt,p||f)}tt&&tt(Z,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),M=null}const St=new Zy;St.setAnimationLoop(yt),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}}const Dr=new Ii,tU=new $e;function eU(a,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,ky(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,L,w,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(c(y,x),M(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),b(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?d(y,x,L,w):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=t.get(x),w=L.envMap,C=L.envMapRotation;w&&(y.envMap.value=w,Dr.copy(C),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),y.envMapRotation.value.setFromMatrix4(tU.makeRotationFromEuler(Dr)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,L,w){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=w*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const L=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nU(a,t,n,r){let o={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,w){const C=w.program;r.uniformBlockBinding(L,C)}function p(L,w){let C=o[L.id];C===void 0&&(M(L),C=g(L),o[L.id]=C,L.addEventListener("dispose",y));const F=w.program;r.updateUBOMapping(L,F);const G=t.render.frame;c[L.id]!==G&&(v(L),c[L.id]=G)}function g(L){const w=_();L.__bindingPointIndex=w;const C=a.createBuffer(),F=L.__size,G=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,F,G),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,w,C),C}function _(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const w=o[L.id],C=L.uniforms,F=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,w);for(let G=0,z=C.length;G<z;G++){const j=Array.isArray(C[G])?C[G]:[C[G]];for(let U=0,D=j.length;U<D;U++){const H=j[U];if(S(H,G,U,F)===!0){const st=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let ft=0;ft<nt.length;ft++){const I=nt[ft],Y=b(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,st+ht,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ht),ht+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,st,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(L,w,C,F){const G=L.value,z=w+"_"+C;if(F[z]===void 0)return typeof G=="number"||typeof G=="boolean"?F[z]=G:F[z]=G.clone(),!0;{const j=F[z];if(typeof G=="number"||typeof G=="boolean"){if(j!==G)return F[z]=G,!0}else if(j.equals(G)===!1)return j.copy(G),!0}return!1}function M(L){const w=L.uniforms;let C=0;const F=16;for(let z=0,j=w.length;z<j;z++){const U=Array.isArray(w[z])?w[z]:[w[z]];for(let D=0,H=U.length;D<H;D++){const st=U[D],nt=Array.isArray(st.value)?st.value:[st.value];for(let ht=0,ft=nt.length;ht<ft;ht++){const I=nt[ht],Y=b(I),W=C%F,Et=W%Y.boundary,N=W+Et;C+=Et,N!==0&&F-N<Y.storage&&(C+=F-N),st.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=C,C+=Y.storage}}}const G=C%F;return G>0&&(C+=F-G),L.__size=C,L.__cache={},this}function b(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),w}function y(L){const w=L.target;w.removeEventListener("dispose",y);const C=f.indexOf(w.__bindingPointIndex);f.splice(C,1),a.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function x(){for(const L in o)a.deleteBuffer(o[L]);f=[],o={},c={}}return{bind:d,update:p,dispose:x}}class iU{constructor(t={}){const{canvas:n=U1(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const M=new Uint32Array(4),b=new Int32Array(4);let y=null,x=null;const L=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1;this._outputColorSpace=fi;let G=0,z=0,j=null,U=-1,D=null;const H=new nn,st=new nn;let nt=null;const ht=new be(0);let ft=0,I=n.width,Y=n.height,W=1,Et=null,N=null;const tt=new nn(0,0,I,Y),yt=new nn(0,0,I,Y);let St=!1;const Z=new lm;let pt=!1,Tt=!1;const Ct=new $e,wt=new $e,se=new it,qt=new nn,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function he(){return j===null?W:1}let V=r;function de(R,K){return n.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qp}`),n.addEventListener("webglcontextlost",zt,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",xt,!1),V===null){const K="webgl2";if(V=de(K,R),V===null)throw de(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ye,le,kt,Se,Kt,re,an,O,T,at,mt,_t,ut,It,Lt,Vt,Xt,Mt,Bt,Yt,Zt,Dt,ae,X;function Nt(){ye=new dD(V),ye.init(),Dt=new Z2(V,ye),le=new sD(V,ye,t,Dt),kt=new Y2(V,ye),le.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),Se=new gD(V),Kt=new O2,re=new q2(V,ye,kt,Kt,le,Dt,Se),an=new lD(C),O=new hD(C),T=new ER(V),ae=new aD(V,T),at=new pD(V,T,Se,ae),mt=new vD(V,at,T,Se),Bt=new _D(V,le,re),Vt=new oD(Kt),_t=new N2(C,an,O,ye,le,ae,Vt),ut=new eU(C,Kt),It=new I2,Lt=new V2(ye),Mt=new iD(C,an,O,kt,mt,S,d),Xt=new W2(C,mt,le),X=new nU(V,Se,le,kt),Yt=new rD(V,ye,Se),Zt=new mD(V,ye,Se),Se.programs=_t.programs,C.capabilities=le,C.extensions=ye,C.properties=Kt,C.renderLists=It,C.shadowMap=Xt,C.state=kt,C.info=Se}Nt();const bt=new J2(C,V);this.xr=bt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(I,Y,!1))},this.getSize=function(R){return R.set(I,Y)},this.setSize=function(R,K,lt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Y=K,n.width=Math.floor(R*W),n.height=Math.floor(K*W),lt===!0&&(n.style.width=R+"px",n.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(I*W,Y*W).floor()},this.setDrawingBufferSize=function(R,K,lt){I=R,Y=K,W=lt,n.width=Math.floor(R*lt),n.height=Math.floor(K*lt),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,K,lt,ct){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,K,lt,ct),kt.viewport(H.copy(tt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,K,lt,ct){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,K,lt,ct),kt.scissor(st.copy(yt).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){kt.setScissorTest(St=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,lt=!0){let ct=0;if(R){let Q=!1;if(j!==null){const At=j.texture.format;Q=At===em||At===tm||At===Jp}if(Q){const At=j.texture.type,Ut=At===Pi||At===Gr||At===hl||At===dl||At===Qp||At===$p,Pt=Mt.getClearColor(),Ft=Mt.getClearAlpha(),te=Pt.r,Qt=Pt.g,Wt=Pt.b;Ut?(M[0]=te,M[1]=Qt,M[2]=Wt,M[3]=Ft,V.clearBufferuiv(V.COLOR,0,M)):(b[0]=te,b[1]=Qt,b[2]=Wt,b[3]=Ft,V.clearBufferiv(V.COLOR,0,b))}else ct|=V.COLOR_BUFFER_BIT}K&&(ct|=V.DEPTH_BUFFER_BIT),lt&&(ct|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",zt,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),It.dispose(),Lt.dispose(),Kt.dispose(),an.dispose(),O.dispose(),mt.dispose(),ae.dispose(),X.dispose(),_t.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",fn),bt.removeEventListener("sessionend",Tn),Hn.stop()};function zt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Se.autoReset,K=Xt.enabled,lt=Xt.autoUpdate,ct=Xt.needsUpdate,Q=Xt.type;Nt(),Se.autoReset=R,Xt.enabled=K,Xt.autoUpdate=lt,Xt.needsUpdate=ct,Xt.type=Q}function xt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ht(R){const K=R.target;K.removeEventListener("dispose",Ht),ie(K)}function ie(R){Pe(R),Kt.remove(R)}function Pe(R){const K=Kt.get(R).programs;K!==void 0&&(K.forEach(function(lt){_t.releaseProgram(lt)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,lt,ct,Q,At){K===null&&(K=Le);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Pt=lr(R,K,lt,ct,Q);kt.setMaterial(ct,Ut);let Ft=lt.index,te=1;if(ct.wireframe===!0){if(Ft=at.getWireframeAttribute(lt),Ft===void 0)return;te=2}const Qt=lt.drawRange,Wt=lt.attributes.position;let pe=Qt.start*te,De=(Qt.start+Qt.count)*te;At!==null&&(pe=Math.max(pe,At.start*te),De=Math.min(De,(At.start+At.count)*te)),Ft!==null?(pe=Math.max(pe,0),De=Math.min(De,Ft.count)):Wt!=null&&(pe=Math.max(pe,0),De=Math.min(De,Wt.count));const We=De-pe;if(We<0||We===1/0)return;ae.setup(Q,ct,Pt,lt,Ft);let Ee,Me=Yt;if(Ft!==null&&(Ee=T.get(Ft),Me=Zt,Me.setIndex(Ee)),Q.isMesh)ct.wireframe===!0?(kt.setLineWidth(ct.wireframeLinewidth*he()),Me.setMode(V.LINES)):Me.setMode(V.TRIANGLES);else if(Q.isLine){let $t=ct.linewidth;$t===void 0&&($t=1),kt.setLineWidth($t*he()),Q.isLineSegments?Me.setMode(V.LINES):Q.isLineLoop?Me.setMode(V.LINE_LOOP):Me.setMode(V.LINE_STRIP)}else Q.isPoints?Me.setMode(V.POINTS):Q.isSprite&&Me.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Me.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $t=Q._multiDrawStarts,Je=Q._multiDrawCounts,Ae=Q._multiDrawCount,wn=Ft?T.get(Ft).bytesPerElement:1,Ea=Kt.get(ct).currentProgram.getUniforms();for(let je=0;je<Ae;je++)Ea.setValue(V,"_gl_DrawID",je),Me.render($t[je]/wn,Je[je])}else if(Q.isInstancedMesh)Me.renderInstances(pe,We,Q.count);else if(lt.isInstancedBufferGeometry){const $t=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Je=Math.min(lt.instanceCount,$t);Me.renderInstances(pe,We,Je)}else Me.render(pe,We)};function Re(R,K,lt){R.transparent===!0&&R.side===fa&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,ya(R,K,lt),R.side=ir,R.needsUpdate=!0,ya(R,K,lt),R.side=fa):ya(R,K,lt)}this.compile=function(R,K,lt=null){lt===null&&(lt=R),x=Lt.get(lt),x.init(K),w.push(x),lt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),R!==lt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ct=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const At=Q.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Pt=At[Ut];Re(Pt,lt,Q),ct.add(Pt)}else Re(At,lt,Q),ct.add(At)}),x=w.pop(),ct},this.compileAsync=function(R,K,lt=null){const ct=this.compile(R,K,lt);return new Promise(Q=>{function At(){if(ct.forEach(function(Ut){Kt.get(Ut).currentProgram.isReady()&&ct.delete(Ut)}),ct.size===0){Q(R);return}setTimeout(At,10)}ye.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Yn=null;function vn(R){Yn&&Yn(R)}function fn(){Hn.stop()}function Tn(){Hn.start()}const Hn=new Zy;Hn.setAnimationLoop(vn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(R){Yn=R,bt.setAnimationLoop(R),R===null?Hn.stop():Hn.start()},bt.addEventListener("sessionstart",fn),bt.addEventListener("sessionend",Tn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(K),K=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,K,j),x=Lt.get(R,w.length),x.init(K),w.push(x),wt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Z.setFromProjectionMatrix(wt),Tt=this.localClippingEnabled,pt=Vt.init(this.clippingPlanes,Tt),y=It.get(R,L.length),y.init(),L.push(y),bt.enabled===!0&&bt.isPresenting===!0){const At=C.xr.getDepthSensingMesh();At!==null&&sr(At,K,-1/0,C.sortObjects)}sr(R,K,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Et,N),Ne=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Ne&&Mt.addToRenderList(y,R),this.info.render.frame++,pt===!0&&Vt.beginShadows();const lt=x.state.shadowsArray;Xt.render(lt,R,K),pt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=y.opaque,Q=y.transmissive;if(x.setupLights(),K.isArrayCamera){const At=K.cameras;if(Q.length>0)for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];Cl(ct,Q,R,Ft)}Ne&&Mt.render(R);for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];Rl(y,R,Ft,Ft.viewport)}}else Q.length>0&&Cl(ct,Q,R,K),Ne&&Mt.render(R),Rl(y,R,K);j!==null&&z===0&&(re.updateMultisampleRenderTarget(j),re.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(C,R,K),ae.resetDefaultState(),U=-1,D=null,w.pop(),w.length>0?(x=w[w.length-1],pt===!0&&Vt.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function sr(R,K,lt,ct){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){ct&&qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Ut=mt.update(R),Pt=R.material;Pt.visible&&y.push(R,Ut,Pt,lt,qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ut=mt.update(R),Pt=R.material;if(ct&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),qt.copy(Ut.boundingSphere.center)),qt.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Pt)){const Ft=Ut.groups;for(let te=0,Qt=Ft.length;te<Qt;te++){const Wt=Ft[te],pe=Pt[Wt.materialIndex];pe&&pe.visible&&y.push(R,Ut,pe,lt,qt.z,Wt)}}else Pt.visible&&y.push(R,Ut,Pt,lt,qt.z,null)}}const At=R.children;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++)sr(At[Ut],K,lt,ct)}function Rl(R,K,lt,ct){const Q=R.opaque,At=R.transmissive,Ut=R.transparent;x.setupLightsView(lt),pt===!0&&Vt.setGlobalState(C.clippingPlanes,lt),ct&&kt.viewport(H.copy(ct)),Q.length>0&&or(Q,K,lt),At.length>0&&or(At,K,lt),Ut.length>0&&or(Ut,K,lt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Cl(R,K,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new kr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Ml:Pi,minFilter:Fr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const At=x.state.transmissionRenderTarget[ct.id],Ut=ct.viewport||H;At.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget();C.setRenderTarget(At),C.getClearColor(ht),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear(),Ne&&Mt.render(lt);const Ft=C.toneMapping;C.toneMapping=nr;const te=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),pt===!0&&Vt.setGlobalState(C.clippingPlanes,ct),or(R,lt,ct),re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Wt=0,pe=K.length;Wt<pe;Wt++){const De=K[Wt],We=De.object,Ee=De.geometry,Me=De.material,$t=De.group;if(Me.side===fa&&We.layers.test(ct.layers)){const Je=Me.side;Me.side=jn,Me.needsUpdate=!0,xa(We,lt,ct,Ee,Me,$t),Me.side=Je,Me.needsUpdate=!0,Qt=!0}}Qt===!0&&(re.updateMultisampleRenderTarget(At),re.updateRenderTargetMipmap(At))}C.setRenderTarget(Pt),C.setClearColor(ht,ft),te!==void 0&&(ct.viewport=te),C.toneMapping=Ft}function or(R,K,lt){const ct=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,At=R.length;Q<At;Q++){const Ut=R[Q],Pt=Ut.object,Ft=Ut.geometry,te=Ut.group;let Qt=Ut.material;Qt.allowOverride===!0&&ct!==null&&(Qt=ct),Pt.layers.test(lt.layers)&&xa(Pt,K,lt,Ft,Qt,te)}}function xa(R,K,lt,ct,Q,At){R.onBeforeRender(C,K,lt,ct,Q,At),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(C,K,lt,ct,R,At),Q.transparent===!0&&Q.side===fa&&Q.forceSinglePass===!1?(Q.side=jn,Q.needsUpdate=!0,C.renderBufferDirect(lt,K,ct,Q,R,At),Q.side=ir,Q.needsUpdate=!0,C.renderBufferDirect(lt,K,ct,Q,R,At),Q.side=fa):C.renderBufferDirect(lt,K,ct,Q,R,At),R.onAfterRender(C,K,lt,ct,Q,At)}function ya(R,K,lt){K.isScene!==!0&&(K=Le);const ct=Kt.get(R),Q=x.state.lights,At=x.state.shadowsArray,Ut=Q.state.version,Pt=_t.getParameters(R,Q.state,At,K,lt),Ft=_t.getProgramCacheKey(Pt);let te=ct.programs;ct.environment=R.isMeshStandardMaterial?K.environment:null,ct.fog=K.fog,ct.envMap=(R.isMeshStandardMaterial?O:an).get(R.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",Ht),te=new Map,ct.programs=te);let Qt=te.get(Ft);if(Qt!==void 0){if(ct.currentProgram===Qt&&ct.lightsStateVersion===Ut)return Hi(R,Pt),Qt}else Pt.uniforms=_t.getUniforms(R),R.onBeforeCompile(Pt,C),Qt=_t.acquireProgram(Pt,Ft),te.set(Ft,Qt),ct.uniforms=Pt.uniforms;const Wt=ct.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=Vt.uniform),Hi(R,Pt),ct.needsLights=on(R),ct.lightsStateVersion=Ut,ct.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMap.value=Q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotShadowMap.value=Q.state.spotShadowMap,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMap.value=Q.state.pointShadowMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=Qt,ct.uniformsList=null,Qt}function Fi(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=pu.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Hi(R,K){const lt=Kt.get(R);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function lr(R,K,lt,ct,Q){K.isScene!==!0&&(K=Le),re.resetTextureUnits();const At=K.fog,Ut=ct.isMeshStandardMaterial?K.environment:null,Pt=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Js,Ft=(ct.isMeshStandardMaterial?O:an).get(ct.envMap||Ut),te=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Qt=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Wt=!!lt.morphAttributes.position,pe=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let We=nr;ct.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(We=C.toneMapping);const Ee=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Me=Ee!==void 0?Ee.length:0,$t=Kt.get(ct),Je=x.state.lights;if(pt===!0&&(Tt===!0||R!==D)){const xn=R===D&&ct.id===U;Vt.setState(ct,R,xn)}let Ae=!1;ct.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Je.state.version||$t.outputColorSpace!==Pt||Q.isBatchedMesh&&$t.batching===!1||!Q.isBatchedMesh&&$t.batching===!0||Q.isBatchedMesh&&$t.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$t.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$t.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$t.instancingMorph===!1&&Q.morphTexture!==null||$t.envMap!==Ft||ct.fog===!0&&$t.fog!==At||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Vt.numPlanes||$t.numIntersection!==Vt.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==Qt||$t.morphTargets!==Wt||$t.morphNormals!==pe||$t.morphColors!==De||$t.toneMapping!==We||$t.morphTargetsCount!==Me)&&(Ae=!0):(Ae=!0,$t.__version=ct.version);let wn=$t.currentProgram;Ae===!0&&(wn=ya(ct,K,Q));let Ea=!1,je=!1,Vi=!1;const ke=wn.getUniforms(),Dn=$t.uniforms;if(kt.useProgram(wn.program)&&(Ea=!0,je=!0,Vi=!0),ct.id!==U&&(U=ct.id,je=!0),Ea||D!==R){kt.buffers.depth.getReversed()?(Ct.copy(R.projectionMatrix),N1(Ct),O1(Ct),ke.setValue(V,"projectionMatrix",Ct)):ke.setValue(V,"projectionMatrix",R.projectionMatrix),ke.setValue(V,"viewMatrix",R.matrixWorldInverse);const bn=ke.map.cameraPosition;bn!==void 0&&bn.setValue(V,se.setFromMatrixPosition(R.matrixWorld)),le.logarithmicDepthBuffer&&ke.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ke.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,je=!0,Vi=!0)}if(Q.isSkinnedMesh){ke.setOptional(V,Q,"bindMatrix"),ke.setOptional(V,Q,"bindMatrixInverse");const xn=Q.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),ke.setValue(V,"boneTexture",xn.boneTexture,re))}Q.isBatchedMesh&&(ke.setOptional(V,Q,"batchingTexture"),ke.setValue(V,"batchingTexture",Q._matricesTexture,re),ke.setOptional(V,Q,"batchingIdTexture"),ke.setValue(V,"batchingIdTexture",Q._indirectTexture,re),ke.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ke.setValue(V,"batchingColorTexture",Q._colorsTexture,re));const hn=lt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Bt.update(Q,lt,wn),(je||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,ke.setValue(V,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Dn.envMap.value=Ft,Dn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&K.environment!==null&&(Dn.envMapIntensity.value=K.environmentIntensity),je&&(ke.setValue(V,"toneMappingExposure",C.toneMappingExposure),$t.needsLights&&Sa(Dn,Vi),At&&ct.fog===!0&&ut.refreshFogUniforms(Dn,At),ut.refreshMaterialUniforms(Dn,ct,W,Y,x.state.transmissionRenderTarget[R.id]),pu.upload(V,Fi($t),Dn,re)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(pu.upload(V,Fi($t),Dn,re),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ke.setValue(V,"center",Q.center),ke.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ke.setValue(V,"normalMatrix",Q.normalMatrix),ke.setValue(V,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const xn=ct.uniformsGroups;for(let bn=0,Ti=xn.length;bn<Ti;bn++){const ki=xn[bn];X.update(ki,wn),X.bind(ki,wn)}}return wn}function Sa(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function on(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,K,lt){const ct=Kt.get(R);ct.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Kt.get(R.texture).__webglTexture=K,Kt.get(R.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:lt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const lt=Kt.get(R);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0};const wl=V.createFramebuffer();this.setRenderTarget=function(R,K=0,lt=0){j=R,G=K,z=lt;let ct=!0,Q=null,At=!1,Ut=!1;if(R){const Ft=Kt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),ct=!1;else if(Ft.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Ft.__hasExternalTextures)re.rebindTextures(R,Kt.get(R.texture).__webglTexture,Kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Wt=R.depthTexture;if(Ft.__boundDepthTexture!==Wt){if(Wt!==null&&Kt.has(Wt)&&(R.width!==Wt.image.width||R.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ut=!0);const Qt=Kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[K])?Q=Qt[K][lt]:Q=Qt[K],At=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Q=Kt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[lt]:Q=Qt,H.copy(R.viewport),st.copy(R.scissor),nt=R.scissorTest}else H.copy(tt).multiplyScalar(W).floor(),st.copy(yt).multiplyScalar(W).floor(),nt=St;if(lt!==0&&(Q=wl),kt.bindFramebuffer(V.FRAMEBUFFER,Q)&&ct&&kt.drawBuffers(R,Q),kt.viewport(H),kt.scissor(st),kt.setScissorTest(nt),At){const Ft=Kt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,lt)}else if(Ut){const Ft=Kt.get(R.texture),te=K;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ft.__webglTexture,lt,te)}else if(R!==null&&lt!==0){const Ft=Kt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ft.__webglTexture,lt)}U=-1},this.readRenderTargetPixels=function(R,K,lt,ct,Q,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){kt.bindFramebuffer(V.FRAMEBUFFER,Ft);try{const te=R.textures[Pt],Qt=te.format,Wt=te.type;if(!le.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ct&&lt>=0&&lt<=R.height-Q&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt),V.readPixels(K,lt,ct,Q,Dt.convert(Qt),Dt.convert(Wt),At))}finally{const te=j!==null?Kt.get(j).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,K,lt,ct,Q,At,Ut,Pt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(K>=0&&K<=R.width-ct&&lt>=0&&lt<=R.height-Q){kt.bindFramebuffer(V.FRAMEBUFFER,Ft);const te=R.textures[Pt],Qt=te.format,Wt=te.type;if(!le.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.bufferData(V.PIXEL_PACK_BUFFER,At.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt),V.readPixels(K,lt,ct,Q,Dt.convert(Qt),Dt.convert(Wt),0);const De=j!==null?Kt.get(j).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,De);const We=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await L1(V,We,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,At),V.deleteBuffer(pe),V.deleteSync(We),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,lt=0){const ct=Math.pow(2,-lt),Q=Math.floor(R.image.width*ct),At=Math.floor(R.image.height*ct),Ut=K!==null?K.x:0,Pt=K!==null?K.y:0;re.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Ut,Pt,Q,At),kt.unbindTexture()};const Dl=V.createFramebuffer(),Gi=V.createFramebuffer();this.copyTextureToTexture=function(R,K,lt=null,ct=null,Q=0,At=null){At===null&&(Q!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Q,Q=0):At=0);let Ut,Pt,Ft,te,Qt,Wt,pe,De,We;const Ee=R.isCompressedTexture?R.mipmaps[At]:R.image;if(lt!==null)Ut=lt.max.x-lt.min.x,Pt=lt.max.y-lt.min.y,Ft=lt.isBox3?lt.max.z-lt.min.z:1,te=lt.min.x,Qt=lt.min.y,Wt=lt.isBox3?lt.min.z:0;else{const hn=Math.pow(2,-Q);Ut=Math.floor(Ee.width*hn),Pt=Math.floor(Ee.height*hn),R.isDataArrayTexture?Ft=Ee.depth:R.isData3DTexture?Ft=Math.floor(Ee.depth*hn):Ft=1,te=0,Qt=0,Wt=0}ct!==null?(pe=ct.x,De=ct.y,We=ct.z):(pe=0,De=0,We=0);const Me=Dt.convert(K.format),$t=Dt.convert(K.type);let Je;K.isData3DTexture?(re.setTexture3D(K,0),Je=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(re.setTexture2DArray(K,0),Je=V.TEXTURE_2D_ARRAY):(re.setTexture2D(K,0),Je=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const Ae=V.getParameter(V.UNPACK_ROW_LENGTH),wn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ea=V.getParameter(V.UNPACK_SKIP_PIXELS),je=V.getParameter(V.UNPACK_SKIP_ROWS),Vi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ee.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ee.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const ke=R.isDataArrayTexture||R.isData3DTexture,Dn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const hn=Kt.get(R),xn=Kt.get(K),bn=Kt.get(hn.__renderTarget),Ti=Kt.get(xn.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ki=0;ki<Ft;ki++)ke&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kt.get(R).__webglTexture,Q,Wt+ki),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kt.get(K).__webglTexture,At,We+ki)),V.blitFramebuffer(te,Qt,Ut,Pt,pe,De,Ut,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Kt.has(R)){const hn=Kt.get(R),xn=Kt.get(K);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Dl),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Gi);for(let bn=0;bn<Ft;bn++)ke?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,Q,Wt+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,Q),Dn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xn.__webglTexture,At,We+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xn.__webglTexture,At),Q!==0?V.blitFramebuffer(te,Qt,Ut,Pt,pe,De,Ut,Pt,V.COLOR_BUFFER_BIT,V.NEAREST):Dn?V.copyTexSubImage3D(Je,At,pe,De,We+bn,te,Qt,Ut,Pt):V.copyTexSubImage2D(Je,At,pe,De,te,Qt,Ut,Pt);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Dn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Je,At,pe,De,We,Ut,Pt,Ft,Me,$t,Ee.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Je,At,pe,De,We,Ut,Pt,Ft,Me,Ee.data):V.texSubImage3D(Je,At,pe,De,We,Ut,Pt,Ft,Me,$t,Ee):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,At,pe,De,Ut,Pt,Me,$t,Ee.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,At,pe,De,Ee.width,Ee.height,Me,Ee.data):V.texSubImage2D(V.TEXTURE_2D,At,pe,De,Ut,Pt,Me,$t,Ee);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,wn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ea),V.pixelStorei(V.UNPACK_SKIP_ROWS,je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Vi),At===0&&K.generateMipmaps&&V.generateMipmap(Je),kt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,lt=null,ct=null,Q=0){return Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,lt,ct,Q)},this.initRenderTarget=function(R){Kt.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){G=0,z=0,j=null,kt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}const yx={type:"change"},fm={type:"start"},tS={type:"end"},su=new rm,Sx=new Qa,aU=Math.cos(70*Ap.DEG2RAD),mn=new it,Wn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dd=1e-6;class rU extends yR{constructor(t,n=null){super(t,n),this.state=Ve.NONE,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new it,this._lastQuaternion=new Vr,this._lastTargetPosition=new it,this._quat=new Vr().setFromUnitVectors(t.up,new it(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q0,this._sphericalDelta=new q0,this._scale=1,this._panOffset=new it,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new it,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oU.bind(this),this._onPointerDown=sU.bind(this),this._onPointerUp=lU.bind(this),this._onContextMenu=mU.bind(this),this._onMouseWheel=fU.bind(this),this._onKeyDown=hU.bind(this),this._onTouchStart=dU.bind(this),this._onTouchMove=pU.bind(this),this._onMouseDown=cU.bind(this),this._onMouseMove=uU.bind(this),this._interceptControlDown=gU.bind(this),this._interceptControlUp=_U.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yx),this.update(),this.state=Ve.NONE}update(t=null){const n=this.object.position;mn.copy(n).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Wn:r>Math.PI&&(r-=Wn),o<-Math.PI?o+=Wn:o>Math.PI&&(o-=Wn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),n.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=mn.length();f=this._clampDistance(h*this._scale);const d=h-f;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),c=!!d}else if(this.object.isOrthographicCamera){const h=new it(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=d!==this.object.zoom;const p=new it(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(su.origin.copy(this.object.position),su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(su.direction))<aU?this.object.lookAt(this.target):(Sx.setFromNormalAndCoplanarPoint(this.object.up,this.target),su.intersectPlane(Sx,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Dd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dd||this._lastTargetPosition.distanceToSquared(this.target)>Dd?(this.dispatchEvent(yx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){mn.setFromMatrixColumn(n,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,n){this.screenSpacePanning===!0?mn.setFromMatrixColumn(n,1):(mn.setFromMatrixColumn(n,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;mn.copy(o).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=t-r.left,c=n-r.top,f=r.width,h=r.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),o=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),r=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new oe,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function sU(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function oU(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function lU(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tS),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function cU(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Ve.DOLLY;break;case Ws.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Ve.ROTATE}break;case Ws.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(fm)}function uU(a){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function fU(a){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(a.preventDefault(),this.dispatchEvent(fm),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(tS))}function hU(a){this.enabled!==!1&&this._handleKeyDown(a)}function dU(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Ve.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Ve.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(fm)}function pU(a){switch(this._trackPointer(a),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Ve.NONE}}function mU(a){this.enabled!==!1&&a.preventDefault()}function gU(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _U(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vU=()=>{const a=P.useRef(null),t=Up();return P.useEffect(()=>{const n=a.current;if(!n)return;const r=n.clientWidth,o=n.clientHeight,c=new rR;c.background=new be(0);const f=new hi(75,r/o,.1,1e3);f.position.z=2;const h=new iU({antialias:!0});h.setSize(r,o),n.appendChild(h.domElement);const d=new rU(f,h.domElement);d.enableDamping=!0,d.dampingFactor=.1,d.enableZoom=!0,c.add(new _R(3355443));const p=new gR(16777215,1);p.position.set(5,3,5),c.add(p);const g=new dR,_=new ul(.5,64,64),v=new V0({map:g.load("https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"),bumpMap:g.load("https://threejs.org/examples/textures/earthbump1k.jpg"),bumpScale:.05,specularMap:g.load("https://threejs.org/examples/textures/earthspec1k.jpg"),specular:new be(2500134)}),S=new di(_,v);c.add(S);const M=new ul(.503,64,64),b=new V0({map:g.load("https://threejs.org/examples/textures/earthcloudmap.jpg"),transparent:!0,opacity:.4,depthWrite:!1}),y=new di(M,b);c.add(y);const x=new sl;c.add(x),Yp.forEach(H=>{G({ra:H.ra,dec:H.dec,distance:H.distance,name:H.name,url:`/galaxy/${H.id}/`})});const L=document.createElement("div");L.style.position="absolute",L.style.background="rgba(0, 0, 0, 0.7)",L.style.color="#fff",L.style.padding="4px 8px",L.style.borderRadius="4px",L.style.pointerEvents="none",L.style.display="none",n.appendChild(L);const w=new xR,C=new oe;function F(H,st,nt){const ht=Ap.degToRad(H*15),ft=Ap.degToRad(st),I=nt*Math.cos(ft)*Math.cos(ht),Y=nt*Math.sin(ft),W=nt*Math.cos(ft)*Math.sin(ht);return new it(I,Y,W)}function G(H){const st=F(H.ra,H.dec,H.distance),nt=new ul(.03,8,8),ht=new om({color:16776960}),ft=new di(nt,ht);ft.position.copy(st),ft.userData={name:H.name,url:H.url},x.add(ft)}const z=H=>{const st=h.domElement.getBoundingClientRect();C.x=(H.clientX-st.left)/st.width*2-1,C.y=-((H.clientY-st.top)/st.height)*2+1,w.setFromCamera(C,f);const nt=w.intersectObjects(x.children);if(nt.length>0){const ht=nt[0].object;L.innerText=ht.userData.name,L.style.left=H.clientX+5+"px",L.style.top=H.clientY+5+"px",L.style.display="block"}else L.style.display="none"},j=H=>{const st=h.domElement.getBoundingClientRect();C.x=(H.clientX-st.left)/st.width*2-1,C.y=-((H.clientY-st.top)/st.height)*2+1,w.setFromCamera(C,f);const nt=w.intersectObjects(x.children);if(nt.length>0){const ht=nt[0].object.userData.url;t(ht)}};h.domElement.addEventListener("pointermove",z),h.domElement.addEventListener("click",j);const U=()=>{requestAnimationFrame(U),S.rotation.y+=5e-4,y.rotation.y+=6e-4,d.update(),h.render(c,f)};U();const D=()=>{const H=n.clientWidth,st=n.clientHeight;h.setSize(H,st),f.aspect=H/st,f.updateProjectionMatrix()};return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),h.domElement.removeEventListener("pointermove",z),h.domElement.removeEventListener("click",j),n.removeChild(h.domElement),n.removeChild(L),h.dispose()}},[]),$.jsx("div",{ref:a,style:{width:"100vw",height:"100vh",margin:0,padding:0,overflow:"hidden"}})};function xU(){return $.jsxs(Ox,{children:[$.jsx(Xs,{path:"/",element:$.jsx(EA,{})}),$.jsx(Xs,{path:":galaxyId/",element:$.jsx(AA,{})})]})}function yU(){return $.jsx(AT,{children:$.jsxs("div",{className:"d-flex",children:[$.jsx("div",{style:{width:"17rem"},children:$.jsx(yA,{})}),$.jsx("div",{className:"flex-grow-1",children:$.jsxs(Ox,{children:[$.jsx(Xs,{path:"/",element:$.jsx(RA,{})}),$.jsx(Xs,{path:"/galaxy/*",element:$.jsx(xU,{})}),$.jsx(Xs,{path:"/mapping/",element:$.jsx(vU,{})})]})})]})})}fM.createRoot(document.getElementById("root")).render($.jsx(P.StrictMode,{children:$.jsx(yU,{})}));
