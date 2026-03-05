function g_(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function zg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ju={exports:{}},Wa={},Xu={exports:{}},mt={};var pm;function v_(){if(pm)return mt;pm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(U,te,ve){this.props=U,this.context=te,this.refs=E,this.updater=ve||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=x.prototype;function b(U,te,ve){this.props=U,this.context=te,this.refs=E,this.updater=ve||S}var N=b.prototype=new y;N.constructor=b,M(N,x.prototype),N.isPureReactComponent=!0;var L=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function A(U,te,ve){var Re,Pe={},ne=null,pe=null;if(te!=null)for(Re in te.ref!==void 0&&(pe=te.ref),te.key!==void 0&&(ne=""+te.key),te)z.call(te,Re)&&!V.hasOwnProperty(Re)&&(Pe[Re]=te[Re]);var me=arguments.length-2;if(me===1)Pe.children=ve;else if(1<me){for(var Ie=Array(me),ze=0;ze<me;ze++)Ie[ze]=arguments[ze+2];Pe.children=Ie}if(U&&U.defaultProps)for(Re in me=U.defaultProps,me)Pe[Re]===void 0&&(Pe[Re]=me[Re]);return{$$typeof:r,type:U,key:ne,ref:pe,props:Pe,_owner:F.current}}function P(U,te){return{$$typeof:r,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function se(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function k(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return te[ve]})}var H=/\/+/g;function j(U,te){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):te.toString(36)}function K(U,te,ve,Re,Pe){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var pe=!1;if(U===null)pe=!0;else switch(ne){case"string":case"number":pe=!0;break;case"object":switch(U.$$typeof){case r:case e:pe=!0}}if(pe)return pe=U,Pe=Pe(pe),U=Re===""?"."+j(pe,0):Re,L(Pe)?(ve="",U!=null&&(ve=U.replace(H,"$&/")+"/"),K(Pe,te,ve,"",function(ze){return ze})):Pe!=null&&(se(Pe)&&(Pe=P(Pe,ve+(!Pe.key||pe&&pe.key===Pe.key?"":(""+Pe.key).replace(H,"$&/")+"/")+U)),te.push(Pe)),1;if(pe=0,Re=Re===""?".":Re+":",L(U))for(var me=0;me<U.length;me++){ne=U[me];var Ie=Re+j(ne,me);pe+=K(ne,te,ve,Ie,Pe)}else if(Ie=g(U),typeof Ie=="function")for(U=Ie.call(U),me=0;!(ne=U.next()).done;)ne=ne.value,Ie=Re+j(ne,me++),pe+=K(ne,te,ve,Ie,Pe);else if(ne==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return pe}function G(U,te,ve){if(U==null)return U;var Re=[],Pe=0;return K(U,Re,"","",function(ne){return te.call(ve,ne,Pe++)}),Re}function B(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var O={current:null},$={transition:null},ee={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:F};function ce(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:G,forEach:function(U,te,ve){G(U,function(){te.apply(this,arguments)},ve)},count:function(U){var te=0;return G(U,function(){te++}),te},toArray:function(U){return G(U,function(te){return te})||[]},only:function(U){if(!se(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},mt.Component=x,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=b,mt.StrictMode=s,mt.Suspense=p,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,mt.act=ce,mt.cloneElement=function(U,te,ve){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Re=M({},U.props),Pe=U.key,ne=U.ref,pe=U._owner;if(te!=null){if(te.ref!==void 0&&(ne=te.ref,pe=F.current),te.key!==void 0&&(Pe=""+te.key),U.type&&U.type.defaultProps)var me=U.type.defaultProps;for(Ie in te)z.call(te,Ie)&&!V.hasOwnProperty(Ie)&&(Re[Ie]=te[Ie]===void 0&&me!==void 0?me[Ie]:te[Ie])}var Ie=arguments.length-2;if(Ie===1)Re.children=ve;else if(1<Ie){me=Array(Ie);for(var ze=0;ze<Ie;ze++)me[ze]=arguments[ze+2];Re.children=me}return{$$typeof:r,type:U.type,key:Pe,ref:ne,props:Re,_owner:pe}},mt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},mt.createElement=A,mt.createFactory=function(U){var te=A.bind(null,U);return te.type=U,te},mt.createRef=function(){return{current:null}},mt.forwardRef=function(U){return{$$typeof:f,render:U}},mt.isValidElement=se,mt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:B}},mt.memo=function(U,te){return{$$typeof:h,type:U,compare:te===void 0?null:te}},mt.startTransition=function(U){var te=$.transition;$.transition={};try{U()}finally{$.transition=te}},mt.unstable_act=ce,mt.useCallback=function(U,te){return O.current.useCallback(U,te)},mt.useContext=function(U){return O.current.useContext(U)},mt.useDebugValue=function(){},mt.useDeferredValue=function(U){return O.current.useDeferredValue(U)},mt.useEffect=function(U,te){return O.current.useEffect(U,te)},mt.useId=function(){return O.current.useId()},mt.useImperativeHandle=function(U,te,ve){return O.current.useImperativeHandle(U,te,ve)},mt.useInsertionEffect=function(U,te){return O.current.useInsertionEffect(U,te)},mt.useLayoutEffect=function(U,te){return O.current.useLayoutEffect(U,te)},mt.useMemo=function(U,te){return O.current.useMemo(U,te)},mt.useReducer=function(U,te,ve){return O.current.useReducer(U,te,ve)},mt.useRef=function(U){return O.current.useRef(U)},mt.useState=function(U){return O.current.useState(U)},mt.useSyncExternalStore=function(U,te,ve){return O.current.useSyncExternalStore(U,te,ve)},mt.useTransition=function(){return O.current.useTransition()},mt.version="18.3.1",mt}var mm;function Cd(){return mm||(mm=1,Xu.exports=v_()),Xu.exports}var gm;function __(){if(gm)return Wa;gm=1;var r=Cd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var v,_={},g=null,S=null;h!==void 0&&(g=""+h),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)s.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:g,ref:S,props:_,_owner:o.current}}return Wa.Fragment=t,Wa.jsx=u,Wa.jsxs=u,Wa}var vm;function x_(){return vm||(vm=1,ju.exports=__()),ju.exports}var R=x_(),J=Cd();const Vg=zg(J),y_=g_({__proto__:null,default:Vg},[J]);var Sl={},qu={exports:{}},Fn={},$u={exports:{}},Yu={};var _m;function S_(){return _m||(_m=1,(function(r){function e($,ee){var ce=$.length;$.push(ee);e:for(;0<ce;){var U=ce-1>>>1,te=$[U];if(0<o(te,ee))$[U]=ee,$[ce]=te,ce=U;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ee=$[0],ce=$.pop();if(ce!==ee){$[0]=ce;e:for(var U=0,te=$.length,ve=te>>>1;U<ve;){var Re=2*(U+1)-1,Pe=$[Re],ne=Re+1,pe=$[ne];if(0>o(Pe,ce))ne<te&&0>o(pe,Pe)?($[U]=pe,$[ne]=ce,U=ne):($[U]=Pe,$[Re]=ce,U=Re);else if(ne<te&&0>o(pe,ce))$[U]=pe,$[ne]=ce,U=ne;else break e}}return ee}function o($,ee){var ce=$.sortIndex-ee.sortIndex;return ce!==0?ce:$.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var p=[],h=[],v=1,_=null,g=3,S=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N($){for(var ee=t(h);ee!==null;){if(ee.callback===null)s(h);else if(ee.startTime<=$)s(h),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=t(h)}}function L($){if(E=!1,N($),!M)if(t(p)!==null)M=!0,B(z);else{var ee=t(h);ee!==null&&O(L,ee.startTime-$)}}function z($,ee){M=!1,E&&(E=!1,y(A),A=-1),S=!0;var ce=g;try{for(N(ee),_=t(p);_!==null&&(!(_.expirationTime>ee)||$&&!k());){var U=_.callback;if(typeof U=="function"){_.callback=null,g=_.priorityLevel;var te=U(_.expirationTime<=ee);ee=r.unstable_now(),typeof te=="function"?_.callback=te:_===t(p)&&s(p),N(ee)}else s(p);_=t(p)}if(_!==null)var ve=!0;else{var Re=t(h);Re!==null&&O(L,Re.startTime-ee),ve=!1}return ve}finally{_=null,g=ce,S=!1}}var F=!1,V=null,A=-1,P=5,se=-1;function k(){return!(r.unstable_now()-se<P)}function H(){if(V!==null){var $=r.unstable_now();se=$;var ee=!0;try{ee=V(!0,$)}finally{ee?j():(F=!1,V=null)}}else F=!1}var j;if(typeof b=="function")j=function(){b(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,G=K.port2;K.port1.onmessage=H,j=function(){G.postMessage(null)}}else j=function(){x(H,0)};function B($){V=$,F||(F=!0,j())}function O($,ee){A=x(function(){$(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,B(z))},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function($){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var ce=g;g=ee;try{return $()}finally{g=ce}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function($,ee){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ce=g;g=$;try{return ee()}finally{g=ce}},r.unstable_scheduleCallback=function($,ee,ce){var U=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,$){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ce+te,$={id:v++,callback:ee,priorityLevel:$,startTime:ce,expirationTime:te,sortIndex:-1},ce>U?($.sortIndex=ce,e(h,$),t(p)===null&&$===t(h)&&(E?(y(A),A=-1):E=!0,O(L,ce-U))):($.sortIndex=te,e(p,$),M||S||(M=!0,B(z))),$},r.unstable_shouldYield=k,r.unstable_wrapCallback=function($){var ee=g;return function(){var ce=g;g=ee;try{return $.apply(this,arguments)}finally{g=ce}}}})(Yu)),Yu}var xm;function M_(){return xm||(xm=1,$u.exports=S_()),$u.exports}var ym;function E_(){if(ym)return Fn;ym=1;var r=Cd(),e=M_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return p.call(_,n)?!0:p.call(v,n)?!1:h.test(n)?_[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,b);x[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,b);x[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,b);x[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),k=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),$=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,U;function te(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var ve=!1;function Re(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,I=m.length-1;1<=T&&0<=I&&d[T]!==m[I];)I--;for(;1<=T&&0<=I;T--,I--)if(d[T]!==m[I]){if(T!==1||I!==1)do if(T--,I--,0>I||d[T]!==m[I]){var W=`
`+d[T].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=T&&0<=I);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?te(n):""}function Pe(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case F:return"Portal";case P:return"Profiler";case A:return"StrictMode";case j:return"Suspense";case K:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case se:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:ne(n.type)||"Memo";case B:i=n._payload,n=n._init;try{return ne(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=ze(n))}function qt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function St(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Pt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Ot(n,i){ut(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?zt(n,i.type,a):i.hasOwnProperty("defaultValue")&&zt(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function X(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function zt(n,i,a){(i!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gt=Array.isArray;function Mt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Xe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function w(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Z(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ge(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ge(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rt=["Webkit","ms","Moz","O"];Object.keys(Ke).forEach(function(n){rt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ke[i]=Ke[n]})});function Me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ke.hasOwnProperty(n)&&Ke[n]?(""+i).trim():i+"px"}function Ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Me(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var qe=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(qe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,we=null,Fe=null;function Ee(n){if(n=ba(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fo(i),be(n.stateNode,n.type,i))}}function he(n){we?Fe?Fe.push(n):Fe=[n]:we=n}function We(){if(we){var n=we,i=Fe;if(Fe=we=null,Ee(n),i)for(n=0;n<i.length;n++)Ee(i[n])}}function st(n,i){return n(i)}function Lt(){}var Et=!1;function qn(n,i,a){if(Et)return n(i,a);Et=!0;try{return st(n,i,a)}finally{Et=!1,(we!==null||Fe!==null)&&(Lt(),We())}}function Mn(n,i){var a=n.stateNode;if(a===null)return null;var c=Fo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var us=!1;if(f)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){us=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{us=!1}function hc(n,i,a,c,d,m,T,I,W){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(ye){this.onError(ye)}}var nr=!1,Fr=null,$n=!1,Or=null,po={onError:function(n){nr=!0,Fr=n}};function mo(n,i,a,c,d,m,T,I,W){nr=!1,Fr=null,hc.apply(po,arguments)}function fs(n,i,a,c,d,m,T,I,W){if(mo.apply(this,arguments),nr){if(nr){var ue=Fr;nr=!1,Fr=null}else throw Error(t(198));$n||($n=!0,Or=ue)}}function xi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function kr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fa(n){if(xi(n)!==n)throw Error(t(188))}function go(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return fa(d),n;if(m===c)return fa(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,I=d.child;I;){if(I===a){T=!0,a=d,c=m;break}if(I===c){T=!0,c=d,a=m;break}I=I.sibling}if(!T){for(I=m.child;I;){if(I===a){T=!0,a=m,c=d;break}if(I===c){T=!0,c=m,a=d;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function vo(n){return n=go(n),n!==null?_o(n):null}function _o(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_o(n);if(i!==null)return i;n=n.sibling}return null}var xo=e.unstable_scheduleCallback,yo=e.unstable_cancelCallback,pc=e.unstable_shouldYield,mc=e.unstable_requestPaint,C=e.unstable_now,Q=e.unstable_getCurrentPriorityLevel,fe=e.unstable_ImmediatePriority,oe=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,Le=e.unstable_LowPriority,Be=e.unstable_IdlePriority,Ne=null,Oe=null;function Je(n){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Nt,ft=Math.log,Qe=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(ft(n)/Qe|0)|0}var Ut=64,It=4194304;function yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $t(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var I=T&~d;I!==0?c=yt(I):(m&=T,m!==0&&(c=yt(m)))}else T=a&~d,T!==0?c=yt(T):m!==0&&(c=yt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-et(i),d=1<<a,c|=n[a],i&=~d;return c}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-et(m),I=1<<T,W=d[T];W===-1?((I&a)===0||(I&c)!==0)&&(d[T]=Ye(I,i)):W<=i&&(n.expiredLanes|=I),m&=~I}}function vt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),n}function Pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function kn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-et(i),n[i]=a}function ir(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-et(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Rt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-et(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var at=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yt,Yn,Oi,da,Kd,gc=!1,So=[],rr=null,sr=null,ar=null,ha=new Map,pa=new Map,or=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ha.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(i.pointerId)}}function ma(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ba(i),i!==null&&Yn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function B0(n,i,a,c,d){switch(i){case"focusin":return rr=ma(rr,n,i,a,c,d),!0;case"dragenter":return sr=ma(sr,n,i,a,c,d),!0;case"mouseover":return ar=ma(ar,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return ha.set(m,ma(ha.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,pa.set(m,ma(pa.get(m)||null,n,i,a,c,d)),!0}return!1}function Jd(n){var i=Br(n.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=kr(a),i!==null){n.blockedOn=i,Kd(n.priority,function(){Oi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=_c(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ct=c,a.target.dispatchEvent(c),ct=null}else return i=ba(a),i!==null&&Yn(i),n.blockedOn=a,!1;i.shift()}return!0}function Qd(n,i,a){Mo(n)&&a.delete(i)}function z0(){gc=!1,rr!==null&&Mo(rr)&&(rr=null),sr!==null&&Mo(sr)&&(sr=null),ar!==null&&Mo(ar)&&(ar=null),ha.forEach(Qd),pa.forEach(Qd)}function ga(n,i){n.blockedOn===i&&(n.blockedOn=null,gc||(gc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,z0)))}function va(n){function i(d){return ga(d,n)}if(0<So.length){ga(So[0],n);for(var a=1;a<So.length;a++){var c=So[a];c.blockedOn===n&&(c.blockedOn=null)}}for(rr!==null&&ga(rr,n),sr!==null&&ga(sr,n),ar!==null&&ga(ar,n),ha.forEach(i),pa.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&or.shift()}var ds=L.ReactCurrentBatchConfig,Eo=!0;function V0(n,i,a,c){var d=at,m=ds.transition;ds.transition=null;try{at=1,vc(n,i,a,c)}finally{at=d,ds.transition=m}}function H0(n,i,a,c){var d=at,m=ds.transition;ds.transition=null;try{at=4,vc(n,i,a,c)}finally{at=d,ds.transition=m}}function vc(n,i,a,c){if(Eo){var d=_c(n,i,a,c);if(d===null)Uc(n,i,c,wo,a),Zd(n,c);else if(B0(d,n,i,a,c))c.stopPropagation();else if(Zd(n,c),i&4&&-1<k0.indexOf(n)){for(;d!==null;){var m=ba(d);if(m!==null&&Yt(m),m=_c(n,i,a,c),m===null&&Uc(n,i,c,wo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Uc(n,i,c,null,a)}}var wo=null;function _c(n,i,a,c){if(wo=null,n=q(c),n=Br(n),n!==null)if(i=xi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=kr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case fe:return 1;case oe:return 4;case re:case Le:return 16;case Be:return 536870912;default:return 16}default:return 16}}var lr=null,xc=null,To=null;function th(){if(To)return To;var n,i=xc,a=i.length,c,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return To=d.slice(n,1<c?1-c:void 0)}function Ao(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function nh(){return!1}function Bn(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Co:nh,this.isPropagationStopped=nh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),i}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=Bn(hs),_a=ce({},hs,{view:0,detail:0}),G0=Bn(_a),Sc,Mc,xa,Ro=ce({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xa&&(xa&&n.type==="mousemove"?(Sc=n.screenX-xa.screenX,Mc=n.screenY-xa.screenY):Mc=Sc=0,xa=n),Sc)},movementY:function(n){return"movementY"in n?n.movementY:Mc}}),ih=Bn(Ro),W0=ce({},Ro,{dataTransfer:0}),j0=Bn(W0),X0=ce({},_a,{relatedTarget:0}),Ec=Bn(X0),q0=ce({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Bn(q0),Y0=ce({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),K0=Bn(Y0),Z0=ce({},hs,{data:0}),rh=Bn(Z0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ev[n])?!!i[n]:!1}function wc(){return tv}var nv=ce({},_a,{key:function(n){if(n.key){var i=J0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ao(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Q0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(n){return n.type==="keypress"?Ao(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ao(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),iv=Bn(nv),rv=ce({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=Bn(rv),sv=ce({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),av=Bn(sv),ov=ce({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=Bn(ov),cv=ce({},Ro,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),uv=Bn(cv),fv=[9,13,27,32],Tc=f&&"CompositionEvent"in window,ya=null;f&&"documentMode"in document&&(ya=document.documentMode);var dv=f&&"TextEvent"in window&&!ya,ah=f&&(!Tc||ya&&8<ya&&11>=ya),oh=" ",lh=!1;function ch(n,i){switch(n){case"keyup":return fv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function hv(n,i){switch(n){case"compositionend":return uh(i);case"keypress":return i.which!==32?null:(lh=!0,oh);case"textInput":return n=i.data,n===oh&&lh?null:n;default:return null}}function pv(n,i){if(ps)return n==="compositionend"||!Tc&&ch(n,i)?(n=th(),To=xc=lr=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ah&&i.locale!=="ko"?null:i.data;default:return null}}var mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!mv[n.type]:i==="textarea"}function dh(n,i,a,c){he(c),i=Do(i,"onChange"),0<i.length&&(a=new yc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Sa=null,Ma=null;function gv(n){Ph(n,0)}function bo(n){var i=xs(n);if(qt(i))return n}function vv(n,i){if(n==="change")return i}var hh=!1;if(f){var Ac;if(f){var Cc="oninput"in document;if(!Cc){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Cc=typeof ph.oninput=="function"}Ac=Cc}else Ac=!1;hh=Ac&&(!document.documentMode||9<document.documentMode)}function mh(){Sa&&(Sa.detachEvent("onpropertychange",gh),Ma=Sa=null)}function gh(n){if(n.propertyName==="value"&&bo(Ma)){var i=[];dh(i,Ma,n,q(n)),qn(gv,i)}}function _v(n,i,a){n==="focusin"?(mh(),Sa=i,Ma=a,Sa.attachEvent("onpropertychange",gh)):n==="focusout"&&mh()}function xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bo(Ma)}function yv(n,i){if(n==="click")return bo(i)}function Sv(n,i){if(n==="input"||n==="change")return bo(i)}function Mv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:Mv;function Ea(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!oi(n[d],i[d]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _h(n,i){var a=vh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function xh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?xh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=pt(n.document)}return i}function Rc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ev(n){var i=yh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&xh(a.ownerDocument.documentElement,a)){if(c!==null&&Rc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=_h(a,m);var T=_h(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var wv=f&&"documentMode"in document&&11>=document.documentMode,ms=null,bc=null,wa=null,Pc=!1;function Sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pc||ms==null||ms!==pt(c)||(c=ms,"selectionStart"in c&&Rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&Ea(wa,c)||(wa=c,c=Do(bc,"onSelect"),0<c.length&&(i=new yc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ms)))}function Po(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var gs={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},Nc={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function No(n){if(Nc[n])return Nc[n];if(!gs[n])return n;var i=gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mh)return Nc[n]=i[a];return n}var Eh=No("animationend"),wh=No("animationiteration"),Th=No("animationstart"),Ah=No("transitionend"),Ch=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(n,i){Ch.set(n,i),l(i,[n])}for(var Lc=0;Lc<Rh.length;Lc++){var Dc=Rh[Lc],Tv=Dc.toLowerCase(),Av=Dc[0].toUpperCase()+Dc.slice(1);cr(Tv,"on"+Av)}cr(Eh,"onAnimationEnd"),cr(wh,"onAnimationIteration"),cr(Th,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,fs(c,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var I=c[T],W=I.instance,ue=I.currentTarget;if(I=I.listener,W!==m&&d.isPropagationStopped())break e;bh(d,I,ue),m=W}else for(T=0;T<c.length;T++){if(I=c[T],W=I.instance,ue=I.currentTarget,I=I.listener,W!==m&&d.isPropagationStopped())break e;bh(d,I,ue),m=W}}}if($n)throw n=Or,$n=!1,Or=null,n}function kt(n,i){var a=i[Vc];a===void 0&&(a=i[Vc]=new Set);var c=n+"__bubble";a.has(c)||(Nh(i,n,2,!1),a.add(c))}function Ic(n,i,a){var c=0;i&&(c|=4),Nh(a,n,c,i)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Aa(n){if(!n[Lo]){n[Lo]=!0,s.forEach(function(a){a!=="selectionchange"&&(Cv.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Lo]||(i[Lo]=!0,Ic("selectionchange",!1,i))}}function Nh(n,i,a,c){switch(eh(i)){case 1:var d=V0;break;case 4:d=H0;break;default:d=vc}a=d.bind(null,i,a,n),d=void 0,!us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Uc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;T=T.return}for(;I!==null;){if(T=Br(I),T===null)return;if(W=T.tag,W===5||W===6){c=m=T;continue e}I=I.parentNode}}c=c.return}qn(function(){var ue=m,ye=q(a),Se=[];e:{var xe=Ch.get(n);if(xe!==void 0){var ke=yc,je=n;switch(n){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":ke=iv;break;case"focusin":je="focus",ke=Ec;break;case"focusout":je="blur",ke=Ec;break;case"beforeblur":case"afterblur":ke=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=av;break;case Eh:case wh:case Th:ke=$0;break;case Ah:ke=lv;break;case"scroll":ke=G0;break;case"wheel":ke=uv;break;case"copy":case"cut":case"paste":ke=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=sh}var $e=(i&4)!==0,Kt=!$e&&n==="scroll",ie=$e?xe!==null?xe+"Capture":null:xe;$e=[];for(var Y=ue,ae;Y!==null;){ae=Y;var Te=ae.stateNode;if(ae.tag===5&&Te!==null&&(ae=Te,ie!==null&&(Te=Mn(Y,ie),Te!=null&&$e.push(Ca(Y,Te,ae)))),Kt)break;Y=Y.return}0<$e.length&&(xe=new ke(xe,je,null,a,ye),Se.push({event:xe,listeners:$e}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",xe&&a!==ct&&(je=a.relatedTarget||a.fromElement)&&(Br(je)||je[ki]))break e;if((ke||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,ke?(je=a.relatedTarget||a.toElement,ke=ue,je=je?Br(je):null,je!==null&&(Kt=xi(je),je!==Kt||je.tag!==5&&je.tag!==6)&&(je=null)):(ke=null,je=ue),ke!==je)){if($e=ih,Te="onMouseLeave",ie="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&($e=sh,Te="onPointerLeave",ie="onPointerEnter",Y="pointer"),Kt=ke==null?xe:xs(ke),ae=je==null?xe:xs(je),xe=new $e(Te,Y+"leave",ke,a,ye),xe.target=Kt,xe.relatedTarget=ae,Te=null,Br(ye)===ue&&($e=new $e(ie,Y+"enter",je,a,ye),$e.target=ae,$e.relatedTarget=Kt,Te=$e),Kt=Te,ke&&je)t:{for($e=ke,ie=je,Y=0,ae=$e;ae;ae=vs(ae))Y++;for(ae=0,Te=ie;Te;Te=vs(Te))ae++;for(;0<Y-ae;)$e=vs($e),Y--;for(;0<ae-Y;)ie=vs(ie),ae--;for(;Y--;){if($e===ie||ie!==null&&$e===ie.alternate)break t;$e=vs($e),ie=vs(ie)}$e=null}else $e=null;ke!==null&&Lh(Se,xe,ke,$e,!1),je!==null&&Kt!==null&&Lh(Se,Kt,je,$e,!0)}}e:{if(xe=ue?xs(ue):window,ke=xe.nodeName&&xe.nodeName.toLowerCase(),ke==="select"||ke==="input"&&xe.type==="file")var Ze=vv;else if(fh(xe))if(hh)Ze=Sv;else{Ze=xv;var tt=_v}else(ke=xe.nodeName)&&ke.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=yv);if(Ze&&(Ze=Ze(n,ue))){dh(Se,Ze,a,ye);break e}tt&&tt(n,xe,ue),n==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&zt(xe,"number",xe.value)}switch(tt=ue?xs(ue):window,n){case"focusin":(fh(tt)||tt.contentEditable==="true")&&(ms=tt,bc=ue,wa=null);break;case"focusout":wa=bc=ms=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Sh(Se,a,ye);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Sh(Se,a,ye)}var nt;if(Tc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ps?ch(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(ah&&a.locale!=="ko"&&(ps||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ps&&(nt=th()):(lr=ye,xc="value"in lr?lr.value:lr.textContent,ps=!0)),tt=Do(ue,ot),0<tt.length&&(ot=new rh(ot,n,null,a,ye),Se.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=uh(a),nt!==null&&(ot.data=nt)))),(nt=dv?hv(n,a):pv(n,a))&&(ue=Do(ue,"onBeforeInput"),0<ue.length&&(ye=new rh("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:ue}),ye.data=nt))}Ph(Se,i)})}function Ca(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Do(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Mn(n,a),m!=null&&c.unshift(Ca(n,m,d)),m=Mn(n,i),m!=null&&c.push(Ca(n,m,d))),n=n.return}return c}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lh(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var I=a,W=I.alternate,ue=I.stateNode;if(W!==null&&W===c)break;I.tag===5&&ue!==null&&(I=ue,d?(W=Mn(a,m),W!=null&&T.unshift(Ca(a,W,I))):d||(W=Mn(a,m),W!=null&&T.push(Ca(a,W,I)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Rv=/\r\n?/g,bv=/\u0000|\uFFFD/g;function Dh(n){return(typeof n=="string"?n:""+n).replace(Rv,`
`).replace(bv,"")}function Io(n,i,a){if(i=Dh(i),Dh(n)!==i&&a)throw Error(t(425))}function Uo(){}var Fc=null,Oc=null;function kc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(n){return Ih.resolve(null).then(n).catch(Lv)}:Bc;function Lv(n){setTimeout(function(){throw n})}function zc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),va(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);va(i)}function ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Uh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),yi="__reactFiber$"+_s,Ra="__reactProps$"+_s,ki="__reactContainer$"+_s,Vc="__reactEvents$"+_s,Dv="__reactListeners$"+_s,Iv="__reactHandles$"+_s;function Br(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ki]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Uh(n);n!==null;){if(a=n[yi])return a;n=Uh(n)}return i}n=a,a=n.parentNode}return null}function ba(n){return n=n[yi]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fo(n){return n[Ra]||null}var Hc=[],ys=-1;function fr(n){return{current:n}}function Bt(n){0>ys||(n.current=Hc[ys],Hc[ys]=null,ys--)}function Ft(n,i){ys++,Hc[ys]=n.current,n.current=i}var dr={},hn=fr(dr),Nn=fr(!1),zr=dr;function Ss(n,i){var a=n.type.contextTypes;if(!a)return dr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(n){return n=n.childContextTypes,n!=null}function Oo(){Bt(Nn),Bt(hn)}function Fh(n,i,a){if(hn.current!==dr)throw Error(t(168));Ft(hn,i),Ft(Nn,a)}function Oh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,pe(n)||"Unknown",d));return ce({},a,c)}function ko(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,zr=hn.current,Ft(hn,n),Ft(Nn,Nn.current),!0}function kh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Oh(n,i,zr),c.__reactInternalMemoizedMergedChildContext=n,Bt(Nn),Bt(hn),Ft(hn,n)):Bt(Nn),Ft(Nn,a)}var Bi=null,Bo=!1,Gc=!1;function Bh(n){Bi===null?Bi=[n]:Bi.push(n)}function Uv(n){Bo=!0,Bh(n)}function hr(){if(!Gc&&Bi!==null){Gc=!0;var n=0,i=at;try{var a=Bi;for(at=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Bi=null,Bo=!1}catch(d){throw Bi!==null&&(Bi=Bi.slice(n+1)),xo(fe,hr),d}finally{at=i,Gc=!1}}return null}var Ms=[],Es=0,zo=null,Vo=0,Kn=[],Zn=0,Vr=null,zi=1,Vi="";function Hr(n,i){Ms[Es++]=Vo,Ms[Es++]=zo,zo=n,Vo=i}function zh(n,i,a){Kn[Zn++]=zi,Kn[Zn++]=Vi,Kn[Zn++]=Vr,Vr=n;var c=zi;n=Vi;var d=32-et(c)-1;c&=~(1<<d),a+=1;var m=32-et(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,zi=1<<32-et(i)+d|a<<d|c,Vi=m+n}else zi=1<<m|a<<d|c,Vi=n}function Wc(n){n.return!==null&&(Hr(n,1),zh(n,1,0))}function jc(n){for(;n===zo;)zo=Ms[--Es],Ms[Es]=null,Vo=Ms[--Es],Ms[Es]=null;for(;n===Vr;)Vr=Kn[--Zn],Kn[Zn]=null,Vi=Kn[--Zn],Kn[Zn]=null,zi=Kn[--Zn],Kn[Zn]=null}var zn=null,Vn=null,Vt=!1,li=null;function Vh(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Vn=ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Vr!==null?{id:zi,overflow:Vi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Vn=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qc(n){if(Vt){var i=Vn;if(i){var a=i;if(!Hh(n,i)){if(Xc(n))throw Error(t(418));i=ur(a.nextSibling);var c=zn;i&&Hh(n,i)?Vh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,zn=n)}}else{if(Xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,zn=n}}}function Gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Ho(n){if(n!==zn)return!1;if(!Vt)return Gh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!kc(n.type,n.memoizedProps)),i&&(i=Vn)){if(Xc(n))throw Wh(),Error(t(418));for(;i;)Vh(n,i),i=ur(i.nextSibling)}if(Gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=ur(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=zn?ur(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=Vn;n;)n=ur(n.nextSibling)}function ws(){Vn=zn=null,Vt=!1}function $c(n){li===null?li=[n]:li.push(n)}var Fv=L.ReactCurrentBatchConfig;function Pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var I=d.refs;T===null?delete I[m]:I[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Go(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function jh(n){var i=n._init;return i(n._payload)}function Xh(n){function i(ie,Y){if(n){var ae=ie.deletions;ae===null?(ie.deletions=[Y],ie.flags|=16):ae.push(Y)}}function a(ie,Y){if(!n)return null;for(;Y!==null;)i(ie,Y),Y=Y.sibling;return null}function c(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function d(ie,Y){return ie=Sr(ie,Y),ie.index=0,ie.sibling=null,ie}function m(ie,Y,ae){return ie.index=ae,n?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<Y?(ie.flags|=2,Y):ae):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function T(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function I(ie,Y,ae,Te){return Y===null||Y.tag!==6?(Y=Bu(ae,ie.mode,Te),Y.return=ie,Y):(Y=d(Y,ae),Y.return=ie,Y)}function W(ie,Y,ae,Te){var Ze=ae.type;return Ze===V?ye(ie,Y,ae.props.children,Te,ae.key):Y!==null&&(Y.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===B&&jh(Ze)===Y.type)?(Te=d(Y,ae.props),Te.ref=Pa(ie,Y,ae),Te.return=ie,Te):(Te=hl(ae.type,ae.key,ae.props,null,ie.mode,Te),Te.ref=Pa(ie,Y,ae),Te.return=ie,Te)}function ue(ie,Y,ae,Te){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ae.containerInfo||Y.stateNode.implementation!==ae.implementation?(Y=zu(ae,ie.mode,Te),Y.return=ie,Y):(Y=d(Y,ae.children||[]),Y.return=ie,Y)}function ye(ie,Y,ae,Te,Ze){return Y===null||Y.tag!==7?(Y=Kr(ae,ie.mode,Te,Ze),Y.return=ie,Y):(Y=d(Y,ae),Y.return=ie,Y)}function Se(ie,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Bu(""+Y,ie.mode,ae),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case z:return ae=hl(Y.type,Y.key,Y.props,null,ie.mode,ae),ae.ref=Pa(ie,null,Y),ae.return=ie,ae;case F:return Y=zu(Y,ie.mode,ae),Y.return=ie,Y;case B:var Te=Y._init;return Se(ie,Te(Y._payload),ae)}if(gt(Y)||ee(Y))return Y=Kr(Y,ie.mode,ae,null),Y.return=ie,Y;Go(ie,Y)}return null}function xe(ie,Y,ae,Te){var Ze=Y!==null?Y.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Ze!==null?null:I(ie,Y,""+ae,Te);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case z:return ae.key===Ze?W(ie,Y,ae,Te):null;case F:return ae.key===Ze?ue(ie,Y,ae,Te):null;case B:return Ze=ae._init,xe(ie,Y,Ze(ae._payload),Te)}if(gt(ae)||ee(ae))return Ze!==null?null:ye(ie,Y,ae,Te,null);Go(ie,ae)}return null}function ke(ie,Y,ae,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ie=ie.get(ae)||null,I(Y,ie,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case z:return ie=ie.get(Te.key===null?ae:Te.key)||null,W(Y,ie,Te,Ze);case F:return ie=ie.get(Te.key===null?ae:Te.key)||null,ue(Y,ie,Te,Ze);case B:var tt=Te._init;return ke(ie,Y,ae,tt(Te._payload),Ze)}if(gt(Te)||ee(Te))return ie=ie.get(ae)||null,ye(Y,ie,Te,Ze,null);Go(Y,Te)}return null}function je(ie,Y,ae,Te){for(var Ze=null,tt=null,nt=Y,ot=Y=0,on=null;nt!==null&&ot<ae.length;ot++){nt.index>ot?(on=nt,nt=null):on=nt.sibling;var At=xe(ie,nt,ae[ot],Te);if(At===null){nt===null&&(nt=on);break}n&&nt&&At.alternate===null&&i(ie,nt),Y=m(At,Y,ot),tt===null?Ze=At:tt.sibling=At,tt=At,nt=on}if(ot===ae.length)return a(ie,nt),Vt&&Hr(ie,ot),Ze;if(nt===null){for(;ot<ae.length;ot++)nt=Se(ie,ae[ot],Te),nt!==null&&(Y=m(nt,Y,ot),tt===null?Ze=nt:tt.sibling=nt,tt=nt);return Vt&&Hr(ie,ot),Ze}for(nt=c(ie,nt);ot<ae.length;ot++)on=ke(nt,ie,ot,ae[ot],Te),on!==null&&(n&&on.alternate!==null&&nt.delete(on.key===null?ot:on.key),Y=m(on,Y,ot),tt===null?Ze=on:tt.sibling=on,tt=on);return n&&nt.forEach(function(Mr){return i(ie,Mr)}),Vt&&Hr(ie,ot),Ze}function $e(ie,Y,ae,Te){var Ze=ee(ae);if(typeof Ze!="function")throw Error(t(150));if(ae=Ze.call(ae),ae==null)throw Error(t(151));for(var tt=Ze=null,nt=Y,ot=Y=0,on=null,At=ae.next();nt!==null&&!At.done;ot++,At=ae.next()){nt.index>ot?(on=nt,nt=null):on=nt.sibling;var Mr=xe(ie,nt,At.value,Te);if(Mr===null){nt===null&&(nt=on);break}n&&nt&&Mr.alternate===null&&i(ie,nt),Y=m(Mr,Y,ot),tt===null?Ze=Mr:tt.sibling=Mr,tt=Mr,nt=on}if(At.done)return a(ie,nt),Vt&&Hr(ie,ot),Ze;if(nt===null){for(;!At.done;ot++,At=ae.next())At=Se(ie,At.value,Te),At!==null&&(Y=m(At,Y,ot),tt===null?Ze=At:tt.sibling=At,tt=At);return Vt&&Hr(ie,ot),Ze}for(nt=c(ie,nt);!At.done;ot++,At=ae.next())At=ke(nt,ie,ot,At.value,Te),At!==null&&(n&&At.alternate!==null&&nt.delete(At.key===null?ot:At.key),Y=m(At,Y,ot),tt===null?Ze=At:tt.sibling=At,tt=At);return n&&nt.forEach(function(m_){return i(ie,m_)}),Vt&&Hr(ie,ot),Ze}function Kt(ie,Y,ae,Te){if(typeof ae=="object"&&ae!==null&&ae.type===V&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case z:e:{for(var Ze=ae.key,tt=Y;tt!==null;){if(tt.key===Ze){if(Ze=ae.type,Ze===V){if(tt.tag===7){a(ie,tt.sibling),Y=d(tt,ae.props.children),Y.return=ie,ie=Y;break e}}else if(tt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===B&&jh(Ze)===tt.type){a(ie,tt.sibling),Y=d(tt,ae.props),Y.ref=Pa(ie,tt,ae),Y.return=ie,ie=Y;break e}a(ie,tt);break}else i(ie,tt);tt=tt.sibling}ae.type===V?(Y=Kr(ae.props.children,ie.mode,Te,ae.key),Y.return=ie,ie=Y):(Te=hl(ae.type,ae.key,ae.props,null,ie.mode,Te),Te.ref=Pa(ie,Y,ae),Te.return=ie,ie=Te)}return T(ie);case F:e:{for(tt=ae.key;Y!==null;){if(Y.key===tt)if(Y.tag===4&&Y.stateNode.containerInfo===ae.containerInfo&&Y.stateNode.implementation===ae.implementation){a(ie,Y.sibling),Y=d(Y,ae.children||[]),Y.return=ie,ie=Y;break e}else{a(ie,Y);break}else i(ie,Y);Y=Y.sibling}Y=zu(ae,ie.mode,Te),Y.return=ie,ie=Y}return T(ie);case B:return tt=ae._init,Kt(ie,Y,tt(ae._payload),Te)}if(gt(ae))return je(ie,Y,ae,Te);if(ee(ae))return $e(ie,Y,ae,Te);Go(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,Y!==null&&Y.tag===6?(a(ie,Y.sibling),Y=d(Y,ae),Y.return=ie,ie=Y):(a(ie,Y),Y=Bu(ae,ie.mode,Te),Y.return=ie,ie=Y),T(ie)):a(ie,Y)}return Kt}var Ts=Xh(!0),qh=Xh(!1),Wo=fr(null),jo=null,As=null,Yc=null;function Kc(){Yc=As=jo=null}function Zc(n){var i=Wo.current;Bt(Wo),n._currentValue=i}function Jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){jo=n,Yc=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Dn=!0),n.firstContext=null)}function Jn(n){var i=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(jo===null)throw Error(t(308));As=n,jo.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Gr=null;function Qc(n){Gr===null?Gr=[n]:Gr.push(n)}function $h(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Qc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Hi(n,c)}function Hi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function eu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Hi(n,a)}return d=c.interleaved,d===null?(i.next=i,Qc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Hi(n,a)}function Xo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}function Kh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qo(n,i,a,c){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var W=I,ue=W.next;W.next=null,T===null?m=ue:T.next=ue,T=W;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==T&&(I===null?ye.firstBaseUpdate=ue:I.next=ue,ye.lastBaseUpdate=W))}if(m!==null){var Se=d.baseState;T=0,ye=ue=W=null,I=m;do{var xe=I.lane,ke=I.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=n,$e=I;switch(xe=i,ke=a,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){Se=je.call(ke,Se,xe);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,xe=typeof je=="function"?je.call(ke,Se,xe):je,xe==null)break e;Se=ce({},Se,xe);break e;case 2:pr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[I]:xe.push(I))}else ke={eventTime:ke,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(ue=ye=ke,W=Se):ye=ye.next=ke,T|=xe;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(W=Se),d.baseState=W,d.firstBaseUpdate=ue,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Xr|=T,n.lanes=T,n.memoizedState=Se}}function Zh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Na={},Si=fr(Na),La=fr(Na),Da=fr(Na);function Wr(n){if(n===Na)throw Error(t(174));return n}function tu(n,i){switch(Ft(Da,i),Ft(La,n),Ft(Si,Na),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_e(i,n)}Bt(Si),Ft(Si,i)}function Rs(){Bt(Si),Bt(La),Bt(Da)}function Jh(n){Wr(Da.current);var i=Wr(Si.current),a=_e(i,n.type);i!==a&&(Ft(La,n),Ft(Si,a))}function nu(n){La.current===n&&(Bt(Si),Bt(La))}var Ht=fr(0);function $o(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var iu=[];function ru(){for(var n=0;n<iu.length;n++)iu[n]._workInProgressVersionPrimary=null;iu.length=0}var Yo=L.ReactCurrentDispatcher,su=L.ReactCurrentBatchConfig,jr=0,Gt=null,en=null,sn=null,Ko=!1,Ia=!1,Ua=0,Ov=0;function pn(){throw Error(t(321))}function au(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function ou(n,i,a,c,d,m){if(jr=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Yo.current=n===null||n.memoizedState===null?Vv:Hv,n=a(c,d),Ia){m=0;do{if(Ia=!1,Ua=0,25<=m)throw Error(t(301));m+=1,sn=en=null,i.updateQueue=null,Yo.current=Gv,n=a(c,d)}while(Ia)}if(Yo.current=Qo,i=en!==null&&en.next!==null,jr=0,sn=en=Gt=null,Ko=!1,i)throw Error(t(300));return n}function lu(){var n=Ua!==0;return Ua=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function Qn(){if(en===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function Fa(n,i){return typeof i=="function"?i(n):i}function cu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=en,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=T=null,W=null,ue=m;do{var ye=ue.lane;if((jr&ye)===ye)W!==null&&(W=W.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Se={lane:ye,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};W===null?(I=W=Se,T=c):W=W.next=Se,Gt.lanes|=ye,Xr|=ye}ue=ue.next}while(ue!==null&&ue!==m);W===null?T=c:W.next=I,oi(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Gt.lanes|=m,Xr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function uu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);oi(m,i.memoizedState)||(Dn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Qh(){}function ep(n,i){var a=Gt,c=Qn(),d=i(),m=!oi(c.memoizedState,d);if(m&&(c.memoizedState=d,Dn=!0),c=c.queue,fu(ip.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Oa(9,np.bind(null,a,c,d,i),void 0,null),an===null)throw Error(t(349));(jr&30)!==0||tp(a,i,d)}return d}function tp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function np(n,i,a,c){i.value=a,i.getSnapshot=c,rp(i)&&sp(n)}function ip(n,i,a){return a(function(){rp(i)&&sp(n)})}function rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function sp(n){var i=Hi(n,1);i!==null&&di(i,n,1,-1)}function ap(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:n},i.queue=n,n=n.dispatch=zv.bind(null,Gt,n),[i.memoizedState,n]}function Oa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function op(){return Qn().memoizedState}function Zo(n,i,a,c){var d=Mi();Gt.flags|=n,d.memoizedState=Oa(1|i,a,void 0,c===void 0?null:c)}function Jo(n,i,a,c){var d=Qn();c=c===void 0?null:c;var m=void 0;if(en!==null){var T=en.memoizedState;if(m=T.destroy,c!==null&&au(c,T.deps)){d.memoizedState=Oa(i,a,m,c);return}}Gt.flags|=n,d.memoizedState=Oa(1|i,a,m,c)}function lp(n,i){return Zo(8390656,8,n,i)}function fu(n,i){return Jo(2048,8,n,i)}function cp(n,i){return Jo(4,2,n,i)}function up(n,i){return Jo(4,4,n,i)}function fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dp(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4,4,fp.bind(null,i,n),a)}function du(){}function hp(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function pp(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function mp(n,i,a){return(jr&21)===0?(n.baseState&&(n.baseState=!1,Dn=!0),n.memoizedState=a):(oi(a,i)||(a=bn(),Gt.lanes|=a,Xr|=a,n.baseState=!0),i)}function kv(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var c=su.transition;su.transition={};try{n(!1),i()}finally{at=a,su.transition=c}}function gp(){return Qn().memoizedState}function Bv(n,i,a){var c=xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))_p(i,a);else if(a=$h(n,i,a,c),a!==null){var d=Tn();di(a,n,c,d),xp(a,i,c)}}function zv(n,i,a){var c=xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))_p(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,I=m(T,a);if(d.hasEagerState=!0,d.eagerState=I,oi(I,T)){var W=i.interleaved;W===null?(d.next=d,Qc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}a=$h(n,i,d,c),a!==null&&(d=Tn(),di(a,n,c,d),xp(a,i,c))}}function vp(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function _p(n,i){Ia=Ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function xp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}var Qo={readContext:Jn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Vv={readContext:Jn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:lp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4194308,4,fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Mi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Bv.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:ap,useDebugValue:du,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=ap(!1),i=n[0];return n=kv.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,d=Mi();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));(jr&30)!==0||tp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,lp(ip.bind(null,c,m,n),[n]),c.flags|=2048,Oa(9,np.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Mi(),i=an.identifierPrefix;if(Vt){var a=Vi,c=zi;a=(c&~(1<<32-et(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ua++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ov++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Hv={readContext:Jn,useCallback:hp,useContext:Jn,useEffect:fu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:cu,useRef:op,useState:function(){return cu(Fa)},useDebugValue:du,useDeferredValue:function(n){var i=Qn();return mp(i,en.memoizedState,n)},useTransition:function(){var n=cu(Fa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},Gv={readContext:Jn,useCallback:hp,useContext:Jn,useEffect:fu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:uu,useRef:op,useState:function(){return uu(Fa)},useDebugValue:du,useDeferredValue:function(n){var i=Qn();return en===null?i.memoizedState=n:mp(i,en.memoizedState,n)},useTransition:function(){var n=uu(Fa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function hu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Tn(),d=xr(n),m=Gi(c,d);m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(di(i,n,d,c),Xo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Tn(),d=xr(n),m=Gi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(di(i,n,d,c),Xo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Tn(),c=xr(n),d=Gi(a,c);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,c),i!==null&&(di(i,n,c,a),Xo(i,n,c))}};function yp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(d,m):!0}function Sp(n,i,a){var c=!1,d=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=Jn(m):(d=Ln(i)?zr:hn.current,c=i.contextTypes,m=(c=c!=null)?Ss(n,d):dr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function pu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},eu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Jn(m):(m=Ln(i)?zr:hn.current,d.context=Ss(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(hu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&el.enqueueReplaceState(d,d.state,null),qo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var a="",c=i;do a+=Pe(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function mu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function gu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Wv=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,i,a){a=Gi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ol||(ol=!0,Nu=c),gu(n,i)},a}function wp(n,i,a){a=Gi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){gu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){gu(n,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Tp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Wv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=r_.bind(null,n,i,a),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Gi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var jv=L.ReactCurrentOwner,Dn=!1;function wn(n,i,a,c){i.child=n===null?qh(i,null,a,c):Ts(i,n.child,a,c)}function Rp(n,i,a,c,d){a=a.render;var m=i.ref;return Cs(i,d),c=ou(n,i,a,c,m,d),a=lu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Wi(n,i,d)):(Vt&&a&&Wc(i),i.flags|=1,wn(n,i,c,d),i.child)}function bp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!ku(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Pp(n,i,m,c,d)):(n=hl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(T,c)&&n.ref===i.ref)return Wi(n,i,d)}return i.flags|=1,n=Sr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Pp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Ea(m,c)&&n.ref===i.ref)if(Dn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Dn=!0);else return i.lanes=n.lanes,Wi(n,i,d)}return vu(n,i,a,c,d)}function Np(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Ns,Hn),Hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Ns,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ft(Ns,Hn),Hn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ft(Ns,Hn),Hn|=c;return wn(n,i,d,a),i.child}function Lp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vu(n,i,a,c,d){var m=Ln(a)?zr:hn.current;return m=Ss(i,m),Cs(i,d),a=ou(n,i,a,c,m,d),c=lu(),n!==null&&!Dn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Wi(n,i,d)):(Vt&&c&&Wc(i),i.flags|=1,wn(n,i,a,d),i.child)}function Dp(n,i,a,c,d){if(Ln(a)){var m=!0;ko(i)}else m=!1;if(Cs(i,d),i.stateNode===null)nl(n,i),Sp(i,a,c),pu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var W=T.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=Jn(ue):(ue=Ln(a)?zr:hn.current,ue=Ss(i,ue));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==c||W!==ue)&&Mp(i,T,c,ue),pr=!1;var xe=i.memoizedState;T.state=xe,qo(i,c,T,d),W=i.memoizedState,I!==c||xe!==W||Nn.current||pr?(typeof ye=="function"&&(hu(i,a,ye,c),W=i.memoizedState),(I=pr||yp(i,a,I,c,xe,W,ue))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=ue,c=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Yh(n,i),I=i.memoizedProps,ue=i.type===i.elementType?I:ci(i.type,I),T.props=ue,Se=i.pendingProps,xe=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=Jn(W):(W=Ln(a)?zr:hn.current,W=Ss(i,W));var ke=a.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Se||xe!==W)&&Mp(i,T,c,W),pr=!1,xe=i.memoizedState,T.state=xe,qo(i,c,T,d);var je=i.memoizedState;I!==Se||xe!==je||Nn.current||pr?(typeof ke=="function"&&(hu(i,a,ke,c),je=i.memoizedState),(ue=pr||yp(i,a,ue,c,xe,je,W)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,je,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,je,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),T.props=c,T.state=je,T.context=W,c=ue):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return _u(n,i,a,c,m,d)}function _u(n,i,a,c,d,m){Lp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&kh(i,a,!1),Wi(n,i,m);c=i.stateNode,jv.current=i;var I=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ts(i,n.child,null,m),i.child=Ts(i,null,I,m)):wn(n,i,I,m),i.memoizedState=c.state,d&&kh(i,a,!0),i.child}function Ip(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),tu(n,i.containerInfo)}function Up(n,i,a,c,d){return ws(),$c(d),i.flags|=256,wn(n,i,a,c),i.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function yu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,i,a){var c=i.pendingProps,d=Ht.current,m=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ft(Ht,d&1),n===null)return qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=pl(T,c,0,null),n=Kr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=yu(a),i.memoizedState=xu,n):Su(i,T));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Xv(n,i,T,c,I,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,I=d.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Sr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Sr(I,m):(m=Kr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?yu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=xu,c}return m=n.child,n=m.sibling,c=Sr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Su(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,c){return c!==null&&$c(c),Ts(i,n.child,null,a),n=Su(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Xv(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=mu(Error(t(422))),tl(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=pl({mode:"visible",children:c.children},d,0,null),m=Kr(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,T),i.child.memoizedState=yu(T),i.memoizedState=xu,m);if((i.mode&1)===0)return tl(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=mu(m,c,void 0),tl(n,i,T,c)}if(I=(T&n.childLanes)!==0,Dn||I){if(c=an,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Hi(n,d),di(c,n,d,-1))}return Ou(),c=mu(Error(t(421))),tl(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=s_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Vn=ur(d.nextSibling),zn=i,Vt=!0,li=null,n!==null&&(Kn[Zn++]=zi,Kn[Zn++]=Vi,Kn[Zn++]=Vr,zi=n.id,Vi=n.overflow,Vr=i),i=Su(i,c.children),i.flags|=4096,i)}function Op(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Jc(n.return,i,a)}function Mu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function kp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(wn(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,a,i);else if(n.tag===19)Op(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&$o(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Mu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&$o(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Mu(i,!0,a,null,m);break;case"together":Mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Wi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function qv(n,i,a){switch(i.tag){case 3:Ip(i),ws();break;case 5:Jh(i);break;case 1:Ln(i.type)&&ko(i);break;case 4:tu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ft(Wo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fp(n,i,a):(Ft(Ht,Ht.current&1),n=Wi(n,i,a),n!==null?n.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ft(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,Np(n,i,a)}return Wi(n,i,a)}var Bp,Eu,zp,Vp;Bp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Eu=function(){},zp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Wr(Si.current);var m=null;switch(a){case"input":d=St(n,d),c=St(n,c),m=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),m=[];break;case"textarea":d=Xe(n,d),c=Xe(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Uo)}Ge(a,c);var T;a=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var I=d[ue];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in c){var W=c[ue];if(I=d?.[ue],c.hasOwnProperty(ue)&&W!==I&&(W!=null||I!=null))if(ue==="style")if(I){for(T in I)!I.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&I[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(m||(m=[]),m.push(ue,a)),a=W;else ue==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,I=I?I.__html:void 0,W!=null&&I!==W&&(m=m||[]).push(ue,W)):ue==="children"?typeof W!="string"&&typeof W!="number"||(m=m||[]).push(ue,""+W):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(W!=null&&ue==="onScroll"&&kt("scroll",n),m||I===W||(m=[])):(m=m||[]).push(ue,W))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},Vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function ka(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function $v(n,i,a){var c=i.pendingProps;switch(jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Ln(i.type)&&Oo(),mn(i),null;case 3:return c=i.stateNode,Rs(),Bt(Nn),Bt(hn),ru(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ho(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Iu(li),li=null))),Eu(n,i),mn(i),null;case 5:nu(i);var d=Wr(Da.current);if(a=i.type,n!==null&&i.stateNode!=null)zp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Wr(Si.current),Ho(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[yi]=i,c[Ra]=m,n=(i.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(d=0;d<Ta.length;d++)kt(Ta[d],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":Pt(c,m),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},kt("invalid",c);break;case"textarea":D(c,m),kt("invalid",c)}Ge(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var I=m[T];T==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&kt("scroll",c)}switch(a){case"input":it(c),X(c,m,!0);break;case"textarea":it(c),Z(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Uo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ge(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[yi]=i,n[Ra]=c,Bp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ue(a,c),a){case"dialog":kt("cancel",n),kt("close",n),d=c;break;case"iframe":case"object":case"embed":kt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ta.length;d++)kt(Ta[d],n);d=c;break;case"source":kt("error",n),d=c;break;case"img":case"image":case"link":kt("error",n),kt("load",n),d=c;break;case"details":kt("toggle",n),d=c;break;case"input":Pt(n,c),d=St(n,c),kt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),kt("invalid",n);break;case"textarea":D(n,c),d=Xe(n,c),kt("invalid",n);break;default:d=c}Ge(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var W=I[m];m==="style"?Ae(n,W):m==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&He(n,W)):m==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&Ce(n,W):typeof W=="number"&&Ce(n,""+W):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?W!=null&&m==="onScroll"&&kt("scroll",n):W!=null&&N(n,m,W,T))}switch(a){case"input":it(n),X(n,c,!1);break;case"textarea":it(n),Z(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Mt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Mt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Uo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Wr(Da.current),Wr(Si.current),Ho(i)){if(c=i.stateNode,a=i.memoizedProps,c[yi]=i,(m=c.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Io(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return mn(i),null;case 13:if(Bt(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),ws(),i.flags|=98560,m=!1;else if(m=Ho(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[yi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else li!==null&&(Iu(li),li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?tn===0&&(tn=3):Ou())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Rs(),Eu(n,i),n===null&&Aa(i.stateNode.containerInfo),mn(i),null;case 10:return Zc(i.type._context),mn(i),null;case 17:return Ln(i.type)&&Oo(),mn(i),null;case 19:if(Bt(Ht),m=i.memoizedState,m===null)return mn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)ka(m,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=$o(n),T!==null){for(i.flags|=128,ka(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&C()>Ls&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304)}else{if(!c)if(n=$o(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ka(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Vt)return mn(i),null}else 2*C()-m.renderingStartTime>Ls&&a!==1073741824&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=C(),i.sibling=null,a=Ht.current,Ft(Ht,c?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return Fu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Yv(n,i){switch(jc(i),i.tag){case 1:return Ln(i.type)&&Oo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Rs(),Bt(Nn),Bt(hn),ru(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return nu(i),null;case 13:if(Bt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Bt(Ht),null;case 4:return Rs(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var il=!1,gn=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ps(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(n,i,c)}else a.current=null}function wu(n,i,a){try{a()}catch(c){jt(n,i,c)}}var Hp=!1;function Zv(n,i){if(Fc=Eo,n=yh(),Rc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,I=-1,W=-1,ue=0,ye=0,Se=n,xe=null;t:for(;;){for(var ke;Se!==a||d!==0&&Se.nodeType!==3||(I=T+d),Se!==m||c!==0&&Se.nodeType!==3||(W=T+c),Se.nodeType===3&&(T+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)xe=Se,Se=ke;for(;;){if(Se===n)break t;if(xe===a&&++ue===d&&(I=T),xe===m&&++ye===c&&(W=T),(ke=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=ke}a=I===-1||W===-1?null:{start:I,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oc={focusedElem:n,selectionRange:a},Eo=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,Kt=je.memoizedState,ie=i.stateNode,Y=ie.getSnapshotBeforeUpdate(i.elementType===i.type?$e:ci(i.type,$e),Kt);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){jt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return je=Hp,Hp=!1,je}function Ba(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&wu(i,a,m)}d=d.next}while(d!==c)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Tu(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function Gp(n){var i=n.alternate;i!==null&&(n.alternate=null,Gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[Ra],delete i[Vc],delete i[Dv],delete i[Iv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Au(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Uo));else if(c!==4&&(n=n.child,n!==null))for(Au(n,i,a),n=n.sibling;n!==null;)Au(n,i,a),n=n.sibling}function Cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}var cn=null,ui=!1;function gr(n,i,a){for(a=a.child;a!==null;)Xp(n,i,a),a=a.sibling}function Xp(n,i,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 5:gn||Ps(a,i);case 6:var c=cn,d=ui;cn=null,gr(n,i,a),cn=c,ui=d,cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),va(n)):zc(cn,a.stateNode));break;case 4:c=cn,d=ui,cn=a.stateNode.containerInfo,ui=!0,gr(n,i,a),cn=c,ui=d;break;case 0:case 11:case 14:case 15:if(!gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&wu(a,i,T),d=d.next}while(d!==c)}gr(n,i,a);break;case 1:if(!gn&&(Ps(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,i,I)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(gn=(c=gn)||a.memoizedState!==null,gr(n,i,a),gn=c):gr(n,i,a);break;default:gr(n,i,a)}}function qp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Kv),i.forEach(function(c){var d=a_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function fi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,ui=!1;break e;case 3:cn=I.stateNode.containerInfo,ui=!0;break e;case 4:cn=I.stateNode.containerInfo,ui=!0;break e}I=I.return}if(cn===null)throw Error(t(160));Xp(m,T,d),cn=null,ui=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(ue){jt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$p(i,n),i=i.sibling}function $p(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),Ei(n),c&4){try{Ba(3,n,n.return),rl(3,n)}catch($e){jt(n,n.return,$e)}try{Ba(5,n,n.return)}catch($e){jt(n,n.return,$e)}}break;case 1:fi(i,n),Ei(n),c&512&&a!==null&&Ps(a,a.return);break;case 5:if(fi(i,n),Ei(n),c&512&&a!==null&&Ps(a,a.return),n.flags&32){var d=n.stateNode;try{Ce(d,"")}catch($e){jt(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,I=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ut(d,m),Ue(I,T);var ue=Ue(I,m);for(T=0;T<W.length;T+=2){var ye=W[T],Se=W[T+1];ye==="style"?Ae(d,Se):ye==="dangerouslySetInnerHTML"?He(d,Se):ye==="children"?Ce(d,Se):N(d,ye,Se,ue)}switch(I){case"input":Ot(d,m);break;case"textarea":w(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?Mt(d,!!m.multiple,ke,!1):xe!==!!m.multiple&&(m.defaultValue!=null?Mt(d,!!m.multiple,m.defaultValue,!0):Mt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ra]=m}catch($e){jt(n,n.return,$e)}}break;case 6:if(fi(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch($e){jt(n,n.return,$e)}}break;case 3:if(fi(i,n),Ei(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{va(i.containerInfo)}catch($e){jt(n,n.return,$e)}break;case 4:fi(i,n),Ei(n);break;case 13:fi(i,n),Ei(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Pu=C())),c&4&&qp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(ue=gn)||ye,fi(i,n),gn=ue):fi(i,n),Ei(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!ye&&(n.mode&1)!==0)for(Ve=n,ye=n.child;ye!==null;){for(Se=Ve=ye;Ve!==null;){switch(xe=Ve,ke=xe.child,xe.tag){case 0:case 11:case 14:case 15:Ba(4,xe,xe.return);break;case 1:Ps(xe,xe.return);var je=xe.stateNode;if(typeof je.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch($e){jt(c,a,$e)}}break;case 5:Ps(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Zp(Se);continue}}ke!==null?(ke.return=xe,Ve=ke):Zp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Se.stateNode,W=Se.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,I.style.display=Me("display",T))}catch($e){jt(n,n.return,$e)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ue?"":Se.memoizedProps}catch($e){jt(n,n.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:fi(i,n),Ei(n),c&4&&qp(n);break;case 21:break;default:fi(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ce(d,""),c.flags&=-33);var m=jp(n);Cu(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,I=jp(n);Au(n,I,T);break;default:throw Error(t(161))}}catch(W){jt(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Jv(n,i,a){Ve=n,Yp(n)}function Yp(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||il;if(!T){var I=d.alternate,W=I!==null&&I.memoizedState!==null||gn;I=il;var ue=gn;if(il=T,(gn=W)&&!ue)for(Ve=d;Ve!==null;)T=Ve,W=T.child,T.tag===22&&T.memoizedState!==null?Jp(d):W!==null?(W.return=T,Ve=W):Jp(d);for(;m!==null;)Ve=m,Yp(m),m=m.sibling;Ve=d,il=I,gn=ue}Kp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Kp(n)}}function Kp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||rl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!gn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Zh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Zh(i,T,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var ye=ue.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&va(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&Tu(i)}catch(xe){jt(i,i.return,xe)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Zp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Jp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(W){jt(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){jt(i,d,W)}}var m=i.return;try{Tu(i)}catch(W){jt(i,m,W)}break;case 5:var T=i.return;try{Tu(i)}catch(W){jt(i,T,W)}}}catch(W){jt(i,i.return,W)}if(i===n){Ve=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ve=I;break}Ve=i.return}}var Qv=Math.ceil,sl=L.ReactCurrentDispatcher,Ru=L.ReactCurrentOwner,ei=L.ReactCurrentBatchConfig,wt=0,an=null,Jt=null,un=0,Hn=0,Ns=fr(0),tn=0,za=null,Xr=0,al=0,bu=0,Va=null,In=null,Pu=0,Ls=1/0,ji=null,ol=!1,Nu=null,vr=null,ll=!1,_r=null,cl=0,Ha=0,Lu=null,ul=-1,fl=0;function Tn(){return(wt&6)!==0?C():ul!==-1?ul:ul=C()}function xr(n){return(n.mode&1)===0?1:(wt&2)!==0&&un!==0?un&-un:Fv.transition!==null?(fl===0&&(fl=bn()),fl):(n=at,n!==0||(n=window.event,n=n===void 0?16:eh(n.type)),n)}function di(n,i,a,c){if(50<Ha)throw Ha=0,Lu=null,Error(t(185));kn(n,a,c),((wt&2)===0||n!==an)&&(n===an&&((wt&2)===0&&(al|=a),tn===4&&yr(n,un)),Un(n,c),a===1&&wt===0&&(i.mode&1)===0&&(Ls=C()+500,Bo&&hr()))}function Un(n,i){var a=n.callbackNode;En(n,i);var c=$t(n,n===an?un:0);if(c===0)a!==null&&yo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&yo(a),i===1)n.tag===0?Uv(em.bind(null,n)):Bh(em.bind(null,n)),Nv(function(){(wt&6)===0&&hr()}),a=null;else{switch(ai(c)){case 1:a=fe;break;case 4:a=oe;break;case 16:a=re;break;case 536870912:a=Be;break;default:a=re}a=lm(a,Qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Qp(n,i){if(ul=-1,fl=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ds()&&n.callbackNode!==a)return null;var c=$t(n,n===an?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=dl(n,c);else{i=c;var d=wt;wt|=2;var m=nm();(an!==n||un!==i)&&(ji=null,Ls=C()+500,$r(n,i));do try{n_();break}catch(I){tm(n,I)}while(!0);Kc(),sl.current=m,wt=d,Jt!==null?i=0:(an=null,un=0,i=tn)}if(i!==0){if(i===2&&(d=vt(n),d!==0&&(c=d,i=Du(n,d))),i===1)throw a=za,$r(n,0),yr(n,c),Un(n,C()),a;if(i===6)yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!e_(d)&&(i=dl(n,c),i===2&&(m=vt(n),m!==0&&(c=m,i=Du(n,m))),i===1))throw a=za,$r(n,0),yr(n,c),Un(n,C()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,In,ji);break;case 3:if(yr(n,c),(c&130023424)===c&&(i=Pu+500-C(),10<i)){if($t(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Tn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Bc(Yr.bind(null,n,In,ji),i);break}Yr(n,In,ji);break;case 4:if(yr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-et(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=C()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Qv(c/1960))-c,10<c){n.timeoutHandle=Bc(Yr.bind(null,n,In,ji),c);break}Yr(n,In,ji);break;case 5:Yr(n,In,ji);break;default:throw Error(t(329))}}}return Un(n,C()),n.callbackNode===a?Qp.bind(null,n):null}function Du(n,i){var a=Va;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=dl(n,i),n!==2&&(i=In,In=a,i!==null&&Iu(i)),n}function Iu(n){In===null?In=n:In.push.apply(In,n)}function e_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!oi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~bu,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-et(i),c=1<<a;n[a]=-1,i&=~c}}function em(n){if((wt&6)!==0)throw Error(t(327));Ds();var i=$t(n,0);if((i&1)===0)return Un(n,C()),null;var a=dl(n,i);if(n.tag!==0&&a===2){var c=vt(n);c!==0&&(i=c,a=Du(n,c))}if(a===1)throw a=za,$r(n,0),yr(n,i),Un(n,C()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,In,ji),Un(n,C()),null}function Uu(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Ls=C()+500,Bo&&hr())}}function qr(n){_r!==null&&_r.tag===0&&(wt&6)===0&&Ds();var i=wt;wt|=1;var a=ei.transition,c=at;try{if(ei.transition=null,at=1,n)return n()}finally{at=c,ei.transition=a,wt=i,(wt&6)===0&&hr()}}function Fu(){Hn=Ns.current,Bt(Ns)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Pv(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Oo();break;case 3:Rs(),Bt(Nn),Bt(hn),ru();break;case 5:nu(c);break;case 4:Rs();break;case 13:Bt(Ht);break;case 19:Bt(Ht);break;case 10:Zc(c.type._context);break;case 22:case 23:Fu()}a=a.return}if(an=n,Jt=n=Sr(n.current,null),un=Hn=i,tn=0,za=null,bu=al=Xr=0,In=Va=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}Gr=null}return n}function tm(n,i){do{var a=Jt;try{if(Kc(),Yo.current=Qo,Ko){for(var c=Gt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ko=!1}if(jr=0,sn=en=Gt=null,Ia=!1,Ua=0,Ru.current=null,a===null||a.return===null){tn=1,za=i,Jt=null;break}e:{var m=n,T=a.return,I=a,W=i;if(i=un,I.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ue=W,ye=I,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=Ap(T);if(ke!==null){ke.flags&=-257,Cp(ke,T,I,m,i),ke.mode&1&&Tp(m,ue,i),i=ke,W=ue;var je=i.updateQueue;if(je===null){var $e=new Set;$e.add(W),i.updateQueue=$e}else je.add(W);break e}else{if((i&1)===0){Tp(m,ue,i),Ou();break e}W=Error(t(426))}}else if(Vt&&I.mode&1){var Kt=Ap(T);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Cp(Kt,T,I,m,i),$c(bs(W,I));break e}}m=W=bs(W,I),tn!==4&&(tn=2),Va===null?Va=[m]:Va.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ie=Ep(m,W,i);Kh(m,ie);break e;case 1:I=W;var Y=m.type,ae=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(vr===null||!vr.has(ae)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=wp(m,I,i);Kh(m,Te);break e}}m=m.return}while(m!==null)}rm(a)}catch(Ze){i=Ze,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function nm(){var n=sl.current;return sl.current=Qo,n===null?Qo:n}function Ou(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(Xr&268435455)===0&&(al&268435455)===0||yr(an,un)}function dl(n,i){var a=wt;wt|=2;var c=nm();(an!==n||un!==i)&&(ji=null,$r(n,i));do try{t_();break}catch(d){tm(n,d)}while(!0);if(Kc(),wt=a,sl.current=c,Jt!==null)throw Error(t(261));return an=null,un=0,tn}function t_(){for(;Jt!==null;)im(Jt)}function n_(){for(;Jt!==null&&!pc();)im(Jt)}function im(n){var i=om(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?rm(n):Jt=i,Ru.current=null}function rm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=$v(a,i,Hn),a!==null){Jt=a;return}}else{if(a=Yv(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);tn===0&&(tn=5)}function Yr(n,i,a){var c=at,d=ei.transition;try{ei.transition=null,at=1,i_(n,i,a,c)}finally{ei.transition=d,at=c}return null}function i_(n,i,a,c){do Ds();while(_r!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ir(n,m),n===an&&(Jt=an=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,lm(re,function(){return Ds(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var T=at;at=1;var I=wt;wt|=4,Ru.current=null,Zv(n,a),$p(a,n),Ev(Oc),Eo=!!Fc,Oc=Fc=null,n.current=a,Jv(a),mc(),wt=I,at=T,ei.transition=m}else n.current=a;if(ll&&(ll=!1,_r=n,cl=d),m=n.pendingLanes,m===0&&(vr=null),Je(a.stateNode),Un(n,C()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,n=Nu,Nu=null,n;return(cl&1)!==0&&n.tag!==0&&Ds(),m=n.pendingLanes,(m&1)!==0?n===Lu?Ha++:(Ha=0,Lu=n):Ha=0,hr(),null}function Ds(){if(_r!==null){var n=ai(cl),i=ei.transition,a=at;try{if(ei.transition=null,at=16>n?16:n,_r===null)var c=!1;else{if(n=_r,_r=null,cl=0,(wt&6)!==0)throw Error(t(331));var d=wt;for(wt|=4,Ve=n.current;Ve!==null;){var m=Ve,T=m.child;if((Ve.flags&16)!==0){var I=m.deletions;if(I!==null){for(var W=0;W<I.length;W++){var ue=I[W];for(Ve=ue;Ve!==null;){var ye=Ve;switch(ye.tag){case 0:case 11:case 15:Ba(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,Ve=Se;else for(;Ve!==null;){ye=Ve;var xe=ye.sibling,ke=ye.return;if(Gp(ye),ye===ue){Ve=null;break}if(xe!==null){xe.return=ke,Ve=xe;break}Ve=ke}}}var je=m.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var Kt=$e.sibling;$e.sibling=null,$e=Kt}while($e!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ve=T;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ba(9,m,m.return)}var ie=m.sibling;if(ie!==null){ie.return=m.return,Ve=ie;break e}Ve=m.return}}var Y=n.current;for(Ve=Y;Ve!==null;){T=Ve;var ae=T.child;if((T.subtreeFlags&2064)!==0&&ae!==null)ae.return=T,Ve=ae;else e:for(T=Y;Ve!==null;){if(I=Ve,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:rl(9,I)}}catch(Ze){jt(I,I.return,Ze)}if(I===T){Ve=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Ve=Te;break e}Ve=I.return}}if(wt=d,hr(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Ne,n)}catch{}c=!0}return c}finally{at=a,ei.transition=i}}return!1}function sm(n,i,a){i=bs(a,i),i=Ep(n,i,1),n=mr(n,i,1),i=Tn(),n!==null&&(kn(n,1,i),Un(n,i))}function jt(n,i,a){if(n.tag===3)sm(n,n,a);else for(;i!==null;){if(i.tag===3){sm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){n=bs(a,n),n=wp(i,n,1),i=mr(i,n,1),n=Tn(),i!==null&&(kn(i,1,n),Un(i,n));break}}i=i.return}}function r_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(un&a)===a&&(tn===4||tn===3&&(un&130023424)===un&&500>C()-Pu?$r(n,0):bu|=a),Un(n,i)}function am(n,i){i===0&&((n.mode&1)===0?i=1:(i=It,It<<=1,(It&130023424)===0&&(It=4194304)));var a=Tn();n=Hi(n,i),n!==null&&(kn(n,i,a),Un(n,a))}function s_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),am(n,a)}function a_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),am(n,a)}var om;om=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)Dn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,qv(n,i,a);Dn=(n.flags&131072)!==0}else Dn=!1,Vt&&(i.flags&1048576)!==0&&zh(i,Vo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nl(n,i),n=i.pendingProps;var d=Ss(i,hn.current);Cs(i,a),d=ou(null,i,c,n,d,a);var m=lu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(m=!0,ko(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,eu(i),d.updater=el,i.stateNode=d,d._reactInternals=i,pu(i,c,n,a),i=_u(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&Wc(i),wn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=l_(c),n=ci(c,n),d){case 0:i=vu(null,i,c,n,a);break e;case 1:i=Dp(null,i,c,n,a);break e;case 11:i=Rp(null,i,c,n,a);break e;case 14:i=bp(null,i,c,ci(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),vu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),Dp(n,i,c,d,a);case 3:e:{if(Ip(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Yh(n,i),qo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=bs(Error(t(423)),i),i=Up(n,i,c,a,d);break e}else if(c!==d){d=bs(Error(t(424)),i),i=Up(n,i,c,a,d);break e}else for(Vn=ur(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,li=null,a=qh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===d){i=Wi(n,i,a);break e}wn(n,i,c,a)}i=i.child}return i;case 5:return Jh(i),n===null&&qc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,kc(c,d)?T=null:m!==null&&kc(c,m)&&(i.flags|=32),Lp(n,i),wn(n,i,T,a),i.child;case 6:return n===null&&qc(i),null;case 13:return Fp(n,i,a);case 4:return tu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,a):wn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),Rp(n,i,c,d,a);case 7:return wn(n,i,i.pendingProps,a),i.child;case 8:return wn(n,i,i.pendingProps.children,a),i.child;case 12:return wn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Ft(Wo,c._currentValue),c._currentValue=T,m!==null)if(oi(m.value,T)){if(m.children===d.children&&!Nn.current){i=Wi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){T=m.child;for(var W=I.firstContext;W!==null;){if(W.context===c){if(m.tag===1){W=Gi(-1,a&-a),W.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var ye=ue.pending;ye===null?W.next=W:(W.next=ye.next,ye.next=W),ue.pending=W}}m.lanes|=a,W=m.alternate,W!==null&&(W.lanes|=a),Jc(m.return,a,i),I.lanes|=a;break}W=W.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Jc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}wn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Cs(i,a),d=Jn(d),c=c(d),i.flags|=1,wn(n,i,c,a),i.child;case 14:return c=i.type,d=ci(c,i.pendingProps),d=ci(c.type,d),bp(n,i,c,d,a);case 15:return Pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),nl(n,i),i.tag=1,Ln(c)?(n=!0,ko(i)):n=!1,Cs(i,a),Sp(i,c,d),pu(i,c,d,a),_u(null,i,c,!0,n,a);case 19:return kp(n,i,a);case 22:return Np(n,i,a)}throw Error(t(156,i.tag))};function lm(n,i){return xo(n,i)}function o_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,c){return new o_(n,i,a,c)}function ku(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l_(n){if(typeof n=="function")return ku(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===G)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")ku(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case V:return Kr(a.children,d,m,i);case A:T=8,d|=8;break;case P:return n=ti(12,a,i,d|2),n.elementType=P,n.lanes=m,n;case j:return n=ti(13,a,i,d),n.elementType=j,n.lanes=m,n;case K:return n=ti(19,a,i,d),n.elementType=K,n.lanes=m,n;case O:return pl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case se:T=10;break e;case k:T=9;break e;case H:T=11;break e;case G:T=14;break e;case B:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Kr(n,i,a,c){return n=ti(7,n,c,i),n.lanes=a,n}function pl(n,i,a,c){return n=ti(22,n,c,i),n.elementType=O,n.lanes=a,n.stateNode={isHidden:!1},n}function Bu(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function zu(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function c_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pn(0),this.expirationTimes=Pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Vu(n,i,a,c,d,m,T,I,W){return n=new c_(n,i,a,I,W),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(m),n}function u_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function cm(n){if(!n)return dr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return Oh(n,a,i)}return i}function um(n,i,a,c,d,m,T,I,W){return n=Vu(a,c,!0,n,d,m,T,I,W),n.context=cm(null),a=n.current,c=Tn(),d=xr(a),m=Gi(c,d),m.callback=i??null,mr(a,m,d),n.current.lanes=d,kn(n,d,c),Un(n,c),n}function ml(n,i,a,c){var d=i.current,m=Tn(),T=xr(d);return a=cm(a),i.context===null?i.context=a:i.pendingContext=a,i=Gi(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=mr(d,i,T),n!==null&&(di(n,d,T,m),Xo(n,d,T)),T}function gl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hu(n,i){fm(n,i),(n=n.alternate)&&fm(n,i)}function f_(){return null}var dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gu(n){this._internalRoot=n}vl.prototype.render=Gu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},vl.prototype.unmount=Gu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){ml(null,n,null,null)}),i[ki]=null}};function vl(n){this._internalRoot=n}vl.prototype.unstable_scheduleHydration=function(n){if(n){var i=da();n={blockedOn:null,target:n,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,n),a===0&&Jd(n)}};function Wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function d_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ue=gl(T);m.call(ue)}}var T=um(i,c,n,0,null,!1,!1,"",hm);return n._reactRootContainer=T,n[ki]=T.current,Aa(n.nodeType===8?n.parentNode:n),qr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var ue=gl(W);I.call(ue)}}var W=Vu(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=W,n[ki]=W.current,Aa(n.nodeType===8?n.parentNode:n),qr(function(){ml(i,W,a,c)}),W}function xl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var I=d;d=function(){var W=gl(T);I.call(W)}}ml(i,T,n,d)}else T=d_(a,i,n,d,c);return gl(T)}Yt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=yt(i.pendingLanes);a!==0&&(Rt(i,a|1),Un(i,C()),(wt&6)===0&&(Ls=C()+500,hr()))}break;case 13:qr(function(){var c=Hi(n,1);if(c!==null){var d=Tn();di(c,n,1,d)}}),Hu(n,1)}},Yn=function(n){if(n.tag===13){var i=Hi(n,134217728);if(i!==null){var a=Tn();di(i,n,134217728,a)}Hu(n,134217728)}},Oi=function(n){if(n.tag===13){var i=xr(n),a=Hi(n,i);if(a!==null){var c=Tn();di(a,n,i,c)}Hu(n,i)}},da=function(){return at},Kd=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},be=function(n,i,a){switch(i){case"input":if(Ot(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Fo(c);if(!d)throw Error(t(90));qt(c),Ot(c,d)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&Mt(n,!!a.multiple,i,!1)}},st=Uu,Lt=qr;var h_={usingClientEntryPoint:!1,Events:[ba,xs,Fo,he,We,Uu]},Ga={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p_={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=vo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||f_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{Ne=yl.inject(p_),Oe=yl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(i))throw Error(t(200));return u_(n,i,null,a)},Fn.createRoot=function(n,i){if(!Wu(n))throw Error(t(299));var a=!1,c="",d=dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Vu(n,1,!1,null,null,a,!1,c,d),n[ki]=i.current,Aa(n.nodeType===8?n.parentNode:n),new Gu(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=vo(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return qr(n)},Fn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return xl(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!Wu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=um(i,null,n,1,a??null,d,!1,m,T),n[ki]=i.current,Aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new vl(i)},Fn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return xl(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1},Fn.unstable_batchedUpdates=Uu,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xl(n,i,a,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Sm;function Hg(){if(Sm)return qu.exports;Sm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),qu.exports=E_(),qu.exports}var Mm;function w_(){if(Mm)return Sl;Mm=1;var r=Hg();return Sl.createRoot=r.createRoot,Sl.hydrateRoot=r.hydrateRoot,Sl}var T_=w_();const A_=zg(T_);Hg();function io(){return io=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},io.apply(this,arguments)}var Pr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Pr||(Pr={}));const Em="popstate";function C_(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:u,hash:f}=s.location;return Df("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ql(o)}return b_(e,t,null,r)}function Zt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Rd(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function R_(){return Math.random().toString(36).substr(2,8)}function wm(r,e){return{usr:r.state,key:r.key,idx:e}}function Df(r,e,t,s){return t===void 0&&(t=null),io({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?ia(e):e,{state:t,key:e&&e.key||s||R_()})}function Ql(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function ia(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function b_(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,f=Pr.Pop,p=null,h=v();h==null&&(h=0,u.replaceState(io({},u.state,{idx:h}),""));function v(){return(u.state||{idx:null}).idx}function _(){f=Pr.Pop;let x=v(),y=x==null?null:x-h;h=x,p&&p({action:f,location:E.location,delta:y})}function g(x,y){f=Pr.Push;let b=Df(E.location,x,y);h=v()+1;let N=wm(b,h),L=E.createHref(b);try{u.pushState(N,"",L)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(L)}l&&p&&p({action:f,location:E.location,delta:1})}function S(x,y){f=Pr.Replace;let b=Df(E.location,x,y);h=v();let N=wm(b,h),L=E.createHref(b);u.replaceState(N,"",L),l&&p&&p({action:f,location:E.location,delta:0})}function M(x){let y=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof x=="string"?x:Ql(x);return b=b.replace(/ $/,"%20"),Zt(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let E={get action(){return f},get location(){return r(o,u)},listen(x){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Em,_),p=x,()=>{o.removeEventListener(Em,_),p=null}},createHref(x){return e(o,x)},createURL:M,encodeLocation(x){let y=M(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:S,go(x){return u.go(x)}};return E}var Tm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Tm||(Tm={}));function P_(r,e,t){return t===void 0&&(t="/"),N_(r,e,t)}function N_(r,e,t,s){let o=typeof e=="string"?ia(e):e,l=bd(o.pathname||"/",t);if(l==null)return null;let u=Gg(r);L_(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=W_(l);f=V_(u[p],h)}return f}function Gg(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,u,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(Zt(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let h=Lr([s,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(Zt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Gg(l.children,e,v,h)),!(l.path==null&&!l.index)&&e.push({path:h,score:B_(h,l.index),routesMeta:v})};return r.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let p of Wg(l.path))o(l,u,p)}),e}function Wg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=Wg(s.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function L_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:z_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const D_=/^:[\w-]+$/,I_=3,U_=2,F_=1,O_=10,k_=-2,Am=r=>r==="*";function B_(r,e){let t=r.split("/"),s=t.length;return t.some(Am)&&(s+=k_),e&&(s+=U_),t.filter(o=>!Am(o)).reduce((o,l)=>o+(D_.test(l)?I_:l===""?F_:O_),s)}function z_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function V_(r,e,t){let{routesMeta:s}=r,o={},l="/",u=[];for(let f=0;f<s.length;++f){let p=s[f],h=f===s.length-1,v=l==="/"?e:e.slice(l.length)||"/",_=H_({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},v),g=p.route;if(!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:Lr([l,_.pathname]),pathnameBase:Y_(Lr([l,_.pathnameBase])),route:g}),_.pathnameBase!=="/"&&(l=Lr([l,_.pathnameBase]))}return u}function H_(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=G_(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((h,v,_)=>{let{paramName:g,isOptional:S}=v;if(g==="*"){let E=f[_]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const M=f[_];return S&&!M?h[g]=void 0:h[g]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:r}}function G_(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Rd(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function W_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rd(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function bd(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}const j_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X_=r=>j_.test(r);function q_(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?ia(r):r,l;if(t)if(X_(t))l=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),Rd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(u+" -> "+t))}t.startsWith("/")?l=Cm(t.substring(1),"/"):l=Cm(t,e)}else l=e;return{pathname:l,search:K_(s),hash:Z_(o)}}function Cm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ku(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Pd(r,e){let t=$_(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Nd(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=ia(r):(o=io({},r),Zt(!o.pathname||!o.pathname.includes("?"),Ku("?","pathname","search",o)),Zt(!o.pathname||!o.pathname.includes("#"),Ku("#","pathname","hash",o)),Zt(!o.search||!o.search.includes("#"),Ku("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let _=e.length-1;if(!s&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),_-=1;o.pathname=g.join("/")}f=_>=0?e[_]:"/"}let p=q_(o,f),h=u&&u!=="/"&&u.endsWith("/"),v=(l||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(h||v)&&(p.pathname+="/"),p}const Lr=r=>r.join("/").replace(/\/\/+/g,"/"),Y_=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),K_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Z_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function J_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const jg=["post","put","patch","delete"];new Set(jg);const Q_=["get",...jg];new Set(Q_);function ro(){return ro=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},ro.apply(this,arguments)}const Ld=J.createContext(null),ex=J.createContext(null),Ir=J.createContext(null),sc=J.createContext(null),Ur=J.createContext({outlet:null,matches:[],isDataRoute:!1}),Xg=J.createContext(null);function tx(r,e){let{relative:t}=e===void 0?{}:e;ra()||Zt(!1);let{basename:s,navigator:o}=J.useContext(Ir),{hash:l,pathname:u,search:f}=$g(r,{relative:t}),p=u;return s!=="/"&&(p=u==="/"?s:Lr([s,u])),o.createHref({pathname:p,search:f,hash:l})}function ra(){return J.useContext(sc)!=null}function sa(){return ra()||Zt(!1),J.useContext(sc).location}function qg(r){J.useContext(Ir).static||J.useLayoutEffect(r)}function ac(){let{isDataRoute:r}=J.useContext(Ur);return r?px():nx()}function nx(){ra()||Zt(!1);let r=J.useContext(Ld),{basename:e,future:t,navigator:s}=J.useContext(Ir),{matches:o}=J.useContext(Ur),{pathname:l}=sa(),u=JSON.stringify(Pd(o,t.v7_relativeSplatPath)),f=J.useRef(!1);return qg(()=>{f.current=!0}),J.useCallback(function(h,v){if(v===void 0&&(v={}),!f.current)return;if(typeof h=="number"){s.go(h);return}let _=Nd(h,JSON.parse(u),l,v.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Lr([e,_.pathname])),(v.replace?s.replace:s.push)(_,v.state,v)},[e,s,u,l,r])}function $g(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=J.useContext(Ir),{matches:o}=J.useContext(Ur),{pathname:l}=sa(),u=JSON.stringify(Pd(o,s.v7_relativeSplatPath));return J.useMemo(()=>Nd(r,JSON.parse(u),l,t==="path"),[r,u,l,t])}function ix(r,e){return rx(r,e)}function rx(r,e,t,s){ra()||Zt(!1);let{navigator:o}=J.useContext(Ir),{matches:l}=J.useContext(Ur),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let h=sa(),v;if(e){var _;let x=typeof e=="string"?ia(e):e;p==="/"||(_=x.pathname)!=null&&_.startsWith(p)||Zt(!1),v=x}else v=h;let g=v.pathname||"/",S=g;if(p!=="/"){let x=p.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let M=P_(r,{pathname:S}),E=cx(M&&M.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Lr([p,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:Lr([p,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),l,t,s);return e&&E?J.createElement(sc.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Pr.Pop}},E):E}function sx(){let r=hx(),e=J_(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),t?J.createElement("pre",{style:o},t):null,null)}const ax=J.createElement(sx,null);class ox extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?J.createElement(Ur.Provider,{value:this.props.routeContext},J.createElement(Xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lx(r){let{routeContext:e,match:t,children:s}=r,o=J.useContext(Ld);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),J.createElement(Ur.Provider,{value:e},s)}function cx(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let u=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let v=u.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);v>=0||Zt(!1),u=u.slice(0,Math.min(u.length,v+1))}let p=!1,h=-1;if(t&&s&&s.v7_partialHydration)for(let v=0;v<u.length;v++){let _=u[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=v),_.route.id){let{loaderData:g,errors:S}=t,M=_.route.loader&&g[_.route.id]===void 0&&(!S||S[_.route.id]===void 0);if(_.route.lazy||M){p=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((v,_,g)=>{let S,M=!1,E=null,x=null;t&&(S=f&&_.route.id?f[_.route.id]:void 0,E=_.route.errorElement||ax,p&&(h<0&&g===0?(mx("route-fallback"),M=!0,x=null):h===g&&(M=!0,x=_.route.hydrateFallbackElement||null)));let y=e.concat(u.slice(0,g+1)),b=()=>{let N;return S?N=E:M?N=x:_.route.Component?N=J.createElement(_.route.Component,null):_.route.element?N=_.route.element:N=v,J.createElement(lx,{match:_,routeContext:{outlet:v,matches:y,isDataRoute:t!=null},children:N})};return t&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?J.createElement(ox,{location:t.location,revalidation:t.revalidation,component:E,error:S,children:b(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):b()},null)}var Yg=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Yg||{}),Kg=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Kg||{});function ux(r){let e=J.useContext(Ld);return e||Zt(!1),e}function fx(r){let e=J.useContext(ex);return e||Zt(!1),e}function dx(r){let e=J.useContext(Ur);return e||Zt(!1),e}function Zg(r){let e=dx(),t=e.matches[e.matches.length-1];return t.route.id||Zt(!1),t.route.id}function hx(){var r;let e=J.useContext(Xg),t=fx(),s=Zg();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function px(){let{router:r}=ux(Yg.UseNavigateStable),e=Zg(Kg.UseNavigateStable),t=J.useRef(!1);return qg(()=>{t.current=!0}),J.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,ro({fromRouteId:e},l)))},[r,e])}const Rm={};function mx(r,e,t){Rm[r]||(Rm[r]=!0)}function gx(r,e){r?.v7_startTransition,r?.v7_relativeSplatPath}function Jg(r){let{to:e,replace:t,state:s,relative:o}=r;ra()||Zt(!1);let{future:l,static:u}=J.useContext(Ir),{matches:f}=J.useContext(Ur),{pathname:p}=sa(),h=ac(),v=Nd(e,Pd(f,l.v7_relativeSplatPath),p,o==="path"),_=JSON.stringify(v);return J.useEffect(()=>h(JSON.parse(_),{replace:t,state:s,relative:o}),[h,_,o,t,s]),null}function Ja(r){Zt(!1)}function vx(r){let{basename:e="/",children:t=null,location:s,navigationType:o=Pr.Pop,navigator:l,static:u=!1,future:f}=r;ra()&&Zt(!1);let p=e.replace(/^\/*/,"/"),h=J.useMemo(()=>({basename:p,navigator:l,static:u,future:ro({v7_relativeSplatPath:!1},f)}),[p,f,l,u]);typeof s=="string"&&(s=ia(s));let{pathname:v="/",search:_="",hash:g="",state:S=null,key:M="default"}=s,E=J.useMemo(()=>{let x=bd(v,p);return x==null?null:{location:{pathname:x,search:_,hash:g,state:S,key:M},navigationType:o}},[p,v,_,g,S,M,o]);return E==null?null:J.createElement(Ir.Provider,{value:h},J.createElement(sc.Provider,{children:t,value:E}))}function _x(r){let{children:e,location:t}=r;return ix(If(e),t)}new Promise(()=>{});function If(r,e){e===void 0&&(e=[]);let t=[];return J.Children.forEach(r,(s,o)=>{if(!J.isValidElement(s))return;let l=[...e,o];if(s.type===J.Fragment){t.push.apply(t,If(s.props.children,l));return}s.type!==Ja&&Zt(!1),!s.props.index||!s.props.children||Zt(!1);let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=If(s.props.children,l)),t.push(u)}),t}function Uf(){return Uf=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Uf.apply(this,arguments)}function xx(r,e){if(r==null)return{};var t={},s=Object.keys(r),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function yx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Sx(r,e){return r.button===0&&(!e||e==="_self")&&!yx(r)}const Mx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ex="6";try{window.__reactRouterVersion=Ex}catch{}const wx="startTransition",bm=y_[wx];function Tx(r){let{basename:e,children:t,future:s,window:o}=r,l=J.useRef();l.current==null&&(l.current=C_({window:o,v5Compat:!0}));let u=l.current,[f,p]=J.useState({action:u.action,location:u.location}),{v7_startTransition:h}=s||{},v=J.useCallback(_=>{h&&bm?bm(()=>p(_)):p(_)},[p,h]);return J.useLayoutEffect(()=>u.listen(v),[u,v]),J.useEffect(()=>gx(s),[s]),J.createElement(vx,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:u,future:s})}const Ax=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qg=J.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:v,viewTransition:_}=e,g=xx(e,Mx),{basename:S}=J.useContext(Ir),M,E=!1;if(typeof h=="string"&&Cx.test(h)&&(M=h,Ax))try{let N=new URL(window.location.href),L=h.startsWith("//")?new URL(N.protocol+h):new URL(h),z=bd(L.pathname,S);L.origin===N.origin&&z!=null?h=z+L.search+L.hash:E=!0}catch{}let x=tx(h,{relative:o}),y=Rx(h,{replace:u,state:f,target:p,preventScrollReset:v,relative:o,viewTransition:_});function b(N){s&&s(N),N.defaultPrevented||y(N)}return J.createElement("a",Uf({},g,{href:M||x,onClick:E||l?s:b,ref:t,target:p}))});var Pm;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Pm||(Pm={}));var Nm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Nm||(Nm={}));function Rx(r,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:u,viewTransition:f}=e===void 0?{}:e,p=ac(),h=sa(),v=$g(r,{relative:u});return J.useCallback(_=>{if(Sx(_,t)){_.preventDefault();let g=s!==void 0?s:Ql(h)===Ql(v);p(r,{replace:g,state:o,preventScrollReset:l,relative:u,viewTransition:f})}},[h,p,v,s,o,t,r,l,u,f])}const bx=[{id:"zimage",label:"文生图"},{id:"enhance",label:"细节增强"},{id:"klein",label:"图片编辑"},{id:"angle",label:"角度控制"}],Px=({activeTab:r,onTabChange:e,onTokenClick:t})=>R.jsxs("aside",{className:"sidebar",style:{display:"flex",flexDirection:"column",height:"100%"},children:[R.jsx("div",{className:"logo-ring",children:R.jsx("div",{className:"logo-dot"})}),R.jsx("nav",{className:"nav-list",children:bx.map(s=>R.jsx("button",{type:"button",className:`nav-item ${r===s.id?"active":""}`,onClick:()=>e(s.id),children:R.jsx("span",{className:"nav-text",children:s.label})},s.id))}),R.jsx("button",{type:"button",className:"token-btn",onClick:t,children:"API Token"}),R.jsx("button",{type:"button",className:"nav-item",style:{marginTop:"10px",marginBottom:"10px",color:"#ff4d4f"},onClick:()=>{localStorage.removeItem("is_logged_in"),window.location.href="/login"},children:"退出登录"})]}),Nx=({onlineCount:r,queueTotal:e,queuePosition:t,busy:s})=>R.jsxs("div",{className:`nano-monitor ${s?"is-busy":""}`,children:[R.jsxs("div",{className:"stat-group",children:[R.jsx("div",{className:"pulse-dot"}),R.jsx("span",{className:"label-nano",children:"ONLINE"}),R.jsx("span",{children:r})]}),R.jsx("div",{className:"divider"}),R.jsxs("div",{className:"stat-group",children:[R.jsx("span",{className:"label-nano",children:"QUEUE"}),R.jsx("span",{children:s?`${t}/${e}`:e})]})]});async function Sn(r,e={}){const t=await fetch(r,{headers:{"Content-Type":"application/json",...e.headers||{}},...e}),o=t.headers.get("content-type")?.includes("application/json")?await t.json():await t.text();if(!t.ok){const l=typeof o=="string"?o:o?.detail||"Request failed";throw new Error(l)}return o}function Dd(r){return Sn(`/api/queue_status?client_id=${encodeURIComponent(r)}`)}function oc(){return Sn("/api/config/token")}function Lx(r){return Sn("/api/config/token",{method:"POST",body:JSON.stringify({token:r})})}function Dx(){return Sn("/api/config/token",{method:"DELETE"})}const Ix=({open:r,onClose:e})=>{const[t,s]=J.useState("personal"),[o,l]=J.useState(""),[u,f]=J.useState("");if(J.useEffect(()=>{r&&(l(localStorage.getItem("modelscope_api_token")||""),oc().then(g=>f(g?.token||"")).catch(()=>f("")))},[r]),!r)return null;const p=()=>{if(!o.trim()){alert("请输入 Token");return}localStorage.setItem("modelscope_api_token",o.trim()),alert("个人 Token 已保存")},h=()=>{window.confirm("确定要删除个人 Token 吗？")&&(localStorage.removeItem("modelscope_api_token"),l(""))},v=async()=>{if(!u.trim()){alert("请输入 Token");return}window.confirm("全局 Token 对所有用户可见，确定保存吗？")&&(await Lx(u.trim()),alert("全局 Token 已保存"))},_=async()=>{window.confirm("确定要删除全局 Token 吗？")&&(await Dx(),f(""),alert("全局 Token 已删除"))};return R.jsx("div",{className:"token-modal-mask",onClick:e,children:R.jsxs("div",{className:"token-modal-card",onClick:g=>g.stopPropagation(),children:[R.jsx("h3",{children:"Access Token"}),R.jsxs("div",{className:"token-tab",children:[R.jsx("button",{type:"button",className:t==="personal"?"active":"",onClick:()=>s("personal"),children:"个人"}),R.jsx("button",{type:"button",className:t==="global"?"active":"",onClick:()=>s("global"),children:"全局"})]}),t==="personal"?R.jsxs("div",{className:"token-panel",children:[R.jsx("input",{type:"password",value:o,onChange:g=>l(g.target.value),placeholder:"个人 token"}),R.jsxs("div",{className:"token-actions",children:[R.jsx("button",{type:"button",onClick:p,children:"保存"}),R.jsx("button",{type:"button",className:"danger",onClick:h,children:"删除"})]})]}):R.jsxs("div",{className:"token-panel",children:[R.jsx("input",{type:"password",value:u,onChange:g=>f(g.target.value),placeholder:"全局 token"}),R.jsxs("div",{className:"token-actions",children:[R.jsx("button",{type:"button",onClick:v,children:"保存"}),R.jsx("button",{type:"button",className:"danger",onClick:_,children:"删除"})]})]})]})})};function lc(r){const e=r?`?type=${encodeURIComponent(r)}`:"";return Sn(`/api/history${e}`)}function e0(r){return Sn("/api/history/delete",{method:"POST",body:JSON.stringify({timestamp:r})})}function Ux({prompt:r,width:e,height:t,clientId:s}){return Sn("/api/generate",{method:"POST",body:JSON.stringify({prompt:r,width:e,height:t,type:"zimage",client_id:s})})}function Fx({prompt:r,resolution:e,apiKey:t}){return Sn("/generate",{method:"POST",body:JSON.stringify({prompt:r,resolution:e,api_key:t})})}async function ec(r,e="upload.png"){const t=new FormData;t.append("files",r,e);const s=await fetch("/api/upload",{method:"POST",body:t}),o=await s.json();if(!s.ok)throw new Error(o?.detail||"Upload failed");return o}function Ox({uploadedPath:r,strength:e,clientId:t}){return Sn("/api/generate",{method:"POST",body:JSON.stringify({workflow_json:"Z-Image-Enhance.json",params:{15:{image:r},204:{value:e}},type:"enhance",client_id:t})})}function kx({uploadedPath:r,resolution:e,seed:t,clientId:s}){return Sn("/api/generate",{method:"POST",body:JSON.stringify({workflow_json:"upscale.json",params:{15:{image:r},172:{seed:t,resolution:e}},type:"enhance",client_id:s})})}function Bx({prompt:r,slot1:e,slot2:t,slot3:s,clientId:o}){return Sn("/api/generate",{method:"POST",body:JSON.stringify({prompt:r,workflow_json:"Flux2-Klein.json",type:"klein",client_id:o,params:{168:{text:r},158:{noise_seed:Math.floor(Math.random()*1e6)},278:{image:e},270:{image:t||""},292:{image:s||""},313:{value:!!t},314:{value:!!s}}})})}function zx({uploadedPath:r,prompt:e,seed:t,clientId:s}){return Sn("/api/generate",{method:"POST",body:JSON.stringify({workflow_json:"2511.json",params:{31:{image:r},11:{prompt:e},14:{seed:t}},type:"angle",client_id:s})})}function Vx({prompt:r,apiKey:e,imageDataUri:t,clientId:s}){return Sn("/api/angle/generate",{method:"POST",body:JSON.stringify({prompt:r,api_key:e,type:"angle",model:"Qwen/Qwen-Image-Edit-2511",image_urls:[t],client_id:s})})}function Hx({taskId:r,apiKey:e,clientId:t}){return Sn("/api/angle/poll_status",{method:"POST",body:JSON.stringify({task_id:r,api_key:e,client_id:t})})}const Gx=({prompt:r,onPromptChange:e,width:t,height:s,onWidthChange:o,onHeightChange:l,engine:u,onEngineChange:f,loading:p,onRender:h,queueStatusText:v})=>R.jsxs("section",{className:"z-console",children:[R.jsxs("div",{className:"z-console-head",children:[R.jsx("span",{children:"Unified Art Console"}),R.jsx("span",{className:"z-status",children:v})]}),R.jsx("textarea",{value:r,onChange:_=>e(_.target.value),rows:2,placeholder:"Describe your vision..."}),R.jsxs("div",{className:"z-console-foot",children:[R.jsxs("div",{className:"z-controls",children:[R.jsxs("div",{className:"z-engine",children:[R.jsx("button",{type:"button",className:u==="local"?"active":"",onClick:()=>f("local"),children:"Local"}),R.jsx("button",{type:"button",className:u==="cloud"?"active":"",onClick:()=>f("cloud"),children:"Cloud"})]}),R.jsxs("div",{className:"z-dimensions",children:[R.jsx("input",{type:"number",value:t,onChange:_=>o(Number(_.target.value))}),R.jsx("span",{children:"x"}),R.jsx("input",{type:"number",value:s,onChange:_=>l(Number(_.target.value))})]})]}),R.jsx("button",{type:"button",className:"z-render-btn",onClick:h,disabled:p,children:p?"Processing...":`Render Art (${u.toUpperCase()})`})]})]}),Wx=({item:r,onOpen:e,onDelete:t})=>{const s=r.images?.[0];return R.jsxs("div",{className:"z-card",onClick:()=>e(r),onKeyDown:o=>o.key==="Enter"&&e(r),role:"button",tabIndex:0,children:[s?R.jsx("img",{src:s,alt:r.prompt||"history",loading:"lazy"}):R.jsx("div",{className:"z-card-empty",children:"No Image"}),r.type==="cloud"?R.jsx("span",{className:"z-card-badge",children:"Cloud"}):null,R.jsx("button",{type:"button",className:"z-card-delete",onClick:o=>{o.stopPropagation(),t(r.timestamp)},children:"Delete"})]})},jx=({items:r,onOpenItem:e,onDeleteItem:t,onLoadMore:s,hasMore:o,loading:l})=>R.jsxs("section",{className:"z-history",children:[R.jsx("div",{className:"z-grid",children:r.map(u=>R.jsx(Wx,{item:u,onOpen:e,onDelete:t},u.timestamp))}),o?R.jsx("div",{className:"z-load-more-wrap",children:R.jsx("button",{type:"button",className:"z-load-more",onClick:s,disabled:l,children:l?"Loading...":"Load More Archive"})}):null]}),Xx=({item:r,onClose:e,onReplicate:t})=>{if(!r)return null;const s=r.images?.[0];return R.jsx("div",{className:"z-lightbox-mask",onClick:e,children:R.jsxs("div",{className:"z-lightbox-card",onClick:o=>o.stopPropagation(),children:[R.jsx("button",{type:"button",className:"z-lightbox-close",onClick:e,children:"x"}),R.jsx("img",{src:s,alt:r.prompt||"preview"}),R.jsxs("div",{className:"z-lightbox-foot",children:[R.jsx("p",{children:r.prompt||"-"}),R.jsx("button",{type:"button",onClick:()=>t(r.prompt||""),children:"做同款"})]})]})})},qx=15,Lm="zimage_engine_mode",$x="modelscope_api_token",Yx=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)}),Kx=()=>{const r=localStorage.getItem("client_id");if(r)return r;const e=Yx();return localStorage.setItem("client_id",e),e},Zx=()=>{const[r,e]=J.useState(""),[t,s]=J.useState(localStorage.getItem(Lm)||"local"),[o,l]=J.useState(1024),[u,f]=J.useState(1024),[p,h]=J.useState(!1),[v,_]=J.useState("System Ready"),[g,S]=J.useState([]),[M,E]=J.useState([]),[x,y]=J.useState(0),[b,N]=J.useState(!1),[L,z]=J.useState(null),F=J.useMemo(()=>Kx(),[]);J.useEffect(()=>{localStorage.setItem(Lm,t)},[t]);const V=(B,O)=>{const $=B.slice(O,O+qx);E(ee=>[...ee,...$]),y(O+$.length)},A=async()=>{N(!0);try{const B=await lc("zimage");S(B||[]),E([]),y(0),V(B||[],0)}finally{N(!1)}},P=()=>{V(g,x)},se=async B=>{(await e0(B))?.success&&(S($=>$.filter(ee=>ee.timestamp!==B)),E($=>$.filter(ee=>ee.timestamp!==B)),L?.timestamp===B&&z(null))},k=B=>{e(B),z(null),window.scrollTo({top:0,behavior:"smooth"})},H=async()=>{let B=localStorage.getItem($x);if(B||(B=(await oc())?.token),!B){alert("ModelScope Token Required. 请先在侧边栏设置 API Token。");return}const O=await Fx({prompt:r,apiKey:B,resolution:`${o}x${u}`});if(O?.url){const $={timestamp:Date.now(),prompt:r,images:[O.url],type:"cloud"};S(ee=>[$,...ee]),E(ee=>[$,...ee])}},j=async()=>{const B=await Ux({prompt:r,width:o,height:u,clientId:F});B?.images?.length&&(S(O=>[B,...O]),E(O=>[B,...O]))},K=async()=>{if(!r.trim()){alert("Please enter a prompt");return}h(!0);try{t==="cloud"?await H():await j()}catch(B){alert(B.message||"Render failed")}finally{h(!1)}};J.useEffect(()=>{A()},[]),J.useEffect(()=>{const B=setInterval(async()=>{try{const O=await Dd(F);O.total>0?_(`Queueing ${O.position}/${O.total}`):_("System Ready")}catch{}},3e3);return()=>clearInterval(B)},[F]),J.useEffect(()=>{const B=location.protocol==="https:"?"wss":"ws",O=new WebSocket(`${B}://${window.location.host}/ws/stats`);return O.onmessage=$=>{try{const ee=JSON.parse($.data);if(ee.type!=="new_image"||!ee.data||ee.data.type!=="zimage")return;S(ce=>ce.find(U=>U.timestamp===ee.data.timestamp)?ce:[ee.data,...ce]),E(ce=>ce.find(U=>U.timestamp===ee.data.timestamp)?ce:[ee.data,...ce])}catch{}},()=>O.close()},[]);const G=x<g.length;return R.jsxs("div",{className:"z-page",children:[R.jsx(Gx,{prompt:r,onPromptChange:e,width:o,height:u,onWidthChange:l,onHeightChange:f,engine:t,onEngineChange:s,loading:p,onRender:K,queueStatusText:v}),R.jsx(jx,{items:M,onOpenItem:z,onDeleteItem:se,onLoadMore:P,hasMore:G,loading:b}),R.jsx(Xx,{item:L,onClose:()=>z(null),onReplicate:k})]})},Jx=({previewUrl:r,uploading:e,onFileSelect:t})=>R.jsx("div",{className:"e-upload-panel",children:R.jsxs("label",{className:"e-upload-dropzone",children:[r?R.jsx("img",{src:r,alt:"uploaded"}):R.jsxs("div",{className:"e-upload-placeholder",children:[R.jsx("p",{children:"点击上传或拖拽图片"}),R.jsx("span",{children:"支持粘贴与常见图片格式"})]}),R.jsx("input",{type:"file",accept:"image/*",onChange:s=>t(s.target.files?.[0]),disabled:e})]})}),Qx=({strength:r,onStrengthChange:e,upscaleEnabled:t,onUpscaleEnabledChange:s,upscaleFactor:o,onUpscaleFactorChange:l,rendering:u,onGenerate:f,queueStatusText:p})=>R.jsxs("div",{className:"e-controls",children:[R.jsxs("div",{className:"e-controls-top",children:[R.jsx("span",{children:"Enhance Console"}),R.jsx("span",{className:"e-status",children:p})]}),R.jsxs("div",{className:"e-row",children:[R.jsx("label",{children:"增强强度"}),R.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:r,onChange:h=>e(Number(h.target.value))}),R.jsx("span",{children:r.toFixed(2)})]}),R.jsxs("div",{className:"e-row",children:[R.jsxs("label",{className:"e-checkbox",children:[R.jsx("input",{type:"checkbox",checked:t,onChange:h=>s(h.target.checked)}),R.jsx("span",{children:"开启超分"})]}),t?R.jsxs("div",{className:"e-factor",children:[R.jsx("button",{type:"button",className:o===2048?"active":"",onClick:()=>l(2048),children:"2x"}),R.jsx("button",{type:"button",className:o===4096?"active":"",onClick:()=>l(4096),children:"4x"})]}):null]}),R.jsx("button",{type:"button",className:"e-generate-btn",onClick:f,disabled:u,children:u?"Processing...":"Begin Remastering"})]}),ey=({resultUrl:r,loading:e,onOpenPreview:t})=>R.jsx("div",{className:"e-result-panel",children:e?R.jsx("div",{className:"e-loading",children:"处理中..."}):r?R.jsxs("div",{className:"e-result-wrap",children:[R.jsx("img",{src:r,alt:"result",onClick:t}),R.jsx("a",{href:r,download:!0,className:"e-download-btn",children:"下载结果"})]}):R.jsx("div",{className:"e-empty",children:"上传图片后开始增强"})}),ty=({items:r,onOpen:e})=>R.jsx("div",{className:"e-history-grid",children:r.map(t=>R.jsx("div",{className:"e-history-card",role:"button",tabIndex:0,onClick:()=>e(t),onKeyDown:s=>s.key==="Enter"&&e(t),children:R.jsx("img",{src:t.images?.[0],alt:t.prompt||"enhance"})},t.timestamp))}),ny=({item:r,onClose:e})=>{const[t,s]=J.useState(50),o=J.useMemo(()=>{const l=r?.params?.["15"]?.image;return l?`/api/view?filename=${encodeURIComponent(l)}&type=input`:""},[r]);return r?R.jsx("div",{className:"e-lightbox-mask",onClick:e,children:R.jsxs("div",{className:"e-lightbox-card",onClick:l=>l.stopPropagation(),children:[R.jsx("button",{type:"button",className:"e-lightbox-close",onClick:e,children:"x"}),o?R.jsxs("div",{className:"e-compare-wrap",children:[R.jsx("img",{src:r.images?.[0],alt:"generated",className:"e-compare-base"}),R.jsx("div",{className:"e-compare-overlay",style:{width:`${t}%`},children:R.jsx("img",{src:o,alt:"original"})}),R.jsx("input",{className:"e-compare-slider",type:"range",min:"0",max:"100",value:t,onChange:l=>s(Number(l.target.value))})]}):R.jsx("img",{src:r.images?.[0],alt:"result",className:"e-single-preview"})]})}):null},iy=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)}),ry=()=>{const r=localStorage.getItem("client_id");if(r)return r;const e=iy();return localStorage.setItem("client_id",e),e},sy=()=>{const[r,e]=J.useState(""),[t,s]=J.useState(""),[o,l]=J.useState(.5),[u,f]=J.useState(!1),[p,h]=J.useState(2048),[v,_]=J.useState(!1),[g,S]=J.useState(!1),[M,E]=J.useState(null),[x,y]=J.useState([]),[b,N]=J.useState("System Ready"),[L,z]=J.useState(null),F=J.useMemo(()=>ry(),[]),V=async P=>{if(P){_(!0);try{e(URL.createObjectURL(P));const k=(await ec(P,P.name||"enhance_input.png"))?.files?.[0]?.comfy_name;if(!k)throw new Error("上传成功但未返回文件路径");s(k)}catch(se){alert(se.message||"上传失败")}finally{_(!1)}}},A=async()=>{if(!t){alert("请先上传图片");return}S(!0);try{const P=await Ox({uploadedPath:t,strength:o,clientId:F});if(!P?.images?.length)throw new Error("增强失败，未返回图片");let se=P;if(u){const k=P.images[0],H=await fetch(k);if(!H.ok)throw new Error("获取增强结果失败，无法进行超分");const j=await H.blob(),G=(await ec(j,"enhance_upscale_input.png"))?.files?.[0]?.comfy_name;if(!G)throw new Error("超分中间图上传失败");se=await kx({uploadedPath:G,resolution:p,seed:Math.floor(Math.random()*4294967295),clientId:F})}if(!se?.images?.length)throw new Error("处理失败，未返回图片");se.params=se.params||{},se.params[15]=se.params[15]||{image:t},E(se),y(k=>[se,...k])}catch(P){alert(P.message||"处理失败")}finally{S(!1)}};return J.useEffect(()=>{lc("enhance").then(P=>y(P||[])).catch(()=>y([]))},[]),J.useEffect(()=>{const P=setInterval(async()=>{try{const se=await Dd(F);se.total>0?N(`Queueing ${se.position}/${se.total}`):N("System Ready")}catch{}},3e3);return()=>clearInterval(P)},[F]),J.useEffect(()=>{const P=location.protocol==="https:"?"wss":"ws",se=new WebSocket(`${P}://${window.location.host}/ws/stats`);return se.onmessage=k=>{try{const H=JSON.parse(k.data);H.type==="new_image"&&H.data?.type==="enhance"&&y(j=>j.find(K=>K.timestamp===H.data.timestamp)?j:[H.data,...j])}catch{}},()=>se.close()},[]),R.jsxs("div",{className:"e-page",children:[R.jsxs("div",{className:"e-main",children:[R.jsx(Jx,{previewUrl:r,uploading:v,onFileSelect:V}),R.jsx(Qx,{strength:o,onStrengthChange:l,upscaleEnabled:u,onUpscaleEnabledChange:f,upscaleFactor:p,onUpscaleFactorChange:h,rendering:g,onGenerate:A,queueStatusText:b})]}),R.jsx(ey,{resultUrl:M?.images?.[0],loading:g,onOpenPreview:()=>z(M)}),R.jsx(ty,{items:x,onOpen:z}),R.jsx(ny,{item:L,onClose:()=>z(null)})]})},ay={1:"主图",2:"参考图 A",3:"参考图 B"},oy=({slots:r,onSelectFile:e,onClearSlot:t})=>R.jsx("div",{className:"k-slots",children:[1,2,3].map(s=>R.jsxs("label",{className:"k-slot",children:[r[s]?.preview?R.jsx("img",{src:r[s].preview,alt:`slot-${s}`}):R.jsxs("div",{className:"k-slot-empty",children:[R.jsx("strong",{children:ay[s]}),R.jsx("span",{children:"点击上传图片"})]}),R.jsx("input",{type:"file",accept:"image/*",onChange:o=>e(s,o.target.files?.[0])}),r[s]?.preview?R.jsx("button",{type:"button",className:"k-slot-clear",onClick:o=>{o.preventDefault(),o.stopPropagation(),t(s)},children:"x"}):null]},s))}),ly=({prompt:r,onPromptChange:e,rendering:t,onGenerate:s})=>R.jsxs("div",{className:"k-controls",children:[R.jsx("textarea",{rows:4,placeholder:"输入提示词...",value:r,onChange:o=>e(o.target.value)}),R.jsx("button",{type:"button",onClick:s,disabled:t,children:t?"Synthesizing...":"Execute Synthesis"})]}),cy=({result:r,onOpen:e})=>R.jsx("div",{className:"k-result",children:r?.images?.[0]?R.jsxs("div",{className:"k-result-wrap",children:[R.jsx("img",{src:r.images[0],alt:"klein-result",onClick:()=>e(r)}),R.jsx("a",{href:r.images[0],download:!0,className:"k-download",children:"下载"})]}):R.jsx("div",{className:"k-empty",children:"生成结果会显示在这里"})}),uy=({items:r,onOpen:e,onDelete:t,onLoadMore:s,hasMore:o,loading:l})=>R.jsxs("div",{className:"k-history-wrap",children:[R.jsx("div",{className:"k-history-grid",children:r.map(u=>R.jsxs("div",{className:"k-history-card",role:"button",tabIndex:0,onClick:()=>e(u),onKeyDown:f=>f.key==="Enter"&&e(u),children:[R.jsx("img",{src:u.images?.[0],alt:u.prompt||"klein"}),R.jsx("button",{type:"button",className:"k-history-delete",onClick:f=>{f.stopPropagation(),t(u.timestamp)},children:"删除"})]},u.timestamp))}),o?R.jsx("div",{className:"k-load-more-wrap",children:R.jsx("button",{type:"button",className:"k-load-more",onClick:s,disabled:l,children:l?"Loading...":"Load More Archive"})}):null]}),fy=({item:r,onClose:e,onApplySameStyle:t})=>{const[s,o]=J.useState(50),l=J.useMemo(()=>{const u=r?.params?.["278"]?.image;return u?`/api/view?filename=${encodeURIComponent(u)}&type=input`:""},[r]);return r?R.jsx("div",{className:"k-lightbox-mask",onClick:e,children:R.jsxs("div",{className:"k-lightbox-card",onClick:u=>u.stopPropagation(),children:[R.jsx("button",{type:"button",className:"k-lightbox-close",onClick:e,children:"x"}),R.jsx("p",{className:"k-lightbox-prompt",children:r.prompt||"No prompt metadata found"}),l?R.jsxs("div",{className:"k-compare-wrap",children:[R.jsx("img",{src:r.images?.[0],alt:"generated",className:"k-compare-base"}),R.jsx("div",{className:"k-compare-overlay",style:{width:`${s}%`},children:R.jsx("img",{src:l,alt:"original"})}),R.jsx("input",{type:"range",min:"0",max:"100",value:s,onChange:u=>o(Number(u.target.value))})]}):R.jsx("img",{src:r.images?.[0],alt:"preview",className:"k-single-preview"}),R.jsxs("div",{className:"k-lightbox-actions",children:[R.jsx("a",{href:r.images?.[0],download:!0,children:"下载"}),r.params?R.jsx("button",{type:"button",onClick:()=>t(r),children:"做同款"}):null]})]})}):null},dy=24,hy=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)}),py=()=>{const r=localStorage.getItem("client_id");if(r)return r;const e=hy();return localStorage.setItem("client_id",e),e},my={1:{comfyName:"",preview:""},2:{comfyName:"",preview:""},3:{comfyName:"",preview:""}},gy=()=>{const[r,e]=J.useState(my),[t,s]=J.useState(""),[o,l]=J.useState(!1),[u,f]=J.useState(null),[p,h]=J.useState(null),[v,_]=J.useState([]),[g,S]=J.useState([]),[M,E]=J.useState(0),[x,y]=J.useState(!1),b=J.useMemo(()=>py(),[]),N=(H,j)=>{const K=H.slice(j,j+dy);S(G=>[...G,...K]),E(j+K.length)},L=async()=>{y(!0);try{const H=await lc("klein");_(H||[]),S([]),E(0),N(H||[],0)}finally{y(!1)}},z=()=>N(v,M),F=async(H,j)=>{if(j)try{const K=URL.createObjectURL(j);e(O=>({...O,[H]:{...O[H],preview:K}}));const B=(await ec(j,j.name||`klein-slot-${H}.png`))?.files?.[0]?.comfy_name;if(!B)throw new Error("上传成功但未返回文件名");e(O=>({...O,[H]:{...O[H],comfyName:B}}))}catch(K){alert(K.message||"上传失败")}},V=H=>{e(j=>({...j,[H]:{comfyName:"",preview:""}}))},A=async()=>{if(!r[1].comfyName){alert("请先上传主图（Slot 1）");return}l(!0);try{const H=await Bx({prompt:t,slot1:r[1].comfyName,slot2:r[2].comfyName,slot3:r[3].comfyName,clientId:b});if(!H?.images?.[0])throw new Error("生成失败，未返回图片");f(H),_(j=>[H,...j]),S(j=>[H,...j])}catch(H){alert(H.message||"生成失败")}finally{l(!1)}},P=H=>{s(H.prompt||"");const j=H.params||{},K=G=>{const B=j[G]?.image;return B?{comfyName:B,preview:`/api/view?filename=${encodeURIComponent(B)}&type=input`}:{comfyName:"",preview:""}};e({1:K("278"),2:K("270"),3:K("292")}),h(null),window.scrollTo({top:0,behavior:"smooth"})},se=async H=>{!window.confirm("Delete this archive?")||!(await e0(H))?.success||(_(G=>G.filter(B=>B.timestamp!==H)),S(G=>G.filter(B=>B.timestamp!==H)),p?.timestamp===H&&h(null))};J.useEffect(()=>{L()},[]),J.useEffect(()=>{const H=location.protocol==="https:"?"wss":"ws",j=new WebSocket(`${H}://${window.location.host}/ws/stats`);return j.onmessage=K=>{try{const G=JSON.parse(K.data);G.type==="new_image"&&G.data?.type==="klein"&&(_(B=>B.find(O=>O.timestamp===G.data.timestamp)?B:[G.data,...B]),S(B=>B.find(O=>O.timestamp===G.data.timestamp)?B:[G.data,...B]))}catch{}},()=>j.close()},[]);const k=M<v.length;return R.jsxs("div",{className:"k-page",children:[R.jsxs("div",{className:"k-top",children:[R.jsx(oy,{slots:r,onSelectFile:F,onClearSlot:V}),R.jsx(ly,{prompt:t,onPromptChange:s,rendering:o,onGenerate:A})]}),R.jsx(cy,{result:u,onOpen:h}),R.jsx(uy,{items:g,onOpen:h,onDelete:se,onLoadMore:z,hasMore:k,loading:x}),R.jsx(fy,{item:p,onClose:()=>h(null),onApplySameStyle:P})]})};const t0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();const vy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const _y=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());const Dm=r=>{const e=_y(r);return e.charAt(0).toUpperCase()+e.slice(1)};var xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const yy=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const Sy=J.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:u,...f},p)=>J.createElement("svg",{ref:p,...xy,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:t0("lucide",o),...!l&&!yy(f)&&{"aria-hidden":"true"},...f},[...u.map(([h,v])=>J.createElement(h,v)),...Array.isArray(l)?l:[l]]));const ri=(r,e)=>{const t=J.forwardRef(({className:s,...o},l)=>J.createElement(Sy,{ref:l,iconNode:e,className:t0(`lucide-${vy(Dm(r))}`,`lucide-${r}`,s),...o}));return t.displayName=Dm(r),t};const My=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ey=ri("camera",My);const wy=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Ty=ri("cloud-upload",wy);const Ay=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Cy=ri("download",Ay);const Ry=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],by=ri("monitor",Ry);const Py=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]],Ny=ri("move-horizontal",Py);const Ly=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]],Dy=ri("move-vertical",Ly);const Iy=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Zu=ri("rotate-cw",Iy);const Uy=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Fy=ri("save",Uy);const Oy=[["path",{d:"M17 5H3",key:"1cn7zz"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 19H8",key:"13qgcb"}],["path",{d:"M3 12v7",key:"1ri8j3"}]],ky=ri("text-quote",Oy);const By=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zy=ri("x",By);const Vy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Hy=ri("zap",Vy);const Gy=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Wy=ri("zoom-in",Gy),jy=({previewUrl:r,onSelectFile:e})=>{const t=J.useRef(null),[s,o]=J.useState(!1),l=()=>{t.current?.click()},u=h=>{h.preventDefault(),o(!0)},f=h=>{h.preventDefault(),o(!1)},p=h=>{h.preventDefault(),o(!1),h.dataTransfer.files&&h.dataTransfer.files[0]&&e(h.dataTransfer.files[0])};return R.jsxs("div",{className:"a-upload-section",children:[R.jsx("h3",{className:"a-section-title",children:"01. Input Source"}),R.jsxs("div",{className:`a-upload-dropzone ${s?"drag-over":""}`,onClick:l,onDragOver:u,onDragLeave:f,onDrop:p,children:[R.jsx("input",{ref:t,type:"file",accept:"image/*",className:"hidden",onChange:h=>e(h.target.files?.[0])}),r?R.jsxs(R.Fragment,{children:[R.jsx("img",{src:r,alt:"preview",className:"a-upload-img"}),R.jsx("div",{className:"a-upload-overlay",children:R.jsx("span",{className:"a-upload-badge",children:"Change"})})]}):R.jsxs("div",{className:"a-upload-empty",children:[R.jsx("div",{className:"a-upload-icon-box",children:R.jsx(Ty,{size:20})}),R.jsx("p",{children:"Drop image here"})]})]})]})};const Id="183",Xy=0,Im=1,qy=2,ql=1,$y=2,Qa=3,Dr=0,On=1,gi=2,Ji=0,Ks=1,Um=2,Fm=3,Om=4,Yy=5,rs=100,Ky=101,Zy=102,Jy=103,Qy=104,eS=200,tS=201,nS=202,iS=203,Ff=204,Of=205,rS=206,sS=207,aS=208,oS=209,lS=210,cS=211,uS=212,fS=213,dS=214,kf=0,Bf=1,zf=2,Js=3,Vf=4,Hf=5,Gf=6,Wf=7,n0=0,hS=1,pS=2,bi=0,i0=1,r0=2,s0=3,a0=4,o0=5,l0=6,c0=7,u0=300,cs=301,Qs=302,Ju=303,Qu=304,cc=306,jf=1e3,Zi=1001,Xf=1002,fn=1003,mS=1004,Ml=1005,xn=1006,ef=1007,as=1008,Xn=1009,f0=1010,d0=1011,so=1012,Ud=1013,Li=1014,Ci=1015,er=1016,Fd=1017,Od=1018,ao=1020,h0=35902,p0=35899,m0=1021,g0=1022,_i=1023,tr=1026,os=1027,v0=1028,kd=1029,ea=1030,Bd=1031,zd=1033,$l=33776,Yl=33777,Kl=33778,Zl=33779,qf=35840,$f=35841,Yf=35842,Kf=35843,Zf=36196,Jf=37492,Qf=37496,ed=37488,td=37489,nd=37490,id=37491,rd=37808,sd=37809,ad=37810,od=37811,ld=37812,cd=37813,ud=37814,fd=37815,dd=37816,hd=37817,pd=37818,md=37819,gd=37820,vd=37821,_d=36492,xd=36494,yd=36495,Sd=36283,Md=36284,Ed=36285,wd=36286,gS=3200,_0=0,vS=1,br="",jn="srgb",ta="srgb-linear",tc="linear",Dt="srgb",Is=7680,km=519,_S=512,xS=513,yS=514,Vd=515,SS=516,MS=517,Hd=518,ES=519,Bm=35044,zm="300 es",Ri=2e3,oo=2001;function wS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function TS(){const r=lo("canvas");return r.style.display="block",r}const Vm={};function Hm(...r){const e="THREE."+r.shift();console.log(e,...r)}function x0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=x0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ct(...r){r=x0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function nc(...r){const e=r.join(" ");e in Vm||(Vm[e]=!0,lt(...r))}function AS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const CS={[kf]:Bf,[zf]:Gf,[Vf]:Wf,[Js]:Hf,[Bf]:kf,[Gf]:zf,[Wf]:Vf,[Hf]:Js};class aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gm=1234567;const to=Math.PI/180,co=180/Math.PI;function oa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function Gd(r,e){return(r%e+e)%e}function RS(r,e,t,s,o){return s+(r-e)*(o-s)/(t-e)}function bS(r,e,t){return r!==e?(t-r)/(e-r):0}function no(r,e,t){return(1-t)*r+t*e}function PS(r,e,t,s){return no(r,e,1-Math.exp(-t*s))}function NS(r,e=1){return e-Math.abs(Gd(r,e*2)-e)}function LS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function DS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function IS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function US(r,e){return r+Math.random()*(e-r)}function FS(r){return r*(.5-Math.random())}function OS(r){r!==void 0&&(Gm=r);let e=Gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kS(r){return r*to}function BS(r){return r*co}function zS(r){return(r&r-1)===0&&r!==0}function VS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function HS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function GS(r,e,t,s,o){const l=Math.cos,u=Math.sin,f=l(t/2),p=u(t/2),h=l((e+s)/2),v=u((e+s)/2),_=l((e-s)/2),g=u((e-s)/2),S=l((s-e)/2),M=u((s-e)/2);switch(o){case"XYX":r.set(f*v,p*_,p*g,f*h);break;case"YZY":r.set(p*g,f*v,p*_,f*h);break;case"ZXZ":r.set(p*_,p*g,f*v,f*h);break;case"XZX":r.set(f*v,p*M,p*S,f*h);break;case"YXY":r.set(p*S,f*v,p*M,f*h);break;case"ZYZ":r.set(p*M,p*S,f*v,f*h);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function An(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Wm={DEG2RAD:to,RAD2DEG:co,generateUUID:oa,clamp:_t,euclideanModulo:Gd,mapLinear:RS,inverseLerp:bS,lerp:no,damp:PS,pingpong:NS,smoothstep:LS,smootherstep:DS,randInt:IS,randFloat:US,randFloatSpread:FS,seededRandom:OS,degToRad:kS,radToDeg:BS,isPowerOfTwo:zS,ceilPowerOfTwo:VS,floorPowerOfTwo:HS,setQuaternionFromProperEuler:GS,normalize:An,denormalize:Ys};class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class la{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let p=s[o+0],h=s[o+1],v=s[o+2],_=s[o+3],g=l[u+0],S=l[u+1],M=l[u+2],E=l[u+3];if(_!==E||p!==g||h!==S||v!==M){let x=p*g+h*S+v*M+_*E;x<0&&(g=-g,S=-S,M=-M,E=-E,x=-x);let y=1-f;if(x<.9995){const b=Math.acos(x),N=Math.sin(b);y=Math.sin(y*b)/N,f=Math.sin(f*b)/N,p=p*y+g*f,h=h*y+S*f,v=v*y+M*f,_=_*y+E*f}else{p=p*y+g*f,h=h*y+S*f,v=v*y+M*f,_=_*y+E*f;const b=1/Math.sqrt(p*p+h*h+v*v+_*_);p*=b,h*=b,v*=b,_*=b}}e[t]=p,e[t+1]=h,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],p=s[o+1],h=s[o+2],v=s[o+3],_=l[u],g=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+v*_+p*S-h*g,e[t+1]=p*M+v*g+h*_-f*S,e[t+2]=h*M+v*S+f*g-p*_,e[t+3]=v*M-f*_-p*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(s/2),v=f(o/2),_=f(l/2),g=p(s/2),S=p(o/2),M=p(l/2);switch(u){case"XYZ":this._x=g*v*_+h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_-g*S*M;break;case"YXZ":this._x=g*v*_+h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_+g*S*M;break;case"ZXY":this._x=g*v*_-h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_-g*S*M;break;case"ZYX":this._x=g*v*_-h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_+g*S*M;break;case"YZX":this._x=g*v*_+h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_-g*S*M;break;case"XZY":this._x=g*v*_-h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_+g*S*M;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],p=t[9],h=t[2],v=t[6],_=t[10],g=s+f+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-p)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(s>f&&s>_){const S=2*Math.sqrt(1+s-f-_);this._w=(v-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(f>_){const S=2*Math.sqrt(1+f-s-_);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+_-s-f);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,p=t._y,h=t._z,v=t._w;return this._x=s*v+u*f+o*h-l*p,this._y=o*v+u*p+l*f-s*h,this._z=l*v+u*h+s*p-o*f,this._w=u*v-s*f-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),v=Math.sin(h);p=Math.sin(p*h)/v,t=Math.sin(t*h)/v,this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,s=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*o-f*s),v=2*(f*t-l*o),_=2*(l*s-u*t);return this.x=t+p*h+u*_-f*v,this.y=s+p*v+f*h-l*_,this.z=o+p*_+l*v-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*u-s*p,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new le,jm=new la;class dt{constructor(e,t,s,o,l,u,f,p,h){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,p,h)}set(e,t,s,o,l,u,f,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=p,v[6]=s,v[7]=u,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],p=s[6],h=s[1],v=s[4],_=s[7],g=s[2],S=s[5],M=s[8],E=o[0],x=o[3],y=o[6],b=o[1],N=o[4],L=o[7],z=o[2],F=o[5],V=o[8];return l[0]=u*E+f*b+p*z,l[3]=u*x+f*N+p*F,l[6]=u*y+f*L+p*V,l[1]=h*E+v*b+_*z,l[4]=h*x+v*N+_*F,l[7]=h*y+v*L+_*V,l[2]=g*E+S*b+M*z,l[5]=g*x+S*N+M*F,l[8]=g*y+S*L+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8];return t*u*v-t*f*h-s*l*v+s*f*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8],_=v*u-f*h,g=f*p-v*l,S=h*l-u*p,M=t*_+s*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(o*h-v*s)*E,e[2]=(f*s-o*u)*E,e[3]=g*E,e[4]=(v*t-o*p)*E,e[5]=(o*l-f*t)*E,e[6]=S*E,e[7]=(s*p-h*t)*E,e[8]=(u*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(s*p,s*h,-s*(p*u+h*f)+u+e,-o*h,o*p,-o*(-h*u+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(nf.makeScale(e,t)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nf=new dt,Xm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WS(){const r={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?tc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return nc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return nc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ta]:{primaries:e,whitePoint:s,transfer:tc,toXYZ:Xm,fromXYZ:qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:s,transfer:Dt,toXYZ:Xm,fromXYZ:qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),r}const Tt=WS();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class jS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Us===void 0&&(Us=lo("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Us}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XS=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(rf(o[u].image)):l.push(rf(o[u]))}else l=rf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function rf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let qS=0;const sf=new le;class yn extends aa{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,s=Zi,o=Zi,l=xn,u=as,f=_i,p=Xn,h=yn.DEFAULT_ANISOTROPY,v=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=oa(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sf).x}get height(){return this.source.getSize(sf).y}get depth(){return this.source.getSize(sf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=u0;yn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,s=0,o=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,h=p[0],v=p[4],_=p[8],g=p[1],S=p[5],M=p[9],E=p[2],x=p[6],y=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,L=(S+1)/2,z=(y+1)/2,F=(v+g)/4,V=(_+E)/4,A=(M+x)/4;return N>L&&N>z?N<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(N),o=F/s,l=V/s):L>z?L<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),s=F/o,l=A/o):z<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),s=V/l,o=A/l),this.set(s,o,l,t),this}let b=Math.sqrt((x-M)*(x-M)+(_-E)*(_-E)+(g-v)*(g-v));return Math.abs(b)<.001&&(b=1),this.x=(x-M)/b,this.y=(_-E)/b,this.z=(g-v)/b,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $S extends aa{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new yn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Wd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends $S{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class y0 extends yn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YS extends yn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt{constructor(e,t,s,o,l,u,f,p,h,v,_,g,S,M,E,x){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,p,h,v,_,g,S,M,E,x)}set(e,t,s,o,l,u,f,p,h,v,_,g,S,M,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=p,y[2]=h,y[6]=v,y[10]=_,y[14]=g,y[3]=S,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),p=Math.cos(o),h=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*_,M=f*v,E=f*_;t[0]=p*v,t[4]=-p*_,t[8]=h,t[1]=S+M*h,t[5]=g-E*h,t[9]=-f*p,t[2]=E-g*h,t[6]=M+S*h,t[10]=u*p}else if(e.order==="YXZ"){const g=p*v,S=p*_,M=h*v,E=h*_;t[0]=g+E*f,t[4]=M*f-S,t[8]=u*h,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=S*f-M,t[6]=E+g*f,t[10]=u*p}else if(e.order==="ZXY"){const g=p*v,S=p*_,M=h*v,E=h*_;t[0]=g-E*f,t[4]=-u*_,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*v,t[9]=E-g*f,t[2]=-u*h,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const g=u*v,S=u*_,M=f*v,E=f*_;t[0]=p*v,t[4]=M*h-S,t[8]=g*h+E,t[1]=p*_,t[5]=E*h+g,t[9]=S*h-M,t[2]=-h,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const g=u*p,S=u*h,M=f*p,E=f*h;t[0]=p*v,t[4]=E-g*_,t[8]=M*_+S,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-h*v,t[6]=S*_+M,t[10]=g-E*_}else if(e.order==="XZY"){const g=u*p,S=u*h,M=f*p,E=f*h;t[0]=p*v,t[4]=-_,t[8]=h*v,t[1]=g*_+E,t[5]=u*v,t[9]=S*_-M,t[2]=M*_-S,t[6]=f*v,t[10]=E*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,ZS)}lookAt(e,t,s){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Er.crossVectors(s,Gn),Er.lengthSq()===0&&(Math.abs(s.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Er.crossVectors(s,Gn)),Er.normalize(),El.crossVectors(Gn,Er),o[0]=Er.x,o[4]=El.x,o[8]=Gn.x,o[1]=Er.y,o[5]=El.y,o[9]=Gn.y,o[2]=Er.z,o[6]=El.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],p=s[8],h=s[12],v=s[1],_=s[5],g=s[9],S=s[13],M=s[2],E=s[6],x=s[10],y=s[14],b=s[3],N=s[7],L=s[11],z=s[15],F=o[0],V=o[4],A=o[8],P=o[12],se=o[1],k=o[5],H=o[9],j=o[13],K=o[2],G=o[6],B=o[10],O=o[14],$=o[3],ee=o[7],ce=o[11],U=o[15];return l[0]=u*F+f*se+p*K+h*$,l[4]=u*V+f*k+p*G+h*ee,l[8]=u*A+f*H+p*B+h*ce,l[12]=u*P+f*j+p*O+h*U,l[1]=v*F+_*se+g*K+S*$,l[5]=v*V+_*k+g*G+S*ee,l[9]=v*A+_*H+g*B+S*ce,l[13]=v*P+_*j+g*O+S*U,l[2]=M*F+E*se+x*K+y*$,l[6]=M*V+E*k+x*G+y*ee,l[10]=M*A+E*H+x*B+y*ce,l[14]=M*P+E*j+x*O+y*U,l[3]=b*F+N*se+L*K+z*$,l[7]=b*V+N*k+L*G+z*ee,l[11]=b*A+N*H+L*B+z*ce,l[15]=b*P+N*j+L*O+z*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],v=e[2],_=e[6],g=e[10],S=e[14],M=e[3],E=e[7],x=e[11],y=e[15],b=p*S-h*g,N=f*S-h*_,L=f*g-p*_,z=u*S-h*v,F=u*g-p*v,V=u*_-f*v;return t*(E*b-x*N+y*L)-s*(M*b-x*z+y*F)+o*(M*N-E*z+y*V)-l*(M*L-E*F+x*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8],_=e[9],g=e[10],S=e[11],M=e[12],E=e[13],x=e[14],y=e[15],b=t*f-s*u,N=t*p-o*u,L=t*h-l*u,z=s*p-o*f,F=s*h-l*f,V=o*h-l*p,A=v*E-_*M,P=v*x-g*M,se=v*y-S*M,k=_*x-g*E,H=_*y-S*E,j=g*y-S*x,K=b*j-N*H+L*k+z*se-F*P+V*A;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/K;return e[0]=(f*j-p*H+h*k)*G,e[1]=(o*H-s*j-l*k)*G,e[2]=(E*V-x*F+y*z)*G,e[3]=(g*F-_*V-S*z)*G,e[4]=(p*se-u*j-h*P)*G,e[5]=(t*j-o*se+l*P)*G,e[6]=(x*L-M*V-y*N)*G,e[7]=(v*V-g*L+S*N)*G,e[8]=(u*H-f*se+h*A)*G,e[9]=(s*se-t*H-l*A)*G,e[10]=(M*F-E*L+y*b)*G,e[11]=(_*L-v*F-S*b)*G,e[12]=(f*P-u*k-p*A)*G,e[13]=(t*k-s*P+o*A)*G,e[14]=(E*N-M*z-x*b)*G,e[15]=(v*z-_*N+g*b)*G,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,p=e.z,h=l*u,v=l*f;return this.set(h*u+s,h*f-o*p,h*p+o*f,0,h*f+o*p,v*f+s,v*p-o*u,0,h*p-o*f,v*p+o*u,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,h=l+l,v=u+u,_=f+f,g=l*h,S=l*v,M=l*_,E=u*v,x=u*_,y=f*_,b=p*h,N=p*v,L=p*_,z=s.x,F=s.y,V=s.z;return o[0]=(1-(E+y))*z,o[1]=(S+L)*z,o[2]=(M-N)*z,o[3]=0,o[4]=(S-L)*F,o[5]=(1-(g+y))*F,o[6]=(x+b)*F,o[7]=0,o[8]=(M+N)*V,o[9]=(x-b)*V,o[10]=(1-(g+E))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=Fs.set(o[0],o[1],o[2]).length();const f=Fs.set(o[4],o[5],o[6]).length(),p=Fs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),hi.copy(this);const h=1/u,v=1/f,_=1/p;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=v,hi.elements[5]*=v,hi.elements[6]*=v,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,t.setFromRotationMatrix(hi),s.x=u,s.y=f,s.z=p,this}makePerspective(e,t,s,o,l,u,f=Ri,p=!1){const h=this.elements,v=2*l/(t-e),_=2*l/(s-o),g=(t+e)/(t-e),S=(s+o)/(s-o);let M,E;if(p)M=l/(u-l),E=u*l/(u-l);else if(f===Ri)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===oo)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Ri,p=!1){const h=this.elements,v=2/(t-e),_=2/(s-o),g=-(t+e)/(t-e),S=-(s+o)/(s-o);let M,E;if(p)M=1/(u-l),E=u/(u-l);else if(f===Ri)M=-2/(u-l),E=-(u+l)/(u-l);else if(f===oo)M=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Fs=new le,hi=new Wt,KS=new le(0,0,0),ZS=new le(1,1,1),Er=new le,El=new le,Gn=new le,$m=new Wt,Ym=new la;class Di{constructor(e=0,t=0,s=0,o=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],h=o[5],v=o[9],_=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JS=0;const Km=new le,Os=new la,Xi=new Wt,wl=new le,ja=new le,QS=new le,eM=new la,Zm=new le(1,0,0),Jm=new le(0,1,0),Qm=new le(0,0,1),eg={type:"added"},tM={type:"removed"},ks={type:"childadded",child:null},af={type:"childremoved",child:null};class dn extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new le,t=new Di,s=new la,o=new le(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new dt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?wl.copy(e):wl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ja,wl,this.up):Xi.lookAt(wl,ja,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Xi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tM),af.child=e,this.dispatchEvent(af),af.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,QS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(s.geometries=f),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=o,s;function u(f){const p=[];for(const h in f){const v=f[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}dn.DEFAULT_UP=new le(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tl extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,s),y=this._getHandJoint(h,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=v.position.distanceTo(_.position),S=.02,M=.005;h.inputState.pinching&&g>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Tl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function lf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Tt.workingColorSpace){if(e=Gd(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=lf(u,l,e+1/3),this.g=lf(u,l,e),this.b=lf(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=jn){function s(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const s=M0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Tt.workingToColorSpace(_n.copy(this),e),Math.round(_t(_n.r*255,0,255))*65536+Math.round(_t(_n.g*255,0,255))*256+Math.round(_t(_n.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(_n.copy(this),t);const s=_n.r,o=_n.g,l=_n.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let p,h;const v=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=v<=.5?_/(u+f):_/(2-u-f),u){case s:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-s)/_+2;break;case l:p=(s-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=jn){Tt.workingToColorSpace(_n.copy(this),e);const t=_n.r,s=_n.g,o=_n.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Al);const s=no(wr.h,Al.h,t),o=no(wr.s,Al.s,t),l=no(wr.l,Al.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new xt;xt.NAMES=M0;class iM extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new le,qi=new le,cf=new le,$i=new le,Bs=new le,zs=new le,tg=new le,uf=new le,ff=new le,df=new le,hf=new Xt,pf=new Xt,mf=new Xt;class vi{constructor(e=new le,t=new le,s=new le){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){pi.subVectors(o,t),qi.subVectors(s,t),cf.subVectors(e,t);const u=pi.dot(pi),f=pi.dot(qi),p=pi.dot(cf),h=qi.dot(qi),v=qi.dot(cf),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,S=(h*p-f*v)*g,M=(u*v-f*p)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,s,o,l,u,f,p){return this.getBarycoord(e,t,s,o,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,$i.x),p.addScaledVector(u,$i.y),p.addScaledVector(f,$i.z),p)}static getInterpolatedAttribute(e,t,s,o,l,u){return hf.setScalar(0),pf.setScalar(0),mf.setScalar(0),hf.fromBufferAttribute(e,t),pf.fromBufferAttribute(e,s),mf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(hf,l.x),u.addScaledVector(pf,l.y),u.addScaledVector(mf,l.z),u}static isFrontFacing(e,t,s,o){return pi.subVectors(s,t),qi.subVectors(e,t),pi.cross(qi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;Bs.subVectors(o,s),zs.subVectors(l,s),uf.subVectors(e,s);const p=Bs.dot(uf),h=zs.dot(uf);if(p<=0&&h<=0)return t.copy(s);ff.subVectors(e,o);const v=Bs.dot(ff),_=zs.dot(ff);if(v>=0&&_<=v)return t.copy(o);const g=p*_-v*h;if(g<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(s).addScaledVector(Bs,u);df.subVectors(e,l);const S=Bs.dot(df),M=zs.dot(df);if(M>=0&&S<=M)return t.copy(l);const E=S*h-p*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(s).addScaledVector(zs,f);const x=v*M-S*_;if(x<=0&&_-v>=0&&S-M>=0)return tg.subVectors(l,o),f=(_-v)/(_-v+(S-M)),t.copy(o).addScaledVector(tg,f);const y=1/(x+E+g);return u=E*y,f=g*y,t.copy(s).addScaledVector(Bs,u).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fo{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(l,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cl.copy(s.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),Rl.subVectors(this.max,Xa),Vs.subVectors(e.a,Xa),Hs.subVectors(e.b,Xa),Gs.subVectors(e.c,Xa),Tr.subVectors(Hs,Vs),Ar.subVectors(Gs,Hs),Zr.subVectors(Vs,Gs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Zr.z,Zr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Zr.z,0,-Zr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Zr.y,Zr.x,0];return!gf(t,Vs,Hs,Gs,Rl)||(t=[1,0,0,0,1,0,0,0,1],!gf(t,Vs,Hs,Gs,Rl))?!1:(bl.crossVectors(Tr,Ar),t=[bl.x,bl.y,bl.z],gf(t,Vs,Hs,Gs,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new le,new le,new le,new le,new le,new le,new le,new le],mi=new le,Cl=new fo,Vs=new le,Hs=new le,Gs=new le,Tr=new le,Ar=new le,Zr=new le,Xa=new le,Rl=new le,bl=new le,Jr=new le;function gf(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Jr.fromArray(r,l);const f=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),p=e.dot(Jr),h=t.dot(Jr),v=s.dot(Jr);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>f)return!1}return!0}const Qt=new le,Pl=new bt;let rM=0;class Ni{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Bm,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ys(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=An(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),s=An(s,this.array),o=An(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),s=An(s,this.array),o=An(o,this.array),l=An(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bm&&(e.usage=this.usage),e}}class E0 extends Ni{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class w0 extends Ni{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Rn extends Ni{constructor(e,t,s){super(new Float32Array(e),t,s)}}const sM=new fo,qa=new le,vf=new le;class uc{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):sM.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);const t=qa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(qa,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(vf)),this.expandByPoint(qa.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let aM=0;const ni=new Wt,_f=new dn,Ws=new le,Wn=new fo,$a=new fo,ln=new le;class si extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wS(e)?w0:E0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new dt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,s){return ni.makeTranslation(e,t,s),this.applyMatrix4(ni),this}scale(e,t,s){return ni.makeScale(e,t,s),this.applyMatrix4(ni),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Rn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];$a.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Wn.min,$a.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,$a.max),Wn.expandByPoint(ln)):(Wn.expandByPoint($a.min),Wn.expandByPoint($a.max))}Wn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,v=f.count;h<v;h++)ln.fromBufferAttribute(f,h),p&&(Ws.fromBufferAttribute(e,h),ln.add(Ws)),o=Math.max(o,s.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let A=0;A<s.count;A++)f[A]=new le,p[A]=new le;const h=new le,v=new le,_=new le,g=new bt,S=new bt,M=new bt,E=new le,x=new le;function y(A,P,se){h.fromBufferAttribute(s,A),v.fromBufferAttribute(s,P),_.fromBufferAttribute(s,se),g.fromBufferAttribute(l,A),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,se),v.sub(h),_.sub(h),S.sub(g),M.sub(g);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(E.copy(v).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(k),x.copy(_).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(k),f[A].add(E),f[P].add(E),f[se].add(E),p[A].add(x),p[P].add(x),p[se].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,P=b.length;A<P;++A){const se=b[A],k=se.start,H=se.count;for(let j=k,K=k+H;j<K;j+=3)y(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const N=new le,L=new le,z=new le,F=new le;function V(A){z.fromBufferAttribute(o,A),F.copy(z);const P=f[A];N.copy(P),N.sub(z.multiplyScalar(z.dot(P))).normalize(),L.crossVectors(F,P);const k=L.dot(p[A])<0?-1:1;u.setXYZW(A,N.x,N.y,N.z,k)}for(let A=0,P=b.length;A<P;++A){const se=b[A],k=se.start,H=se.count;for(let j=k,K=k+H;j<K;j+=3)V(e.getX(j+0)),V(e.getX(j+1)),V(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const o=new le,l=new le,u=new le,f=new le,p=new le,h=new le,v=new le,_=new le;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),E=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,E),h.fromBufferAttribute(s,x),f.add(v),p.add(v),h.add(v),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,p){const h=f.array,v=f.itemSize,_=f.normalized,g=new h.constructor(p.length*v);let S=0,M=0;for(let E=0,x=p.length;E<x;E++){f.isInterleavedBufferAttribute?S=p[E]*f.data.stride+f.offset:S=p[E]*v;for(let y=0;y<v;y++)g[M++]=h[S++]}return new Ni(g,v,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,s=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,s);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let v=0,_=h.length;v<_;v++){const g=h[v],S=e(g,s);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const h=s[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let _=0,g=h.length;_<g;_++){const S=h[_];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(t))}const l=e.morphAttributes;for(const h in l){const v=[],_=l[h];for(let g=0,S=_.length;g<S;g++)v.push(_[g].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,v=u.length;h<v;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oM=0;class ca extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Ks,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Of,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==Dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ff&&(s.blendSrc=this.blendSrc),this.blendDst!==Of&&(s.blendDst=this.blendDst),this.blendEquation!==rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==km&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ki=new le,xf=new le,Nl=new le,Cr=new le,yf=new le,Ll=new le,Sf=new le;class T0{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){xf.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(xf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Nl),f=Cr.dot(this.direction),p=-Cr.dot(Nl),h=Cr.lengthSq(),v=Math.abs(1-u*u);let _,g,S,M;if(v>0)if(_=u*p-f,g=u*f-p,M=l*v,_>=0)if(g>=-M)if(g<=M){const E=1/v;_*=E,g*=E,S=_*(_+u*g+2*f)+g*(u*_+g+2*p)+h}else g=l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*p)+h;else g=-l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*p)+h;else g<=-M?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+g*(g+2*p)+h):g<=M?(_=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+h):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+g*(g+2*p)+h);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(xf).addScaledVector(Nl,g),S}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),o=Ki.dot(Ki)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,p=s+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,p;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),s>p||f>o)||((f>s||s!==s)&&(s=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,s,o,l){yf.subVectors(t,e),Ll.subVectors(s,e),Sf.crossVectors(yf,Ll);let u=this.direction.dot(Sf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Cr.subVectors(this.origin,e);const p=f*this.direction.dot(Ll.crossVectors(Cr,Ll));if(p<0)return null;const h=f*this.direction.dot(yf.cross(Cr));if(h<0||p+h>u)return null;const v=-f*Cr.dot(Sf);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jd extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=n0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ng=new Wt,Qr=new T0,Dl=new uc,ig=new le,Il=new le,Ul=new le,Fl=new le,Mf=new le,Ol=new le,rg=new le,kl=new le;class Ii extends dn{constructor(e=new si,t=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ol.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const v=f[p],_=l[p];v!==0&&(Mf.fromBufferAttribute(_,e),u?Ol.addScaledVector(Mf,v):Ol.addScaledVector(Mf.sub(t),v))}t.add(Ol)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dl.copy(s.boundingSphere),Dl.applyMatrix4(l),Qr.copy(e.ray).recast(e.near),!(Dl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Dl,ig)===null||Qr.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(l).invert(),Qr.copy(e.ray).applyMatrix4(ng),!(s.boundingBox!==null&&Qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=u[x.materialIndex],b=Math.max(x.start,S.start),N=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let L=b,z=N;L<z;L+=3){const F=f.getX(L),V=f.getX(L+1),A=f.getX(L+2);o=Bl(this,y,e,s,h,v,_,F,V,A),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const b=f.getX(x),N=f.getX(x+1),L=f.getX(x+2);o=Bl(this,u,e,s,h,v,_,b,N,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=u[x.materialIndex],b=Math.max(x.start,S.start),N=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let L=b,z=N;L<z;L+=3){const F=L,V=L+1,A=L+2;o=Bl(this,y,e,s,h,v,_,F,V,A),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(p.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const b=x,N=x+1,L=x+2;o=Bl(this,u,e,s,h,v,_,b,N,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function lM(r,e,t,s,o,l,u,f){let p;if(e.side===On?p=s.intersectTriangle(u,l,o,!0,f):p=s.intersectTriangle(o,l,u,e.side===Dr,f),p===null)return null;kl.copy(f),kl.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(kl);return h<t.near||h>t.far?null:{distance:h,point:kl.clone(),object:r}}function Bl(r,e,t,s,o,l,u,f,p,h){r.getVertexPosition(f,Il),r.getVertexPosition(p,Ul),r.getVertexPosition(h,Fl);const v=lM(r,e,t,s,Il,Ul,Fl,rg);if(v){const _=new le;vi.getBarycoord(rg,Il,Ul,Fl,_),o&&(v.uv=vi.getInterpolatedAttribute(o,f,p,h,_,new bt)),l&&(v.uv1=vi.getInterpolatedAttribute(l,f,p,h,_,new bt)),u&&(v.normal=vi.getInterpolatedAttribute(u,f,p,h,_,new le),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:p,c:h,normal:new le,materialIndex:0};vi.getNormal(Il,Ul,Fl,g.normal),v.face=g,v.barycoord=_}return v}class cM extends yn{constructor(e=null,t=1,s=1,o,l,u,f,p,h=fn,v=fn,_,g){super(null,u,f,p,h,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ef=new le,uM=new le,fM=new dt;class is{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Ef.subVectors(s,t).cross(uM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Ef),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||fM.getNormalMatrix(e),o=this.coplanarPoint(Ef).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new uc,dM=new bt(.5,.5),zl=new le;class Xd{constructor(e=new is,t=new is,s=new is,o=new is,l=new is,u=new is){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ri,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],h=l[3],v=l[4],_=l[5],g=l[6],S=l[7],M=l[8],E=l[9],x=l[10],y=l[11],b=l[12],N=l[13],L=l[14],z=l[15];if(o[0].setComponents(h-u,S-v,y-M,z-b).normalize(),o[1].setComponents(h+u,S+v,y+M,z+b).normalize(),o[2].setComponents(h+f,S+_,y+E,z+N).normalize(),o[3].setComponents(h-f,S-_,y-E,z-N).normalize(),s)o[4].setComponents(p,g,x,L).normalize(),o[5].setComponents(h-p,S-g,y-x,z-L).normalize();else if(o[4].setComponents(h-p,S-g,y-x,z-L).normalize(),t===Ri)o[5].setComponents(h+p,S+g,y+x,z+L).normalize();else if(t===oo)o[5].setComponents(p,g,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=dM.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(zl.x=o.normal.x>0?e.max.x:e.min.x,zl.y=o.normal.y>0?e.max.y:e.min.y,zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qd extends ca{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new le,rc=new le,sg=new Wt,Ya=new T0,Vl=new uc,wf=new le,ag=new le;class hM extends dn{constructor(e=new si,t=new qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)ic.fromBufferAttribute(t,o-1),rc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new Rn(s,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vl.copy(s.boundingSphere),Vl.applyMatrix4(o),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;sg.copy(o).invert(),Ya.copy(e.ray).applyMatrix4(sg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const S=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let E=S,x=M-1;E<x;E+=h){const y=v.getX(E),b=v.getX(E+1),N=Hl(this,e,Ya,p,y,b,E);N&&t.push(N)}if(this.isLineLoop){const E=v.getX(M-1),x=v.getX(S),y=Hl(this,e,Ya,p,E,x,M-1);y&&t.push(y)}}else{const S=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=S,x=M-1;E<x;E+=h){const y=Hl(this,e,Ya,p,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=Hl(this,e,Ya,p,M-1,S,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Hl(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(ic.fromBufferAttribute(f,o),rc.fromBufferAttribute(f,l),t.distanceSqToSegment(ic,rc,wf,ag)>s)return;wf.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(wf);if(!(h<e.near||h>e.far))return{distance:h,point:ag.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const og=new le,lg=new le;class A0 extends hM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)og.fromBufferAttribute(t,o),lg.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+og.distanceTo(lg);e.setAttribute("lineDistance",new Rn(s,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C0 extends yn{constructor(e=[],t=cs,s,o,l,u,f,p,h,v){super(e,t,s,o,l,u,f,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uo extends yn{constructor(e,t,s=Li,o,l,u,f=fn,p=fn,h,v=tr,_=1){if(v!==tr&&v!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,u,f,p,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pM extends uo{constructor(e,t=Li,s=cs,o,l,u=fn,f=fn,p,h=tr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,s,o,l,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class R0 extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ho extends si{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],v=[],_=[];let g=0,S=0;M("z","y","x",-1,-1,s,t,e,u,l,0),M("z","y","x",1,-1,s,t,-e,u,l,1),M("x","z","y",1,1,e,s,t,o,u,2),M("x","z","y",1,-1,e,s,-t,o,u,3),M("x","y","z",1,-1,e,t,s,o,l,4),M("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new Rn(h,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(_,2));function M(E,x,y,b,N,L,z,F,V,A,P){const se=L/V,k=z/A,H=L/2,j=z/2,K=F/2,G=V+1,B=A+1;let O=0,$=0;const ee=new le;for(let ce=0;ce<B;ce++){const U=ce*k-j;for(let te=0;te<G;te++){const ve=te*se-H;ee[E]=ve*b,ee[x]=U*N,ee[y]=K,h.push(ee.x,ee.y,ee.z),ee[E]=0,ee[x]=0,ee[y]=F>0?1:-1,v.push(ee.x,ee.y,ee.z),_.push(te/V),_.push(1-ce/A),O+=1}}for(let ce=0;ce<A;ce++)for(let U=0;U<V;U++){const te=g+U+G*ce,ve=g+U+G*(ce+1),Re=g+(U+1)+G*(ce+1),Pe=g+(U+1)+G*ce;p.push(te,ve,Pe),p.push(ve,Re,Pe),$+=6}f.addGroup(S,$,P),S+=$,g+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ls extends si{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),p=Math.floor(o),h=f+1,v=p+1,_=e/f,g=t/p,S=[],M=[],E=[],x=[];for(let y=0;y<v;y++){const b=y*g-u;for(let N=0;N<h;N++){const L=N*_-l;M.push(L,-b,0),E.push(0,0,1),x.push(N/f),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let b=0;b<f;b++){const N=b+h*y,L=b+h*(y+1),z=b+1+h*(y+1),F=b+1+h*y;S.push(N,L,F),S.push(L,z,F)}this.setIndex(S),this.setAttribute("position",new Rn(M,3)),this.setAttribute("normal",new Rn(E,3)),this.setAttribute("uv",new Rn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}function na(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const s=na(r[t]);for(const o in s)e[o]=s[o]}return e}function mM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function b0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const gM={clone:na,merge:Cn};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=mM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class xM extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yM extends ca{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_0,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class SM extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MM extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(cg(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!cg(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function cg(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class EM{constructor(e,t,s){const o=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,f),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return h.push(v,_),this},this.removeHandler=function(v){const _=h.indexOf(v);return _!==-1&&h.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=h.length;_<g;_+=2){const S=h[_],M=h[_+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wM=new EM;class $d{constructor(e){this.manager=e!==void 0?e:wM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,l){s.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$d.DEFAULT_MATERIAL_NAME="__DEFAULT";const js=new WeakMap;class TM extends $d{constructor(e){super(e)}load(e,t,s,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Tf.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let _=js.get(u);_===void 0&&(_=[],js.set(u,_)),_.push({onLoad:t,onError:o})}return u}const f=lo("img");function p(){v(),t&&t(this);const _=js.get(this)||[];for(let g=0;g<_.length;g++){const S=_[g];S.onLoad&&S.onLoad(this)}js.delete(this),l.manager.itemEnd(e)}function h(_){v(),o&&o(_),Tf.remove(`image:${e}`);const g=js.get(this)||[];for(let S=0;S<g.length;S++){const M=g[S];M.onError&&M.onError(_)}js.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Tf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class AM extends $d{constructor(e){super(e)}load(e,t,s,o){const l=new yn,u=new TM(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,o),l}}class P0 extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Af=new Wt,ug=new le,fg=new le;class CM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(ug),fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fg),t.updateMatrixWorld(),Af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===oo||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gl=new le,Wl=new la,wi=new le;class N0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Wl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Gl,Wl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new le,dg=new bt,hg=new bt;class ii extends N0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,dg,hg),t.subVectors(hg,dg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*s/h,o*=u.width/p,s*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yd extends N0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class RM extends CM{constructor(){super(new Yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bM extends P0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new RM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class PM extends P0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,qs=1;class NM extends dn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Xs,qs,e,t);o.layers=this.layers,this.add(o);const l=new ii(Xs,qs,e,t);l.layers=this.layers,this.add(l);const u=new ii(Xs,qs,e,t);u.layers=this.layers,this.add(u);const f=new ii(Xs,qs,e,t);f.layers=this.layers,this.add(f);const p=new ii(Xs,qs,e,t);p.layers=this.layers,this.add(p);const h=new ii(Xs,qs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,p]=t;for(const h of t)this.remove(h);if(e===Ri)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===oo)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class LM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class DM extends A0{constructor(e=10,t=10,s=4473924,o=8947848){s=new xt(s),o=new xt(o);const l=t/2,u=e/t,f=e/2,p=[],h=[];for(let g=0,S=0,M=-f;g<=t;g++,M+=u){p.push(-f,0,M,f,0,M),p.push(M,0,-f,M,0,f);const E=g===l?s:o;E.toArray(h,S),S+=3,E.toArray(h,S),S+=3,E.toArray(h,S),S+=3,E.toArray(h,S),S+=3}const v=new si;v.setAttribute("position",new Rn(p,3)),v.setAttribute("color",new Rn(h,3));const _=new qd({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class IM extends A0{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new si;o.setAttribute("position",new Rn(t,3)),o.setAttribute("color",new Rn(s,3));const l=new qd({vertexColors:!0,toneMapped:!1});super(o,l),this.type="AxesHelper"}setColors(e,t,s){const o=new xt,l=this.geometry.attributes.color.array;return o.set(e),o.toArray(l,0),o.toArray(l,3),o.set(t),o.toArray(l,6),o.toArray(l,9),o.set(s),o.toArray(l,12),o.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function pg(r,e,t,s){const o=UM(s);switch(t){case m0:return r*e;case v0:return r*e/o.components*o.byteLength;case kd:return r*e/o.components*o.byteLength;case ea:return r*e*2/o.components*o.byteLength;case Bd:return r*e*2/o.components*o.byteLength;case g0:return r*e*3/o.components*o.byteLength;case _i:return r*e*4/o.components*o.byteLength;case zd:return r*e*4/o.components*o.byteLength;case $l:case Yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $f:case Kf:return Math.max(r,16)*Math.max(e,8)/4;case qf:case Yf:return Math.max(r,8)*Math.max(e,8)/2;case Zf:case Jf:case ed:case td:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qf:case nd:case id:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case _d:case xd:case yd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sd:case Md:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ed:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function UM(r){switch(r){case Xn:case f0:return{byteLength:1,components:1};case so:case d0:case er:return{byteLength:2,components:1};case Fd:case Od:return{byteLength:2,components:4};case Li:case Ud:case Ci:return{byteLength:4,components:1};case h0:case p0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);function L0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function FM(r){const e=new WeakMap;function t(f,p){const h=f.array,v=f.usage,_=h.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,h,v),f.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function s(f,p,h){const v=p.array,_=p.updateRanges;if(r.bindBuffer(h,f),_.length===0)r.bufferSubData(h,0,v);else{_.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<_.length;S++){const M=_[g],E=_[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,_[g]=E)}_.length=g+1;for(let S=0,M=_.length;S<M;S++){const E=_[S];r.bufferSubData(h,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,p),h.version=f.version}}return{get:o,remove:l,update:u}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kM=`#ifdef USE_ALPHAHASH
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
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
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
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`#define PI 3.141592653589793
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
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lE=`vec3 transformedNormal = objectNormal;
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
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,_E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wE=`#ifdef USE_GRADIENTMAP
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
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
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
#endif`,bE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,PE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,UE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XE=`#if defined( USE_POINTS_UV )
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
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
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
#endif`,QE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O1=`uniform sampler2D t2D;
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`#include <common>
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
}`,G1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
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
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,Z1=`uniform vec3 diffuse;
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
}`,J1=`#define LAMBERT
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
}`,Q1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ew=`#define MATCAP
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
}`,tw=`#define MATCAP
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
}`,nw=`#define NORMAL
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
}`,iw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rw=`#define PHONG
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
}`,sw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,aw=`#define STANDARD
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
}`,ow=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,lw=`#define TOON
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
}`,cw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,uw=`uniform float size;
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
}`,fw=`uniform vec3 diffuse;
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
}`,dw=`#include <common>
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
}`,hw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,pw=`uniform float rotation;
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
}`,mw=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:OM,alphahash_pars_fragment:kM,alphamap_fragment:BM,alphamap_pars_fragment:zM,alphatest_fragment:VM,alphatest_pars_fragment:HM,aomap_fragment:GM,aomap_pars_fragment:WM,batching_pars_vertex:jM,batching_vertex:XM,begin_vertex:qM,beginnormal_vertex:$M,bsdfs:YM,iridescence_fragment:KM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:eE,clipping_planes_vertex:tE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:rE,color_vertex:sE,common:aE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:lE,displacementmap_pars_vertex:cE,displacementmap_vertex:uE,emissivemap_fragment:fE,emissivemap_pars_fragment:dE,colorspace_fragment:hE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:vE,envmap_pars_vertex:_E,envmap_physical_pars_fragment:bE,envmap_vertex:xE,fog_vertex:yE,fog_pars_vertex:SE,fog_fragment:ME,fog_pars_fragment:EE,gradientmap_pars_fragment:wE,lightmap_pars_fragment:TE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:CE,lights_pars_begin:RE,lights_toon_fragment:PE,lights_toon_pars_fragment:NE,lights_phong_fragment:LE,lights_phong_pars_fragment:DE,lights_physical_fragment:IE,lights_physical_pars_fragment:UE,lights_fragment_begin:FE,lights_fragment_maps:OE,lights_fragment_end:kE,logdepthbuf_fragment:BE,logdepthbuf_pars_fragment:zE,logdepthbuf_pars_vertex:VE,logdepthbuf_vertex:HE,map_fragment:GE,map_pars_fragment:WE,map_particle_fragment:jE,map_particle_pars_fragment:XE,metalnessmap_fragment:qE,metalnessmap_pars_fragment:$E,morphinstance_vertex:YE,morphcolor_vertex:KE,morphnormal_vertex:ZE,morphtarget_pars_vertex:JE,morphtarget_vertex:QE,normal_fragment_begin:e1,normal_fragment_maps:t1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:r1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:u1,packing:f1,premultiplied_alpha_fragment:d1,project_vertex:h1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:x1,shadowmap_vertex:y1,shadowmask_pars_fragment:S1,skinbase_vertex:M1,skinning_pars_vertex:E1,skinning_vertex:w1,skinnormal_vertex:T1,specularmap_fragment:A1,specularmap_pars_fragment:C1,tonemapping_fragment:R1,tonemapping_pars_fragment:b1,transmission_fragment:P1,transmission_pars_fragment:N1,uv_pars_fragment:L1,uv_pars_vertex:D1,uv_vertex:I1,worldpos_vertex:U1,background_vert:F1,background_frag:O1,backgroundCube_vert:k1,backgroundCube_frag:B1,cube_vert:z1,cube_frag:V1,depth_vert:H1,depth_frag:G1,distance_vert:W1,distance_frag:j1,equirect_vert:X1,equirect_frag:q1,linedashed_vert:$1,linedashed_frag:Y1,meshbasic_vert:K1,meshbasic_frag:Z1,meshlambert_vert:J1,meshlambert_frag:Q1,meshmatcap_vert:ew,meshmatcap_frag:tw,meshnormal_vert:nw,meshnormal_frag:iw,meshphong_vert:rw,meshphong_frag:sw,meshphysical_vert:aw,meshphysical_frag:ow,meshtoon_vert:lw,meshtoon_frag:cw,points_vert:uw,points_frag:fw,shadow_vert:dw,shadow_frag:hw,sprite_vert:pw,sprite_frag:mw},De={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ai={basic:{uniforms:Cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Cn([De.common,De.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Cn([De.lights,De.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ai.physical={uniforms:Cn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const jl={r:0,b:0,g:0},ts=new Di,gw=new Wt;function vw(r,e,t,s,o,l){const u=new xt(0);let f=o===!0?0:1,p,h,v=null,_=0,g=null;function S(b){let N=b.isScene===!0?b.background:null;if(N&&N.isTexture){const L=b.backgroundBlurriness>0;N=e.get(N,L)}return N}function M(b){let N=!1;const L=S(b);L===null?x(u,f):L&&L.isColor&&(x(L,1),N=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function E(b,N){const L=S(N);L&&(L.isCubeTexture||L.mapping===cc)?(h===void 0&&(h=new Ii(new ho(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:na(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(N.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gw.makeRotationFromEuler(ts)),h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Dt,(v!==L||_!==L.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=L,_=L.version,g=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Ii(new ls(2,2),new Ui({name:"BackgroundMaterial",uniforms:na(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(L.colorSpace)!==Dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||_!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=L,_=L.version,g=r.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function x(b,N){b.getRGB(jl,b0(r)),t.buffers.color.setClear(jl.r,jl.g,jl.b,N,l)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,N=1){u.set(b),f=N,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,x(u,f)},render:M,addToRenderList:E,dispose:y}}function _w(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,u=!1;function f(k,H,j,K,G){let B=!1;const O=_(k,K,j,H);l!==O&&(l=O,h(l.object)),B=S(k,K,j,G),B&&M(k,K,j,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,L(k,H,j,K),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function p(){return r.createVertexArray()}function h(k){return r.bindVertexArray(k)}function v(k){return r.deleteVertexArray(k)}function _(k,H,j,K){const G=K.wireframe===!0;let B=s[H.id];B===void 0&&(B={},s[H.id]=B);const O=k.isInstancedMesh===!0?k.id:0;let $=B[O];$===void 0&&($={},B[O]=$);let ee=$[j.id];ee===void 0&&(ee={},$[j.id]=ee);let ce=ee[G];return ce===void 0&&(ce=g(p()),ee[G]=ce),ce}function g(k){const H=[],j=[],K=[];for(let G=0;G<t;G++)H[G]=0,j[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:K,object:k,attributes:{},index:null}}function S(k,H,j,K){const G=l.attributes,B=H.attributes;let O=0;const $=j.getAttributes();for(const ee in $)if($[ee].location>=0){const U=G[ee];let te=B[ee];if(te===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(te=k.instanceColor)),U===void 0||U.attribute!==te||te&&U.data!==te.data)return!0;O++}return l.attributesNum!==O||l.index!==K}function M(k,H,j,K){const G={},B=H.attributes;let O=0;const $=j.getAttributes();for(const ee in $)if($[ee].location>=0){let U=B[ee];U===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const te={};te.attribute=U,U&&U.data&&(te.data=U.data),G[ee]=te,O++}l.attributes=G,l.attributesNum=O,l.index=K}function E(){const k=l.newAttributes;for(let H=0,j=k.length;H<j;H++)k[H]=0}function x(k){y(k,0)}function y(k,H){const j=l.newAttributes,K=l.enabledAttributes,G=l.attributeDivisors;j[k]=1,K[k]===0&&(r.enableVertexAttribArray(k),K[k]=1),G[k]!==H&&(r.vertexAttribDivisor(k,H),G[k]=H)}function b(){const k=l.newAttributes,H=l.enabledAttributes;for(let j=0,K=H.length;j<K;j++)H[j]!==k[j]&&(r.disableVertexAttribArray(j),H[j]=0)}function N(k,H,j,K,G,B,O){O===!0?r.vertexAttribIPointer(k,H,j,G,B):r.vertexAttribPointer(k,H,j,K,G,B)}function L(k,H,j,K){E();const G=K.attributes,B=j.getAttributes(),O=H.defaultAttributeValues;for(const $ in B){const ee=B[$];if(ee.location>=0){let ce=G[$];if(ce===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),ce!==void 0){const U=ce.normalized,te=ce.itemSize,ve=e.get(ce);if(ve===void 0)continue;const Re=ve.buffer,Pe=ve.type,ne=ve.bytesPerElement,pe=Pe===r.INT||Pe===r.UNSIGNED_INT||ce.gpuType===Ud;if(ce.isInterleavedBufferAttribute){const me=ce.data,Ie=me.stride,ze=ce.offset;if(me.isInstancedInterleavedBuffer){for(let it=0;it<ee.locationSize;it++)y(ee.location+it,me.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let it=0;it<ee.locationSize;it++)x(ee.location+it);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let it=0;it<ee.locationSize;it++)N(ee.location+it,te/ee.locationSize,Pe,U,Ie*ne,(ze+te/ee.locationSize*it)*ne,pe)}else{if(ce.isInstancedBufferAttribute){for(let me=0;me<ee.locationSize;me++)y(ee.location+me,ce.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<ee.locationSize;me++)x(ee.location+me);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let me=0;me<ee.locationSize;me++)N(ee.location+me,te/ee.locationSize,Pe,U,te*ne,te/ee.locationSize*me*ne,pe)}}else if(O!==void 0){const U=O[$];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(ee.location,U);break;case 3:r.vertexAttrib3fv(ee.location,U);break;case 4:r.vertexAttrib4fv(ee.location,U);break;default:r.vertexAttrib1fv(ee.location,U)}}}}b()}function z(){P();for(const k in s){const H=s[k];for(const j in H){const K=H[j];for(const G in K){const B=K[G];for(const O in B)v(B[O].object),delete B[O];delete K[G]}}delete s[k]}}function F(k){if(s[k.id]===void 0)return;const H=s[k.id];for(const j in H){const K=H[j];for(const G in K){const B=K[G];for(const O in B)v(B[O].object),delete B[O];delete K[G]}}delete s[k.id]}function V(k){for(const H in s){const j=s[H];for(const K in j){const G=j[K];if(G[k.id]===void 0)continue;const B=G[k.id];for(const O in B)v(B[O].object),delete B[O];delete G[k.id]}}}function A(k){for(const H in s){const j=s[H],K=k.isInstancedMesh===!0?k.id:0,G=j[K];if(G!==void 0){for(const B in G){const O=G[B];for(const $ in O)v(O[$].object),delete O[$];delete G[B]}delete j[K],Object.keys(j).length===0&&delete s[H]}}}function P(){se(),u=!0,l!==o&&(l=o,h(l.object))}function se(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:P,resetDefaultState:se,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:x,disableUnusedAttributes:b}}function xw(r,e,t){let s;function o(h){s=h}function l(h,v){r.drawArrays(s,h,v),t.update(v,s,1)}function u(h,v,_){_!==0&&(r.drawArraysInstanced(s,h,v,_),t.update(v,s,_))}function f(h,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,v,0,_);let S=0;for(let M=0;M<_;M++)S+=v[M];t.update(S,s,1)}function p(h,v,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],v[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,v,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=v[E]*g[E];t.update(M,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function yw(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(V){return!(V!==_i&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(V){const A=V===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Xn&&s.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ci&&!A)}function p(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=p(h);v!==h&&(lt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:L,maxSamples:z,samples:F}}function Sw(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new is,f=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||s!==0||o;return o=g,s=_.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,S){const M=_.clippingPlanes,E=_.clipIntersection,x=_.clipShadows,y=r.get(_);if(!o||M===null||M.length===0||l&&!x)l?v(null):h();else{const b=l?0:s,N=b*4;let L=y.clippingState||null;p.value=L,L=v(M,g,N,S);for(let z=0;z!==N;++z)L[z]=t[z];y.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,g,S,M){const E=_!==null?_.length:0;let x=null;if(E!==0){if(x=p.value,M!==!0||x===null){const y=S+E*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(x===null||x.length<y)&&(x=new Float32Array(y));for(let N=0,L=S;N!==E;++N,L+=4)u.copy(_[N]).applyMatrix4(b,f),u.normal.toArray(x,L),x[L+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const Nr=4,mg=[.125,.215,.35,.446,.526,.582],ss=20,Mw=256,Ka=new Yd,gg=new xt;let Cf=null,Rf=0,bf=0,Pf=!1;const Ew=new le;class vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=Ew}=l;Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,bf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:er,format:_i,colorSpace:ta,depthBuffer:!1},o=_g(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ww(l)),this._blurMaterial=Aw(l,e,t),this._ggxMaterial=Tw(l,e,t)}return o}_compileMaterial(e){const t=new Ii(new si,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,s,o,l){const p=new ii(90,1,t,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(gg),_.toneMapping=bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new ho,new jd({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let y=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,y=!0):(x.color.copy(gg),y=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(p.up.set(0,h[N],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[N],l.y,l.z)):L===1?(p.up.set(0,0,h[N]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[N],l.z)):(p.up.set(0,h[N],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[N]));const z=this._cubeSize;$s(o,L*z,N>2?z:0,z,z),_.setRenderTarget(o),y&&_.render(E,p),_.render(e,p)}_.toneMapping=S,_.autoClear=g,e.background=b}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===cs||e.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;$s(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(u,Ka)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const p=u.uniforms,h=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),g=0+h*1.25,S=_*g,{_lodMax:M}=this,E=this._sizeLods[s],x=3*E*(s>M-Nr?s-M+Nr:0),y=4*(this._cubeSize-E);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=M-t,$s(l,x,y,3*E,2*E),o.setRenderTarget(l),o.render(f,Ka),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-s,$s(e,x,y,3*E,2*E),o.setRenderTarget(e),o.render(f,Ka)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=h;const g=h.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ss-1),E=l/M,x=isFinite(l)?1+Math.floor(v*E):ss;x>ss&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ss}`);const y=[];let b=0;for(let V=0;V<ss;++V){const A=V/E,P=Math.exp(-A*A/2);y.push(P),V===0?b+=P:V<x&&(b+=2*P)}for(let V=0;V<y.length;V++)y[V]=y[V]/b;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:N}=this;g.dTheta.value=M,g.mipInt.value=N-s;const L=this._sizeLods[o],z=3*L*(o>N-Nr?o-N+Nr:0),F=4*(this._cubeSize-L);$s(t,z,F,3*L,2*L),p.setRenderTarget(t),p.render(_,Ka)}}function ww(r){const e=[],t=[],s=[];let o=r;const l=r-Nr+1+mg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let p=1/f;u>r-Nr?p=mg[u-r+Nr-1]:u===0&&(p=0),t.push(p);const h=1/(f-2),v=-h,_=1+h,g=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,M=6,E=3,x=2,y=1,b=new Float32Array(E*M*S),N=new Float32Array(x*M*S),L=new Float32Array(y*M*S);for(let F=0;F<S;F++){const V=F%3*2/3-1,A=F>2?0:-1,P=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];b.set(P,E*M*F),N.set(g,x*M*F);const se=[F,F,F,F,F,F];L.set(se,y*M*F)}const z=new si;z.setAttribute("position",new Ni(b,E)),z.setAttribute("uv",new Ni(N,x)),z.setAttribute("faceIndex",new Ni(L,y)),s.push(new Ii(z,null)),o>Nr&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function _g(r,e,t){const s=new Pi(r,e,t);return s.texture.mapping=cc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $s(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function Tw(r,e,t){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Aw(r,e,t){const s=new Float32Array(ss),o=new le(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function xg(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function yg(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}class D0 extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new C0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ho(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:na(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:On,blending:Ji});l.uniforms.tEquirect.value=t;const u=new Ii(o,l),f=t.minFilter;return t.minFilter===as&&(t.minFilter=xn),new NM(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function Cw(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Ju||S===Qu)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new D0(M.height);return E.fromEquirectangularTexture(r,g),e.set(g,E),g.addEventListener("dispose",h),f(E.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,M=S===Ju||S===Qu,E=S===cs||S===Qs;if(M||E){let x=t.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new vg(r)),x=M?s.fromEquirectangular(g,x):s.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const b=g.image;return M&&b&&b.height>0||E&&b&&p(b)?(s===null&&(s=new vg(r)),x=M?s.fromEquirectangular(g):s.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function f(g,S){return S===Ju?g.mapping=cs:S===Qu&&(g.mapping=Qs),g}function p(g){let S=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&S++;return S===M}function h(g){const S=g.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function Rw(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&nc("WebGLRenderer: "+s+" extension not supported."),o}}}function bw(r,e,t,s){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function h(_){const g=[],S=_.index,M=_.attributes.position;let E=0;if(M===void 0)return;if(S!==null){const b=S.array;E=S.version;for(let N=0,L=b.length;N<L;N+=3){const z=b[N+0],F=b[N+1],V=b[N+2];g.push(z,F,F,V,V,z)}}else{const b=M.array;E=M.version;for(let N=0,L=b.length/3-1;N<L;N+=3){const z=N+0,F=N+1,V=N+2;g.push(z,F,F,V,V,z)}}const x=new(M.count>=65535?w0:E0)(g,1);x.version=E;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function v(_){const g=l.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function Pw(r,e,t){let s;function o(g){s=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function p(g,S){r.drawElements(s,S,l,g*u),t.update(S,s,1)}function h(g,S,M){M!==0&&(r.drawElementsInstanced(s,S,l,g*u,M),t.update(S,s,M))}function v(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,g,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];t.update(x,s,1)}function _(g,S,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)h(g[y]/u,S[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,l,g,0,E,0,M);let y=0;for(let b=0;b<M;b++)y+=S[b]*E[b];t.update(y,s,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function Nw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function Lw(r,e,t){const s=new WeakMap,o=new Xt;function l(u,f,p){const h=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(f);if(g===void 0||g.count!==_){let se=function(){A.dispose(),s.delete(f),f.removeEventListener("dispose",se)};var S=se;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let L=0;M===!0&&(L=1),E===!0&&(L=2),x===!0&&(L=3);let z=f.attributes.position.count*L,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const V=new Float32Array(z*F*4*_),A=new y0(V,z,F,_);A.type=Ci,A.needsUpdate=!0;const P=L*4;for(let k=0;k<_;k++){const H=y[k],j=b[k],K=N[k],G=z*F*4*k;for(let B=0;B<H.count;B++){const O=B*P;M===!0&&(o.fromBufferAttribute(H,B),V[G+O+0]=o.x,V[G+O+1]=o.y,V[G+O+2]=o.z,V[G+O+3]=0),E===!0&&(o.fromBufferAttribute(j,B),V[G+O+4]=o.x,V[G+O+5]=o.y,V[G+O+6]=o.z,V[G+O+7]=0),x===!0&&(o.fromBufferAttribute(K,B),V[G+O+8]=o.x,V[G+O+9]=o.y,V[G+O+10]=o.z,V[G+O+11]=K.itemSize===4?o.w:1)}}g={count:_,texture:A,size:new bt(z,F)},s.set(f,g),f.addEventListener("dispose",se)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const E=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",E),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function Dw(r,e,t,s,o){let l=new WeakMap;function u(h){const v=o.render.frame,_=h.geometry,g=e.get(h,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==v&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),l.set(h,v))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const Iw={[i0]:"LINEAR_TONE_MAPPING",[r0]:"REINHARD_TONE_MAPPING",[s0]:"CINEON_TONE_MAPPING",[a0]:"ACES_FILMIC_TONE_MAPPING",[l0]:"AGX_TONE_MAPPING",[c0]:"NEUTRAL_TONE_MAPPING",[o0]:"CUSTOM_TONE_MAPPING"};function Uw(r,e,t,s,o){const l=new Pi(e,t,{type:r,depthBuffer:s,stencilBuffer:o}),u=new Pi(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),f=new si;f.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const p=new xM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ii(f,p),v=new Yd(-1,1,1,-1,0,1);let _=null,g=null,S=!1,M,E=null,x=[],y=!1;this.setSize=function(b,N){l.setSize(b,N),u.setSize(b,N);for(let L=0;L<x.length;L++){const z=x[L];z.setSize&&z.setSize(b,N)}},this.setEffects=function(b){x=b,y=x.length>0&&x[0].isRenderPass===!0;const N=l.width,L=l.height;for(let z=0;z<x.length;z++){const F=x[z];F.setSize&&F.setSize(N,L)}},this.begin=function(b,N){if(S||b.toneMapping===bi&&x.length===0)return!1;if(E=N,N!==null){const L=N.width,z=N.height;(l.width!==L||l.height!==z)&&this.setSize(L,z)}return y===!1&&b.setRenderTarget(l),M=b.toneMapping,b.toneMapping=bi,!0},this.hasRenderPass=function(){return y},this.end=function(b,N){b.toneMapping=M,S=!0;let L=l,z=u;for(let F=0;F<x.length;F++){const V=x[F];if(V.enabled!==!1&&(V.render(b,z,L,N),V.needsSwap!==!1)){const A=L;L=z,z=A}}if(_!==b.outputColorSpace||g!==b.toneMapping){_=b.outputColorSpace,g=b.toneMapping,p.defines={},Tt.getTransfer(_)===Dt&&(p.defines.SRGB_TRANSFER="");const F=Iw[g];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(E),b.render(h,v),E=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const I0=new yn,Td=new uo(1,1),U0=new y0,F0=new YS,O0=new C0,Sg=[],Mg=[],Eg=new Float32Array(16),wg=new Float32Array(9),Tg=new Float32Array(4);function ua(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Sg[o];if(l===void 0&&(l=new Float32Array(o),Sg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function dc(r,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function Fw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ow(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function kw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function Bw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function zw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;Tg.set(s),r.uniformMatrix2fv(this.addr,!1,Tg),rn(t,s)}}function Vw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;wg.set(s),r.uniformMatrix3fv(this.addr,!1,wg),rn(t,s)}}function Hw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,s))return;Eg.set(s),r.uniformMatrix4fv(this.addr,!1,Eg),rn(t,s)}}function Gw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ww(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function jw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function Xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function qw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $w(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function Yw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function Kw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function Zw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Td.compareFunction=t.isReversedDepthBuffer()?Hd:Vd,l=Td):l=I0,t.setTexture2D(e||l,o)}function Jw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||F0,o)}function Qw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||O0,o)}function eT(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||U0,o)}function tT(r){switch(r){case 5126:return Fw;case 35664:return Ow;case 35665:return kw;case 35666:return Bw;case 35674:return zw;case 35675:return Vw;case 35676:return Hw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return jw;case 35669:case 35673:return Xw;case 5125:return qw;case 36294:return $w;case 36295:return Yw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eT}}function nT(r,e){r.uniform1fv(this.addr,e)}function iT(r,e){const t=ua(e,this.size,2);r.uniform2fv(this.addr,t)}function rT(r,e){const t=ua(e,this.size,3);r.uniform3fv(this.addr,t)}function sT(r,e){const t=ua(e,this.size,4);r.uniform4fv(this.addr,t)}function aT(r,e){const t=ua(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function oT(r,e){const t=ua(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lT(r,e){const t=ua(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cT(r,e){r.uniform1iv(this.addr,e)}function uT(r,e){r.uniform2iv(this.addr,e)}function fT(r,e){r.uniform3iv(this.addr,e)}function dT(r,e){r.uniform4iv(this.addr,e)}function hT(r,e){r.uniform1uiv(this.addr,e)}function pT(r,e){r.uniform2uiv(this.addr,e)}function mT(r,e){r.uniform3uiv(this.addr,e)}function gT(r,e){r.uniform4uiv(this.addr,e)}function vT(r,e,t){const s=this.cache,o=e.length,l=dc(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Td:u=I0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function _T(r,e,t){const s=this.cache,o=e.length,l=dc(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||F0,l[u])}function xT(r,e,t){const s=this.cache,o=e.length,l=dc(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||O0,l[u])}function yT(r,e,t){const s=this.cache,o=e.length,l=dc(t,o);nn(s,l)||(r.uniform1iv(this.addr,l),rn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||U0,l[u])}function ST(r){switch(r){case 5126:return nT;case 35664:return iT;case 35665:return rT;case 35666:return sT;case 35674:return aT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return dT;case 5125:return hT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}class MT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=tT(t.type)}}class ET{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ST(t.type)}}class wT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function Ag(r,e){r.seq.push(e),r.map[e.id]=e}function TT(r,e,t){const s=r.name,o=s.length;for(Nf.lastIndex=0;;){const l=Nf.exec(s),u=Nf.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){Ag(t,h===void 0?new MT(f,r,e):new ET(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new wT(f),Ag(t,_)),t=_}}}class Jl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),p=e.getUniformLocation(t,f.name);TT(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=s[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Cg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const AT=37297;let CT=0;function RT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Rg=new dt;function bT(r){Tt._getMatrix(Rg,Tt.workingColorSpace,r);const e=`mat3( ${Rg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case tc:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function bg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+RT(r.getShaderSource(e),f)}else return l}function PT(r,e){const t=bT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const NT={[i0]:"Linear",[r0]:"Reinhard",[s0]:"Cineon",[a0]:"ACESFilmic",[l0]:"AgX",[c0]:"Neutral",[o0]:"Custom"};function LT(r,e){const t=NT[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xl=new le;function DT(){Tt.getLuminanceCoefficients(Xl);const r=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function UT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function FT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function eo(r){return r!==""}function Pg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ng(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(r){return r.replace(OT,BT)}const kT=new Map;function BT(r,e){let t=ht[e];if(t===void 0){const s=kT.get(e);if(s!==void 0)t=ht[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}const zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(r){return r.replace(zT,VT)}function VT(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Dg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HT={[ql]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function GT(r){return HT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WT={[cs]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function jT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":WT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const XT={[Qs]:"ENVMAP_MODE_REFRACTION"};function qT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":XT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $T={[n0]:"ENVMAP_BLENDING_MULTIPLY",[hS]:"ENVMAP_BLENDING_MIX",[pS]:"ENVMAP_BLENDING_ADD"};function YT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":$T[r.combine]||"ENVMAP_BLENDING_NONE"}function KT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function ZT(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=GT(t),h=jT(t),v=qT(t),_=YT(t),g=KT(t),S=IT(t),M=UT(l),E=o.createProgram();let x,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(eo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(eo).join(`
`),y.length>0&&(y+=`
`)):(x=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),y=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?ht.tonemapping_pars_fragment:"",t.toneMapping!==bi?LT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,PT("linearToOutputTexel",t.outputColorSpace),DT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),u=Ad(u),u=Pg(u,t),u=Ng(u,t),f=Ad(f),f=Pg(f,t),f=Ng(f,t),u=Lg(u),f=Lg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=b+x+u,L=b+y+f,z=Cg(o,o.VERTEX_SHADER,N),F=Cg(o,o.FRAGMENT_SHADER,L);o.attachShader(E,z),o.attachShader(E,F),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function V(k){if(r.debug.checkShaderErrors){const H=o.getProgramInfoLog(E)||"",j=o.getShaderInfoLog(z)||"",K=o.getShaderInfoLog(F)||"",G=H.trim(),B=j.trim(),O=K.trim();let $=!0,ee=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,E,z,F);else{const ce=bg(o,z,"vertex"),U=bg(o,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+ce+`
`+U)}else G!==""?lt("WebGLProgram: Program Info Log:",G):(B===""||O==="")&&(ee=!1);ee&&(k.diagnostics={runnable:$,programLog:G,vertexShader:{log:B,prefix:x},fragmentShader:{log:O,prefix:y}})}o.deleteShader(z),o.deleteShader(F),A=new Jl(o,E),P=FT(o,E)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let se=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return se===!1&&(se=o.getProgramParameter(E,AT)),se},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=F,this}let JT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new eA(e),t.set(e,s)),s}}class eA{constructor(e){this.id=JT++,this.code=e,this.usedTimes=0}}function tA(r,e,t,s,o,l){const u=new S0,f=new QT,p=new Set,h=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return p.add(A),A===0?"uv":`uv${A}`}function E(A,P,se,k,H){const j=k.fog,K=H.geometry,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,B=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,O=e.get(A.envMap||G,B),$=O&&O.mapping===cc?O.image.height:null,ee=S[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&lt("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,U=ce!==void 0?ce.length:0;let te=0;K.morphAttributes.position!==void 0&&(te=1),K.morphAttributes.normal!==void 0&&(te=2),K.morphAttributes.color!==void 0&&(te=3);let ve,Re,Pe,ne;if(ee){const Et=Ai[ee];ve=Et.vertexShader,Re=Et.fragmentShader}else ve=A.vertexShader,Re=A.fragmentShader,f.update(A),Pe=f.getVertexShaderID(A),ne=f.getFragmentShaderID(A);const pe=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Ie=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,it=!!A.map,qt=!!A.matcap,pt=!!O,St=!!A.aoMap,Pt=!!A.lightMap,ut=!!A.bumpMap,Ot=!!A.normalMap,X=!!A.displacementMap,zt=!!A.emissiveMap,gt=!!A.metalnessMap,Mt=!!A.roughnessMap,Xe=A.anisotropy>0,D=A.clearcoat>0,w=A.dispersion>0,Z=A.iridescence>0,ge=A.sheen>0,_e=A.transmission>0,de=Xe&&!!A.anisotropyMap,He=D&&!!A.clearcoatMap,Ce=D&&!!A.clearcoatNormalMap,Ke=D&&!!A.clearcoatRoughnessMap,rt=Z&&!!A.iridescenceMap,Me=Z&&!!A.iridescenceThicknessMap,Ae=ge&&!!A.sheenColorMap,qe=ge&&!!A.sheenRoughnessMap,Ge=!!A.specularMap,Ue=!!A.specularColorMap,ct=!!A.specularIntensityMap,q=_e&&!!A.transmissionMap,be=_e&&!!A.thicknessMap,we=!!A.gradientMap,Fe=!!A.alphaMap,Ee=A.alphaTest>0,he=!!A.alphaHash,We=!!A.extensions;let st=bi;A.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(st=r.toneMapping);const Lt={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:ve,fragmentShader:Re,defines:A.defines,customVertexShaderID:Pe,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ta,alphaToCoverage:!!A.alphaToCoverage,map:it,matcap:qt,envMap:pt,envMapMode:pt&&O.mapping,envMapCubeUVHeight:$,aoMap:St,lightMap:Pt,bumpMap:ut,normalMap:Ot,displacementMap:X,emissiveMap:zt,normalMapObjectSpace:Ot&&A.normalMapType===vS,normalMapTangentSpace:Ot&&A.normalMapType===_0,metalnessMap:gt,roughnessMap:Mt,anisotropy:Xe,anisotropyMap:de,clearcoat:D,clearcoatMap:He,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ke,dispersion:w,iridescence:Z,iridescenceMap:rt,iridescenceThicknessMap:Me,sheen:ge,sheenColorMap:Ae,sheenRoughnessMap:qe,specularMap:Ge,specularColorMap:Ue,specularIntensityMap:ct,transmission:_e,transmissionMap:q,thicknessMap:be,gradientMap:we,opaque:A.transparent===!1&&A.blending===Ks&&A.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ee,alphaHash:he,combine:A.combine,mapUv:it&&M(A.map.channel),aoMapUv:St&&M(A.aoMap.channel),lightMapUv:Pt&&M(A.lightMap.channel),bumpMapUv:ut&&M(A.bumpMap.channel),normalMapUv:Ot&&M(A.normalMap.channel),displacementMapUv:X&&M(A.displacementMap.channel),emissiveMapUv:zt&&M(A.emissiveMap.channel),metalnessMapUv:gt&&M(A.metalnessMap.channel),roughnessMapUv:Mt&&M(A.roughnessMap.channel),anisotropyMapUv:de&&M(A.anisotropyMap.channel),clearcoatMapUv:He&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(A.sheenRoughnessMap.channel),specularMapUv:Ge&&M(A.specularMap.channel),specularColorMapUv:Ue&&M(A.specularColorMap.channel),specularIntensityMapUv:ct&&M(A.specularIntensityMap.channel),transmissionMapUv:q&&M(A.transmissionMap.channel),thicknessMapUv:be&&M(A.thicknessMap.channel),alphaMapUv:Fe&&M(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ot||Xe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(it||Fe),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||K.attributes.normal===void 0&&Ot===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:me,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&se.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:it&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===Dt,decodeVideoTextureEmissive:zt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===Dt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===gi,flipSided:A.side===On,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:We&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&A.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function x(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const se in A.defines)P.push(se),P.push(A.defines[se]);return A.isRawShaderMaterial===!1&&(y(P,A),b(P,A),P.push(r.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function y(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function b(A,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),A.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),A.push(u.mask)}function N(A){const P=S[A.type];let se;if(P){const k=Ai[P];se=gM.clone(k.uniforms)}else se=A.uniforms;return se}function L(A,P){let se=v.get(P);return se!==void 0?++se.usedTimes:(se=new ZT(r,P,A,o),h.push(se),v.set(P,se)),se}function z(A){if(--A.usedTimes===0){const P=h.indexOf(A);h[P]=h[h.length-1],h.pop(),v.delete(A.cacheKey),A.destroy()}}function F(A){f.remove(A)}function V(){f.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:N,acquireProgram:L,releaseProgram:z,releaseShaderCache:F,programs:h,dispose:V}}function nA(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,p){r.get(u)[f]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function iA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Ig(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ug(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,E,x,y){let b=r[e];return b===void 0?(b={id:g.id,object:g,geometry:S,material:M,materialVariant:u(g),groupOrder:E,renderOrder:g.renderOrder,z:x,group:y},r[e]=b):(b.id=g.id,b.object=g,b.geometry=S,b.material=M,b.materialVariant=u(g),b.groupOrder=E,b.renderOrder=g.renderOrder,b.z=x,b.group=y),e++,b}function p(g,S,M,E,x,y){const b=f(g,S,M,E,x,y);M.transmission>0?s.push(b):M.transparent===!0?o.push(b):t.push(b)}function h(g,S,M,E,x,y){const b=f(g,S,M,E,x,y);M.transmission>0?s.unshift(b):M.transparent===!0?o.unshift(b):t.unshift(b)}function v(g,S){t.length>1&&t.sort(g||iA),s.length>1&&s.sort(S||Ig),o.length>1&&o.sort(S||Ig)}function _(){for(let g=e,S=r.length;g<S;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:p,unshift:h,finish:_,sort:v}}function rA(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Ug,r.set(s,[u])):o>=l.length?(u=new Ug,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function sA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new xt};break;case"SpotLight":t={position:new le,direction:new le,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=t,t}}}function aA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let oA=0;function lA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cA(r){const e=new sA,t=aA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new le);const o=new le,l=new Wt,u=new Wt;function f(h){let v=0,_=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,M=0,E=0,x=0,y=0,b=0,N=0,L=0,z=0,F=0,V=0;h.sort(lA);for(let P=0,se=h.length;P<se;P++){const k=h[P],H=k.color,j=k.intensity,K=k.distance;let G=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ea?G=k.shadow.map.texture:G=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=H.r*j,_+=H.g*j,g+=H.b*j;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],j);V++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const O=k.shadow,$=t.get(k);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,s.directionalShadow[S]=$,s.directionalShadowMap[S]=G,s.directionalShadowMatrix[S]=k.shadow.matrix,b++}s.directional[S]=B,S++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(H).multiplyScalar(j),B.distance=K,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[E]=B;const O=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,O.updateMatrices(k),k.castShadow&&F++),s.spotLightMatrix[E]=O.matrix,k.castShadow){const $=t.get(k);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,s.spotShadow[E]=$,s.spotShadowMap[E]=G,L++}E++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(H).multiplyScalar(j),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[x]=B,x++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const O=k.shadow,$=t.get(k);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,$.shadowCameraNear=O.camera.near,$.shadowCameraFar=O.camera.far,s.pointShadow[M]=$,s.pointShadowMap[M]=G,s.pointShadowMatrix[M]=k.shadow.matrix,N++}s.point[M]=B,M++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(j),B.groundColor.copy(k.groundColor).multiplyScalar(j),s.hemi[y]=B,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==S||A.pointLength!==M||A.spotLength!==E||A.rectAreaLength!==x||A.hemiLength!==y||A.numDirectionalShadows!==b||A.numPointShadows!==N||A.numSpotShadows!==L||A.numSpotMaps!==z||A.numLightProbes!==V)&&(s.directional.length=S,s.spot.length=E,s.rectArea.length=x,s.point.length=M,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=L+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=V,A.directionalLength=S,A.pointLength=M,A.spotLength=E,A.rectAreaLength=x,A.hemiLength=y,A.numDirectionalShadows=b,A.numPointShadows=N,A.numSpotShadows=L,A.numSpotMaps=z,A.numLightProbes=V,s.version=oA++)}function p(h,v){let _=0,g=0,S=0,M=0,E=0;const x=v.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){const N=h[y];if(N.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),_++}else if(N.isSpotLight){const L=s.spot[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),S++}else if(N.isRectAreaLight){const L=s.rectArea[M];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),u.identity(),l.copy(N.matrixWorld),l.premultiply(x),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),M++}else if(N.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),g++}else if(N.isHemisphereLight){const L=s.hemi[E];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(x),E++}}}return{setup:f,setupView:p,state:s}}function Fg(r){const e=new cA(r),t=[],s=[];function o(v){h.camera=v,t.length=0,s.length=0}function l(v){t.push(v)}function u(v){s.push(v)}function f(){e.setup(t)}function p(v){e.setupView(t,v)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function uA(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Fg(r),e.set(o,[f])):l>=u.length?(f=new Fg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hA=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],pA=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],Og=new Wt,Za=new le,Lf=new le;function mA(r,e,t){let s=new Xd;const o=new bt,l=new bt,u=new Xt,f=new SM,p=new MM,h={},v=t.maxTextureSize,_={[Dr]:On,[On]:Dr,[gi]:gi},g=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:fA,fragmentShader:dA}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new si;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ii(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let y=this.type;this.render=function(F,V,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;this.type===$y&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);const P=r.getRenderTarget(),se=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Ji),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=y!==this.type;j&&V.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(G=>G.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,G=F.length;K<G;K++){const B=F[K],O=B.shadow;if(O===void 0){lt("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const $=O.getFrameExtents();o.multiply($),l.copy(O.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/$.x),o.x=l.x*$.x,O.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/$.y),o.y=l.y*$.y,O.mapSize.y=l.y));const ee=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ee,O.map===null||j===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Qa){if(B.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Pi(o.x,o.y,{format:ea,type:er,minFilter:xn,magFilter:xn,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new uo(o.x,o.y,Ci),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=tr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn}else B.isPointLight?(O.map=new D0(o.x),O.map.depthTexture=new pM(o.x,Li)):(O.map=new Pi(o.x,o.y),O.map.depthTexture=new uo(o.x,o.y,Li)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=tr,this.type===ql?(O.map.depthTexture.compareFunction=ee?Hd:Vd,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn);O.camera.updateProjectionMatrix()}const ce=O.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,U),r.clear();else{U===0&&(r.setRenderTarget(O.map),r.clear());const te=O.getViewport(U);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),H.viewport(u)}if(B.isPointLight){const te=O.camera,ve=O.matrix,Re=B.distance||te.far;Re!==te.far&&(te.far=Re,te.updateProjectionMatrix()),Za.setFromMatrixPosition(B.matrixWorld),te.position.copy(Za),Lf.copy(te.position),Lf.add(hA[U]),te.up.copy(pA[U]),te.lookAt(Lf),te.updateMatrixWorld(),ve.makeTranslation(-Za.x,-Za.y,-Za.z),Og.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Og,te.coordinateSystem,te.reversedDepth)}else O.updateMatrices(B);s=O.getFrustum(),L(V,A,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===Qa&&b(O,A),O.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(P,se,k)};function b(F,V){const A=e.update(E);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Pi(o.x,o.y,{format:ea,type:er})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(V,null,A,g,E,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(V,null,A,S,E,null)}function N(F,V,A,P){let se=null;const k=A.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)se=k;else if(se=A.isPointLight===!0?p:f,r.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const H=se.uuid,j=V.uuid;let K=h[H];K===void 0&&(K={},h[H]=K);let G=K[j];G===void 0&&(G=se.clone(),K[j]=G,V.addEventListener("dispose",z)),se=G}if(se.visible=V.visible,se.wireframe=V.wireframe,P===Qa?se.side=V.shadowSide!==null?V.shadowSide:V.side:se.side=V.shadowSide!==null?V.shadowSide:_[V.side],se.alphaMap=V.alphaMap,se.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,se.map=V.map,se.clipShadows=V.clipShadows,se.clippingPlanes=V.clippingPlanes,se.clipIntersection=V.clipIntersection,se.displacementMap=V.displacementMap,se.displacementScale=V.displacementScale,se.displacementBias=V.displacementBias,se.wireframeLinewidth=V.wireframeLinewidth,se.linewidth=V.linewidth,A.isPointLight===!0&&se.isMeshDistanceMaterial===!0){const H=r.properties.get(se);H.light=A}return se}function L(F,V,A,P,se){if(F.visible===!1)return;if(F.layers.test(V.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&se===Qa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,F.matrixWorld);const j=e.update(F),K=F.material;if(Array.isArray(K)){const G=j.groups;for(let B=0,O=G.length;B<O;B++){const $=G[B],ee=K[$.materialIndex];if(ee&&ee.visible){const ce=N(F,ee,P,se);F.onBeforeShadow(r,F,V,A,j,ce,$),r.renderBufferDirect(A,null,j,ce,F,$),F.onAfterShadow(r,F,V,A,j,ce,$)}}}else if(K.visible){const G=N(F,K,P,se);F.onBeforeShadow(r,F,V,A,j,G,null),r.renderBufferDirect(A,null,j,G,F,null),F.onAfterShadow(r,F,V,A,j,G,null)}}const H=F.children;for(let j=0,K=H.length;j<K;j++)L(H[j],V,A,P,se)}function z(F){F.target.removeEventListener("dispose",z);for(const A in h){const P=h[A],se=F.target.uuid;se in P&&(P[se].dispose(),delete P[se])}}}function gA(r,e){function t(){let q=!1;const be=new Xt;let we=null;const Fe=new Xt(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!q&&(r.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,he,We,st,Lt){Lt===!0&&(Ee*=st,he*=st,We*=st),be.set(Ee,he,We,st),Fe.equals(be)===!1&&(r.clearColor(Ee,he,We,st),Fe.copy(be))},reset:function(){q=!1,we=null,Fe.set(-1,0,0,0)}}}function s(){let q=!1,be=!1,we=null,Fe=null,Ee=null;return{setReversed:function(he){if(be!==he){const We=e.get("EXT_clip_control");he?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),be=he;const st=Ee;Ee=null,this.setClear(st)}},getReversed:function(){return be},setTest:function(he){he?pe(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(he){we!==he&&!q&&(r.depthMask(he),we=he)},setFunc:function(he){if(be&&(he=CS[he]),Fe!==he){switch(he){case kf:r.depthFunc(r.NEVER);break;case Bf:r.depthFunc(r.ALWAYS);break;case zf:r.depthFunc(r.LESS);break;case Js:r.depthFunc(r.LEQUAL);break;case Vf:r.depthFunc(r.EQUAL);break;case Hf:r.depthFunc(r.GEQUAL);break;case Gf:r.depthFunc(r.GREATER);break;case Wf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=he}},setLocked:function(he){q=he},setClear:function(he){Ee!==he&&(Ee=he,be&&(he=1-he),r.clearDepth(he))},reset:function(){q=!1,we=null,Fe=null,Ee=null,be=!1}}}function o(){let q=!1,be=null,we=null,Fe=null,Ee=null,he=null,We=null,st=null,Lt=null;return{setTest:function(Et){q||(Et?pe(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(Et){be!==Et&&!q&&(r.stencilMask(Et),be=Et)},setFunc:function(Et,qn,Mn){(we!==Et||Fe!==qn||Ee!==Mn)&&(r.stencilFunc(Et,qn,Mn),we=Et,Fe=qn,Ee=Mn)},setOp:function(Et,qn,Mn){(he!==Et||We!==qn||st!==Mn)&&(r.stencilOp(Et,qn,Mn),he=Et,We=qn,st=Mn)},setLocked:function(Et){q=Et},setClear:function(Et){Lt!==Et&&(r.clearStencil(Et),Lt=Et)},reset:function(){q=!1,be=null,we=null,Fe=null,Ee=null,he=null,We=null,st=null,Lt=null}}}const l=new t,u=new s,f=new o,p=new WeakMap,h=new WeakMap;let v={},_={},g=new WeakMap,S=[],M=null,E=!1,x=null,y=null,b=null,N=null,L=null,z=null,F=null,V=new xt(0,0,0),A=0,P=!1,se=null,k=null,H=null,j=null,K=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec($)[1]),B=O>=1):$.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=O>=2);let ee=null,ce={};const U=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),ve=new Xt().fromArray(U),Re=new Xt().fromArray(te);function Pe(q,be,we,Fe){const Ee=new Uint8Array(4),he=r.createTexture();r.bindTexture(q,he),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<we;We++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(be+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return he}const ne={};ne[r.TEXTURE_2D]=Pe(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pe(r.DEPTH_TEST),u.setFunc(Js),ut(!1),Ot(Im),pe(r.CULL_FACE),St(Ji);function pe(q){v[q]!==!0&&(r.enable(q),v[q]=!0)}function me(q){v[q]!==!1&&(r.disable(q),v[q]=!1)}function Ie(q,be){return _[q]!==be?(r.bindFramebuffer(q,be),_[q]=be,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=be),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=be),!0):!1}function ze(q,be){let we=S,Fe=!1;if(q){we=g.get(be),we===void 0&&(we=[],g.set(be,we));const Ee=q.textures;if(we.length!==Ee.length||we[0]!==r.COLOR_ATTACHMENT0){for(let he=0,We=Ee.length;he<We;he++)we[he]=r.COLOR_ATTACHMENT0+he;we.length=Ee.length,Fe=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(we)}function it(q){return M!==q?(r.useProgram(q),M=q,!0):!1}const qt={[rs]:r.FUNC_ADD,[Ky]:r.FUNC_SUBTRACT,[Zy]:r.FUNC_REVERSE_SUBTRACT};qt[Jy]=r.MIN,qt[Qy]=r.MAX;const pt={[eS]:r.ZERO,[tS]:r.ONE,[nS]:r.SRC_COLOR,[Ff]:r.SRC_ALPHA,[lS]:r.SRC_ALPHA_SATURATE,[aS]:r.DST_COLOR,[rS]:r.DST_ALPHA,[iS]:r.ONE_MINUS_SRC_COLOR,[Of]:r.ONE_MINUS_SRC_ALPHA,[oS]:r.ONE_MINUS_DST_COLOR,[sS]:r.ONE_MINUS_DST_ALPHA,[cS]:r.CONSTANT_COLOR,[uS]:r.ONE_MINUS_CONSTANT_COLOR,[fS]:r.CONSTANT_ALPHA,[dS]:r.ONE_MINUS_CONSTANT_ALPHA};function St(q,be,we,Fe,Ee,he,We,st,Lt,Et){if(q===Ji){E===!0&&(me(r.BLEND),E=!1);return}if(E===!1&&(pe(r.BLEND),E=!0),q!==Yy){if(q!==x||Et!==P){if((y!==rs||L!==rs)&&(r.blendEquation(r.FUNC_ADD),y=rs,L=rs),Et)switch(q){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Um:r.blendFunc(r.ONE,r.ONE);break;case Fm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Om:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",q);break}else switch(q){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Um:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Fm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",q);break}b=null,N=null,z=null,F=null,V.set(0,0,0),A=0,x=q,P=Et}return}Ee=Ee||be,he=he||we,We=We||Fe,(be!==y||Ee!==L)&&(r.blendEquationSeparate(qt[be],qt[Ee]),y=be,L=Ee),(we!==b||Fe!==N||he!==z||We!==F)&&(r.blendFuncSeparate(pt[we],pt[Fe],pt[he],pt[We]),b=we,N=Fe,z=he,F=We),(st.equals(V)===!1||Lt!==A)&&(r.blendColor(st.r,st.g,st.b,Lt),V.copy(st),A=Lt),x=q,P=!1}function Pt(q,be){q.side===gi?me(r.CULL_FACE):pe(r.CULL_FACE);let we=q.side===On;be&&(we=!we),ut(we),q.blending===Ks&&q.transparent===!1?St(Ji):St(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const Fe=q.stencilWrite;f.setTest(Fe),Fe&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(q){se!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),se=q)}function Ot(q){q!==Xy?(pe(r.CULL_FACE),q!==k&&(q===Im?r.cullFace(r.BACK):q===qy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),k=q}function X(q){q!==H&&(B&&r.lineWidth(q),H=q)}function zt(q,be,we){q?(pe(r.POLYGON_OFFSET_FILL),(j!==be||K!==we)&&(j=be,K=we,u.getReversed()&&(be=-be),r.polygonOffset(be,we))):me(r.POLYGON_OFFSET_FILL)}function gt(q){q?pe(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function Mt(q){q===void 0&&(q=r.TEXTURE0+G-1),ee!==q&&(r.activeTexture(q),ee=q)}function Xe(q,be,we){we===void 0&&(ee===null?we=r.TEXTURE0+G-1:we=ee);let Fe=ce[we];Fe===void 0&&(Fe={type:void 0,texture:void 0},ce[we]=Fe),(Fe.type!==q||Fe.texture!==be)&&(ee!==we&&(r.activeTexture(we),ee=we),r.bindTexture(q,be||ne[q]),Fe.type=q,Fe.texture=be)}function D(){const q=ce[ee];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function ge(){try{r.texSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function _e(){try{r.texSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function He(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ce(){try{r.texStorage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ke(){try{r.texStorage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function rt(){try{r.texImage2D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Me(){try{r.texImage3D(...arguments)}catch(q){Ct("WebGLState:",q)}}function Ae(q){ve.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),ve.copy(q))}function qe(q){Re.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Re.copy(q))}function Ge(q,be){let we=h.get(be);we===void 0&&(we=new WeakMap,h.set(be,we));let Fe=we.get(q);Fe===void 0&&(Fe=r.getUniformBlockIndex(be,q.name),we.set(q,Fe))}function Ue(q,be){const Fe=h.get(be).get(q);p.get(be)!==Fe&&(r.uniformBlockBinding(be,Fe,q.__bindingPointIndex),p.set(be,Fe))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ee=null,ce={},_={},g=new WeakMap,S=[],M=null,E=!1,x=null,y=null,b=null,N=null,L=null,z=null,F=null,V=new xt(0,0,0),A=0,P=!1,se=null,k=null,H=null,j=null,K=null,ve.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:pe,disable:me,bindFramebuffer:Ie,drawBuffers:ze,useProgram:it,setBlending:St,setMaterial:Pt,setFlipSided:ut,setCullFace:Ot,setLineWidth:X,setPolygonOffset:zt,setScissorTest:gt,activeTexture:Mt,bindTexture:Xe,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:Z,texImage2D:rt,texImage3D:Me,updateUBOMapping:Ge,uniformBlockBinding:Ue,texStorage2D:Ce,texStorage3D:Ke,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:He,scissor:Ae,viewport:qe,reset:ct}}function vA(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,v=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return S?new OffscreenCanvas(D,w):lo("canvas")}function E(D,w,Z){let ge=1;const _e=Xe(D);if((_e.width>Z||_e.height>Z)&&(ge=Z/Math.max(_e.width,_e.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(ge*_e.width),He=Math.floor(ge*_e.height);_===void 0&&(_=M(de,He));const Ce=w?M(de,He):_;return Ce.width=de,Ce.height=He,Ce.getContext("2d").drawImage(D,0,0,de,He),lt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+He+")."),Ce}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function x(D){return D.generateMipmaps}function y(D){r.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(D,w,Z,ge,_e=!1){if(D!==null){if(r[D]!==void 0)return r[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=w;if(w===r.RED&&(Z===r.FLOAT&&(de=r.R32F),Z===r.HALF_FLOAT&&(de=r.R16F),Z===r.UNSIGNED_BYTE&&(de=r.R8)),w===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.R8UI),Z===r.UNSIGNED_SHORT&&(de=r.R16UI),Z===r.UNSIGNED_INT&&(de=r.R32UI),Z===r.BYTE&&(de=r.R8I),Z===r.SHORT&&(de=r.R16I),Z===r.INT&&(de=r.R32I)),w===r.RG&&(Z===r.FLOAT&&(de=r.RG32F),Z===r.HALF_FLOAT&&(de=r.RG16F),Z===r.UNSIGNED_BYTE&&(de=r.RG8)),w===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RG8UI),Z===r.UNSIGNED_SHORT&&(de=r.RG16UI),Z===r.UNSIGNED_INT&&(de=r.RG32UI),Z===r.BYTE&&(de=r.RG8I),Z===r.SHORT&&(de=r.RG16I),Z===r.INT&&(de=r.RG32I)),w===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Z===r.UNSIGNED_INT&&(de=r.RGB32UI),Z===r.BYTE&&(de=r.RGB8I),Z===r.SHORT&&(de=r.RGB16I),Z===r.INT&&(de=r.RGB32I)),w===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Z===r.UNSIGNED_INT&&(de=r.RGBA32UI),Z===r.BYTE&&(de=r.RGBA8I),Z===r.SHORT&&(de=r.RGBA16I),Z===r.INT&&(de=r.RGBA32I)),w===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),w===r.RGBA){const He=_e?tc:Tt.getTransfer(ge);Z===r.FLOAT&&(de=r.RGBA32F),Z===r.HALF_FLOAT&&(de=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(de=He===Dt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(D,w){let Z;return D?w===null||w===Li||w===ao?Z=r.DEPTH24_STENCIL8:w===Ci?Z=r.DEPTH32F_STENCIL8:w===so&&(Z=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Li||w===ao?Z=r.DEPTH_COMPONENT24:w===Ci?Z=r.DEPTH_COMPONENT32F:w===so&&(Z=r.DEPTH_COMPONENT16),Z}function z(D,w){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==fn&&D.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),A(w),w.isVideoTexture&&v.delete(w)}function V(D){const w=D.target;w.removeEventListener("dispose",V),se(w)}function A(D){const w=s.get(D);if(w.__webglInit===void 0)return;const Z=D.source,ge=g.get(Z);if(ge){const _e=ge[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(D),Object.keys(ge).length===0&&g.delete(Z)}s.remove(D)}function P(D){const w=s.get(D);r.deleteTexture(w.__webglTexture);const Z=D.source,ge=g.get(Z);delete ge[w.__cacheKey],u.memory.textures--}function se(D){const w=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let _e=0;_e<w.__webglFramebuffer[ge].length;_e++)r.deleteFramebuffer(w.__webglFramebuffer[ge][_e]);else r.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)r.deleteFramebuffer(w.__webglFramebuffer[ge]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=D.textures;for(let ge=0,_e=Z.length;ge<_e;ge++){const de=s.get(Z[ge]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),s.remove(Z[ge])}s.remove(D)}let k=0;function H(){k=0}function j(){const D=k;return D>=o.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function K(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function G(D,w){const Z=s.get(D);if(D.isVideoTexture&&gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const ge=D.image;if(ge===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Z,D,w);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+w)}function B(D,w){const Z=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){ne(Z,D,w);return}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+w)}function O(D,w){const Z=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){ne(Z,D,w);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+w)}function $(D,w){const Z=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Z.__version!==D.version){pe(Z,D,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+w)}const ee={[jf]:r.REPEAT,[Zi]:r.CLAMP_TO_EDGE,[Xf]:r.MIRRORED_REPEAT},ce={[fn]:r.NEAREST,[mS]:r.NEAREST_MIPMAP_NEAREST,[Ml]:r.NEAREST_MIPMAP_LINEAR,[xn]:r.LINEAR,[ef]:r.LINEAR_MIPMAP_NEAREST,[as]:r.LINEAR_MIPMAP_LINEAR},U={[_S]:r.NEVER,[ES]:r.ALWAYS,[xS]:r.LESS,[Vd]:r.LEQUAL,[yS]:r.EQUAL,[Hd]:r.GEQUAL,[SS]:r.GREATER,[MS]:r.NOTEQUAL};function te(D,w){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xn||w.magFilter===ef||w.magFilter===Ml||w.magFilter===as||w.minFilter===xn||w.minFilter===ef||w.minFilter===Ml||w.minFilter===as)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ee[w.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ee[w.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ee[w.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ce[w.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===fn||w.minFilter!==Ml&&w.minFilter!==as||w.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function ve(D,w){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const ge=w.source;let _e=g.get(ge);_e===void 0&&(_e={},g.set(ge,_e));const de=K(w);if(de!==D.__cacheKey){_e[de]===void 0&&(_e[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),_e[de].usedTimes++;const He=_e[D.__cacheKey];He!==void 0&&(_e[D.__cacheKey].usedTimes--,He.usedTimes===0&&P(w)),D.__cacheKey=de,D.__webglTexture=_e[de].texture}return Z}function Re(D,w,Z){return Math.floor(Math.floor(D/Z)/w)}function Pe(D,w,Z,ge){const de=D.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,Z,ge,w.data);else{de.sort((Me,Ae)=>Me.start-Ae.start);let He=0;for(let Me=1;Me<de.length;Me++){const Ae=de[He],qe=de[Me],Ge=Ae.start+Ae.count,Ue=Re(qe.start,w.width,4),ct=Re(Ae.start,w.width,4);qe.start<=Ge+1&&Ue===ct&&Re(qe.start+qe.count-1,w.width,4)===Ue?Ae.count=Math.max(Ae.count,qe.start+qe.count-Ae.start):(++He,de[He]=qe)}de.length=He+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ke=r.getParameter(r.UNPACK_SKIP_PIXELS),rt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Ae=de.length;Me<Ae;Me++){const qe=de[Me],Ge=Math.floor(qe.start/4),Ue=Math.ceil(qe.count/4),ct=Ge%w.width,q=Math.floor(Ge/w.width),be=Ue,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),t.texSubImage2D(r.TEXTURE_2D,0,ct,q,be,we,Z,ge,w.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,rt)}}function ne(D,w,Z){let ge=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=r.TEXTURE_3D);const _e=ve(D,w),de=w.source;t.bindTexture(ge,D.__webglTexture,r.TEXTURE0+Z);const He=s.get(de);if(de.version!==He.__version||_e===!0){t.activeTexture(r.TEXTURE0+Z);const Ce=Tt.getPrimaries(Tt.workingColorSpace),Ke=w.colorSpace===br?null:Tt.getPrimaries(w.colorSpace),rt=w.colorSpace===br||Ce===Ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Me=E(w.image,!1,o.maxTextureSize);Me=Mt(w,Me);const Ae=l.convert(w.format,w.colorSpace),qe=l.convert(w.type);let Ge=N(w.internalFormat,Ae,qe,w.colorSpace,w.isVideoTexture);te(ge,w);let Ue;const ct=w.mipmaps,q=w.isVideoTexture!==!0,be=He.__version===void 0||_e===!0,we=de.dataReady,Fe=z(w,Me);if(w.isDepthTexture)Ge=L(w.format===os,w.type),be&&(q?t.texStorage2D(r.TEXTURE_2D,1,Ge,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Ae,qe,null));else if(w.isDataTexture)if(ct.length>0){q&&be&&t.texStorage2D(r.TEXTURE_2D,Fe,Ge,ct[0].width,ct[0].height);for(let Ee=0,he=ct.length;Ee<he;Ee++)Ue=ct[Ee],q?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ae,qe,Ue.data):t.texImage2D(r.TEXTURE_2D,Ee,Ge,Ue.width,Ue.height,0,Ae,qe,Ue.data);w.generateMipmaps=!1}else q?(be&&t.texStorage2D(r.TEXTURE_2D,Fe,Ge,Me.width,Me.height),we&&Pe(w,Me,Ae,qe)):t.texImage2D(r.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Ae,qe,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){q&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Ge,ct[0].width,ct[0].height,Me.depth);for(let Ee=0,he=ct.length;Ee<he;Ee++)if(Ue=ct[Ee],w.format!==_i)if(Ae!==null)if(q){if(we)if(w.layerUpdates.size>0){const We=pg(Ue.width,Ue.height,w.format,w.type);for(const st of w.layerUpdates){const Lt=Ue.data.subarray(st*We/Ue.data.BYTES_PER_ELEMENT,(st+1)*We/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,st,Ue.width,Ue.height,1,Ae,Lt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Me.depth,Ae,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Ge,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?we&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Me.depth,Ae,qe,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Ge,Ue.width,Ue.height,Me.depth,0,Ae,qe,Ue.data)}else{q&&be&&t.texStorage2D(r.TEXTURE_2D,Fe,Ge,ct[0].width,ct[0].height);for(let Ee=0,he=ct.length;Ee<he;Ee++)Ue=ct[Ee],w.format!==_i?Ae!==null?q?we&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ae,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,Ge,Ue.width,Ue.height,0,Ue.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ae,qe,Ue.data):t.texImage2D(r.TEXTURE_2D,Ee,Ge,Ue.width,Ue.height,0,Ae,qe,Ue.data)}else if(w.isDataArrayTexture)if(q){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Ge,Me.width,Me.height,Me.depth),we)if(w.layerUpdates.size>0){const Ee=pg(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const We=Me.data.subarray(he*Ee/Me.data.BYTES_PER_ELEMENT,(he+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Ae,qe,We)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ae,qe,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,Ae,qe,Me.data);else if(w.isData3DTexture)q?(be&&t.texStorage3D(r.TEXTURE_3D,Fe,Ge,Me.width,Me.height,Me.depth),we&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ae,qe,Me.data)):t.texImage3D(r.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,Ae,qe,Me.data);else if(w.isFramebufferTexture){if(be)if(q)t.texStorage2D(r.TEXTURE_2D,Fe,Ge,Me.width,Me.height);else{let Ee=Me.width,he=Me.height;for(let We=0;We<Fe;We++)t.texImage2D(r.TEXTURE_2D,We,Ge,Ee,he,0,Ae,qe,null),Ee>>=1,he>>=1}}else if(ct.length>0){if(q&&be){const Ee=Xe(ct[0]);t.texStorage2D(r.TEXTURE_2D,Fe,Ge,Ee.width,Ee.height)}for(let Ee=0,he=ct.length;Ee<he;Ee++)Ue=ct[Ee],q?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ae,qe,Ue):t.texImage2D(r.TEXTURE_2D,Ee,Ge,Ae,qe,Ue);w.generateMipmaps=!1}else if(q){if(be){const Ee=Xe(Me);t.texStorage2D(r.TEXTURE_2D,Fe,Ge,Ee.width,Ee.height)}we&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,qe,Me)}else t.texImage2D(r.TEXTURE_2D,0,Ge,Ae,qe,Me);x(w)&&y(ge),He.__version=de.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function pe(D,w,Z){if(w.image.length!==6)return;const ge=ve(D,w),_e=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Z);const de=s.get(_e);if(_e.version!==de.__version||ge===!0){t.activeTexture(r.TEXTURE0+Z);const He=Tt.getPrimaries(Tt.workingColorSpace),Ce=w.colorSpace===br?null:Tt.getPrimaries(w.colorSpace),Ke=w.colorSpace===br||He===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const rt=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let he=0;he<6;he++)!rt&&!Me?Ae[he]=E(w.image[he],!0,o.maxCubemapSize):Ae[he]=Me?w.image[he].image:w.image[he],Ae[he]=Mt(w,Ae[he]);const qe=Ae[0],Ge=l.convert(w.format,w.colorSpace),Ue=l.convert(w.type),ct=N(w.internalFormat,Ge,Ue,w.colorSpace),q=w.isVideoTexture!==!0,be=de.__version===void 0||ge===!0,we=_e.dataReady;let Fe=z(w,qe);te(r.TEXTURE_CUBE_MAP,w);let Ee;if(rt){q&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ct,qe.width,qe.height);for(let he=0;he<6;he++){Ee=Ae[he].mipmaps;for(let We=0;We<Ee.length;We++){const st=Ee[We];w.format!==_i?Ge!==null?q?we&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,st.width,st.height,Ge,st.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,ct,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,st.width,st.height,Ge,Ue,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,ct,st.width,st.height,0,Ge,Ue,st.data)}}}else{if(Ee=w.mipmaps,q&&be){Ee.length>0&&Fe++;const he=Xe(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ct,he.width,he.height)}for(let he=0;he<6;he++)if(Me){q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae[he].width,Ae[he].height,Ge,Ue,Ae[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ae[he].width,Ae[he].height,0,Ge,Ue,Ae[he].data);for(let We=0;We<Ee.length;We++){const Lt=Ee[We].image[he].image;q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Lt.width,Lt.height,Ge,Ue,Lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,ct,Lt.width,Lt.height,0,Ge,Ue,Lt.data)}}else{q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ge,Ue,Ae[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ge,Ue,Ae[he]);for(let We=0;We<Ee.length;We++){const st=Ee[We];q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Ge,Ue,st.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,ct,Ge,Ue,st.image[he])}}}x(w)&&y(r.TEXTURE_CUBE_MAP),de.__version=_e.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function me(D,w,Z,ge,_e,de){const He=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),Ke=N(Z.internalFormat,He,Ce,Z.colorSpace),rt=s.get(w),Me=s.get(Z);if(Me.__renderTarget=w,!rt.__hasExternalTextures){const Ae=Math.max(1,w.width>>de),qe=Math.max(1,w.height>>de);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,Ke,Ae,qe,w.depth,0,He,Ce,null):t.texImage2D(_e,de,Ke,Ae,qe,0,He,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),zt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,_e,Me.__webglTexture,0,X(w)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,_e,Me.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(D,w,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),w.depthBuffer){const ge=w.depthTexture,_e=ge&&ge.isDepthTexture?ge.type:null,de=L(w.stencilBuffer,_e),He=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;zt(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(w),de,w.width,w.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(w),de,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,de,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,He,r.RENDERBUFFER,D)}else{const ge=w.textures;for(let _e=0;_e<ge.length;_e++){const de=ge[_e],He=l.convert(de.format,de.colorSpace),Ce=l.convert(de.type),Ke=N(de.internalFormat,He,Ce,de.colorSpace);zt(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X(w),Ke,w.width,w.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,X(w),Ke,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ke,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ze(D,w,Z){const ge=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(w.depthTexture);if(_e.__renderTarget=w,(!_e.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ge){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),_e.__webglTexture===void 0){_e.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),te(r.TEXTURE_CUBE_MAP,w.depthTexture);const rt=l.convert(w.depthTexture.format),Me=l.convert(w.depthTexture.type);let Ae;w.depthTexture.format===tr?Ae=r.DEPTH_COMPONENT24:w.depthTexture.format===os&&(Ae=r.DEPTH24_STENCIL8);for(let qe=0;qe<6;qe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ae,w.width,w.height,0,rt,Me,null)}}else G(w.depthTexture,0);const de=_e.__webglTexture,He=X(w),Ce=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,Ke=w.depthTexture.format===os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===tr)zt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ke,Ce,de,0,He):r.framebufferTexture2D(r.FRAMEBUFFER,Ke,Ce,de,0);else if(w.depthTexture.format===os)zt(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ke,Ce,de,0,He):r.framebufferTexture2D(r.FRAMEBUFFER,Ke,Ce,de,0);else throw new Error("Unknown depthTexture format")}function it(D){const w=s.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const ge=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ge){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ge.removeEventListener("dispose",_e)};ge.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=ge}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let ge=0;ge<6;ge++)ze(w.__webglFramebuffer[ge],D,ge);else{const ge=D.texture.mipmaps;ge&&ge.length>0?ze(w.__webglFramebuffer[0],D,0):ze(w.__webglFramebuffer,D,0)}else if(Z){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]===void 0)w.__webglDepthbuffer[ge]=r.createRenderbuffer(),Ie(w.__webglDepthbuffer[ge],D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,de)}}else{const ge=D.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Ie(w.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,de)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(D,w,Z){const ge=s.get(D);w!==void 0&&me(ge.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&it(D)}function pt(D){const w=D.texture,Z=s.get(D),ge=s.get(w);D.addEventListener("dispose",V);const _e=D.textures,de=D.isWebGLCubeRenderTarget===!0,He=_e.length>1;if(He||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=w.version,u.memory.textures++),de){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Ke=0;Ke<w.mipmaps.length;Ke++)Z.__webglFramebuffer[Ce][Ke]=r.createFramebuffer()}else Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(He)for(let Ce=0,Ke=_e.length;Ce<Ke;Ce++){const rt=s.get(_e[Ce]);rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture(),u.memory.textures++)}if(D.samples>0&&zt(D)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ke=_e[Ce];Z.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const rt=l.convert(Ke.format,Ke.colorSpace),Me=l.convert(Ke.type),Ae=N(Ke.internalFormat,rt,Me,Ke.colorSpace,D.isXRRenderTarget===!0),qe=X(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ae,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),te(r.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ke=0;Ke<w.mipmaps.length;Ke++)me(Z.__webglFramebuffer[Ce][Ke],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke);else me(Z.__webglFramebuffer[Ce],D,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(w)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ce=0,Ke=_e.length;Ce<Ke;Ce++){const rt=_e[Ce],Me=s.get(rt);let Ae=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Me.__webglTexture),te(Ae,rt),me(Z.__webglFramebuffer,D,rt,r.COLOR_ATTACHMENT0+Ce,Ae,0),x(rt)&&y(Ae)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),te(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Ke=0;Ke<w.mipmaps.length;Ke++)me(Z.__webglFramebuffer[Ke],D,w,r.COLOR_ATTACHMENT0,Ce,Ke);else me(Z.__webglFramebuffer,D,w,r.COLOR_ATTACHMENT0,Ce,0);x(w)&&y(Ce),t.unbindTexture()}D.depthBuffer&&it(D)}function St(D){const w=D.textures;for(let Z=0,ge=w.length;Z<ge;Z++){const _e=w[Z];if(x(_e)){const de=b(D),He=s.get(_e).__webglTexture;t.bindTexture(de,He),y(de),t.unbindTexture()}}}const Pt=[],ut=[];function Ot(D){if(D.samples>0){if(zt(D)===!1){const w=D.textures,Z=D.width,ge=D.height;let _e=r.COLOR_BUFFER_BIT;const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,He=s.get(D),Ce=w.length>1;if(Ce)for(let rt=0;rt<w.length;rt++)t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Ke=D.texture.mipmaps;Ke&&Ke.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let rt=0;rt<w.length;rt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,He.__webglColorRenderbuffer[rt]);const Me=s.get(w[rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,_e,r.NEAREST),p===!0&&(Pt.length=0,ut.length=0,Pt.push(r.COLOR_ATTACHMENT0+rt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pt.push(de),ut.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let rt=0;rt<w.length;rt++){t.bindFramebuffer(r.FRAMEBUFFER,He.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,He.__webglColorRenderbuffer[rt]);const Me=s.get(w[rt]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,He.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const w=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function X(D){return Math.min(o.maxSamples,D.samples)}function zt(D){const w=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function gt(D){const w=u.render.frame;v.get(D)!==w&&(v.set(D,w),D.update())}function Mt(D,w){const Z=D.colorSpace,ge=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==ta&&Z!==br&&(Tt.getTransfer(Z)===Dt?(ge!==_i||_e!==Xn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Z)),w}function Xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=$,this.rebindTextures=qt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=me,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _A(r,e){function t(s,o=br){let l;const u=Tt.getTransfer(o);if(s===Xn)return r.UNSIGNED_BYTE;if(s===Fd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Od)return r.UNSIGNED_SHORT_5_5_5_1;if(s===h0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===p0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===f0)return r.BYTE;if(s===d0)return r.SHORT;if(s===so)return r.UNSIGNED_SHORT;if(s===Ud)return r.INT;if(s===Li)return r.UNSIGNED_INT;if(s===Ci)return r.FLOAT;if(s===er)return r.HALF_FLOAT;if(s===m0)return r.ALPHA;if(s===g0)return r.RGB;if(s===_i)return r.RGBA;if(s===tr)return r.DEPTH_COMPONENT;if(s===os)return r.DEPTH_STENCIL;if(s===v0)return r.RED;if(s===kd)return r.RED_INTEGER;if(s===ea)return r.RG;if(s===Bd)return r.RG_INTEGER;if(s===zd)return r.RGBA_INTEGER;if(s===$l||s===Yl||s===Kl||s===Zl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qf||s===$f||s===Yf||s===Kf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$f)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zf||s===Jf||s===Qf||s===ed||s===td||s===nd||s===id)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Zf||s===Jf)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Qf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===ed)return l.COMPRESSED_R11_EAC;if(s===td)return l.COMPRESSED_SIGNED_R11_EAC;if(s===nd)return l.COMPRESSED_RG11_EAC;if(s===id)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rd||s===sd||s===ad||s===od||s===ld||s===cd||s===ud||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===rd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===od)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ld)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ud)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===md)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_d||s===xd||s===yd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===_d)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sd||s===Md||s===Ed||s===wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Sd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Md)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ed)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ao?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const xA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
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

}`;class SA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new R0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ui({vertexShader:xA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new ls(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends aa{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",p=1,h=null,v=null,_=null,g=null,S=null,M=null;const E=typeof XRWebGLBinding<"u",x=new SA,y={},b=t.getContextAttributes();let N=null,L=null;const z=[],F=[],V=new bt;let A=null;const P=new ii;P.viewport=new Xt;const se=new ii;se.viewport=new Xt;const k=[P,se],H=new LM;let j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=z[ne];return pe===void 0&&(pe=new of,z[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=z[ne];return pe===void 0&&(pe=new of,z[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=z[ne];return pe===void 0&&(pe=new of,z[ne]=pe),pe.getHandSpace()};function G(ne){const pe=F.indexOf(ne.inputSource);if(pe===-1)return;const me=z[pe];me!==void 0&&(me.update(ne.inputSource,ne.frame,h||u),me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",O);for(let ne=0;ne<z.length;ne++){const pe=F[ne];pe!==null&&(F[ne]=null,z[ne].disconnect(pe))}j=null,K=null,x.reset();for(const ne in y)delete y[ne];e.setRenderTarget(N),S=null,g=null,_=null,o=null,L=null,Pe.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",B),o.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,ze=null;b.depth&&(ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?os:tr,Ie=b.stencil?ao:Li);const it={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Pi(g.textureWidth,g.textureHeight,{format:_i,type:Xn,depthTexture:new uo(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Pi(S.framebufferWidth,S.framebufferHeight,{format:_i,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),Pe.setContext(o),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(ne){for(let pe=0;pe<ne.removed.length;pe++){const me=ne.removed[pe],Ie=F.indexOf(me);Ie>=0&&(F[Ie]=null,z[Ie].disconnect(me))}for(let pe=0;pe<ne.added.length;pe++){const me=ne.added[pe];let Ie=F.indexOf(me);if(Ie===-1){for(let it=0;it<z.length;it++)if(it>=F.length){F.push(me),Ie=it;break}else if(F[it]===null){F[it]=me,Ie=it;break}if(Ie===-1)break}const ze=z[Ie];ze&&ze.connect(me)}}const $=new le,ee=new le;function ce(ne,pe,me){$.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const Ie=$.distanceTo(ee),ze=pe.projectionMatrix.elements,it=me.projectionMatrix.elements,qt=ze[14]/(ze[10]-1),pt=ze[14]/(ze[10]+1),St=(ze[9]+1)/ze[5],Pt=(ze[9]-1)/ze[5],ut=(ze[8]-1)/ze[0],Ot=(it[8]+1)/it[0],X=qt*ut,zt=qt*Ot,gt=Ie/(-ut+Ot),Mt=gt*-ut;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Mt),ne.translateZ(gt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ze[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Xe=qt+gt,D=pt+gt,w=X-Mt,Z=zt+(Ie-Mt),ge=St*pt/D*Xe,_e=Pt*pt/D*Xe;ne.projectionMatrix.makePerspective(w,Z,ge,_e,Xe,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let pe=ne.near,me=ne.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(me=x.depthFar)),H.near=se.near=P.near=pe,H.far=se.far=P.far=me,(j!==H.near||K!==H.far)&&(o.updateRenderState({depthNear:H.near,depthFar:H.far}),j=H.near,K=H.far),H.layers.mask=ne.layers.mask|6,P.layers.mask=H.layers.mask&-5,se.layers.mask=H.layers.mask&-3;const Ie=ne.parent,ze=H.cameras;U(H,Ie);for(let it=0;it<ze.length;it++)U(ze[it],Ie);ze.length===2?ce(H,P,se):H.projectionMatrix.copy(P.projectionMatrix),te(ne,H,Ie)};function te(ne,pe,me){me===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=co*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(ne){p=ne,g!==null&&(g.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(H)},this.getCameraTexture=function(ne){return y[ne]};let ve=null;function Re(ne,pe){if(v=pe.getViewerPose(h||u),M=pe,v!==null){const me=v.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ie=!1;me.length!==H.cameras.length&&(H.cameras.length=0,Ie=!0);for(let pt=0;pt<me.length;pt++){const St=me[pt];let Pt=null;if(S!==null)Pt=S.getViewport(St);else{const Ot=_.getViewSubImage(g,St);Pt=Ot.viewport,pt===0&&(e.setRenderTargetTextures(L,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(L))}let ut=k[pt];ut===void 0&&(ut=new ii,ut.layers.enable(pt),ut.viewport=new Xt,k[pt]=ut),ut.matrix.fromArray(St.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(St.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),pt===0&&(H.matrix.copy(ut.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ie===!0&&H.cameras.push(ut)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){_=s.getBinding();const pt=_.getDepthInformation(me[0]);pt&&pt.isValid&&pt.texture&&x.init(pt,o.renderState)}if(ze&&ze.includes("camera-access")&&E){e.state.unbindTexture(),_=s.getBinding();for(let pt=0;pt<me.length;pt++){const St=me[pt].camera;if(St){let Pt=y[St];Pt||(Pt=new R0,y[St]=Pt);const ut=_.getCameraImage(St);Pt.sourceTexture=ut}}}}for(let me=0;me<z.length;me++){const Ie=F[me],ze=z[me];Ie!==null&&ze!==void 0&&ze.update(Ie,pe,h||u)}ve&&ve(ne,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Pe=new L0;Pe.setAnimationLoop(Re),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const ns=new Di,EA=new Wt;function wA(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function s(x,y){y.color.getRGB(x.fogColor.value,b0(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,b,N,L){y.isMeshBasicMaterial?l(x,y):y.isMeshLambertMaterial?(l(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),v(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,L)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),E(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?p(x,y,b,N):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===On&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===On&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const b=e.get(y),N=b.envMap,L=b.envMapRotation;N&&(x.envMap.value=N,ns.copy(L),ns.x*=-1,ns.y*=-1,ns.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),x.envMapRotation.value.setFromMatrix4(EA.makeRotationFromEuler(ns)),x.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,b,N){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*b,x.scale.value=N*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,b){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===On&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const b=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function TA(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,N){const L=N.program;s.uniformBlockBinding(b,L)}function h(b,N){let L=o[b.id];L===void 0&&(M(b),L=v(b),o[b.id]=L,b.addEventListener("dispose",x));const z=N.program;s.updateUBOMapping(b,z);const F=e.render.frame;l[b.id]!==F&&(g(b),l[b.id]=F)}function v(b){const N=_();b.__bindingPointIndex=N;const L=r.createBuffer(),z=b.__size,F=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,L),L}function _(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const N=o[b.id],L=b.uniforms,z=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let F=0,V=L.length;F<V;F++){const A=Array.isArray(L[F])?L[F]:[L[F]];for(let P=0,se=A.length;P<se;P++){const k=A[P];if(S(k,F,P,z)===!0){const H=k.__offset,j=Array.isArray(k.value)?k.value:[k.value];let K=0;for(let G=0;G<j.length;G++){const B=j[G],O=E(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,H+K,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,K),K+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(b,N,L,z){const F=b.value,V=N+"_"+L;if(z[V]===void 0)return typeof F=="number"||typeof F=="boolean"?z[V]=F:z[V]=F.clone(),!0;{const A=z[V];if(typeof F=="number"||typeof F=="boolean"){if(A!==F)return z[V]=F,!0}else if(A.equals(F)===!1)return A.copy(F),!0}return!1}function M(b){const N=b.uniforms;let L=0;const z=16;for(let V=0,A=N.length;V<A;V++){const P=Array.isArray(N[V])?N[V]:[N[V]];for(let se=0,k=P.length;se<k;se++){const H=P[se],j=Array.isArray(H.value)?H.value:[H.value];for(let K=0,G=j.length;K<G;K++){const B=j[K],O=E(B),$=L%z,ee=$%O.boundary,ce=$+ee;L+=ee,ce!==0&&z-ce<O.storage&&(L+=z-ce),H.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=L,L+=O.storage}}}const F=L%z;return F>0&&(L+=z-F),b.__size=L,b.__cache={},this}function E(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",b),N}function x(b){const N=b.target;N.removeEventListener("dispose",x);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function y(){for(const b in o)r.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:p,update:h,dispose:y}}const AA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function CA(){return Ti===null&&(Ti=new cM(AA,16,16,ea,er),Ti.name="DFG_LUT",Ti.minFilter=xn,Ti.magFilter=xn,Ti.wrapS=Zi,Ti.wrapT=Zi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class RA{constructor(e={}){const{canvas:t=TS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Xn}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const E=S,x=new Set([zd,Bd,kd]),y=new Set([Xn,Li,so,ao,Fd,Od]),b=new Uint32Array(4),N=new Int32Array(4);let L=null,z=null;const F=[],V=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let se=!1;this._outputColorSpace=jn;let k=0,H=0,j=null,K=-1,G=null;const B=new Xt,O=new Xt;let $=null;const ee=new xt(0);let ce=0,U=t.width,te=t.height,ve=1,Re=null,Pe=null;const ne=new Xt(0,0,U,te),pe=new Xt(0,0,U,te);let me=!1;const Ie=new Xd;let ze=!1,it=!1;const qt=new Wt,pt=new le,St=new Xt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ot(){return j===null?ve:1}let X=s;function zt(C,Q){return t.getContext(C,Q)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Id}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),X===null){const Q="webgl2";if(X=zt(Q,C),X===null)throw zt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ct("WebGLRenderer: "+C.message),C}let gt,Mt,Xe,D,w,Z,ge,_e,de,He,Ce,Ke,rt,Me,Ae,qe,Ge,Ue,ct,q,be,we,Fe;function Ee(){gt=new Rw(X),gt.init(),be=new _A(X,gt),Mt=new yw(X,gt,e,be),Xe=new gA(X,gt),Mt.reversedDepthBuffer&&g&&Xe.buffers.depth.setReversed(!0),D=new Nw(X),w=new nA,Z=new vA(X,gt,Xe,w,Mt,be,D),ge=new Cw(P),_e=new FM(X),we=new _w(X,_e),de=new bw(X,_e,D,we),He=new Dw(X,de,_e,we,D),Ue=new Lw(X,Mt,Z),Ae=new Sw(w),Ce=new tA(P,ge,gt,Mt,we,Ae),Ke=new wA(P,w),rt=new rA,Me=new uA(gt),Ge=new vw(P,ge,Xe,He,M,p),qe=new mA(P,He,Mt),Fe=new TA(X,D,Mt,Xe),ct=new xw(X,gt,D),q=new Pw(X,gt,D),D.programs=Ce.programs,P.capabilities=Mt,P.extensions=gt,P.properties=w,P.renderLists=rt,P.shadowMap=qe,P.state=Xe,P.info=D}Ee(),E!==Xn&&(A=new Uw(E,t.width,t.height,o,l));const he=new MA(P,X);this.xr=he,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(C){C!==void 0&&(ve=C,this.setSize(U,te,!1))},this.getSize=function(C){return C.set(U,te)},this.setSize=function(C,Q,fe=!0){if(he.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,te=Q,t.width=Math.floor(C*ve),t.height=Math.floor(Q*ve),fe===!0&&(t.style.width=C+"px",t.style.height=Q+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(U*ve,te*ve).floor()},this.setDrawingBufferSize=function(C,Q,fe){U=C,te=Q,ve=fe,t.width=Math.floor(C*fe),t.height=Math.floor(Q*fe),this.setViewport(0,0,C,Q)},this.setEffects=function(C){if(E===Xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Q=0;Q<C.length;Q++)if(C[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,Q,fe,oe){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,Q,fe,oe),Xe.viewport(B.copy(ne).multiplyScalar(ve).round())},this.getScissor=function(C){return C.copy(pe)},this.setScissor=function(C,Q,fe,oe){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,Q,fe,oe),Xe.scissor(O.copy(pe).multiplyScalar(ve).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){Xe.setScissorTest(me=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){Pe=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,fe=!0){let oe=0;if(C){let re=!1;if(j!==null){const Le=j.texture.format;re=x.has(Le)}if(re){const Le=j.texture.type,Be=y.has(Le),Ne=Ge.getClearColor(),Oe=Ge.getClearAlpha(),Je=Ne.r,et=Ne.g,ft=Ne.b;Be?(b[0]=Je,b[1]=et,b[2]=ft,b[3]=Oe,X.clearBufferuiv(X.COLOR,0,b)):(N[0]=Je,N[1]=et,N[2]=ft,N[3]=Oe,X.clearBufferiv(X.COLOR,0,N))}else oe|=X.COLOR_BUFFER_BIT}Q&&(oe|=X.DEPTH_BUFFER_BIT),fe&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),Ge.dispose(),rt.dispose(),Me.dispose(),w.dispose(),ge.dispose(),He.dispose(),we.dispose(),Fe.dispose(),Ce.dispose(),he.dispose(),he.removeEventListener("sessionstart",nr),he.removeEventListener("sessionend",Fr),$n.stop()};function We(C){C.preventDefault(),Hm("WebGLRenderer: Context Lost."),se=!0}function st(){Hm("WebGLRenderer: Context Restored."),se=!1;const C=D.autoReset,Q=qe.enabled,fe=qe.autoUpdate,oe=qe.needsUpdate,re=qe.type;Ee(),D.autoReset=C,qe.enabled=Q,qe.autoUpdate=fe,qe.needsUpdate=oe,qe.type=re}function Lt(C){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Et(C){const Q=C.target;Q.removeEventListener("dispose",Et),qn(Q)}function qn(C){Mn(C),w.remove(C)}function Mn(C){const Q=w.get(C).programs;Q!==void 0&&(Q.forEach(function(fe){Ce.releaseProgram(fe)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,fe,oe,re,Le){Q===null&&(Q=Pt);const Be=re.isMesh&&re.matrixWorld.determinant()<0,Ne=vo(C,Q,fe,oe,re);Xe.setMaterial(oe,Be);let Oe=fe.index,Je=1;if(oe.wireframe===!0){if(Oe=de.getWireframeAttribute(fe),Oe===void 0)return;Je=2}const et=fe.drawRange,ft=fe.attributes.position;let Qe=et.start*Je,Nt=(et.start+et.count)*Je;Le!==null&&(Qe=Math.max(Qe,Le.start*Je),Nt=Math.min(Nt,(Le.start+Le.count)*Je)),Oe!==null?(Qe=Math.max(Qe,0),Nt=Math.min(Nt,Oe.count)):ft!=null&&(Qe=Math.max(Qe,0),Nt=Math.min(Nt,ft.count));const Ut=Nt-Qe;if(Ut<0||Ut===1/0)return;we.setup(re,oe,Ne,fe,Oe);let It,yt=ct;if(Oe!==null&&(It=_e.get(Oe),yt=q,yt.setIndex(It)),re.isMesh)oe.wireframe===!0?(Xe.setLineWidth(oe.wireframeLinewidth*Ot()),yt.setMode(X.LINES)):yt.setMode(X.TRIANGLES);else if(re.isLine){let $t=oe.linewidth;$t===void 0&&($t=1),Xe.setLineWidth($t*Ot()),re.isLineSegments?yt.setMode(X.LINES):re.isLineLoop?yt.setMode(X.LINE_LOOP):yt.setMode(X.LINE_STRIP)}else re.isPoints?yt.setMode(X.POINTS):re.isSprite&&yt.setMode(X.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)nc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))yt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const $t=re._multiDrawStarts,Ye=re._multiDrawCounts,En=re._multiDrawCount,vt=Oe?_e.get(Oe).bytesPerElement:1,bn=w.get(oe).currentProgram.getUniforms();for(let Pn=0;Pn<En;Pn++)bn.setValue(X,"_gl_DrawID",Pn),yt.render($t[Pn]/vt,Ye[Pn])}else if(re.isInstancedMesh)yt.renderInstances(Qe,Ut,re.count);else if(fe.isInstancedBufferGeometry){const $t=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ye=Math.min(fe.instanceCount,$t);yt.renderInstances(Qe,Ut,Ye)}else yt.render(Qe,Ut)};function us(C,Q,fe){C.transparent===!0&&C.side===gi&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,kr(C,Q,fe),C.side=Dr,C.needsUpdate=!0,kr(C,Q,fe),C.side=gi):kr(C,Q,fe)}this.compile=function(C,Q,fe=null){fe===null&&(fe=C),z=Me.get(fe),z.init(Q),V.push(z),fe.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(z.pushLight(re),re.castShadow&&z.pushShadow(re))}),C!==fe&&C.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(z.pushLight(re),re.castShadow&&z.pushShadow(re))}),z.setupLights();const oe=new Set;return C.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Le=re.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Ne=Le[Be];us(Ne,fe,re),oe.add(Ne)}else us(Le,fe,re),oe.add(Le)}),z=V.pop(),oe},this.compileAsync=function(C,Q,fe=null){const oe=this.compile(C,Q,fe);return new Promise(re=>{function Le(){if(oe.forEach(function(Be){w.get(Be).currentProgram.isReady()&&oe.delete(Be)}),oe.size===0){re(C);return}setTimeout(Le,10)}gt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Fi=null;function hc(C){Fi&&Fi(C)}function nr(){$n.stop()}function Fr(){$n.start()}const $n=new L0;$n.setAnimationLoop(hc),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(C){Fi=C,he.setAnimationLoop(C),C===null?$n.stop():$n.start()},he.addEventListener("sessionstart",nr),he.addEventListener("sessionend",Fr),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(se===!0)return;const fe=he.enabled===!0&&he.isPresenting===!0,oe=A!==null&&(j===null||fe)&&A.begin(P,j);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(Q),Q=he.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,Q,j),z=Me.get(C,V.length),z.init(Q),V.push(z),qt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ie.setFromProjectionMatrix(qt,Ri,Q.reversedDepth),it=this.localClippingEnabled,ze=Ae.init(this.clippingPlanes,it),L=rt.get(C,F.length),L.init(),F.push(L),he.enabled===!0&&he.isPresenting===!0){const Be=P.xr.getDepthSensingMesh();Be!==null&&Or(Be,Q,-1/0,P.sortObjects)}Or(C,Q,0,P.sortObjects),L.finish(),P.sortObjects===!0&&L.sort(Re,Pe),ut=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ut&&Ge.addToRenderList(L,C),this.info.render.frame++,ze===!0&&Ae.beginShadows();const re=z.state.shadowsArray;if(qe.render(re,C,Q),ze===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&A.hasRenderPass())===!1){const Be=L.opaque,Ne=L.transmissive;if(z.setupLights(),Q.isArrayCamera){const Oe=Q.cameras;if(Ne.length>0)for(let Je=0,et=Oe.length;Je<et;Je++){const ft=Oe[Je];mo(Be,Ne,C,ft)}ut&&Ge.render(C);for(let Je=0,et=Oe.length;Je<et;Je++){const ft=Oe[Je];po(L,C,ft,ft.viewport)}}else Ne.length>0&&mo(Be,Ne,C,Q),ut&&Ge.render(C),po(L,C,Q)}j!==null&&H===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),oe&&A.end(P),C.isScene===!0&&C.onAfterRender(P,C,Q),we.resetDefaultState(),K=-1,G=null,V.pop(),V.length>0?(z=V[V.length-1],ze===!0&&Ae.setGlobalState(P.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function Or(C,Q,fe,oe){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ie.intersectsSprite(C)){oe&&St.setFromMatrixPosition(C.matrixWorld).applyMatrix4(qt);const Be=He.update(C),Ne=C.material;Ne.visible&&L.push(C,Be,Ne,fe,St.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ie.intersectsObject(C))){const Be=He.update(C),Ne=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),St.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),St.copy(Be.boundingSphere.center)),St.applyMatrix4(C.matrixWorld).applyMatrix4(qt)),Array.isArray(Ne)){const Oe=Be.groups;for(let Je=0,et=Oe.length;Je<et;Je++){const ft=Oe[Je],Qe=Ne[ft.materialIndex];Qe&&Qe.visible&&L.push(C,Be,Qe,fe,St.z,ft)}}else Ne.visible&&L.push(C,Be,Ne,fe,St.z,null)}}const Le=C.children;for(let Be=0,Ne=Le.length;Be<Ne;Be++)Or(Le[Be],Q,fe,oe)}function po(C,Q,fe,oe){const{opaque:re,transmissive:Le,transparent:Be}=C;z.setupLightsView(fe),ze===!0&&Ae.setGlobalState(P.clippingPlanes,fe),oe&&Xe.viewport(B.copy(oe)),re.length>0&&fs(re,Q,fe),Le.length>0&&fs(Le,Q,fe),Be.length>0&&fs(Be,Q,fe),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function mo(C,Q,fe,oe){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[oe.id]===void 0){const Qe=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[oe.id]=new Pi(1,1,{generateMipmaps:!0,type:Qe?er:Xn,minFilter:as,samples:Math.max(4,Mt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=z.state.transmissionRenderTarget[oe.id],Be=oe.viewport||B;Le.setSize(Be.z*P.transmissionResolutionScale,Be.w*P.transmissionResolutionScale);const Ne=P.getRenderTarget(),Oe=P.getActiveCubeFace(),Je=P.getActiveMipmapLevel();P.setRenderTarget(Le),P.getClearColor(ee),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),ut&&Ge.render(fe);const et=P.toneMapping;P.toneMapping=bi;const ft=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),z.setupLightsView(oe),ze===!0&&Ae.setGlobalState(P.clippingPlanes,oe),fs(C,fe,oe),Z.updateMultisampleRenderTarget(Le),Z.updateRenderTargetMipmap(Le),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Nt=0,Ut=Q.length;Nt<Ut;Nt++){const It=Q[Nt],{object:yt,geometry:$t,material:Ye,group:En}=It;if(Ye.side===gi&&yt.layers.test(oe.layers)){const vt=Ye.side;Ye.side=On,Ye.needsUpdate=!0,xi(yt,fe,oe,$t,Ye,En),Ye.side=vt,Ye.needsUpdate=!0,Qe=!0}}Qe===!0&&(Z.updateMultisampleRenderTarget(Le),Z.updateRenderTargetMipmap(Le))}P.setRenderTarget(Ne,Oe,Je),P.setClearColor(ee,ce),ft!==void 0&&(oe.viewport=ft),P.toneMapping=et}function fs(C,Q,fe){const oe=Q.isScene===!0?Q.overrideMaterial:null;for(let re=0,Le=C.length;re<Le;re++){const Be=C[re],{object:Ne,geometry:Oe,group:Je}=Be;let et=Be.material;et.allowOverride===!0&&oe!==null&&(et=oe),Ne.layers.test(fe.layers)&&xi(Ne,Q,fe,Oe,et,Je)}}function xi(C,Q,fe,oe,re,Le){C.onBeforeRender(P,Q,fe,oe,re,Le),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(P,Q,fe,oe,C,Le),re.transparent===!0&&re.side===gi&&re.forceSinglePass===!1?(re.side=On,re.needsUpdate=!0,P.renderBufferDirect(fe,Q,oe,re,C,Le),re.side=Dr,re.needsUpdate=!0,P.renderBufferDirect(fe,Q,oe,re,C,Le),re.side=gi):P.renderBufferDirect(fe,Q,oe,re,C,Le),C.onAfterRender(P,Q,fe,oe,re,Le)}function kr(C,Q,fe){Q.isScene!==!0&&(Q=Pt);const oe=w.get(C),re=z.state.lights,Le=z.state.shadowsArray,Be=re.state.version,Ne=Ce.getParameters(C,re.state,Le,Q,fe),Oe=Ce.getProgramCacheKey(Ne);let Je=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Q.environment:null,oe.fog=Q.fog;const et=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=ge.get(C.envMap||oe.environment,et),oe.envMapRotation=oe.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",Et),Je=new Map,oe.programs=Je);let ft=Je.get(Oe);if(ft!==void 0){if(oe.currentProgram===ft&&oe.lightsStateVersion===Be)return go(C,Ne),ft}else Ne.uniforms=Ce.getUniforms(C),C.onBeforeCompile(Ne,P),ft=Ce.acquireProgram(Ne,Oe),Je.set(Oe,ft),oe.uniforms=Ne.uniforms;const Qe=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qe.clippingPlanes=Ae.uniform),go(C,Ne),oe.needsLights=xo(C),oe.lightsStateVersion=Be,oe.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),oe.currentProgram=ft,oe.uniformsList=null,ft}function fa(C){if(C.uniformsList===null){const Q=C.currentProgram.getUniforms();C.uniformsList=Jl.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function go(C,Q){const fe=w.get(C);fe.outputColorSpace=Q.outputColorSpace,fe.batching=Q.batching,fe.batchingColor=Q.batchingColor,fe.instancing=Q.instancing,fe.instancingColor=Q.instancingColor,fe.instancingMorph=Q.instancingMorph,fe.skinning=Q.skinning,fe.morphTargets=Q.morphTargets,fe.morphNormals=Q.morphNormals,fe.morphColors=Q.morphColors,fe.morphTargetsCount=Q.morphTargetsCount,fe.numClippingPlanes=Q.numClippingPlanes,fe.numIntersection=Q.numClipIntersection,fe.vertexAlphas=Q.vertexAlphas,fe.vertexTangents=Q.vertexTangents,fe.toneMapping=Q.toneMapping}function vo(C,Q,fe,oe,re){Q.isScene!==!0&&(Q=Pt),Z.resetTextureUnits();const Le=Q.fog,Be=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Q.environment:null,Ne=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ta,Oe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Je=ge.get(oe.envMap||Be,Oe),et=oe.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ft=!!fe.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Qe=!!fe.morphAttributes.position,Nt=!!fe.morphAttributes.normal,Ut=!!fe.morphAttributes.color;let It=bi;oe.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=P.toneMapping);const yt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,$t=yt!==void 0?yt.length:0,Ye=w.get(oe),En=z.state.lights;if(ze===!0&&(it===!0||C!==G)){const Yt=C===G&&oe.id===K;Ae.setState(oe,C,Yt)}let vt=!1;oe.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==En.state.version||Ye.outputColorSpace!==Ne||re.isBatchedMesh&&Ye.batching===!1||!re.isBatchedMesh&&Ye.batching===!0||re.isBatchedMesh&&Ye.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ye.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ye.instancing===!1||!re.isInstancedMesh&&Ye.instancing===!0||re.isSkinnedMesh&&Ye.skinning===!1||!re.isSkinnedMesh&&Ye.skinning===!0||re.isInstancedMesh&&Ye.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ye.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ye.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ye.instancingMorph===!1&&re.morphTexture!==null||Ye.envMap!==Je||oe.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ae.numPlanes||Ye.numIntersection!==Ae.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==ft||Ye.morphTargets!==Qe||Ye.morphNormals!==Nt||Ye.morphColors!==Ut||Ye.toneMapping!==It||Ye.morphTargetsCount!==$t)&&(vt=!0):(vt=!0,Ye.__version=oe.version);let bn=Ye.currentProgram;vt===!0&&(bn=kr(oe,Q,re));let Pn=!1,kn=!1,ir=!1;const Rt=bn.getUniforms(),at=Ye.uniforms;if(Xe.useProgram(bn.program)&&(Pn=!0,kn=!0,ir=!0),oe.id!==K&&(K=oe.id,kn=!0),Pn||G!==C){Xe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Rt.setValue(X,"projectionMatrix",C.projectionMatrix),Rt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Yn=Rt.map.cameraPosition;Yn!==void 0&&Yn.setValue(X,pt.setFromMatrixPosition(C.matrixWorld)),Mt.logarithmicDepthBuffer&&Rt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Rt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,kn=!0,ir=!0)}if(Ye.needsLights&&(En.state.directionalShadowMap.length>0&&Rt.setValue(X,"directionalShadowMap",En.state.directionalShadowMap,Z),En.state.spotShadowMap.length>0&&Rt.setValue(X,"spotShadowMap",En.state.spotShadowMap,Z),En.state.pointShadowMap.length>0&&Rt.setValue(X,"pointShadowMap",En.state.pointShadowMap,Z)),re.isSkinnedMesh){Rt.setOptional(X,re,"bindMatrix"),Rt.setOptional(X,re,"bindMatrixInverse");const Yt=re.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Rt.setValue(X,"boneTexture",Yt.boneTexture,Z))}re.isBatchedMesh&&(Rt.setOptional(X,re,"batchingTexture"),Rt.setValue(X,"batchingTexture",re._matricesTexture,Z),Rt.setOptional(X,re,"batchingIdTexture"),Rt.setValue(X,"batchingIdTexture",re._indirectTexture,Z),Rt.setOptional(X,re,"batchingColorTexture"),re._colorsTexture!==null&&Rt.setValue(X,"batchingColorTexture",re._colorsTexture,Z));const ai=fe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ue.update(re,fe,bn),(kn||Ye.receiveShadow!==re.receiveShadow)&&(Ye.receiveShadow=re.receiveShadow,Rt.setValue(X,"receiveShadow",re.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Q.environment!==null&&(at.envMapIntensity.value=Q.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=CA()),kn&&(Rt.setValue(X,"toneMappingExposure",P.toneMappingExposure),Ye.needsLights&&_o(at,ir),Le&&oe.fog===!0&&Ke.refreshFogUniforms(at,Le),Ke.refreshMaterialUniforms(at,oe,ve,te,z.state.transmissionRenderTarget[C.id]),Jl.upload(X,fa(Ye),at,Z)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Jl.upload(X,fa(Ye),at,Z),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Rt.setValue(X,"center",re.center),Rt.setValue(X,"modelViewMatrix",re.modelViewMatrix),Rt.setValue(X,"normalMatrix",re.normalMatrix),Rt.setValue(X,"modelMatrix",re.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Yt=oe.uniformsGroups;for(let Yn=0,Oi=Yt.length;Yn<Oi;Yn++){const da=Yt[Yn];Fe.update(da,bn),Fe.bind(da,bn)}}return bn}function _o(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function xo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,Q,fe){const oe=w.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),w.get(C.texture).__webglTexture=Q,w.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:fe,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){const fe=w.get(C);fe.__webglFramebuffer=Q,fe.__useDefaultFramebuffer=Q===void 0};const yo=X.createFramebuffer();this.setRenderTarget=function(C,Q=0,fe=0){j=C,k=Q,H=fe;let oe=null,re=!1,Le=!1;if(C){const Ne=w.get(C);if(Ne.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(X.FRAMEBUFFER,Ne.__webglFramebuffer),B.copy(C.viewport),O.copy(C.scissor),$=C.scissorTest,Xe.viewport(B),Xe.scissor(O),Xe.setScissorTest($),K=-1;return}else if(Ne.__webglFramebuffer===void 0)Z.setupRenderTarget(C);else if(Ne.__hasExternalTextures)Z.rebindTextures(C,w.get(C.texture).__webglTexture,w.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&w.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(C)}}const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Le=!0);const Je=w.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[Q])?oe=Je[Q][fe]:oe=Je[Q],re=!0):C.samples>0&&Z.useMultisampledRTT(C)===!1?oe=w.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?oe=Je[fe]:oe=Je,B.copy(C.viewport),O.copy(C.scissor),$=C.scissorTest}else B.copy(ne).multiplyScalar(ve).floor(),O.copy(pe).multiplyScalar(ve).floor(),$=me;if(fe!==0&&(oe=yo),Xe.bindFramebuffer(X.FRAMEBUFFER,oe)&&Xe.drawBuffers(C,oe),Xe.viewport(B),Xe.scissor(O),Xe.setScissorTest($),re){const Ne=w.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ne.__webglTexture,fe)}else if(Le){const Ne=Q;for(let Oe=0;Oe<C.textures.length;Oe++){const Je=w.get(C.textures[Oe]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Oe,Je.__webglTexture,fe,Ne)}}else if(C!==null&&fe!==0){const Ne=w.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ne.__webglTexture,fe)}K=-1},this.readRenderTargetPixels=function(C,Q,fe,oe,re,Le,Be,Ne=0){if(!(C&&C.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Oe=Oe[Be]),Oe){Xe.bindFramebuffer(X.FRAMEBUFFER,Oe);try{const Je=C.textures[Ne],et=Je.format,ft=Je.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne),!Mt.textureFormatReadable(et)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(ft)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-oe&&fe>=0&&fe<=C.height-re&&X.readPixels(Q,fe,oe,re,be.convert(et),be.convert(ft),Le)}finally{const Je=j!==null?w.get(j).__webglFramebuffer:null;Xe.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,Q,fe,oe,re,Le,Be,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Oe=Oe[Be]),Oe)if(Q>=0&&Q<=C.width-oe&&fe>=0&&fe<=C.height-re){Xe.bindFramebuffer(X.FRAMEBUFFER,Oe);const Je=C.textures[Ne],et=Je.format,ft=Je.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ne),!Mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.bufferData(X.PIXEL_PACK_BUFFER,Le.byteLength,X.STREAM_READ),X.readPixels(Q,fe,oe,re,be.convert(et),be.convert(ft),0);const Nt=j!==null?w.get(j).__webglFramebuffer:null;Xe.bindFramebuffer(X.FRAMEBUFFER,Nt);const Ut=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await AS(X,Ut,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Qe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Le),X.deleteBuffer(Qe),X.deleteSync(Ut),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,fe=0){const oe=Math.pow(2,-fe),re=Math.floor(C.image.width*oe),Le=Math.floor(C.image.height*oe),Be=Q!==null?Q.x:0,Ne=Q!==null?Q.y:0;Z.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,Be,Ne,re,Le),Xe.unbindTexture()};const pc=X.createFramebuffer(),mc=X.createFramebuffer();this.copyTextureToTexture=function(C,Q,fe=null,oe=null,re=0,Le=0){let Be,Ne,Oe,Je,et,ft,Qe,Nt,Ut;const It=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(fe!==null)Be=fe.max.x-fe.min.x,Ne=fe.max.y-fe.min.y,Oe=fe.isBox3?fe.max.z-fe.min.z:1,Je=fe.min.x,et=fe.min.y,ft=fe.isBox3?fe.min.z:0;else{const at=Math.pow(2,-re);Be=Math.floor(It.width*at),Ne=Math.floor(It.height*at),C.isDataArrayTexture?Oe=It.depth:C.isData3DTexture?Oe=Math.floor(It.depth*at):Oe=1,Je=0,et=0,ft=0}oe!==null?(Qe=oe.x,Nt=oe.y,Ut=oe.z):(Qe=0,Nt=0,Ut=0);const yt=be.convert(Q.format),$t=be.convert(Q.type);let Ye;Q.isData3DTexture?(Z.setTexture3D(Q,0),Ye=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Ye=X.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Ye=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const En=X.getParameter(X.UNPACK_ROW_LENGTH),vt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),bn=X.getParameter(X.UNPACK_SKIP_PIXELS),Pn=X.getParameter(X.UNPACK_SKIP_ROWS),kn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,It.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,It.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ft);const ir=C.isDataArrayTexture||C.isData3DTexture,Rt=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){const at=w.get(C),ai=w.get(Q),Yt=w.get(at.__renderTarget),Yn=w.get(ai.__renderTarget);Xe.bindFramebuffer(X.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Xe.bindFramebuffer(X.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Oi=0;Oi<Oe;Oi++)ir&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,w.get(C).__webglTexture,re,ft+Oi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,w.get(Q).__webglTexture,Le,Ut+Oi)),X.blitFramebuffer(Je,et,Be,Ne,Qe,Nt,Be,Ne,X.DEPTH_BUFFER_BIT,X.NEAREST);Xe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(re!==0||C.isRenderTargetTexture||w.has(C)){const at=w.get(C),ai=w.get(Q);Xe.bindFramebuffer(X.READ_FRAMEBUFFER,pc),Xe.bindFramebuffer(X.DRAW_FRAMEBUFFER,mc);for(let Yt=0;Yt<Oe;Yt++)ir?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,at.__webglTexture,re,ft+Yt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,at.__webglTexture,re),Rt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ai.__webglTexture,Le,Ut+Yt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ai.__webglTexture,Le),re!==0?X.blitFramebuffer(Je,et,Be,Ne,Qe,Nt,Be,Ne,X.COLOR_BUFFER_BIT,X.NEAREST):Rt?X.copyTexSubImage3D(Ye,Le,Qe,Nt,Ut+Yt,Je,et,Be,Ne):X.copyTexSubImage2D(Ye,Le,Qe,Nt,Je,et,Be,Ne);Xe.bindFramebuffer(X.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Rt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Ye,Le,Qe,Nt,Ut,Be,Ne,Oe,yt,$t,It.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(Ye,Le,Qe,Nt,Ut,Be,Ne,Oe,yt,It.data):X.texSubImage3D(Ye,Le,Qe,Nt,Ut,Be,Ne,Oe,yt,$t,It):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Le,Qe,Nt,Be,Ne,yt,$t,It.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Le,Qe,Nt,It.width,It.height,yt,It.data):X.texSubImage2D(X.TEXTURE_2D,Le,Qe,Nt,Be,Ne,yt,$t,It);X.pixelStorei(X.UNPACK_ROW_LENGTH,En),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,bn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Pn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,kn),Le===0&&Q.generateMipmaps&&X.generateMipmap(Ye),Xe.unbindTexture()},this.initRenderTarget=function(C){w.get(C).__webglFramebuffer===void 0&&Z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){k=0,H=0,j=null,Xe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const bA=({previewUrl:r,rotateH:e,rotateV:t,distance:s})=>{const o=J.useRef(null),l=J.useRef(null),u=J.useRef(null),f=J.useRef(null),p=J.useRef(null);return J.useEffect(()=>{if(!o.current)return;const h=o.current,v=h.clientWidth||1,_=h.clientHeight||1,g=new iM;g.background=new xt(2236962),l.current=g;const S=new ii(75,v/_,.1,1e3);u.current=S;const M=new RA({antialias:!0,alpha:!0});M.setSize(v,_),M.setPixelRatio(window.devicePixelRatio),h.appendChild(M.domElement),f.current=M;const E=new ls(3,3),x=new yM({color:4473924,side:gi}),y=new Ii(E,x);g.add(y),p.current=y;const b=new DM(20,20,4473924,3355443);g.add(b);const N=new PM(16777215,.6);g.add(N);const L=new bM(16777215,1);L.position.set(5,10,7),g.add(L);const z=new IM(5);g.add(z);let F;const V=()=>{F=requestAnimationFrame(V),M.render(g,S)};V();const A=()=>{if(!o.current)return;const se=o.current.clientWidth||1,k=o.current.clientHeight||1;S.aspect=se/k,S.updateProjectionMatrix(),M.setSize(se,k)},P=new ResizeObserver(A);return P.observe(h),()=>{cancelAnimationFrame(F),P.disconnect(),f.current&&h.contains(f.current.domElement)&&h.removeChild(f.current.domElement),M.dispose(),E.dispose(),x.dispose()}},[]),J.useEffect(()=>{!p.current||!r||new AM().load(r,h=>{h.colorSpace=jn;const v=h.image.width/h.image.height,_=p.current;v>1?(_.scale.set(1,1/v,1),_.geometry.dispose(),_.geometry=new ls(3,3/v),_.scale.set(1,1,1)):(_.scale.set(1,1,1),_.geometry.dispose(),_.geometry=new ls(3*v,3),_.scale.set(1,1,1));const g=new jd({map:h,side:gi});_.material.map&&_.material.map.dispose(),_.material.dispose(),_.material=g,_.material.needsUpdate=!0},void 0,h=>{console.error("Error loading texture:",h)})},[r]),J.useEffect(()=>{if(!u.current)return;const h=u.current,v=Wm.degToRad(90-t),_=Wm.degToRad(e);h.position.x=s*Math.sin(v)*Math.sin(_),h.position.y=s*Math.cos(v),h.position.z=s*Math.sin(v)*Math.cos(_),h.lookAt(0,0,0)},[e,t,s]),R.jsx("div",{ref:o,className:"w-full h-full bg-[#222]"})},PA=({engine:r,onEngineChange:e,prompt:t,onPromptChange:s,rotateH:o,rotateV:l,distance:u,onRotateHChange:f,onRotateVChange:p,onDistanceChange:h,onGenerate:v,rendering:_,progress:g,previewUrl:S})=>{const M=E=>{E==="h"&&f(0),E==="v"&&p(0),E==="d"&&h(4)};return R.jsxs("div",{className:"a-controls-container",children:[R.jsxs("div",{className:"a-camera-section",children:[R.jsx("h3",{className:"a-section-title",children:"02. Camera Control"}),R.jsxs("div",{className:"a-camera-panel",children:[R.jsx("div",{className:"a-three-view-wrapper",children:R.jsx(bA,{previewUrl:S,rotateH:o,rotateV:l,distance:u})}),R.jsxs("div",{className:"a-camera-sliders",children:[R.jsxs("div",{className:"a-slider-group",children:[R.jsxs("div",{className:"a-slider-header",children:[R.jsxs("div",{className:"a-slider-label",children:[R.jsx(Ny,{size:12}),R.jsx("span",{children:"Rotation"})]}),R.jsxs("div",{className:"a-slider-actions",children:[R.jsx("button",{onClick:()=>M("h"),title:"Reset",children:R.jsx(Zu,{size:12})}),R.jsxs("div",{className:"a-val-box",children:[R.jsx("input",{type:"number",value:o,onChange:E=>f(Number(E.target.value))}),R.jsx("span",{children:"°"})]})]})]}),R.jsx("input",{type:"range",min:"-90",max:"90",value:o,onChange:E=>f(Number(E.target.value))})]}),R.jsxs("div",{className:"a-slider-group",children:[R.jsxs("div",{className:"a-slider-header",children:[R.jsxs("div",{className:"a-slider-label",children:[R.jsx(Dy,{size:12}),R.jsx("span",{children:"Pitch"})]}),R.jsxs("div",{className:"a-slider-actions",children:[R.jsx("button",{onClick:()=>M("v"),title:"Reset",children:R.jsx(Zu,{size:12})}),R.jsxs("div",{className:"a-val-box",children:[R.jsx("input",{type:"number",value:l,onChange:E=>p(Number(E.target.value))}),R.jsx("span",{children:"°"})]})]})]}),R.jsx("input",{type:"range",min:"-90",max:"90",value:l,onChange:E=>p(Number(E.target.value))})]}),R.jsxs("div",{className:"a-slider-group",children:[R.jsxs("div",{className:"a-slider-header",children:[R.jsxs("div",{className:"a-slider-label",children:[R.jsx(Wy,{size:12}),R.jsx("span",{children:"Distance"})]}),R.jsxs("div",{className:"a-slider-actions",children:[R.jsx("button",{onClick:()=>M("d"),title:"Reset",children:R.jsx(Zu,{size:12})}),R.jsx("div",{className:"a-val-box",children:R.jsx("input",{type:"number",step:"0.1",value:u,onChange:E=>h(Number(E.target.value))})})]})]}),R.jsx("input",{type:"range",min:"0.1",max:"8",step:"0.1",value:u,onChange:E=>h(Number(E.target.value))})]})]})]})]}),R.jsxs("div",{className:"a-params-section",children:[R.jsx("h3",{className:"a-section-title",children:"03. Parameters"}),R.jsxs("div",{className:"a-prompt-box",children:[R.jsxs("div",{className:"a-prompt-header",children:[R.jsx(ky,{size:12}),R.jsx("span",{children:"Prompt"})]}),R.jsx("textarea",{className:"a-prompt-textarea",placeholder:"请通过右侧控制器调整，或输入提示词",value:t,onChange:E=>s(E.target.value)})]}),R.jsxs("div",{className:"a-engine-switcher",children:[R.jsxs("div",{className:`a-engine-btn ${r==="local"?"active":""}`,onClick:()=>e("local"),children:[R.jsx(by,{size:12}),R.jsx("span",{children:"Local"})]}),R.jsx("div",{className:`a-engine-btn ${r==="cloud"?"active":""}`,onClick:()=>e("cloud"),children:R.jsx("img",{src:"/static/modelscope.gif",className:"a-ms-logo",alt:"ModelScope",style:r!=="cloud"?{filter:"grayscale(100%)",opacity:.5}:{}})}),R.jsx("div",{className:"a-engine-glider",style:{transform:r==="local"?"translateX(0)":"translateX(100%)"}})]}),R.jsxs("button",{className:"a-generate-btn",onClick:v,disabled:_,children:[R.jsx(Hy,{size:16,className:`text-yellow-400 ${_?"animate-pulse":""}`}),R.jsx("span",{children:_?"Processing...":"Generate New Angle"})]})]})]})},NA=({items:r,onOpen:e,onLoadMore:t,hasMore:s})=>R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"a-masonry-grid",children:r.map((o,l)=>{const u=o.images?.[0];if(!u)return null;const f=o.is_cloud||u.includes("cloud_angle");return R.jsxs("div",{className:"a-masonry-item group",onClick:()=>e(o),children:[R.jsx("img",{src:u,alt:"history"}),f&&R.jsx("div",{className:"a-cloud-badge",children:R.jsx("img",{src:"/static/modelscope.gif",alt:"cloud"})}),R.jsx("div",{className:"a-masonry-overlay",children:R.jsx("p",{children:o.prompt||"Angle Control"})})]},`${o.timestamp}-${l}`)})}),R.jsx("div",{className:"a-load-more-wrap",children:s?R.jsx("button",{className:"a-load-more",onClick:t,children:"Load More"}):R.jsx("div",{className:"a-end-archive",children:"End of Archive"})})]}),LA=({item:r,onClose:e})=>{if(!r)return null;const t=r.images?.[0];return t?R.jsxs("div",{className:"a-lightbox-mask",onClick:s=>s.target===s.currentTarget&&e(),children:[R.jsx("button",{className:"a-lightbox-close",onClick:e,children:R.jsx(zy,{size:24})}),R.jsxs("div",{className:"a-lightbox-content",children:[R.jsx("div",{className:"a-lightbox-img-wrapper",children:R.jsx("img",{src:t,alt:"lightbox-preview"})}),R.jsx("div",{className:"a-lightbox-actions",children:R.jsxs("a",{href:t,download:`Angle-Master-${Date.now()}.png`,className:"a-lightbox-download",children:[R.jsx(Fy,{size:16}),R.jsx("span",{children:"Save Master"})]})})]})]}):null},DA=30,kg="angle_engine_mode",IA=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)}),UA=()=>{const r=localStorage.getItem("client_id");if(r)return r;const e=IA();return localStorage.setItem("client_id",e),e},Bg=r=>new Promise((e,t)=>{const s=new FileReader;s.readAsDataURL(r),s.onload=()=>e(s.result),s.onerror=o=>t(o)}),FA=()=>{const[r,e]=J.useState(localStorage.getItem(kg)||"local"),[t,s]=J.useState(""),[o,l]=J.useState(0),[u,f]=J.useState(0),[p,h]=J.useState(4),[v,_]=J.useState(""),[g,S]=J.useState(null),[M,E]=J.useState(""),[x,y]=J.useState(!1),[b,N]=J.useState(null),[L,z]=J.useState(null),[F,V]=J.useState([]),[A,P]=J.useState([]),[se,k]=J.useState(0),[H,j]=J.useState({visible:!1,status:"Pending...",percent:0}),K=J.useMemo(()=>UA(),[]);J.useEffect(()=>{localStorage.setItem(kg,r)},[r]);const G=(ve,Re)=>{const Pe=ve.slice(Re,Re+DA);P(ne=>[...ne,...Pe]),k(Re+Pe.length)},B=async()=>{const ve=await lc("angle");V(ve||[]),P([]),k(0),G(ve||[],0)},O=J.useCallback((ve,Re,Pe)=>{const ne=[];ve!==0&&ne.push(`${ve>0?"向右":"向左"}旋转${Math.abs(ve)}度`),Re!==0&&ne.push(`${Re>0?"俯视":"仰视"}${Math.abs(Re)}度`);let pe="";Pe>4&&(pe="使用广角镜头"),Pe<4&&(pe="使用特写镜头");let me="";ne.length>0&&(me=`将相机${ne.join("，")}`),pe&&(me+=(me?"，":"将相机")+pe),s(Ie=>{const ze=/将相机.*?(?=(\n|$))/g;return ze.test(Ie)?Ie.replace(ze,me):Ie.trim()?me?`${Ie.trim()}
${me}`:Ie:me})},[]);J.useEffect(()=>{O(o,u,p)},[o,u,p,O]);const $=async ve=>{if(!ve)return;S(ve);const Re=await Bg(ve);E(Re);try{const ne=(await ec(ve,ve.name||"angle_input.png"))?.files?.[0]?.comfy_name;if(!ne)throw new Error("上传成功但未返回路径");_(ne)}catch(Pe){alert(Pe.message||"上传失败")}},ee=async()=>{let ve=localStorage.getItem("modelscope_api_token");if(ve||(ve=(await oc())?.token||""),!ve)throw typeof window.openTokenModal=="function"&&window.openTokenModal(),new Error("请先设置 ModelScope Token");const Re=await Bg(g);j({visible:!0,status:"Submitting...",percent:0});let Pe=await Vx({prompt:t,apiKey:ve,imageDataUri:Re,clientId:K});for(;Pe?.status==="timeout"&&Pe?.task_id;){if(!window.confirm(`Cloud generation is taking longer than expected (300s).

Do you want to continue waiting?`))throw new Error("User cancelled waiting.");j({visible:!0,status:"Resuming...",percent:0}),Pe=await Hx({taskId:Pe.task_id,apiKey:ve,clientId:K})}if(!Pe?.url)throw new Error("No image URL in cloud response");return{images:[Pe.url],prompt:t,timestamp:Date.now(),is_cloud:!0}},ce=async()=>{const ve=await zx({uploadedPath:v,prompt:t,seed:Math.floor(Math.random()*1e15),clientId:K});if(!ve?.images?.length)throw new Error("No images returned");return ve},U=async()=>{if(r==="local"&&!v){alert("Please upload an image first");return}if(r==="cloud"&&!g){alert("Please upload an image first");return}if(!t.trim()){alert("请输入提示词");return}y(!0),N(null);try{const ve=r==="cloud"?await ee():await ce();N(ve),V(Re=>[ve,...Re]),P(Re=>[ve,...Re])}catch(ve){alert(ve.message||"Generation failed")}finally{y(!1),j({visible:!1,status:"Pending...",percent:0})}};J.useEffect(()=>{B()},[]),J.useEffect(()=>{const ve=location.protocol==="https:"?"wss":"ws",Re=new WebSocket(`${ve}://${window.location.host}/ws/stats?client_id=${K}`);return Re.onmessage=Pe=>{try{const ne=JSON.parse(Pe.data);if(ne.type==="cloud_status"){const pe=Number(ne.total||150),me=Number(ne.progress||0),Ie=pe>0?Math.min(100,Math.round(me/pe*100)):0;j({visible:!0,status:ne.status||"Pending...",percent:Ie})}ne.type==="new_image"&&ne.data?.type==="angle"&&(V(pe=>pe.find(me=>me.timestamp===ne.data.timestamp)?pe:[ne.data,...pe]),P(pe=>pe.find(me=>me.timestamp===ne.data.timestamp)?pe:[ne.data,...pe]))}catch{}},()=>Re.close()},[K]);const te=se<F.length;return R.jsxs("div",{className:"a-page",children:[R.jsx("div",{className:"a-header",children:R.jsxs("div",{className:"a-header-title",children:[R.jsxs("h1",{children:["ANGLE CONTROL",R.jsx("span",{children:"®"})]}),R.jsx("p",{children:"Camera & Perspective Control"})]})}),R.jsxs("main",{className:"a-main-content",children:[R.jsxs("div",{className:"a-row",children:[R.jsx(jy,{previewUrl:M,onSelectFile:$}),R.jsx(PA,{engine:r,onEngineChange:e,prompt:t,onPromptChange:s,rotateH:o,rotateV:u,distance:p,onRotateHChange:l,onRotateVChange:f,onDistanceChange:h,onGenerate:U,rendering:x,progress:H,previewUrl:M})]}),R.jsxs("div",{className:"a-result-section",children:[R.jsx("h3",{className:"a-section-title",children:"04. Result Preview"}),R.jsxs("div",{className:"a-result-frame",children:[!x&&!b?.images?.[0]&&R.jsxs("div",{className:"a-empty-state",children:[R.jsx(Ey,{size:48,strokeWidth:1}),R.jsx("p",{children:"Canvas Ready"})]}),x&&R.jsxs("div",{className:"a-loading-state",children:[R.jsx("div",{className:"a-loading-box"}),R.jsx("p",{children:"Processing..."}),H.visible&&R.jsxs("div",{className:"a-progress-container",children:[R.jsxs("div",{className:"a-progress-info",children:[R.jsx("span",{children:H.status}),R.jsxs("span",{children:[H.percent,"%"]})]}),R.jsx("div",{className:"a-progress-track",children:R.jsx("div",{className:"a-progress-bar",style:{width:`${H.percent}%`}})})]})]}),!x&&b?.images?.[0]&&R.jsxs(R.Fragment,{children:[R.jsx("img",{src:b.images[0],alt:"angle-result",className:"a-result-img",onClick:()=>z(b)}),R.jsx("a",{href:b.images[0],download:`Angle-${Date.now()}.png`,className:"a-download-btn",children:R.jsx(Cy,{size:20})})]})]})]})]}),R.jsxs("section",{className:"a-history-section",children:[R.jsxs("div",{className:"a-history-header",children:[R.jsx("h2",{children:"Archive"}),R.jsx("div",{className:"a-history-divider"})]}),R.jsx(NA,{items:A,onOpen:z,onLoadMore:()=>G(F,se),hasMore:te})]}),R.jsx(LA,{item:L,onClose:()=>z(null)})]})},OA=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)}),kA=()=>{const[r,e]=J.useState("zimage"),[t,s]=J.useState(!1),[o,l]=J.useState(0),[u,f]=J.useState(0),[p,h]=J.useState(0),v=J.useMemo(()=>{const g=localStorage.getItem("client_id");if(g)return g;const S=OA();return localStorage.setItem("client_id",S),S},[]);J.useEffect(()=>(window.openTokenModal=()=>s(!0),()=>{delete window.openTokenModal}),[]),J.useEffect(()=>{localStorage.getItem("modelscope_api_token")||oc().then(g=>{g?.token||s(!0)}).catch(()=>{s(!0)})},[]),J.useEffect(()=>{const g=async()=>{try{const M=await Dd(v);f(M.total||0),h(M.position||0)}catch{}};g();const S=setInterval(g,2e3);return()=>clearInterval(S)},[v]),J.useEffect(()=>{const g=location.protocol==="https:"?"wss":"ws",S=new WebSocket(`${g}://${window.location.host}/ws/stats?client_id=${v}`);return S.onmessage=M=>{try{const E=JSON.parse(M.data);E.type==="stats"&&typeof E.online_count=="number"&&l(E.online_count)}catch{}},()=>S.close()},[v]);const _=p>0;return R.jsxs("div",{className:"app-shell",children:[R.jsx(Px,{activeTab:r,onTabChange:e,onTokenClick:()=>s(!0)}),R.jsxs("div",{className:"stage-wrap",children:[r==="zimage"?R.jsx(Zx,{}):null,r==="enhance"?R.jsx(sy,{}):null,r==="klein"?R.jsx(gy,{}):null,r==="angle"?R.jsx(FA,{}):null,R.jsx(Nx,{onlineCount:o,queueTotal:u,queuePosition:p,busy:_})]}),R.jsx(Ix,{open:t,onClose:()=>s(!1)})]})},BA=async(r,e)=>Sn("/api/auth/login",{method:"POST",body:JSON.stringify({email:r,password:e})}),zA=async(r,e)=>Sn("/api/auth/register",{method:"POST",body:JSON.stringify({email:r,password:e})}),VA=()=>{const r=J.useRef(null),[e,t]=J.useState(!1),[s,o]=J.useState(""),[l,u]=J.useState(""),[f,p]=J.useState(""),h=ac();J.useEffect(()=>{const S=()=>{p(new Date().toLocaleString("en-GB").toUpperCase())};S();const M=setInterval(S,1e3);return()=>clearInterval(M)},[]),J.useEffect(()=>{const S=r.current;if(!S)return;const M=S.getContext("2d");let E=window.innerWidth,x=window.innerHeight;S.width=E,S.height=x;let y=[];const b=4500;let N=0;const L={current:e};function z(H,j,K,G){const B=Math.abs(H-E/2),O=Math.abs(j-x/2);if(B>K||O>K)return!1;if(B>K-G&&O>K-G){const $=B-(K-G),ee=O-(K-G);return $*$+ee*ee<=G*G}return!0}class F{constructor(){this.init()}init(){const j=Math.random()*Math.PI*2,K=5+Math.random()*15;this.x=E/2+Math.cos(j)*K,this.y=x/2+Math.sin(j)*K,this.vx=Math.cos(j)*2,this.vy=Math.sin(j)*2,this.size=Math.random()*1.6,this.alpha=Math.random()*.5+.2,this.isEscaping=!1}update(j){const K=this.x-E/2,G=this.y-x/2,B=Math.sqrt(K*K+G*G)||1;if(L.current)this.vx+=(Math.random()-.5)*4,this.vy+=(Math.random()-.5)*4;else{if(B<45){const ve=(45-B)/45;this.vx+=K/B*ve*6,this.vy+=G/B*ve*6}const ee=Math.pow(j,5)*14,ce=(Math.random()-.5)*ee*.5;this.vx+=K/B*ee+ce,this.vy+=G/B*ee+ce,j>.88&&Math.random()>.98&&(this.isEscaping=!0);const U=180,te=80;if(!this.isEscaping){z(this.x+this.vx,this.y+this.vy,U,te)||(this.vx*=-.4,this.vy*=-.4,this.vx+=(Math.random()-.5)*2,this.vy+=(Math.random()-.5)*2);const Re=(140-B)*.012;this.vx+=K/B*Re,this.vy+=G/B*Re}}this.x+=this.vx,this.y+=this.vy;const O=this.isEscaping?.98:.86;this.vx*=O,this.vy*=O,(B>E*.6||this.isEscaping&&Math.abs(this.vx)<.05)&&this.init()}draw(j){const K=180+j*75,G=this.isEscaping?this.alpha*.4:this.alpha;M.fillStyle=`rgba(${K}, ${K}, ${K}, ${G})`,M.fillRect(this.x,this.y,this.size,this.size)}}const V=()=>{y=[];for(let H=0;H<b;H++)y.push(new F)},A=H=>{if(L.current)return;const j=10+H*4;M.save(),M.shadowBlur=40*H,M.shadowColor="#fff",M.fillStyle="#fff",M.beginPath(),M.arc(E/2,x/2,j,0,Math.PI*2),M.fill(),M.restore()};let P;const se=()=>{M.fillStyle="rgba(0, 0, 0, 0.25)",M.fillRect(0,0,E,x),N+=.04;const H=Math.pow((Math.sin(N)+1)/2,2);y.forEach(j=>{j.update(H),j.draw(H)}),A(H),P=requestAnimationFrame(se)},k=()=>{E=window.innerWidth,x=window.innerHeight,S.width=E,S.height=x,V()};return window.addEventListener("resize",k),V(),se(),()=>{window.removeEventListener("resize",k),cancelAnimationFrame(P)}},[]);const v=J.useRef(e);J.useEffect(()=>{v.current=e},[e]);const _=S=>{const M=window.innerWidth,E=window.innerHeight,x=S.clientX-M/2,y=S.clientY-E/2,N=Math.sqrt(x*x+y*y)<220;N!==e&&t(N)},g=async()=>{if(s&&l)try{const S=await BA(s,l);S.access_token?(localStorage.setItem("is_logged_in","true"),localStorage.setItem("access_token",S.access_token),h("/")):alert("登录失败，请检查账号密码")}catch(S){alert("登录失败："+S.message)}else alert("请输入邮箱和密码")};return R.jsxs("div",{className:"login-page",onMouseMove:_,children:[R.jsx("div",{className:"timestamp",children:f}),R.jsx("canvas",{ref:r,className:"sand-canvas"}),R.jsxs("div",{className:`login-form ${e?"visible":""}`,children:[R.jsxs("div",{className:"form-group",children:[R.jsx("div",{className:"label",children:"Identity (Email)"}),R.jsx("input",{type:"text",placeholder:" ",autoComplete:"off",value:s,onChange:S=>o(S.target.value)})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("div",{className:"label",children:"Access Code"}),R.jsx("input",{type:"password",placeholder:" ",autoComplete:"off",value:l,onChange:S=>u(S.target.value)})]}),R.jsx("button",{className:"login-button",onClick:g,children:"CONNECT"}),R.jsx("div",{style:{marginTop:"16px",textAlign:"center",fontSize:"12px"},children:R.jsx(Qg,{to:"/register",style:{color:"rgba(255,255,255,0.5)",textDecoration:"none"},children:"Create an account"})})]})]})},HA=()=>{const r=J.useRef(null),[e,t]=J.useState(!1),[s,o]=J.useState(""),[l,u]=J.useState(""),[f,p]=J.useState(""),[h,v]=J.useState(""),_=ac();J.useEffect(()=>{const E=()=>{v(new Date().toLocaleString("en-GB").toUpperCase())};E();const x=setInterval(E,1e3);return()=>clearInterval(x)},[]),J.useEffect(()=>{const E=r.current;if(!E)return;const x=E.getContext("2d");let y=window.innerWidth,b=window.innerHeight;E.width=y,E.height=b;let N=[];const L=4500;let z=0;const F={current:e};function V(K,G,B,O){const $=Math.abs(K-y/2),ee=Math.abs(G-b/2);if($>B||ee>B)return!1;if($>B-O&&ee>B-O){const ce=$-(B-O),U=ee-(B-O);return ce*ce+U*U<=O*O}return!0}class A{constructor(){this.init()}init(){const G=Math.random()*Math.PI*2,B=5+Math.random()*15;this.x=y/2+Math.cos(G)*B,this.y=b/2+Math.sin(G)*B,this.vx=Math.cos(G)*2,this.vy=Math.sin(G)*2,this.size=Math.random()*1.6,this.alpha=Math.random()*.5+.2,this.isEscaping=!1}update(G){const B=this.x-y/2,O=this.y-b/2,$=Math.sqrt(B*B+O*O)||1;if(F.current)this.vx+=(Math.random()-.5)*4,this.vy+=(Math.random()-.5)*4;else{if($<45){const Pe=(45-$)/45;this.vx+=B/$*Pe*6,this.vy+=O/$*Pe*6}const U=Math.pow(G,5)*14,te=(Math.random()-.5)*U*.5;this.vx+=B/$*U+te,this.vy+=O/$*U+te,G>.88&&Math.random()>.98&&(this.isEscaping=!0);const ve=180,Re=80;if(!this.isEscaping){V(this.x+this.vx,this.y+this.vy,ve,Re)||(this.vx*=-.4,this.vy*=-.4,this.vx+=(Math.random()-.5)*2,this.vy+=(Math.random()-.5)*2);const ne=(140-$)*.012;this.vx+=B/$*ne,this.vy+=O/$*ne}}this.x+=this.vx,this.y+=this.vy;const ee=this.isEscaping?.98:.86;this.vx*=ee,this.vy*=ee,($>y*.6||this.isEscaping&&Math.abs(this.vx)<.05)&&this.init()}draw(G){const B=180+G*75,O=this.isEscaping?this.alpha*.4:this.alpha;x.fillStyle=`rgba(${B}, ${B}, ${B}, ${O})`,x.fillRect(this.x,this.y,this.size,this.size)}}const P=()=>{N=[];for(let K=0;K<L;K++)N.push(new A)},se=K=>{if(F.current)return;const G=10+K*4;x.save(),x.shadowBlur=40*K,x.shadowColor="#fff",x.fillStyle="#fff",x.beginPath(),x.arc(y/2,b/2,G,0,Math.PI*2),x.fill(),x.restore()};let k;const H=()=>{x.fillStyle="rgba(0, 0, 0, 0.25)",x.fillRect(0,0,y,b),z+=.04;const K=Math.pow((Math.sin(z)+1)/2,2);N.forEach(G=>{G.update(K),G.draw(K)}),se(K),k=requestAnimationFrame(H)},j=()=>{y=window.innerWidth,b=window.innerHeight,E.width=y,E.height=b,P()};return window.addEventListener("resize",j),P(),H(),()=>{window.removeEventListener("resize",j),cancelAnimationFrame(k)}},[]);const g=J.useRef(e);J.useEffect(()=>{g.current=e},[e]);const S=E=>{const x=window.innerWidth,y=window.innerHeight,b=E.clientX-x/2,N=E.clientY-y/2,z=Math.sqrt(b*b+N*N)<220;z!==e&&t(z)},M=async()=>{if(s&&l&&f){if(l!==f){alert("两次输入的密码不一致");return}try{const E=await zA(s,l);E.access_token?(localStorage.setItem("is_logged_in","true"),localStorage.setItem("access_token",E.access_token),_("/")):alert("注册失败")}catch(E){alert("注册失败："+E.message)}}else alert("请填写所有字段")};return R.jsxs("div",{className:"login-page",onMouseMove:S,children:[R.jsx("div",{className:"timestamp",children:h}),R.jsx("canvas",{ref:r,className:"sand-canvas"}),R.jsxs("div",{className:`login-form ${e?"visible":""}`,style:{padding:"35px"},children:[R.jsxs("div",{className:"form-group",style:{marginBottom:"25px"},children:[R.jsx("div",{className:"label",children:"Identity (Email)"}),R.jsx("input",{type:"text",placeholder:" ",autoComplete:"off",value:s,onChange:E=>o(E.target.value)})]}),R.jsxs("div",{className:"form-group",style:{marginBottom:"25px"},children:[R.jsx("div",{className:"label",children:"Access Code"}),R.jsx("input",{type:"password",placeholder:" ",autoComplete:"off",value:l,onChange:E=>u(E.target.value)})]}),R.jsxs("div",{className:"form-group",style:{marginBottom:"25px"},children:[R.jsx("div",{className:"label",children:"Confirm Code"}),R.jsx("input",{type:"password",placeholder:" ",autoComplete:"off",value:f,onChange:E=>p(E.target.value)})]}),R.jsx("button",{className:"login-button",onClick:M,children:"CREATE ACCOUNT"}),R.jsx("div",{style:{marginTop:"16px",textAlign:"center",fontSize:"12px"},children:R.jsx(Qg,{to:"/login",style:{color:"rgba(255,255,255,0.5)",textDecoration:"none"},children:"Already have an account? Connect"})})]})]})},GA=({children:r})=>{const[e,t]=J.useState(localStorage.getItem("is_logged_in")==="true"),s=sa();return J.useEffect(()=>{t(localStorage.getItem("is_logged_in")==="true")},[s]),e?r:R.jsx(Jg,{to:"/login",replace:!0,state:{from:s}})};function WA(){return R.jsxs(_x,{children:[R.jsx(Ja,{path:"/login",element:R.jsx(VA,{})}),R.jsx(Ja,{path:"/register",element:R.jsx(HA,{})}),R.jsx(Ja,{path:"/",element:R.jsx(GA,{children:R.jsx(kA,{})})}),R.jsx(Ja,{path:"*",element:R.jsx(Jg,{to:"/",replace:!0})})]})}A_.createRoot(document.getElementById("root")).render(R.jsx(Vg.StrictMode,{children:R.jsx(Tx,{children:R.jsx(WA,{})})}));
