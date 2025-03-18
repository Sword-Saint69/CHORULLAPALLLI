function NE(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function xE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function DE(){if(Ng)return Ae;Ng=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,z={};function U(O,q,de){this.props=O,this.context=q,this.refs=z,this.updater=de||M}U.prototype.isReactComponent={},U.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},U.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function J(){}J.prototype=U.prototype;function re(O,q,de){this.props=O,this.context=q,this.refs=z,this.updater=de||M}var ae=re.prototype=new J;ae.constructor=re,$(ae,U.prototype),ae.isPureReactComponent=!0;var ye=Array.isArray,Me=Object.prototype.hasOwnProperty,Re={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(O,q,de){var Ie,Se={},Ne=null,Fe=null;if(q!=null)for(Ie in q.ref!==void 0&&(Fe=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Me.call(q,Ie)&&!x.hasOwnProperty(Ie)&&(Se[Ie]=q[Ie]);var Ue=arguments.length-2;if(Ue===1)Se.children=de;else if(1<Ue){for(var qe=Array(Ue),_t=0;_t<Ue;_t++)qe[_t]=arguments[_t+2];Se.children=qe}if(O&&O.defaultProps)for(Ie in Ue=O.defaultProps,Ue)Se[Ie]===void 0&&(Se[Ie]=Ue[Ie]);return{$$typeof:n,type:O,key:Ne,ref:Fe,props:Se,_owner:Re.current}}function P(O,q){return{$$typeof:n,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function D(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return q[de]})}var V=/\/+/g;function A(O,q){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):q.toString(36)}function rt(O,q,de,Ie,Se){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Fe=!1;if(O===null)Fe=!0;else switch(Ne){case"string":case"number":Fe=!0;break;case"object":switch(O.$$typeof){case n:case e:Fe=!0}}if(Fe)return Fe=O,Se=Se(Fe),O=Ie===""?"."+A(Fe,0):Ie,ye(Se)?(de="",O!=null&&(de=O.replace(V,"$&/")+"/"),rt(Se,q,de,"",function(_t){return _t})):Se!=null&&(k(Se)&&(Se=P(Se,de+(!Se.key||Fe&&Fe.key===Se.key?"":(""+Se.key).replace(V,"$&/")+"/")+O)),q.push(Se)),1;if(Fe=0,Ie=Ie===""?".":Ie+":",ye(O))for(var Ue=0;Ue<O.length;Ue++){Ne=O[Ue];var qe=Ie+A(Ne,Ue);Fe+=rt(Ne,q,de,qe,Se)}else if(qe=R(O),typeof qe=="function")for(O=qe.call(O),Ue=0;!(Ne=O.next()).done;)Ne=Ne.value,qe=Ie+A(Ne,Ue++),Fe+=rt(Ne,q,de,qe,Se);else if(Ne==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Ot(O,q,de){if(O==null)return O;var Ie=[],Se=0;return rt(O,Ie,"","",function(Ne){return q.call(de,Ne,Se++)}),Ie}function Vt(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var ze={current:null},ee={transition:null},pe={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Re};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Ot,forEach:function(O,q,de){Ot(O,function(){q.apply(this,arguments)},de)},count:function(O){var q=0;return Ot(O,function(){q++}),q},toArray:function(O){return Ot(O,function(q){return q})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=U,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=re,Ae.StrictMode=i,Ae.Suspense=p,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ae.act=ne,Ae.cloneElement=function(O,q,de){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=$({},O.props),Se=O.key,Ne=O.ref,Fe=O._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Fe=Re.current),q.key!==void 0&&(Se=""+q.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for(qe in q)Me.call(q,qe)&&!x.hasOwnProperty(qe)&&(Ie[qe]=q[qe]===void 0&&Ue!==void 0?Ue[qe]:q[qe])}var qe=arguments.length-2;if(qe===1)Ie.children=de;else if(1<qe){Ue=Array(qe);for(var _t=0;_t<qe;_t++)Ue[_t]=arguments[_t+2];Ie.children=Ue}return{$$typeof:n,type:O.type,key:Se,ref:Ne,props:Ie,_owner:Fe}},Ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Ae.createElement=S,Ae.createFactory=function(O){var q=S.bind(null,O);return q.type=O,q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:d,render:O}},Ae.isValidElement=k,Ae.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Vt}},Ae.memo=function(O,q){return{$$typeof:y,type:O,compare:q===void 0?null:q}},Ae.startTransition=function(O){var q=ee.transition;ee.transition={};try{O()}finally{ee.transition=q}},Ae.unstable_act=ne,Ae.useCallback=function(O,q){return ze.current.useCallback(O,q)},Ae.useContext=function(O){return ze.current.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O){return ze.current.useDeferredValue(O)},Ae.useEffect=function(O,q){return ze.current.useEffect(O,q)},Ae.useId=function(){return ze.current.useId()},Ae.useImperativeHandle=function(O,q,de){return ze.current.useImperativeHandle(O,q,de)},Ae.useInsertionEffect=function(O,q){return ze.current.useInsertionEffect(O,q)},Ae.useLayoutEffect=function(O,q){return ze.current.useLayoutEffect(O,q)},Ae.useMemo=function(O,q){return ze.current.useMemo(O,q)},Ae.useReducer=function(O,q,de){return ze.current.useReducer(O,q,de)},Ae.useRef=function(O){return ze.current.useRef(O)},Ae.useState=function(O){return ze.current.useState(O)},Ae.useSyncExternalStore=function(O,q,de){return ze.current.useSyncExternalStore(O,q,de)},Ae.useTransition=function(){return ze.current.useTransition()},Ae.version="18.3.1",Ae}var xg;function If(){return xg||(xg=1,Sd.exports=DE()),Sd.exports}var Y=If();const tn=xE(Y),OE=NE({__proto__:null,default:tn},[Y]);var zu={},Ad={exports:{}},en={},Rd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function VE(){return Dg||(Dg=1,function(n){function e(ee,pe){var ne=ee.length;ee.push(pe);e:for(;0<ne;){var O=ne-1>>>1,q=ee[O];if(0<o(q,pe))ee[O]=pe,ee[ne]=q,ne=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var pe=ee[0],ne=ee.pop();if(ne!==pe){ee[0]=ne;e:for(var O=0,q=ee.length,de=q>>>1;O<de;){var Ie=2*(O+1)-1,Se=ee[Ie],Ne=Ie+1,Fe=ee[Ne];if(0>o(Se,ne))Ne<q&&0>o(Fe,Se)?(ee[O]=Fe,ee[Ne]=ne,O=Ne):(ee[O]=Se,ee[Ie]=ne,O=Ie);else if(Ne<q&&0>o(Fe,ne))ee[O]=Fe,ee[Ne]=ne,O=Ne;else break e}}return pe}function o(ee,pe){var ne=ee.sortIndex-pe.sortIndex;return ne!==0?ne:ee.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],y=[],w=1,T=null,R=3,M=!1,$=!1,z=!1,U=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(ee){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ee)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function ye(ee){if(z=!1,ae(ee),!$)if(t(p)!==null)$=!0,Vt(Me);else{var pe=t(y);pe!==null&&ze(ye,pe.startTime-ee)}}function Me(ee,pe){$=!1,z&&(z=!1,J(S),S=-1),M=!0;var ne=R;try{for(ae(pe),T=t(p);T!==null&&(!(T.expirationTime>pe)||ee&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,R=T.priorityLevel;var q=O(T.expirationTime<=pe);pe=n.unstable_now(),typeof q=="function"?T.callback=q:T===t(p)&&i(p),ae(pe)}else i(p);T=t(p)}if(T!==null)var de=!0;else{var Ie=t(y);Ie!==null&&ze(ye,Ie.startTime-pe),de=!1}return de}finally{T=null,R=ne,M=!1}}var Re=!1,x=null,S=-1,P=5,k=-1;function D(){return!(n.unstable_now()-k<P)}function V(){if(x!==null){var ee=n.unstable_now();k=ee;var pe=!0;try{pe=x(!0,ee)}finally{pe?A():(Re=!1,x=null)}}else Re=!1}var A;if(typeof re=="function")A=function(){re(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Ot=rt.port2;rt.port1.onmessage=V,A=function(){Ot.postMessage(null)}}else A=function(){U(V,0)};function Vt(ee){x=ee,Re||(Re=!0,A())}function ze(ee,pe){S=U(function(){ee(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){$||M||($=!0,Vt(Me))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ee){switch(R){case 1:case 2:case 3:var pe=3;break;default:pe=R}var ne=R;R=pe;try{return ee()}finally{R=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,pe){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=R;R=ee;try{return pe()}finally{R=ne}},n.unstable_scheduleCallback=function(ee,pe,ne){var O=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ne+q,ee={id:w++,callback:pe,priorityLevel:ee,startTime:ne,expirationTime:q,sortIndex:-1},ne>O?(ee.sortIndex=ne,e(y,ee),t(p)===null&&ee===t(y)&&(z?(J(S),S=-1):z=!0,ze(ye,ne-O))):(ee.sortIndex=q,e(p,ee),$||M||($=!0,Vt(Me))),ee},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ee){var pe=R;return function(){var ne=R;R=pe;try{return ee.apply(this,arguments)}finally{R=ne}}}}(Pd)),Pd}var Og;function LE(){return Og||(Og=1,Rd.exports=VE()),Rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function bE(){if(Vg)return en;Vg=1;var n=If(),e=LE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function R(r){return p.call(T,r)?!0:p.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function M(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function $(r,s,a,c){if(s===null||typeof s>"u"||M(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,c,f,g,_){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=_}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){U[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];U[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){U[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){U[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){U[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){U[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){U[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){U[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){U[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function re(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(J,re);U[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(J,re);U[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(J,re);U[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){U[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),U.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){U[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function ae(r,s,a,c){var f=U.hasOwnProperty(s)?U[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&($(s,a,f,c)&&(a=null),c||f===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ye=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),Re=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ee=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var ne=Object.assign,O;function q(r){if(O===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+r}var de=!1;function Ie(r,s){if(!r||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){c=j}r.call(s.prototype)}else{try{throw Error()}catch(j){c=j}r()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var f=j.stack.split(`
`),g=c.stack.split(`
`),_=f.length-1,I=g.length-1;1<=_&&0<=I&&f[_]!==g[I];)I--;for(;1<=_&&0<=I;_--,I--)if(f[_]!==g[I]){if(_!==1||I!==1)do if(_--,I--,0>I||f[_]!==g[I]){var C=`
`+f[_].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=_&&0<=I);break}}}finally{de=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Se(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=Ie(r.type,!1),r;case 11:return r=Ie(r.type.render,!1),r;case 1:return r=Ie(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Re:return"Portal";case P:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case rt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Fe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _t(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(_){c=""+_,g.call(this,_)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function ur(r){r._valueTracker||(r._valueTracker=_t(r))}function Ss(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=qe(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Fr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ki(r,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function As(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function zo(r,s){s=s.checked,s!=null&&ae(r,"checked",s,!1)}function $o(r,s){zo(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Rs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Rs(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Pl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Rs(r,s,a){(s!=="number"||Fr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var cr=Array.isArray;function hr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function qo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ps(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(cr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Cs(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Wo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var dr,Ho=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=dr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Ur(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xi=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(r){xi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ni[s]=Ni[r]})});function Ko(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ni.hasOwnProperty(r)&&Ni[r]?(""+s).trim():s+"px"}function Go(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Ko(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var Qo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(r,s){if(s){if(Qo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Xo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function ks(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ns=null,mn=null,Wn=null;function xs(r){if(r=Ea(r)){if(typeof Ns!="function")throw Error(t(280));var s=r.stateNode;s&&(s=ru(s),Ns(r.stateNode,r.type,s))}}function Hn(r){mn?Wn?Wn.push(r):Wn=[r]:mn=r}function Jo(){if(mn){var r=mn,s=Wn;if(Wn=mn=null,xs(r),s)for(r=0;r<s.length;r++)xs(s[r])}}function Oi(r,s){return r(s)}function Zo(){}var fr=!1;function ea(r,s,a){if(fr)return r(s,a);fr=!0;try{return Oi(r,s,a)}finally{fr=!1,(mn!==null||Wn!==null)&&(Zo(),Jo())}}function it(r,s){var a=r.stateNode;if(a===null)return null;var c=ru(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ds=!1;if(d)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ds=!1}function Vi(r,s,a,c,f,g,_,I,C){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(K){this.onError(K)}}var Li=!1,Os=null,Pn=!1,ta=null,Jc={onError:function(r){Li=!0,Os=r}};function Vs(r,s,a,c,f,g,_,I,C){Li=!1,Os=null,Vi.apply(Jc,arguments)}function Cl(r,s,a,c,f,g,_,I,C){if(Vs.apply(this,arguments),Li){if(Li){var j=Os;Li=!1,Os=null}else throw Error(t(198));Pn||(Pn=!0,ta=j)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function bi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function kn(r){if(Cn(r)!==r)throw Error(t(188))}function kl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return kn(f),r;if(g===c)return kn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var _=!1,I=f.child;I;){if(I===a){_=!0,a=f,c=g;break}if(I===c){_=!0,c=f,a=g;break}I=I.sibling}if(!_){for(I=g.child;I;){if(I===a){_=!0,a=g,c=f;break}if(I===c){_=!0,c=g,a=f;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function na(r){return r=kl(r),r!==null?Ls(r):null}function Ls(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ls(r);if(s!==null)return s;r=r.sibling}return null}var bs=e.unstable_scheduleCallback,ra=e.unstable_cancelCallback,Nl=e.unstable_shouldYield,Zc=e.unstable_requestPaint,We=e.unstable_now,xl=e.unstable_getCurrentPriorityLevel,Mi=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,gn=e.unstable_NormalPriority,ia=e.unstable_LowPriority,Dl=e.unstable_IdlePriority,Fi=null,on=null;function Ol(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Fi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Ll,sa=Math.log,Vl=Math.LN2;function Ll(r){return r>>>=0,r===0?32:31-(sa(r)/Vl|0)|0}var Ms=64,Fs=4194304;function Br(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ui(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,_=a&268435455;if(_!==0){var I=_&~f;I!==0?c=Br(I):(g&=_,g!==0&&(c=Br(g)))}else _=a&~f,_!==0?c=Br(_):g!==0&&(c=Br(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&f)===0&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-$t(s),f=1<<a,c|=r[a],s&=~f;return c}function eh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var _=31-$t(g),I=1<<_,C=f[_];C===-1?((I&a)===0||(I&c)!==0)&&(f[_]=eh(I,s)):C<=s&&(r.expiredLanes|=I),g&=~I}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ji(){var r=Ms;return Ms<<=1,(Ms&4194240)===0&&(Ms=64),r}function zr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function $r(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function $e(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-$t(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function qr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-$t(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var Ce=0;function Wr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var bl,Us,Ml,Fl,Ul,oa=!1,Kn=[],At=null,Nn=null,xn=null,Hr=new Map,yn=new Map,Gn=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(r,s){switch(r){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Hr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(s.pointerId)}}function Kt(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ea(s),s!==null&&Us(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function nh(r,s,a,c,f){switch(s){case"focusin":return At=Kt(At,r,s,a,c,f),!0;case"dragenter":return Nn=Kt(Nn,r,s,a,c,f),!0;case"mouseover":return xn=Kt(xn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return Hr.set(g,Kt(Hr.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,yn.set(g,Kt(yn.get(g)||null,r,s,a,c,f)),!0}return!1}function Bl(r){var s=Wi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=bi(a),s!==null){r.blockedOn=s,Ul(r.priority,function(){Ml(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function mr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=js(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Di=c,a.target.dispatchEvent(c),Di=null}else return s=Ea(a),s!==null&&Us(s),r.blockedOn=a,!1;s.shift()}return!0}function Bi(r,s,a){mr(r)&&a.delete(s)}function zl(){oa=!1,At!==null&&mr(At)&&(At=null),Nn!==null&&mr(Nn)&&(Nn=null),xn!==null&&mr(xn)&&(xn=null),Hr.forEach(Bi),yn.forEach(Bi)}function Dn(r,s){r.blockedOn===s&&(r.blockedOn=null,oa||(oa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,zl)))}function On(r){function s(f){return Dn(f,r)}if(0<Kn.length){Dn(Kn[0],r);for(var a=1;a<Kn.length;a++){var c=Kn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(At!==null&&Dn(At,r),Nn!==null&&Dn(Nn,r),xn!==null&&Dn(xn,r),Hr.forEach(s),yn.forEach(s),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Bl(a),a.blockedOn===null&&Gn.shift()}var gr=ye.ReactCurrentBatchConfig,Kr=!0;function Ye(r,s,a,c){var f=Ce,g=gr.transition;gr.transition=null;try{Ce=1,aa(r,s,a,c)}finally{Ce=f,gr.transition=g}}function rh(r,s,a,c){var f=Ce,g=gr.transition;gr.transition=null;try{Ce=4,aa(r,s,a,c)}finally{Ce=f,gr.transition=g}}function aa(r,s,a,c){if(Kr){var f=js(r,s,a,c);if(f===null)ph(r,s,c,zi,a),jl(r,c);else if(nh(f,r,s,a,c))c.stopPropagation();else if(jl(r,c),s&4&&-1<th.indexOf(r)){for(;f!==null;){var g=Ea(f);if(g!==null&&bl(g),g=js(r,s,a,c),g===null&&ph(r,s,c,zi,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else ph(r,s,c,null,a)}}var zi=null;function js(r,s,a,c){if(zi=null,r=ks(c),r=Wi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=bi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return zi=r,null}function la(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xl()){case Mi:return 1;case jr:return 4;case gn:case ia:return 16;case Dl:return 536870912;default:return 16}default:return 16}}var ln=null,Bs=null,Gt=null;function ua(){if(Gt)return Gt;var r,s=Bs,a=s.length,c,f="value"in ln?ln.value:ln.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var _=a-r;for(c=1;c<=_&&s[a-c]===f[g-c];c++);return Gt=f.slice(r,1<c?1-c:void 0)}function zs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Qn(){return!0}function ca(){return!1}function Rt(r){function s(a,c,f,g,_){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=_,this.currentTarget=null;for(var I in r)r.hasOwnProperty(I)&&(a=r[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Qn:ca,this.isPropagationStopped=ca,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),s}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=Rt(Vn),Yn=ne({},Vn,{view:0,detail:0}),ih=Rt(Yn),qs,yr,Gr,$i=ne({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Gr&&(Gr&&r.type==="mousemove"?(qs=r.screenX-Gr.screenX,yr=r.screenY-Gr.screenY):yr=qs=0,Gr=r),qs)},movementY:function(r){return"movementY"in r?r.movementY:yr}}),Ws=Rt($i),ha=ne({},$i,{dataTransfer:0}),$l=Rt(ha),Hs=ne({},Yn,{relatedTarget:0}),Ks=Rt(Hs),ql=ne({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),vr=Rt(ql),Wl=ne({},Vn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Hl=Rt(Wl),Kl=ne({},Vn,{data:0}),da=Rt(Kl),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ql(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Gl[r])?!!s[r]:!1}function Xn(){return Ql}var u=ne({},Yn,{key:function(r){if(r.key){var s=Gs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?zs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Rt(u),v=ne({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Rt(v),L=ne({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),B=Rt(L),Z=ne({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=Rt(Z),mt=ne({},$i,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=Rt(mt),wt=[9,13,27,32],at=d&&"CompositionEvent"in window,vn=null;d&&"documentMode"in document&&(vn=document.documentMode);var un=d&&"TextEvent"in window&&!vn,qi=d&&(!at||vn&&8<vn&&11>=vn),Qs=" ",Sp=!1;function Ap(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ys=!1;function P0(r,s){switch(r){case"compositionend":return Rp(s);case"keypress":return s.which!==32?null:(Sp=!0,Qs);case"textInput":return r=s.data,r===Qs&&Sp?null:r;default:return null}}function C0(r,s){if(Ys)return r==="compositionend"||!at&&Ap(r,s)?(r=ua(),Gt=Bs=ln=null,Ys=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return qi&&s.locale!=="ko"?null:s.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!k0[r.type]:s==="textarea"}function Cp(r,s,a,c){Hn(c),s=eu(s,"onChange"),0<s.length&&(a=new $s("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var fa=null,pa=null;function N0(r){Hp(r,0)}function Yl(r){var s=to(r);if(Ss(s))return r}function x0(r,s){if(r==="change")return s}var kp=!1;if(d){var sh;if(d){var oh="oninput"in document;if(!oh){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),oh=typeof Np.oninput=="function"}sh=oh}else sh=!1;kp=sh&&(!document.documentMode||9<document.documentMode)}function xp(){fa&&(fa.detachEvent("onpropertychange",Dp),pa=fa=null)}function Dp(r){if(r.propertyName==="value"&&Yl(pa)){var s=[];Cp(s,pa,r,ks(r)),ea(N0,s)}}function D0(r,s,a){r==="focusin"?(xp(),fa=s,pa=a,fa.attachEvent("onpropertychange",Dp)):r==="focusout"&&xp()}function O0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Yl(pa)}function V0(r,s){if(r==="click")return Yl(s)}function L0(r,s){if(r==="input"||r==="change")return Yl(s)}function b0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:b0;function ma(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!Ln(r[f],s[f]))return!1}return!0}function Op(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Vp(r,s){var a=Op(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function Lp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Lp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function bp(){for(var r=window,s=Fr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Fr(r.document)}return s}function ah(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function M0(r){var s=bp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Lp(a.ownerDocument.documentElement,a)){if(c!==null&&ah(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=Vp(a,g);var _=Vp(a,c);f&&_&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(_.node,_.offset)):(s.setEnd(_.node,_.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var F0=d&&"documentMode"in document&&11>=document.documentMode,Xs=null,lh=null,ga=null,uh=!1;function Mp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uh||Xs==null||Xs!==Fr(c)||(c=Xs,"selectionStart"in c&&ah(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ga&&ma(ga,c)||(ga=c,c=eu(lh,"onSelect"),0<c.length&&(s=new $s("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Xs)))}function Xl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Js={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},ch={},Fp={};d&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Jl(r){if(ch[r])return ch[r];if(!Js[r])return r;var s=Js[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Fp)return ch[r]=s[a];return r}var Up=Jl("animationend"),jp=Jl("animationiteration"),Bp=Jl("animationstart"),zp=Jl("transitionend"),$p=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(r,s){$p.set(r,s),l(s,[r])}for(var hh=0;hh<qp.length;hh++){var dh=qp[hh],U0=dh.toLowerCase(),j0=dh[0].toUpperCase()+dh.slice(1);Qr(U0,"on"+j0)}Qr(Up,"onAnimationEnd"),Qr(jp,"onAnimationIteration"),Qr(Bp,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(zp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function Wp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Cl(c,s,void 0,r),r.currentTarget=null}function Hp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var _=c.length-1;0<=_;_--){var I=c[_],C=I.instance,j=I.currentTarget;if(I=I.listener,C!==g&&f.isPropagationStopped())break e;Wp(f,I,j),g=C}else for(_=0;_<c.length;_++){if(I=c[_],C=I.instance,j=I.currentTarget,I=I.listener,C!==g&&f.isPropagationStopped())break e;Wp(f,I,j),g=C}}}if(Pn)throw r=ta,Pn=!1,ta=null,r}function Ke(r,s){var a=s[wh];a===void 0&&(a=s[wh]=new Set);var c=r+"__bubble";a.has(c)||(Kp(s,r,2,!1),a.add(c))}function fh(r,s,a){var c=0;s&&(c|=4),Kp(a,r,c,s)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function va(r){if(!r[Zl]){r[Zl]=!0,i.forEach(function(a){a!=="selectionchange"&&(B0.has(a)||fh(a,!1,r),fh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Zl]||(s[Zl]=!0,fh("selectionchange",!1,s))}}function Kp(r,s,a,c){switch(la(s)){case 1:var f=Ye;break;case 4:f=rh;break;default:f=aa}a=f.bind(null,s,a,r),f=void 0,!Ds||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function ph(r,s,a,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;_=_.return}for(;I!==null;){if(_=Wi(I),_===null)return;if(C=_.tag,C===5||C===6){c=g=_;continue e}I=I.parentNode}}c=c.return}ea(function(){var j=g,K=ks(a),Q=[];e:{var H=$p.get(r);if(H!==void 0){var te=$s,se=r;switch(r){case"keypress":if(zs(a)===0)break e;case"keydown":case"keyup":te=m;break;case"focusin":se="focus",te=Ks;break;case"focusout":se="blur",te=Ks;break;case"beforeblur":case"afterblur":te=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=$l;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=B;break;case Up:case jp:case Bp:te=vr;break;case zp:te=je;break;case"scroll":te=ih;break;case"wheel":te=xe;break;case"copy":case"cut":case"paste":te=Hl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=E}var le=(s&4)!==0,st=!le&&r==="scroll",b=le?H!==null?H+"Capture":null:H;le=[];for(var N=j,F;N!==null;){F=N;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,b!==null&&(X=it(N,b),X!=null&&le.push(_a(N,X,F)))),st)break;N=N.return}0<le.length&&(H=new te(H,se,null,a,K),Q.push({event:H,listeners:le}))}}if((s&7)===0){e:{if(H=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",H&&a!==Di&&(se=a.relatedTarget||a.fromElement)&&(Wi(se)||se[_r]))break e;if((te||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,te?(se=a.relatedTarget||a.toElement,te=j,se=se?Wi(se):null,se!==null&&(st=Cn(se),se!==st||se.tag!==5&&se.tag!==6)&&(se=null)):(te=null,se=j),te!==se)){if(le=Ws,X="onMouseLeave",b="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(le=E,X="onPointerLeave",b="onPointerEnter",N="pointer"),st=te==null?H:to(te),F=se==null?H:to(se),H=new le(X,N+"leave",te,a,K),H.target=st,H.relatedTarget=F,X=null,Wi(K)===j&&(le=new le(b,N+"enter",se,a,K),le.target=F,le.relatedTarget=st,X=le),st=X,te&&se)t:{for(le=te,b=se,N=0,F=le;F;F=Zs(F))N++;for(F=0,X=b;X;X=Zs(X))F++;for(;0<N-F;)le=Zs(le),N--;for(;0<F-N;)b=Zs(b),F--;for(;N--;){if(le===b||b!==null&&le===b.alternate)break t;le=Zs(le),b=Zs(b)}le=null}else le=null;te!==null&&Gp(Q,H,te,le,!1),se!==null&&st!==null&&Gp(Q,st,se,le,!0)}}e:{if(H=j?to(j):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var he=x0;else if(Pp(H))if(kp)he=L0;else{he=O0;var me=D0}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(he=V0);if(he&&(he=he(r,j))){Cp(Q,he,a,K);break e}me&&me(r,H,j),r==="focusout"&&(me=H._wrapperState)&&me.controlled&&H.type==="number"&&Rs(H,"number",H.value)}switch(me=j?to(j):window,r){case"focusin":(Pp(me)||me.contentEditable==="true")&&(Xs=me,lh=j,ga=null);break;case"focusout":ga=lh=Xs=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Mp(Q,a,K);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":Mp(Q,a,K)}var ge;if(at)e:{switch(r){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ys?Ap(r,a)&&(_e="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(qi&&a.locale!=="ko"&&(Ys||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ys&&(ge=ua()):(ln=K,Bs="value"in ln?ln.value:ln.textContent,Ys=!0)),me=eu(j,_e),0<me.length&&(_e=new da(_e,r,null,a,K),Q.push({event:_e,listeners:me}),ge?_e.data=ge:(ge=Rp(a),ge!==null&&(_e.data=ge)))),(ge=un?P0(r,a):C0(r,a))&&(j=eu(j,"onBeforeInput"),0<j.length&&(K=new da("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:j}),K.data=ge))}Hp(Q,s)})}function _a(r,s,a){return{instance:r,listener:s,currentTarget:a}}function eu(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=it(r,a),g!=null&&c.unshift(_a(r,g,f)),g=it(r,s),g!=null&&c.push(_a(r,g,f))),r=r.return}return c}function Zs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Gp(r,s,a,c,f){for(var g=s._reactName,_=[];a!==null&&a!==c;){var I=a,C=I.alternate,j=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&j!==null&&(I=j,f?(C=it(a,g),C!=null&&_.unshift(_a(a,C,I))):f||(C=it(a,g),C!=null&&_.push(_a(a,C,I)))),a=a.return}_.length!==0&&r.push({event:s,listeners:_})}var z0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function Qp(r){return(typeof r=="string"?r:""+r).replace(z0,`
`).replace($0,"")}function tu(r,s,a){if(s=Qp(s),Qp(r)!==s&&a)throw Error(t(425))}function nu(){}var mh=null,gh=null;function yh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vh=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(r){return Yp.resolve(null).then(r).catch(H0)}:vh;function H0(r){setTimeout(function(){throw r})}function _h(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),On(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);On(s)}function Yr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Xp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Jn="__reactFiber$"+eo,wa="__reactProps$"+eo,_r="__reactContainer$"+eo,wh="__reactEvents$"+eo,K0="__reactListeners$"+eo,G0="__reactHandles$"+eo;function Wi(r){var s=r[Jn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[_r]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Xp(r);r!==null;){if(a=r[Jn])return a;r=Xp(r)}return s}r=a,a=r.parentNode}return null}function Ea(r){return r=r[Jn]||r[_r],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function to(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function ru(r){return r[wa]||null}var Eh=[],no=-1;function Xr(r){return{current:r}}function Ge(r){0>no||(r.current=Eh[no],Eh[no]=null,no--)}function He(r,s){no++,Eh[no]=r.current,r.current=s}var Jr={},Lt=Xr(Jr),Qt=Xr(!1),Hi=Jr;function ro(r,s){var a=r.type.contextTypes;if(!a)return Jr;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Yt(r){return r=r.childContextTypes,r!=null}function iu(){Ge(Qt),Ge(Lt)}function Jp(r,s,a){if(Lt.current!==Jr)throw Error(t(168));He(Lt,s),He(Qt,a)}function Zp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,Fe(r)||"Unknown",f));return ne({},a,c)}function su(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Jr,Hi=Lt.current,He(Lt,r),He(Qt,Qt.current),!0}function em(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Zp(r,s,Hi),c.__reactInternalMemoizedMergedChildContext=r,Ge(Qt),Ge(Lt),He(Lt,r)):Ge(Qt),He(Qt,a)}var wr=null,ou=!1,Th=!1;function tm(r){wr===null?wr=[r]:wr.push(r)}function Q0(r){ou=!0,tm(r)}function Zr(){if(!Th&&wr!==null){Th=!0;var r=0,s=Ce;try{var a=wr;for(Ce=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}wr=null,ou=!1}catch(f){throw wr!==null&&(wr=wr.slice(r+1)),bs(Mi,Zr),f}finally{Ce=s,Th=!1}}return null}var io=[],so=0,au=null,lu=0,_n=[],wn=0,Ki=null,Er=1,Tr="";function Gi(r,s){io[so++]=lu,io[so++]=au,au=r,lu=s}function nm(r,s,a){_n[wn++]=Er,_n[wn++]=Tr,_n[wn++]=Ki,Ki=r;var c=Er;r=Tr;var f=32-$t(c)-1;c&=~(1<<f),a+=1;var g=32-$t(s)+f;if(30<g){var _=f-f%5;g=(c&(1<<_)-1).toString(32),c>>=_,f-=_,Er=1<<32-$t(s)+f|a<<f|c,Tr=g+r}else Er=1<<g|a<<f|c,Tr=r}function Ih(r){r.return!==null&&(Gi(r,1),nm(r,1,0))}function Sh(r){for(;r===au;)au=io[--so],io[so]=null,lu=io[--so],io[so]=null;for(;r===Ki;)Ki=_n[--wn],_n[wn]=null,Tr=_n[--wn],_n[wn]=null,Er=_n[--wn],_n[wn]=null}var cn=null,hn=null,Xe=!1,bn=null;function rm(r,s){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function im(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,cn=r,hn=Yr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,cn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Ki!==null?{id:Er,overflow:Tr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,cn=r,hn=null,!0):!1;default:return!1}}function Ah(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Rh(r){if(Xe){var s=hn;if(s){var a=s;if(!im(r,s)){if(Ah(r))throw Error(t(418));s=Yr(a.nextSibling);var c=cn;s&&im(r,s)?rm(c,a):(r.flags=r.flags&-4097|2,Xe=!1,cn=r)}}else{if(Ah(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,cn=r}}}function sm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;cn=r}function uu(r){if(r!==cn)return!1;if(!Xe)return sm(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!yh(r.type,r.memoizedProps)),s&&(s=hn)){if(Ah(r))throw om(),Error(t(418));for(;s;)rm(r,s),s=Yr(s.nextSibling)}if(sm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){hn=Yr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=cn?Yr(r.stateNode.nextSibling):null;return!0}function om(){for(var r=hn;r;)r=Yr(r.nextSibling)}function oo(){hn=cn=null,Xe=!1}function Ph(r){bn===null?bn=[r]:bn.push(r)}var Y0=ye.ReactCurrentBatchConfig;function Ta(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(_){var I=f.refs;_===null?delete I[g]:I[g]=_},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function cu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function am(r){var s=r._init;return s(r._payload)}function lm(r){function s(b,N){if(r){var F=b.deletions;F===null?(b.deletions=[N],b.flags|=16):F.push(N)}}function a(b,N){if(!r)return null;for(;N!==null;)s(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function f(b,N){return b=ai(b,N),b.index=0,b.sibling=null,b}function g(b,N,F){return b.index=F,r?(F=b.alternate,F!==null?(F=F.index,F<N?(b.flags|=2,N):F):(b.flags|=2,N)):(b.flags|=1048576,N)}function _(b){return r&&b.alternate===null&&(b.flags|=2),b}function I(b,N,F,X){return N===null||N.tag!==6?(N=vd(F,b.mode,X),N.return=b,N):(N=f(N,F),N.return=b,N)}function C(b,N,F,X){var he=F.type;return he===x?K(b,N,F.props.children,X,F.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Vt&&am(he)===N.type)?(X=f(N,F.props),X.ref=Ta(b,N,F),X.return=b,X):(X=Vu(F.type,F.key,F.props,null,b.mode,X),X.ref=Ta(b,N,F),X.return=b,X)}function j(b,N,F,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=_d(F,b.mode,X),N.return=b,N):(N=f(N,F.children||[]),N.return=b,N)}function K(b,N,F,X,he){return N===null||N.tag!==7?(N=ns(F,b.mode,X,he),N.return=b,N):(N=f(N,F),N.return=b,N)}function Q(b,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=vd(""+N,b.mode,F),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Me:return F=Vu(N.type,N.key,N.props,null,b.mode,F),F.ref=Ta(b,null,N),F.return=b,F;case Re:return N=_d(N,b.mode,F),N.return=b,N;case Vt:var X=N._init;return Q(b,X(N._payload),F)}if(cr(N)||pe(N))return N=ns(N,b.mode,F,null),N.return=b,N;cu(b,N)}return null}function H(b,N,F,X){var he=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:I(b,N,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:return F.key===he?C(b,N,F,X):null;case Re:return F.key===he?j(b,N,F,X):null;case Vt:return he=F._init,H(b,N,he(F._payload),X)}if(cr(F)||pe(F))return he!==null?null:K(b,N,F,X,null);cu(b,F)}return null}function te(b,N,F,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return b=b.get(F)||null,I(N,b,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Me:return b=b.get(X.key===null?F:X.key)||null,C(N,b,X,he);case Re:return b=b.get(X.key===null?F:X.key)||null,j(N,b,X,he);case Vt:var me=X._init;return te(b,N,F,me(X._payload),he)}if(cr(X)||pe(X))return b=b.get(F)||null,K(N,b,X,he,null);cu(N,X)}return null}function se(b,N,F,X){for(var he=null,me=null,ge=N,_e=N=0,It=null;ge!==null&&_e<F.length;_e++){ge.index>_e?(It=ge,ge=null):It=ge.sibling;var Ve=H(b,ge,F[_e],X);if(Ve===null){ge===null&&(ge=It);break}r&&ge&&Ve.alternate===null&&s(b,ge),N=g(Ve,N,_e),me===null?he=Ve:me.sibling=Ve,me=Ve,ge=It}if(_e===F.length)return a(b,ge),Xe&&Gi(b,_e),he;if(ge===null){for(;_e<F.length;_e++)ge=Q(b,F[_e],X),ge!==null&&(N=g(ge,N,_e),me===null?he=ge:me.sibling=ge,me=ge);return Xe&&Gi(b,_e),he}for(ge=c(b,ge);_e<F.length;_e++)It=te(ge,b,_e,F[_e],X),It!==null&&(r&&It.alternate!==null&&ge.delete(It.key===null?_e:It.key),N=g(It,N,_e),me===null?he=It:me.sibling=It,me=It);return r&&ge.forEach(function(li){return s(b,li)}),Xe&&Gi(b,_e),he}function le(b,N,F,X){var he=pe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=N,_e=N=0,It=null,Ve=F.next();ge!==null&&!Ve.done;_e++,Ve=F.next()){ge.index>_e?(It=ge,ge=null):It=ge.sibling;var li=H(b,ge,Ve.value,X);if(li===null){ge===null&&(ge=It);break}r&&ge&&li.alternate===null&&s(b,ge),N=g(li,N,_e),me===null?he=li:me.sibling=li,me=li,ge=It}if(Ve.done)return a(b,ge),Xe&&Gi(b,_e),he;if(ge===null){for(;!Ve.done;_e++,Ve=F.next())Ve=Q(b,Ve.value,X),Ve!==null&&(N=g(Ve,N,_e),me===null?he=Ve:me.sibling=Ve,me=Ve);return Xe&&Gi(b,_e),he}for(ge=c(b,ge);!Ve.done;_e++,Ve=F.next())Ve=te(ge,b,_e,Ve.value,X),Ve!==null&&(r&&Ve.alternate!==null&&ge.delete(Ve.key===null?_e:Ve.key),N=g(Ve,N,_e),me===null?he=Ve:me.sibling=Ve,me=Ve);return r&&ge.forEach(function(kE){return s(b,kE)}),Xe&&Gi(b,_e),he}function st(b,N,F,X){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Me:e:{for(var he=F.key,me=N;me!==null;){if(me.key===he){if(he=F.type,he===x){if(me.tag===7){a(b,me.sibling),N=f(me,F.props.children),N.return=b,b=N;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Vt&&am(he)===me.type){a(b,me.sibling),N=f(me,F.props),N.ref=Ta(b,me,F),N.return=b,b=N;break e}a(b,me);break}else s(b,me);me=me.sibling}F.type===x?(N=ns(F.props.children,b.mode,X,F.key),N.return=b,b=N):(X=Vu(F.type,F.key,F.props,null,b.mode,X),X.ref=Ta(b,N,F),X.return=b,b=X)}return _(b);case Re:e:{for(me=F.key;N!==null;){if(N.key===me)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(b,N.sibling),N=f(N,F.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else s(b,N);N=N.sibling}N=_d(F,b.mode,X),N.return=b,b=N}return _(b);case Vt:return me=F._init,st(b,N,me(F._payload),X)}if(cr(F))return se(b,N,F,X);if(pe(F))return le(b,N,F,X);cu(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(b,N.sibling),N=f(N,F),N.return=b,b=N):(a(b,N),N=vd(F,b.mode,X),N.return=b,b=N),_(b)):a(b,N)}return st}var ao=lm(!0),um=lm(!1),hu=Xr(null),du=null,lo=null,Ch=null;function kh(){Ch=lo=du=null}function Nh(r){var s=hu.current;Ge(hu),r._currentValue=s}function xh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function uo(r,s){du=r,Ch=lo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Xt=!0),r.firstContext=null)}function En(r){var s=r._currentValue;if(Ch!==r)if(r={context:r,memoizedValue:s,next:null},lo===null){if(du===null)throw Error(t(308));lo=r,du.dependencies={lanes:0,firstContext:r}}else lo=lo.next=r;return s}var Qi=null;function Dh(r){Qi===null?Qi=[r]:Qi.push(r)}function cm(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,Dh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Ir(r,c)}function Ir(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ei=!1;function Oh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Sr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ti(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Ir(r,a)}return f=c.interleaved,f===null?(s.next=s,Dh(c)):(s.next=f.next,f.next=s),c.interleaved=s,Ir(r,a)}function fu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,qr(r,a)}}function dm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=_:g=g.next=_,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function pu(r,s,a,c){var f=r.updateQueue;ei=!1;var g=f.firstBaseUpdate,_=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var C=I,j=C.next;C.next=null,_===null?g=j:_.next=j,_=C;var K=r.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==_&&(I===null?K.firstBaseUpdate=j:I.next=j,K.lastBaseUpdate=C))}if(g!==null){var Q=f.baseState;_=0,K=j=C=null,I=g;do{var H=I.lane,te=I.eventTime;if((c&H)===H){K!==null&&(K=K.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=r,le=I;switch(H=s,te=a,le.tag){case 1:if(se=le.payload,typeof se=="function"){Q=se.call(te,Q,H);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=le.payload,H=typeof se=="function"?se.call(te,Q,H):se,H==null)break e;Q=ne({},Q,H);break e;case 2:ei=!0}}I.callback!==null&&I.lane!==0&&(r.flags|=64,H=f.effects,H===null?f.effects=[I]:H.push(I))}else te={eventTime:te,lane:H,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(j=K=te,C=Q):K=K.next=te,_|=H;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;H=I,I=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);if(K===null&&(C=Q),f.baseState=C,f.firstBaseUpdate=j,f.lastBaseUpdate=K,s=f.shared.interleaved,s!==null){f=s;do _|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);Ji|=_,r.lanes=_,r.memoizedState=Q}}function fm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ia={},Zn=Xr(Ia),Sa=Xr(Ia),Aa=Xr(Ia);function Yi(r){if(r===Ia)throw Error(t(174));return r}function Vh(r,s){switch(He(Aa,s),He(Sa,r),He(Zn,Ia),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}Ge(Zn),He(Zn,s)}function co(){Ge(Zn),Ge(Sa),Ge(Aa)}function pm(r){Yi(Aa.current);var s=Yi(Zn.current),a=pt(s,r.type);s!==a&&(He(Sa,r),He(Zn,a))}function Lh(r){Sa.current===r&&(Ge(Zn),Ge(Sa))}var Je=Xr(0);function mu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var bh=[];function Mh(){for(var r=0;r<bh.length;r++)bh[r]._workInProgressVersionPrimary=null;bh.length=0}var gu=ye.ReactCurrentDispatcher,Fh=ye.ReactCurrentBatchConfig,Xi=0,Ze=null,gt=null,Et=null,yu=!1,Ra=!1,Pa=0,X0=0;function bt(){throw Error(t(321))}function Uh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function jh(r,s,a,c,f,g){if(Xi=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,gu.current=r===null||r.memoizedState===null?tE:nE,r=a(c,f),Ra){g=0;do{if(Ra=!1,Pa=0,25<=g)throw Error(t(301));g+=1,Et=gt=null,s.updateQueue=null,gu.current=rE,r=a(c,f)}while(Ra)}if(gu.current=wu,s=gt!==null&&gt.next!==null,Xi=0,Et=gt=Ze=null,yu=!1,s)throw Error(t(300));return r}function Bh(){var r=Pa!==0;return Pa=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=r:Et=Et.next=r,Et}function Tn(){if(gt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=Et===null?Ze.memoizedState:Et.next;if(s!==null)Et=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?Ze.memoizedState=Et=r:Et=Et.next=r}return Et}function Ca(r,s){return typeof s=="function"?s(r):s}function zh(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=gt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var _=f.next;f.next=g.next,g.next=_}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=_=null,C=null,j=g;do{var K=j.lane;if((Xi&K)===K)C!==null&&(C=C.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:r(c,j.action);else{var Q={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};C===null?(I=C=Q,_=c):C=C.next=Q,Ze.lanes|=K,Ji|=K}j=j.next}while(j!==null&&j!==g);C===null?_=c:C.next=I,Ln(c,s.memoizedState)||(Xt=!0),s.memoizedState=c,s.baseState=_,s.baseQueue=C,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,Ji|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function $h(r){var s=Tn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do g=r(g,_.action),_=_.next;while(_!==f);Ln(g,s.memoizedState)||(Xt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function mm(){}function gm(r,s){var a=Ze,c=Tn(),f=s(),g=!Ln(c.memoizedState,f);if(g&&(c.memoizedState=f,Xt=!0),c=c.queue,qh(_m.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,ka(9,vm.bind(null,a,c,f,s),void 0,null),Tt===null)throw Error(t(349));(Xi&30)!==0||ym(a,s,f)}return f}function ym(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function vm(r,s,a,c){s.value=a,s.getSnapshot=c,wm(s)&&Em(r)}function _m(r,s,a){return a(function(){wm(s)&&Em(r)})}function wm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function Em(r){var s=Ir(r,1);s!==null&&jn(s,r,1,-1)}function Tm(r){var s=er();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:r},s.queue=r,r=r.dispatch=eE.bind(null,Ze,r),[s.memoizedState,r]}function ka(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Im(){return Tn().memoizedState}function vu(r,s,a,c){var f=er();Ze.flags|=r,f.memoizedState=ka(1|s,a,void 0,c===void 0?null:c)}function _u(r,s,a,c){var f=Tn();c=c===void 0?null:c;var g=void 0;if(gt!==null){var _=gt.memoizedState;if(g=_.destroy,c!==null&&Uh(c,_.deps)){f.memoizedState=ka(s,a,g,c);return}}Ze.flags|=r,f.memoizedState=ka(1|s,a,g,c)}function Sm(r,s){return vu(8390656,8,r,s)}function qh(r,s){return _u(2048,8,r,s)}function Am(r,s){return _u(4,2,r,s)}function Rm(r,s){return _u(4,4,r,s)}function Pm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Cm(r,s,a){return a=a!=null?a.concat([r]):null,_u(4,4,Pm.bind(null,s,r),a)}function Wh(){}function km(r,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Uh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Nm(r,s){var a=Tn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Uh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function xm(r,s,a){return(Xi&21)===0?(r.baseState&&(r.baseState=!1,Xt=!0),r.memoizedState=a):(Ln(a,s)||(a=ji(),Ze.lanes|=a,Ji|=a,r.baseState=!0),s)}function J0(r,s){var a=Ce;Ce=a!==0&&4>a?a:4,r(!0);var c=Fh.transition;Fh.transition={};try{r(!1),s()}finally{Ce=a,Fh.transition=c}}function Dm(){return Tn().memoizedState}function Z0(r,s,a){var c=si(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Om(r))Vm(s,a);else if(a=cm(r,s,a,c),a!==null){var f=Ht();jn(a,r,c,f),Lm(a,s,c)}}function eE(r,s,a){var c=si(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Om(r))Vm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var _=s.lastRenderedState,I=g(_,a);if(f.hasEagerState=!0,f.eagerState=I,Ln(I,_)){var C=s.interleaved;C===null?(f.next=f,Dh(s)):(f.next=C.next,C.next=f),s.interleaved=f;return}}catch{}finally{}a=cm(r,s,f,c),a!==null&&(f=Ht(),jn(a,r,c,f),Lm(a,s,c))}}function Om(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Vm(r,s){Ra=yu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Lm(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,qr(r,a)}}var wu={readContext:En,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},tE={readContext:En,useCallback:function(r,s){return er().memoizedState=[r,s===void 0?null:s],r},useContext:En,useEffect:Sm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,vu(4194308,4,Pm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return vu(4194308,4,r,s)},useInsertionEffect:function(r,s){return vu(4,2,r,s)},useMemo:function(r,s){var a=er();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=er();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=Z0.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=er();return r={current:r},s.memoizedState=r},useState:Tm,useDebugValue:Wh,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=Tm(!1),s=r[0];return r=J0.bind(null,r[1]),er().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,f=er();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(Xi&30)!==0||ym(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Sm(_m.bind(null,c,g,r),[r]),c.flags|=2048,ka(9,vm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=er(),s=Tt.identifierPrefix;if(Xe){var a=Tr,c=Er;a=(c&~(1<<32-$t(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Pa++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=X0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},nE={readContext:En,useCallback:km,useContext:En,useEffect:qh,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Nm,useReducer:zh,useRef:Im,useState:function(){return zh(Ca)},useDebugValue:Wh,useDeferredValue:function(r){var s=Tn();return xm(s,gt.memoizedState,r)},useTransition:function(){var r=zh(Ca)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:mm,useSyncExternalStore:gm,useId:Dm,unstable_isNewReconciler:!1},rE={readContext:En,useCallback:km,useContext:En,useEffect:qh,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Nm,useReducer:$h,useRef:Im,useState:function(){return $h(Ca)},useDebugValue:Wh,useDeferredValue:function(r){var s=Tn();return gt===null?s.memoizedState=r:xm(s,gt.memoizedState,r)},useTransition:function(){var r=$h(Ca)[0],s=Tn().memoizedState;return[r,s]},useMutableSource:mm,useSyncExternalStore:gm,useId:Dm,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=ne({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Hh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:ne({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Eu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Ht(),f=si(r),g=Sr(c,f);g.payload=s,a!=null&&(g.callback=a),s=ti(r,g,f),s!==null&&(jn(s,r,f,c),fu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Ht(),f=si(r),g=Sr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ti(r,g,f),s!==null&&(jn(s,r,f,c),fu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),c=si(r),f=Sr(a,c);f.tag=2,s!=null&&(f.callback=s),s=ti(r,f,c),s!==null&&(jn(s,r,c,a),fu(s,r,c))}};function bm(r,s,a,c,f,g,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,_):s.prototype&&s.prototype.isPureReactComponent?!ma(a,c)||!ma(f,g):!0}function Mm(r,s,a){var c=!1,f=Jr,g=s.contextType;return typeof g=="object"&&g!==null?g=En(g):(f=Yt(s)?Hi:Lt.current,c=s.contextTypes,g=(c=c!=null)?ro(r,f):Jr),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Eu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Fm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Eu.enqueueReplaceState(s,s.state,null)}function Kh(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Oh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=En(g):(g=Yt(s)?Hi:Lt.current,f.context=ro(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Hh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Eu.enqueueReplaceState(f,f.state,null),pu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function ho(r,s){try{var a="",c=s;do a+=Se(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Gh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Qh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function Um(r,s,a){a=Sr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Cu||(Cu=!0,cd=c),Qh(r,s)},a}function jm(r,s,a){a=Sr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){Qh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Qh(r,s),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var _=s.stack;this.componentDidCatch(s.value,{componentStack:_!==null?_:""})}),a}function Bm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new iE;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=vE.bind(null,r,s,a),s.then(r,r))}function zm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function $m(r,s,a,c,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Sr(-1,1),s.tag=2,ti(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var sE=ye.ReactCurrentOwner,Xt=!1;function Wt(r,s,a,c){s.child=r===null?um(s,null,a,c):ao(s,r.child,a,c)}function qm(r,s,a,c,f){a=a.render;var g=s.ref;return uo(s,f),c=jh(r,s,a,c,g,f),a=Bh(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Ar(r,s,f)):(Xe&&a&&Ih(s),s.flags|=1,Wt(r,s,c,f),s.child)}function Wm(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!yd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Hm(r,s,g,c,f)):(r=Vu(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var _=g.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(_,c)&&r.ref===s.ref)return Ar(r,s,f)}return s.flags|=1,r=ai(g,c),r.ref=s.ref,r.return=s,s.child=r}function Hm(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(ma(g,c)&&r.ref===s.ref)if(Xt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(Xt=!0);else return s.lanes=r.lanes,Ar(r,s,f)}return Yh(r,s,a,c,f)}function Km(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(po,dn),dn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(po,dn),dn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(po,dn),dn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,He(po,dn),dn|=c;return Wt(r,s,f,a),s.child}function Gm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Yh(r,s,a,c,f){var g=Yt(a)?Hi:Lt.current;return g=ro(s,g),uo(s,f),a=jh(r,s,a,c,g,f),c=Bh(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Ar(r,s,f)):(Xe&&c&&Ih(s),s.flags|=1,Wt(r,s,a,f),s.child)}function Qm(r,s,a,c,f){if(Yt(a)){var g=!0;su(s)}else g=!1;if(uo(s,f),s.stateNode===null)Iu(r,s),Mm(s,a,c),Kh(s,a,c,f),c=!0;else if(r===null){var _=s.stateNode,I=s.memoizedProps;_.props=I;var C=_.context,j=a.contextType;typeof j=="object"&&j!==null?j=En(j):(j=Yt(a)?Hi:Lt.current,j=ro(s,j));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||C!==j)&&Fm(s,_,c,j),ei=!1;var H=s.memoizedState;_.state=H,pu(s,c,_,f),C=s.memoizedState,I!==c||H!==C||Qt.current||ei?(typeof K=="function"&&(Hh(s,a,K,c),C=s.memoizedState),(I=ei||bm(s,a,I,c,H,C,j))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(s.flags|=4194308)):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=C),_.props=c,_.state=C,_.context=j,c=I):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{_=s.stateNode,hm(r,s),I=s.memoizedProps,j=s.type===s.elementType?I:Mn(s.type,I),_.props=j,Q=s.pendingProps,H=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=En(C):(C=Yt(a)?Hi:Lt.current,C=ro(s,C));var te=a.getDerivedStateFromProps;(K=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==Q||H!==C)&&Fm(s,_,c,C),ei=!1,H=s.memoizedState,_.state=H,pu(s,c,_,f);var se=s.memoizedState;I!==Q||H!==se||Qt.current||ei?(typeof te=="function"&&(Hh(s,a,te,c),se=s.memoizedState),(j=ei||bm(s,a,j,c,H,se,C)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,se,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,se,C)),typeof _.componentDidUpdate=="function"&&(s.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=se),_.props=c,_.state=se,_.context=C,c=j):(typeof _.componentDidUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),c=!1)}return Xh(r,s,a,c,g,f)}function Xh(r,s,a,c,f,g){Gm(r,s);var _=(s.flags&128)!==0;if(!c&&!_)return f&&em(s,a,!1),Ar(r,s,g);c=s.stateNode,sE.current=s;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&_?(s.child=ao(s,r.child,null,g),s.child=ao(s,null,I,g)):Wt(r,s,I,g),s.memoizedState=c.state,f&&em(s,a,!0),s.child}function Ym(r){var s=r.stateNode;s.pendingContext?Jp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Jp(r,s.context,!1),Vh(r,s.containerInfo)}function Xm(r,s,a,c,f){return oo(),Ph(f),s.flags|=256,Wt(r,s,a,c),s.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Jm(r,s,a){var c=s.pendingProps,f=Je.current,g=!1,_=(s.flags&128)!==0,I;if((I=_)||(I=r!==null&&r.memoizedState===null?!1:(f&2)!==0),I?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),He(Je,f&1),r===null)return Rh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(_=c.children,r=c.fallback,g?(c=s.mode,g=s.child,_={mode:"hidden",children:_},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=_):g=Lu(_,c,0,null),r=ns(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Zh(a),s.memoizedState=Jh,r):ed(s,_));if(f=r.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return oE(r,s,_,c,I,f,a);if(g){g=c.fallback,_=s.mode,f=r.child,I=f.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=C,s.deletions=null):(c=ai(f,C),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=ai(I,g):(g=ns(g,_,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,_=r.child.memoizedState,_=_===null?Zh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},g.memoizedState=_,g.childLanes=r.childLanes&~a,s.memoizedState=Jh,c}return g=r.child,r=g.sibling,c=ai(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function ed(r,s){return s=Lu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Tu(r,s,a,c){return c!==null&&Ph(c),ao(s,r.child,null,a),r=ed(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function oE(r,s,a,c,f,g,_){if(a)return s.flags&256?(s.flags&=-257,c=Gh(Error(t(422))),Tu(r,s,_,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=Lu({mode:"visible",children:c.children},f,0,null),g=ns(g,f,_,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&ao(s,r.child,null,_),s.child.memoizedState=Zh(_),s.memoizedState=Jh,g);if((s.mode&1)===0)return Tu(r,s,_,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=Gh(g,c,void 0),Tu(r,s,_,c)}if(I=(_&r.childLanes)!==0,Xt||I){if(c=Tt,c!==null){switch(_&-_){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|_))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ir(r,f),jn(c,r,f,-1))}return gd(),c=Gh(Error(t(421))),Tu(r,s,_,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=_E.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,hn=Yr(f.nextSibling),cn=s,Xe=!0,bn=null,r!==null&&(_n[wn++]=Er,_n[wn++]=Tr,_n[wn++]=Ki,Er=r.id,Tr=r.overflow,Ki=s),s=ed(s,c.children),s.flags|=4096,s)}function Zm(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),xh(r.return,s,a)}function td(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function eg(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(Wt(r,s,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Zm(r,a,s);else if(r.tag===19)Zm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(He(Je,c),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&mu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),td(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&mu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}td(s,!0,a,null,g);break;case"together":td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Iu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Ar(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Ji|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=ai(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=ai(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function aE(r,s,a){switch(s.tag){case 3:Ym(s),oo();break;case 5:pm(s);break;case 1:Yt(s.type)&&su(s);break;case 4:Vh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;He(hu,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Jm(r,s,a):(He(Je,Je.current&1),r=Ar(r,s,a),r!==null?r.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return eg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,Km(r,s,a)}return Ar(r,s,a)}var tg,nd,ng,rg;tg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nd=function(){},ng=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,Yi(Zn.current);var g=null;switch(a){case"input":f=ki(r,f),c=ki(r,c),g=[];break;case"select":f=ne({},f,{value:void 0}),c=ne({},c,{value:void 0}),g=[];break;case"textarea":f=qo(r,f),c=qo(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=nu)}Yo(a,c);var _;a=null;for(j in f)if(!c.hasOwnProperty(j)&&f.hasOwnProperty(j)&&f[j]!=null)if(j==="style"){var I=f[j];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in c){var C=c[j];if(I=f!=null?f[j]:void 0,c.hasOwnProperty(j)&&C!==I&&(C!=null||I!=null))if(j==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&I[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(g||(g=[]),g.push(j,a)),a=C;else j==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(g=g||[]).push(j,C)):j==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(j,""+C):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(C!=null&&j==="onScroll"&&Ke("scroll",r),g||I===C||(g=[])):(g=g||[]).push(j,C))}a&&(g=g||[]).push("style",a);var j=g;(s.updateQueue=j)&&(s.flags|=4)}},rg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Na(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function lE(r,s,a){var c=s.pendingProps;switch(Sh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Yt(s.type)&&iu(),Mt(s),null;case 3:return c=s.stateNode,co(),Ge(Qt),Ge(Lt),Mh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(uu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,bn!==null&&(fd(bn),bn=null))),nd(r,s),Mt(s),null;case 5:Lh(s);var f=Yi(Aa.current);if(a=s.type,r!==null&&s.stateNode!=null)ng(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=Yi(Zn.current),uu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Jn]=s,c[wa]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(f=0;f<ya.length;f++)Ke(ya[f],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":As(c,g),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",c);break;case"textarea":Ps(c,g),Ke("invalid",c)}Yo(a,g),f=null;for(var _ in g)if(g.hasOwnProperty(_)){var I=g[_];_==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&tu(c.textContent,I,r),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&tu(c.textContent,I,r),f=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ur(c),Pl(c,g,!0);break;case"textarea":ur(c),Wo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=nu)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{_=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=_.createElement(a,{is:c.is}):(r=_.createElement(a),a==="select"&&(_=r,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):r=_.createElementNS(r,a),r[Jn]=s,r[wa]=c,tg(r,s,!1,!1),s.stateNode=r;e:{switch(_=Xo(a,c),a){case"dialog":Ke("cancel",r),Ke("close",r),f=c;break;case"iframe":case"object":case"embed":Ke("load",r),f=c;break;case"video":case"audio":for(f=0;f<ya.length;f++)Ke(ya[f],r);f=c;break;case"source":Ke("error",r),f=c;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=c;break;case"details":Ke("toggle",r),f=c;break;case"input":As(r,c),f=ki(r,c),Ke("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=ne({},c,{value:void 0}),Ke("invalid",r);break;case"textarea":Ps(r,c),f=qo(r,c),Ke("invalid",r);break;default:f=c}Yo(a,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var C=I[g];g==="style"?Go(r,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Ho(r,C)):g==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Ur(r,C):typeof C=="number"&&Ur(r,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&Ke("scroll",r):C!=null&&ae(r,g,C,_))}switch(a){case"input":ur(r),Pl(r,c,!1);break;case"textarea":ur(r),Wo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?hr(r,!!c.multiple,g,!1):c.defaultValue!=null&&hr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=nu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)rg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Yi(Aa.current),Yi(Zn.current),uu(s)){if(c=s.stateNode,a=s.memoizedProps,c[Jn]=s,(g=c.nodeValue!==a)&&(r=cn,r!==null))switch(r.tag){case 3:tu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&tu(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=s,s.stateNode=c}return Mt(s),null;case 13:if(Ge(Je),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&hn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)om(),oo(),s.flags|=98560,g=!1;else if(g=uu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Jn]=s}else oo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else bn!==null&&(fd(bn),bn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Je.current&1)!==0?yt===0&&(yt=3):gd())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return co(),nd(r,s),r===null&&va(s.stateNode.containerInfo),Mt(s),null;case 10:return Nh(s.type._context),Mt(s),null;case 17:return Yt(s.type)&&iu(),Mt(s),null;case 19:if(Ge(Je),g=s.memoizedState,g===null)return Mt(s),null;if(c=(s.flags&128)!==0,_=g.rendering,_===null)if(c)Na(g,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(_=mu(r),_!==null){for(s.flags|=128,Na(g,!1),c=_.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,_=g.alternate,_===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=_.childLanes,g.lanes=_.lanes,g.child=_.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=_.memoizedProps,g.memoizedState=_.memoizedState,g.updateQueue=_.updateQueue,g.type=_.type,r=_.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&We()>mo&&(s.flags|=128,c=!0,Na(g,!1),s.lanes=4194304)}else{if(!c)if(r=mu(_),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Na(g,!0),g.tail===null&&g.tailMode==="hidden"&&!_.alternate&&!Xe)return Mt(s),null}else 2*We()-g.renderingStartTime>mo&&a!==1073741824&&(s.flags|=128,c=!0,Na(g,!1),s.lanes=4194304);g.isBackwards?(_.sibling=s.child,s.child=_):(a=g.last,a!==null?a.sibling=_:s.child=_,g.last=_)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=We(),s.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return md(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(dn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function uE(r,s){switch(Sh(s),s.tag){case 1:return Yt(s.type)&&iu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return co(),Ge(Qt),Ge(Lt),Mh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Lh(s),null;case 13:if(Ge(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));oo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Je),null;case 4:return co(),null;case 10:return Nh(s.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Su=!1,Ft=!1,cE=typeof WeakSet=="function"?WeakSet:Set,ie=null;function fo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,s,c)}else a.current=null}function rd(r,s,a){try{a()}catch(c){nt(r,s,c)}}var ig=!1;function hE(r,s){if(mh=Kr,r=bp(),ah(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var _=0,I=-1,C=-1,j=0,K=0,Q=r,H=null;t:for(;;){for(var te;Q!==a||f!==0&&Q.nodeType!==3||(I=_+f),Q!==g||c!==0&&Q.nodeType!==3||(C=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(te=Q.firstChild)!==null;)H=Q,Q=te;for(;;){if(Q===r)break t;if(H===a&&++j===f&&(I=_),H===g&&++K===c&&(C=_),(te=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=te}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(gh={focusedElem:r,selectionRange:a},Kr=!1,ie=s;ie!==null;)if(s=ie,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ie=r;else for(;ie!==null;){s=ie;try{var se=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var le=se.memoizedProps,st=se.memoizedState,b=s.stateNode,N=b.getSnapshotBeforeUpdate(s.elementType===s.type?le:Mn(s.type,le),st);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){nt(s,s.return,X)}if(r=s.sibling,r!==null){r.return=s.return,ie=r;break}ie=s.return}return se=ig,ig=!1,se}function xa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&rd(s,a,g)}f=f.next}while(f!==c)}}function Au(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function id(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function sg(r){var s=r.alternate;s!==null&&(r.alternate=null,sg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Jn],delete s[wa],delete s[wh],delete s[K0],delete s[G0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function og(r){return r.tag===5||r.tag===3||r.tag===4}function ag(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||og(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function sd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=nu));else if(c!==4&&(r=r.child,r!==null))for(sd(r,s,a),r=r.sibling;r!==null;)sd(r,s,a),r=r.sibling}function od(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(od(r,s,a),r=r.sibling;r!==null;)od(r,s,a),r=r.sibling}var Pt=null,Fn=!1;function ni(r,s,a){for(a=a.child;a!==null;)lg(r,s,a),a=a.sibling}function lg(r,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Fi,a)}catch{}switch(a.tag){case 5:Ft||fo(a,s);case 6:var c=Pt,f=Fn;Pt=null,ni(r,s,a),Pt=c,Fn=f,Pt!==null&&(Fn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Fn?(r=Pt,a=a.stateNode,r.nodeType===8?_h(r.parentNode,a):r.nodeType===1&&_h(r,a),On(r)):_h(Pt,a.stateNode));break;case 4:c=Pt,f=Fn,Pt=a.stateNode.containerInfo,Fn=!0,ni(r,s,a),Pt=c,Fn=f;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,_=g.destroy;g=g.tag,_!==void 0&&((g&2)!==0||(g&4)!==0)&&rd(a,s,_),f=f.next}while(f!==c)}ni(r,s,a);break;case 1:if(!Ft&&(fo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){nt(a,s,I)}ni(r,s,a);break;case 21:ni(r,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,ni(r,s,a),Ft=c):ni(r,s,a);break;default:ni(r,s,a)}}function ug(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new cE),s.forEach(function(c){var f=wE.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Un(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,_=s,I=_;e:for(;I!==null;){switch(I.tag){case 5:Pt=I.stateNode,Fn=!1;break e;case 3:Pt=I.stateNode.containerInfo,Fn=!0;break e;case 4:Pt=I.stateNode.containerInfo,Fn=!0;break e}I=I.return}if(Pt===null)throw Error(t(160));lg(g,_,f),Pt=null,Fn=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch(j){nt(f,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)cg(s,r),s=s.sibling}function cg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Un(s,r),tr(r),c&4){try{xa(3,r,r.return),Au(3,r)}catch(le){nt(r,r.return,le)}try{xa(5,r,r.return)}catch(le){nt(r,r.return,le)}}break;case 1:Un(s,r),tr(r),c&512&&a!==null&&fo(a,a.return);break;case 5:if(Un(s,r),tr(r),c&512&&a!==null&&fo(a,a.return),r.flags&32){var f=r.stateNode;try{Ur(f,"")}catch(le){nt(r,r.return,le)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,_=a!==null?a.memoizedProps:g,I=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&zo(f,g),Xo(I,_);var j=Xo(I,g);for(_=0;_<C.length;_+=2){var K=C[_],Q=C[_+1];K==="style"?Go(f,Q):K==="dangerouslySetInnerHTML"?Ho(f,Q):K==="children"?Ur(f,Q):ae(f,K,Q,j)}switch(I){case"input":$o(f,g);break;case"textarea":Cs(f,g);break;case"select":var H=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var te=g.value;te!=null?hr(f,!!g.multiple,te,!1):H!==!!g.multiple&&(g.defaultValue!=null?hr(f,!!g.multiple,g.defaultValue,!0):hr(f,!!g.multiple,g.multiple?[]:"",!1))}f[wa]=g}catch(le){nt(r,r.return,le)}}break;case 6:if(Un(s,r),tr(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(le){nt(r,r.return,le)}}break;case 3:if(Un(s,r),tr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{On(s.containerInfo)}catch(le){nt(r,r.return,le)}break;case 4:Un(s,r),tr(r);break;case 13:Un(s,r),tr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(ud=We())),c&4&&ug(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(j=Ft)||K,Un(s,r),Ft=j):Un(s,r),tr(r),c&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!K&&(r.mode&1)!==0)for(ie=r,K=r.child;K!==null;){for(Q=ie=K;ie!==null;){switch(H=ie,te=H.child,H.tag){case 0:case 11:case 14:case 15:xa(4,H,H.return);break;case 1:fo(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{s=c,se.props=s.memoizedProps,se.state=s.memoizedState,se.componentWillUnmount()}catch(le){nt(c,a,le)}}break;case 5:fo(H,H.return);break;case 22:if(H.memoizedState!==null){fg(Q);continue}}te!==null?(te.return=H,ie=te):fg(Q)}K=K.sibling}e:for(K=null,Q=r;;){if(Q.tag===5){if(K===null){K=Q;try{f=Q.stateNode,j?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Q.stateNode,C=Q.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=Ko("display",_))}catch(le){nt(r,r.return,le)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=j?"":Q.memoizedProps}catch(le){nt(r,r.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===r)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===r)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===r)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Un(s,r),tr(r),c&4&&ug(r);break;case 21:break;default:Un(s,r),tr(r)}}function tr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(og(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ur(f,""),c.flags&=-33);var g=ag(r);od(r,g,f);break;case 3:case 4:var _=c.stateNode.containerInfo,I=ag(r);sd(r,I,_);break;default:throw Error(t(161))}}catch(C){nt(r,r.return,C)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function dE(r,s,a){ie=r,hg(r)}function hg(r,s,a){for(var c=(r.mode&1)!==0;ie!==null;){var f=ie,g=f.child;if(f.tag===22&&c){var _=f.memoizedState!==null||Su;if(!_){var I=f.alternate,C=I!==null&&I.memoizedState!==null||Ft;I=Su;var j=Ft;if(Su=_,(Ft=C)&&!j)for(ie=f;ie!==null;)_=ie,C=_.child,_.tag===22&&_.memoizedState!==null?pg(f):C!==null?(C.return=_,ie=C):pg(f);for(;g!==null;)ie=g,hg(g),g=g.sibling;ie=f,Su=I,Ft=j}dg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ie=g):dg(r)}}function dg(r){for(;ie!==null;){var s=ie;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ft||Au(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&fm(s,g,c);break;case 3:var _=s.updateQueue;if(_!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}fm(s,_,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&On(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&id(s)}catch(H){nt(s,s.return,H)}}if(s===r){ie=null;break}if(a=s.sibling,a!==null){a.return=s.return,ie=a;break}ie=s.return}}function fg(r){for(;ie!==null;){var s=ie;if(s===r){ie=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ie=a;break}ie=s.return}}function pg(r){for(;ie!==null;){var s=ie;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Au(4,s)}catch(C){nt(s,a,C)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(C){nt(s,f,C)}}var g=s.return;try{id(s)}catch(C){nt(s,g,C)}break;case 5:var _=s.return;try{id(s)}catch(C){nt(s,_,C)}}}catch(C){nt(s,s.return,C)}if(s===r){ie=null;break}var I=s.sibling;if(I!==null){I.return=s.return,ie=I;break}ie=s.return}}var fE=Math.ceil,Ru=ye.ReactCurrentDispatcher,ad=ye.ReactCurrentOwner,In=ye.ReactCurrentBatchConfig,Oe=0,Tt=null,lt=null,Ct=0,dn=0,po=Xr(0),yt=0,Da=null,Ji=0,Pu=0,ld=0,Oa=null,Jt=null,ud=0,mo=1/0,Rr=null,Cu=!1,cd=null,ri=null,ku=!1,ii=null,Nu=0,Va=0,hd=null,xu=-1,Du=0;function Ht(){return(Oe&6)!==0?We():xu!==-1?xu:xu=We()}function si(r){return(r.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:Y0.transition!==null?(Du===0&&(Du=ji()),Du):(r=Ce,r!==0||(r=window.event,r=r===void 0?16:la(r.type)),r)}function jn(r,s,a,c){if(50<Va)throw Va=0,hd=null,Error(t(185));$r(r,a,c),((Oe&2)===0||r!==Tt)&&(r===Tt&&((Oe&2)===0&&(Pu|=a),yt===4&&oi(r,Ct)),Zt(r,c),a===1&&Oe===0&&(s.mode&1)===0&&(mo=We()+500,ou&&Zr()))}function Zt(r,s){var a=r.callbackNode;pr(r,s);var c=Ui(r,r===Tt?Ct:0);if(c===0)a!==null&&ra(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ra(a),s===1)r.tag===0?Q0(gg.bind(null,r)):tm(gg.bind(null,r)),W0(function(){(Oe&6)===0&&Zr()}),a=null;else{switch(Wr(c)){case 1:a=Mi;break;case 4:a=jr;break;case 16:a=gn;break;case 536870912:a=Dl;break;default:a=gn}a=Sg(a,mg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function mg(r,s){if(xu=-1,Du=0,(Oe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(go()&&r.callbackNode!==a)return null;var c=Ui(r,r===Tt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Ou(r,c);else{s=c;var f=Oe;Oe|=2;var g=vg();(Tt!==r||Ct!==s)&&(Rr=null,mo=We()+500,es(r,s));do try{gE();break}catch(I){yg(r,I)}while(!0);kh(),Ru.current=g,Oe=f,lt!==null?s=0:(Tt=null,Ct=0,s=yt)}if(s!==0){if(s===2&&(f=an(r),f!==0&&(c=f,s=dd(r,f))),s===1)throw a=Da,es(r,0),oi(r,c),Zt(r,We()),a;if(s===6)oi(r,c);else{if(f=r.current.alternate,(c&30)===0&&!pE(f)&&(s=Ou(r,c),s===2&&(g=an(r),g!==0&&(c=g,s=dd(r,g))),s===1))throw a=Da,es(r,0),oi(r,c),Zt(r,We()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ts(r,Jt,Rr);break;case 3:if(oi(r,c),(c&130023424)===c&&(s=ud+500-We(),10<s)){if(Ui(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Ht(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=vh(ts.bind(null,r,Jt,Rr),s);break}ts(r,Jt,Rr);break;case 4:if(oi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var _=31-$t(c);g=1<<_,_=s[_],_>f&&(f=_),c&=~g}if(c=f,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fE(c/1960))-c,10<c){r.timeoutHandle=vh(ts.bind(null,r,Jt,Rr),c);break}ts(r,Jt,Rr);break;case 5:ts(r,Jt,Rr);break;default:throw Error(t(329))}}}return Zt(r,We()),r.callbackNode===a?mg.bind(null,r):null}function dd(r,s){var a=Oa;return r.current.memoizedState.isDehydrated&&(es(r,s).flags|=256),r=Ou(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&fd(s)),r}function fd(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function pE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!Ln(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function oi(r,s){for(s&=~ld,s&=~Pu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),c=1<<a;r[a]=-1,s&=~c}}function gg(r){if((Oe&6)!==0)throw Error(t(327));go();var s=Ui(r,0);if((s&1)===0)return Zt(r,We()),null;var a=Ou(r,s);if(r.tag!==0&&a===2){var c=an(r);c!==0&&(s=c,a=dd(r,c))}if(a===1)throw a=Da,es(r,0),oi(r,s),Zt(r,We()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ts(r,Jt,Rr),Zt(r,We()),null}function pd(r,s){var a=Oe;Oe|=1;try{return r(s)}finally{Oe=a,Oe===0&&(mo=We()+500,ou&&Zr())}}function Zi(r){ii!==null&&ii.tag===0&&(Oe&6)===0&&go();var s=Oe;Oe|=1;var a=In.transition,c=Ce;try{if(In.transition=null,Ce=1,r)return r()}finally{Ce=c,In.transition=a,Oe=s,(Oe&6)===0&&Zr()}}function md(){dn=po.current,Ge(po)}function es(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,q0(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(Sh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&iu();break;case 3:co(),Ge(Qt),Ge(Lt),Mh();break;case 5:Lh(c);break;case 4:co();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Nh(c.type._context);break;case 22:case 23:md()}a=a.return}if(Tt=r,lt=r=ai(r.current,null),Ct=dn=s,yt=0,Da=null,ld=Pu=Ji=0,Jt=Oa=null,Qi!==null){for(s=0;s<Qi.length;s++)if(a=Qi[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var _=g.next;g.next=f,c.next=_}a.pending=c}Qi=null}return r}function yg(r,s){do{var a=lt;try{if(kh(),gu.current=wu,yu){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}yu=!1}if(Xi=0,Et=gt=Ze=null,Ra=!1,Pa=0,ad.current=null,a===null||a.return===null){yt=1,Da=s,lt=null;break}e:{var g=r,_=a.return,I=a,C=s;if(s=Ct,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var j=C,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var H=K.alternate;H?(K.updateQueue=H.updateQueue,K.memoizedState=H.memoizedState,K.lanes=H.lanes):(K.updateQueue=null,K.memoizedState=null)}var te=zm(_);if(te!==null){te.flags&=-257,$m(te,_,I,g,s),te.mode&1&&Bm(g,j,s),s=te,C=j;var se=s.updateQueue;if(se===null){var le=new Set;le.add(C),s.updateQueue=le}else se.add(C);break e}else{if((s&1)===0){Bm(g,j,s),gd();break e}C=Error(t(426))}}else if(Xe&&I.mode&1){var st=zm(_);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),$m(st,_,I,g,s),Ph(ho(C,I));break e}}g=C=ho(C,I),yt!==4&&(yt=2),Oa===null?Oa=[g]:Oa.push(g),g=_;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var b=Um(g,C,s);dm(g,b);break e;case 1:I=C;var N=g.type,F=g.stateNode;if((g.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ri===null||!ri.has(F)))){g.flags|=65536,s&=-s,g.lanes|=s;var X=jm(g,I,s);dm(g,X);break e}}g=g.return}while(g!==null)}wg(a)}catch(he){s=he,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function vg(){var r=Ru.current;return Ru.current=wu,r===null?wu:r}function gd(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||(Ji&268435455)===0&&(Pu&268435455)===0||oi(Tt,Ct)}function Ou(r,s){var a=Oe;Oe|=2;var c=vg();(Tt!==r||Ct!==s)&&(Rr=null,es(r,s));do try{mE();break}catch(f){yg(r,f)}while(!0);if(kh(),Oe=a,Ru.current=c,lt!==null)throw Error(t(261));return Tt=null,Ct=0,yt}function mE(){for(;lt!==null;)_g(lt)}function gE(){for(;lt!==null&&!Nl();)_g(lt)}function _g(r){var s=Ig(r.alternate,r,dn);r.memoizedProps=r.pendingProps,s===null?wg(r):lt=s,ad.current=null}function wg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=lE(a,s,dn),a!==null){lt=a;return}}else{if(a=uE(a,s),a!==null){a.flags&=32767,lt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,lt=null;return}}if(s=s.sibling,s!==null){lt=s;return}lt=s=r}while(s!==null);yt===0&&(yt=5)}function ts(r,s,a){var c=Ce,f=In.transition;try{In.transition=null,Ce=1,yE(r,s,a,c)}finally{In.transition=f,Ce=c}return null}function yE(r,s,a,c){do go();while(ii!==null);if((Oe&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if($e(r,g),r===Tt&&(lt=Tt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ku||(ku=!0,Sg(gn,function(){return go(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=In.transition,In.transition=null;var _=Ce;Ce=1;var I=Oe;Oe|=4,ad.current=null,hE(r,a),cg(a,r),M0(gh),Kr=!!mh,gh=mh=null,r.current=a,dE(a),Zc(),Oe=I,Ce=_,In.transition=g}else r.current=a;if(ku&&(ku=!1,ii=r,Nu=f),g=r.pendingLanes,g===0&&(ri=null),Ol(a.stateNode),Zt(r,We()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Cu)throw Cu=!1,r=cd,cd=null,r;return(Nu&1)!==0&&r.tag!==0&&go(),g=r.pendingLanes,(g&1)!==0?r===hd?Va++:(Va=0,hd=r):Va=0,Zr(),null}function go(){if(ii!==null){var r=Wr(Nu),s=In.transition,a=Ce;try{if(In.transition=null,Ce=16>r?16:r,ii===null)var c=!1;else{if(r=ii,ii=null,Nu=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,ie=r.current;ie!==null;){var g=ie,_=g.child;if((ie.flags&16)!==0){var I=g.deletions;if(I!==null){for(var C=0;C<I.length;C++){var j=I[C];for(ie=j;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:xa(8,K,g)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var H=K.sibling,te=K.return;if(sg(K),K===j){ie=null;break}if(H!==null){H.return=te,ie=H;break}ie=te}}}var se=g.alternate;if(se!==null){var le=se.child;if(le!==null){se.child=null;do{var st=le.sibling;le.sibling=null,le=st}while(le!==null)}}ie=g}}if((g.subtreeFlags&2064)!==0&&_!==null)_.return=g,ie=_;else e:for(;ie!==null;){if(g=ie,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:xa(9,g,g.return)}var b=g.sibling;if(b!==null){b.return=g.return,ie=b;break e}ie=g.return}}var N=r.current;for(ie=N;ie!==null;){_=ie;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,ie=F;else e:for(_=N;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Au(9,I)}}catch(he){nt(I,I.return,he)}if(I===_){ie=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,ie=X;break e}ie=I.return}}if(Oe=f,Zr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Fi,r)}catch{}c=!0}return c}finally{Ce=a,In.transition=s}}return!1}function Eg(r,s,a){s=ho(a,s),s=Um(r,s,1),r=ti(r,s,1),s=Ht(),r!==null&&($r(r,1,s),Zt(r,s))}function nt(r,s,a){if(r.tag===3)Eg(r,r,a);else for(;s!==null;){if(s.tag===3){Eg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){r=ho(a,r),r=jm(s,r,1),s=ti(s,r,1),r=Ht(),s!==null&&($r(s,1,r),Zt(s,r));break}}s=s.return}}function vE(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Ct&a)===a&&(yt===4||yt===3&&(Ct&130023424)===Ct&&500>We()-ud?es(r,0):ld|=a),Zt(r,s)}function Tg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Fs,Fs<<=1,(Fs&130023424)===0&&(Fs=4194304)));var a=Ht();r=Ir(r,s),r!==null&&($r(r,s,a),Zt(r,a))}function _E(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Tg(r,a)}function wE(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Tg(r,a)}var Ig;Ig=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Xt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Xt=!1,aE(r,s,a);Xt=(r.flags&131072)!==0}else Xt=!1,Xe&&(s.flags&1048576)!==0&&nm(s,lu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Iu(r,s),r=s.pendingProps;var f=ro(s,Lt.current);uo(s,a),f=jh(null,s,c,r,f,a);var g=Bh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(g=!0,su(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Oh(s),f.updater=Eu,s.stateNode=f,f._reactInternals=s,Kh(s,c,r,a),s=Xh(null,s,c,!0,g,a)):(s.tag=0,Xe&&g&&Ih(s),Wt(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Iu(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=TE(c),r=Mn(c,r),f){case 0:s=Yh(null,s,c,r,a);break e;case 1:s=Qm(null,s,c,r,a);break e;case 11:s=qm(null,s,c,r,a);break e;case 14:s=Wm(null,s,c,Mn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Yh(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Qm(r,s,c,f,a);case 3:e:{if(Ym(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,hm(r,s),pu(s,c,null,a);var _=s.memoizedState;if(c=_.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=ho(Error(t(423)),s),s=Xm(r,s,c,a,f);break e}else if(c!==f){f=ho(Error(t(424)),s),s=Xm(r,s,c,a,f);break e}else for(hn=Yr(s.stateNode.containerInfo.firstChild),cn=s,Xe=!0,bn=null,a=um(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===f){s=Ar(r,s,a);break e}Wt(r,s,c,a)}s=s.child}return s;case 5:return pm(s),r===null&&Rh(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,_=f.children,yh(c,f)?_=null:g!==null&&yh(c,g)&&(s.flags|=32),Gm(r,s),Wt(r,s,_,a),s.child;case 6:return r===null&&Rh(s),null;case 13:return Jm(r,s,a);case 4:return Vh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ao(s,null,c,a):Wt(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),qm(r,s,c,f,a);case 7:return Wt(r,s,s.pendingProps,a),s.child;case 8:return Wt(r,s,s.pendingProps.children,a),s.child;case 12:return Wt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,_=f.value,He(hu,c._currentValue),c._currentValue=_,g!==null)if(Ln(g.value,_)){if(g.children===f.children&&!Qt.current){s=Ar(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var I=g.dependencies;if(I!==null){_=g.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(g.tag===1){C=Sr(-1,a&-a),C.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?C.next=C:(C.next=K.next,K.next=C),j.pending=C}}g.lanes|=a,C=g.alternate,C!==null&&(C.lanes|=a),xh(g.return,a,s),I.lanes|=a;break}C=C.next}}else if(g.tag===10)_=g.type===s.type?null:g.child;else if(g.tag===18){if(_=g.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),xh(_,a,s),_=g.sibling}else _=g.child;if(_!==null)_.return=g;else for(_=g;_!==null;){if(_===s){_=null;break}if(g=_.sibling,g!==null){g.return=_.return,_=g;break}_=_.return}g=_}Wt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,uo(s,a),f=En(f),c=c(f),s.flags|=1,Wt(r,s,c,a),s.child;case 14:return c=s.type,f=Mn(c,s.pendingProps),f=Mn(c.type,f),Wm(r,s,c,f,a);case 15:return Hm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Iu(r,s),s.tag=1,Yt(c)?(r=!0,su(s)):r=!1,uo(s,a),Mm(s,c,f),Kh(s,c,f,a),Xh(null,s,c,!0,r,a);case 19:return eg(r,s,a);case 22:return Km(r,s,a)}throw Error(t(156,s.tag))};function Sg(r,s){return bs(r,s)}function EE(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(r,s,a,c){return new EE(r,s,a,c)}function yd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function TE(r){if(typeof r=="function")return yd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Ot)return 14}return 2}function ai(r,s){var a=r.alternate;return a===null?(a=Sn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Vu(r,s,a,c,f,g){var _=2;if(c=r,typeof r=="function")yd(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case x:return ns(a.children,f,g,s);case S:_=8,f|=8;break;case P:return r=Sn(12,a,s,f|2),r.elementType=P,r.lanes=g,r;case A:return r=Sn(13,a,s,f),r.elementType=A,r.lanes=g,r;case rt:return r=Sn(19,a,s,f),r.elementType=rt,r.lanes=g,r;case ze:return Lu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:_=10;break e;case D:_=9;break e;case V:_=11;break e;case Ot:_=14;break e;case Vt:_=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Sn(_,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function ns(r,s,a,c){return r=Sn(7,r,c,s),r.lanes=a,r}function Lu(r,s,a,c){return r=Sn(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function vd(r,s,a){return r=Sn(6,r,null,s),r.lanes=a,r}function _d(r,s,a){return s=Sn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function IE(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zr(0),this.expirationTimes=zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wd(r,s,a,c,f,g,_,I,C){return r=new IE(r,s,a,I,C),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Sn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oh(g),r}function SE(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Ag(r){if(!r)return Jr;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Yt(a))return Zp(r,a,s)}return s}function Rg(r,s,a,c,f,g,_,I,C){return r=wd(a,c,!0,r,f,g,_,I,C),r.context=Ag(null),a=r.current,c=Ht(),f=si(a),g=Sr(c,f),g.callback=s??null,ti(a,g,f),r.current.lanes=f,$r(r,f,c),Zt(r,c),r}function bu(r,s,a,c){var f=s.current,g=Ht(),_=si(f);return a=Ag(a),s.context===null?s.context=a:s.pendingContext=a,s=Sr(g,_),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ti(f,s,_),r!==null&&(jn(r,f,_,g),fu(r,f,_)),_}function Mu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Pg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Ed(r,s){Pg(r,s),(r=r.alternate)&&Pg(r,s)}function AE(){return null}var Cg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Td(r){this._internalRoot=r}Fu.prototype.render=Td.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));bu(r,s,null,null)},Fu.prototype.unmount=Td.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Zi(function(){bu(null,r,null,null)}),s[_r]=null}};function Fu(r){this._internalRoot=r}Fu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Fl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Gn.length&&s!==0&&s<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&Bl(r)}};function Id(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Uu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function kg(){}function RE(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var j=Mu(_);g.call(j)}}var _=Rg(s,c,r,0,null,!1,!1,"",kg);return r._reactRootContainer=_,r[_r]=_.current,va(r.nodeType===8?r.parentNode:r),Zi(),_}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var j=Mu(C);I.call(j)}}var C=wd(r,0,!1,null,null,!1,!1,"",kg);return r._reactRootContainer=C,r[_r]=C.current,va(r.nodeType===8?r.parentNode:r),Zi(function(){bu(s,C,a,c)}),C}function ju(r,s,a,c,f){var g=a._reactRootContainer;if(g){var _=g;if(typeof f=="function"){var I=f;f=function(){var C=Mu(_);I.call(C)}}bu(s,_,r,f)}else _=RE(a,s,r,f,c);return Mu(_)}bl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Br(s.pendingLanes);a!==0&&(qr(s,a|1),Zt(s,We()),(Oe&6)===0&&(mo=We()+500,Zr()))}break;case 13:Zi(function(){var c=Ir(r,1);if(c!==null){var f=Ht();jn(c,r,1,f)}}),Ed(r,1)}},Us=function(r){if(r.tag===13){var s=Ir(r,134217728);if(s!==null){var a=Ht();jn(s,r,134217728,a)}Ed(r,134217728)}},Ml=function(r){if(r.tag===13){var s=si(r),a=Ir(r,s);if(a!==null){var c=Ht();jn(a,r,s,c)}Ed(r,s)}},Fl=function(){return Ce},Ul=function(r,s){var a=Ce;try{return Ce=r,s()}finally{Ce=a}},Ns=function(r,s,a){switch(s){case"input":if($o(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=ru(c);if(!f)throw Error(t(90));Ss(c),$o(c,f)}}}break;case"textarea":Cs(r,a);break;case"select":s=a.value,s!=null&&hr(r,!!a.multiple,s,!1)}},Oi=pd,Zo=Zi;var PE={usingClientEntryPoint:!1,Events:[Ea,to,ru,Hn,Jo,pd]},La={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CE={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=na(r),r===null?null:r.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||AE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Fi=Bu.inject(CE),on=Bu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(s))throw Error(t(200));return SE(r,s,null,a)},en.createRoot=function(r,s){if(!Id(r))throw Error(t(299));var a=!1,c="",f=Cg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=wd(r,1,!1,null,null,a,!1,c,f),r[_r]=s.current,va(r.nodeType===8?r.parentNode:r),new Td(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=na(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return Zi(r)},en.hydrate=function(r,s,a){if(!Uu(s))throw Error(t(200));return ju(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!Id(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",_=Cg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),s=Rg(s,null,r,1,a??null,f,!1,g,_),r[_r]=s.current,va(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Fu(s)},en.render=function(r,s,a){if(!Uu(s))throw Error(t(200));return ju(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!Uu(r))throw Error(t(40));return r._reactRootContainer?(Zi(function(){ju(null,null,r,!1,function(){r._reactRootContainer=null,r[_r]=null})}),!0):!1},en.unstable_batchedUpdates=pd,en.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Uu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ju(r,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Lg;function wv(){if(Lg)return Ad.exports;Lg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ad.exports=bE(),Ad.exports}var bg;function ME(){if(bg)return zu;bg=1;var n=wv();return zu.createRoot=n.createRoot,zu.hydrateRoot=n.hydrateRoot,zu}var FE=ME();wv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},el.apply(this,arguments)}var mi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(mi||(mi={}));const Mg="popstate";function UE(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:d}=i.location;return qd("",{pathname:l,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:ac(o)}return BE(e,t,null,n)}function ht(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ev(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jE(){return Math.random().toString(36).substr(2,8)}function Fg(n,e){return{usr:n.state,key:n.key,idx:e}}function qd(n,e,t,i){return t===void 0&&(t=null),el({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Lo(e):e,{state:t,key:e&&e.key||i||jE()})}function ac(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Lo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function BE(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,d=mi.Pop,p=null,y=w();y==null&&(y=0,h.replaceState(el({},h.state,{idx:y}),""));function w(){return(h.state||{idx:null}).idx}function T(){d=mi.Pop;let U=w(),J=U==null?null:U-y;y=U,p&&p({action:d,location:z.location,delta:J})}function R(U,J){d=mi.Push;let re=qd(z.location,U,J);y=w()+1;let ae=Fg(re,y),ye=z.createHref(re);try{h.pushState(ae,"",ye)}catch(Me){if(Me instanceof DOMException&&Me.name==="DataCloneError")throw Me;o.location.assign(ye)}l&&p&&p({action:d,location:z.location,delta:1})}function M(U,J){d=mi.Replace;let re=qd(z.location,U,J);y=w();let ae=Fg(re,y),ye=z.createHref(re);h.replaceState(ae,"",ye),l&&p&&p({action:d,location:z.location,delta:0})}function $(U){let J=o.location.origin!=="null"?o.location.origin:o.location.href,re=typeof U=="string"?U:ac(U);return re=re.replace(/ $/,"%20"),ht(J,"No window.location.(origin|href) available to create URL for href: "+re),new URL(re,J)}let z={get action(){return d},get location(){return n(o,h)},listen(U){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Mg,T),p=U,()=>{o.removeEventListener(Mg,T),p=null}},createHref(U){return e(o,U)},createURL:$,encodeLocation(U){let J=$(U);return{pathname:J.pathname,search:J.search,hash:J.hash}},push:R,replace:M,go(U){return h.go(U)}};return z}var Ug;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ug||(Ug={}));function zE(n,e,t){return t===void 0&&(t="/"),$E(n,e,t)}function $E(n,e,t,i){let o=typeof e=="string"?Lo(e):e,l=Sf(o.pathname||"/",t);if(l==null)return null;let h=Tv(n);qE(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let y=nT(l);d=ZE(h[p],y)}return d}function Tv(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(ht(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=yi([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(ht(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Tv(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:XE(y,l.index),routesMeta:w})};return n.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,h);else for(let p of Iv(l.path))o(l,h,p)}),e}function Iv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=Iv(i.join("/")),d=[];return d.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function qE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:JE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const WE=/^:[\w-]+$/,HE=3,KE=2,GE=1,QE=10,YE=-2,jg=n=>n==="*";function XE(n,e){let t=n.split("/"),i=t.length;return t.some(jg)&&(i+=YE),e&&(i+=KE),t.filter(o=>!jg(o)).reduce((o,l)=>o+(WE.test(l)?HE:l===""?GE:QE),i)}function JE(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function ZE(n,e,t){let{routesMeta:i}=n,o={},l="/",h=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=eT({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),R=p.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:yi([l,T.pathname]),pathnameBase:oT(yi([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=yi([l,T.pathnameBase]))}return h}function eT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=tT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,w,T)=>{let{paramName:R,isOptional:M}=w;if(R==="*"){let z=d[T]||"";h=l.slice(0,l.length-z.length).replace(/(.)\/+$/,"$1")}const $=d[T];return M&&!$?y[R]=void 0:y[R]=($||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function tT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ev(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function nT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ev(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Sf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function rT(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Lo(n):n;return{pathname:t?t.startsWith("/")?t:iT(t,e):e,search:aT(i),hash:lT(o)}}function iT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Cd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Sv(n,e){let t=sT(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Av(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Lo(n):(o=el({},n),ht(!o.pathname||!o.pathname.includes("?"),Cd("?","pathname","search",o)),ht(!o.pathname||!o.pathname.includes("#"),Cd("#","pathname","hash",o)),ht(!o.search||!o.search.includes("#"),Cd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,d;if(h==null)d=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}d=T>=0?e[T]:"/"}let p=rT(o,d),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}const yi=n=>n.join("/").replace(/\/\/+/g,"/"),oT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),aT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,lT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function uT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Rv=["post","put","patch","delete"];new Set(Rv);const cT=["get",...Rv];new Set(cT);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},tl.apply(this,arguments)}const Af=Y.createContext(null),hT=Y.createContext(null),ms=Y.createContext(null),Rc=Y.createContext(null),gs=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),Pv=Y.createContext(null);function dT(n,e){let{relative:t}=e===void 0?{}:e;fl()||ht(!1);let{basename:i,navigator:o}=Y.useContext(ms),{hash:l,pathname:h,search:d}=Nv(n,{relative:t}),p=h;return i!=="/"&&(p=h==="/"?i:yi([i,h])),o.createHref({pathname:p,search:d,hash:l})}function fl(){return Y.useContext(Rc)!=null}function Pc(){return fl()||ht(!1),Y.useContext(Rc).location}function Cv(n){Y.useContext(ms).static||Y.useLayoutEffect(n)}function kv(){let{isDataRoute:n}=Y.useContext(gs);return n?AT():fT()}function fT(){fl()||ht(!1);let n=Y.useContext(Af),{basename:e,future:t,navigator:i}=Y.useContext(ms),{matches:o}=Y.useContext(gs),{pathname:l}=Pc(),h=JSON.stringify(Sv(o,t.v7_relativeSplatPath)),d=Y.useRef(!1);return Cv(()=>{d.current=!0}),Y.useCallback(function(y,w){if(w===void 0&&(w={}),!d.current)return;if(typeof y=="number"){i.go(y);return}let T=Av(y,JSON.parse(h),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:yi([e,T.pathname])),(w.replace?i.replace:i.push)(T,w.state,w)},[e,i,h,l,n])}function Nv(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Y.useContext(ms),{matches:o}=Y.useContext(gs),{pathname:l}=Pc(),h=JSON.stringify(Sv(o,i.v7_relativeSplatPath));return Y.useMemo(()=>Av(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function pT(n,e){return mT(n,e)}function mT(n,e,t,i){fl()||ht(!1);let{navigator:o,static:l}=Y.useContext(ms),{matches:h}=Y.useContext(gs),d=h[h.length-1],p=d?d.params:{};d&&d.pathname;let y=d?d.pathnameBase:"/";d&&d.route;let w=Pc(),T;if(e){var R;let J=typeof e=="string"?Lo(e):e;y==="/"||(R=J.pathname)!=null&&R.startsWith(y)||ht(!1),T=J}else T=w;let M=T.pathname||"/",$=M;if(y!=="/"){let J=y.replace(/^\//,"").split("/");$="/"+M.replace(/^\//,"").split("/").slice(J.length).join("/")}let z=zE(n,{pathname:$}),U=wT(z&&z.map(J=>Object.assign({},J,{params:Object.assign({},p,J.params),pathname:yi([y,o.encodeLocation?o.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?y:yi([y,o.encodeLocation?o.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),h,t,i);return e&&U?Y.createElement(Rc.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:mi.Pop}},U):U}function gT(){let n=ST(),e=uT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,null)}const yT=Y.createElement(gT,null);class vT extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Y.createElement(gs.Provider,{value:this.props.routeContext},Y.createElement(Pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _T(n){let{routeContext:e,match:t,children:i}=n,o=Y.useContext(Af);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(gs.Provider,{value:e},i)}function wT(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let w=h.findIndex(T=>T.route.id&&(d==null?void 0:d[T.route.id])!==void 0);w>=0||ht(!1),h=h.slice(0,Math.min(h.length,w+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let w=0;w<h.length;w++){let T=h[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=w),T.route.id){let{loaderData:R,errors:M}=t,$=T.route.loader&&R[T.route.id]===void 0&&(!M||M[T.route.id]===void 0);if(T.route.lazy||$){p=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((w,T,R)=>{let M,$=!1,z=null,U=null;t&&(M=d&&T.route.id?d[T.route.id]:void 0,z=T.route.errorElement||yT,p&&(y<0&&R===0?(RT("route-fallback"),$=!0,U=null):y===R&&($=!0,U=T.route.hydrateFallbackElement||null)));let J=e.concat(h.slice(0,R+1)),re=()=>{let ae;return M?ae=z:$?ae=U:T.route.Component?ae=Y.createElement(T.route.Component,null):T.route.element?ae=T.route.element:ae=w,Y.createElement(_T,{match:T,routeContext:{outlet:w,matches:J,isDataRoute:t!=null},children:ae})};return t&&(T.route.ErrorBoundary||T.route.errorElement||R===0)?Y.createElement(vT,{location:t.location,revalidation:t.revalidation,component:z,error:M,children:re(),routeContext:{outlet:null,matches:J,isDataRoute:!0}}):re()},null)}var xv=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(xv||{}),Dv=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Dv||{});function ET(n){let e=Y.useContext(Af);return e||ht(!1),e}function TT(n){let e=Y.useContext(hT);return e||ht(!1),e}function IT(n){let e=Y.useContext(gs);return e||ht(!1),e}function Ov(n){let e=IT(),t=e.matches[e.matches.length-1];return t.route.id||ht(!1),t.route.id}function ST(){var n;let e=Y.useContext(Pv),t=TT(),i=Ov();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function AT(){let{router:n}=ET(xv.UseNavigateStable),e=Ov(Dv.UseNavigateStable),t=Y.useRef(!1);return Cv(()=>{t.current=!0}),Y.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,tl({fromRouteId:e},l)))},[n,e])}const Bg={};function RT(n,e,t){Bg[n]||(Bg[n]=!0)}function PT(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function Yu(n){ht(!1)}function CT(n){let{basename:e="/",children:t=null,location:i,navigationType:o=mi.Pop,navigator:l,static:h=!1,future:d}=n;fl()&&ht(!1);let p=e.replace(/^\/*/,"/"),y=Y.useMemo(()=>({basename:p,navigator:l,static:h,future:tl({v7_relativeSplatPath:!1},d)}),[p,d,l,h]);typeof i=="string"&&(i=Lo(i));let{pathname:w="/",search:T="",hash:R="",state:M=null,key:$="default"}=i,z=Y.useMemo(()=>{let U=Sf(w,p);return U==null?null:{location:{pathname:U,search:T,hash:R,state:M,key:$},navigationType:o}},[p,w,T,R,M,$,o]);return z==null?null:Y.createElement(ms.Provider,{value:y},Y.createElement(Rc.Provider,{children:t,value:z}))}function kT(n){let{children:e,location:t}=n;return pT(Wd(e),t)}new Promise(()=>{});function Wd(n,e){e===void 0&&(e=[]);let t=[];return Y.Children.forEach(n,(i,o)=>{if(!Y.isValidElement(i))return;let l=[...e,o];if(i.type===Y.Fragment){t.push.apply(t,Wd(i.props.children,l));return}i.type!==Yu&&ht(!1),!i.props.index||!i.props.children||ht(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Wd(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hd(){return Hd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Hd.apply(this,arguments)}function NT(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function xT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function DT(n,e){return n.button===0&&(!e||e==="_self")&&!xT(n)}const OT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],VT="6";try{window.__reactRouterVersion=VT}catch{}const LT="startTransition",zg=OE[LT];function bT(n){let{basename:e,children:t,future:i,window:o}=n,l=Y.useRef();l.current==null&&(l.current=UE({window:o,v5Compat:!0}));let h=l.current,[d,p]=Y.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},w=Y.useCallback(T=>{y&&zg?zg(()=>p(T)):p(T)},[p,y]);return Y.useLayoutEffect(()=>h.listen(w),[h,w]),Y.useEffect(()=>PT(i),[i]),Y.createElement(CT,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:h,future:i})}const MT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$u=Y.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:d,target:p,to:y,preventScrollReset:w,viewTransition:T}=e,R=NT(e,OT),{basename:M}=Y.useContext(ms),$,z=!1;if(typeof y=="string"&&FT.test(y)&&($=y,MT))try{let ae=new URL(window.location.href),ye=y.startsWith("//")?new URL(ae.protocol+y):new URL(y),Me=Sf(ye.pathname,M);ye.origin===ae.origin&&Me!=null?y=Me+ye.search+ye.hash:z=!0}catch{}let U=dT(y,{relative:o}),J=UT(y,{replace:h,state:d,target:p,preventScrollReset:w,relative:o,viewTransition:T});function re(ae){i&&i(ae),ae.defaultPrevented||J(ae)}return Y.createElement("a",Hd({},R,{href:$||U,onClick:z||l?i:re,ref:t,target:p}))});var $g;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})($g||($g={}));var qg;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(qg||(qg={}));function UT(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,viewTransition:d}=e===void 0?{}:e,p=kv(),y=Pc(),w=Nv(n,{relative:h});return Y.useCallback(T=>{if(DT(T,t)){T.preventDefault();let R=i!==void 0?i:ac(y)===ac(w);p(n,{replace:R,state:o,preventScrollReset:l,relative:h,viewTransition:d})}},[y,p,w,i,o,t,n,l,h,d])}let jT={data:""},BT=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||jT,zT=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$T=/\/\*[^]*?\*\/|  +/g,Wg=/\n+/g,ci=(n,e)=>{let t="",i="",o="";for(let l in n){let h=n[l];l[0]=="@"?l[1]=="i"?t=l+" "+h+";":i+=l[1]=="f"?ci(h,l):l+"{"+ci(h,l[1]=="k"?"":e)+"}":typeof h=="object"?i+=ci(h,e?e.replace(/([^,])+/g,d=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,d):d?d+" "+p:p)):l):h!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=ci.p?ci.p(l,h):l+":"+h+";")}return t+(e&&o?e+"{"+o+"}":o)+i},Pr={},Vv=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+Vv(n[t]);return e}return n},qT=(n,e,t,i,o)=>{let l=Vv(n),h=Pr[l]||(Pr[l]=(p=>{let y=0,w=11;for(;y<p.length;)w=101*w+p.charCodeAt(y++)>>>0;return"go"+w})(l));if(!Pr[h]){let p=l!==n?n:(y=>{let w,T,R=[{}];for(;w=zT.exec(y.replace($T,""));)w[4]?R.shift():w[3]?(T=w[3].replace(Wg," ").trim(),R.unshift(R[0][T]=R[0][T]||{})):R[0][w[1]]=w[2].replace(Wg," ").trim();return R[0]})(n);Pr[h]=ci(o?{["@keyframes "+h]:p}:p,t?"":"."+h)}let d=t&&Pr.g?Pr.g:null;return t&&(Pr.g=Pr[h]),((p,y,w,T)=>{T?y.data=y.data.replace(T,p):y.data.indexOf(p)===-1&&(y.data=w?p+y.data:y.data+p)})(Pr[h],e,i,d),h},WT=(n,e,t)=>n.reduce((i,o,l)=>{let h=e[l];if(h&&h.call){let d=h(t),p=d&&d.props&&d.props.className||/^go/.test(d)&&d;h=p?"."+p:d&&typeof d=="object"?d.props?"":ci(d,""):d===!1?"":d}return i+o+(h??"")},"");function Cc(n){let e=this||{},t=n.call?n(e.p):n;return qT(t.unshift?t.raw?WT(t,[].slice.call(arguments,1),e.p):t.reduce((i,o)=>Object.assign(i,o&&o.call?o(e.p):o),{}):t,BT(e.target),e.g,e.o,e.k)}let Lv,Kd,Gd;Cc.bind({g:1});let Or=Cc.bind({k:1});function HT(n,e,t,i){ci.p=e,Lv=n,Kd=t,Gd=i}function Ri(n,e){let t=this||{};return function(){let i=arguments;function o(l,h){let d=Object.assign({},l),p=d.className||o.className;t.p=Object.assign({theme:Kd&&Kd()},d),t.o=/ *go\d+/.test(p),d.className=Cc.apply(t,i)+(p?" "+p:"");let y=n;return n[0]&&(y=d.as||n,delete d.as),Gd&&y[0]&&Gd(d),Lv(y,d)}return o}}var KT=n=>typeof n=="function",lc=(n,e)=>KT(n)?n(e):n,GT=(()=>{let n=0;return()=>(++n).toString()})(),bv=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),QT=20,Mv=(n,e)=>{switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,QT)};case 1:return{...n,toasts:n.toasts.map(l=>l.id===e.toast.id?{...l,...e.toast}:l)};case 2:let{toast:t}=e;return Mv(n,{type:n.toasts.find(l=>l.id===t.id)?1:0,toast:t});case 3:let{toastId:i}=e;return{...n,toasts:n.toasts.map(l=>l.id===i||i===void 0?{...l,dismissed:!0,visible:!1}:l)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(l=>l.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let o=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(l=>({...l,pauseDuration:l.pauseDuration+o}))}}},Xu=[],is={toasts:[],pausedAt:void 0},ys=n=>{is=Mv(is,n),Xu.forEach(e=>{e(is)})},YT={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},XT=(n={})=>{let[e,t]=Y.useState(is),i=Y.useRef(is);Y.useEffect(()=>(i.current!==is&&t(is),Xu.push(t),()=>{let l=Xu.indexOf(t);l>-1&&Xu.splice(l,1)}),[]);let o=e.toasts.map(l=>{var h,d,p;return{...n,...n[l.type],...l,removeDelay:l.removeDelay||((h=n[l.type])==null?void 0:h.removeDelay)||(n==null?void 0:n.removeDelay),duration:l.duration||((d=n[l.type])==null?void 0:d.duration)||(n==null?void 0:n.duration)||YT[l.type],style:{...n.style,...(p=n[l.type])==null?void 0:p.style,...l.style}}});return{...e,toasts:o}},JT=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||GT()}),pl=n=>(e,t)=>{let i=JT(e,n,t);return ys({type:2,toast:i}),i.id},et=(n,e)=>pl("blank")(n,e);et.error=pl("error");et.success=pl("success");et.loading=pl("loading");et.custom=pl("custom");et.dismiss=n=>{ys({type:3,toastId:n})};et.remove=n=>ys({type:4,toastId:n});et.promise=(n,e,t)=>{let i=et.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof n=="function"&&(n=n()),n.then(o=>{let l=e.success?lc(e.success,o):void 0;return l?et.success(l,{id:i,...t,...t==null?void 0:t.success}):et.dismiss(i),o}).catch(o=>{let l=e.error?lc(e.error,o):void 0;l?et.error(l,{id:i,...t,...t==null?void 0:t.error}):et.dismiss(i)}),n};var ZT=(n,e)=>{ys({type:1,toast:{id:n,height:e}})},eI=()=>{ys({type:5,time:Date.now()})},qa=new Map,tI=1e3,nI=(n,e=tI)=>{if(qa.has(n))return;let t=setTimeout(()=>{qa.delete(n),ys({type:4,toastId:n})},e);qa.set(n,t)},rI=n=>{let{toasts:e,pausedAt:t}=XT(n);Y.useEffect(()=>{if(t)return;let l=Date.now(),h=e.map(d=>{if(d.duration===1/0)return;let p=(d.duration||0)+d.pauseDuration-(l-d.createdAt);if(p<0){d.visible&&et.dismiss(d.id);return}return setTimeout(()=>et.dismiss(d.id),p)});return()=>{h.forEach(d=>d&&clearTimeout(d))}},[e,t]);let i=Y.useCallback(()=>{t&&ys({type:6,time:Date.now()})},[t]),o=Y.useCallback((l,h)=>{let{reverseOrder:d=!1,gutter:p=8,defaultPosition:y}=h||{},w=e.filter(M=>(M.position||y)===(l.position||y)&&M.height),T=w.findIndex(M=>M.id===l.id),R=w.filter((M,$)=>$<T&&M.visible).length;return w.filter(M=>M.visible).slice(...d?[R+1]:[0,R]).reduce((M,$)=>M+($.height||0)+p,0)},[e]);return Y.useEffect(()=>{e.forEach(l=>{if(l.dismissed)nI(l.id,l.removeDelay);else{let h=qa.get(l.id);h&&(clearTimeout(h),qa.delete(l.id))}})},[e]),{toasts:e,handlers:{updateHeight:ZT,startPause:eI,endPause:i,calculateOffset:o}}},iI=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,sI=Or`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oI=Or`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,aI=Ri("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${iI} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${sI} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${oI} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,lI=Or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,uI=Ri("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${lI} 1s linear infinite;
`,cI=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,hI=Or`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,dI=Ri("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${cI} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${hI} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,fI=Ri("div")`
  position: absolute;
`,pI=Ri("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,mI=Or`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,gI=Ri("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${mI} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,yI=({toast:n})=>{let{icon:e,type:t,iconTheme:i}=n;return e!==void 0?typeof e=="string"?Y.createElement(gI,null,e):e:t==="blank"?null:Y.createElement(pI,null,Y.createElement(uI,{...i}),t!=="loading"&&Y.createElement(fI,null,t==="error"?Y.createElement(aI,{...i}):Y.createElement(dI,{...i})))},vI=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,_I=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,wI="0%{opacity:0;} 100%{opacity:1;}",EI="0%{opacity:1;} 100%{opacity:0;}",TI=Ri("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,II=Ri("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,SI=(n,e)=>{let t=n.includes("top")?1:-1,[i,o]=bv()?[wI,EI]:[vI(t),_I(t)];return{animation:e?`${Or(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Or(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},AI=Y.memo(({toast:n,position:e,style:t,children:i})=>{let o=n.height?SI(n.position||e||"top-center",n.visible):{opacity:0},l=Y.createElement(yI,{toast:n}),h=Y.createElement(II,{...n.ariaProps},lc(n.message,n));return Y.createElement(TI,{className:n.className,style:{...o,...t,...n.style}},typeof i=="function"?i({icon:l,message:h}):Y.createElement(Y.Fragment,null,l,h))});HT(Y.createElement);var RI=({id:n,className:e,style:t,onHeightUpdate:i,children:o})=>{let l=Y.useCallback(h=>{if(h){let d=()=>{let p=h.getBoundingClientRect().height;i(n,p)};d(),new MutationObserver(d).observe(h,{subtree:!0,childList:!0,characterData:!0})}},[n,i]);return Y.createElement("div",{ref:l,className:e,style:t},o)},PI=(n,e)=>{let t=n.includes("top"),i=t?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:bv()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...i,...o}},CI=Cc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,qu=16,kI=({reverseOrder:n,position:e="top-center",toastOptions:t,gutter:i,children:o,containerStyle:l,containerClassName:h})=>{let{toasts:d,handlers:p}=rI(t);return Y.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:qu,left:qu,right:qu,bottom:qu,pointerEvents:"none",...l},className:h,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map(y=>{let w=y.position||e,T=p.calculateOffset(y,{reverseOrder:n,gutter:i,defaultPosition:e}),R=PI(w,T);return Y.createElement(RI,{id:y.id,key:y.id,onHeightUpdate:p.updateHeight,className:y.visible?CI:"",style:R},y.type==="custom"?lc(y.message,y):o?o(y):Y.createElement(AI,{toast:y,position:w}))}))};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Fv=(n,e)=>{const t=Y.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:h,className:d="",children:p,...y},w)=>Y.createElement("svg",{ref:w,...NI,width:o,height:o,stroke:i,strokeWidth:h?Number(l)*24/Number(o):l,className:["lucide",`lucide-${xI(n)}`,d].join(" "),...y},[...e.map(([T,R])=>Y.createElement(T,R)),...Array.isArray(p)?p:[p]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=Fv("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=Fv("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);var Hg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},VI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|d>>4;let R=(d&15)<<2|y>>6,M=y&63;p||(M=64,h||(R=64)),i.push(t[w],t[T],t[R],t[M])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):VI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new LI;const R=l<<2|d>>4;if(i.push(R),y!==64){const M=d<<4&240|y>>2;if(i.push(M),T!==64){const $=y<<6&192|T;i.push($)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bI=function(n){const e=Uv(n);return jv.encodeByteArray(e,!0)},uc=function(n){return bI(n).replace(/\./g,"")},Bv=function(n){try{return jv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=()=>MI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof Hg>"u")return;const n=Hg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bv(n[1]);return e&&JSON.parse(e)},kc=()=>{try{return FI()||UI()||jI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zv=n=>{var e,t;return(t=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},BI=n=>{const e=zv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},$v=()=>{var n;return(n=kc())===null||n===void 0?void 0:n.config},qv=n=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[uc(JSON.stringify(t)),uc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function WI(){var n;const e=(n=kc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function KI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function QI(){return!WI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hv(){try{return typeof indexedDB=="object"}catch{return!1}}function Kv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function YI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="FirebaseError";class qn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=XI,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?JI(l,i):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new qn(o,d,i)}}function JI(n,e){return n.replace(ZI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const ZI=/\{\$([^}]+)}/g;function eS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Kg(l)&&Kg(h)){if(!nl(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Kg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Fa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ua(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function tS(n,e){const t=new nS(n,e);return t.subscribe.bind(t)}class nS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");rS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=kd),o.error===void 0&&(o.error=kd),o.complete===void 0&&(o.complete=kd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function kd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=1e3,sS=2,oS=4*60*60*1e3,aS=.5;function Gg(n,e=iS,t=sS){const i=e*Math.pow(t,n),o=Math.round(aS*i*(Math.random()-.5)*2);return Math.min(oS,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new zI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cS(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uS(n){return n===rs?void 0:n}function cS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const dS={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},fS=ke.INFO,pS={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},mS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=pS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const gS=(n,e)=>e.some(t=>n instanceof t);let Qg,Yg;function yS(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vS(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gv=new WeakMap,Qd=new WeakMap,Qv=new WeakMap,Nd=new WeakMap,Rf=new WeakMap;function _S(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(vi(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Gv.set(t,n)}).catch(()=>{}),Rf.set(e,n),e}function wS(n){if(Qd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Qd.set(n,e)}let Yd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Qd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ES(n){Yd=n(Yd)}function TS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(xd(this),e,...t);return Qv.set(i,e.sort?e.sort():[e]),vi(i)}:vS().includes(n)?function(...e){return n.apply(xd(this),e),vi(Gv.get(this))}:function(...e){return vi(n.apply(xd(this),e))}}function IS(n){return typeof n=="function"?TS(n):(n instanceof IDBTransaction&&wS(n),gS(n,yS())?new Proxy(n,Yd):n)}function vi(n){if(n instanceof IDBRequest)return _S(n);if(Nd.has(n))return Nd.get(n);const e=IS(n);return e!==n&&(Nd.set(n,e),Rf.set(e,n)),e}const xd=n=>Rf.get(n);function Yv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),d=vi(h);return i&&h.addEventListener("upgradeneeded",p=>{i(vi(h.result),p.oldVersion,p.newVersion,vi(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const SS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],Dd=new Map;function Xg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=AS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||SS.includes(t)))return;const l=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Dd.set(e,l),l}ES(n=>({...n,get:(e,t,i)=>Xg(e,t)||n.get(e,t,i),has:(e,t)=>!!Xg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function PS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xd="@firebase/app",Jg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Nc("@firebase/app"),CS="@firebase/app-compat",kS="@firebase/analytics-compat",NS="@firebase/analytics",xS="@firebase/app-check-compat",DS="@firebase/app-check",OS="@firebase/auth",VS="@firebase/auth-compat",LS="@firebase/database",bS="@firebase/data-connect",MS="@firebase/database-compat",FS="@firebase/functions",US="@firebase/functions-compat",jS="@firebase/installations",BS="@firebase/installations-compat",zS="@firebase/messaging",$S="@firebase/messaging-compat",qS="@firebase/performance",WS="@firebase/performance-compat",HS="@firebase/remote-config",KS="@firebase/remote-config-compat",GS="@firebase/storage",QS="@firebase/storage-compat",YS="@firebase/firestore",XS="@firebase/vertexai-preview",JS="@firebase/firestore-compat",ZS="firebase",eA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="[DEFAULT]",tA={[Xd]:"fire-core",[CS]:"fire-core-compat",[NS]:"fire-analytics",[kS]:"fire-analytics-compat",[DS]:"fire-app-check",[xS]:"fire-app-check-compat",[OS]:"fire-auth",[VS]:"fire-auth-compat",[LS]:"fire-rtdb",[bS]:"fire-data-connect",[MS]:"fire-rtdb-compat",[FS]:"fire-fn",[US]:"fire-fn-compat",[jS]:"fire-iid",[BS]:"fire-iid-compat",[zS]:"fire-fcm",[$S]:"fire-fcm-compat",[qS]:"fire-perf",[WS]:"fire-perf-compat",[HS]:"fire-rc",[KS]:"fire-rc-compat",[GS]:"fire-gcs",[QS]:"fire-gcs-compat",[YS]:"fire-fst",[JS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map,nA=new Map,Zd=new Map;function Zg(n,e){try{n.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ar(n){const e=n.name;if(Zd.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Zd.set(e,n);for(const t of cc.values())Zg(t,n);for(const t of nA.values())Zg(t,n);return!0}function _s(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Cr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_i=new vs("app","Firebase",rA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=eA;function Xv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Jd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw _i.create("bad-app-name",{appName:String(o)});if(t||(t=$v()),!t)throw _i.create("no-options");const l=cc.get(o);if(l){if(nl(t,l.options)&&nl(i,l.config))return l;throw _i.create("duplicate-app",{appName:o})}const h=new hS(o);for(const p of Zd.values())h.addComponent(p);const d=new iA(t,i,h);return cc.set(o,d),d}function Pf(n=Jd){const e=cc.get(n);if(!e&&n===Jd&&$v())return Xv();if(!e)throw _i.create("no-app",{appName:n});return e}function An(n,e,t){var i;let o=(i=tA[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(d.join(" "));return}ar(new Bn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="firebase-heartbeat-database",oA=1,rl="firebase-heartbeat-store";let Od=null;function Jv(){return Od||(Od=Yv(sA,oA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rl)}catch(t){console.warn(t)}}}}).catch(n=>{throw _i.create("idb-open",{originalErrorMessage:n.message})})),Od}async function aA(n){try{const t=(await Jv()).transaction(rl),i=await t.objectStore(rl).get(Zv(n));return await t.done,i}catch(e){if(e instanceof qn)Vr.warn(e.message);else{const t=_i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function ey(n,e){try{const i=(await Jv()).transaction(rl,"readwrite");await i.objectStore(rl).put(e,Zv(n)),await i.done}catch(t){if(t instanceof qn)Vr.warn(t.message);else{const i=_i.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(i.message)}}}function Zv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=1024,uA=30*24*60*60*1e3;class cA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ty();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=uA}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Vr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ty(),{heartbeatsToSend:i,unsentEntries:o}=hA(this._heartbeatsCache.heartbeats),l=uc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function ty(){return new Date().toISOString().substring(0,10)}function hA(n,e=lA){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),ny(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ny(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hv()?Kv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ey(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ey(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ny(n){return uc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(n){ar(new Bn("platform-logger",e=>new RS(e),"PRIVATE")),ar(new Bn("heartbeat",e=>new cA(e),"PRIVATE")),An(Xd,Jg,n),An(Xd,Jg,"esm2017"),An("fire-js","")}fA("");var pA="firebase",mA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(pA,mA,"app");function Cf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gA=e_,t_=new vs("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Nc("@firebase/auth");function yA(n,...e){hc.logLevel<=ke.WARN&&hc.warn(`Auth (${bo}): ${n}`,...e)}function Ju(n,...e){hc.logLevel<=ke.ERROR&&hc.error(`Auth (${bo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n,...e){throw kf(n,...e)}function nr(n,...e){return kf(n,...e)}function n_(n,e,t){const i=Object.assign(Object.assign({},gA()),{[e]:t});return new vs("auth","Firebase",i).create(e,{appName:n.name})}function wi(n){return n_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return t_.create(n,...e)}function ve(n,e,...t){if(!n)throw kf(e,...t)}function kr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ju(e),new Error(e)}function Lr(n,e){n||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vA(){return ry()==="http:"||ry()==="https:"}function ry(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vA()||Wv()||"connection"in navigator)?navigator.onLine:!0}function wA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lr(t>e,"Short delay should be less than long delay!"),this.isMobile=qI()||KI()}get(){return _A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e){Lr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new gl(3e4,6e4);function ws(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pi(n,e,t,i,o={}){return i_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const d=ml(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return HI()||(y.referrerPolicy="no-referrer"),r_.fetch()(s_(n,n.config.apiHost,t,d),y)})}async function i_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},EA),e);try{const o=new SA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Wu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Wu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Wu(n,"user-disabled",h);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw n_(n,w,y);zn(n,w)}}catch(o){if(o instanceof qn)throw o;zn(n,"network-request-failed",{message:String(o)})}}async function xc(n,e,t,i,o={}){const l=await Pi(n,e,t,i,o);return"mfaPendingCredential"in l&&zn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function s_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Nf(n.config,o):`${n.config.apiScheme}://${o}`}function IA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(nr(this.auth,"network-request-failed")),TA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=nr(n,e,i);return o.customData._tokenResponse=t,o}function iy(n){return n!==void 0&&n.enterprise!==void 0}class AA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return IA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function RA(n,e){return Pi(n,"GET","/v2/recaptchaConfig",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(n,e){return Pi(n,"POST","/v1/accounts:delete",e)}async function o_(n,e){return Pi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CA(n,e=!1){const t=dt(n),i=await t.getIdToken(e),o=xf(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Wa(Vd(o.auth_time)),issuedAtTime:Wa(Vd(o.iat)),expirationTime:Wa(Vd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Vd(n){return Number(n)*1e3}function xf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ju("JWT malformed, contained fewer than 3 sections"),null;try{const o=Bv(t);return o?JSON.parse(o):(Ju("Failed to decode base64 JWT payload"),null)}catch(o){return Ju("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sy(n){const e=xf(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qn&&kA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function kA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await il(n,o_(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?a_(l.providerUserInfo):[],d=DA(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new tf(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function xA(n){const e=dt(n);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function a_(n){return n.map(e=>{var{providerId:t}=e,i=Cf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(n,e){const t=await i_(n,{},async()=>{const i=ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=s_(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(h,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VA(n,e){return Pi(n,"POST","/v2/accounts:revokeToken",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=sy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await OA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Eo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new tf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await il(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CA(this,e)}reload(){return xA(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await dc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Cr(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await il(this,PA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,d,p,y,w;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,M=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,J=(y=t.createdAt)!==null&&y!==void 0?y:void 0,re=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ae,emailVerified:ye,isAnonymous:Me,providerData:Re,stsTokenManager:x}=t;ve(ae&&x,e,"internal-error");const S=Eo.fromJSON(this.name,x);ve(typeof ae=="string",e,"internal-error"),ui(T,e.name),ui(R,e.name),ve(typeof ye=="boolean",e,"internal-error"),ve(typeof Me=="boolean",e,"internal-error"),ui(M,e.name),ui($,e.name),ui(z,e.name),ui(U,e.name),ui(J,e.name),ui(re,e.name);const P=new Nr({uid:ae,auth:e,email:R,emailVerified:ye,displayName:T,isAnonymous:Me,photoURL:$,phoneNumber:M,tenantId:z,stsTokenManager:S,createdAt:J,lastLoginAt:re});return Re&&Array.isArray(Re)&&(P.providerData=Re.map(k=>Object.assign({},k))),U&&(P._redirectEventId=U),P}static async _fromIdTokenResponse(e,t,i=!1){const o=new Eo;o.updateFromServerResponse(t);const l=new Nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await dc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?a_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Eo;d.updateFromIdToken(i);const p=new Nr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new tf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;function xr(n){Lr(n instanceof Function,"Expected a class definition");let e=oy.get(n);return e?(Lr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}l_.type="NONE";const ay=l_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n,e,t){return`firebase:${n}:${e}:${t}`}class To{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Zu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Zu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new To(xr(ay),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||xr(ay);const h=Zu(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const w=await y._get(h);if(w){const T=Nr._fromJSON(e,w);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new To(l,e,i):(l=p[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new To(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p_(e))return"Blackberry";if(m_(e))return"Webos";if(c_(e))return"Safari";if((e.includes("chrome/")||h_(e))&&!e.includes("edge/"))return"Chrome";if(f_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function u_(n=zt()){return/firefox\//i.test(n)}function c_(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h_(n=zt()){return/crios\//i.test(n)}function d_(n=zt()){return/iemobile/i.test(n)}function f_(n=zt()){return/android/i.test(n)}function p_(n=zt()){return/blackberry/i.test(n)}function m_(n=zt()){return/webos/i.test(n)}function Df(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function LA(n=zt()){var e;return Df(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bA(){return GI()&&document.documentMode===10}function g_(n=zt()){return Df(n)||f_(n)||m_(n)||p_(n)||/windows phone/i.test(n)||d_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n,e=[]){let t;switch(n){case"Browser":t=ly(zt());break;case"Worker":t=`${ly(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,d)=>{try{const p=e(l);h(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(n,e={}){return Pi(n,"GET","/v2/passwordPolicy",ws(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=6;class jA{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:UA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new MA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await o_(this,{idToken:e}),i=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Cr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Cr(this.app))return Promise.reject(wi(this));const t=e?dt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Cr(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Cr(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FA(this),t=new jA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await VA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Mo(n){return dt(n)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=tS(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zA(n){Dc=n}function v_(n){return Dc.loadJS(n)}function $A(){return Dc.recaptchaEnterpriseScript}function qA(){return Dc.gapiScript}function WA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const HA="recaptcha-enterprise",KA="NO_RECAPTCHA";class GA{constructor(e){this.type=HA,this.auth=Mo(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{RA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new AA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,h,d){const p=window.grecaptcha;iy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(KA)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,h)=>{i(this.auth).then(d=>{if(!t&&iy(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=$A();p.length!==0&&(p+=d),v_(p).then(()=>{o(d,l,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function cy(n,e,t,i=!1){const o=new GA(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const h=Object.assign({},e);return i?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function hy(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await cy(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await cy(n,e,t,t==="getOobCode");return i(n,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(n,e){const t=_s(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(nl(l,e??{}))return o;zn(o,"already-initialized")}return t.initialize({options:e})}function YA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function XA(n,e,t){const i=Mo(n);ve(i._canInitEmulator,i,"emulator-config-failed"),ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=__(e),{host:h,port:d}=JA(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),ZA()}function __(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function JA(n){const e=__(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:dy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:dy(h)}}}function dy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ZA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,t){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function eR(n,e){return Pi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(n,e){return xc(n,"POST","/v1/accounts:signInWithPassword",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(n,e){return xc(n,"POST","/v1/accounts:signInWithEmailLink",ws(n,e))}async function rR(n,e){return xc(n,"POST","/v1/accounts:signInWithEmailLink",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Of{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new sl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new sl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hy(e,t,"signInWithPassword",tR);case"emailLink":return nR(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hy(e,i,"signUpPassword",eR);case"emailLink":return rR(e,{idToken:t,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(n,e){return xc(n,"POST","/v1/accounts:signInWithIdp",ws(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="http://localhost";class us extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Cf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new us(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Io(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:iR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ml(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oR(n){const e=Fa(Ua(n)).link,t=e?Fa(Ua(e)).deep_link_id:null,i=Fa(Ua(n)).deep_link_id;return(i?Fa(Ua(i)).link:null)||i||t||e||n}class Vf{constructor(e){var t,i,o,l,h,d;const p=Fa(Ua(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,T=sR((o=p.mode)!==null&&o!==void 0?o:null);ve(y&&w&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=oR(e);try{return new Vf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return sl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Vf.parseLink(t);return ve(i,"argument-error"),sl._fromEmailAndCode(e,i.code,i.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends w_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends yl{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return di.credential(t,i)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends yl{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends yl{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return pi.credential(t,i)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Nr._fromIdTokenResponse(e,i,o),h=fy(i);return new Ro({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=fy(i);return new Ro({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function fy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends qn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new fc(e,t,i,o)}}function E_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(n,l,e,i):l})}async function aR(n,e,t=!1){const i=await il(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ro._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(n,e,t=!1){const{auth:i}=n;if(Cr(i.app))return Promise.reject(wi(i));const o="reauthenticate";try{const l=await il(n,E_(i,o,e,n),t);ve(l.idToken,i,"internal-error");const h=xf(l.idToken);ve(h,i,"internal-error");const{sub:d}=h;return ve(n.uid===d,i,"user-mismatch"),Ro._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&zn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e,t=!1){if(Cr(n.app))return Promise.reject(wi(n));const i="signIn",o=await E_(n,i,e),l=await Ro._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function uR(n,e){return T_(Mo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(n){const e=Mo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hR(n,e,t){return Cr(n.app)?Promise.reject(wi(n)):uR(dt(n),Fo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&cR(n),i})}function dR(n,e,t,i){return dt(n).onIdTokenChanged(e,t,i)}function fR(n,e,t){return dt(n).beforeAuthStateChanged(e,t)}function pR(n,e,t,i){return dt(n).onAuthStateChanged(e,t,i)}const pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=1e3,gR=10;class S_ extends I_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);bA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,gR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}S_.type="LOCAL";const yR=S_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends I_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}A_.type="SESSION";const R_=A_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Oc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,l)),p=await vR(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,p)=>{const y=Lf("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(R.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function wR(n){rr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function IR(){return P_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="firebaseLocalStorageDb",SR=1,mc="firebaseLocalStorage",k_="fbase_key";class vl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vc(n,e){return n.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function AR(){const n=indexedDB.deleteDatabase(C_);return new vl(n).toPromise()}function nf(){const n=indexedDB.open(C_,SR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(mc,{keyPath:k_})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(mc)?e(i):(i.close(),await AR(),e(await nf()))})})}async function py(n,e,t){const i=Vc(n,!0).put({[k_]:e,value:t});return new vl(i).toPromise()}async function RR(n,e){const t=Vc(n,!1).get(e),i=await new vl(t).toPromise();return i===void 0?null:i.value}function my(n,e){const t=Vc(n,!0).delete(e);return new vl(t).toPromise()}const PR=800,CR=3;class N_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>CR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(IR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new _R(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nf();return await py(e,pc,"1"),await my(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>py(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>RR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>my(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Vc(o,!1).getAll();return new vl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N_.type="LOCAL";const kR=N_;new gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(n,e){return e?xr(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xR(n){return T_(n.auth,new bf(n),n.bypassAuthState)}function DR(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),lR(t,new bf(n),n.bypassAuthState)}async function OR(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),aR(t,new bf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return OR;case"reauthViaPopup":case"reauthViaRedirect":return DR;default:zn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=new gl(2e3,1e4);class wo extends x_{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VR.get())};e()}}wo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="pendingRedirect",ec=new Map;class bR extends x_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ec.get(this.auth._key());if(!e){try{const i=await MR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ec.set(this.auth._key(),e)}return this.bypassAuthState||ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MR(n,e){const t=jR(e),i=UR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function FR(n,e){ec.set(n._key(),e)}function UR(n){return xr(n._redirectPersistence)}function jR(n){return Zu(LR,n.config.apiKey,n.name)}async function BR(n,e,t=!1){if(Cr(n.app))return Promise.reject(wi(n));const i=Mo(n),o=NR(i,e),h=await new bR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=10*60*1e3;class $R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!D_(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function D_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e={}){return Pi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KR=/^https?/;async function GR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WR(n);for(const t of e)try{if(QR(t))return}catch{}zn(n,"unauthorized-domain")}function QR(n){const e=ef(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!KR.test(t))return!1;if(HR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new gl(3e4,6e4);function yy(){const n=rr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XR(n){return new Promise((e,t)=>{var i,o,l;function h(){yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yy(),t(nr(n,"network-request-failed"))},timeout:YR.get()})}if(!((o=(i=rr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=rr().gapi)===null||l===void 0)&&l.load)h();else{const d=WA("iframefcb");return rr()[d]=()=>{gapi.load?h():t(nr(n,"network-request-failed"))},v_(`${qA()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw tc=null,e})}let tc=null;function JR(n){return tc=tc||XR(n),tc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=new gl(5e3,15e3),eP="__/auth/iframe",tP="emulator/auth/iframe",nP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iP(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nf(e,tP):`https://${n.config.authDomain}/${eP}`,i={apiKey:e.apiKey,appName:n.name,v:bo},o=rP.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${ml(i).slice(1)}`}async function sP(n){const e=await JR(n),t=rr().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:iP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nP,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=nr(n,"network-request-failed"),d=rr().setTimeout(()=>{l(h)},ZR.get());function p(){rr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aP=500,lP=600,uP="_blank",cP="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hP(n,e,t,i=aP,o=lP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},oP),{width:i.toString(),height:o.toString(),top:l,left:h}),y=zt().toLowerCase();t&&(d=h_(y)?uP:t),u_(y)&&(e=e||cP,p.scrollbars="yes");const w=Object.entries(p).reduce((R,[M,$])=>`${R}${M}=${$},`,"");if(LA(y)&&d!=="_self")return dP(e||"",d),new vy(null);const T=window.open(e||"",d,w);ve(T,n,"popup-blocked");try{T.focus()}catch{}return new vy(T)}function dP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="__/auth/handler",pP="emulator/auth/handler",mP=encodeURIComponent("fac");async function _y(n,e,t,i,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:bo,eventId:o};if(e instanceof w_){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",eS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof yl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const w of Object.keys(d))d[w]===void 0&&delete d[w];const p=await n._getAppCheckToken(),y=p?`#${mP}=${encodeURIComponent(p)}`:"";return`${gP(n)}?${ml(d).slice(1)}${y}`}function gP({config:n}){return n.emulator?Nf(n,pP):`https://${n.authDomain}/${fP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="webStorageSupport";class yP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R_,this._completeRedirectFn=BR,this._overrideRedirectResult=FR}async _openPopup(e,t,i,o){var l;Lr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await _y(e,t,i,ef(),o);return hP(e,h,Lf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await _y(e,t,i,ef(),o);return wR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Lr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await sP(e),i=new $R(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ld,{type:Ld},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ld];h!==void 0&&t(!!h),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return g_()||c_()||Df()}}const vP=yP;var wy="@firebase/auth",Ey="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EP(n){ar(new Bn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=i.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y_(n)},y=new BA(i,o,l,p);return YA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ar(new Bn("auth-internal",e=>{const t=Mo(e.getProvider("auth").getImmediate());return(i=>new _P(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(wy,Ey,wP(n)),An(wy,Ey,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=5*60,IP=qv("authIdTokenMaxAge")||TP;let Ty=null;const SP=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>IP)return;const o=t==null?void 0:t.token;Ty!==o&&(Ty=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function AP(n=Pf()){const e=_s(n,"auth");if(e.isInitialized())return e.getImmediate();const t=QA(n,{popupRedirectResolver:vP,persistence:[kR,yR,R_]}),i=qv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=SP(l.toString());fR(t,h,()=>h(t.currentUser)),dR(t,d=>h(d))}}const o=zv("auth");return o&&XA(t,`http://${o}`),t}function RP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=nr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",RP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EP("Browser");var Iy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,O_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function P(){}P.prototype=S.prototype,x.D=S.prototype,x.prototype=new P,x.prototype.constructor=x,x.C=function(k,D,V){for(var A=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)A[rt-2]=arguments[rt];return S.prototype[D].apply(k,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,P){P||(P=0);var k=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)k[D]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(D=0;16>D;++D)k[D]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=x.g[0],P=x.g[1],D=x.g[2];var V=x.g[3],A=S+(V^P&(D^V))+k[0]+3614090360&4294967295;S=P+(A<<7&4294967295|A>>>25),A=V+(D^S&(P^D))+k[1]+3905402710&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(P^V&(S^P))+k[2]+606105819&4294967295,D=V+(A<<17&4294967295|A>>>15),A=P+(S^D&(V^S))+k[3]+3250441966&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(V^P&(D^V))+k[4]+4118548399&4294967295,S=P+(A<<7&4294967295|A>>>25),A=V+(D^S&(P^D))+k[5]+1200080426&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(P^V&(S^P))+k[6]+2821735955&4294967295,D=V+(A<<17&4294967295|A>>>15),A=P+(S^D&(V^S))+k[7]+4249261313&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(V^P&(D^V))+k[8]+1770035416&4294967295,S=P+(A<<7&4294967295|A>>>25),A=V+(D^S&(P^D))+k[9]+2336552879&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(P^V&(S^P))+k[10]+4294925233&4294967295,D=V+(A<<17&4294967295|A>>>15),A=P+(S^D&(V^S))+k[11]+2304563134&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(V^P&(D^V))+k[12]+1804603682&4294967295,S=P+(A<<7&4294967295|A>>>25),A=V+(D^S&(P^D))+k[13]+4254626195&4294967295,V=S+(A<<12&4294967295|A>>>20),A=D+(P^V&(S^P))+k[14]+2792965006&4294967295,D=V+(A<<17&4294967295|A>>>15),A=P+(S^D&(V^S))+k[15]+1236535329&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(D^V&(P^D))+k[1]+4129170786&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^D&(S^P))+k[6]+3225465664&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(V^S))+k[11]+643717713&4294967295,D=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(D^V))+k[0]+3921069994&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(D^V&(P^D))+k[5]+3593408605&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^D&(S^P))+k[10]+38016083&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(V^S))+k[15]+3634488961&4294967295,D=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(D^V))+k[4]+3889429448&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(D^V&(P^D))+k[9]+568446438&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^D&(S^P))+k[14]+3275163606&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(V^S))+k[3]+4107603335&4294967295,D=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(D^V))+k[8]+1163531501&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(D^V&(P^D))+k[13]+2850285829&4294967295,S=P+(A<<5&4294967295|A>>>27),A=V+(P^D&(S^P))+k[2]+4243563512&4294967295,V=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(V^S))+k[7]+1735328473&4294967295,D=V+(A<<14&4294967295|A>>>18),A=P+(V^S&(D^V))+k[12]+2368359562&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(P^D^V)+k[5]+4294588738&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^D)+k[8]+2272392833&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^P)+k[11]+1839030562&4294967295,D=V+(A<<16&4294967295|A>>>16),A=P+(D^V^S)+k[14]+4259657740&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(P^D^V)+k[1]+2763975236&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^D)+k[4]+1272893353&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^P)+k[7]+4139469664&4294967295,D=V+(A<<16&4294967295|A>>>16),A=P+(D^V^S)+k[10]+3200236656&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(P^D^V)+k[13]+681279174&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^D)+k[0]+3936430074&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^P)+k[3]+3572445317&4294967295,D=V+(A<<16&4294967295|A>>>16),A=P+(D^V^S)+k[6]+76029189&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(P^D^V)+k[9]+3654602809&4294967295,S=P+(A<<4&4294967295|A>>>28),A=V+(S^P^D)+k[12]+3873151461&4294967295,V=S+(A<<11&4294967295|A>>>21),A=D+(V^S^P)+k[15]+530742520&4294967295,D=V+(A<<16&4294967295|A>>>16),A=P+(D^V^S)+k[2]+3299628645&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(D^(P|~V))+k[0]+4096336452&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~D))+k[7]+1126891415&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~P))+k[14]+2878612391&4294967295,D=V+(A<<15&4294967295|A>>>17),A=P+(V^(D|~S))+k[5]+4237533241&4294967295,P=D+(A<<21&4294967295|A>>>11),A=S+(D^(P|~V))+k[12]+1700485571&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~D))+k[3]+2399980690&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~P))+k[10]+4293915773&4294967295,D=V+(A<<15&4294967295|A>>>17),A=P+(V^(D|~S))+k[1]+2240044497&4294967295,P=D+(A<<21&4294967295|A>>>11),A=S+(D^(P|~V))+k[8]+1873313359&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~D))+k[15]+4264355552&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~P))+k[6]+2734768916&4294967295,D=V+(A<<15&4294967295|A>>>17),A=P+(V^(D|~S))+k[13]+1309151649&4294967295,P=D+(A<<21&4294967295|A>>>11),A=S+(D^(P|~V))+k[4]+4149444226&4294967295,S=P+(A<<6&4294967295|A>>>26),A=V+(P^(S|~D))+k[11]+3174756917&4294967295,V=S+(A<<10&4294967295|A>>>22),A=D+(S^(V|~P))+k[2]+718787259&4294967295,D=V+(A<<15&4294967295|A>>>17),A=P+(V^(D|~S))+k[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+V&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var P=S-this.blockSize,k=this.B,D=this.h,V=0;V<S;){if(D==0)for(;V<=P;)o(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<S;)if(k[D++]=x.charCodeAt(V++),D==this.blockSize){o(this,k),D=0;break}}else for(;V<S;)if(k[D++]=x[V++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var P=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=P&255,P/=256;for(this.u(x),x=Array(16),S=P=0;4>S;++S)for(var k=0;32>k;k+=8)x[P++]=this.g[S]>>>k&255;return x};function l(x,S){var P=d;return Object.prototype.hasOwnProperty.call(P,x)?P[x]:P[x]=S(x)}function h(x,S){this.h=S;for(var P=[],k=!0,D=x.length-1;0<=D;D--){var V=x[D]|0;k&&V==S||(P[D]=V,k=!1)}this.g=P}var d={};function p(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return U(y(-x));for(var S=[],P=1,k=0;x>=P;k++)S[k]=x/P|0,P*=4294967296;return new h(S,0)}function w(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return U(w(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(S,8)),k=T,D=0;D<x.length;D+=8){var V=Math.min(8,x.length-D),A=parseInt(x.substring(D,D+V),S);8>V?(V=y(Math.pow(S,V)),k=k.j(V).add(y(A))):(k=k.j(P),k=k.add(y(A)))}return k}var T=p(0),R=p(1),M=p(16777216);n=h.prototype,n.m=function(){if(z(this))return-U(this).m();for(var x=0,S=1,P=0;P<this.g.length;P++){var k=this.i(P);x+=(0<=k?k:4294967296+k)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if($(this))return"0";if(z(this))return"-"+U(this).toString(x);for(var S=y(Math.pow(x,6)),P=this,k="";;){var D=ye(P,S).g;P=J(P,D.j(S));var V=((0<P.g.length?P.g[0]:P.h)>>>0).toString(x);if(P=D,$(P))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function $(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function z(x){return x.h==-1}n.l=function(x){return x=J(this,x),z(x)?-1:$(x)?0:1};function U(x){for(var S=x.g.length,P=[],k=0;k<S;k++)P[k]=~x.g[k];return new h(P,~x.h).add(R)}n.abs=function(){return z(this)?U(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],k=0,D=0;D<=S;D++){var V=k+(this.i(D)&65535)+(x.i(D)&65535),A=(V>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);k=A>>>16,V&=65535,A&=65535,P[D]=A<<16|V}return new h(P,P[P.length-1]&-2147483648?-1:0)};function J(x,S){return x.add(U(S))}n.j=function(x){if($(this)||$(x))return T;if(z(this))return z(x)?U(this).j(U(x)):U(U(this).j(x));if(z(x))return U(this.j(U(x)));if(0>this.l(M)&&0>x.l(M))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,P=[],k=0;k<2*S;k++)P[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<x.g.length;D++){var V=this.i(k)>>>16,A=this.i(k)&65535,rt=x.i(D)>>>16,Ot=x.i(D)&65535;P[2*k+2*D]+=A*Ot,re(P,2*k+2*D),P[2*k+2*D+1]+=V*Ot,re(P,2*k+2*D+1),P[2*k+2*D+1]+=A*rt,re(P,2*k+2*D+1),P[2*k+2*D+2]+=V*rt,re(P,2*k+2*D+2)}for(k=0;k<S;k++)P[k]=P[2*k+1]<<16|P[2*k];for(k=S;k<2*S;k++)P[k]=0;return new h(P,0)};function re(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function ae(x,S){this.g=x,this.h=S}function ye(x,S){if($(S))throw Error("division by zero");if($(x))return new ae(T,T);if(z(x))return S=ye(U(x),S),new ae(U(S.g),U(S.h));if(z(S))return S=ye(x,U(S)),new ae(U(S.g),S.h);if(30<x.g.length){if(z(x)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var P=R,k=S;0>=k.l(x);)P=Me(P),k=Me(k);var D=Re(P,1),V=Re(k,1);for(k=Re(k,2),P=Re(P,2);!$(k);){var A=V.add(k);0>=A.l(x)&&(D=D.add(P),V=A),k=Re(k,1),P=Re(P,1)}return S=J(x,D.j(S)),new ae(D,S)}for(D=T;0<=x.l(S);){for(P=Math.max(1,Math.floor(x.m()/S.m())),k=Math.ceil(Math.log(P)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=y(P),A=V.j(S);z(A)||0<A.l(x);)P-=k,V=y(P),A=V.j(S);$(V)&&(V=R),D=D.add(V),x=J(x,A)}return new ae(D,x)}n.A=function(x){return ye(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],k=0;k<S;k++)P[k]=this.i(k)&x.i(k);return new h(P,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],k=0;k<S;k++)P[k]=this.i(k)|x.i(k);return new h(P,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],k=0;k<S;k++)P[k]=this.i(k)^x.i(k);return new h(P,this.h^x.h)};function Me(x){for(var S=x.g.length+1,P=[],k=0;k<S;k++)P[k]=x.i(k)<<1|x.i(k-1)>>>31;return new h(P,x.h)}function Re(x,S){var P=S>>5;S%=32;for(var k=x.g.length-P,D=[],V=0;V<k;V++)D[V]=0<S?x.i(V+P)>>>S|x.i(V+P+1)<<32-S:x.i(V+P);return new h(D,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,O_=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,ls=h}).apply(typeof Iy<"u"?Iy:typeof self<"u"?self:typeof window<"u"?window:{});var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V_,ja,L_,nc,rf,b_,M_,F_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hu=="object"&&Hu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var L=u[E];if(!(L in v))break e;v=v[L]}u=u[u.length-1],E=v[u],m=m(E),m!=E&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,E=!1,L={next:function(){if(!E&&v<u.length){var B=v++;return{value:m(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),u.apply(m,L)}}return function(){return u.apply(m,arguments)}}function R(u,m,v){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,R.apply(null,arguments)}function M(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var E=v.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function $(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(E,L,B){for(var Z=Array(arguments.length-2),je=2;je<arguments.length;je++)Z[je-2]=arguments[je];return m.prototype[L].apply(E,Z)}}function z(u){const m=u.length;if(0<m){const v=Array(m);for(let E=0;E<m;E++)v[E]=u[E];return v}return[]}function U(u,m){for(let v=1;v<arguments.length;v++){const E=arguments[v];if(p(E)){const L=u.length||0,B=E.length||0;u.length=L+B;for(let Z=0;Z<B;Z++)u[L+Z]=E[Z]}else u.push(E)}}class J{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function re(u){return/^[\s\xa0]*$/.test(u)}function ae(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ye(u){return ye[" "](u),u}ye[" "]=function(){};var Me=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function Re(u,m,v){for(const E in u)m.call(v,u[E],E,u)}function x(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let v,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(v in E)u[v]=E[v];for(let B=0;B<P.length;B++)v=P[B],Object.prototype.hasOwnProperty.call(E,v)&&(u[v]=E[v])}}function D(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function V(u){d.setTimeout(()=>{throw u},0)}function A(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class rt{constructor(){this.h=this.g=null}add(m,v){const E=Ot.get();E.set(m,v),this.h?this.h.next=E:this.g=E,this.h=E}}var Ot=new J(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ee=!1,pe=new rt,ne=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(O)}};var O=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(v){V(v)}var m=Ot;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ee=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u}();function Se(u,m){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Me){e:{try{ye(m.nodeName);var L=!0;break e}catch{}L=!1}L||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Se.aa.h.call(this)}}$(Se,de);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function qe(u,m,v,E,L){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!E,this.ha=L,this.key=++Ue,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ur(u){this.src=u,this.g={},this.h=0}ur.prototype.add=function(u,m,v,E,L){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var Z=Fr(u,m,E,L);return-1<Z?(m=u[Z],v||(m.fa=!1)):(m=new qe(m,this.src,B,!!E,L),m.fa=v,u.push(m)),m};function Ss(u,m){var v=m.type;if(v in u.g){var E=u.g[v],L=Array.prototype.indexOf.call(E,m,void 0),B;(B=0<=L)&&Array.prototype.splice.call(E,L,1),B&&(_t(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Fr(u,m,v,E){for(var L=0;L<u.length;++L){var B=u[L];if(!B.da&&B.listener==m&&B.capture==!!v&&B.ha==E)return L}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),As={};function zo(u,m,v,E,L){if(Array.isArray(m)){for(var B=0;B<m.length;B++)zo(u,m[B],v,E,L);return null}return v=Wo(v),u&&u[Fe]?u.K(m,v,y(E)?!!E.capture:!1,L):$o(u,m,v,!1,E,L)}function $o(u,m,v,E,L,B){if(!m)throw Error("Invalid event type");var Z=y(L)?!!L.capture:!!L,je=Ps(u);if(je||(u[ki]=je=new ur(u)),v=je.add(m,v,E,Z,B),v.proxy)return v;if(E=Pl(),v.proxy=E,E.src=u,E.listener=v,u.addEventListener)Ie||(L=Z),L===void 0&&(L=!1),u.addEventListener(m.toString(),E,L);else if(u.attachEvent)u.attachEvent(hr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Pl(){function u(v){return m.call(u.src,u.listener,v)}const m=qo;return u}function Rs(u,m,v,E,L){if(Array.isArray(m))for(var B=0;B<m.length;B++)Rs(u,m[B],v,E,L);else E=y(E)?!!E.capture:!!E,v=Wo(v),u&&u[Fe]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],v=Fr(B,v,E,L),-1<v&&(_t(B[v]),Array.prototype.splice.call(B,v,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ps(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Fr(m,v,E,L)),(v=-1<u?m[u]:null)&&cr(v))}function cr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Fe])Ss(m.i,u);else{var v=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(v,E,u.capture):m.detachEvent?m.detachEvent(hr(v),E):m.addListener&&m.removeListener&&m.removeListener(E),(v=Ps(m))?(Ss(v,u),v.h==0&&(v.src=null,m[ki]=null)):_t(u)}}}function hr(u){return u in As?As[u]:As[u]="on"+u}function qo(u,m){if(u.da)u=!0;else{m=new Se(m,this);var v=u.listener,E=u.ha||u.src;u.fa&&cr(u),u=v.call(E,m)}return u}function Ps(u){return u=u[ki],u instanceof ur?u:null}var Cs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(u){return typeof u=="function"?u:(u[Cs]||(u[Cs]=function(m){return u.handleEvent(m)}),u[Cs])}function ft(){q.call(this),this.i=new ur(this),this.M=this,this.F=null}$(ft,q),ft.prototype[Fe]=!0,ft.prototype.removeEventListener=function(u,m,v,E){Rs(this,u,m,v,E)};function pt(u,m){var v,E=u.F;if(E)for(v=[];E;E=E.F)v.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new de(m,u);else if(m instanceof de)m.target=m.target||u;else{var L=m;m=new de(E,u),k(m,L)}if(L=!0,v)for(var B=v.length-1;0<=B;B--){var Z=m.g=v[B];L=dr(Z,E,!0,m)&&L}if(Z=m.g=u,L=dr(Z,E,!0,m)&&L,L=dr(Z,E,!1,m)&&L,v)for(B=0;B<v.length;B++)Z=m.g=v[B],L=dr(Z,E,!1,m)&&L}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],E=0;E<v.length;E++)_t(v[E]);delete u.g[m],u.h--}}this.F=null},ft.prototype.K=function(u,m,v,E){return this.i.add(String(u),m,!1,v,E)},ft.prototype.L=function(u,m,v,E){return this.i.add(String(u),m,!0,v,E)};function dr(u,m,v,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var L=!0,B=0;B<m.length;++B){var Z=m[B];if(Z&&!Z.da&&Z.capture==v){var je=Z.listener,mt=Z.ha||Z.src;Z.fa&&Ss(u.i,Z),L=je.call(mt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ho(u,m,v){if(typeof u=="function")v&&(u=R(u,v));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Ur(u){u.g=Ho(()=>{u.g=null,u.i&&(u.i=!1,Ur(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ni extends q{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(u){q.call(this),this.h=u,this.g={}}$(xi,q);var Ko=[];function Go(u){Re(u.g,function(m,v){this.g.hasOwnProperty(v)&&cr(m)},u),u.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Go(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=d.JSON.stringify,Yo=d.JSON.parse,Xo=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Di(){}Di.prototype.h=null;function ks(u){return u.h||(u.h=u.i())}function Ns(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){de.call(this,"d")}$(Wn,de);function xs(){de.call(this,"c")}$(xs,de);var Hn={},Jo=null;function Oi(){return Jo=Jo||new ft}Hn.La="serverreachability";function Zo(u){de.call(this,Hn.La,u)}$(Zo,de);function fr(u){const m=Oi();pt(m,new Zo(m))}Hn.STAT_EVENT="statevent";function ea(u,m){de.call(this,Hn.STAT_EVENT,u),this.stat=m}$(ea,de);function it(u){const m=Oi();pt(m,new ea(m,u))}Hn.Ma="timingevent";function Ds(u,m){de.call(this,Hn.Ma,u),this.size=m}$(Ds,de);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function Li(u,m,v,E,L,B){u.info(function(){if(u.g)if(B)for(var Z="",je=B.split("&"),mt=0;mt<je.length;mt++){var xe=je[mt].split("=");if(1<xe.length){var wt=xe[0];xe=xe[1];var at=wt.split("_");Z=2<=at.length&&at[1]=="type"?Z+(wt+"="+xe+"&"):Z+(wt+"=redacted&")}}else Z=null;else Z=B;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+m+`
`+v+`
`+Z})}function Os(u,m,v,E,L,B,Z){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+m+`
`+v+`
`+B+" "+Z})}function Pn(u,m,v,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Jc(u,v)+(E?" "+E:"")})}function ta(u,m){u.info(function(){return"TIMEOUT: "+m})}Vi.prototype.info=function(){};function Jc(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var E=v[u];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var B=L[0];if(B!="noop"&&B!="stop"&&B!="close")for(var Z=1;Z<L.length;Z++)L[Z]=""}}}}return Qo(v)}catch{return m}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function bi(){}$(bi,Di),bi.prototype.g=function(){return new XMLHttpRequest},bi.prototype.i=function(){return{}},Cn=new bi;function kn(u,m,v,E){this.j=u,this.i=m,this.l=v,this.R=E||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var na={},Ls={};function bs(u,m,v){u.L=1,u.v=qr(an(m)),u.m=v,u.P=!0,ra(u,null)}function ra(u,m){u.F=Date.now(),We(u),u.A=an(u.v);var v=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Hr(v.i,"t",E),u.C=0,v=u.j.J,u.h=new kl,u.g=Kl(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Ni(R(u.Y,u,u.g),u.O)),m=u.U,v=u.g,E=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Ko[0]=L.toString()),L=Ko);for(var B=0;B<L.length;B++){var Z=zo(v,L[B],E||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),fr(),Li(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Gt(u)==3?m.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const at=Gt(this.g);var m=this.g.Ba();const vn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||ua(this.g)))){this.J||at!=4||m==7||(m==8||0>=vn?fr(3):fr(2)),Mi(this);var v=this.g.Z();this.X=v;t:if(Nl(this)){var E=ua(this.g);u="";var L=E.length,B=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),jr(this);var Z="";break t}this.h.i=new d.TextDecoder}for(m=0;m<L;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(B&&m==L-1)});E.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=v==200,Os(this.i,this.u,this.A,this.l,this.R,at,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,mt=this.g;if((je=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(je)){var xe=je;break t}}xe=null}if(v=xe)Pn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ia(this,v);else{this.o=!1,this.s=3,it(12),gn(this),jr(this);break e}}if(this.P){v=!0;let un;for(;!this.J&&this.C<Z.length;)if(un=Zc(this,Z),un==Ls){at==4&&(this.s=4,it(14),v=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==na){this.s=4,it(15),Pn(this.i,this.l,Z,"[Invalid Chunk]"),v=!1;break}else Pn(this.i,this.l,un,null),ia(this,un);if(Nl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||Z.length!=0||this.h.h||(this.s=1,it(16),v=!1),this.o=this.o&&v,!v)Pn(this.i,this.l,Z,"[Invalid Chunked Response]"),gn(this),jr(this);else if(0<Z.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),ha(wt),wt.M=!0,it(11))}}else Pn(this.i,this.l,Z,null),ia(this,Z);at==4&&gn(this),this.o&&!this.J&&(at==4?Ks(this.j,this):(this.o=!1,We(this)))}else zs(this.g),v==400&&0<Z.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),gn(this),jr(this)}}}catch{}finally{}};function Nl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Zc(u,m){var v=u.C,E=m.indexOf(`
`,v);return E==-1?Ls:(v=Number(m.substring(v,E)),isNaN(v)?na:(E+=1,E+v>m.length?Ls:(m=m.slice(E,E+v),u.C=E+v,m)))}kn.prototype.cancel=function(){this.J=!0,gn(this)};function We(u){u.S=Date.now()+u.I,xl(u,u.I)}function xl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(R(u.ba,u),m)}function Mi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ta(this.i,this.A),this.L!=2&&(fr(),it(17)),gn(this),this.s=2,jr(this)):xl(this,this.S-u)};function jr(u){u.j.G==0||u.J||Ks(u.j,u)}function gn(u){Mi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Go(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ia(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||$t(v.h,u))){if(!u.K&&$t(v.h,u)&&v.G==3){try{var E=v.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Hs(v),Vn(v);else break e;Ws(v),it(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=Rn(R(v.Za,v),6e3));if(1>=Ol(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else vr(v,11)}else if((u.K||v.g==u)&&Hs(v),!re(m))for(L=v.Da.g.parse(m),m=0;m<L.length;m++){let xe=L[m];if(v.T=xe[0],xe=xe[1],v.G==2)if(xe[0]=="c"){v.K=xe[1],v.ia=xe[2];const wt=xe[3];wt!=null&&(v.la=wt,v.j.info("VER="+v.la));const at=xe[4];at!=null&&(v.Aa=at,v.j.info("SVER="+v.Aa));const vn=xe[5];vn!=null&&typeof vn=="number"&&0<vn&&(E=1.5*vn,v.L=E,v.j.info("backChannelRequestTimeoutMs_="+E)),E=v;const un=u.g;if(un){const qi=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var B=E.h;B.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(sa(B,B.h),B.h=null))}if(E.D){const Qs=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(E.ya=Qs,$e(E.I,E.D,Qs))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),E=v;var Z=u;if(E.qa=Hl(E,E.J?E.ia:null,E.W),Z.K){Vl(E.h,Z);var je=Z,mt=E.L;mt&&(je.I=mt),je.B&&(Mi(je),We(je)),E.g=Z}else $i(E);0<v.i.length&&Yn(v)}else xe[0]!="stop"&&xe[0]!="close"||vr(v,7);else v.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?vr(v,7):Rt(v):xe[0]!="noop"&&v.l&&v.l.ta(xe),v.v=0)}}fr(4)}catch{}}var Dl=class{constructor(u,m){this.g=u,this.map=m}};function Fi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ol(u){return u.h?1:u.g?u.g.size:0}function $t(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function sa(u,m){u.g?u.g.add(m):u.h=m}function Vl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Fi.prototype.cancel=function(){if(this.i=Ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ll(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return z(u.i)}function Ms(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,E=0;E<v;E++)m.push(u[E]);return m}m=[],v=0;for(E in u)m[v++]=u[E];return m}function Fs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const E in u)m[v++]=E;return m}}}function Br(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Fs(u),E=Ms(u),L=E.length,B=0;B<L;B++)m.call(void 0,E[B],v&&v[B],u)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var E=u[v].indexOf("="),L=null;if(0<=E){var B=u[v].substring(0,E);L=u[v].substring(E+1)}else B=u[v];m(B,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function pr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof pr){this.h=u.h,ji(this,u.j),this.o=u.o,this.g=u.g,zr(this,u.s),this.l=u.l;var m=u.i,v=new Kn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),$r(this,v),this.m=u.m}else u&&(m=String(u).match(Ui))?(this.h=!1,ji(this,m[1]||"",!0),this.o=Ce(m[2]||""),this.g=Ce(m[3]||"",!0),zr(this,m[4]),this.l=Ce(m[5]||"",!0),$r(this,m[6]||"",!0),this.m=Ce(m[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}pr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Wr(m,Us,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Wr(m,Us,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Wr(v,v.charAt(0)=="/"?Fl:Ml,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Wr(v,oa)),u.join("")};function an(u){return new pr(u)}function ji(u,m,v){u.j=v?Ce(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function zr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function $r(u,m,v){m instanceof Kn?(u.i=m,Gn(u.i,u.h)):(v||(m=Wr(m,Ul)),u.i=new Kn(m,u.h))}function $e(u,m,v){u.i.set(m,v)}function qr(u){return $e(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ce(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Wr(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,bl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Us=/[#\/\?@]/g,Ml=/[#\?:]/g,Fl=/[#\?]/g,Ul=/[#\?@]/g,oa=/#/g;function Kn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&eh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Kn.prototype,n.add=function(u,m){At(this),this.i=null,u=yn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Nn(u,m){At(u),m=yn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function xn(u,m){return At(u),m=yn(u,m),u.g.has(m)}n.forEach=function(u,m){At(this),this.g.forEach(function(v,E){v.forEach(function(L){u.call(m,L,E,this)},this)},this)},n.na=function(){At(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let E=0;E<m.length;E++){const L=u[E];for(let B=0;B<L.length;B++)v.push(m[E])}return v},n.V=function(u){At(this);let m=[];if(typeof u=="string")xn(this,u)&&(m=m.concat(this.g.get(yn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return At(this),this.i=null,u=yn(this,u),xn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Hr(u,m,v){Nn(u,m),0<v.length&&(u.i=null,u.g.set(yn(u,m),z(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var E=m[v];const B=encodeURIComponent(String(E)),Z=this.V(E);for(E=0;E<Z.length;E++){var L=B;Z[E]!==""&&(L+="="+encodeURIComponent(String(Z[E]))),u.push(L)}}return this.i=u.join("&")};function yn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Gn(u,m){m&&!u.j&&(At(u),u.i=null,u.g.forEach(function(v,E){var L=E.toLowerCase();E!=L&&(Nn(this,E),Hr(this,L,v))},u)),u.j=m}function th(u,m){const v=new Vi;if(d.Image){const E=new Image;E.onload=M(Kt,v,"TestLoadImage: loaded",!0,m,E),E.onerror=M(Kt,v,"TestLoadImage: error",!1,m,E),E.onabort=M(Kt,v,"TestLoadImage: abort",!1,m,E),E.ontimeout=M(Kt,v,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function jl(u,m){const v=new Vi,E=new AbortController,L=setTimeout(()=>{E.abort(),Kt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(L),B.ok?Kt(v,"TestPingServer: ok",!0,m):Kt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(L),Kt(v,"TestPingServer: error",!1,m)})}function Kt(u,m,v,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(v)}catch{}}function nh(){this.g=new Xo}function Bl(u,m,v){const E=v||"";try{Br(u,function(L,B){let Z=L;y(L)&&(Z=Qo(L)),m.push(E+B+"="+encodeURIComponent(Z))})}catch(L){throw m.push(E+"type="+encodeURIComponent("_badmap")),L}}function mr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(mr,Di),mr.prototype.g=function(){return new Bi(this.l,this.j)},mr.prototype.i=function(u){return function(){return u}}({});function Bi(u,m){ft.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Bi,ft),n=Bi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,On(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function zl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Dn(this):On(this),this.readyState==3&&zl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},n.Qa=function(u){this.g&&(this.response=u,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,On(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function On(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function gr(u){let m="";return Re(u,function(v,E){m+=E,m+=":",m+=v,m+=`\r
`}),m}function Kr(u,m,v){e:{for(E in v){var E=!1;break e}E=!0}E||(v=gr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):$e(u,m,v))}function Ye(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Ye,ft);var rh=/^https?$/i,aa=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?ks(this.o):ks(Cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){zi(this,B);return}if(u=v||"",v=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)v.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())v.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),L=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(aa,m,void 0))||E||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,Z]of v)this.g.setRequestHeader(B,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){zi(this,B)}};function zi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,js(u),ln(u)}function js(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},n.bb=function(){la(this)};function la(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Ho(u.Ea,0,u);else if(pt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const Z=u.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var E;if(E=Z===0){var L=String(u.D).match(Ui)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),E=!rh.test(L?L.toLowerCase():"")}v=E}if(v)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var B=2<Gt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",js(u)}}finally{ln(u)}}}}function ln(u,m){if(u.g){Bs(u);const v=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{v.onreadystatechange=E}catch{}}}function Bs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Yo(m)}};function ua(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function zs(u){const m={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(re(u[E]))continue;var v=D(u[E]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=m[L]||[];m[L]=B,B.push(v)}x(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function ca(u){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(u&&u.concurrentRequestLimit),this.Da=new nh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ca.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,E){it(0),this.W=u,this.H=m||{},v&&E!==void 0&&(this.H.OSID=v,this.H.OAID=E),this.F=this.X,this.I=Hl(this,null,this.W),Yn(this)};function Rt(u){if($s(u),u.G==3){var m=u.U++,v=an(u.I);if($e(v,"SID",u.K),$e(v,"RID",m),$e(v,"TYPE","terminate"),yr(u,v),m=new kn(u,u.j,m),m.L=2,m.v=qr(an(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.v,v=!0),v||(m.g=Kl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}Wl(u)}function Vn(u){u.g&&(ha(u),u.g.cancel(),u.g=null)}function $s(u){Vn(u),u.u&&(d.clearTimeout(u.u),u.u=null),Hs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Yn(u){if(!on(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||ne(),ee||(ze(),ee=!0),pe.add(m,u),u.B=0}}function ih(u,m){return Ol(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(R(u.Ga,u,m),ql(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new kn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=S(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(L.H=B,B=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var E=this.i[v];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Gr(this,L,m),v=an(this.I),$e(v,"RID",u),$e(v,"CVER",22),this.D&&$e(v,"X-HTTP-Session-Id",this.D),yr(this,v),B&&(this.O?m="headers="+encodeURIComponent(String(gr(B)))+"&"+m:this.m&&Kr(v,this.m,B)),sa(this.h,L),this.Ua&&$e(v,"TYPE","init"),this.P?($e(v,"$req",m),$e(v,"SID","null"),L.T=!0,bs(L,v,null)):bs(L,v,m),this.G=2}}else this.G==3&&(u?qs(this,u):this.i.length==0||on(this.h)||qs(this))};function qs(u,m){var v;m?v=m.l:v=u.U++;const E=an(u.I);$e(E,"SID",u.K),$e(E,"RID",v),$e(E,"AID",u.T),yr(u,E),u.m&&u.o&&Kr(E,u.m,u.o),v=new kn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Gr(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sa(u.h,v),bs(v,E,m)}function yr(u,m){u.H&&Re(u.H,function(v,E){$e(m,E,v)}),u.l&&Br({},function(v,E){$e(m,E,v)})}function Gr(u,m,v){v=Math.min(u.i.length,v);var E=u.l?R(u.l.Na,u.l,u):null;e:{var L=u.i;let B=-1;for(;;){const Z=["count="+v];B==-1?0<v?(B=L[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let je=!0;for(let mt=0;mt<v;mt++){let xe=L[mt].g;const wt=L[mt].map;if(xe-=B,0>xe)B=Math.max(0,L[mt].g-100),je=!1;else try{Bl(wt,Z,"req"+xe+"_")}catch{E&&E(wt)}}if(je){E=Z.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,E}function $i(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||ne(),ee||(ze(),ee=!0),pe.add(m,u),u.v=0}}function Ws(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(R(u.Fa,u),ql(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,$l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Vn(this),$l(this))};function ha(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function $l(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=an(u.qa);$e(m,"RID","rpc"),$e(m,"SID",u.K),$e(m,"AID",u.T),$e(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&$e(m,"TO",u.ja),$e(m,"TYPE","xmlhttp"),yr(u,m),u.m&&u.o&&Kr(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=qr(an(m)),v.m=null,v.P=!0,ra(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Vn(this),Ws(this),it(19))};function Hs(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Ks(u,m){var v=null;if(u.g==m){Hs(u),ha(u),u.g=null;var E=2}else if($t(u.h,m))v=m.D,Vl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var L=u.B;E=Oi(),pt(E,new Ds(E,v)),Yn(u)}else $i(u);else if(L=m.s,L==3||L==0&&0<m.X||!(E==1&&ih(u,m)||E==2&&Ws(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),L){case 1:vr(u,5);break;case 4:vr(u,10);break;case 3:vr(u,6);break;default:vr(u,2)}}}function ql(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function vr(u,m){if(u.j.info("Error code "+m),m==2){var v=R(u.fb,u),E=u.Xa;const L=!E;E=new pr(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ji(E,"https"),qr(E),L?th(E.toString(),v):jl(E.toString(),v)}else it(2);u.G=0,u.l&&u.l.sa(m),Wl(u),$s(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Wl(u){if(u.G=0,u.ka=[],u.l){const m=Ll(u.h);(m.length!=0||u.i.length!=0)&&(U(u.ka,m),U(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Hl(u,m,v){var E=v instanceof pr?an(v):new pr(v);if(E.g!="")m&&(E.g=m+"."+E.g),zr(E,E.s);else{var L=d.location;E=L.protocol,m=m?m+"."+L.hostname:L.hostname,L=+L.port;var B=new pr(null);E&&ji(B,E),m&&(B.g=m),L&&zr(B,L),v&&(B.l=v),E=B}return v=u.D,m=u.ya,v&&m&&$e(E,v,m),$e(E,"VER",u.la),yr(u,E),E}function Kl(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new mr({eb:v})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function da(){}n=da.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gs(){}Gs.prototype.g=function(u,m){return new qt(u,m)};function qt(u,m){ft.call(this),this.g=new ca(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!re(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!re(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Xn(this)}$(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Rt(this.g)},qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Qo(u),u=v);m.i.push(new Dl(m.Ya++,u)),m.G==3&&Yn(m)},qt.prototype.N=function(){this.g.l=null,delete this.j,Rt(this.g),delete this.g,qt.aa.N.call(this)};function Gl(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(Gl,Wn);function Ql(){xs.call(this),this.status=1}$(Ql,xs);function Xn(u){this.g=u}$(Xn,da),Xn.prototype.ua=function(){pt(this.g,"a")},Xn.prototype.ta=function(u){pt(this.g,new Gl(u))},Xn.prototype.sa=function(u){pt(this.g,new Ql)},Xn.prototype.ra=function(){pt(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,F_=function(){return new Gs},M_=function(){return Oi()},b_=Hn,rf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,nc=Vs,Cl.COMPLETE="complete",L_=Cl,Ns.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,ja=Ns,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,V_=Ye}).apply(typeof Hu<"u"?Hu:typeof self<"u"?self:typeof window<"u"?window:{});const Sy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Nc("@firebase/firestore");function ba(){return cs.logLevel}function ue(n,...e){if(cs.logLevel<=ke.DEBUG){const t=e.map(Mf);cs.debug(`Firestore (${Uo}): ${n}`,...t)}}function br(n,...e){if(cs.logLevel<=ke.ERROR){const t=e.map(Mf);cs.error(`Firestore (${Uo}): ${n}`,...t)}}function Po(n,...e){if(cs.logLevel<=ke.WARN){const t=e.map(Mf);cs.warn(`Firestore (${Uo}): ${n}`,...t)}}function Mf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+n;throw br(e),new Error(e)}function Be(n,e){n||we()}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(jt.UNAUTHENTICATED))}shutdown(){}}class CP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kP{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Be(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ei,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ei)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Be(typeof i.accessToken=="string"),new U_(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new jt(e)}}class NP{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xP{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new NP(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Be(this.o===void 0);const i=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Be(typeof t.token=="string"),this.R=t.token,new DP(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=VP(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function be(n,e){return n<e?-1:n>e?1:0}function Co(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new oe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new vt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new vt(0,0))}static max(){return new Ee(new vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ol.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ol?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Qe extends ol{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new oe(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const LP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ol{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return LP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new oe(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new oe(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new oe(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(i+=d,o++):(l(),o++)}if(l(),h)throw new oe(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Qe.fromString(e))}static fromName(e){return new fe(Qe.fromString(e).popFirst(5))}static empty(){return new fe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Qe(e.slice()))}}function bP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new Ii(o,fe.empty(),e)}function MP(n){return new Ii(n.readTime,n.key,-1)}class Ii{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ii(Ee.min(),fe.empty(),-1)}static max(){return new Ii(Ee.max(),fe.empty(),-1)}}function FP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==UP)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,i)=>{t(e)})}static reject(e){return new G((t,i)=>{i(e)})}static waitFor(e){return new G((t,i)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next(o=>o?G.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new G((i,o)=>{const l=e.length,h=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(w=>{h[y]=w,++d,d===l&&i(h)},w=>o(w))}})}static doWhile(e,t){return new G((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function BP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ff.oe=-1;function Lc(n){return n==null}function gc(n){return n===0&&1/n==-1/0}function zP(n){return typeof n=="number"&&Number.isInteger(n)&&!gc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Es(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function B_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,l){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new xt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new z_("Invalid base64 string: "+l):l}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const $P=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(n){if(Be(!!n),typeof n=="string"){let e=0;const t=$P.exec(n);if(Be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hs(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function jf(n){const e=n.mapValue.fields.__previous_value__;return Uf(e)?jf(e):e}function al(n){const e=Si(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,t,i,o,l,h,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class ll{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu={mapValue:{}};function ds(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uf(n)?4:HP(n)?9007199254740991:WP(n)?10:11:we()}function lr(n,e){if(n===e)return!0;const t=ds(n);if(t!==ds(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return al(n).isEqual(al(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Si(o.timestampValue),d=Si(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return hs(o.bytesValue).isEqual(hs(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ot(o.geoPointValue.latitude)===ot(l.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ot(o.integerValue)===ot(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ot(o.doubleValue),d=ot(l.doubleValue);return h===d?gc(h)===gc(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return Co(n.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Ay(h)!==Ay(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!lr(h[p],d[p])))return!1;return!0}(n,e);default:return we()}}function ul(n,e){return(n.values||[]).find(t=>lr(t,e))!==void 0}function ko(n,e){if(n===e)return 0;const t=ds(n),i=ds(e);if(t!==i)return be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(l,h){const d=ot(l.integerValue||l.doubleValue),p=ot(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Py(n.timestampValue,e.timestampValue);case 4:return Py(al(n),al(e));case 5:return be(n.stringValue,e.stringValue);case 6:return function(l,h){const d=hs(l),p=hs(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),p=h.split("/");for(let y=0;y<d.length&&y<p.length;y++){const w=be(d[y],p[y]);if(w!==0)return w}return be(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const d=be(ot(l.latitude),ot(h.latitude));return d!==0?d:be(ot(l.longitude),ot(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Cy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var d,p,y,w;const T=l.fields||{},R=h.fields||{},M=(d=T.value)===null||d===void 0?void 0:d.arrayValue,$=(p=R.value)===null||p===void 0?void 0:p.arrayValue,z=be(((y=M==null?void 0:M.values)===null||y===void 0?void 0:y.length)||0,((w=$==null?void 0:$.values)===null||w===void 0?void 0:w.length)||0);return z!==0?z:Cy(M,$)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Gu.mapValue&&h===Gu.mapValue)return 0;if(l===Gu.mapValue)return 1;if(h===Gu.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=h.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const R=be(p[T],w[T]);if(R!==0)return R;const M=ko(d[p[T]],y[w[T]]);if(M!==0)return M}return be(p.length,w.length)}(n.mapValue,e.mapValue);default:throw we()}}function Py(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Si(n),i=Si(e),o=be(t.seconds,i.seconds);return o!==0?o:be(t.nanos,i.nanos)}function Cy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=ko(t[o],i[o]);if(l)return l}return be(t.length,i.length)}function No(n){return sf(n)}function sf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Si(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return hs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return fe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=sf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${sf(t.fields[h])}`;return o+"}"}(n.mapValue):we()}function ky(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function of(n){return!!n&&"integerValue"in n}function Bf(n){return!!n&&"arrayValue"in n}function Ny(n){return!!n&&"nullValue"in n}function xy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rc(n){return!!n&&"mapValue"in n}function WP(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ha(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Es(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ha(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ha(n.arrayValue.values[t]);return e}return Object.assign({},n)}function HP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}h?i[d.lastSegment()]=Ha(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];rc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Es(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new nn(Ha(this.value))}}function $_(n){const e=[];return Es(n.fields,(t,i)=>{const o=new Nt([t]);if(rc(i)){const l=$_(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,l,h,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Bt(e,0,Ee.min(),Ee.min(),Ee.min(),nn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ee.min(),Ee.min(),nn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ee.min(),Ee.min(),nn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.position=e,this.inclusive=t}}function Dy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=ko(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t="asc"){this.field=e,this.dir=t}}function KP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{}class ct extends q_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new QP(e,t,i):t==="array-contains"?new JP(e,i):t==="in"?new ZP(e,i):t==="not-in"?new eC(e,i):t==="array-contains-any"?new tC(e,i):new ct(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new YP(e,i):new XP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ko(t,this.value)):t!==null&&ds(this.value)===ds(t)&&this.matchesComparison(ko(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends q_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new $n(e,t)}matches(e){return W_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function W_(n){return n.op==="and"}function H_(n){return GP(n)&&W_(n)}function GP(n){for(const e of n.filters)if(e instanceof $n)return!1;return!0}function af(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+No(n.value);if(H_(n))return n.filters.map(e=>af(e)).join(",");{const e=n.filters.map(t=>af(t)).join(",");return`${n.op}(${e})`}}function K_(n,e){return n instanceof ct?function(i,o){return o instanceof ct&&i.op===o.op&&i.field.isEqual(o.field)&&lr(i.value,o.value)}(n,e):n instanceof $n?function(i,o){return o instanceof $n&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,d)=>l&&K_(h,o.filters[d]),!0):!1}(n,e):void we()}function G_(n){return n instanceof ct?function(t){return`${t.field.canonicalString()} ${t.op} ${No(t.value)}`}(n):n instanceof $n?function(t){return t.op.toString()+" {"+t.getFilters().map(G_).join(" ,")+"}"}(n):"Filter"}class QP extends ct{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class YP extends ct{constructor(e,t){super(e,"in",t),this.keys=Q_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class XP extends ct{constructor(e,t){super(e,"not-in",t),this.keys=Q_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Q_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>fe.fromName(i.referenceValue))}class JP extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bf(t)&&ul(t.arrayValue,this.value)}}class ZP extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ul(this.value.arrayValue,t)}}class eC extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ul(this.value.arrayValue,t)}}class tC extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ul(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t=null,i=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}}function Vy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new nC(n,e,t,i,o,l,h)}function zf(n){const e=Te(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>af(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Lc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>No(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>No(i)).join(",")),e.ue=t}return e.ue}function $f(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!KP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!K_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oy(n.startAt,e.startAt)&&Oy(n.endAt,e.endAt)}function lf(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t=null,i=[],o=[],l=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rC(n,e,t,i,o,l,h,d){return new El(n,e,t,i,o,l,h,d)}function qf(n){return new El(n)}function Ly(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Y_(n){return n.collectionGroup!==null}function Ka(n){const e=Te(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new xt(Nt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new vc(l,i))}),t.has(Nt.keyField().canonicalString())||e.ce.push(new vc(Nt.keyField(),i))}return e.ce}function ir(n){const e=Te(n);return e.le||(e.le=iC(e,Ka(n))),e.le}function iC(n,e){if(n.limitType==="F")return Vy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new vc(o.field,l)});const t=n.endAt?new yc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new yc(n.startAt.position,n.startAt.inclusive):null;return Vy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function uf(n,e){const t=n.filters.concat([e]);return new El(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cf(n,e,t){return new El(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bc(n,e){return $f(ir(n),ir(e))&&n.limitType===e.limitType}function X_(n){return`${zf(ir(n))}|lt:${n.limitType}`}function yo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>G_(o)).join(", ")}]`),Lc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>No(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>No(o)).join(",")),`Target(${i})`}(ir(n))}; limitType=${n.limitType})`}function Mc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ka(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,d,p){const y=Dy(h,d,p);return h.inclusive?y<=0:y<0}(i.startAt,Ka(i),o)||i.endAt&&!function(h,d,p){const y=Dy(h,d,p);return h.inclusive?y>=0:y>0}(i.endAt,Ka(i),o))}(n,e)}function sC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function J_(n){return(e,t)=>{let i=!1;for(const o of Ka(n)){const l=oC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function oC(n,e,t){const i=n.field.isKeyField()?fe.comparator(e.key,t.key):function(l,h,d){const p=h.data.field(l),y=d.data.field(l);return p!==null&&y!==null?ko(p,y):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=new tt(fe.comparator);function Mr(){return aC}const Z_=new tt(fe.comparator);function Ba(...n){let e=Z_;for(const t of n)e=e.insert(t.key,t);return e}function ew(n){let e=Z_;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ss(){return Ga()}function tw(){return Ga()}function Ga(){return new jo(n=>n.toString(),(n,e)=>n.isEqual(e))}const lC=new tt(fe.comparator),uC=new xt(fe.comparator);function Pe(...n){let e=uC;for(const t of n)e=e.add(t);return e}const cC=new xt(be);function hC(){return cC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function nw(n){return{integerValue:""+n}}function dC(n,e){return zP(e)?nw(e):Wf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this._=void 0}}function fC(n,e,t){return n instanceof cl?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Uf(l)&&(l=jf(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof hl?iw(n,e):n instanceof dl?sw(n,e):function(o,l){const h=rw(o,l),d=by(h)+by(o.Pe);return of(h)&&of(o.Pe)?nw(d):Wf(o.serializer,d)}(n,e)}function pC(n,e,t){return n instanceof hl?iw(n,e):n instanceof dl?sw(n,e):t}function rw(n,e){return n instanceof _c?function(i){return of(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class cl extends Fc{}class hl extends Fc{constructor(e){super(),this.elements=e}}function iw(n,e){const t=ow(e);for(const i of n.elements)t.some(o=>lr(o,i))||t.push(i);return{arrayValue:{values:t}}}class dl extends Fc{constructor(e){super(),this.elements=e}}function sw(n,e){let t=ow(e);for(const i of n.elements)t=t.filter(o=>!lr(o,i));return{arrayValue:{values:t}}}class _c extends Fc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function by(n){return ot(n.integerValue||n.doubleValue)}function ow(n){return Bf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,t){this.field=e,this.transform=t}}function gC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof hl&&o instanceof hl||i instanceof dl&&o instanceof dl?Co(i.elements,o.elements,lr):i instanceof _c&&o instanceof _c?lr(i.Pe,o.Pe):i instanceof cl&&o instanceof cl}(n.transform,e.transform)}class yC{constructor(e,t){this.version=e,this.transformResults=t}}class sr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sr}static exists(e){return new sr(void 0,e)}static updateTime(e){return new sr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Uc{}function aw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new uw(n.key,sr.none()):new Tl(n.key,n.data,sr.none());{const t=n.data,i=nn.empty();let o=new xt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ci(n.key,i,new fn(o.toArray()),sr.none())}}function vC(n,e,t){n instanceof Tl?function(o,l,h){const d=o.value.clone(),p=Fy(o.fieldTransforms,l,h.transformResults);d.setAll(p),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ci?function(o,l,h){if(!ic(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Fy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(lw(o)),p.setAll(d),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Qa(n,e,t,i){return n instanceof Tl?function(l,h,d,p){if(!ic(l.precondition,h))return d;const y=l.value.clone(),w=Uy(l.fieldTransforms,p,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ci?function(l,h,d,p){if(!ic(l.precondition,h))return d;const y=Uy(l.fieldTransforms,p,h),w=h.data;return w.setAll(lw(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,d){return ic(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function _C(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=rw(i.transform,o||null);l!=null&&(t===null&&(t=nn.empty()),t.set(i.field,l))}return t||null}function My(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Co(i,o,(l,h)=>gC(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Tl extends Uc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ci extends Uc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function lw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Fy(n,e,t){const i=new Map;Be(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,d=e.data.field(l.field);i.set(l.field,pC(h,d,t[o]))}return i}function Uy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,fC(l,h,e))}return i}class uw extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wC extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&vC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Qa(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Qa(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=tw();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const p=aw(h,d);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,i)=>My(t,i))&&Co(this.baseMutations,e.baseMutations,(t,i)=>My(t,i))}}class Hf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Be(e.mutations.length===i.length);let o=function(){return lC}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Hf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,De;function SC(n){switch(n){default:return we();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function cw(n){if(n===void 0)return br("GRPC error has no .code"),W.UNKNOWN;switch(n){case ut.OK:return W.OK;case ut.CANCELLED:return W.CANCELLED;case ut.UNKNOWN:return W.UNKNOWN;case ut.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ut.INTERNAL:return W.INTERNAL;case ut.UNAVAILABLE:return W.UNAVAILABLE;case ut.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ut.NOT_FOUND:return W.NOT_FOUND;case ut.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ut.ABORTED:return W.ABORTED;case ut.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ut.DATA_LOSS:return W.DATA_LOSS;default:return we()}}(De=ut||(ut={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=new ls([4294967295,4294967295],0);function jy(n){const e=AC().encode(n),t=new O_;return t.update(e),new Uint8Array(t.digest())}function By(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ls([t,i],0),new ls([o,l],0)]}class Kf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new za(`Invalid padding: ${t}`);if(i<0)throw new za(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new za(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new za(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ls.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(ls.fromNumber(i)));return o.compare(RC)===1&&(o=new ls([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=jy(e),[i,o]=By(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Kf(l,o,t);return i.forEach(d=>h.insert(d)),h}insert(e){if(this.Ie===0)return;const t=jy(e),[i,o]=By(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new jc(Ee.min(),o,new tt(be),Mr(),Pe())}}class Il{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Il(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class hw{constructor(e,t){this.targetId=e,this.me=t}}class dw{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class zy{constructor(){this.fe=0,this.ge=qy(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new Il(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=qy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mr(),this.qe=$y(),this.Qe=new tt(be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(lf(l))if(i===0){const h=new fe(l.path);this.Ue(t,h,Bt.newNoDocument(h,Ee.min()))}else Be(i===1);else{const h=this.Ye(t);if(h!==i){const d=this.Ze(e),p=d?this.Xe(d,e,h):1;if(p!==0){this.je(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,y)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=hs(i).toUint8Array()}catch(p){if(p instanceof z_)return Po("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Kf(h,o,l)}catch(p){return Po(p instanceof za?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ie===0?null:d}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.tt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,h)=>{const d=this.Je(h);if(d){if(l.current&&lf(d.target)){const p=new fe(d.target.path);this.ke.get(p)!==null||this.it(h,p)||this.Ue(h,p,Bt.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=Pe();this.qe.forEach((l,h)=>{let d=!0;h.forEachWhile(p=>{const y=this.Je(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new jc(e,t,this.Qe,this.ke,i);return this.ke=Mr(),this.qe=$y(),this.Qe=new tt(be),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new zy,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xt(be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function $y(){return new tt(fe.comparator)}function qy(){return new tt(fe.comparator)}const CC={asc:"ASCENDING",desc:"DESCENDING"},kC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NC={and:"AND",or:"OR"};class xC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hf(n,e){return n.useProto3Json||Lc(e)?e:{value:e}}function wc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function DC(n,e){return wc(n,e.toTimestamp())}function or(n){return Be(!!n),Ee.fromTimestamp(function(t){const i=Si(t);return new vt(i.seconds,i.nanos)}(n))}function Gf(n,e){return df(n,e).canonicalString()}function df(n,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function pw(n){const e=Qe.fromString(n);return Be(_w(e)),e}function ff(n,e){return Gf(n.databaseId,e.path)}function bd(n,e){const t=pw(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(gw(t))}function mw(n,e){return Gf(n.databaseId,e)}function OC(n){const e=pw(n);return e.length===4?Qe.emptyPath():gw(e)}function pf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gw(n){return Be(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wy(n,e,t){return{name:ff(n,e),fields:t.value.mapValue.fields}}function VC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,w){return y.useProto3Json?(Be(w===void 0||typeof w=="string"),Dt.fromBase64String(w||"")):(Be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Dt.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const w=y.code===void 0?W.UNKNOWN:cw(y.code);return new oe(w,y.message||"")}(h);t=new dw(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=bd(n,i.document.name),l=or(i.document.updateTime),h=i.document.createTime?or(i.document.createTime):Ee.min(),d=new nn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,h,d),y=i.targetIds||[],w=i.removedTargetIds||[];t=new sc(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=bd(n,i.document),l=i.readTime?or(i.readTime):Ee.min(),h=Bt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new sc([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=bd(n,i.document),l=i.removedTargetIds||[];t=new sc([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new IC(o,l),d=i.targetId;t=new hw(d,h)}}return t}function LC(n,e){let t;if(e instanceof Tl)t={update:Wy(n,e.key,e.value)};else if(e instanceof uw)t={delete:ff(n,e.key)};else if(e instanceof Ci)t={update:Wy(n,e.key,e.data),updateMask:qC(e.fieldMask)};else{if(!(e instanceof wC))return we();t={verify:ff(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const d=h.transform;if(d instanceof cl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof hl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof dl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _c)return{fieldPath:h.field.canonicalString(),increment:d.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:DC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(n,e.precondition)),t}function bC(n,e){return n&&n.length>0?(Be(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?or(o.updateTime):or(l);return h.isEqual(Ee.min())&&(h=or(l)),new yC(h,o.transformResults||[])}(t,e))):[]}function MC(n,e){return{documents:[mw(n,e.path)]}}function FC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=mw(n,o);const l=function(y){if(y.length!==0)return vw($n.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(w=>function(R){return{field:vo(R.field),direction:BC(R.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=hf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{_t:t,parent:o}}function UC(n){let e=OC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Be(i===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const R=yw(T);return R instanceof $n&&H_(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function($){return new vc(_o($.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(R))}(t.orderBy));let d=null;t.limit&&(d=function(T){let R;return R=typeof T=="object"?T.value:T,Lc(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(T){const R=!!T.before,M=T.values||[];return new yc(M,R)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const R=!T.before,M=T.values||[];return new yc(M,R)}(t.endAt)),rC(e,o,h,l,d,"F",p,y)}function jC(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=_o(t.unaryFilter.field);return ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=_o(t.unaryFilter.field);return ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return ct.create(_o(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $n.create(t.compositeFilter.filters.map(i=>yw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function BC(n){return CC[n]}function zC(n){return kC[n]}function $C(n){return NC[n]}function vo(n){return{fieldPath:n.canonicalString()}}function _o(n){return Nt.fromServerFormat(n.fieldPath)}function vw(n){return n instanceof ct?function(t){if(t.op==="=="){if(xy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:zC(t.op),value:t.value}}}(n):n instanceof $n?function(t){const i=t.getFilters().map(o=>vw(o));return i.length===1?i[0]:{compositeFilter:{op:$C(t.op),filters:i}}}(n):we()}function qC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _w(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),d=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.ct=e}}function HC(n){const e=UC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(){this.un=new GC}addToCollectionParentIndex(e,t){return this.un.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ii.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class GC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new xt(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new xt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xo(0)}static kn(){return new xo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.changes=new jo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Qa(i.mutation,o,fn.empty(),vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=ss();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Ba();return l.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ss();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,i,o){let l=Mr();const h=Ga(),d=function(){return Ga()}();return t.forEach((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Ci)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),Qa(w.mutation,y,w.mutation.getFieldMask(),vt.now())):h.set(y.key,fn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,w)=>h.set(y,w)),t.forEach((y,w)=>{var T;return d.set(y,new YC(w,(T=h.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Ga();let o=new tt((h,d)=>h-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||fn.empty();w=d.applyToLocalView(y,w),i.set(p,w);const T=(o.get(d.batchId)||Pe()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,w=p.value,T=tw();w.forEach(R=>{if(!l.has(R)){const M=aw(t.get(R),i.get(R));M!==null&&T.set(R,M),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Y_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ss());let d=-1,p=l;return h.next(y=>G.forEach(y,(w,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(w)?G.resolve():this.remoteDocumentCache.getEntry(e,w).next(R=>{p=p.insert(w,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Pe())).next(w=>({batchId:d,changes:ew(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next(i=>{let o=Ba();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ba();return this.indexManager.getCollectionParents(e,l).next(d=>G.forEach(d,p=>{const y=function(T,R){return new El(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(w=>{w.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Bt.newInvalidDocument(w)))});let d=Ba();return h.forEach((p,y)=>{const w=l.get(p);w!==void 0&&Qa(w.mutation,y,fn.empty(),vt.now()),Mc(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return G.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:HC(o.bundledQuery),readTime:or(o.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.overlays=new tt(fe.comparator),this.Ir=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ss();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.ht(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ss(),l=t.length+1,h=new fe(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt((y,w)=>y-w);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=ss(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const d=ss(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,w)=>d.set(y,w)),!(d.size()>=o)););return G.resolve(d)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new TC(t,i));let l=this.Ir.get(t);l===void 0&&(l=Pe(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.Tr=new xt(St.Er),this.dr=new xt(St.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new St(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new St(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new fe(new Qe([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.dr.forEachInRange([i,o],h=>{this.Vr(h),l.push(h.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new fe(new Qe([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.dr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new St(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return fe.comparator(e.key,t.key)||be(e.wr,t.wr)}static Ar(e,t){return be(e.wr,t.wr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new xt(St.Er)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new EC(l,t,i,o);this.mutationQueue.push(h);for(const d of o)this.br=this.br.add(new St(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],h=>{const d=this.Dr(h.wr);l.push(d)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new xt(be);return t.forEach(o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,h],d=>{i=i.add(d.wr)})}),G.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const h=new St(new fe(l),0);let d=new xt(be);return this.br.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.wr)),!0)},h),G.resolve(this.Cr(d))}Cr(e){const t=[];return e.forEach(i=>{const o=this.Dr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Be(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return G.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new St(t,0),o=this.br.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.Mr=e,this.docs=function(){return new tt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Mr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Mr();const h=t.path,d=new fe(h.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||FP(MP(w),i)<=0||(o.has(w.key)||Mc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we()}Or(e,t){return G.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new rk(this)}getSize(e){return G.resolve(this.size)}}class rk extends QC{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)}),G.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.persistence=e,this.Nr=new jo(t=>zf(t),$f),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qf,this.targetCount=0,this.kr=xo.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),G.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Kn(t),G.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach((h,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Nr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ff(0),this.Kr=!1,this.Kr=!0,this.$r=new ek,this.referenceDelegate=e(this),this.Ur=new ik(this),this.indexManager=new KC,this.remoteDocumentCache=function(o){return new nk(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new WC(t),this.Gr=new JC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ZC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new tk(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){ue("MemoryPersistence","Starting transaction:",e);const o=new ok(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return G.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class ok extends jP{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Jr=new Qf,this.Yr=null}static Zr(e){return new Yf(e)}get Xr(){if(this.Yr)return this.Yr;throw we()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),G.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Xr,i=>{const o=fe.fromPath(i);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Ee.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return G.or([()=>G.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Xf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return QI()?8:BP(zt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Zi(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new ak;return this.Xi(e,t,h).next(d=>{if(l.result=d,this.zi)return this.es(e,t,h,d.size)})}).next(()=>l.result)}es(e,t,i,o){return i.documentReadCount<this.ji?(ba()<=ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),G.resolve()):(ba()<=ke.DEBUG&&ue("QueryEngine","Query:",yo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(ba()<=ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ir(t))):G.resolve())}Yi(e,t){if(Ly(t))return G.resolve(null);let i=ir(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=cf(t,null,"F"),i=ir(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Pe(...l);return this.Ji.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.ts(t,d);return this.ns(t,y,h,p.readTime)?this.Yi(e,cf(t,null,"F")):this.rs(e,y,t,p)}))})))}Zi(e,t,i,o){return Ly(t)||o.isEqual(Ee.min())?G.resolve(null):this.Ji.getDocuments(e,i).next(l=>{const h=this.ts(t,l);return this.ns(t,h,i,o)?G.resolve(null):(ba()<=ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.rs(e,h,t,bP(o,-1)).next(d=>d))})}ts(e,t){let i=new xt(J_(e));return t.forEach((o,l)=>{Mc(e,l)&&(i=i.add(l))}),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return ba()<=ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",yo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ii.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new tt(be),this._s=new jo(l=>zf(l),$f),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ck(n,e,t,i){return new uk(n,e,t,i)}async function ww(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],d=[];let p=Pe();for(const y of o){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){d.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next(y=>({hs:y,removedBatchIds:h,addedBatchIds:d}))})})}function hk(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,w){const T=y.batch,R=T.keys();let M=G.resolve();return R.forEach($=>{M=M.next(()=>w.getEntry(p,$)).next(z=>{const U=y.docVersions.get($);Be(U!==null),z.version.compareTo(U)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),w.addEntry(z)))})}),M.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Pe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Ew(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function dk(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const d=[];e.targetChanges.forEach((w,T)=>{const R=o.get(T);if(!R)return;d.push(t.Ur.removeMatchingKeys(l,w.removedDocuments,T).next(()=>t.Ur.addMatchingKeys(l,w.addedDocuments,T)));let M=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?M=M.withResumeToken(Dt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(w.resumeToken,i)),o=o.insert(T,M),function(z,U,J){return z.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(R,M,w)&&d.push(t.Ur.updateTargetData(l,M))});let p=Mr(),y=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),d.push(fk(l,h,e.documentUpdates).next(w=>{p=w.Ps,y=w.Is})),!i.isEqual(Ee.min())){const w=t.Ur.getLastRemoteSnapshotVersion(l).next(T=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(w)}return G.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.os=o,l))}function fk(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Mr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):ue("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Ps:h,Is:o}})}function pk(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function mk(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ur.getTargetData(i,e).next(l=>l?(o=l,G.resolve(o)):t.Ur.allocateTargetId(i).next(h=>(o=new gi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function mf(n,e,t){const i=Te(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!wl(h))throw h;ue("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function Hy(n,e,t){const i=Te(n);let o=Ee.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,w){const T=Te(p),R=T._s.get(w);return R!==void 0?G.resolve(T.os.get(R)):T.Ur.getTargetData(y,w)}(i,h,ir(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(h,d.targetId).next(p=>{l=p})}).next(()=>i.ss.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:Pe())).next(d=>(gk(i,sC(e),d),{documents:d,Ts:l})))}function gk(n,e,t){let i=n.us.get(e)||Ee.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.us.set(e,i)}class Ky{constructor(){this.activeTargetIds=hC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yk{constructor(){this.so=new Ky,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ky,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu=null;function Md(){return Qu===null?Qu=function(){return 268435456+Math.round(2147483648*Math.random())}():Qu++,"0x"+Qu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class Ek extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,h){const d=Md(),p=this.xo(t,i.toUriEncodedString());ue("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,l,h),this.No(t,p,y,o).then(w=>(ue("RestConnection",`Received RPC '${t}' ${d}: `,w),w),w=>{throw Po("RestConnection",`RPC '${t}' ${d} failed with error: `,w,"url: ",p,"request:",o),w})}Lo(t,i,o,l,h,d){return this.Mo(t,i,o,l,h)}Oo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}xo(t,i){const o=_k[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=Md();return new Promise((h,d)=>{const p=new V_;p.setWithCredentials(!0),p.listenOnce(L_.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case nc.NO_ERROR:const w=p.getResponseJson();ue(Ut,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case nc.TIMEOUT:ue(Ut,`RPC '${e}' ${l} timed out`),d(new oe(W.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const T=p.getStatus();if(ue(Ut,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const M=R==null?void 0:R.error;if(M&&M.status&&M.message){const $=function(U){const J=U.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(J)>=0?J:W.UNKNOWN}(M.status);d(new oe($,M.message))}else d(new oe(W.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new oe(W.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ue(Ut,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ue(Ut,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Bo(e,t,i){const o=Md(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=F_(),d=M_(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");ue(Ut,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=h.createWebChannel(w,p);let R=!1,M=!1;const $=new wk({Io:U=>{M?ue(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(R||(ue(Ut,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),ue(Ut,`RPC '${e}' stream ${o} sending:`,U),T.send(U))},To:()=>T.close()}),z=(U,J,re)=>{U.listen(J,ae=>{try{re(ae)}catch(ye){setTimeout(()=>{throw ye},0)}})};return z(T,ja.EventType.OPEN,()=>{M||(ue(Ut,`RPC '${e}' stream ${o} transport opened.`),$.yo())}),z(T,ja.EventType.CLOSE,()=>{M||(M=!0,ue(Ut,`RPC '${e}' stream ${o} transport closed`),$.So())}),z(T,ja.EventType.ERROR,U=>{M||(M=!0,Po(Ut,`RPC '${e}' stream ${o} transport errored:`,U),$.So(new oe(W.UNAVAILABLE,"The operation could not be completed")))}),z(T,ja.EventType.MESSAGE,U=>{var J;if(!M){const re=U.data[0];Be(!!re);const ae=re,ye=ae.error||((J=ae[0])===null||J===void 0?void 0:J.error);if(ye){ue(Ut,`RPC '${e}' stream ${o} received error:`,ye);const Me=ye.status;let Re=function(P){const k=ut[P];if(k!==void 0)return cw(k)}(Me),x=ye.message;Re===void 0&&(Re=W.INTERNAL,x="Unknown error status: "+Me+" with message "+ye.message),M=!0,$.So(new oe(Re,x)),T.close()}else ue(Ut,`RPC '${e}' stream ${o} received:`,re),$.bo(re)}}),z(d,b_.STAT_EVENT,U=>{U.stat===rf.PROXY?ue(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===rf.NOPROXY&&ue(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.wo()},0),$}}function Fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){return new xC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,t,i,o,l,h,d,p){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Tw(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(br(t.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===t&&this.P_(i,o)},i=>{e(()=>{const o=new oe(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tk extends Iw{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=VC(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?or(h.readTime):Ee.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=pf(this.serializer),t.addTarget=function(l,h){let d;const p=h.target;if(d=lf(p)?{documents:MC(l,p)}:{query:FC(l,p)._t},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=fw(l,h.resumeToken);const y=hf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){d.readTime=wc(l,h.snapshotVersion.toTimestamp());const y=hf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=jC(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=pf(this.serializer),t.removeTarget=e,this.a_(t)}}class Ik extends Iw{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=bC(e.writeResults,e.commitTime),i=or(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=pf(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>LC(this.serializer,i))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new oe(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Mo(e,df(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new oe(W.UNKNOWN,l.toString())})}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.Lo(e,df(t,i),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(W.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ak{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(br(t),this.D_=!1):ue("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(h=>{i.enqueueAndForget(async()=>{Ts(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Te(p);y.L_.add(4),await Sl(y),y.q_.set("Unknown"),y.L_.delete(4),await zc(y)}(this))})}),this.q_=new Ak(i,o)}}async function zc(n){if(Ts(n))for(const e of n.B_)await e(!0)}async function Sl(n){for(const e of n.B_)await e(!1)}function Sw(n,e){const t=Te(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),tp(t)?ep(t):Bo(t).r_()&&Zf(t,e))}function Jf(n,e){const t=Te(n),i=Bo(t);t.N_.delete(e),i.r_()&&Aw(t,e),t.N_.size===0&&(i.r_()?i.o_():Ts(t)&&t.q_.set("Unknown"))}function Zf(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bo(n).A_(e)}function Aw(n,e){n.Q_.xe(e),Bo(n).R_(e)}function ep(n){n.Q_=new PC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Bo(n).start(),n.q_.v_()}function tp(n){return Ts(n)&&!Bo(n).n_()&&n.N_.size>0}function Ts(n){return Te(n).L_.size===0}function Rw(n){n.Q_=void 0}async function Pk(n){n.q_.set("Online")}async function Ck(n){n.N_.forEach((e,t)=>{Zf(n,e)})}async function kk(n,e){Rw(n),tp(n)?(n.q_.M_(e),ep(n)):n.q_.set("Unknown")}async function Nk(n,e,t){if(n.q_.set("Online"),e instanceof dw&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.N_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.N_.delete(d),o.Q_.removeTarget(d))}(n,e)}catch(i){ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ec(n,i)}else if(e instanceof sc?n.Q_.Ke(e):e instanceof hw?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ee.min()))try{const i=await Ew(n.localStore);t.compareTo(i)>=0&&await function(l,h){const d=l.Q_.rt(h);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.N_.get(y);w&&l.N_.set(y,w.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,y)=>{const w=l.N_.get(p);if(!w)return;l.N_.set(p,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),Aw(l,p);const T=new gi(w.target,p,y,w.sequenceNumber);Zf(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ue("RemoteStore","Failed to raise snapshot:",i),await Ec(n,i)}}async function Ec(n,e,t){if(!wl(e))throw e;n.L_.add(1),await Sl(n),n.q_.set("Offline"),t||(t=()=>Ew(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await zc(n)})}function Pw(n,e){return e().catch(t=>Ec(n,t,e))}async function $c(n){const e=Te(n),t=Ai(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xk(e);)try{const o=await pk(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,Dk(e,o)}catch(o){await Ec(e,o)}Cw(e)&&kw(e)}function xk(n){return Ts(n)&&n.O_.length<10}function Dk(n,e){n.O_.push(e);const t=Ai(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Cw(n){return Ts(n)&&!Ai(n).n_()&&n.O_.length>0}function kw(n){Ai(n).start()}async function Ok(n){Ai(n).p_()}async function Vk(n){const e=Ai(n);for(const t of n.O_)e.m_(t.mutations)}async function Lk(n,e,t){const i=n.O_.shift(),o=Hf.from(i,e,t);await Pw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await $c(n)}async function bk(n,e){e&&Ai(n).V_&&await async function(i,o){if(function(h){return SC(h)&&h!==W.ABORTED}(o.code)){const l=i.O_.shift();Ai(i).s_(),await Pw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await $c(i)}}(n,e),Cw(n)&&kw(n)}async function Qy(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const i=Ts(t);t.L_.add(3),await Sl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await zc(t)}async function Mk(n,e){const t=Te(n);e?(t.L_.delete(2),await zc(t)):e||(t.L_.add(2),await Sl(t),t.q_.set("Unknown"))}function Bo(n){return n.K_||(n.K_=function(t,i,o){const l=Te(t);return l.w_(),new Tk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Pk.bind(null,n),Ro:Ck.bind(null,n),mo:kk.bind(null,n),d_:Nk.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),tp(n)?ep(n):n.q_.set("Unknown")):(await n.K_.stop(),Rw(n))})),n.K_}function Ai(n){return n.U_||(n.U_=function(t,i,o){const l=Te(t);return l.w_(),new Ik(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Ok.bind(null,n),mo:bk.bind(null,n),f_:Vk.bind(null,n),g_:Lk.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await $c(n)):(await n.U_.stop(),n.O_.length>0&&(ue("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,d=new np(e,t,h,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(n,e){if(br("AsyncQueue",`${e}: ${n}`),wl(n))return new oe(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=Ba(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new So(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new So;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.W_=new tt(fe.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):we():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Do{constructor(e,t,i,o,l,h,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new Do(e,t,So.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Uk{constructor(){this.queries=Xy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=Xy(),l.forEach((h,d)=>{for(const p of d.j_)p.onError(i)})})(this,new oe(W.ABORTED,"Firestore shutting down"))}}function Xy(){return new jo(n=>X_(n),bc)}async function Nw(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new Fk,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=rp(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&ip(t)}async function xw(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.j_.indexOf(e);h>=0&&(l.j_.splice(h,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function jk(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.j_)d.X_(o)&&(i=!0);h.z_=o}}i&&ip(t)}function Bk(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function ip(n){n.Y_.forEach(e=>{e.next()})}var gf,Jy;(Jy=gf||(gf={})).ea="default",Jy.Cache="cache";class Dw{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Do(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==gf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.key=e}}class Vw{constructor(e){this.key=e}}class zk{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Pe(),this.mutatedKeys=Pe(),this.Aa=J_(e),this.Ra=new So(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Yy,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,T)=>{const R=o.get(w),M=Mc(this.query,T)?T:null,$=!!R&&this.mutatedKeys.has(R.key),z=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let U=!1;R&&M?R.data.isEqual(M.data)?$!==z&&(i.track({type:3,doc:M}),U=!0):this.ga(R,M)||(i.track({type:2,doc:M}),U=!0,(p&&this.Aa(M,p)>0||y&&this.Aa(M,y)<0)&&(d=!0)):!R&&M?(i.track({type:0,doc:M}),U=!0):R&&!M&&(i.track({type:1,doc:R}),U=!0,(p||y)&&(d=!0)),U&&(M?(h=h.add(M),l=z?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{Ra:h,fa:i,ns:d,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort((w,T)=>function(M,$){const z=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return z(M)-z($)}(w.type,T.type)||this.Aa(w.doc,T.doc)),this.pa(i),o=o!=null&&o;const d=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,y=p!==this.Ea;return this.Ea=p,h.length!==0||y?{snapshot:new Do(this.query,e.Ra,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Pe(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new Vw(i))}),this.da.forEach(i=>{e.has(i)||t.push(new Ow(i))}),t}ba(e){this.Ta=e.Ts,this.da=Pe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Do.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class $k{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class qk{constructor(e){this.key=e,this.va=!1}}class Wk{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new jo(d=>X_(d),bc),this.Ma=new Map,this.xa=new Set,this.Oa=new tt(fe.comparator),this.Na=new Map,this.La=new Qf,this.Ba={},this.ka=new Map,this.qa=xo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hk(n,e,t=!0){const i=jw(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await Lw(i,e,t,!0),o}async function Kk(n,e){const t=jw(n);await Lw(t,e,!0,!1)}async function Lw(n,e,t,i){const o=await mk(n.localStore,ir(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await Gk(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Sw(n.remoteStore,o),d}async function Gk(n,e,t,i,o){n.Ka=(T,R,M)=>async function(z,U,J,re){let ae=U.view.ma(J);ae.ns&&(ae=await Hy(z.localStore,U.query,!1).then(({documents:x})=>U.view.ma(x,ae)));const ye=re&&re.targetChanges.get(U.targetId),Me=re&&re.targetMismatches.get(U.targetId)!=null,Re=U.view.applyChanges(ae,z.isPrimaryClient,ye,Me);return ev(z,U.targetId,Re.wa),Re.snapshot}(n,T,R,M);const l=await Hy(n.localStore,e,!0),h=new zk(e,l.Ts),d=h.ma(l.documents),p=Il.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,p);ev(n,t,y.wa);const w=new $k(e,t,h);return n.Fa.set(e,w),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),y.snapshot}async function Qk(n,e,t){const i=Te(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter(h=>!bc(h,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await mf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Jf(i.remoteStore,o.targetId),yf(i,o.targetId)}).catch(_l)):(yf(i,o.targetId),await mf(i.localStore,o.targetId,!0))}async function Yk(n,e){const t=Te(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Jf(t.remoteStore,i.targetId))}async function Xk(n,e,t){const i=i1(n);try{const o=await function(h,d){const p=Te(h),y=vt.now(),w=d.reduce((M,$)=>M.add($.key),Pe());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",M=>{let $=Mr(),z=Pe();return p.cs.getEntries(M,w).next(U=>{$=U,$.forEach((J,re)=>{re.isValidDocument()||(z=z.add(J))})}).next(()=>p.localDocuments.getOverlayedDocuments(M,$)).next(U=>{T=U;const J=[];for(const re of d){const ae=_C(re,T.get(re.key).overlayedDocument);ae!=null&&J.push(new Ci(re.key,ae,$_(ae.value.mapValue),sr.exists(!0)))}return p.mutationQueue.addMutationBatch(M,y,J,d)}).next(U=>{R=U;const J=U.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(M,U.batchId,J)})}).then(()=>({batchId:R.batchId,changes:ew(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let y=h.Ba[h.currentUser.toKey()];y||(y=new tt(be)),y=y.insert(d,p),h.Ba[h.currentUser.toKey()]=y}(i,o.batchId,t),await Al(i,o.changes),await $c(i.remoteStore)}catch(o){const l=rp(o,"Failed to persist write");t.reject(l)}}async function bw(n,e){const t=Te(n);try{const i=await dk(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Na.get(l);h&&(Be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?Be(h.va):o.removedDocuments.size>0&&(Be(h.va),h.va=!1))}),await Al(t,i,e)}catch(i){await _l(i)}}function Zy(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach((l,h)=>{const d=h.view.Z_(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Te(h);p.onlineState=d;let y=!1;p.queries.forEach((w,T)=>{for(const R of T.j_)R.Z_(d)&&(y=!0)}),y&&ip(p)}(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Jk(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let h=new tt(fe.comparator);h=h.insert(l,Bt.newNoDocument(l,Ee.min()));const d=Pe().add(l),p=new jc(Ee.min(),new Map,new tt(be),h,d);await bw(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),sp(i)}else await mf(i.localStore,e,!1).then(()=>yf(i,e,t)).catch(_l)}async function Zk(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await hk(t.localStore,e);Fw(t,i,null),Mw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Al(t,o)}catch(o){await _l(o)}}async function e1(n,e,t){const i=Te(n);try{const o=await function(h,d){const p=Te(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Be(T!==null),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>p.localDocuments.getDocuments(y,w))})}(i.localStore,e);Fw(i,e,t),Mw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Al(i,o)}catch(o){await _l(o)}}function Mw(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Fw(n,e,t){const i=Te(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function yf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||Uw(n,i)})}function Uw(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Jf(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),sp(n))}function ev(n,e,t){for(const i of t)i instanceof Ow?(n.La.addReference(i.key,e),t1(n,i)):i instanceof Vw?(ue("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||Uw(n,i.key)):we()}function t1(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(ue("SyncEngine","New document in limbo: "+t),n.xa.add(i),sp(n))}function sp(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new fe(Qe.fromString(e)),i=n.qa.next();n.Na.set(i,new qk(t)),n.Oa=n.Oa.insert(t,i),Sw(n.remoteStore,new gi(ir(qf(t.path)),i,"TargetPurposeLimboResolution",Ff.oe))}}async function Al(n,e,t){const i=Te(n),o=[],l=[],h=[];i.Fa.isEmpty()||(i.Fa.forEach((d,p)=>{h.push(i.Ka(p,e,t).then(y=>{var w;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Xf.Wi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ca.d_(o),await async function(p,y){const w=Te(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,R=>G.forEach(R.$i,M=>w.persistence.referenceDelegate.addReference(T,R.targetId,M)).next(()=>G.forEach(R.Ui,M=>w.persistence.referenceDelegate.removeReference(T,R.targetId,M)))))}catch(T){if(!wl(T))throw T;ue("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const M=w.os.get(R),$=M.snapshotVersion,z=M.withLastLimboFreeSnapshotVersion($);w.os=w.os.insert(R,z)}}}(i.localStore,l))}async function n1(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const i=await ww(t.localStore,e);t.currentUser=e,function(l,h){l.ka.forEach(d=>{d.forEach(p=>{p.reject(new oe(W.CANCELLED,h))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Al(t,i.hs)}}function r1(n,e){const t=Te(n),i=t.Na.get(e);if(i&&i.va)return Pe().add(i.key);{let o=Pe();const l=t.Ma.get(e);if(!l)return o;for(const h of l){const d=t.Fa.get(h);o=o.unionWith(d.view.Va)}return o}}function jw(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jk.bind(null,e),e.Ca.d_=jk.bind(null,e.eventManager),e.Ca.$a=Bk.bind(null,e.eventManager),e}function i1(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e1.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ck(this.persistence,new lk,e.initialUser,this.serializer)}Ga(e){return new sk(Yf.Zr,this.serializer)}Wa(e){return new yk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class vf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Zy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=n1.bind(null,this.syncEngine),await Mk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uk}()}createDatastore(e){const t=Bc(e.databaseInfo.databaseId),i=function(l){return new Ek(l)}(e.databaseInfo);return function(l,h,d,p){return new Sk(l,h,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,d){return new Rk(i,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Zy(this.syncEngine,t,0),function(){return Gy.D()?new Gy:new vk}())}createSyncEngine(e,t){return function(o,l,h,d,p,y,w){const T=new Wk(o,l,h,d,p,y);return w&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Te(o);ue("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Sl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vf.provider={build:()=>new vf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=j_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ue("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ue("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=rp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ud(n,e){n.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await ww(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function tv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await o1(n);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Qy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Qy(e.remoteStore,o)),n._onlineComponents=e}async function o1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ud(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Po("Error using user provided cache. Falling back to memory cache: "+t),await Ud(n,new Tc)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await Ud(n,new Tc);return n._offlineComponents}async function zw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await tv(n,n._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await tv(n,new vf))),n._onlineComponents}function a1(n){return zw(n).then(e=>e.syncEngine)}async function _f(n){const e=await zw(n),t=e.eventManager;return t.onListen=Hk.bind(null,e.syncEngine),t.onUnlisten=Qk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Kk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Yk.bind(null,e.syncEngine),t}function l1(n,e,t={}){const i=new Ei;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const w=new Bw({next:R=>{w.Za(),h.enqueueAndForget(()=>xw(l,T)),R.fromCache&&p.source==="server"?y.reject(new oe(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new Dw(d,w,{includeMetadataChanges:!0,_a:!0});return Nw(l,T)}(await _f(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n,e,t){if(!t)throw new oe(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function u1(n,e,t,i){if(e===!0&&i===!0)throw new oe(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rv(n){if(!fe.isDocumentKey(n))throw new oe(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function iv(n){if(fe.isDocumentKey(n))throw new oe(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function Dr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qc(n);throw new oe(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$w((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new oe(W.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new PP;switch(i.type){case"firstParty":return new xP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new oe(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=nv.get(t);i&&(ue("ComponentProvider","Removing Datastore"),nv.delete(t),i.terminate())}(this),Promise.resolve()}}function c1(n,e,t,i={}){var o;const l=(n=Dr(n,Wc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=jt.MOCK_USER;else{d=$I(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new oe(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new jt(y)}n._authCredentials=new CP(new U_(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class rn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rn(this.firestore,e,this._key)}}class Ti extends Is{constructor(e,t,i){super(e,t,qf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rn(this.firestore,null,new fe(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function Ao(n,e,...t){if(n=dt(n),qw("collection","path",e),n instanceof Wc){const i=Qe.fromString(e,...t);return iv(i),new Ti(n,null,i)}{if(!(n instanceof rn||n instanceof Ti))throw new oe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return iv(i),new Ti(n.firestore,null,i)}}function Ww(n,e,...t){if(n=dt(n),arguments.length===1&&(e=j_.newId()),qw("doc","path",e),n instanceof Wc){const i=Qe.fromString(e,...t);return rv(i),new rn(n,null,new fe(i))}{if(!(n instanceof rn||n instanceof Ti))throw new oe(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return rv(i),new rn(n.firestore,n instanceof Ti?n.converter:null,new fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Tw(this,"async_queue_retry"),this.Vu=()=>{const i=Fd();i&&ue("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Fd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Fd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ei;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wl(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(i);throw br("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=np.createAndSchedule(this,e,t,i,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&we()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function av(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Oo extends Wc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new ov,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ov(e),this._firestoreClient=void 0,await e}}}function h1(n,e){const t=typeof n=="object"?n:Pf(),i=typeof n=="string"?n:"(default)",o=_s(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=BI("firestore");l&&c1(o,...l)}return o}function op(n){if(n._terminated)throw new oe(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||d1(n),n._firestoreClient}function d1(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,w){return new qP(d,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,$w(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new s1(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(Dt.fromBase64String(e))}catch(t){throw new oe(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vo(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=/^__.*__$/;class p1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tl(e,this.data,t,this.fieldTransforms)}}class Hw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class up{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new up(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ic(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Kw(this.Cu)&&f1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class m1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Bc(e)}Qu(e,t,i,o=!1){return new up({Cu:e,methodName:t,qu:i,path:Nt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cp(n){const e=n._freezeSettings(),t=Bc(n._databaseId);return new m1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function g1(n,e,t,i,o,l={}){const h=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);dp("Data must be an object, but it was:",h,i);const d=Gw(i,h);let p,y;if(l.merge)p=new fn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const R=wf(e,T,t);if(!h.contains(R))throw new oe(W.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Yw(w,R)||w.push(R)}p=new fn(w),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new p1(new nn(d),p,y)}class Gc extends Kc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}class hp extends Kc{_toFieldTransform(e){return new mC(e.path,new cl)}isEqual(e){return e instanceof hp}}function y1(n,e,t,i){const o=n.Qu(1,e,t);dp("Data must be an object, but it was:",o,i);const l=[],h=nn.empty();Es(i,(p,y)=>{const w=fp(e,p,t);y=dt(y);const T=o.Nu(w);if(y instanceof Gc)l.push(w);else{const R=Rl(y,T);R!=null&&(l.push(w),h.set(w,R))}});const d=new fn(l);return new Hw(h,d,o.fieldTransforms)}function v1(n,e,t,i,o,l){const h=n.Qu(1,e,t),d=[wf(e,i,t)],p=[o];if(l.length%2!=0)throw new oe(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)d.push(wf(e,l[R])),p.push(l[R+1]);const y=[],w=nn.empty();for(let R=d.length-1;R>=0;--R)if(!Yw(y,d[R])){const M=d[R];let $=p[R];$=dt($);const z=h.Nu(M);if($ instanceof Gc)y.push(M);else{const U=Rl($,z);U!=null&&(y.push(M),w.set(M,U))}}const T=new fn(y);return new Hw(w,T,h.fieldTransforms)}function _1(n,e,t,i=!1){return Rl(t,n.Qu(i?4:3,e))}function Rl(n,e){if(Qw(n=dt(n)))return dp("Unsupported field value:",e,n),Gw(n,e);if(n instanceof Kc)return function(i,o){if(!Kw(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const d of i){let p=Rl(d,o.Lu(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=dt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return dC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=vt.fromDate(i);return{timestampValue:wc(o.serializer,l)}}if(i instanceof vt){const l=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:wc(o.serializer,l)}}if(i instanceof ap)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Vo)return{bytesValue:fw(o.serializer,i._byteString)};if(i instanceof rn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Gf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof lp)return function(h,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw d.Bu("VectorValues must only contain numeric values.");return Wf(d.serializer,p)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${qc(i)}`)}(n,e)}function Gw(n,e){const t={};return B_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(n,(i,o)=>{const l=Rl(o,e.Mu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function Qw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof ap||n instanceof Vo||n instanceof rn||n instanceof Kc||n instanceof lp)}function dp(n,e,t){if(!Qw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=qc(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function wf(n,e,t){if((e=dt(e))instanceof Hc)return e._internalPath;if(typeof e=="string")return fp(n,e);throw Ic("Field path arguments must be of type string or ",n,!1,void 0,t)}const w1=new RegExp("[~\\*/\\[\\]]");function fp(n,e,t){if(e.search(w1)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hc(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ic(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new oe(W.INVALID_ARGUMENT,d+n+p)}function Yw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new E1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class E1 extends Xw{data(){return super.data()}}function pp(n,e){return typeof e=="string"?fp(n,e):e instanceof Hc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mp{}class T1 extends mp{}function Ya(n,e,...t){let i=[];e instanceof mp&&i.push(e),i=i.concat(t),function(l){const h=l.filter(p=>p instanceof gp).length,d=l.filter(p=>p instanceof Qc).length;if(h>1||h>0&&d>0)throw new oe(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Qc extends T1{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Qc(e,t,i)}_apply(e){const t=this._parse(e);return Zw(e._query,t),new Is(e.firestore,e.converter,uf(e._query,t))}_parse(e){const t=cp(e.firestore);return function(l,h,d,p,y,w,T){let R;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new oe(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){uv(T,w);const M=[];for(const $ of T)M.push(lv(p,l,$));R={arrayValue:{values:M}}}else R=lv(p,l,T)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||uv(T,w),R=_1(d,h,T,w==="in"||w==="not-in");return ct.create(y,w,R)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Xa(n,e,t){const i=e,o=pp("where",n);return Qc._create(o,i,t)}class gp extends mp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:$n.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const p of d)Zw(h,p),h=uf(h,p)}(e._query,t),new Is(e.firestore,e.converter,uf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function lv(n,e,t){if(typeof(t=dt(t))=="string"){if(t==="")throw new oe(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Y_(e)&&t.indexOf("/")!==-1)throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!fe.isDocumentKey(i))throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ky(n,new fe(i))}if(t instanceof rn)return ky(n,t._key);throw new oe(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qc(t)}.`)}function uv(n,e){if(!Array.isArray(n)||n.length===0)throw new oe(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zw(n,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new oe(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class I1{convertValue(e,t="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Es(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>ot(h.doubleValue));return new lp(l)}convertGeoPoint(e){return new ap(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=jf(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const t=Si(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);Be(_w(i));const o=new ll(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class e0 extends Xw{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(pp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class oc extends e0{data(e={}){return super.data(e)}}class t0{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new $a(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new oc(this._firestore,this._userDataWriter,i.key,i,new $a(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new oc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new $a(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new oc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new $a(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),w=h.indexOf(d.doc.key)),{type:A1(d.type),doc:p,oldIndex:y,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function A1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class yp extends I1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rn(this.firestore,null,t)}}function Ef(n){n=Dr(n,Is);const e=Dr(n.firestore,Oo),t=op(e),i=new yp(e);return Jw(n._query),l1(t,n._query).then(o=>new t0(e,i,n,o))}function R1(n,e,t,...i){n=Dr(n,rn);const o=Dr(n.firestore,Oo),l=cp(o);let h;return h=typeof(e=dt(e))=="string"||e instanceof Hc?v1(l,"updateDoc",n._key,e,t,i):y1(l,"updateDoc",n._key,e),r0(o,[h.toMutation(n._key,sr.exists(!0))])}function P1(n,e){const t=Dr(n.firestore,Oo),i=Ww(n),o=S1(n.converter,e);return r0(t,[g1(cp(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,sr.exists(!1))]).then(()=>i)}function n0(n,...e){var t,i,o;n=dt(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||av(e[h])||(l=e[h],h++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(av(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,w;if(n instanceof rn)y=Dr(n.firestore,Oo),w=qf(n._key.path),p={next:T=>{e[h]&&e[h](C1(y,n,T))},error:e[h+1],complete:e[h+2]};else{const T=Dr(n,Is);y=Dr(T.firestore,Oo),w=T._query;const R=new yp(y);p={next:M=>{e[h]&&e[h](new t0(y,R,T,M))},error:e[h+1],complete:e[h+2]},Jw(n._query)}return function(R,M,$,z){const U=new Bw(z),J=new Dw(M,U,$);return R.asyncQueue.enqueueAndForget(async()=>Nw(await _f(R),J)),()=>{U.Za(),R.asyncQueue.enqueueAndForget(async()=>xw(await _f(R),J))}}(op(y),w,d,p)}function r0(n,e){return function(i,o){const l=new Ei;return i.asyncQueue.enqueueAndForget(async()=>Xk(await a1(i),o,l)),l.promise}(op(n),e)}function C1(n,e,t){const i=t.docs.get(e._key),o=new yp(n);return new e0(n,o,e._key,i,new $a(t.hasPendingWrites,t.fromCache),e.converter)}function k1(){return new hp("serverTimestamp")}(function(e,t=!0){(function(o){Uo=o})(bo),ar(new Bn("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),d=new Oo(new kP(i.getProvider("auth-internal")),new OP(i.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new oe(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(y.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),An(Sy,"4.7.3",e),An(Sy,"4.7.3","esm2017")})();const i0="@firebase/installations",vp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=1e4,o0=`w:${vp}`,a0="FIS_v2",N1="https://firebaseinstallations.googleapis.com/v1",x1=60*60*1e3,D1="installations",O1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fs=new vs(D1,O1,V1);function l0(n){return n instanceof qn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0({projectId:n}){return`${N1}/projects/${n}/installations`}function c0(n){return{token:n.token,requestStatus:2,expiresIn:b1(n.expiresIn),creationTime:Date.now()}}async function h0(n,e){const i=(await e.json()).error;return fs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function d0({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function L1(n,{refreshToken:e}){const t=d0(n);return t.append("Authorization",M1(e)),t}async function f0(n){const e=await n();return e.status>=500&&e.status<600?n():e}function b1(n){return Number(n.replace("s","000"))}function M1(n){return`${a0} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=u0(n),o=d0(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:a0,appId:n.appId,sdkVersion:o0},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await f0(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:c0(y.authToken)}}else throw await h0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=/^[cdef][\w-]{21}$/,Tf="";function B1(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=z1(n);return j1.test(t)?t:Tf}catch{return Tf}}function z1(n){return U1(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Map;function g0(n,e){const t=Yc(n);y0(t,e),$1(t,e)}function y0(n,e){const t=m0.get(n);if(t)for(const i of t)i(e)}function $1(n,e){const t=q1();t&&t.postMessage({key:n,fid:e}),W1()}let os=null;function q1(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=n=>{y0(n.data.key,n.data.fid)}),os}function W1(){m0.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="firebase-installations-database",K1=1,ps="firebase-installations-store";let jd=null;function _p(){return jd||(jd=Yv(H1,K1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ps)}}})),jd}async function Sc(n,e){const t=Yc(n),o=(await _p()).transaction(ps,"readwrite"),l=o.objectStore(ps),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&g0(n,e.fid),e}async function v0(n){const e=Yc(n),i=(await _p()).transaction(ps,"readwrite");await i.objectStore(ps).delete(e),await i.done}async function Xc(n,e){const t=Yc(n),o=(await _p()).transaction(ps,"readwrite"),l=o.objectStore(ps),h=await l.get(t),d=e(h);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&g0(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n){let e;const t=await Xc(n.appConfig,i=>{const o=G1(i),l=Q1(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Tf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function G1(n){const e=n||{fid:B1(),registrationStatus:0};return _0(e)}function Q1(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(fs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Y1(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:X1(n)}:{installationEntry:e}}async function Y1(n,e){try{const t=await F1(n,e);return Sc(n.appConfig,t)}catch(t){throw l0(t)&&t.customData.serverCode===409?await v0(n.appConfig):await Sc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function X1(n){let e=await cv(n.appConfig);for(;e.registrationStatus===1;)await p0(100),e=await cv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await wp(n);return i||t}return e}function cv(n){return Xc(n,e=>{if(!e)throw fs.create("installation-not-found");return _0(e)})}function _0(n){return J1(n)?{fid:n.fid,registrationStatus:0}:n}function J1(n){return n.registrationStatus===1&&n.registrationTime+s0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1({appConfig:n,heartbeatServiceProvider:e},t){const i=eN(n,t),o=L1(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:o0,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await f0(()=>fetch(i,d));if(p.ok){const y=await p.json();return c0(y)}else throw await h0("Generate Auth Token",p)}function eN(n,{fid:e}){return`${u0(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(n,e=!1){let t;const i=await Xc(n.appConfig,l=>{if(!w0(l))throw fs.create("not-registered");const h=l.authToken;if(!e&&rN(h))return l;if(h.requestStatus===1)return t=tN(n,e),l;{if(!navigator.onLine)throw fs.create("app-offline");const d=sN(l);return t=nN(n,d),d}});return t?await t:i.authToken}async function tN(n,e){let t=await hv(n.appConfig);for(;t.authToken.requestStatus===1;)await p0(100),t=await hv(n.appConfig);const i=t.authToken;return i.requestStatus===0?Ep(n,e):i}function hv(n){return Xc(n,e=>{if(!w0(e))throw fs.create("not-registered");const t=e.authToken;return oN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nN(n,e){try{const t=await Z1(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Sc(n.appConfig,i),t}catch(t){if(l0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await v0(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sc(n.appConfig,i)}throw t}}function w0(n){return n!==void 0&&n.registrationStatus===2}function rN(n){return n.requestStatus===2&&!iN(n)}function iN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+x1}function sN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function oN(n){return n.requestStatus===1&&n.requestTime+s0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(n){const e=n,{installationEntry:t,registrationPromise:i}=await wp(e);return i?i.catch(console.error):Ep(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(n,e=!1){const t=n;return await uN(t),(await Ep(t,e)).token}async function uN(n){const{registrationPromise:e}=await wp(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(n){if(!n||!n.options)throw Bd("App Configuration");if(!n.name)throw Bd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Bd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Bd(n){return fs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="installations",hN="installations-internal",dN=n=>{const e=n.getProvider("app").getImmediate(),t=cN(e),i=_s(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},fN=n=>{const e=n.getProvider("app").getImmediate(),t=_s(e,E0).getImmediate();return{getId:()=>aN(t),getToken:o=>lN(t,o)}};function pN(){ar(new Bn(E0,dN,"PUBLIC")),ar(new Bn(hN,fN,"PRIVATE"))}pN();An(i0,vp);An(i0,vp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="analytics",mN="firebase_id",gN="origin",yN=60*1e3,vN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Nc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new vs("analytics","Analytics",_N);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(n){if(!n.startsWith(Tp)){const e=pn.create("invalid-gtag-resource",{gtagURL:n});return sn.warn(e.message),""}return n}function T0(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function EN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function TN(n,e){const t=EN("firebase-js-sdk-policy",{createScriptURL:wN}),i=document.createElement("script"),o=`${Tp}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function IN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function SN(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const p=(await T0(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){sn.error(d)}n("config",o,l)}async function AN(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await T0(t);for(const p of h){const y=d.find(T=>T.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){sn.error(l)}}function RN(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[d,p]=h;await AN(n,e,t,d,p)}else if(l==="config"){const[d,p]=h;await SN(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=h;n("consent",d,p)}else if(l==="get"){const[d,p,y]=h;n("get",d,p,y)}else if(l==="set"){const[d]=h;n("set",d)}else n(l,...h)}catch(d){sn.error(d)}}return o}function PN(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=RN(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function CN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tp)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=30,NN=1e3;class xN{constructor(e={},t=NN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const I0=new xN;function DN(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ON(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:DN(i)},l=vN.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function VN(n,e=I0,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw pn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw pn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new MN;return setTimeout(async()=>{d.abort()},yN),S0({appId:i,apiKey:o,measurementId:l},h,d,e)}async function S0(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=I0){var l;const{appId:h,measurementId:d}=n;try{await LN(i,e)}catch(p){if(d)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await ON(n);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!bN(y)){if(o.deleteThrottleMetadata(h),d)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:d};throw p}const w=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Gg(t,o.intervalMillis,kN):Gg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,T),sn.debug(`Calling attemptFetch again in ${w} millis`),S0(n,T,i,o)}}function LN(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bN(n){if(!(n instanceof qn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class MN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function FN(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});n("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(){if(Hv())try{await Kv()}catch(n){return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function jN(n,e,t,i,o,l,h){var d;const p=VN(n);p.then(M=>{t[M.measurementId]=M.appId,n.options.measurementId&&M.measurementId!==n.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${M.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(M=>sn.error(M)),e.push(p);const y=UN().then(M=>{if(M)return i.getId()}),[w,T]=await Promise.all([p,y]);CN(l)||TN(l,w.measurementId),o("js",new Date);const R=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return R[gN]="firebase",R.update=!0,T!=null&&(R[mN]=T),o("config",w.measurementId,R),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.app=e}_delete(){return delete Ja[this.app.options.appId],Promise.resolve()}}let Ja={},dv=[];const fv={};let zd="dataLayer",zN="gtag",pv,A0,mv=!1;function $N(){const n=[];if(Wv()&&n.push("This is a browser extension environment."),YI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=pn.create("invalid-analytics-context",{errorInfo:e});sn.warn(t.message)}}function qN(n,e,t){$N();const i=n.options.appId;if(!i)throw pn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(Ja[i]!=null)throw pn.create("already-exists",{id:i});if(!mv){IN(zd);const{wrappedGtag:l,gtagCore:h}=PN(Ja,dv,fv,zd,zN);A0=l,pv=h,mv=!0}return Ja[i]=jN(n,dv,fv,e,pv,zd,t),new BN(n)}function WN(n=Pf()){n=dt(n);const e=_s(n,Ac);return e.isInitialized()?e.getImmediate():HN(n)}function HN(n,e={}){const t=_s(n,Ac);if(t.isInitialized()){const o=t.getImmediate();if(nl(e,t.getOptions()))return o;throw pn.create("already-initialized")}return t.initialize({options:e})}function KN(n,e,t,i){n=dt(n),FN(A0,Ja[n.app.options.appId],e,t,i).catch(o=>sn.error(o))}const gv="@firebase/analytics",yv="0.10.8";function GN(){ar(new Bn(Ac,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return qN(i,o,t)},"PUBLIC")),ar(new Bn("analytics-internal",n,"PRIVATE")),An(gv,yv),An(gv,yv,"esm2017");function n(e){try{const t=e.getProvider(Ac).getImmediate();return{logEvent:(i,o,l)=>KN(t,i,o,l)}}catch(t){throw pn.create("interop-component-reg-failed",{reason:t})}}}GN();const QN={apiKey:"AIzaSyBTQ1hwH7BCmoQZDjskIOtLqfT7iGvDefA",authDomain:"dextra255.firebaseapp.com",projectId:"dextra255",storageBucket:"dextra255.firebasestorage.app",messagingSenderId:"118598941051",appId:"1:118598941051:web:879e2c59f7a594eba0a5de",measurementId:"G-WS844VWJTW"},Ip=Xv(QN),Za=AP(Ip),as=h1(Ip);WN(Ip);var $d={exports:{}},Ma={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function YN(){if(vv)return Ma;vv=1;var n=If(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,y){var w,T={},R=null,M=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(M=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(d&&d.defaultProps)for(w in p=d.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:d,key:R,ref:M,props:T,_owner:o.current}}return Ma.Fragment=t,Ma.jsx=h,Ma.jsxs=h,Ma}var _v;function XN(){return _v||(_v=1,$d.exports=YN()),$d.exports}var R0=XN();const ce=R0.jsx,Le=R0.jsxs;function JN(){const[n,e]=tn.useState(!1);return tn.useEffect(()=>{const t=pR(Za,async i=>{if(i){const o=Ao(as,"admins"),l=Ya(o,Xa("user_id","==",i.uid)),h=await Ef(l);e(!h.empty)}else e(!1)});return()=>t()},[]),ce("header",{className:"bg-[#045307] text-white",children:ce("div",{className:"container mx-auto px-4 py-6",children:Le("div",{className:"flex items-center justify-between",children:[Le($u,{to:"/",className:"flex items-center space-x-2",children:[ce(OI,{size:32}),ce("span",{className:"text-2xl font-bold",children:"Chorulla Palli"})]}),Le("nav",{className:"flex items-center space-x-6",children:[ce($u,{to:"/",className:"hover:text-[#C8A2C8] transition",children:"Home"}),ce($u,{to:"/places",className:"hover:text-[#C8A2C8] transition",children:"Places"}),n&&ce($u,{to:"/admin",className:"hover:text-[#C8A2C8] transition",children:"Admin"})]})]})})})}function ZN(){const[n,e]=tn.useState(!1);return Le("form",{onSubmit:async i=>{var h;i.preventDefault(),e(!0);const o=new FormData(i.currentTarget),l={name:o.get("name"),district:o.get("district"),visiting_time:o.get("visiting_time"),description:o.get("description"),image_url:o.get("image_url"),status:"pending",created_at:k1(),user_id:((h=Za.currentUser)==null?void 0:h.uid)||null};try{await P1(Ao(as,"places"),l),et.success("Place submitted successfully!"),i.currentTarget.reset()}catch{et.error("Failed to submit place")}finally{e(!1)}},className:"space-y-6 max-w-2xl mx-auto",children:[Le("div",{children:[ce("label",{className:"block text-sm font-medium text-gray-700",children:"Place Name"}),ce("input",{type:"text",name:"name",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"})]}),Le("div",{children:[ce("label",{className:"block text-sm font-medium text-gray-700",children:"District"}),ce("input",{type:"text",name:"district",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"})]}),Le("div",{children:[ce("label",{className:"block text-sm font-medium text-gray-700",children:"Best Time to Visit"}),ce("input",{type:"text",name:"visiting_time",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"})]}),Le("div",{children:[ce("label",{className:"block text-sm font-medium text-gray-700",children:"Description"}),ce("textarea",{name:"description",rows:4,required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"})]}),Le("div",{children:[ce("label",{className:"block text-sm font-medium text-gray-700",children:"Image URL"}),ce("input",{type:"url",name:"image_url",required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"})]}),ce("button",{type:"submit",disabled:n,className:"w-full bg-[#045307] text-white py-2 px-4 rounded-md hover:bg-[#034206] transition disabled:opacity-50",children:n?"Submitting...":"Submit Place"})]})}function ex(){return Le("div",{className:"min-h-screen bg-gray-50",children:[ce("div",{className:"bg-[#045307] text-white py-20",children:Le("div",{className:"container mx-auto px-4 text-center",children:[ce("h1",{className:"text-4xl font-bold mb-4",children:"Welcome to Chorulla Palli"}),ce("p",{className:"text-xl max-w-2xl mx-auto",children:"Discover and share beautiful places across our region. Submit your favorite locations and help others explore the hidden gems of our land."})]})}),ce("div",{className:"container mx-auto px-4 py-12",children:Le("div",{className:"bg-white rounded-lg shadow-xl p-8",children:[ce("h2",{className:"text-2xl font-bold text-center mb-8",children:"Submit a New Place"}),ce(ZN,{})]})})]})}function tx(){const[n,e]=tn.useState([]),[t,i]=tn.useState(!0);return tn.useEffect(()=>{const o=Ya(Ao(as,"places"),Xa("status","==","approved")),l=n0(o,h=>{const d=h.docs.map(p=>({id:p.id,...p.data()}));e(d),i(!1)},h=>{console.error("Error fetching places:",h),i(!1)});return()=>l()},[]),t?ce("div",{className:"container mx-auto px-4 py-12 text-center",children:ce("div",{className:"animate-pulse",children:"Loading places..."})}):Le("div",{className:"container mx-auto px-4 py-12",children:[ce("h1",{className:"text-3xl font-bold text-center mb-12",children:"Explore Beautiful Places"}),ce("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map(o=>Le("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:[ce("img",{src:o.image_url,alt:o.name,className:"w-full h-48 object-cover"}),Le("div",{className:"p-6",children:[ce("h3",{className:"text-xl font-bold mb-2",children:o.name}),Le("p",{className:"text-gray-600 mb-2",children:["District: ",o.district]}),Le("p",{className:"text-gray-600 mb-4",children:["Best Time: ",o.visiting_time]}),ce("p",{className:"text-gray-700",children:o.description})]})]},o.id))})]})}function nx(){kv();const[n,e]=tn.useState([]),[t,i]=tn.useState(!0),[o,l]=tn.useState(!1),[h,d]=tn.useState(!0),[p,y]=tn.useState(""),[w,T]=tn.useState("");tn.useEffect(()=>{const z=Za.onAuthStateChanged(async U=>{if(!U){d(!1);return}try{const J=Ya(Ao(as,"admins"),Xa("user_id","==",U.uid)),re=await Ef(J);l(!re.empty),re.empty||R()}catch(J){console.error("Error checking admin status:",J),et.error("Error checking admin status")}finally{d(!1)}});return()=>z()},[]);const R=()=>{const z=Ya(Ao(as,"places"),Xa("status","==","pending"));return n0(z,U=>{const J=U.docs.map(re=>({id:re.id,...re.data()}));e(J),i(!1)},U=>{console.error("Error fetching places:",U),et.error("Failed to fetch places"),i(!1)})},M=async(z,U)=>{try{const J=Ww(as,"places",z);await R1(J,{status:U}),et.success(`Place ${U} successfully`)}catch{et.error("Failed to update status")}},$=async z=>{z.preventDefault(),i(!0);try{if(!await validateAdmin(p,w))throw new Error("Invalid admin credentials");const J=await hR(Za,p,w),re=Ya(Ao(as,"admins"),Xa("user_id","==",J.user.uid));(await Ef(re)).empty?(await Za.signOut(),et.error("Access denied. This account does not have admin privileges."),l(!1),y(""),T("")):(et.success("Login successful!"),l(!0),R())}catch(U){const J=U.code==="auth/invalid-credential"?"Invalid email or password":"Login failed. Please try again.";et.error(J),l(!1)}finally{i(!1)}};return h?ce("div",{className:"container mx-auto px-4 py-12 text-center",children:ce("div",{className:"animate-pulse",children:"Checking authentication..."})}):o?t?ce("div",{className:"container mx-auto px-4 py-12 text-center",children:ce("div",{className:"animate-pulse",children:"Loading places..."})}):Le("div",{className:"container mx-auto px-4 py-12",children:[ce("h1",{className:"text-3xl font-bold text-center mb-12",children:"Admin Dashboard"}),Le("div",{className:"space-y-6",children:[n.map(z=>Le("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[Le("div",{className:"flex items-start justify-between",children:[Le("div",{children:[ce("h3",{className:"text-xl font-bold mb-2",children:z.name}),Le("p",{className:"text-gray-600 mb-2",children:["District: ",z.district]}),Le("p",{className:"text-gray-600 mb-4",children:["Best Time: ",z.visiting_time]}),ce("p",{className:"text-gray-700",children:z.description})]}),ce("img",{src:z.image_url,alt:z.name,className:"w-48 h-48 object-cover rounded-lg"})]}),Le("div",{className:"mt-6 flex space-x-4",children:[ce("button",{onClick:()=>M(z.id,"approved"),className:"bg-[#045307] text-white px-4 py-2 rounded-md hover:bg-[#034206] transition",children:"Approve"}),ce("button",{onClick:()=>M(z.id,"rejected"),className:"bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition",children:"Reject"})]})]},z.id)),n.length===0&&ce("p",{className:"text-center text-gray-600",children:"No pending places to review"})]})]}):ce("div",{className:"container mx-auto px-4 py-12",children:Le("div",{className:"max-w-md mx-auto bg-white rounded-lg shadow-lg p-8",children:[ce("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Admin Login"}),Le("form",{onSubmit:$,className:"space-y-4",children:[Le("div",{children:[ce("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),ce("input",{type:"email",value:p,onChange:z=>y(z.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#045307] focus:border-transparent",required:!0})]}),Le("div",{children:[ce("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),ce("input",{type:"password",value:w,onChange:z=>T(z.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#045307] focus:border-transparent",required:!0})]}),Le("button",{type:"submit",className:"w-full flex items-center justify-center space-x-2 bg-[#045307] text-white py-2 px-4 rounded-md hover:bg-[#034206] transition",children:[ce(DI,{size:20}),ce("span",{children:"Login as Admin"})]})]})]})})}function rx(){return ce(bT,{children:Le("div",{className:"min-h-screen bg-gray-50",children:[ce(JN,{}),Le(kT,{children:[ce(Yu,{path:"/",element:ce(ex,{})}),ce(Yu,{path:"/places",element:ce(tx,{})}),ce(Yu,{path:"/admin",element:ce(nx,{})})]}),ce(kI,{position:"bottom-right"})]})})}FE.createRoot(document.getElementById("root")).render(ce(Y.StrictMode,{children:ce(rx,{})}));
