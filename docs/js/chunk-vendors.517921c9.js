(self["webpackChunkgaigo_web"]=self["webpackChunkgaigo_web"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(7045),y=n(7976),v=n(9518),w=n(7674),b=n(5112),_=n(9711),E=n(9909),T=E.enforce,I=E.get,S=c.Int8Array,C=S&&S.prototype,k=c.Uint8ClampedArray,A=k&&k.prototype,R=S&&v(S),O=C&&v(C),N=Object.prototype,D=c.TypeError,x=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||h(F,e)||h(j,e)},B=function(t){var e=v(t);if(l(e)){var n=I(e);return n&&h(n,L)?n[L]:B(e)}},$=function(t){if(!l(t))return!1;var e=d(t);return h(F,e)||h(j,e)},q=function(t){if($(t))return t;throw D("Target is not a typed array")},z=function(t){if(u(t)&&(!w||y(R,t)))return t;throw D(f(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}O[t]&&!n||m(O,t,n?e:M&&C[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in F)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return m(R,t,n?e:M&&R[t]||e)}catch(s){}}for(r in F)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in j)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw D("Incorrect invocation")},M))for(r in F)c[r]&&w(c[r],R);if((!M||!O||O===N)&&(O=R.prototype,M))for(r in F)c[r]&&w(c[r].prototype,O);if(M&&v(A)!==O&&w(A,O),a&&!h(O,x))for(r in U=!0,g(O,x,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),F)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:V,isTypedArray:$,TypedArray:R,TypedArrayPrototype:O}},7745:function(t,e,n){var r=n(6244);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},1843:function(t,e,n){var r=n(6244);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1572:function(t,e,n){var r=n(6244),i=n(9303),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},8052:function(t,e,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,y=t.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(t,e,n){var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw m(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var b=d("state");f[b]=!0,r=function(t,e){if(l(t,b))throw m(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4067:function(t,e,n){var r=n(648);t.exports=function(t){var e=r(t);return"BigInt64Array"==e||"BigUint64Array"==e}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===m(f(e),0,7)&&(e="["+g(f(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(5668),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},4599:function(t,e,n){var r=n(7593),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{unshift:function(t){var e=i(this),n=s(e),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in e?e[l]=e[u]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return o(e,n+r)}})},1439:function(t,e,n){"use strict";var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(t,e,n){"use strict";var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return l(n,t)}))},5315:function(t,e,n){"use strict";var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},3767:function(t,e,n){n(1439)},8585:function(t,e,n){n(7585)},8696:function(t,e,n){n(5315)},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",y=s("Error"),v=s(g),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=y(e);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in y(g),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,g),I=!!T&&!(T.writable&&T.configurable),S=_&&!I&&!E;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:v});var C=s(g),k=C.prototype;if(k.constructor!==C)for(var A in m||a(k,"constructor",o(1,C)),d)if(c(d,A)){var R=d[A],O=R.s;c(C,O)||a(C,O,o(6,R.c))}},223:function(t,e,n){"use strict";n.d(e,{$s:function(){return J},BH:function(){return w},L:function(){return c},LL:function(){return D},P0:function(){return g},Pz:function(){return v},Sg:function(){return b},UG:function(){return T},ZR:function(){return N},aH:function(){return y},b$:function(){return S},eu:function(){return A},hl:function(){return k},m9:function(){return Q},ne:function(){return B},pd:function(){return V},q4:function(){return m},ru:function(){return I},tV:function(){return u},uI:function(){return E},vZ:function(){return M},w1:function(){return C},xO:function(){return F},xb:function(){return L},z$:function(){return _},zI:function(){return R},zd:function(){return j}});n(2801),n(7658);
/**
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
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new o;const d=e<<2|a>>4;if(r.push(d),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},v=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
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
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
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
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function T(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k(){try{return"object"===typeof indexedDB}catch(t){return!1}}function A(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function R(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
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
 */const O="FirebaseError";class N extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=O,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function x(t,e){return t.replace(P,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
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
 */function L(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(U(n)&&U(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
function F(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function j(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function V(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */function B(t,e){const n=new $(t,e);return n.subscribe.bind(n)}class ${constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=q(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function z(){}
/**
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
 */
/**
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
 */
const H=1e3,K=2,G=144e5,W=.5;function J(t,e=H,n=K){const r=e*Math.pow(n,t),i=Math.round(W*r*(Math.random()-.5)*2);return Math.min(G,r+i)}
/**
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
 */
/**
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
 */
function Q(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{B:function(){return a},Bj:function(){return o},Fl:function(){return kt},IU:function(){return Et},Jd:function(){return y},PG:function(){return vt},SU:function(){return Lt},Um:function(){return mt},WL:function(){return Ut},X$:function(){return R},X3:function(){return _t},XI:function(){return Dt},Xl:function(){return Tt},dq:function(){return Ot},iH:function(){return Nt},j:function(){return A},lk:function(){return v},qj:function(){return pt},qq:function(){return u},yT:function(){return bt}});n(7658);var r=n(7139);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t){return new o(t)}function c(t,e=i){e&&e.active&&e.effects.push(t)}class u{constructor(t,e,n,r){this.fn=t,this.trigger=e,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,c(this,r)}get dirty(){if(1===this._dirtyLevel){this._dirtyLevel=0,this._queryings++,y();for(const t of this.deps)if(t.computed&&(l(t.computed),this._dirtyLevel>=2))break;v(),this._queryings--}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=p,e=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{d(this),this._runnings--,s=e,p=t}}stop(){var t;this.active&&(h(this),d(this),null==(t=this.onStop)||t.call(this),this.active=!1)}}function l(t){return t.value}function h(t){t._trackId++,t._depsLength=0}function d(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)f(t.deps[e],t);t.deps.length=t._depsLength}}function f(t,e){const n=t.get(e);void 0!==n&&e._trackId!==n&&(t.delete(e),0===t.size&&t.cleanup())}let p=!0,m=0;const g=[];function y(){g.push(p),p=!1}function v(){const t=g.pop();p=void 0===t||t}function w(){m++}function b(){m--;while(!m&&E.length)E.shift()()}function _(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&f(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const E=[];function T(t,e,n){w();for(const r of t.keys())if((r.allowRecurse||!r._runnings)&&r._dirtyLevel<e&&(!r._runnings||2!==e)){const t=r._dirtyLevel;r._dirtyLevel=e,0!==t||r._queryings&&2===e||(r.trigger(),r.scheduler&&E.push(r.scheduler))}b()}const I=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},S=new WeakMap,C=Symbol(""),k=Symbol("");function A(t,e,n){if(p&&s){let e=S.get(t);e||S.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=I((()=>e.delete(n)))),_(s,r,void 0)}}function R(t,e,n,i,s,o){const a=S.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||!(0,r.yk)(n)&&n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(C)),(0,r._N)(t)&&c.push(a.get(k)));break;case"delete":(0,r.kJ)(t)||(c.push(a.get(C)),(0,r._N)(t)&&c.push(a.get(k)));break;case"set":(0,r._N)(t)&&c.push(a.get(C));break}w();for(const r of c)r&&T(r,3,void 0);b()}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),D=x();function x(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Et(this);for(let e=0,i=this.length;e<i;e++)A(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Et)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){y(),w();const n=Et(this)[e].apply(this,t);return b(),v(),n}})),t}function P(t){const e=Et(this);return A(e,"has",t),e.hasOwnProperty(t)}class L{constructor(t=!1,e=!1){this._isReadonly=t,this._shallow=e}get(t,e,n){const i=this._isReadonly,s=this._shallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?ht:lt:s?ut:ct).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.kJ)(t);if(!i){if(o&&(0,r.RI)(D,e))return Reflect.get(D,e,n);if("hasOwnProperty"===e)return P}const a=Reflect.get(t,e,n);return((0,r.yk)(e)?N.has(e):O(e))?a:(i||A(t,"get",e),s?a:Ot(a)?o&&(0,r.S0)(e)?a:a.value:(0,r.Kn)(a)?i?gt(a):pt(a):a)}}class M extends L{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._shallow){const e=wt(s);if(bt(n)||wt(n)||(s=Et(s),n=Et(n)),!(0,r.kJ)(t)&&Ot(s)&&!Ot(n))return!e&&(s.value=n,!0)}const o=(0,r.kJ)(t)&&(0,r.S0)(e)?Number(e)<t.length:(0,r.RI)(t,e),a=Reflect.set(t,e,n,i);return t===Et(i)&&(o?(0,r.aU)(n,s)&&R(t,"set",e,n,s):R(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&R(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||A(t,"has",e),n}ownKeys(t){return A(t,"iterate",(0,r.kJ)(t)?"length":C),Reflect.ownKeys(t)}}class U extends L{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const F=new M,j=new U,V=new M(!0),B=t=>t,$=t=>Reflect.getPrototypeOf(t);function q(t,e,n=!1,i=!1){t=t["__v_raw"];const s=Et(t),o=Et(e);n||((0,r.aU)(e,o)&&A(s,"get",e),A(s,"get",o));const{has:a}=$(s),c=i?B:n?St:It;return a.call(s,e)?c(t.get(e)):a.call(s,o)?c(t.get(o)):void(t!==s&&t.get(e))}function z(t,e=!1){const n=this["__v_raw"],i=Et(n),s=Et(t);return e||((0,r.aU)(t,s)&&A(i,"has",t),A(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function H(t,e=!1){return t=t["__v_raw"],!e&&A(Et(t),"iterate",C),Reflect.get(t,"size",t)}function K(t){t=Et(t);const e=Et(this),n=$(e),r=n.has.call(e,t);return r||(e.add(t),R(e,"add",t,t)),this}function G(t,e){e=Et(e);const n=Et(this),{has:i,get:s}=$(n);let o=i.call(n,t);o||(t=Et(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&R(n,"set",t,e,a):R(n,"add",t,e),this}function W(t){const e=Et(this),{has:n,get:r}=$(e);let i=n.call(e,t);i||(t=Et(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&R(e,"delete",t,void 0,s),o}function J(){const t=Et(this),e=0!==t.size,n=void 0,r=t.clear();return e&&R(t,"clear",void 0,void 0,n),r}function Q(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Et(s),a=e?B:t?St:It;return!t&&A(o,"iterate",C),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function X(t,e,n){return function(...i){const s=this["__v_raw"],o=Et(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?B:e?St:It;return!e&&A(o,"iterate",u?k:C),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function Y(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function Z(){const t={get(t){return q(this,t)},get size(){return H(this)},has:z,add:K,set:G,delete:W,clear:J,forEach:Q(!1,!1)},e={get(t){return q(this,t,!1,!0)},get size(){return H(this)},has:z,add:K,set:G,delete:W,clear:J,forEach:Q(!1,!0)},n={get(t){return q(this,t,!0)},get size(){return H(this,!0)},has(t){return z.call(this,t,!0)},add:Y("add"),set:Y("set"),delete:Y("delete"),clear:Y("clear"),forEach:Q(!0,!1)},r={get(t){return q(this,t,!0,!0)},get size(){return H(this,!0)},has(t){return z.call(this,t,!0)},add:Y("add"),set:Y("set"),delete:Y("delete"),clear:Y("clear"),forEach:Q(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=X(i,!1,!1),n[i]=X(i,!0,!1),e[i]=X(i,!1,!0),r[i]=X(i,!0,!0)})),[t,n,e,r]}const[tt,et,nt,rt]=Z();function it(t,e){const n=e?t?rt:nt:t?et:tt;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const st={get:it(!1,!1)},ot={get:it(!1,!0)},at={get:it(!0,!1)};const ct=new WeakMap,ut=new WeakMap,lt=new WeakMap,ht=new WeakMap;function dt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ft(t){return t["__v_skip"]||!Object.isExtensible(t)?0:dt((0,r.W7)(t))}function pt(t){return wt(t)?t:yt(t,!1,F,st,ct)}function mt(t){return yt(t,!1,V,ot,ut)}function gt(t){return yt(t,!0,j,at,lt)}function yt(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=ft(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function vt(t){return wt(t)?vt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function wt(t){return!(!t||!t["__v_isReadonly"])}function bt(t){return!(!t||!t["__v_isShallow"])}function _t(t){return vt(t)||wt(t)}function Et(t){const e=t&&t["__v_raw"];return e?Et(e):t}function Tt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const It=t=>(0,r.Kn)(t)?pt(t):t,St=t=>(0,r.Kn)(t)?gt(t):t;class Ct{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>t(this._value)),(()=>Rt(this,1))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Et(this);return At(t),t._cacheable&&!t.effect.dirty||(0,r.aU)(t._value,t._value=t.effect.run())&&Rt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function kt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Ct(i,s,o||!s,n);return a}function At(t){p&&s&&(t=Et(t),_(s,t.dep||(t.dep=I((()=>t.dep=void 0),t instanceof Ct?t:void 0)),void 0))}function Rt(t,e=3,n){t=Et(t);const r=t.dep;r&&T(r,e,void 0)}function Ot(t){return!(!t||!0!==t.__v_isRef)}function Nt(t){return xt(t,!1)}function Dt(t){return xt(t,!0)}function xt(t,e){return Ot(t)?t:new Pt(t,e)}class Pt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Et(t),this._value=e?t:It(t)}get value(){return At(this),this._value}set value(t){const e=this.__v_isShallow||bt(t)||wt(t);t=e?t:Et(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:It(t),Rt(this,3,t))}}function Lt(t){return Ot(t)?t.value:t}const Mt={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ot(i)&&!Ot(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ut(t){return vt(t)?t:new Proxy(t,Mt)}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Cn:function(){return M},FN:function(){return Sn},Fl:function(){return qn},HY:function(){return qe},JJ:function(){return fe},Ko:function(){return $t},P$:function(){return ft},Q6:function(){return wt},U2:function(){return mt},Uk:function(){return fn},Us:function(){return Pe},Wm:function(){return un},Y3:function(){return v},Y8:function(){return ut},YP:function(){return tt},_:function(){return cn},aZ:function(){return bt},dD:function(){return L},f3:function(){return pe},h:function(){return zn},iD:function(){return tn},ic:function(){return Lt},kq:function(){return mn},nJ:function(){return ht},nK:function(){return vt},uE:function(){return pn},up:function(){return H},w5:function(){return U},wg:function(){return Je},wy:function(){return st}});n(7658),n(541);var r=n(4870),i=n(7139);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=`https://vuejs.org/errors/#runtime-${n}`;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let y=null;function v(t){const e=y||g;return t?e.then(this?t.bind(this):t):e}function w(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,i=h[r],s=C(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function b(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),_())}function _(){u||l||(l=!0,y=g.then(A))}function E(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function T(t){(0,i.kJ)(t)?f.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||f.push(t),_()}function I(t,e,n=(u?d+1:0)){for(0;n<h.length;n++){const e=h[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,h.splice(n,1),n--,e()}}}function S(t){if(f.length){const t=[...new Set(f)];if(f.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>C(t)-C(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const C=t=>null==t.id?1/0:t.id,k=(t,e)=>{const n=C(t)-C(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function A(t){l=!1,u=!0,h.sort(k);i.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&s(t,null,14)}}finally{d=0,h.length=0,S(t),u=!1,y=null,(h.length||f.length)&&A(t)}}function R(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>(0,i.HD)(t)?t.trim():t))),e&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function O(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=O(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function N(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let D=null,x=null;function P(t){const e=D;return D=t,x=t&&t.type.__scopeId||null,e}function L(t){x=t}function M(){x=null}function U(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ye(-1);const i=P(e);let s;try{s=t(...n)}finally{P(i),r._d&&Ye(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function F(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=t;let v,w;const b=P(t);try{if(4&n.shapeFlag){const t=s||r,e=t;v=gn(d.call(e,t,f,o,m,p,g)),w=l}else{const t=e;0,v=gn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:j(l)}}catch(E){Ge.length=0,a(E,t,1),v=un(He)}let _=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=_;t.length&&7&e&&(c&&t.some(i.tR)&&(w=V(w,c)),_=dn(_,w))}return n.dirs&&(_=dn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,P(b),v}const j=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},V=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function B(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||$(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?$(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function $(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!N(n,s))return!0}return!1}function q({vnode:t,parent:e},n){if(n)while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const z="components";function H(t,e){return G(z,t,!0,e)||t}const K=Symbol.for("v-ndc");function G(t,e,n=!0,r=!1){const s=D||In;if(s){const n=s.type;if(t===z){const t=Bn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=W(s[t]||n[t],e)||W(s.appContext[t],e);return!o&&r?n:o}}function W(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}const J=t=>t.__isSuspense;function Q(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):T(t)}const X=Symbol.for("v-scx"),Y=()=>{{const t=pe(X);return t}};const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.kT){if(e&&u){const t=e;e=(...e)=>{t(...e),S()}}const d=In,f=t=>!0===a?t:it(t,!1===a?1:void 0);let p,m,g=!1,y=!1;if((0,r.dq)(t)?(p=()=>t.value,g=(0,r.yT)(t)):(0,r.PG)(t)?(p=()=>f(t),g=!0):(0,i.kJ)(t)?(y=!0,g=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),p=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?f(t):(0,i.mf)(t)?s(t,d,2):void 0))):p=(0,i.mf)(t)?e?()=>s(t,d,2):()=>(m&&m(),o(t,d,3,[w])):i.dG,e&&a){const t=p;p=()=>it(t())}let v,w=t=>{m=I.onStop=()=>{s(t,d,4),m=I.onStop=void 0}};if(xn){if(w=i.dG,e?n&&o(e,d,3,[p(),y?[]:void 0,w]):p(),"sync"!==c)return i.dG;{const t=Y();v=t.__watcherHandles||(t.__watcherHandles=[])}}let _=y?new Array(t.length).fill(Z):Z;const E=()=>{if(I.active&&I.dirty)if(e){const t=I.run();(a||g||(y?t.some(((t,e)=>(0,i.aU)(t,_[e]))):(0,i.aU)(t,_)))&&(m&&m(),o(e,d,3,[t,_===Z?void 0:y&&_[0]===Z?[]:_,w]),_=t)}else I.run()};let T;E.allowRecurse=!!e,"sync"===c?T=E:"post"===c?T=()=>xe(E,d&&d.suspense):(E.pre=!0,d&&(E.id=d.uid),T=()=>b(E));const I=new r.qq(p,i.dG,T),S=()=>{I.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,I)};return e?n?E():_=I.run():"post"===c?xe(I.run.bind(I),d&&d.suspense):I.run(),v&&v.push(S),S}function nt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?rt(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=In;An(this);const c=et(s,o.bind(r),n);return a?An(a):Rn(),c}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function it(t,e,n=0,s){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),(0,r.dq)(t))it(t.value,e,n,s);else if((0,i.kJ)(t))for(let r=0;r<t.length;r++)it(t[r],e,n,s);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{it(t,e,n,s)}));else if((0,i.PO)(t))for(const r in t)it(t[r],e,n,s);return t}function st(t,e){const n=D;if(null===n)return t;const r=Vn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];t&&((0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&it(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function ot(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const at=Symbol("_leaveCb"),ct=Symbol("_enterCb");function ut(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xt((()=>{t.isMounted=!0})),Mt((()=>{t.isUnmounting=!0})),t}const lt=[Function,Array],ht={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},dt={name:"BaseTransition",props:ht,setup(t,{slots:e}){const n=Sn(),i=ut();let s;return()=>{const o=e.default&&wt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==He){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(i.isLeaving)return gt(a);const l=yt(a);if(!l)return gt(a);const h=mt(l,c,i,n);vt(l,h);const d=n.subTree,f=d&&yt(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(f&&f.type!==He&&(!rn(l,f)||p)){const t=mt(f,c,i,n);if(vt(f,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},gt(a);"in-out"===u&&l.type!==He&&(t.delayLeave=(t,e,n)=>{const r=pt(i,f);r[String(f.key)]=f,t[at]=()=>{e(),t[at]=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ft=dt;function pt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function mt(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,_=String(t.key),E=pt(n,t),T=(t,e)=>{t&&o(t,r,9,e)},I=(t,e)=>{const n=e[1];T(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=y||u}e[at]&&e[at](!0);const i=E[_];i&&rn(t,i)&&i.el[at]&&i.el[at](),T(r,[e])},enter(t){let e=l,r=h,i=d;if(!n.isMounted){if(!s)return;e=v||l,r=w||h,i=b||d}let o=!1;const a=t[ct]=e=>{o||(o=!0,T(e?i:r,[t]),S.delayedLeave&&S.delayedLeave(),t[ct]=void 0)};e?I(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e[ct]&&e[ct](!0),n.isUnmounting)return r();T(f,[e]);let s=!1;const o=e[at]=n=>{s||(s=!0,r(),T(n?g:m,[e]),e[at]=void 0,E[i]===t&&delete E[i])};E[i]=t,p?I(p,[e,o]):o()},clone(t){return mt(t,e,n,r)}};return S}function gt(t){if(Et(t))return t=dn(t),t.children=null,t}function yt(t){return Et(t)?t.children?t.children[0]:void 0:t}function vt(t,e){6&t.shapeFlag&&t.component?vt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===qe?(128&o.patchFlag&&i++,r=r.concat(wt(o.children,e,a))):(e||o.type!==He)&&r.push(null!=a?dn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function bt(t,e){return(0,i.mf)(t)?(()=>(0,i.l7)({name:t.name},e,{setup:t}))():t}const _t=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Et=t=>t.type.__isKeepAlive;RegExp,RegExp;function Tt(t,e){return(0,i.kJ)(t)?t.some((t=>Tt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!(0,i.Kj)(t)&&t.test(e)}function It(t,e){Ct(t,"a",e)}function St(t,e){Ct(t,"da",e)}function Ct(t,e,n=In){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(Ot(e,r,n),n){let t=n.parent;while(t&&t.parent)Et(t.parent.vnode)&&kt(r,e,n,t),t=t.parent}}function kt(t,e,n,r){const s=Ot(e,t,r,!0);Ut((()=>{(0,i.Od)(r[e],s)}),n)}function At(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Rt(t){return 128&t.shapeFlag?t.ssContent:t}function Ot(t,e,n=In,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),An(n);const s=o(e,n,t,i);return Rn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Nt=t=>(e,n=In)=>(!xn||"sp"===t)&&Ot(t,((...t)=>e(...t)),n),Dt=Nt("bm"),xt=Nt("m"),Pt=Nt("bu"),Lt=Nt("u"),Mt=Nt("bum"),Ut=Nt("um"),Ft=Nt("sp"),jt=Nt("rtg"),Vt=Nt("rtc");function Bt(t,e=In){Ot("ec",t,e)}function $t(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const qt=t=>t?On(t)?Vn(t)||t.proxy:qt(t.parent):null,zt=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qt(t.parent),$root:t=>qt(t.root),$emit:t=>t.emit,$options:t=>Zt(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,b(t.update)}),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>nt.bind(t)}),Ht=(t,e)=>t!==i.kT&&!t.__isScriptSetup&&(0,i.RI)(t,e),Kt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Ht(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Wt&&(c[e]=0)}}const d=zt[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Ht(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||Ht(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(zt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gt(t){return(0,i.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Wt=!0;function Jt(t){const e=Zt(t),n=t.proxy,s=t.ctx;Wt=!1,e.beforeCreate&&Xt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:k,expose:A,inheritAttrs:R,components:O,directives:N,filters:D}=e,x=null;if(h&&Qt(h,s,x),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Wt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=qn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Yt(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{fe(e,t[e])}))}function P(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Xt(d,t,"c"),P(Dt,f),P(xt,p),P(Pt,m),P(Lt,g),P(It,y),P(St,v),P(Bt,C),P(Vt,I),P(jt,S),P(Mt,b),P(Ut,E),P(Ft,k),(0,i.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=R&&(t.inheritAttrs=R),O&&(t.components=O),N&&(t.directives=N)}function Qt(t,e,n=i.dG){(0,i.kJ)(t)&&(t=ie(t));for(const s in t){const n=t[s];let o;o=(0,i.Kn)(n)?"default"in n?pe(n.from||s,n.default,!0):pe(n.from||s):pe(n),(0,r.dq)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Xt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Yt(t,e,n,r){const s=r.includes(".")?rt(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&tt(s,n)}else if((0,i.mf)(t))tt(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Yt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&tt(s,r,t)}else 0}function Zt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>te(u,t,a,!0))),te(u,e,a)):u=e,(0,i.Kn)(e)&&o.set(e,u),u}function te(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&te(t,s,n,!0),i&&i.forEach((e=>te(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=ee[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const ee={data:ne,props:ae,emits:ae,methods:oe,computed:oe,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:oe,directives:oe,watch:ce,provide:ne,inject:re};function ne(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function re(t,e){return oe(ie(t),ie(e))}function ie(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function se(t,e){return t?[...new Set([].concat(t,e))]:e}function oe(t,e){return t?(0,i.l7)(Object.create(null),t,e):e}function ae(t,e){return t?(0,i.kJ)(t)&&(0,i.kJ)(e)?[...new Set([...t,...e])]:(0,i.l7)(Object.create(null),Gt(t),Gt(null!=e?e:{})):e}function ce(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=se(t[r],e[r]);return n}function ue(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let le=0;function he(t,e){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=ue(),o=new WeakSet;let a=!1;const c=s.app={_uid:le++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Hn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=un(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Vn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c},runWithContext(t){de=c;try{return t()}finally{de=null}}};return c}}let de=null;function fe(t,e){if(In){let n=In.provides;const r=In.parent&&In.parent.provides;r===n&&(n=In.provides=Object.create(r)),n[t]=e}else 0}function pe(t,e,n=!1){const r=In||D;if(r||de){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:de._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r&&r.proxy):e}else 0}function me(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,sn,1),t.propsDefaults=Object.create(null),ye(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ge(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ye(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ve(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=ve(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ye(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ve(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function ve(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(An(s),r=i[n]=t.call(null,e),Rn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function we(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=we(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);be(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(be(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const t=Te(Boolean,r.type),n=Te(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Kn)(t)&&r.set(t,l),l}function be(t){return"$"!==t[0]}function _e(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function Ee(t,e){return _e(t)===_e(e)}function Te(t,e){return(0,i.kJ)(e)?e.findIndex((e=>Ee(e,t))):(0,i.mf)(e)&&Ee(e,t)?0:-1}const Ie=t=>"_"===t[0]||"$stable"===t,Se=t=>(0,i.kJ)(t)?t.map(gn):[gn(t)],Ce=(t,e,n)=>{if(e._n)return e;const r=U(((...t)=>Se(e(...t))),n);return r._c=!1,r},ke=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ie(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=Ce(s,n,r);else if(null!=n){0;const t=Se(n);e[s]=()=>t}}},Ae=(t,e)=>{const n=Se(e);t.slots.default=()=>n},Re=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):ke(e,t.slots={})}else t.slots={},e&&Ae(t,e);(0,i.Nj)(t.slots,sn,1)},Oe=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,ke(e,s)),a=e}else e&&(Ae(t,e),a={default:1});if(o)for(const i in s)Ie(i)||null!=a[i]||delete s[i]};function Ne(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Ne(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(_t(o)&&!a)return;const c=4&o.shapeFlag?Vn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(f[t.k]=u))};u?(r.id=-1,xe(r,n)):r()}else 0}}function De(){}const xe=Q;function Pe(t){return Le(t)}function Le(t,e){De();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=t,y=(t,e,n,r=null,i=null,s=null,o=undefined,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!rn(t,e)&&(r=Y(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case ze:v(t,e,n,r);break;case He:w(t,e,n,r);break;case Ke:null==t&&_(e,n,r,o);break;case qe:P(t,e,n,r,i,s,o,a,c);break;default:1&h?k(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,tt)}null!=l&&i&&Ne(l,t&&t.ref,s,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},k=(t,e,n,r,i,s,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?A(e,n,r,i,s,o,a,c):N(t,e,i,s,o,a,c)},A=(t,e,n,r,o,u,l,h)=>{let f,p;const{props:m,shapeFlag:g,transition:y,dirs:v}=t;if(f=t.el=c(t.type,u,m&&m.is,m),8&g?d(f,t.children):16&g&&O(t.children,f,null,r,o,Me(t,u),l,h),v&&ot(t,null,r,"created"),R(f,t,t.scopeId,l,r),m){for(const e in m)"value"===e||(0,i.Gg)(e)||a(f,e,null,m[e],u,t.children,r,o,X);"value"in m&&a(f,"value",null,m.value,u),(p=m.onVnodeBeforeMount)&&bn(p,r,t)}v&&ot(t,null,r,"beforeMount");const w=Fe(o,y);w&&y.beforeEnter(f),s(f,e,n),((p=m&&m.onVnodeMounted)||w||v)&&xe((()=>{p&&bn(p,r,t),w&&y.enter(f),v&&ot(t,null,r,"mounted")}),o)},R=(t,e,n,r,i)=>{if(n&&m(t,n),r)for(let s=0;s<r.length;s++)m(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;R(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},O=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?yn(t[u]):gn(t[u]);y(null,c,e,n,r,i,s,o,a)}},N=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||i.kT,m=e.props||i.kT;let g;if(n&&Ue(n,!1),(g=m.onVnodeBeforeUpdate)&&bn(g,n,e,t),f&&ot(e,t,n,"beforeUpdate"),n&&Ue(n,!0),h?D(t.dynamicChildren,h,u,n,r,Me(e,s),o):c||$(t,e,u,null,n,r,Me(e,s),o,!1),l>0){if(16&l)x(u,e,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,X)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||x(u,e,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&xe((()=>{g&&bn(g,n,e,t),f&&ot(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===qe||!rn(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},x=(t,e,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,X)}"value"in r&&a(t,"value",n.value,r.value,c)}},P=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,r),s(d,n,r),O(e.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&je(t,e,!0)):$(t,e,n,d,i,o,a,c,l)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):U(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=Tn(t,r,i);if(Et(t)&&(a.ctx.renderer=tt),Pn(a),a.asyncDep){if(i&&i.registerDep(a,j),!t.el){const t=a.subTree=un(He);w(null,t,e,n)}}else j(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if(B(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,E(r.update),r.effect.dirty=!0,r.update()}else e.el=t.el,r.vnode=e},j=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:l}=t;{const n=Be(t);if(n)return e&&(e.el=l.el,V(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||u()}))}let h,d=e;0,Ue(t,!1),e?(e.el=l.el,V(t,e,c)):e=l,n&&(0,i.ir)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&bn(h,s,e,l),Ue(t,!0);const p=F(t);0;const m=t.subTree;t.subTree=p,y(m,p,f(m.el),Y(m),t,o,a),e.el=p.el,null===d&&q(t,p.el),r&&xe(r,o),(h=e.props&&e.props.onVnodeUpdated)&&xe((()=>bn(h,s,e,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=_t(e);if(Ue(t,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&bn(r,d,e),Ue(t,!0),c&&nt){const n=()=>{t.subTree=F(t),nt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=F(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&xe(h,o),!f&&(r=u&&u.onVnodeMounted)){const t=e;xe((()=>bn(r,d,t)),o)}(256&e.shapeFlag||d&&_t(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&xe(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,i.dG,(()=>b(h)),t.scope),h=t.update=()=>{l.dirty&&l.run()};h.id=t.uid,Ue(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,ge(t,e.props,i,n),Oe(t,e.children,n),(0,r.Jd)(),I(t),(0,r.lk)()},$=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void H(u,h,n,r,i,s,o,a,c);if(256&f)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},z=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?yn(e[f]):gn(e[f]);y(t[f],r,n,null,s,o,a,c,u)}l>h?X(t,s,o,!0,!1,d):O(e,n,r,s,o,a,c,u,d)},H=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],i=e[l]=u?yn(e[l]):gn(e[l]);if(!rn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],i=e[f]=u?yn(e[f]):gn(e[f]);if(!rn(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,i=t<h?e[t].el:r;while(l<=f)y(null,e[l]=u?yn(e[l]):gn(e[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)G(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const t=e[l]=u?yn(e[l]):gn(e[l]);null!=t.key&&g.set(t.key,l)}let v,w=0;const b=f-m+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=d;l++){const r=t[l];if(w>=b){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===T[v-m]&&rn(r,e[v])){i=v;break}void 0===i?G(r,s,o,!0):(T[i-m]=l+1,i>=E?E=i:_=!0,y(r,e[i],n,null,s,o,a,c,u),w++)}const I=_?Ve(T):i.Z6;for(v=I.length-1,l=b-1;l>=0;l--){const t=m+l,i=e[t],d=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==I[v]?K(i,n,d,2):v--)}}},K=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===qe){s(o,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===Ke)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),xe((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&Ne(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!_t(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&bn(m,e,t),6&l)Q(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&ot(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,tt,r):u&&(s!==qe||h>0&&64&h)?X(u,e,n,!1,!0):(s===qe&&384&h||!i&&16&l)&&X(c,e,n),r&&W(t)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&xe((()=>{m&&bn(m,e,t),f&&ot(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===qe)return void J(n,r);if(e===Ke)return void C(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},J=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&xe(c,e),xe((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},Y=t=>6&t.shapeFlag?Y(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),I(),S(),e._vnode=t},tt={p:y,um:G,m:K,r:W,mt:M,mc:O,pc:$,pbc:D,n:Y,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:he(Z,et)}}function Me({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ue({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Fe(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function je(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=yn(s[i]),e.el=t.el),n||je(t,e)),e.type===ze&&(e.el=t.el)}}function Ve(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function Be(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Be(e)}const $e=t=>t.__isTeleport;const qe=Symbol.for("v-fgt"),ze=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),Ke=Symbol.for("v-stc"),Ge=[];let We=null;function Je(t=!1){Ge.push(We=t?null:[])}function Qe(){Ge.pop(),We=Ge[Ge.length-1]||null}let Xe=1;function Ye(t){Xe+=t}function Ze(t){return t.dynamicChildren=Xe>0?We||i.Z6:null,Qe(),Xe>0&&We&&We.push(t),t}function tn(t,e,n,r,i,s){return Ze(cn(t,e,n,r,i,s,!0))}function en(t,e,n,r,i){return Ze(un(t,e,n,r,i,!0))}function nn(t){return!!t&&!0===t.__v_isVNode}function rn(t,e){return t.type===e.type&&t.key===e.key}const sn="__vInternal",on=({key:t})=>null!=t?t:null,an=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:D,r:t,k:e,f:!!n}:t:null);function cn(t,e=null,n=null,r=0,s=null,o=(t===qe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&on(e),ref:e&&an(e),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(vn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Xe>0&&!a&&We&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&We.push(u),u}const un=ln;function ln(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==K||(t=He),nn(t)){const r=dn(t,e,!0);return n&&vn(r,n),Xe>0&&!a&&We&&(6&r.shapeFlag?We[We.indexOf(t)]=r:We.push(r)),r.patchFlag|=-2,r}if($n(t)&&(t=t.__vccOpts),e){e=hn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:J(t)?128:$e(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return cn(t,e,n,s,o,c,a,!0)}function hn(t){return t?(0,r.X3)(t)||sn in t?(0,i.l7)({},t):t:null}function dn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?wn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&on(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(an(e)):[s,an(e)]:an(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function fn(t=" ",e=0){return un(ze,null,t,e)}function pn(t,e){const n=un(Ke,null,t);return n.staticCount=e,n}function mn(t="",e=!1){return e?(Je(),en(He,null,t)):un(He,null,t)}function gn(t){return null==t||"boolean"===typeof t?un(He):(0,i.kJ)(t)?un(qe,null,t.slice()):"object"===typeof t?yn(t):un(ze,null,String(t))}function yn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:dn(t)}function vn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),vn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||sn in e?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,i.mf)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[fn(e)]):n=8);t.children=e,t.shapeFlag|=n}function wn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function bn(t,e,n,r=null){o(t,e,7,[n,r])}const _n=ue();let En=0;function Tn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||_n,a={uid:En++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:we(s,o),emitsOptions:O(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=R.bind(null,a),t.ce&&t.ce(a),a}let In=null;const Sn=()=>In||D;let Cn,kn;{const t=(0,i.E9)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};Cn=e("__VUE_INSTANCE_SETTERS__",(t=>In=t)),kn=e("__VUE_SSR_SETTERS__",(t=>xn=t))}const An=t=>{Cn(t),t.scope.on()},Rn=()=>{In&&In.scope.off(),Cn(null)};function On(t){return 4&t.vnode.shapeFlag}let Nn,Dn,xn=!1;function Pn(t,e=!1){e&&kn(e);const{props:n,children:r}=t.vnode,i=On(t);me(t,n,i,e),Re(t,r);const s=i?Ln(t,e):void 0;return e&&kn(!1),s}function Ln(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Kt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?jn(t):null;An(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),Rn(),(0,i.tI)(c)){if(c.then(Rn,Rn),e)return c.then((n=>{Mn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Mn(t,c,e)}else Un(t,e)}function Mn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Un(t,n)}function Un(t,e,n){const s=t.type;if(!t.render){if(!e&&Nn&&!s.render){const e=s.template||Zt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Nn(e,c)}}t.render=s.render||i.dG,Dn&&Dn(t)}An(t),(0,r.Jd)();try{Jt(t)}finally{(0,r.lk)(),Rn()}}function Fn(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}}))}function jn(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return Fn(t)},slots:t.slots,emit:t.emit,expose:e}}function Vn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in zt?zt[n](t):void 0},has(t,e){return e in t||e in zt}}))}function Bn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function $n(t){return(0,i.mf)(t)&&"__vccOpts"in t}const qn=(t,e)=>(0,r.Fl)(t,e,xn);function zn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?nn(e)?un(t,null,[e]):un(t,e):un(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&nn(n)&&(n=[n]),un(t,e,n))}const Hn="3.4.4"},9242:function(t,e,n){"use strict";n.d(e,{D2:function(){return Nt},YZ:function(){return It},bM:function(){return bt},e8:function(){return yt},iM:function(){return Rt},nr:function(){return gt},ri:function(){return Lt}});n(7658);var r=n(3396),i=n(7139),s=n(4870);const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?c.createElementNS(o,t):"mathml"===e?c.createElementNS(a,t):c.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>c.createTextNode(t),createComment:t=>c.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>c.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t;const i=u.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(t,{slots:e})=>(0,r.h)(r.P$,w(t),e);p.displayName="Transition";const m={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g=p.props=(0,i.l7)({},r.nJ,m),y=(t,e=[])=>{(0,i.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},v=t=>!!t&&((0,i.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function w(t){const e={};for(const i in t)i in m||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=b(s),w=g&&g[0],_=g&&g[1],{onBeforeEnter:S,onEnter:k,onEnterCancelled:A,onLeave:R,onLeaveCancelled:N,onBeforeAppear:D=S,onAppear:x=k,onAppearCancelled:P=A}=e,L=(t,e,n)=>{T(t,e?h:c),T(t,e?l:a),n&&n()},M=(t,e)=>{t._isLeaving=!1,T(t,d),T(t,p),T(t,f),e&&e()},U=t=>(e,n)=>{const i=t?x:k,s=()=>L(e,t,n);y(i,[e,s]),I((()=>{T(e,t?u:o),E(e,t?h:c),v(i)||C(e,r,w,s)}))};return(0,i.l7)(e,{onBeforeEnter(t){y(S,[t]),E(t,o),E(t,a)},onBeforeAppear(t){y(D,[t]),E(t,u),E(t,l)},onEnter:U(!1),onAppear:U(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>M(t,e);E(t,d),O(),E(t,f),I((()=>{t._isLeaving&&(T(t,d),E(t,p),v(R)||C(t,r,_,n))})),y(R,[t,n])},onEnterCancelled(t){L(t,!1),y(A,[t])},onAppearCancelled(t){L(t,!0),y(P,[t])},onLeaveCancelled(t){M(t),y(N,[t])}})}function b(t){if(null==t)return null;if((0,i.Kn)(t))return[_(t.enter),_(t.leave)];{const e=_(t);return[e,e]}}function _(t){const e=(0,i.He)(t);return e}function E(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[f]||(t[f]=new Set)).add(e)}function T(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[f];n&&(n.delete(e),n.size||(t[f]=void 0))}function I(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let S=0;function C(t,e,n,r){const i=t._endId=++S,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=k(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function k(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=A(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=A(a,c);let l=null,f=0,p=0;e===h?o>0&&(l=h,f=o,p=s.length):e===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const m=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:m}}function A(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>R(e)+R(t[n]))))}function R(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function N(t,e,n){const r=t[f];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const D=Symbol("_vod");const x=Symbol("");function P(t,e,n){const r=t.style,s=(0,i.HD)(n);if(n&&!s){if(e&&!(0,i.HD)(e))for(const t in e)null==n[t]&&M(r,t,"");for(const t in n)M(r,t,n[t])}else{const i=r.display;if(s){if(e!==n){const t=r[x];t&&(n+=";"+t),r.cssText=n}}else e&&t.removeAttribute("style");D in t&&(r.display=i)}}const L=/\s*!important$/;function M(t,e,n){if((0,i.kJ)(n))n.forEach((n=>M(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=j(t,e);L.test(n)?t.setProperty((0,i.rs)(r),n.replace(L,""),"important"):t[r]=n}}const U=["Webkit","Moz","ms"],F={};function j(t,e){const n=F[e];if(n)return n;let r=(0,i._A)(e);if("filter"!==r&&r in t)return F[e]=r;r=(0,i.kC)(r);for(let i=0;i<U.length;i++){const n=U[i]+r;if(n in t)return F[e]=n}return e}const V="http://www.w3.org/1999/xlink";function B(t,e,n,r,s){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(V,e.slice(6,e.length)):t.setAttributeNS(V,e,n);else{const r=(0,i.Pq)(e);null==n||r&&!(0,i.yA)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function $(t,e,n,r,s,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,s,o),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){t._value=n;const r="OPTION"===c?t.getAttribute("value"):t.value,i=null==n?"":n;return r!==i&&(t.value=i),void(null==n&&t.removeAttribute(e))}let u=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function q(t,e,n,r){t.addEventListener(e,n,r)}function z(t,e,n,r){t.removeEventListener(e,n,r)}const H=Symbol("_vei");function K(t,e,n,r,i=null){const s=t[H]||(t[H]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=W(e);if(r){const o=s[e]=Y(r,i);q(t,n,o,a)}else o&&(z(t,n,o,a),s[e]=void 0)}}const G=/(?:Once|Passive|Capture)$/;function W(t){let e;if(G.test(t)){let n;e={};while(n=t.match(G))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.rs)(t.slice(2));return[n,e]}let J=0;const Q=Promise.resolve(),X=()=>J||(Q.then((()=>J=0)),J=Date.now());function Y(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.$d)(Z(t,n.value),e,5,[t])};return n.value=t,n.attached=X(),n}function Z(t,e){if((0,i.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const tt=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,et=(t,e,n,r,s,o,a,c,u)=>{const l="svg"===s;"class"===e?N(t,r,l):"style"===e?P(t,n,r):(0,i.F7)(e)?(0,i.tR)(e)||K(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):nt(t,e,r,l))?$(t,e,r,o,a,c,u):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),B(t,e,r,l))};function nt(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&tt(e)&&(0,i.mf)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!tt(e)||!(0,i.HD)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const rt=new WeakMap,it=new WeakMap,st=Symbol("_moveCb"),ot=Symbol("_enterCb"),at={name:"TransitionGroup",props:(0,i.l7)({},g,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!ht(o[0].el,n.vnode.el,e))return;o.forEach(ct),o.forEach(ut);const r=o.filter(lt);O(),r.forEach((t=>{const n=t.el,r=n.style;E(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[st]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n[st]=null,T(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(t),u=w(c);let l=c.tag||r.HY;o=a,a=e.default?(0,r.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.nK)(e,(0,r.U2)(e,u,i,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,r.nK)(e,(0,r.U2)(e,u,i,n)),rt.set(e,e.el.getBoundingClientRect())}return(0,r.Wm)(l,null,a)}}};at.props;function ct(t){const e=t.el;e[st]&&e[st](),e[ot]&&e[ot]()}function ut(t){it.set(t,t.el.getBoundingClientRect())}function lt(t){const e=rt.get(t),n=it.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function ht(t,e,n){const r=t.cloneNode(),i=t[f];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=k(r);return s.removeChild(r),o}const dt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(e)?t=>(0,i.ir)(e,t):e};function ft(t){t.target.composing=!0}function pt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mt=Symbol("_assign"),gt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[mt]=dt(s);const o=r||s.props&&"number"===s.props.type;q(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),t[mt](r)})),n&&q(t,"change",(()=>{t.value=t.value.trim()})),e||(q(t,"compositionstart",ft),q(t,"compositionend",pt),q(t,"change",pt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},o){if(t[mt]=dt(o),t.composing)return;const a=s||"number"===t.type?(0,i.h5)(t.value):t.value,c=null==e?"":e;if(a!==c){if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===c)return}t.value=c}}},yt={deep:!0,created(t,e,n){t[mt]=dt(n),q(t,"change",(()=>{const e=t._modelValue,n=Et(t),r=t.checked,s=t[mt];if((0,i.kJ)(e)){const t=(0,i.hq)(e,n),o=-1!==t;if(r&&!o)s(e.concat(n));else if(!r&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,i.DM)(e)){const t=new Set(e);r?t.add(n):t.delete(n),s(t)}else s(Tt(t,r))}))},mounted:vt,beforeUpdate(t,e,n){t[mt]=dt(n),vt(t,e,n)}};function vt(t,{value:e,oldValue:n},r){t._modelValue=e,(0,i.kJ)(e)?t.checked=(0,i.hq)(e,r.props.value)>-1:(0,i.DM)(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=(0,i.WV)(e,Tt(t,!0)))}const wt={created(t,{value:e},n){t.checked=(0,i.WV)(e,n.props.value),t[mt]=dt(n),q(t,"change",(()=>{t[mt](Et(t))}))},beforeUpdate(t,{value:e,oldValue:n},r){t[mt]=dt(r),e!==n&&(t.checked=(0,i.WV)(e,r.props.value))}},bt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=(0,i.DM)(e);q(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.h5)(Et(t)):Et(t)));t[mt](t.multiple?s?new Set(e):e:e[0])})),t[mt]=dt(r)},mounted(t,{value:e}){_t(t,e)},beforeUpdate(t,e,n){t[mt]=dt(n)},updated(t,{value:e}){_t(t,e)}};function _t(t,e){const n=t.multiple;if(!n||(0,i.kJ)(e)||(0,i.DM)(e)){for(let r=0,s=t.options.length;r<s;r++){const s=t.options[r],o=Et(s);if(n)(0,i.kJ)(e)?s.selected=(0,i.hq)(e,o)>-1:s.selected=e.has(o);else if((0,i.WV)(Et(s),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function Et(t){return"_value"in t?t._value:t.value}function Tt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const It={created(t,e,n){Ct(t,e,n,null,"created")},mounted(t,e,n){Ct(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Ct(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Ct(t,e,n,r,"updated")}};function St(t,e){switch(t){case"SELECT":return bt;case"TEXTAREA":return gt;default:switch(e){case"checkbox":return yt;case"radio":return wt;default:return gt}}}function Ct(t,e,n,r,i){const s=St(t.tagName,n.props&&n.props.type),o=s[i];o&&o(t,e,n,r)}const kt=["ctrl","shift","alt","meta"],At={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>kt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Rt=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=At[e[t]];if(r&&r(n,e))return}return t(n,...r)})},Ot={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Nt=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return e.some((t=>t===r||Ot[t]===r))?t(n):void 0})},Dt=(0,i.l7)({patchProp:et},l);let xt;function Pt(){return xt||(xt=(0,r.Us)(Dt))}const Lt=(...t)=>{const e=Pt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=Ut(t);if(!r)return;const s=e._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Mt(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Mt(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function Ut(t){if((0,i.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";n.d(e,{C_:function(){return X},DM:function(){return g},E9:function(){return q},F7:function(){return c},Gg:function(){return R},HD:function(){return b},He:function(){return B},Kj:function(){return v},Kn:function(){return E},NO:function(){return a},Nj:function(){return j},Od:function(){return h},PO:function(){return k},Pq:function(){return Z},RI:function(){return f},S0:function(){return A},W7:function(){return C},WV:function(){return nt},Z6:function(){return s},_A:function(){return D},_N:function(){return m},aU:function(){return U},dG:function(){return o},fY:function(){return r},h5:function(){return V},hR:function(){return M},hq:function(){return rt},ir:function(){return F},j5:function(){return K},kC:function(){return L},kJ:function(){return p},kT:function(){return i},l7:function(){return l},mf:function(){return w},rs:function(){return P},tI:function(){return T},tR:function(){return u},yA:function(){return tt},yk:function(){return _},yl:function(){return H},zw:function(){return it}});n(7658);function r(t,e){const n=new Set(t.split(","));return e?t=>n.has(t.toLowerCase()):t=>n.has(t)}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(t,e)=>d.call(t,e),p=Array.isArray,m=t=>"[object Map]"===S(t),g=t=>"[object Set]"===S(t),y=t=>"[object Date]"===S(t),v=t=>"[object RegExp]"===S(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,_=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),I=Object.prototype.toString,S=t=>I.call(t),C=t=>S(t).slice(8,-1),k=t=>"[object Object]"===S(t),A=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-(\w)/g,D=O((t=>t.replace(N,((t,e)=>e?e.toUpperCase():"")))),x=/\B([A-Z])/g,P=O((t=>t.replace(x,"-$1").toLowerCase())),L=O((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=O((t=>{const e=t?`on${L(t)}`:"";return e})),U=(t,e)=>!Object.is(t,e),F=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},j=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},V=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const q=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",H=r(z);function K(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=b(r)?Q(r):K(r);if(i)for(const t in i)e[t]=i[t]}return e}if(b(t)||E(t))return t}const G=/;(?![^(]*\))/g,W=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Q(t){const e={};return t.replace(J,"").split(G).forEach((t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=X(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Y);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=_(t),r=_(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>b(t)?t:null==t?"":p(t)||E(t)&&(t.toString===I||!w(t.toString))?JSON.stringify(t,st,2):String(t),st=(t,e)=>e&&e.__v_isRef?st(t,e.value):m(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[ot(e,r)+" =>"]=n,t)),{})}:g(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>ot(t)))}:_(e)?ot(e):!E(e)||p(e)||k(e)?e:String(e),ot=(t,e="")=>{var n;return _(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},65:function(t,e,n){"use strict";n.d(e,{MT:function(){return tt}});n(7658),n(541);var r=n(3396),i=n(4870);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return f()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function m(t,e){const n=t,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(c,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function v(t){return null!==t&&"object"===typeof t}function w(t){return t&&"function"===typeof t.then}function b(t,e){return function(){return t(e)}}function _(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;I(t,n,[],t._modules.root,!0),T(t,n,e)}function T(t,e,n){var s=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},u={},l=(0,i.B)(!0);l.run((function(){y(a,(function(e,n){c[n]=b(e,t),u[n]=(0,r.Fl)((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),t._state=(0,i.qj)({data:e}),t._scope=l,t.strict&&O(t),s&&n&&t._withCommit((function(){s.data=null})),o&&o.stop()}function I(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=N(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=S(t,o,n);r.forEachMutation((function(e,n){var r=o+n;k(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;A(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;R(t,r,e,u)})),r.forEachChild((function(r,s){I(t,e,n.concat(s),r,i)}))}function S(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return N(t.state,n)}}}),i}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return w(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function R(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function O(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function N(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return v(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var x="vuex bindings",P="vuex:mutations",L="vuex:actions",M="vuex",U=0;function F(t,e){m({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[x]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:j}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:j}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===M)if(n.filter){var r=[];H(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[z(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId;C(e,r),n.state=K(W(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=U++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:L,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var j=8702998,V=6710886,B=16777215,$={label:"namespaced",textColor:B,backgroundColor:V};function q(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function z(t,e){return{id:e||"root",label:q(e),tags:t.namespaced?[$]:[],children:Object.keys(t._children).map((function(n){return z(t._children[n],e+n+"/")}))}}function H(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[$]:[]}),Object.keys(e._children).forEach((function(i){H(t,e._children[i],n,r+i+"/")}))}function K(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=G(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?q(t):t,editable:!1,value:J((function(){return s[t]}))}}))}return i}function G(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=J((function(){return t[n]}))}else e[n]=J((function(){return t[n]}))})),e}function W(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function J(t){try{return t()}catch(e){return e}}var Q=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(t,e){this._children[t]=e},Q.prototype.removeChild=function(t){delete this._children[t]},Q.prototype.getChild=function(t){return this._children[t]},Q.prototype.hasChild=function(t){return t in this._children},Q.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Q.prototype.forEachChild=function(t){y(this._children,t)},Q.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},Q.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},Q.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(Q.prototype,X);var Y=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;Z(t.concat(r),e.getChild(r),n.modules[r])}}Y.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Y.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Y.prototype.update=function(t){Z([],this.root,t)},Y.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new Q(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&y(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},Y.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},Y.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Y(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=r;var u=this._modules.root.state;I(this,u,[],this._modules.root),T(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||g,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&F(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,i=D(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=D(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return _(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return _(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var i=this;return(0,r.YP)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),I(this,this.state,t,this._modules.get(t),n.preserveState),T(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=N(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ot(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=ot(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||ot(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=ot(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function rt(t){return it(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function it(t){return Array.isArray(t)||v(t)}function st(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var r=t._modulesNamespaceMap[n];return r}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return gt},KN:function(){return vt}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return f.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return k.set(e,s),s}w((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
/**
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
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",D="0.9.9",x=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",j="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.21.0",st="[DEFAULT]",ot={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[j]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ft=new s.LL("app","Firebase",dt);
/**
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
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
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
 */const mt=it;function gt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw ft.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ft.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ft.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(o,u),u}function yt(t=st){const e=at.get(t);if(!e&&t===st)return gt();if(!e)throw ft.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
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
 */
const wt="firebase-heartbeat-database",bt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=I(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function It(t){try{const e=await Tt();return e.transaction(_t).objectStore(_t).get(Ct(t))}catch(e){if(e instanceof s.ZR)x.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});x.warn(t.message)}}}async function St(t,e){try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);return await i.put(e,Ct(t)),r.done}catch(n){if(n instanceof s.ZR)x.warn(n.message);else{const t=ft.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const kt=1024,At=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ot();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ot(),{heartbeatsToSend:e,unsentEntries:n}=Nt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ot(){const t=new Date;return t.toISOString().substring(0,10)}function Nt(t,e=kt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),xt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function xt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Pt(t){lt(new r.wA("platform-logger",(t=>new R(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),vt(N,D,t),vt(N,D,"esm2017"),vt("fire-js","")}Pt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
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
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},1076:function(t,e,n){"use strict";n.d(e,{Z:function(){return $e}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Dt},hasStandardBrowserEnv:function(){return xt},hasStandardBrowserWebWorkerEnv:function(){return Pt}});n(3767),n(8585),n(8696),n(7658);function i(t,e){return function(){return t.apply(e,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,a=(t=>e=>{const n=s.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=t=>(t=t.toLowerCase(),e=>a(e)===t),u=t=>e=>typeof e===t,{isArray:l}=Array,h=u("undefined");function d(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&g(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const f=c("ArrayBuffer");function p(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}const m=u("string"),g=u("function"),y=u("number"),v=t=>null!==t&&"object"===typeof t,w=t=>!0===t||!1===t,b=t=>{if("object"!==a(t))return!1;const e=o(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},_=c("Date"),E=c("File"),T=c("Blob"),I=c("FileList"),S=t=>v(t)&&g(t.pipe),C=t=>{let e;return t&&("function"===typeof FormData&&t instanceof FormData||g(t.append)&&("formdata"===(e=a(t))||"object"===e&&g(t.toString)&&"[object FormData]"===t.toString()))},k=c("URLSearchParams"),A=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function R(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,i;if("object"!==typeof t&&(t=[t]),l(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function O(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;while(i-- >0)if(r=n[i],e===r.toLowerCase())return r;return null}const N=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),D=t=>!h(t)&&t!==N;function x(){const{caseless:t}=D(this)&&this||{},e={},n=(n,r)=>{const i=t&&O(e,r)||r;b(e[i])&&b(n)?e[i]=x(e[i],n):b(n)?e[i]=x({},n):l(n)?e[i]=n.slice():e[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&R(arguments[r],n);return e}const P=(t,e,n,{allOwnKeys:r}={})=>(R(e,((e,r)=>{n&&g(e)?t[r]=i(e,n):t[r]=e}),{allOwnKeys:r}),t),L=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),M=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},U=(t,e,n,r)=>{let i,s,a;const c={};if(e=e||{},null==t)return e;do{i=Object.getOwnPropertyNames(t),s=i.length;while(s-- >0)a=i[s],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},F=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},j=t=>{if(!t)return null;if(l(t))return t;let e=t.length;if(!y(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},V=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&o(Uint8Array)),B=(t,e)=>{const n=t&&t[Symbol.iterator],r=n.call(t);let i;while((i=r.next())&&!i.done){const n=i.value;e.call(t,n[0],n[1])}},$=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},q=c("HTMLFormElement"),z=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),H=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),K=c("RegExp"),G=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};R(n,((n,i)=>{let s;!1!==(s=e(n,i,t))&&(r[i]=s||n)})),Object.defineProperties(t,r)},W=t=>{G(t,((e,n)=>{if(g(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];g(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},J=(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return l(t)?r(t):r(String(t).split(e)),n},Q=()=>{},X=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Y="abcdefghijklmnopqrstuvwxyz",Z="0123456789",tt={DIGIT:Z,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+Z},et=(t=16,e=tt.ALPHA_DIGIT)=>{let n="";const{length:r}=e;while(t--)n+=e[Math.random()*r|0];return n};function nt(t){return!!(t&&g(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])}const rt=t=>{const e=new Array(10),n=(t,r)=>{if(v(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=l(t)?[]:{};return R(t,((t,e)=>{const s=n(t,r+1);!h(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)},it=c("AsyncFunction"),st=t=>t&&(v(t)||g(t))&&g(t.then)&&g(t.catch);var ot={isArray:l,isArrayBuffer:f,isBuffer:d,isFormData:C,isArrayBufferView:p,isString:m,isNumber:y,isBoolean:w,isObject:v,isPlainObject:b,isUndefined:h,isDate:_,isFile:E,isBlob:T,isRegExp:K,isFunction:g,isStream:S,isURLSearchParams:k,isTypedArray:V,isFileList:I,forEach:R,merge:x,extend:P,trim:A,stripBOM:L,inherits:M,toFlatObject:U,kindOf:a,kindOfTest:c,endsWith:F,toArray:j,forEachEntry:B,matchAll:$,isHTMLForm:q,hasOwnProperty:H,hasOwnProp:H,reduceDescriptors:G,freezeMethods:W,toObjectSet:J,toCamelCase:z,noop:Q,toFiniteNumber:X,findKey:O,global:N,isContextDefined:D,ALPHABET:tt,generateString:et,isSpecCompliantForm:nt,toJSONObject:rt,isAsyncFn:it,isThenable:st};n(541);function at(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}ot.inherits(at,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ot.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ct=at.prototype,ut={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{ut[t]={value:t}})),Object.defineProperties(at,ut),Object.defineProperty(ct,"isAxiosError",{value:!0}),at.from=(t,e,n,r,i,s)=>{const o=Object.create(ct);return ot.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),at.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var lt=at,ht=null;function dt(t){return ot.isPlainObject(t)||ot.isArray(t)}function ft(t){return ot.endsWith(t,"[]")?t.slice(0,-2):t}function pt(t,e,n){return t?t.concat(e).map((function(t,e){return t=ft(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function mt(t){return ot.isArray(t)&&!t.some(dt)}const gt=ot.toFlatObject(ot,{},null,(function(t){return/^is[A-Z]/.test(t)}));function yt(t,e,n){if(!ot.isObject(t))throw new TypeError("target must be an object");e=e||new(ht||FormData),n=ot.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!ot.isUndefined(e[t])}));const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ot.isSpecCompliantForm(e);if(!ot.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(ot.isDate(t))return t.toISOString();if(!c&&ot.isBlob(t))throw new lt("Blob is not supported. Use a Buffer instead.");return ot.isArrayBuffer(t)||ot.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,i){let a=t;if(t&&!i&&"object"===typeof t)if(ot.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(ot.isArray(t)&&mt(t)||(ot.isFileList(t)||ot.endsWith(n,"[]"))&&(a=ot.toArray(t)))return n=ft(n),a.forEach((function(t,r){!ot.isUndefined(t)&&null!==t&&e.append(!0===o?pt([n],r,s):null===o?n:n+"[]",u(t))})),!1;return!!dt(t)||(e.append(pt(i,n,s),u(t)),!1)}const h=[],d=Object.assign(gt,{defaultVisitor:l,convertValue:u,isVisitable:dt});function f(t,n){if(!ot.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),ot.forEach(t,(function(t,r){const s=!(ot.isUndefined(t)||null===t)&&i.call(e,t,ot.isString(r)?r.trim():r,n,d);!0===s&&f(t,n?n.concat(r):[r])})),h.pop()}}if(!ot.isObject(t))throw new TypeError("data must be an object");return f(t),e}var vt=yt;function wt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function bt(t,e){this._pairs=[],t&&vt(t,this,e)}const _t=bt.prototype;_t.append=function(t,e){this._pairs.push([t,e])},_t.toString=function(t){const e=t?function(e){return t.call(this,e,wt)}:wt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Et=bt;function Tt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function It(t,e,n){if(!e)return t;const r=n&&n.encode||Tt,i=n&&n.serialize;let s;if(s=i?i(e,n):ot.isURLSearchParams(e)?e.toString():new Et(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}class St{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ot.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var Ct=St,kt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},At="undefined"!==typeof URLSearchParams?URLSearchParams:Et,Rt="undefined"!==typeof FormData?FormData:null,Ot="undefined"!==typeof Blob?Blob:null,Nt={isBrowser:!0,classes:{URLSearchParams:At,FormData:Rt,Blob:Ot},protocols:["http","https","file","blob","url","data"]};const Dt="undefined"!==typeof window&&"undefined"!==typeof document,xt=(t=>Dt&&["ReactNative","NativeScript","NS"].indexOf(t)<0)("undefined"!==typeof navigator&&navigator.product),Pt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Lt={...r,...Nt};function Mt(t,e){return vt(t,new Lt.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return Lt.isNode&&ot.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Ut(t){return ot.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function Ft(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function jt(t){function e(t,n,r,i){let s=t[i++];const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&ot.isArray(r)?r.length:s,a)return ot.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&ot.isObject(r[s])||(r[s]=[]);const c=e(t,n,r[s],i);return c&&ot.isArray(r[s])&&(r[s]=Ft(r[s])),!o}if(ot.isFormData(t)&&ot.isFunction(t.entries)){const n={};return ot.forEachEntry(t,((t,r)=>{e(Ut(t),r,n,0)})),n}return null}var Vt=jt;function Bt(t,e,n){if(ot.isString(t))try{return(e||JSON.parse)(t),ot.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const $t={transitional:kt,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=ot.isObject(t);i&&ot.isHTMLForm(t)&&(t=new FormData(t));const s=ot.isFormData(t);if(s)return r&&r?JSON.stringify(Vt(t)):t;if(ot.isArrayBuffer(t)||ot.isBuffer(t)||ot.isStream(t)||ot.isFile(t)||ot.isBlob(t))return t;if(ot.isArrayBufferView(t))return t.buffer;if(ot.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Mt(t,this.formSerializer).toString();if((o=ot.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return vt(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),Bt(t)):t}],transformResponse:[function(t){const e=this.transitional||$t.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&ot.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,s=!n&&r;try{return JSON.parse(t)}catch(i){if(s){if("SyntaxError"===i.name)throw lt.from(i,lt.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Lt.classes.FormData,Blob:Lt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ot.forEach(["delete","get","head","post","put","patch"],(t=>{$t.headers[t]={}}));var qt=$t;const zt=ot.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ht=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&zt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const Kt=Symbol("internals");function Gt(t){return t&&String(t).trim().toLowerCase()}function Wt(t){return!1===t||null==t?t:ot.isArray(t)?t.map(Wt):String(t)}function Jt(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}const Qt=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Xt(t,e,n,r,i){return ot.isFunction(r)?r.call(this,e,n):(i&&(e=n),ot.isString(e)?ot.isString(r)?-1!==e.indexOf(r):ot.isRegExp(r)?r.test(e):void 0:void 0)}function Yt(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function Zt(t,e){const n=ot.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}class te{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=Gt(e);if(!i)throw new Error("header name must be a non-empty string");const s=ot.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=Wt(t))}const s=(t,e)=>ot.forEach(t,((t,n)=>i(t,n,e)));return ot.isPlainObject(t)||t instanceof this.constructor?s(t,e):ot.isString(t)&&(t=t.trim())&&!Qt(t)?s(Ht(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=Gt(t),t){const n=ot.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return Jt(t);if(ot.isFunction(e))return e.call(this,t,n);if(ot.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Gt(t),t){const n=ot.findKey(this,t);return!(!n||void 0===this[n]||e&&!Xt(this,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=Gt(t),t){const i=ot.findKey(n,t);!i||e&&!Xt(n,n[i],i,e)||(delete n[i],r=!0)}}return ot.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;while(n--){const i=e[n];t&&!Xt(this,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return ot.forEach(this,((r,i)=>{const s=ot.findKey(n,i);if(s)return e[s]=Wt(r),void delete e[i];const o=t?Yt(i):String(i).trim();o!==i&&delete e[i],e[o]=Wt(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return ot.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&ot.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=this[Kt]=this[Kt]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){const e=Gt(t);n[e]||(Zt(r,t),n[e]=!0)}return ot.isArray(t)?t.forEach(i):i(t),this}}te.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ot.reduceDescriptors(te.prototype,(({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[n]=t}}})),ot.freezeMethods(te);var ee=te;function ne(t,e){const n=this||qt,r=e||n,i=ee.from(r.headers);let s=r.data;return ot.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function re(t){return!(!t||!t.__CANCEL__)}function ie(t,e,n){lt.call(this,null==t?"canceled":t,lt.ERR_CANCELED,e,n),this.name="CanceledError"}ot.inherits(ie,lt,{__CANCEL__:!0});var se=ie;n(2801);function oe(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new lt("Request failed with status code "+n.status,[lt.ERR_BAD_REQUEST,lt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var ae=Lt.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];ot.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ot.isString(r)&&o.push("path="+r),ot.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ce(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ue(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function le(t,e){return t&&!ce(e)?ue(t,e):e}var he=Lt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=ot.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return function(){return!0}}();function de(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function fe(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}var pe=fe;function me(t,e){let n=0;const r=pe(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),u=s<=o;n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:i};l[e?"download":"upload"]=!0,t(l)}}const ge="undefined"!==typeof XMLHttpRequest;var ye=ge&&function(t){return new Promise((function(e,n){let r=t.data;const i=ee.from(t.headers).normalize();let s,o,{responseType:a,withXSRFToken:c}=t;function u(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}if(ot.isFormData(r))if(Lt.hasStandardBrowserEnv||Lt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if(!1!==(o=i.getContentType())){const[t,...e]=o?o.split(";").map((t=>t.trim())).filter(Boolean):[];i.setContentType([t||"multipart/form-data",...e].join("; "))}let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const h=le(t.baseURL,t.url);function d(){if(!l)return;const r=ee.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),i=a&&"text"!==a&&"json"!==a?l.response:l.responseText,s={data:i,status:l.status,statusText:l.statusText,headers:r,config:t,request:l};oe((function(t){e(t),u()}),(function(t){n(t),u()}),s),l=null}if(l.open(t.method.toUpperCase(),It(h,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new lt("Request aborted",lt.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new lt("Network Error",lt.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||kt;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new lt(e,r.clarifyTimeoutError?lt.ETIMEDOUT:lt.ECONNABORTED,t,l)),l=null},Lt.hasStandardBrowserEnv&&(c&&ot.isFunction(c)&&(c=c(t)),c||!1!==c&&he(h))){const e=t.xsrfHeaderName&&t.xsrfCookieName&&ae.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&ot.forEach(i.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),ot.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),a&&"json"!==a&&(l.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&l.addEventListener("progress",me(t.onDownloadProgress,!0)),"function"===typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",me(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{l&&(n(!e||e.type?new se(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const f=de(h);f&&-1===Lt.protocols.indexOf(f)?n(new lt("Unsupported protocol "+f+":",lt.ERR_BAD_REQUEST,t)):l.send(r||null)}))};const ve={http:ht,xhr:ye};ot.forEach(ve,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}}));const we=t=>`- ${t}`,be=t=>ot.isFunction(t)||null===t||!1===t;var _e={getAdapter:t=>{t=ot.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){let e;if(n=t[s],r=n,!be(n)&&(r=ve[(e=String(n)).toLowerCase()],void 0===r))throw new lt(`Unknown adapter '${e}'`);if(r)break;i[e||"#"+s]=r}if(!r){const t=Object.entries(i).map((([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")));let n=e?t.length>1?"since :\n"+t.map(we).join("\n"):" "+we(t[0]):"as no adapter specified";throw new lt("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:ve};function Ee(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new se(null,t)}function Te(t){Ee(t),t.headers=ee.from(t.headers),t.data=ne.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=_e.getAdapter(t.adapter||qt.adapter);return e(t).then((function(e){return Ee(t),e.data=ne.call(t,t.transformResponse,e),e.headers=ee.from(e.headers),e}),(function(e){return re(e)||(Ee(t),e&&e.response&&(e.response.data=ne.call(t,t.transformResponse,e.response),e.response.headers=ee.from(e.response.headers))),Promise.reject(e)}))}const Ie=t=>t instanceof ee?t.toJSON():t;function Se(t,e){e=e||{};const n={};function r(t,e,n){return ot.isPlainObject(t)&&ot.isPlainObject(e)?ot.merge.call({caseless:n},t,e):ot.isPlainObject(e)?ot.merge({},e):ot.isArray(e)?e.slice():e}function i(t,e,n){return ot.isUndefined(e)?ot.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function s(t,e){if(!ot.isUndefined(e))return r(void 0,e)}function o(t,e){return ot.isUndefined(e)?ot.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>i(Ie(t),Ie(e),!0)};return ot.forEach(Object.keys(Object.assign({},t,e)),(function(r){const s=c[r]||i,o=s(t[r],e[r],r);ot.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Ce="1.6.2",ke={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{ke[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ae={};function Re(t,e,n){if("object"!==typeof t)throw new lt("options must be an object",lt.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;while(i-- >0){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new lt("option "+s+" must be "+n,lt.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new lt("Unknown option "+s,lt.ERR_BAD_OPTION)}}ke.transitional=function(t,e,n){function r(t,e){return"[Axios v"+Ce+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new lt(r(i," has been removed"+(e?" in "+e:"")),lt.ERR_DEPRECATED);return e&&!Ae[i]&&(Ae[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}};var Oe={assertOptions:Re,validators:ke};const Ne=Oe.validators;class De{constructor(t){this.defaults=t,this.interceptors={request:new Ct,response:new Ct}}request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=Se(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;void 0!==n&&Oe.assertOptions(n,{silentJSONParsing:Ne.transitional(Ne.boolean),forcedJSONParsing:Ne.transitional(Ne.boolean),clarifyTimeoutError:Ne.transitional(Ne.boolean)},!1),null!=r&&(ot.isFunction(r)?e.paramsSerializer={serialize:r}:Oe.assertOptions(r,{encode:Ne.function,serialize:Ne.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let s=i&&ot.merge(i.common,i[e.method]);i&&ot.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=ee.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[Te.bind(this),void 0];t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(h<l)u=u.then(t[h++],t[h++]);return u}l=o.length;let d=e;h=0;while(h<l){const t=o[h++],e=o[h++];try{d=t(d)}catch(f){e.call(this,f);break}}try{u=Te.call(this,d)}catch(f){return Promise.reject(f)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(t){t=Se(this.defaults,t);const e=le(t.baseURL,t.url);return It(e,t.params,t.paramsSerializer)}}ot.forEach(["delete","get","head","options"],(function(t){De.prototype[t]=function(e,n){return this.request(Se(n||{},{method:t,url:e,data:(n||{}).data}))}})),ot.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(Se(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}De.prototype[t]=e(),De.prototype[t+"Form"]=e(!0)}));var xe=De;class Pe{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new se(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new Pe((function(e){t=e}));return{token:e,cancel:t}}}var Le=Pe;function Me(t){return function(e){return t.apply(null,e)}}function Ue(t){return ot.isObject(t)&&!0===t.isAxiosError}const Fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fe).forEach((([t,e])=>{Fe[e]=t}));var je=Fe;function Ve(t){const e=new xe(t),n=i(xe.prototype.request,e);return ot.extend(n,xe.prototype,e,{allOwnKeys:!0}),ot.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return Ve(Se(t,e))},n}const Be=Ve(qt);Be.Axios=xe,Be.CanceledError=se,Be.CancelToken=Le,Be.isCancel=re,Be.VERSION=Ce,Be.toFormData=vt,Be.AxiosError=lt,Be.Cancel=Be.CanceledError,Be.all=function(t){return Promise.all(t)},Be.spread=Me,Be.isAxiosError=Ue,Be.mergeConfig=Se,Be.AxiosHeaders=ee,Be.formToJSON=t=>Vt(ot.isHTMLForm(t)?new FormData(t):t),Be.getAdapter=_e.getAdapter,Be.HttpStatusCode=je,Be.default=Be;var $e=Be},9365:function(t,e,n){"use strict";n.d(e,{IH:function(){return $e},Kz:function(){return ze}});n(7658);var r=n(7077),i=n(5168),s=n(223),o=n(7142);n(2801),n(3767),n(8585),n(8696);const a=(t,e)=>e.some((e=>t instanceof e));let c,u;function l(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,g=new WeakMap;function y(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(T(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&d.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let w={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){w=t(w)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(I(this),e),T(d.get(this))}:function(...e){return T(t.apply(I(this),e))}:function(e,...n){const r=t.call(I(this),e,...n);return p.set(r,e.sort?e.sort():[e]),T(r)}}function E(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&v(t),a(t,l())?new Proxy(t,w):t)}function T(t){if(t instanceof IDBRequest)return y(t);if(m.has(t))return m.get(t);const e=E(t);return e!==t&&(m.set(t,e),g.set(e,t)),e}const I=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=T(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(T(o.result),t.oldVersion,t.newVersion,T(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],A=new Map;function R(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}b((t=>({...t,get:(e,n,r)=>R(e,n)||t.get(e,n,r),has:(e,n)=>!!R(e,n)||t.has(e,n)})));const O="@firebase/installations",N="0.6.4",D=1e4,x=`w:${N}`,P="FIS_v2",L="https://firebaseinstallations.googleapis.com/v1",M=36e5,U="installations",F="Installations",j={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},V=new s.LL(U,F,j);function B(t){return t instanceof s.ZR&&t.code.includes("request-failed")}
/**
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
 */function $({projectId:t}){return`${L}/projects/${t}/installations`}function q(t){return{token:t.token,requestStatus:2,expiresIn:W(t.expiresIn),creationTime:Date.now()}}async function z(t,e){const n=await e.json(),r=n.error;return V.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function H({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function K(t,{refreshToken:e}){const n=H(t);return n.append("Authorization",J(e)),n}async function G(t){const e=await t();return e.status>=500&&e.status<600?t():e}function W(t){return Number(t.replace("s","000"))}function J(t){return`${P} ${t}`}
/**
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
 */async function Q({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$(t),i=H(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:P,appId:t.appId,sdkVersion:x},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await G((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:q(t.authToken)};return e}throw await z("Create Installation",c)}
/**
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
 */function X(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
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
 */function Y(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
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
 */const Z=/^[cdef][\w-]{21}$/,tt="";function et(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=nt(t);return Z.test(n)?n:tt}catch(t){return tt}}function nt(t){const e=Y(t);return e.substr(0,22)}
/**
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
 */function rt(t){return`${t.appName}!${t.appId}`}
/**
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
 */const it=new Map;function st(t,e){const n=rt(t);ot(n,e),at(n,e)}function ot(t,e){const n=it.get(t);if(n)for(const r of n)r(e)}function at(t,e){const n=ut();n&&n.postMessage({key:t,fid:e}),lt()}let ct=null;function ut(){return!ct&&"BroadcastChannel"in self&&(ct=new BroadcastChannel("[Firebase] FID Change"),ct.onmessage=t=>{ot(t.data.key,t.data.fid)}),ct}function lt(){0===it.size&&ct&&(ct.close(),ct=null)}
/**
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
 */const ht="firebase-installations-database",dt=1,ft="firebase-installations-store";let pt=null;function mt(){return pt||(pt=S(ht,dt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ft)}}})),pt}async function gt(t,e){const n=rt(t),r=await mt(),i=r.transaction(ft,"readwrite"),s=i.objectStore(ft),o=await s.get(n);return await s.put(e,n),await i.done,o&&o.fid===e.fid||st(t,e.fid),e}async function yt(t){const e=rt(t),n=await mt(),r=n.transaction(ft,"readwrite");await r.objectStore(ft).delete(e),await r.done}async function vt(t,e){const n=rt(t),r=await mt(),i=r.transaction(ft,"readwrite"),s=i.objectStore(ft),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||st(t,a.fid),a}
/**
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
 */async function wt(t){let e;const n=await vt(t.appConfig,(n=>{const r=bt(n),i=_t(t,r);return e=i.registrationPromise,i.installationEntry}));return n.fid===tt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bt(t){const e=t||{fid:et(),registrationStatus:0};return St(e)}function _t(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(V.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Et(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Tt(t)}:{installationEntry:e}}async function Et(t,e){try{const n=await Q(t,e);return gt(t.appConfig,n)}catch(n){throw B(n)&&409===n.customData.serverCode?await yt(t.appConfig):await gt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Tt(t){let e=await It(t.appConfig);while(1===e.registrationStatus)await X(100),e=await It(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await wt(t);return n||e}return e}function It(t){return vt(t,(t=>{if(!t)throw V.create("installation-not-found");return St(t)}))}function St(t){return Ct(t)?{fid:t.fid,registrationStatus:0}:t}function Ct(t){return 1===t.registrationStatus&&t.registrationTime+D<Date.now()}
/**
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
 */async function kt({appConfig:t,heartbeatServiceProvider:e},n){const r=At(t,n),i=K(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:x,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await G((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e=q(t);return e}throw await z("Generate Auth Token",c)}function At(t,{fid:e}){return`${$(t)}/${e}/authTokens:generate`}
/**
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
 */async function Rt(t,e=!1){let n;const r=await vt(t.appConfig,(r=>{if(!xt(r))throw V.create("not-registered");const i=r.authToken;if(!e&&Pt(i))return r;if(1===i.requestStatus)return n=Ot(t,e),r;{if(!navigator.onLine)throw V.create("app-offline");const e=Mt(r);return n=Dt(t,e),e}})),i=n?await n:r.authToken;return i}async function Ot(t,e){let n=await Nt(t.appConfig);while(1===n.authToken.requestStatus)await X(100),n=await Nt(t.appConfig);const r=n.authToken;return 0===r.requestStatus?Rt(t,e):r}function Nt(t){return vt(t,(t=>{if(!xt(t))throw V.create("not-registered");const e=t.authToken;return Ut(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function Dt(t,e){try{const n=await kt(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await gt(t.appConfig,r),n}catch(n){if(!B(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gt(t.appConfig,n)}else await yt(t.appConfig);throw n}}function xt(t){return void 0!==t&&2===t.registrationStatus}function Pt(t){return 2===t.requestStatus&&!Lt(t)}function Lt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+M}function Mt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ut(t){return 1===t.requestStatus&&t.requestTime+D<Date.now()}
/**
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
 */async function Ft(t){const e=t,{installationEntry:n,registrationPromise:r}=await wt(e);return r?r.catch(console.error):Rt(e).catch(console.error),n.fid}
/**
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
 */async function jt(t,e=!1){const n=t;await Vt(n);const r=await Rt(n,e);return r.token}async function Vt(t){const{registrationPromise:e}=await wt(t);e&&await e}
/**
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
 */
/**
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
 */
function Bt(t){if(!t||!t.options)throw $t("App Configuration");if(!t.name)throw $t("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $t(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $t(t){return V.create("missing-app-config-values",{valueName:t})}
/**
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
 */const qt="installations",zt="installations-internal",Ht=t=>{const e=t.getProvider("app").getImmediate(),n=Bt(e),i=(0,r.qX)(e,"heartbeat"),s={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return s},Kt=t=>{const e=t.getProvider("app").getImmediate(),n=(0,r.qX)(e,qt).getImmediate(),i={getId:()=>Ft(n),getToken:t=>jt(n,t)};return i};function Gt(){(0,r.Xd)(new o.wA(qt,Ht,"PUBLIC")),(0,r.Xd)(new o.wA(zt,Kt,"PRIVATE"))}Gt(),(0,r.KN)(O,N),(0,r.KN)(O,N,"esm2017");
/**
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
 */
const Wt="analytics",Jt="firebase_id",Qt="origin",Xt=6e4,Yt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zt="https://www.googletagmanager.com/gtag/js",te=new i.Yd("@firebase/analytics"),ee={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ne=new s.LL("analytics","Analytics",ee);
/**
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
 */
function re(t){if(!t.startsWith(Zt)){const e=ne.create("invalid-gtag-resource",{gtagURL:t});return te.warn(e.message),""}return t}function ie(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function se(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function oe(t,e){const n=se("firebase-js-sdk-policy",{createScriptURL:re}),r=document.createElement("script"),i=`${Zt}?l=${t}&id=${e}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ae(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ce(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=await ie(n),r=t.find((t=>t.measurementId===i));r&&await e[r.appId]}}catch(a){te.error(a)}t("config",i,s)}async function ue(t,e,n,r,i){try{let s=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await ie(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){te.error(s)}}function le(t,e,n,r){async function i(i,...s){try{if("event"===i){const[r,i]=s;await ue(t,e,n,r,i)}else if("config"===i){const[i,o]=s;await ce(t,e,n,r,i,o)}else if("consent"===i){const[e]=s;t("consent","update",e)}else if("get"===i){const[e,n,r]=s;t("get",e,n,r)}else if("set"===i){const[e]=s;t("set",e)}else t(i,...s)}catch(o){te.error(o)}}return i}function he(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=le(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function de(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zt)&&n.src.includes(t))return n;return null}
/**
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
 */const fe=30,pe=1e3;class me{constructor(t={},e=pe){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ge=new me;function ye(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ve(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:ye(r)},s=Yt.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw ne.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function we(t,e=ge,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ne.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ne.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Te;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Xt),be({appId:r,apiKey:i,measurementId:s},o,a,e)}async function be(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ge){var o;const{appId:a,measurementId:c}=t;try{await _e(r,e)}catch(u){if(c)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const e=await ve(t);return i.deleteThrottleMetadata(a),e}catch(u){const e=u;if(!Ee(e)){if(i.deleteThrottleMetadata(a),c)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:c};throw u}const l=503===Number(null===(o=null===e||void 0===e?void 0:e.customData)||void 0===o?void 0:o.httpStatus)?(0,s.$s)(n,i.intervalMillis,fe):(0,s.$s)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(a,h),te.debug(`Calling attemptFetch again in ${l} millis`),be(t,h,r,i)}}function _e(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(s),r(ne.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function Ee(t){if(!(t instanceof s.ZR)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class Te{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
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
 */let Ie,Se;async function Ce(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,s=Object.assign(Object.assign({},r),{send_to:i});t("event",n,s)}}function ke(t){Se=t}function Ae(t){Ie=t}
/**
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
 */async function Re(){if(!(0,s.hl)())return te.warn(ne.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eu)()}catch(t){return te.warn(ne.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function Oe(t,e,n,r,i,s,o){var a;const c=we(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>te.error(t))),e.push(c);const u=Re().then((t=>t?r.getId():void 0)),[l,h]=await Promise.all([c,u]);de(s)||oe(s,l.measurementId),Se&&(i("consent","default",Se),ke(void 0)),i("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[Qt]="firebase",d.update=!0,null!=h&&(d[Jt]=h),i("config",l.measurementId,d),Ie&&(i("set",Ie),Ae(void 0)),l.measurementId}
/**
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
 */class Ne{constructor(t){this.app=t}_delete(){return delete De[this.app.options.appId],Promise.resolve()}}let De={},xe=[];const Pe={};let Le,Me,Ue="dataLayer",Fe="gtag",je=!1;function Ve(){const t=[];if((0,s.ru)()&&t.push("This is a browser extension environment."),(0,s.zI)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=ne.create("invalid-analytics-context",{errorInfo:e});te.warn(n.message)}}function Be(t,e,n){Ve();const r=t.options.appId;if(!r)throw ne.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw ne.create("no-api-key");te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=De[r])throw ne.create("already-exists",{id:r});if(!je){ae(Ue);const{wrappedGtag:t,gtagCore:e}=he(De,xe,Pe,Ue,Fe);Me=t,Le=e,je=!0}De[r]=Oe(t,xe,Pe,e,Le,Ue,n);const i=new Ne(t);return i}function $e(t=(0,r.Mq)()){t=(0,s.m9)(t);const e=(0,r.qX)(t,Wt);return e.isInitialized()?e.getImmediate():qe(t)}function qe(t,e={}){const n=(0,r.qX)(t,Wt);if(n.isInitialized()){const t=n.getImmediate();if((0,s.vZ)(e,n.getOptions()))return t;throw ne.create("already-initialized")}const i=n.initialize({options:e});return i}function ze(t,e,n,r){t=(0,s.m9)(t),Ce(Me,De[t.app.options.appId],e,n,r).catch((t=>te.error(t)))}const He="@firebase/analytics",Ke="0.10.0";function Ge(){function t(t){try{const e=t.getProvider(Wt).getImmediate();return{logEvent:(t,n,r)=>ze(e,t,n,r)}}catch(e){throw ne.create("interop-component-reg-failed",{reason:e})}}(0,r.Xd)(new o.wA(Wt,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Be(n,r,e)}),"PUBLIC")),(0,r.Xd)(new o.wA("analytics-internal",t,"PRIVATE")),(0,r.KN)(He,Ke),(0,r.KN)(He,Ke,"esm2017")}Ge()},7795:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.21.0";
/**
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
 */
(0,r.KN)(i,s,"app")},5677:function(t,e,n){"use strict";n.d(e,{aT:function(){return Ye},LG:function(){return De},v0:function(){return Gr},LS:function(){return Ne},Fb:function(){return Me},e5:function(){return Le},w7:function(){return je},TX:function(){return Pe}});n(7658);var r=n(223),i=n(7077);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].WARN&&h.warn(`Auth (${i.Jn}): ${t}`,...e)}function f(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
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
 */function p(t,...e){throw y(t,...e)}function m(t,...e){return y(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function y(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw y(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||w(e)}
/**
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
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
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
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function k(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class A{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new C(3e4,6e4);
/**
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
 */function N(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function D(t,e,n,i,s={}){return x(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),A.fetch()(L(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function x(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new M(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(s){if(s instanceof r.ZR)throw s;p(t,"network-request-failed",{message:String(s)})}}async function P(t,e,n,r,i={}){const s=await D(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function L(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`}class M{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),O.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(t,e,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function F(t,e){return D(t,"POST","/v1/accounts:delete",e)}async function j(t,e){return D(t,"POST","/v1/accounts:lookup",e)}
/**
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
 */function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
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
 */async function B(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=q(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:V($(s.auth_time)),issuedAtTime:V($(s.iat)),expirationTime:V($(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function $(t){return 1e3*Number(t)}function q(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function z(t){const e=q(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
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
 */async function H(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&K(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function K({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */class G{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class W{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function J(t){var e;const n=t.auth,r=await t.getIdToken(),i=await H(t,j(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?Y(s.providerUserInfo):[],a=X(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Q(t){const e=(0,r.m9)(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function Y(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function Z(t,e){const n=await x(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=L(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new tt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
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
 */function et(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class nt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await H(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return B(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await H(this,F(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=e;v(w&&T,t,"internal-error");const I=tt.fromJSON(this.name,T);v("string"===typeof w,t,"internal-error"),et(l,t.name),et(h,t.name),v("boolean"===typeof b,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),et(d,t.name),et(f,t.name),et(p,t.name),et(m,t.name),et(g,t.name),et(y,t.name);const S=new nt({uid:w,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new tt;r.updateFromServerResponse(e);const i=new nt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
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
 */const rt=new Map;function it(t){b(t instanceof Function,"Expected a class definition");let e=rt.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rt.set(t,e),e)}
/**
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
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const ot=st;
/**
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
 */function at(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=at(this.userKey,r.apiKey,i),this.fullPersistenceKey=at("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(it(ot),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||it(ot);const s=at(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=nt._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ct(i,t,n)):new ct(i,t,n)}}
/**
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
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(pt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function lt(t=(0,r.z$)()){return/firefox\//i.test(t)}function ht(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=(0,r.z$)()){return/crios\//i.test(t)}function ft(t=(0,r.z$)()){return/iemobile/i.test(t)}function pt(t=(0,r.z$)()){return/android/i.test(t)}function mt(t=(0,r.z$)()){return/blackberry/i.test(t)}function gt(t=(0,r.z$)()){return/webos/i.test(t)}function yt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vt(t=(0,r.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,r.w1)()&&10===document.documentMode}function bt(t=(0,r.z$)()){return yt(t)||pt(t)||gt(t)||mt(t)||/windows phone/i.test(t)||ft(t)}function _t(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
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
 */function Et(t,e=[]){let n;switch(t){case"Browser":n=ut((0,r.z$)());break;case"Worker":n=`${ut((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
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
 */async function Tt(t,e){return D(t,"GET","/v2/recaptchaConfig",N(t,e))}
/**
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
 */function It(t){return void 0!==t&&void 0!==t.enterprise}class St{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
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
 */function Ct(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function kt(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ct().appendChild(r)}))}function At(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Rt="https://www.google.com/recaptcha/enterprise.js?render=",Ot="recaptcha-enterprise",Nt="NO_RECAPTCHA";class Dt{constructor(t){this.type=Ot,this.auth=Mt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Tt(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new St(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;It(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Nt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&It(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));kt(Rt+n).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function xt(t,e,n,r=!1){const i=new Dt(t);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
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
 */class Pt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */class Lt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ut(this),this.idTokenSubscription=new Ut(this),this.beforeStateQueue=new Pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=it(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(it(t))}))}async initializeRecaptchaConfig(){const t=await Tt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new St(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Dt(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&it(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[it(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Et(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Mt(t){return(0,r.m9)(t)}class Ut{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function Ft(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function jt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Vt(t,e,n){const r=Mt(t);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Bt(e),{host:o,port:a}=$t(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zt()}function Bt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $t(t){const e=Bt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:qt(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:qt(e)}}}function qt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
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
 */class Ht{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
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
 */async function Kt(t,e){return D(t,"POST","/v1/accounts:resetPassword",N(t,e))}async function Gt(t,e){return D(t,"POST","/v1/accounts:update",e)}
/**
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
 */
async function Wt(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",N(t,e))}async function Jt(t,e){return D(t,"POST","/v1/accounts:sendOobCode",N(t,e))}async function Qt(t,e){return Jt(t,e)}
/**
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
 */
async function Xt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}async function Yt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",N(t,e))}
/**
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
 */class Zt extends Ht{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Zt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Zt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await xt(t,n,"signInWithPassword");return Wt(t,e)}return Wt(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await xt(t,n,"signInWithPassword");return Wt(t,e)}return Promise.reject(e)}));case"emailLink":return Xt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Gt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function te(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",N(t,e))}
/**
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
 */const ee="http://localhost";class ne extends Ht{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ne(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new ne(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return te(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,te(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,te(t,e)}buildRequest(){const t={requestUri:ee,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
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
 */async function re(t,e){return D(t,"POST","/v1/accounts:sendVerificationCode",N(t,e))}async function ie(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e))}async function se(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,e));if(n.temporaryProof)throw U(t,"account-exists-with-different-credential",n);return n}const oe={["USER_NOT_FOUND"]:"user-not-found"};async function ae(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",N(t,n),oe)}
/**
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
 */class ce extends Ht{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new ce({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new ce({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ie(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return se(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ae(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new ce({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function ue(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function le(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class he{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ue(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=le(t);try{return new he(e)}catch(n){return null}}}
/**
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
 */
class de{constructor(){this.providerId=de.PROVIDER_ID}static credential(t,e){return Zt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=he.parseLink(e);return v(n,"argument-error"),Zt._fromEmailAndCode(t,n.code,n.tenantId)}}de.PROVIDER_ID="password",de.EMAIL_PASSWORD_SIGN_IN_METHOD="password",de.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class fe{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class pe extends fe{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class me extends pe{constructor(){super("facebook.com")}static credential(t){return ne._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.FACEBOOK_SIGN_IN_METHOD="facebook.com",me.PROVIDER_ID="facebook.com";
/**
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
 */
class ge extends pe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ne._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ge.credential(e,n)}catch(r){return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com",ge.PROVIDER_ID="google.com";
/**
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
 */
class ye extends pe{constructor(){super("github.com")}static credential(t){return ne._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ye.credentialFromTaggedObject(t)}static credentialFromError(t){return ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ye.credential(t.oauthAccessToken)}catch(e){return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com",ye.PROVIDER_ID="github.com";
/**
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
 */
class ve extends pe{constructor(){super("twitter.com")}static credential(t,e){return ne._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ve.credential(e,n)}catch(r){return null}}}ve.TWITTER_SIGN_IN_METHOD="twitter.com",ve.PROVIDER_ID="twitter.com";
/**
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
 */
class we{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await nt._fromIdTokenResponse(t,n,r),s=be(n),o=new we({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=be(n);return new we({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function be(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */
/**
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
 */
class _e extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,_e.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new _e(t,e,n,r)}}function Ee(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw _e._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
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
 */async function Te(t,e,n=!1){const r=await H(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return we._forOperation(t,"link",r)}
/**
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
 */
async function Ie(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await H(t,Ee(r,i,e,t),n);v(s.idToken,r,"internal-error");const o=q(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),we._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
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
 */async function Se(t,e,n=!1){const r="signIn",i=await Ee(t,r,e),s=await we._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ce(t,e){return Se(Mt(t),e)}
/**
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
 */
class ke{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?Ae._fromServerResponse(t,e):"totpInfo"in e?Re._fromServerResponse(t,e):p(t,"internal-error")}}class Ae extends ke{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new Ae(e)}}class Re extends ke{constructor(t){super("totp",t)}static _fromServerResponse(t,e){return new Re(e)}}
/**
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
 */function Oe(t,e,n){var r;v((null===(r=n.url)||void 0===r?void 0:r.length)>0,t,"invalid-continue-uri"),v("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(v(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(v(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
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
 */async function Ne(t,e,n){var r;const i=Mt(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const t=await xt(i,s,"getOobCode",!0);n&&Oe(i,t,n),await Qt(i,t)}else n&&Oe(i,s,n),await Qt(i,s).catch((async t=>{if("auth/missing-recaptcha-token"!==t.code)return Promise.reject(t);{console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const t=await xt(i,s,"getOobCode",!0);n&&Oe(i,t,n),await Qt(i,t)}}))}async function De(t,e,n){await Kt((0,r.m9)(t),{oobCode:e,newPassword:n})}async function xe(t,e){const n=(0,r.m9)(t),i=await Kt(n,{oobCode:e}),s=i.requestType;switch(v(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":v(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":v(i.mfaInfo,n,"internal-error");default:v(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=ke._fromServerResponse(Mt(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Pe(t,e){const{data:n}=await xe((0,r.m9)(t),e);return n.email}function Le(t,e,n){return Ce((0,r.m9)(t),de.credential(e,n))}
/**
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
 */
/**
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
 */
function Me(t,e){return(0,r.m9)(t).setPersistence(e)}function Ue(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function Fe(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}function je(t){return(0,r.m9)(t).signOut()}
/**
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
 */
function Ve(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function Be(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}function $e(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:start",N(t,e))}function qe(t,e){return D(t,"POST","/v2/accounts/mfaEnrollment:finalize",N(t,e))}new WeakMap;const ze="__sak";
/**
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
 */class He{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Ke(){const t=(0,r.z$)();return ht(t)||yt(t)}const Ge=1e3,We=10;class Je extends He{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ke()&&_t(),this.fallbackToPolling=bt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);wt()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,We):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Ge)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Je.type="LOCAL";const Qe=Je;
/**
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
 */class Xe extends He{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Xe.type="SESSION";const Ye=Xe;
/**
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
 */function Ze(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
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
 */class tn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new tn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Ze(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function en(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */tn.receivers=[];class nn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=en("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function rn(){return window}function sn(t){rn().location.href=t}
/**
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
 */function on(){return"undefined"!==typeof rn()["WorkerGlobalScope"]&&"function"===typeof rn()["importScripts"]}async function an(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function cn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function un(){return on()?self:null}
/**
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
 */const ln="firebaseLocalStorageDb",hn=1,dn="firebaseLocalStorage",fn="fbase_key";class pn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function mn(t,e){return t.transaction([dn],e?"readwrite":"readonly").objectStore(dn)}function gn(){const t=indexedDB.deleteDatabase(ln);return new pn(t).toPromise()}function yn(){const t=indexedDB.open(ln,hn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(dn,{keyPath:fn})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(dn)?e(n):(n.close(),await gn(),e(await yn()))}))}))}async function vn(t,e,n){const r=mn(t,!0).put({[fn]:e,value:n});return new pn(r).toPromise()}async function wn(t,e){const n=mn(t,!1).get(e),r=await new pn(n).toPromise();return void 0===r?null:r.value}function bn(t,e){const n=mn(t,!0).delete(e);return new pn(n).toPromise()}const _n=800,En=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>En)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return on()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(un()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await an(),!this.activeServiceWorker)return;this.sender=new nn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&cn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await yn();return await vn(t,ze,"1"),await bn(t,ze),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>vn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>wn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>bn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=mn(t,!1).getAll();return new pn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),_n)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const In=Tn;
/**
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
 */function Sn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:start",N(t,e))}function Cn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}function kn(t,e){return D(t,"POST","/v2/accounts/mfaSignIn:finalize",N(t,e))}
/**
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
 */
/**
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
 */
At("rcb"),new C(3e4,6e4);
/**
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
 */
const An="recaptcha";async function Rn(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===An,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await Ve(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Sn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await re(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
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
 */
class On{constructor(t){this.providerId=On.PROVIDER_ID,this.auth=Mt(t)}verifyPhoneNumber(t,e){return Rn(this.auth,t,(0,r.m9)(e))}static credential(t,e){return ce._fromVerification(t,e)}static credentialFromResult(t){const e=t;return On.credentialFromTaggedObject(e)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?ce._fromTokenResponse(e,n):null}}
/**
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
 */
function Nn(t,e){return e?it(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class Dn extends Ht{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return te(t,this._buildIdpRequest())}_linkToIdToken(t,e){return te(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return te(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function xn(t){return Se(t.auth,new Dn(t),t.bypassAuthState)}function Pn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Ie(n,new Dn(t),t.bypassAuthState)}async function Ln(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Te(n,new Dn(t),t.bypassAuthState)}
/**
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
 */class Mn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xn;case"linkViaPopup":case"linkViaRedirect":return Ln;case"reauthViaPopup":case"reauthViaRedirect":return Pn;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Un=new C(2e3,1e4);class Fn extends Mn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=en();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Un.get())};t()}}Fn.currentPopupAction=null;
/**
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
 */
const jn="pendingRedirect",Vn=new Map;class Bn extends Mn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Vn.get(this.auth._key());if(!t){try{const e=await $n(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Vn.set(this.auth._key(),t)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function $n(t,e){const n=Hn(e),r=zn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function qn(t,e){Vn.set(t._key(),e)}function zn(t){return it(t._redirectPersistence)}function Hn(t){return at(jn,t.config.apiKey,t.name)}
/**
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
 */async function Kn(t,e,n=!1){const r=Mt(t),i=Nn(r,e),s=new Bn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
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
 */
const Gn=6e5;class Wn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Xn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Qn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Gn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jn(t))}saveEventToCache(t){this.cachedEventUids.add(Jn(t)),this.lastProcessedEventTime=Date.now()}}function Jn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Qn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Xn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qn(t);default:return!1}}
/**
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
 */async function Yn(t,e={}){return D(t,"GET","/v1/projects",e)}
/**
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
 */const Zn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function er(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yn(t);for(const r of e)try{if(nr(r))return}catch(n){}p(t,"unauthorized-domain")}function nr(t){const e=_(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tr.test(n))return!1;if(Zn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
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
 */const rr=new C(3e4,6e4);function ir(){const t=rn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function sr(t){return new Promise(((e,n)=>{var r,i,s;function o(){ir(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ir(),n(m(t,"network-request-failed"))},timeout:rr.get()})}if(null===(i=null===(r=rn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=rn().gapi)||void 0===s?void 0:s.load)){const e=At("iframefcb");return rn()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},kt(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw or=null,t}))}let or=null;function ar(t){return or=or||sr(t),or}
/**
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
 */const cr=new C(5e3,15e3),ur="__/auth/iframe",lr="emulator/auth/iframe",hr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fr(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,lr):`https://${t.config.authDomain}/${ur}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=dr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function pr(t){const e=await ar(t),n=rn().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:fr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=m(t,"network-request-failed"),s=rn().setTimeout((()=>{r(i)}),cr.get());function o(){rn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gr=500,yr=600,vr="_blank",wr="http://localhost";class br{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function _r(t,e,n,i=gr,s=yr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},mr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=dt(l)?vr:n),lt(l)&&(e=e||wr,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(vt(l)&&"_self"!==c)return Er(e||"",c),new br(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(f){}return new br(d)}function Er(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const Tr="__/auth/handler",Ir="emulator/auth/handler",Sr=encodeURIComponent("fac");async function Cr(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof fe){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof pe){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${Sr}=${encodeURIComponent(l)}`:"";return`${kr(t)}?${(0,r.xO)(u).slice(1)}${h}`}function kr({config:t}){return t.emulator?k(t,Ir):`https://${t.authDomain}/${Tr}`}
/**
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
 */const Ar="webStorageSupport";class Rr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ye,this._completeRedirectFn=Kn,this._overrideRedirectResult=qn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Cr(t,e,n,_(),r);return _r(t,s,en())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await Cr(t,e,n,_(),r);return sn(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await pr(t),n=new Wn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ar,{type:Ar},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ar];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=er(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bt()||ht()||yt()}}const Or=Rr;class Nr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Dr extends Nr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Dr(t)}_finalizeEnroll(t,e,n){return Be(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Cn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xr{constructor(){}static assertion(t){return Dr._fromCredential(t)}}xr.FACTOR_ID="phone";class Pr{static assertionForEnrollment(t,e){return Lr._fromSecret(t,e)}static assertionForSignIn(t,e){return Lr._fromEnrollmentId(t,e)}static async generateSecret(t){const e=t;v("undefined"!==typeof e.auth,"internal-error");const n=await $e(e.auth,{idToken:e.credential,totpEnrollmentInfo:{}});return Mr._fromStartTotpMfaEnrollmentResponse(n,e.auth)}}Pr.FACTOR_ID="totp";class Lr extends Nr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Lr(e,void 0,t)}static _fromEnrollmentId(t,e){return new Lr(e,t)}async _finalizeEnroll(t,e,n){return v("undefined"!==typeof this.secret,t,"argument-error"),qe(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){v(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return kn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Mr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Mr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Ur(t)||Ur(e))&&(r=!0),r&&(Ur(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ur(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ur(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Fr="@firebase/auth",jr="0.23.1";
/**
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
 */
class Vr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Br(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $r(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),v(!(null===a||void 0===a?void 0:a.includes(":")),"argument-error",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Et(t)},u=new Lt(r,i,s,c);return jt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=Mt(t.getProvider("auth").getImmediate());return(t=>new Vr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Fr,jr,Br(t)),(0,i.KN)(Fr,jr,"esm2017")}
/**
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
 */const qr=300,zr=(0,r.Pz)("authIdTokenMaxAge")||qr;let Hr=null;const Kr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zr)return;const i=null===n||void 0===n?void 0:n.token;Hr!==i&&(Hr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ft(t,{popupRedirectResolver:Or,persistence:[In,Qe,Ye]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const t=Kr(s);Fe(n,t,(()=>t(n.currentUser))),Ue(n,(e=>t(e)))}const o=(0,r.q4)("auth");return o&&Vt(n,`http://${o}`),n}$r("Browser")},4287:function(t,e,n){"use strict";n.d(e,{ET:function(){return hd},hJ:function(){return uh},JU:function(){return lh},QT:function(){return ad},PL:function(){return ud},ad:function(){return fh},Xo:function(){return Jh},IO:function(){return zh},Bt:function(){return pd},pl:function(){return ld},ar:function(){return Kh}});n(3767),n(8585),n(8696),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var I=0;T.prototype.s=!1,T.prototype.ra=function(){this.s||(this.s=!0,this.N(),0==I)||m(this)},T.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function C(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function O(t){return/^[\s\xa0]*$/.test(t)}var N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return t<e?-1:t>e?1:0}function x(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function P(t){return-1!=x().indexOf(t)}function L(t){return L[" "](t),t}function M(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}L[" "]=d;var U,F=P("Opera"),j=P("Trident")||P("MSIE"),V=P("Edge"),B=V||j,$=P("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),q=-1!=x().toLowerCase().indexOf("webkit")&&!P("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var H="",K=function(){var t=x();return $?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):q?/WebKit\/(\S+)/.exec(t):F?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(H=K?K[1]:""),j){var G=z();if(null!=G&&G>parseFloat(H)){U=String(G);break t}}U=H}var W,J={};function Q(){return M(J,9,(function(){let t=0;const e=N(String(U)).split("."),n=N("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&j){var X=z();W=X||(parseInt(U,10)||void 0)}else W=void 0;var Y=W;function Z(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{L(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.$.h.call(this)}}E(Z,A);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++nt,this.fa=this.ia=!1}function it(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function st(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=S(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}ut.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ht(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new rt(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);return null}return n=It(n),t&&t[et]?t.O(e,n,p(r)?!!r.capture:!!r,i):mt(t,e,n,!1,r,i)}function mt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Et(t);if(a||(t[dt]=a=new ut(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=gt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)R||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(bt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function gt(){function t(n){return e.call(t.src,t.listener,n)}const e=_t;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);return null}return n=It(n),t&&t[et]?t.P(e,n,p(r)?!!r.capture:!!r,i):mt(t,e,n,!0,r,i)}function vt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=It(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ht(s,n,r,i),-1<n&&(it(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[et])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(lt(n,t),0==n.h&&(n.src=null,e[dt]=null)):it(t)}}}function bt(t){return t in ft?ft[t]:ft[t]="on"+t}function _t(t,e){if(t.fa)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.la||t.src;t.ia&&wt(t),t=n.call(r,e)}return t}function Et(t){return t=t[dt],t instanceof ut?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function St(){T.call(this),this.i=new ut(this),this.S=this,this.J=null}function Ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),ct(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=kt(o,r,!0,e)&&i}if(o=e.g=t,i=kt(o,r,!0,e)&&i,i=kt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=kt(o,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&lt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(St,T),St.prototype[et]=!0,St.prototype.removeEventListener=function(t,e,n,r){vt(this,t,e,n,r)},St.prototype.N=function(){if(St.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.J=null},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=h.JSON.stringify;function Rt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ot{constructor(){this.h=this.g=null}add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Dt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new xt),(t=>t.reset()));class xt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){h.setTimeout((()=>{throw t}),0)}function Lt(t,e){Nt||Mt(),Ut||(Nt(),Ut=!0),Ft.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Nt=function(){t.then(jt)}}var Ut=!1,Ft=new Ot;function jt(){for(var t;t=Rt();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ut=!1}function Vt(t,e){St.call(this),this.h=t||1,this.g=e||h,this.j=b(this.qb,this),this.l=Date.now()}function Bt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function qt(t){t.g=$t((()=>{t.g=null,t.i&&(t.i=!1,qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Vt,St),r=Vt.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ct(this,"tick"),this.ga&&(Bt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Vt.$.N.call(this),Bt(this),delete this.g};class zt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){T.call(this),this.h=t,this.g={}}E(Ht,T);var Kt=[];function Gt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var s=pt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Wt(t){st(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Jt(){this.g=!0}function Qt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Yt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(r?" "+r:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return At(n)}catch(a){return e}}Ht.prototype.N=function(){Ht.$.N.call(this),Wt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Jt.prototype.Ea=function(){this.g=!1},Jt.prototype.info=function(){};var ee={},ne=null;function re(){return ne=ne||new St}function ie(t){A.call(this,ee.Ta,t)}function se(t){const e=re();Ct(e,new ie(e))}function oe(t,e){A.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=re();Ct(e,new oe(e,t))}function ce(t,e){A.call(this,ee.Ua,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Ta="serverreachability",E(ie,A),ee.STAT_EVENT="statevent",E(oe,A),ee.Ua="timingevent",E(ce,A);var le={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},he={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var me,ge={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ye(){A.call(this,"d")}function ve(){A.call(this,"c")}function we(){}function be(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ht(this),this.P=Ee,t=B?125:void 0,this.V=new Vt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}E(ye,A),E(ve,A),E(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Ee=45e3,Te={},Ie={};function Se(t,e,n){t.L=1,t.v=Ge($e(e)),t.s=n,t.S=!0,Ce(t,null)}function Ce(t,e){t.G=Date.now(),Oe(t),t.A=$e(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),t.C=0,n=t.l.I,t.h=new _e,t.g=hr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zt(b(t.Pa,t,t.g),t.O)),Gt(t.U,t.g,"readystatechange",t.nb),e=t.I?ot(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),se(),Qt(t.j,t.u,t.A,t.m,t.W,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Ae(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Re(t,n),r==Ie){4==e&&(t.o=4,ae(14),i=!1),Yt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Te){t.o=4,ae(15),Yt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Yt(t.j,t.m,r,null),Le(t,r)}ke(t)&&r!=Ie&&r!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.L=!0,ae(11))):(Yt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),xe(t))}function Re(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ie:(n=Number(e.substring(n,r)),isNaN(n)?Te:(r+=1,r+n>e.length?Ie:(e=e.substr(r,n),t.C=r+n,e)))}function Oe(t){t.Y=Date.now()+t.P,Ne(t,t.P)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(b(t.lb,t),e)}function De(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function xe(t){0==t.l.H||t.J||or(t.l,t)}function Pe(t){De(t);var e=t.M;e&&"function"==typeof e.ra&&e.ra(),t.M=null,Bt(t.V),Wt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Le(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||mn(n.h,t)))if(!t.K&&mn(n.h,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;sr(n),Wn(n)}nr(n),ae(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=ue(b(n.ib,n),6e3));if(1>=pn(n.h)&&n.na){try{n.na()}catch(u){}n.na=void 0}}else cr(n,11)}else if((t.K||n.g==t)&&sr(n),!O(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const e=u[3];null!=e&&(n.qa=e,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Ke(r.G,r.F,t))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=lr(r,r.I?r.oa:null,r.Y),o.K){yn(r.h,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(De(a),Oe(a)),r.g=o}else er(r);0<n.i.length&&Qn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Gn(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}se(4)}catch(u){}}function Me(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ue(t){if(t.sa&&"function"==typeof t.sa)return t.sa();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ue(t),r=Me(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=be.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Bn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Bn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||B||this.g&&(this.h.h||this.g.ja()||$n(this.g)))){this.J||4!=l||7==e||se(8==e||0>=d?3:2),De(this);var n=this.g.da();this.aa=n;e:if(ke(this)){var r=$n(this.g);t="";var i=r.length,s=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),xe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ae(12),Pe(this),xe(this);break t}Yt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Le(this,n)}this.S?(Ae(this,l,o),B&&this.i&&3==l&&(Gt(this.U,this.V,"tick",this.mb),this.V.start())):(Yt(this.j,this.m,o,null),Le(this,o)),4==l&&Pe(this),this.i&&!this.J&&(4==l?or(this.l,this):(this.i=!1,Oe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Pe(this),xe(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Bn(this.g),e=this.g.ja();this.C<e.length&&(De(this),Ae(this,t,e),this.i&&4!=t&&Oe(this))}},r.cancel=function(){this.J=!0,Pe(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Zt(this.j,this.A),2!=this.L&&(se(),ae(17)),Pe(this),this.o=2,xe(this)):Ne(this,this.Y-t)};var je=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Be){this.h=void 0!==e?e:t.h,qe(this,t.j),this.s=t.s,this.g=t.g,ze(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),He(this,n),this.o=t.o}else t&&(n=String(t).match(je))?(this.h=!!e,qe(this,n[1]||"",!0),this.s=We(n[2]||""),this.g=We(n[3]||"",!0),ze(this,n[4]),this.l=We(n[5]||"",!0),He(this,n[6]||"",!0),this.o=We(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function $e(t){return new Be(t)}function qe(t,e,n){t.j=n?We(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function He(t,e,n){e instanceof nn?(t.i=e,un(t.i,t.h)):(n||(e=Je(e,tn)),t.i=new nn(e,t.h))}function Ke(t,e,n){t.i.set(e,n)}function Ge(t){return Ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function We(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Je(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Qe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Je(e,Xe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Je(e,Xe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Je(n,"/"==n.charAt(0)?Ze:Ye,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Je(n,en)),t.join("")};var Xe=/[#\/\?@]/g,Ye=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function sn(t,e){rn(t),e=cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return rn(t),e=cn(t,e),t.g.has(e)}function an(t,e,n){sn(t,e),0<n.length&&(t.i=null,t.g.set(cn(t,e),C(n)),t.h+=n.length)}function cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function un(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(sn(this,e),an(this,n,t))}),t)),t.j=e}r=nn.prototype,r.add=function(t,e){rn(this),this.i=null,t=cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.sa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){rn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return rn(this),this.i=null,t=cn(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function gn(t,e){t.g?t.g.add(e):t.h=e}function yn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function vn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return C(t.i)}function wn(){}function bn(){this.g=new wn}function _n(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;p(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(t,e){const n=new Jt;if(h.Image){const r=new Image;r.onload=_(Tn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(Tn,n,r,"TestLoadImage: error",!1,e),r.onabort=_(Tn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(Tn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Tn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function In(t){this.l=t.fc||null,this.j=t.ob||!1}function Sn(t,e){St.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},wn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(In,de),In.prototype.g=function(){return new Sn(this.l,this.j)},In.prototype.i=function(t){return function(){return t}}({}),E(Sn,St);var Cn=0;function kn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rn(t)}function Rn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Sn.prototype,r.open=function(t,e){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Cn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):Rn(this),3==this.readyState&&kn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,An(this))},r.Ya=function(t){this.g&&(this.response=t,An(this))},r.ka=function(){this.g&&An(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var On=h.JSON.parse;function Nn(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dn,this.L=this.M=!1}E(Nn,St);var Dn="",xn=/^https?$/i,Pn=["POST","PUT"];function Ln(t){return j&&Q()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Un(t),jn(t)}function Un(t){t.F||(t.F=!0,Ct(t,"complete"),Ct(t,"error"))}function Fn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Bn(t)||2!=t.da()))if(t.v&&4==Bn(t))$t(t.La,0,t);else if(Ct(t,"readystatechange"),4==Bn(t)){t.h=!1;try{const c=t.da();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.I).match(je)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!xn.test(i?i.toLowerCase():"")}n=r}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var o=2<Bn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.da()+"]",Un(t)}}finally{jn(t)}}}function jn(t,e){if(t.g){Vn(t);const r=t.g,i=t.C[0]?d:null;t.g=null,t.C=null,e||Ct(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Bn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Qr){return null}}function qn(t){let e="";return st(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ke(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ga=0,this.i=[],this.j=new Jt,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hn("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hn("baseRetryDelayMs",5e3,t),this.hb=Hn("retryDelaySeedMs",1e4,t),this.eb=Hn("forwardChannelMaxRetries",2,t),this.xa=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new hn(t&&t.concurrentRequestLimit),this.Ja=new bn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function Gn(t){if(Jn(t),3==t.H){var e=t.W++,n=$e(t.G);Ke(n,"SID",t.J),Ke(n,"RID",e),Ke(n,"TYPE","terminate"),Zn(t,n),e=new be(t,t.j,e,void 0),e.L=2,e.v=Ge($e(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Oe(e)}ur(t)}function Wn(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Jn(t){Wn(t),t.u&&(h.clearTimeout(t.u),t.u=null),sr(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Qn(t){fn(t.h)||t.m||(t.m=!0,Lt(t.Na,t),t.C=0)}function Xn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.F.concat(t.i),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=ue(b(t.Na,t,e),ar(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.W++;const r=$e(t.G);Ke(r,"SID",t.J),Ke(r,"RID",n),Ke(r,"AID",t.V),Zn(t,r),t.o&&t.s&&zn(r,t.o,t.s),n=new be(t,t.j,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=tr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),gn(t.h,n),Se(n,r,e)}function Zn(t,e){t.ma&&st(t.ma,(function(t,n){Ke(e,n,t)})),t.l&&Fe({},(function(t,n){Ke(e,n,t)}))}function tr(t,e,n){n=Math.min(t.i.length,n);var r=t.l?b(t.l.Va,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{_n(a,t,"req"+n+"_")}catch(ai){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.F=t,r}function er(t){t.g||t.u||(t.ba=1,Lt(t.Ma,t),t.A=0)}function nr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=ue(b(t.Ma,t),ar(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new be(t,t.j,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=$e(t.wa);Ke(e,"RID","rpc"),Ke(e,"SID",t.J),Ke(e,"CI",t.M?"0":"1"),Ke(e,"AID",t.V),Ke(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ge($e(e)),n.s=null,n.S=!0,Ce(n,t)}function sr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function or(t,e){var n=null;if(t.g==e){sr(t),rr(t),t.g=null;var r=2}else{if(!mn(t.h,e))return;n=e.F,yn(t.h,e),r=1}if(0!=t.H)if(t.ta=e.aa,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=re(),Ct(r,new ce(r,n)),Qn(t)}else er(t);else if(i=e.o,3==i||0==i&&0<t.ta||!(1==r&&Xn(t,e)||2==r&&nr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}function ar(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function cr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=b(t.pb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||qe(n,"https"),Ge(n)),En(n.toString(),r)}else ae(2);t.H=0,t.l&&t.l.za(e),ur(t),Jn(t)}function ur(t){if(t.H=0,t.pa=[],t.l){const e=vn(t.h);0==e.length&&0==t.i.length||(k(t.pa,e),k(t.pa,t.i),t.h.i.length=0,C(t.i),t.i.length=0),t.l.ya()}}function lr(t,e,n){var r=n instanceof Be?$e(n):new Be(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),ze(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Be(null,void 0);r&&qe(s,r),e&&(s.g=e),i&&ze(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ke(r,n,e),Ke(r,"VER",t.qa),Zn(t,r),r}function hr(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Nn(new In({ob:!0})):new Nn(t.va),e.Oa(t.I),e}function dr(){}function fr(){if(j&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(t,e){St.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yr(this)}function mr(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function gr(){ve.call(this),this.status=1}function yr(t){this.g=t}function vr(){this.blockSize=-1}function wr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function br(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function _r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=Nn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?fe(this.u):fe(me),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Mn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=S(Pn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vn(this),0<this.B&&((this.L=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=$t(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Mn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ct(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),Nn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Fn(this):this.kb())},r.kb=function(){Fn(this)},r.da=function(){try{return 2<Bn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),On(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.qa=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new be(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=ot(s),ct(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tr(this,i,e),n=$e(this.G),Ke(n,"RID",t),Ke(n,"CVER",22),this.F&&Ke(n,"X-HTTP-Session-Id",this.F),Zn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(qn(s)))+"&"+e:this.o&&zn(n,this.o,s)),gn(this.h,i),this.bb&&Ke(n,"TYPE","init"),this.P?(Ke(n,"$req",e),Ke(n,"SID","null"),i.ba=!0,Se(i,n,null)):Se(i,n,e),this.H=2}}else 3==this.H&&(t?Yn(this,t):0==this.i.length||fn(this.h)||Yn(this))},r.Ma=function(){if(this.u=null,ir(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=ue(b(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ae(10),Wn(this),ir(this))},r.ib=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),ae(19))},r.pb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},r=dr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.Va=function(){},fr.prototype.g=function(t,e){return new pr(t,e)},E(pr,St),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=lr(t,null,t.Y),Qn(t)},pr.prototype.close=function(){Gn(this.g)},pr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=At(t),t=n);e.i.push(new ln(e.fb++,t)),3==e.H&&Qn(e)},pr.prototype.N=function(){this.g.l=null,delete this.j,Gn(this.g),delete this.g,pr.$.N.call(this)},E(mr,ye),E(gr,ve),E(yr,dr),yr.prototype.Ba=function(){Ct(this.g,"a")},yr.prototype.Aa=function(t){Ct(this.g,new mr(t))},yr.prototype.za=function(t){Ct(this.g,new gr)},yr.prototype.ya=function(){Ct(this.g,"b")},E(wr,vr),wr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},wr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)br(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){br(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){br(this,r),i=0;break}}this.h=i,this.i+=e},wr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Er={};function Tr(t){return-128<=t&&128>t?M(Er,t,(function(t){return new _r([0|t],0>t?-1:0)})):new _r([0|t],0>t?-1:0)}function Ir(t){if(isNaN(t)||!isFinite(t))return kr;if(0>t)return Dr(Ir(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cr;return new _r(e,0)}function Sr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Dr(Sr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ir(Math.pow(e,8)),r=kr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Ir(Math.pow(e,s)),r=r.R(s).add(Ir(o))):(r=r.R(n),r=r.add(Ir(o)))}return r}var Cr=4294967296,kr=Tr(0),Ar=Tr(1),Rr=Tr(16777216);function Or(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Nr(t){return-1==t.h}function Dr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _r(n,~t.h).add(Ar)}function xr(t,e){return t.add(Dr(e))}function Pr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Lr(t,e){this.g=t,this.h=e}function Mr(t,e){if(Or(e))throw Error("division by zero");if(Or(t))return new Lr(kr,kr);if(Nr(t))return e=Mr(Dr(t),e),new Lr(Dr(e.g),Dr(e.h));if(Nr(e))return e=Mr(t,Dr(e)),new Lr(Dr(e.g),e.h);if(30<t.g.length){if(Nr(t)||Nr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ar,r=e;0>=r.X(t);)n=Ur(n),r=Ur(r);var i=Fr(n,1),s=Fr(r,1);for(r=Fr(r,2),n=Fr(n,2);!Or(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Fr(r,1),n=Fr(n,1)}return e=xr(t,i.R(e)),new Lr(i,e)}for(i=kr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ir(n),o=s.R(e);Nr(o)||0<o.X(t);)n-=r,s=Ir(n),o=s.R(e);Or(s)&&(s=Ar),i=i.add(s),t=xr(t,o)}return new Lr(i,t)}function Ur(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _r(n,t.h)}function Fr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _r(i,t.h)}r=_r.prototype,r.ea=function(){if(Nr(this))return-Dr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cr+r)*e,e*=Cr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Or(this))return"0";if(Nr(this))return"-"+Dr(this).toString(t);for(var e=Ir(Math.pow(t,6)),n=this,r="";;){var i=Mr(n,e).g;n=xr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Or(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=xr(this,t),Nr(t)?-1:Or(t)?0:1},r.abs=function(){return Nr(this)?Dr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(Or(this)||Or(t))return kr;if(Nr(this))return Nr(t)?Dr(this).R(Dr(t)):Dr(Dr(this).R(t));if(Nr(t))return Dr(this.R(Dr(t)));if(0>this.X(Rr)&&0>t.X(Rr))return Ir(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Pr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Pr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Pr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Pr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _r(n,0)},r.gb=function(t){return Mr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _r(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _r(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _r(n,this.h^t.h)},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",St.prototype.listen=St.prototype.O,Nn.prototype.listenOnce=Nn.prototype.P,Nn.prototype.getLastError=Nn.prototype.Sa,Nn.prototype.getLastErrorCode=Nn.prototype.Ia,Nn.prototype.getStatus=Nn.prototype.da,Nn.prototype.getResponseJson=Nn.prototype.Wa,Nn.prototype.getResponseText=Nn.prototype.ja,Nn.prototype.send=Nn.prototype.ha,Nn.prototype.setWithCredentials=Nn.prototype.Oa,wr.prototype.digest=wr.prototype.l,wr.prototype.reset=wr.prototype.reset,wr.prototype.update=wr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Ir,_r.fromString=Sr;var jr=u.createWebChannelTransport=function(){return new fr},Vr=u.getStatEventTarget=function(){return re()},Br=u.ErrorCode=le,$r=u.EventType=he,qr=u.Event=ee,zr=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hr=u.FetchXmlHttpFactory=In,Kr=u.WebChannel=pe,Gr=u.XhrIo=Nn,Wr=u.Md5=wr,Jr=u.Integer=_r;const Qr="@firebase/firestore";
/**
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
 */class Xr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xr.UNAUTHENTICATED=new Xr(null),Xr.GOOGLE_CREDENTIALS=new Xr("google-credentials-uid"),Xr.FIRST_PARTY=new Xr("first-party-uid"),Xr.MOCK_USER=new Xr("mock-user");
/**
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
 */
let Yr="9.21.0";
/**
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
 */const Zr=new o.Yd("@firebase/firestore");function ti(){return Zr.logLevel}function ei(t,...e){if(Zr.logLevel<=o["in"].DEBUG){const n=e.map(ii);Zr.debug(`Firestore (${Yr}): ${t}`,...n)}}function ni(t,...e){if(Zr.logLevel<=o["in"].ERROR){const n=e.map(ii);Zr.error(`Firestore (${Yr}): ${t}`,...n)}}function ri(t,...e){if(Zr.logLevel<=o["in"].WARN){const n=e.map(ii);Zr.warn(`Firestore (${Yr}): ${t}`,...n)}}function ii(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function si(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw ni(e),new Error(e)}function oi(t,e){t||si()}function ai(t,e){return t}
/**
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
 */const ci={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ui extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class li{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class hi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class di{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Xr.UNAUTHENTICATED)))}shutdown(){}}class fi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class pi{constructor(t){this.t=t,this.currentUser=Xr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new li;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new li,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{ei("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ei("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new li)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ei("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(oi("string"==typeof e.accessToken),new hi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return oi(null===t||"string"==typeof t),new Xr(t)}}class mi{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Xr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class gi{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new mi(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Xr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vi{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&ei("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,ei("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{ei("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?r(t):ei("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(oi("string"==typeof t.token),this.T=t.token,new yi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function wi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class bi{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=wi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function _i(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */
class Ti{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ui(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ui(ci.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ui(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ui(ci.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ti.fromMillis(Date.now())}static fromDate(t){return Ti.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ti(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_i(this.nanoseconds,t.nanoseconds):_i(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Ii{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ii(t)}static min(){return new Ii(new Ti(0,0))}static max(){return new Ii(new Ti(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Si{constructor(t,e,n){void 0===e?e=0:e>t.length&&si(),void 0===n?n=t.length-e:n>t.length-e&&si(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Si.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Si?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ci extends Si{construct(t,e,n){return new Ci(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ui(ci.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ci(e)}static emptyPath(){return new Ci([])}}const ki=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ai extends Si{construct(t,e,n){return new Ai(t,e,n)}static isValidIdentifier(t){return ki.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ai.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ai(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ui(ci.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ui(ci.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ui(ci.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ui(ci.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ai(e)}static emptyPath(){return new Ai([])}}
/**
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
 */class Ri{constructor(t){this.path=t}static fromPath(t){return new Ri(Ci.fromString(t))}static fromName(t){return new Ri(Ci.fromString(t).popFirst(5))}static empty(){return new Ri(Ci.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ci.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ci.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ri(new Ci(t.slice()))}}
/**
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
 */class Oi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Oi.UNKNOWN_ID=-1;function Ni(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ii.fromTimestamp(1e9===r?new Ti(n+1,0):new Ti(n,r));return new xi(i,Ri.empty(),e)}function Di(t){return new xi(t.readTime,t.key,-1)}class xi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new xi(Ii.min(),Ri.empty(),-1)}static max(){return new xi(Ii.max(),Ri.empty(),-1)}}function Pi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ri.comparator(t.documentKey,e.documentKey),0!==n?n:_i(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Li="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function Ui(t){if(t.code!==ci.FAILED_PRECONDITION||t.message!==Li)throw t;ei("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Fi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&si(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Fi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Fi?e:Fi.resolve(e)}catch(t){return Fi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Fi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Fi.reject(e)}static resolve(t){return new Fi(((e,n)=>{e(t)}))}static reject(t){return new Fi(((e,n)=>{n(t)}))}static waitFor(t){return new Fi(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Fi.resolve(!1);for(const n of t)e=e.next((t=>t?Fi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Fi(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Fi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
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
 */function ji(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class Vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Bi(t){return null==t}function $i(t){return 0===t&&1/t==-1/0}function qi(t){return"number"==typeof t&&Number.isInteger(t)&&!$i(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */Vi.ct=-1;const zi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Hi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ki=Hi;
/**
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
 */
/**
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
 */
function Gi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ji(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Qi{constructor(t,e){this.comparator=t,this.root=e||Yi.EMPTY}insert(t,e){return new Qi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yi.BLACK,null,null))}remove(t){return new Qi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xi(this.root,t,this.comparator,!0)}}class Xi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Yi.RED,this.left=null!=r?r:Yi.EMPTY,this.right=null!=i?i:Yi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Yi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Yi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Yi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw si();if(this.right.isRed())throw si();const t=this.left.check();if(t!==this.right.check())throw si();return t+(this.isRed()?0:1)}}Yi.EMPTY=null,Yi.RED=!0,Yi.BLACK=!1,Yi.EMPTY=new class{constructor(){this.size=0}get key(){throw si()}get value(){throw si()}get color(){throw si()}get left(){throw si()}get right(){throw si()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Yi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Zi{constructor(t){this.comparator=t,this.data=new Qi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ts(this.data.getIterator())}getIteratorFrom(t){return new ts(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Zi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Zi(this.comparator);return e.data=t,e}}class ts{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class es{constructor(t){this.fields=t,t.sort(Ai.comparator)}static empty(){return new es([])}unionWith(t){let e=new Zi(Ai.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new es(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ei(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class ns extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class rs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ns("Invalid base64 string: "+t):t}}(t);return new rs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new rs(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _i(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rs.EMPTY_BYTE_STRING=new rs("");const is=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(t){if(oi(!!t),"string"==typeof t){let e=0;const n=is.exec(t);if(oi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:os(t.seconds),nanos:os(t.nanos)}}function os(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function as(t){return"string"==typeof t?rs.fromBase64String(t):rs.fromUint8Array(t)}
/**
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
 */function cs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function us(t){const e=t.mapValue.fields.__previous_value__;return cs(e)?us(e):e}function ls(t){const e=ss(t.mapValue.fields.__local_write_time__.timestampValue);return new Ti(e.seconds,e.nanos)}
/**
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
 */class hs{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ds{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ds("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ds&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const fs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cs(t)?4:As(t)?9007199254740991:10:si()}function ms(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ls(t).isEqual(ls(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ss(t.timestampValue),r=ss(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return as(t.bytesValue).isEqual(as(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return os(t.geoPointValue.latitude)===os(e.geoPointValue.latitude)&&os(t.geoPointValue.longitude)===os(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return os(t.integerValue)===os(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=os(t.doubleValue),r=os(e.doubleValue);return n===r?$i(n)===$i(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],ms);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Gi(n)!==Gi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ms(n[i],r[i])))return!1;return!0}(t,e);default:return si()}}function gs(t,e){return void 0!==(t.values||[]).find((t=>ms(t,e)))}function ys(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return _i(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _i(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=os(t.integerValue||t.doubleValue),r=os(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return vs(t.timestampValue,e.timestampValue);case 4:return vs(ls(t),ls(e));case 5:return _i(t.stringValue,e.stringValue);case 6:return function(t,e){const n=as(t),r=as(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=_i(n[i],r[i]);if(0!==t)return t}return _i(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=_i(os(t.latitude),os(e.latitude));return 0!==n?n:_i(os(t.longitude),os(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ys(n[i],r[i]);if(t)return t}return _i(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===fs.mapValue&&e===fs.mapValue)return 0;if(t===fs.mapValue)return 1;if(e===fs.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=_i(r[o],s[o]);if(0!==t)return t;const e=ys(n[r[o]],i[s[o]]);if(0!==e)return e}return _i(r.length,s.length)}(t.mapValue,e.mapValue);default:throw si()}}function vs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return _i(t,e);const n=ss(t),r=ss(e),i=_i(n.seconds,r.seconds);return 0!==i?i:_i(n.nanos,r.nanos)}function ws(t){return bs(t)}function bs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ss(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?as(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Ri.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=bs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${bs(t.fields[i])}`;return n+"}"}(t.mapValue):si();var e,n}function _s(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Es(t){return!!t&&"integerValue"in t}function Ts(t){return!!t&&"arrayValue"in t}function Is(t){return!!t&&"nullValue"in t}function Ss(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cs(t){return!!t&&"mapValue"in t}function ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ks(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function As(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Rs{constructor(t){this.value=t}static empty(){return new Rs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Cs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ks(e)}setAll(t){let e=Ai.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ks(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Cs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ms(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Cs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Wi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Rs(ks(this.value))}}function Os(t){const e=[];return Wi(t.fields,((t,n)=>{const r=new Ai([t]);if(Cs(n)){const t=Os(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new es(e)
/**
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
 */}class Ns{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Ns(t,0,Ii.min(),Ii.min(),Ii.min(),Rs.empty(),0)}static newFoundDocument(t,e,n,r){return new Ns(t,1,e,Ii.min(),n,r,0)}static newNoDocument(t,e){return new Ns(t,2,e,Ii.min(),Ii.min(),Rs.empty(),0)}static newUnknownDocument(t,e){return new Ns(t,3,e,Ii.min(),Ii.min(),Rs.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ii.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ii.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ns&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ns(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Ds{constructor(t,e){this.position=t,this.inclusive=e}}function xs(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ri.comparator(Ri.fromName(o.referenceValue),n.key):ys(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ps(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ms(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Ls{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ms(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Us{}class Fs extends Us{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ks(t,e,n):"array-contains"===e?new Qs(t,n):"in"===e?new Xs(t,n):"not-in"===e?new Ys(t,n):"array-contains-any"===e?new Zs(t,n):new Fs(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Gs(t,n):new Ws(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ys(e,this.value)):null!==e&&ps(this.value)===ps(e)&&this.matchesComparison(ys(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return si()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class js extends Us{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new js(t,e)}matches(t){return Vs(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Vs(t){return"and"===t.op}function Bs(t){return $s(t)&&Vs(t)}function $s(t){for(const e of t.filters)if(e instanceof js)return!1;return!0}function qs(t){if(t instanceof Fs)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(Bs(t))return t.filters.map((t=>qs(t))).join(",");{const e=t.filters.map((t=>qs(t))).join(",");return`${t.op}(${e})`}}function zs(t,e){return t instanceof Fs?function(t,e){return e instanceof Fs&&t.op===e.op&&t.field.isEqual(e.field)&&ms(t.value,e.value)}(t,e):t instanceof js?function(t,e){return e instanceof js&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&zs(n,e.filters[r])),!0)}(t,e):void si()}function Hs(t){return t instanceof Fs?function(t){return`${t.field.canonicalString()} ${t.op} ${ws(t.value)}`}(t):t instanceof js?function(t){return t.op.toString()+" {"+t.getFilters().map(Hs).join(" ,")+"}"}(t):"Filter"}class Ks extends Fs{constructor(t,e,n){super(t,e,n),this.key=Ri.fromName(n.referenceValue)}matches(t){const e=Ri.comparator(t.key,this.key);return this.matchesComparison(e)}}class Gs extends Fs{constructor(t,e){super(t,"in",e),this.keys=Js("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ws extends Fs{constructor(t,e){super(t,"not-in",e),this.keys=Js("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Js(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ri.fromName(t.referenceValue)))}class Qs extends Fs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ts(e)&&gs(e.arrayValue,this.value)}}class Xs extends Fs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&gs(this.value.arrayValue,e)}}class Ys extends Fs{constructor(t,e){super(t,"not-in",e)}matches(t){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!gs(this.value.arrayValue,e)}}class Zs extends Fs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ts(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>gs(this.value.arrayValue,t)))}}
/**
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
 */class to{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function eo(t,e=null,n=[],r=[],i=null,s=null,o=null){return new to(t,e,n,r,i,s,o)}function no(t){const e=ai(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>qs(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Bi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ws(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ws(t))).join(",")),e.ft=t}return e.ft}function ro(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ms(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zs(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ps(t.startAt,e.startAt)&&Ps(t.endAt,e.endAt)}function io(t){return Ri.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */
class so{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function oo(t,e,n,r,i,s,o,a){return new so(t,e,n,r,i,s,o,a)}function ao(t){return new so(t)}function co(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function uo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lo(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ho(t){return null!==t.collectionGroup}function fo(t){const e=ai(t);if(null===e.dt){e.dt=[];const t=lo(e),n=uo(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new Ls(t)),e.dt.push(new Ls(Ai.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ls(Ai.keyField(),t))}}}return e.dt}function po(t){const e=ai(t);if(!e._t)if("F"===e.limitType)e._t=eo(e.path,e.collectionGroup,fo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of fo(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Ls(i.field,e))}const n=e.endAt?new Ds(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ds(e.startAt.position,e.startAt.inclusive):null;e._t=eo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e._t}function mo(t,e){e.getFirstInequalityField(),lo(t);const n=t.filters.concat([e]);return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function go(t,e,n){return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yo(t,e){return ro(po(t),po(e))&&t.limitType===e.limitType}function vo(t){return`${no(po(t))}|lt:${t.limitType}`}function wo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Hs(t))).join(", ")}]`),Bi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ws(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ws(t))).join(",")),`Target(${e})`}(po(t))}; limitType=${t.limitType})`}function bo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ri.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of fo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,fo(t),e))&&!(t.endAt&&!function(t,e,n){const r=xs(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,fo(t),e))}(t,e)}function _o(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Eo(t){return(e,n)=>{let r=!1;for(const i of fo(t)){const t=To(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function To(t,e,n){const r=t.field.isKeyField()?Ri.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ys(r,i):si()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return si()}}
/**
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
 */class Io{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Wi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Ji(this.inner)}size(){return this.innerSize}}
/**
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
 */const So=new Qi(Ri.comparator);function Co(){return So}const ko=new Qi(Ri.comparator);function Ao(...t){let e=ko;for(const n of t)e=e.insert(n.key,n);return e}function Ro(t){let e=ko;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Oo(){return Do()}function No(){return Do()}function Do(){return new Io((t=>t.toString()),((t,e)=>t.isEqual(e)))}const xo=new Qi(Ri.comparator),Po=new Zi(Ri.comparator);function Lo(...t){let e=Po;for(const n of t)e=e.add(n);return e}const Mo=new Zi(_i);function Uo(){return Mo}
/**
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
 */function Fo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(e)?"-0":e}}function jo(t){return{integerValue:""+t}}function Vo(t,e){return qi(e)?jo(e):Fo(t,e)}
/**
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
 */class Bo{constructor(){this._=void 0}}function $o(t,e,n){return t instanceof Ho?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&cs(e)&&(e=us(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ko?Go(t,e):t instanceof Wo?Jo(t,e):function(t,e){const n=zo(t,e),r=Xo(n)+Xo(t.wt);return Es(n)&&Es(t.wt)?jo(r):Fo(t.serializer,r)}(t,e)}function qo(t,e,n){return t instanceof Ko?Go(t,e):t instanceof Wo?Jo(t,e):n}function zo(t,e){return t instanceof Qo?Es(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Ho extends Bo{}class Ko extends Bo{constructor(t){super(),this.elements=t}}function Go(t,e){const n=Yo(e);for(const r of t.elements)n.some((t=>ms(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Bo{constructor(t){super(),this.elements=t}}function Jo(t,e){let n=Yo(e);for(const r of t.elements)n=n.filter((t=>!ms(t,r)));return{arrayValue:{values:n}}}class Qo extends Bo{constructor(t,e){super(),this.serializer=t,this.wt=e}}function Xo(t){return os(t.integerValue||t.doubleValue)}function Yo(t){return Ts(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class Zo{constructor(t,e){this.field=t,this.transform=e}}function ta(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ko&&e instanceof Ko||t instanceof Wo&&e instanceof Wo?Ei(t.elements,e.elements,ms):t instanceof Qo&&e instanceof Qo?ms(t.wt,e.wt):t instanceof Ho&&e instanceof Ho}(t.transform,e.transform)}class ea{constructor(t,e){this.version=t,this.transformResults=e}}class na{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new na}static exists(t){return new na(void 0,t)}static updateTime(t){return new na(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ra(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ia{}function sa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ma(t.key,na.none()):new la(t.key,t.data,na.none());{const n=t.data,r=Rs.empty();let i=new Zi(Ai.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ha(t.key,r,new es(i.toArray()),na.none())}}function oa(t,e,n){t instanceof la?function(t,e,n){const r=t.value.clone(),i=fa(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ha?function(t,e,n){if(!ra(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=fa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(da(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function aa(t,e,n,r){return t instanceof la?function(t,e,n,r){if(!ra(t.precondition,e))return n;const i=t.value.clone(),s=pa(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ha?function(t,e,n,r){if(!ra(t.precondition,e))return n;const i=pa(t.fieldTransforms,r,e),s=e.data;return s.setAll(da(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ra(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ca(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=zo(r.transform,t||null);null!=i&&(null===n&&(n=Rs.empty()),n.set(r.field,i))}return n||null}function ua(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ei(t,e,((t,e)=>ta(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends ia{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ha extends ia{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function da(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function fa(t,e,n){const r=new Map;oi(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qo(o,a,n[i]))}return r}function pa(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,$o(t,s,e))}return r}class ma extends ia{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ga extends ia{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class ya{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&oa(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=aa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=aa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=No();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=sa(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ii.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Lo())}isEqual(t){return this.batchId===t.batchId&&Ei(this.mutations,t.mutations,((t,e)=>ua(t,e)))&&Ei(this.baseMutations,t.baseMutations,((t,e)=>ua(t,e)))}}class va{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){oi(t.mutations.length===n.length);let r=xo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new va(t,e,n,r)}}
/**
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
 */class wa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class ba{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var _a,Ea;function Ta(t){switch(t){default:return si();case ci.CANCELLED:case ci.UNKNOWN:case ci.DEADLINE_EXCEEDED:case ci.RESOURCE_EXHAUSTED:case ci.INTERNAL:case ci.UNAVAILABLE:case ci.UNAUTHENTICATED:return!1;case ci.INVALID_ARGUMENT:case ci.NOT_FOUND:case ci.ALREADY_EXISTS:case ci.PERMISSION_DENIED:case ci.FAILED_PRECONDITION:case ci.ABORTED:case ci.OUT_OF_RANGE:case ci.UNIMPLEMENTED:case ci.DATA_LOSS:return!0}}function Ia(t){if(void 0===t)return ni("GRPC error has no .code"),ci.UNKNOWN;switch(t){case _a.OK:return ci.OK;case _a.CANCELLED:return ci.CANCELLED;case _a.UNKNOWN:return ci.UNKNOWN;case _a.DEADLINE_EXCEEDED:return ci.DEADLINE_EXCEEDED;case _a.RESOURCE_EXHAUSTED:return ci.RESOURCE_EXHAUSTED;case _a.INTERNAL:return ci.INTERNAL;case _a.UNAVAILABLE:return ci.UNAVAILABLE;case _a.UNAUTHENTICATED:return ci.UNAUTHENTICATED;case _a.INVALID_ARGUMENT:return ci.INVALID_ARGUMENT;case _a.NOT_FOUND:return ci.NOT_FOUND;case _a.ALREADY_EXISTS:return ci.ALREADY_EXISTS;case _a.PERMISSION_DENIED:return ci.PERMISSION_DENIED;case _a.FAILED_PRECONDITION:return ci.FAILED_PRECONDITION;case _a.ABORTED:return ci.ABORTED;case _a.OUT_OF_RANGE:return ci.OUT_OF_RANGE;case _a.UNIMPLEMENTED:return ci.UNIMPLEMENTED;case _a.DATA_LOSS:return ci.DATA_LOSS;default:return si()}}(Ea=_a||(_a={}))[Ea.OK=0]="OK",Ea[Ea.CANCELLED=1]="CANCELLED",Ea[Ea.UNKNOWN=2]="UNKNOWN",Ea[Ea.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ea[Ea.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ea[Ea.NOT_FOUND=5]="NOT_FOUND",Ea[Ea.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ea[Ea.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ea[Ea.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ea[Ea.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ea[Ea.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ea[Ea.ABORTED=10]="ABORTED",Ea[Ea.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ea[Ea.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ea[Ea.INTERNAL=13]="INTERNAL",Ea[Ea.UNAVAILABLE=14]="UNAVAILABLE",Ea[Ea.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Sa{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ca}static getOrCreateInstance(){return null===Ca&&(Ca=new Sa),Ca}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Ca=null;
/**
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
 */function ka(){return new TextEncoder}
/**
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
 */const Aa=new Jr([4294967295,4294967295],0);function Ra(t){const e=ka().encode(t),n=new Wr;return n.update(e),new Uint8Array(n.digest())}function Oa(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class Na{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Da(`Invalid padding: ${e}`);if(n<0)throw new Da(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Da(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Da(`Invalid padding when bitmap length is 0: ${e}`);this.yt=8*t.length-e,this.It=Jr.fromNumber(this.yt)}Tt(t,e,n){let r=t.add(e.multiply(Jr.fromNumber(n)));return 1===r.compare(Aa)&&(r=new Jr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}At(t){if(0===this.yt)return!1;const e=Ra(t),[n,r]=Oa(e);for(let i=0;i<this.hashCount;i++){const t=this.Tt(n,r,i);if(!this.Et(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Na(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.yt)return;const e=Ra(t),[n,r]=Oa(e);for(let i=0;i<this.hashCount;i++){const t=this.Tt(n,r,i);this.Rt(t)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class xa{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Pa.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new xa(Ii.min(),r,new Qi(_i),Co(),Lo())}}class Pa{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Pa(n,e,Lo(),Lo(),Lo())}}
/**
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
 */class La{constructor(t,e,n,r){this.vt=t,this.removedTargetIds=e,this.key=n,this.Pt=r}}class Ma{constructor(t,e){this.targetId=t,this.bt=e}}class Ua{constructor(t,e,n=rs.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Fa{constructor(){this.Vt=0,this.St=Ba(),this.Dt=rs.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return 0!==this.Vt}get kt(){return this.xt}Mt(t){t.approximateByteSize()>0&&(this.xt=!0,this.Dt=t)}Ot(){let t=Lo(),e=Lo(),n=Lo();return this.St.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:si()}})),new Pa(this.Dt,this.Ct,t,e,n)}$t(){this.xt=!1,this.St=Ba()}Ft(t,e){this.xt=!0,this.St=this.St.insert(t,e)}Bt(t){this.xt=!0,this.St=this.St.remove(t)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class ja{constructor(t){this.Kt=t,this.Gt=new Map,this.Qt=Co(),this.jt=Va(),this.zt=new Qi(_i)}Wt(t){for(const e of t.vt)t.Pt&&t.Pt.isFoundDocument()?this.Ht(e,t.Pt):this.Jt(e,t.key,t.Pt);for(const e of t.removedTargetIds)this.Jt(e,t.key,t.Pt)}Yt(t){this.forEachTarget(t,(e=>{const n=this.Xt(e);switch(t.state){case 0:this.Zt(e)&&n.Mt(t.resumeToken);break;case 1:n.qt(),n.Nt||n.$t(),n.Mt(t.resumeToken);break;case 2:n.qt(),n.Nt||this.removeTarget(e);break;case 3:this.Zt(e)&&(n.Ut(),n.Mt(t.resumeToken));break;case 4:this.Zt(e)&&(this.te(e),n.Mt(t.resumeToken));break;default:si()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Gt.forEach(((t,n)=>{this.Zt(n)&&e(n)}))}ee(t){var e;const n=t.targetId,r=t.bt.count,i=this.ne(n);if(i){const s=i.target;if(io(s))if(0===r){const t=new Ri(s.path);this.Jt(n,t,Ns.newNoDocument(t,Ii.min()))}else oi(1===r);else{const i=this.se(n);if(i!==r){const r=this.ie(t,i);if(0!==r){this.te(n);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(n,t)}null===(e=Sa.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var r,i,s,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},l=n.unchangedNames;return l&&(u.bloomFilter={applied:0===t,hashCount:null!==(r=null==l?void 0:l.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(o=null===(s=null===(i=null==l?void 0:l.bits)||void 0===i?void 0:i.bitmap)||void 0===s?void 0:s.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==l?void 0:l.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}
/**
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
 */(r,i,t.bt))}}}}ie(t,e){const{unchangedNames:n,count:r}=t.bt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=as(i).toUint8Array()}catch(t){if(t instanceof ns)return ri("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new Na(a,s,o)}catch(t){return ri(t instanceof Da?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.yt?1:r!==e-this.re(t.targetId,c)?2:0}re(t,e){const n=this.Kt.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Kt.oe(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.At(s)||(this.Jt(t,n,null),r++)})),r}ue(t){const e=new Map;this.Gt.forEach(((n,r)=>{const i=this.ne(r);if(i){if(n.current&&io(i.target)){const e=new Ri(i.target.path);null!==this.Qt.get(e)||this.ce(r,e)||this.Jt(r,e,Ns.newNoDocument(e,t))}n.kt&&(e.set(r,n.Ot()),n.$t())}}));let n=Lo();this.jt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.ne(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Qt.forEach(((e,n)=>n.setReadTime(t)));const r=new xa(t,e,this.zt,this.Qt,n);return this.Qt=Co(),this.jt=Va(),this.zt=new Qi(_i),r}Ht(t,e){if(!this.Zt(t))return;const n=this.ce(t,e.key)?2:0;this.Xt(t).Ft(e.key,n),this.Qt=this.Qt.insert(e.key,e),this.jt=this.jt.insert(e.key,this.ae(e.key).add(t))}Jt(t,e,n){if(!this.Zt(t))return;const r=this.Xt(t);this.ce(t,e)?r.Ft(e,1):r.Bt(e),this.jt=this.jt.insert(e,this.ae(e).delete(t)),n&&(this.Qt=this.Qt.insert(e,n))}removeTarget(t){this.Gt.delete(t)}se(t){const e=this.Xt(t).Ot();return this.Kt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Lt(t){this.Xt(t).Lt()}Xt(t){let e=this.Gt.get(t);return e||(e=new Fa,this.Gt.set(t,e)),e}ae(t){let e=this.jt.get(t);return e||(e=new Zi(_i),this.jt=this.jt.insert(t,e)),e}Zt(t){const e=null!==this.ne(t);return e||ei("WatchChangeAggregator","Detected inactive target",t),e}ne(t){const e=this.Gt.get(t);return e&&e.Nt?null:this.Kt.he(t)}te(t){this.Gt.set(t,new Fa),this.Kt.getRemoteKeysForTarget(t).forEach((e=>{this.Jt(t,e,null)}))}ce(t,e){return this.Kt.getRemoteKeysForTarget(t).has(e)}}function Va(){return new Qi(Ri.comparator)}function Ba(){return new Qi(Ri.comparator)}const $a=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),qa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),za=(()=>{const t={and:"AND",or:"OR"};return t})();class Ha{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ka(t,e){return t.useProto3Json||Bi(e)?e:{value:e}}function Ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wa(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ja(t,e){return Ga(t,e.toTimestamp())}function Qa(t){return oi(!!t),Ii.fromTimestamp(function(t){const e=ss(t);return new Ti(e.seconds,e.nanos)}(t))}function Xa(t,e){return function(t){return new Ci(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ya(t){const e=Ci.fromString(t);return oi(_c(e)),e}function Za(t,e){return Xa(t.databaseId,e.path)}function tc(t,e){const n=Ya(e);if(n.get(1)!==t.databaseId.projectId)throw new ui(ci.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ui(ci.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ri(ic(n))}function ec(t,e){return Xa(t.databaseId,e)}function nc(t){const e=Ya(t);return 4===e.length?Ci.emptyPath():ic(e)}function rc(t){return new Ci(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ic(t){return oi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function sc(t,e,n){return{name:Za(t,e),fields:n.value.mapValue.fields}}function oc(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:si()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(oi(void 0===e||"string"==typeof e),rs.fromBase64String(e||"")):(oi(void 0===e||e instanceof Uint8Array),rs.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ci.UNKNOWN:Ia(t.code);return new ui(e,t.message||"")}(o);n=new Ua(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=tc(t,r.document.name),s=Qa(r.document.updateTime),o=r.document.createTime?Qa(r.document.createTime):Ii.min(),a=new Rs({mapValue:{fields:r.document.fields}}),c=Ns.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new La(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=tc(t,r.document),s=r.readTime?Qa(r.readTime):Ii.min(),o=Ns.newNoDocument(i,s),a=r.removedTargetIds||[];n=new La([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=tc(t,r.document),s=r.removedTargetIds||[];n=new La([],s,i,null)}else{if(!("filter"in e))return si();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new ba(r,i),o=t.targetId;n=new Ma(o,s)}}return n}function ac(t,e){let n;if(e instanceof la)n={update:sc(t,e.key,e.value)};else if(e instanceof ma)n={delete:Za(t,e.key)};else if(e instanceof ha)n={update:sc(t,e.key,e.data),updateMask:bc(e.fieldMask)};else{if(!(e instanceof ga))return si();n={verify:Za(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ho)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ko)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qo)return{fieldPath:e.field.canonicalString(),increment:n.wt};throw si()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ja(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:si()}(t,e.precondition)),n}function cc(t,e){return t&&t.length>0?(oi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Qa(t.updateTime):Qa(e);return n.isEqual(Ii.min())&&(n=Qa(e)),new ea(n,t.transformResults||[])}(t,e)))):[]}function uc(t,e){return{documents:[ec(t,e.path)]}}function lc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ec(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ec(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return wc(js.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:yc(t.field),direction:pc(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ka(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function hc(t){let e=nc(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oi(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=fc(t);return e instanceof js&&Bs(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ls(vc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Bi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ds(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ds(n,e)}(n.endAt)),oo(e,i,o,s,a,"F",c,u)}function dc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return si()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function fc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=vc(t.unaryFilter.field);return Fs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=vc(t.unaryFilter.field);return Fs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=vc(t.unaryFilter.field);return Fs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=vc(t.unaryFilter.field);return Fs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return si()}}(t):void 0!==t.fieldFilter?function(t){return Fs.create(vc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return si()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return js.create(t.compositeFilter.filters.map((t=>fc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return si()}}(t.compositeFilter.op))}(t):si()}function pc(t){return $a[t]}function mc(t){return qa[t]}function gc(t){return za[t]}function yc(t){return{fieldPath:t.canonicalString()}}function vc(t){return Ai.fromServerFormat(t.fieldPath)}function wc(t){return t instanceof Fs?function(t){if("=="===t.op){if(Ss(t.value))return{unaryFilter:{field:yc(t.field),op:"IS_NAN"}};if(Is(t.value))return{unaryFilter:{field:yc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ss(t.value))return{unaryFilter:{field:yc(t.field),op:"IS_NOT_NAN"}};if(Is(t.value))return{unaryFilter:{field:yc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yc(t.field),op:mc(t.op),value:t.value}}}(t):t instanceof js?function(t){const e=t.getFilters().map((t=>wc(t)));return 1===e.length?e[0]:{compositeFilter:{op:gc(t.op),filters:e}}}(t):si()}function bc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function _c(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class Ec{constructor(t,e,n,r,i=Ii.min(),s=Ii.min(),o=rs.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Ec(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ec(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ec(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ec(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class Tc{constructor(t){this.le=t}}function Ic(t){const e=hc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?go(e,e.limit,"L"):e}
/**
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
 */class Sc{constructor(){}_e(t,e){this.we(t,e),e.me()}we(t,e){if("nullValue"in t)this.ge(e,5);else if("booleanValue"in t)this.ge(e,10),e.ye(t.booleanValue?1:0);else if("integerValue"in t)this.ge(e,15),e.ye(os(t.integerValue));else if("doubleValue"in t){const n=os(t.doubleValue);isNaN(n)?this.ge(e,13):(this.ge(e,15),$i(n)?e.ye(0):e.ye(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ge(e,20),"string"==typeof n?e.pe(n):(e.pe(`${n.seconds||""}`),e.ye(n.nanos||0))}else if("stringValue"in t)this.Ie(t.stringValue,e),this.Te(e);else if("bytesValue"in t)this.ge(e,30),e.Ee(as(t.bytesValue)),this.Te(e);else if("referenceValue"in t)this.Ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ge(e,45),e.ye(n.latitude||0),e.ye(n.longitude||0)}else"mapValue"in t?As(t)?this.ge(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Te(e)):"arrayValue"in t?(this.ve(t.arrayValue,e),this.Te(e)):si()}Ie(t,e){this.ge(e,25),this.Pe(t,e)}Pe(t,e){e.pe(t)}Re(t,e){const n=t.fields||{};this.ge(e,55);for(const r of Object.keys(n))this.Ie(r,e),this.we(n[r],e)}ve(t,e){const n=t.values||[];this.ge(e,50);for(const r of n)this.we(r,e)}Ae(t,e){this.ge(e,37),Ri.fromName(t).path.forEach((t=>{this.ge(e,60),this.Pe(t,e)}))}ge(t,e){t.ye(e)}Te(t){t.ye(2)}}Sc.be=new Sc;
/**
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
 */
class Cc{constructor(){this.sn=new kc}addToCollectionParentIndex(t,e){return this.sn.add(e),Fi.resolve()}getCollectionParents(t,e){return Fi.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return Fi.resolve()}deleteFieldIndex(t,e){return Fi.resolve()}getDocumentsMatchingTarget(t,e){return Fi.resolve(null)}getIndexType(t,e){return Fi.resolve(0)}getFieldIndexes(t,e){return Fi.resolve([])}getNextCollectionGroupToUpdate(t){return Fi.resolve(null)}getMinOffset(t,e){return Fi.resolve(xi.min())}getMinOffsetFromCollectionGroup(t,e){return Fi.resolve(xi.min())}updateCollectionGroup(t,e,n){return Fi.resolve()}updateIndexEntries(t,e){return Fi.resolve()}}class kc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Zi(Ci.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Zi(Ci.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Ac{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ac(t,Ac.DEFAULT_COLLECTION_PERCENTILE,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Ac.DEFAULT_COLLECTION_PERCENTILE=10,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ac.DEFAULT=new Ac(41943040,Ac.DEFAULT_COLLECTION_PERCENTILE,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ac.DISABLED=new Ac(-1,0,0);
/**
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
 */
class Rc{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static Nn(){return new Rc(0)}static kn(){return new Rc(-1)}}
/**
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
 */
/**
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
 */
class Oc{constructor(){this.changes=new Io((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ns.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Fi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class Nc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Dc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&aa(n.mutation,t,es.empty(),Ti.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Lo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Lo()){const r=Oo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ao();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Oo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Lo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Co();const s=Do(),o=Do();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ha)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),aa(o.mutation,e,o.mutation.getFieldMask(),Ti.now())):s.set(e.key,es.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Nc(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Do();let r=new Qi(((t,e)=>t-e)),i=Lo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||es.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Lo()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=No();c.forEach((t=>{if(!i.has(t)){const r=sa(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Fi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Ri.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ho(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Fi.resolve(Oo());let o=-1,a=i;return s.next((e=>Fi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Fi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Lo()))).next((t=>({batchId:o,changes:Ro(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ri(e)).next((t=>{let e=Ao();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Ao();return this.indexManager.getCollectionParents(t,r).next((s=>Fi.forEach(s,(s=>{const o=function(t,e){return new so(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ns.newInvalidDocument(r)))}));let n=Ao();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&aa(s.mutation,i,es.empty(),Ti.now()),bo(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
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
 */class xc{constructor(t){this.serializer=t,this.us=new Map,this.cs=new Map}getBundleMetadata(t,e){return Fi.resolve(this.us.get(e))}saveBundleMetadata(t,e){var n;return this.us.set(e.id,{id:(n=e).id,version:n.version,createTime:Qa(n.createTime)}),Fi.resolve()}getNamedQuery(t,e){return Fi.resolve(this.cs.get(e))}saveNamedQuery(t,e){return this.cs.set(e.name,function(t){return{name:t.name,query:Ic(t.bundledQuery),readTime:Qa(t.readTime)}}(e)),Fi.resolve()}}
/**
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
 */class Pc{constructor(){this.overlays=new Qi(Ri.comparator),this.hs=new Map}getOverlay(t,e){return Fi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Oo();return Fi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.de(t,e,r)})),Fi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.hs.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.hs.delete(n)),Fi.resolve()}getOverlaysForCollection(t,e,n){const r=Oo(),i=e.length+1,s=new Ri(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Fi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Qi(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Oo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Oo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Fi.resolve(o)}de(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.hs.get(r.largestBatchId).delete(n.key);this.hs.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new wa(e,n));let i=this.hs.get(e);void 0===i&&(i=Lo(),this.hs.set(e,i)),this.hs.set(e,i.add(n.key))}}
/**
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
 */class Lc{constructor(){this.ls=new Zi(Mc.fs),this.ds=new Zi(Mc._s)}isEmpty(){return this.ls.isEmpty()}addReference(t,e){const n=new Mc(t,e);this.ls=this.ls.add(n),this.ds=this.ds.add(n)}ws(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gs(new Mc(t,e))}ys(t,e){t.forEach((t=>this.removeReference(t,e)))}ps(t){const e=new Ri(new Ci([])),n=new Mc(e,t),r=new Mc(e,t+1),i=[];return this.ds.forEachInRange([n,r],(t=>{this.gs(t),i.push(t.key)})),i}Is(){this.ls.forEach((t=>this.gs(t)))}gs(t){this.ls=this.ls.delete(t),this.ds=this.ds.delete(t)}Ts(t){const e=new Ri(new Ci([])),n=new Mc(e,t),r=new Mc(e,t+1);let i=Lo();return this.ds.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Mc(t,0),n=this.ls.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Mc{constructor(t,e){this.key=t,this.Es=e}static fs(t,e){return Ri.comparator(t.key,e.key)||_i(t.Es,e.Es)}static _s(t,e){return _i(t.Es,e.Es)||Ri.comparator(t.key,e.key)}}
/**
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
 */class Uc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.As=1,this.Rs=new Zi(Mc.fs)}checkEmpty(t){return Fi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ya(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Rs=this.Rs.add(new Mc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Fi.resolve(s)}lookupMutationBatch(t,e){return Fi.resolve(this.vs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Ps(n),i=r<0?0:r;return Fi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Fi.resolve(0===this.mutationQueue.length?-1:this.As-1)}getAllMutationBatches(t){return Fi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Mc(e,0),r=new Mc(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,r],(t=>{const e=this.vs(t.Es);i.push(e)})),Fi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Zi(_i);return e.forEach((t=>{const e=new Mc(t,0),r=new Mc(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,r],(t=>{n=n.add(t.Es)}))})),Fi.resolve(this.bs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ri.isDocumentKey(i)||(i=i.child(""));const s=new Mc(new Ri(i),0);let o=new Zi(_i);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Es)),!0)}),s),Fi.resolve(this.bs(o))}bs(t){const e=[];return t.forEach((t=>{const n=this.vs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){oi(0===this.Vs(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Fi.forEach(e.mutations,(r=>{const i=new Mc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Rs=n}))}Dn(t){}containsKey(t,e){const n=new Mc(e,0),r=this.Rs.firstAfterOrEqual(n);return Fi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Fi.resolve()}Vs(t,e){return this.Ps(t)}Ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}vs(t){const e=this.Ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class Fc{constructor(t){this.Ss=t,this.docs=new Qi(Ri.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ss(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Fi.resolve(n?n.document.mutableCopy():Ns.newInvalidDocument(e))}getEntries(t,e){let n=Co();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ns.newInvalidDocument(t))})),Fi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Co();const s=e.path,o=new Ri(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Pi(Di(o),n)<=0||(r.has(o.key)||bo(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Fi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){si()}Ds(t,e){return Fi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new jc(this)}getSize(t){return Fi.resolve(this.size)}}class jc extends Oc{constructor(t){super(),this.rs=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.rs.addEntry(t,r)):this.rs.removeEntry(n)})),Fi.waitFor(e)}getFromCache(t,e){return this.rs.getEntry(t,e)}getAllFromCache(t,e){return this.rs.getEntries(t,e)}}
/**
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
 */class Vc{constructor(t){this.persistence=t,this.Cs=new Io((t=>no(t)),ro),this.lastRemoteSnapshotVersion=Ii.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Lc,this.targetCount=0,this.ks=Rc.Nn()}forEachTarget(t,e){return this.Cs.forEach(((t,n)=>e(n))),Fi.resolve()}getLastRemoteSnapshotVersion(t){return Fi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Fi.resolve(this.xs)}allocateTargetId(t){return this.highestTargetId=this.ks.next(),Fi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.xs&&(this.xs=e),Fi.resolve()}$n(t){this.Cs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ks=new Rc(e),this.highestTargetId=e),t.sequenceNumber>this.xs&&(this.xs=t.sequenceNumber)}addTargetData(t,e){return this.$n(e),this.targetCount+=1,Fi.resolve()}updateTargetData(t,e){return this.$n(e),Fi.resolve()}removeTargetData(t,e){return this.Cs.delete(e.target),this.Ns.ps(e.targetId),this.targetCount-=1,Fi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Cs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cs.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Fi.waitFor(i).next((()=>r))}getTargetCount(t){return Fi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cs.get(e)||null;return Fi.resolve(n)}addMatchingKeys(t,e,n){return this.Ns.ws(e,n),Fi.resolve()}removeMatchingKeys(t,e,n){this.Ns.ys(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Fi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ns.ps(e),Fi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ns.Ts(e);return Fi.resolve(n)}containsKey(t,e){return Fi.resolve(this.Ns.containsKey(e))}}
/**
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
 */class Bc{constructor(t,e){this.Ms={},this.overlays={},this.Os=new Vi(0),this.$s=!1,this.$s=!0,this.referenceDelegate=t(this),this.Fs=new Vc(this),this.indexManager=new Cc,this.remoteDocumentCache=function(t){return new Fc(t)}((t=>this.referenceDelegate.Bs(t))),this.serializer=new Tc(e),this.Ls=new xc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ms[t.toKey()];return n||(n=new Uc(e,this.referenceDelegate),this.Ms[t.toKey()]=n),n}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(t,e,n){ei("MemoryPersistence","Starting transaction:",t);const r=new $c(this.Os.next());return this.referenceDelegate.qs(),n(r).next((t=>this.referenceDelegate.Us(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ks(t,e){return Fi.or(Object.values(this.Ms).map((n=>()=>n.containsKey(t,e))))}}class $c extends Mi{constructor(t){super(),this.currentSequenceNumber=t}}class qc{constructor(t){this.persistence=t,this.Gs=new Lc,this.Qs=null}static js(t){return new qc(t)}get zs(){if(this.Qs)return this.Qs;throw si()}addReference(t,e,n){return this.Gs.addReference(n,e),this.zs.delete(n.toString()),Fi.resolve()}removeReference(t,e,n){return this.Gs.removeReference(n,e),this.zs.add(n.toString()),Fi.resolve()}markPotentiallyOrphaned(t,e){return this.zs.add(e.toString()),Fi.resolve()}removeTarget(t,e){this.Gs.ps(e.targetId).forEach((t=>this.zs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}qs(){this.Qs=new Set}Us(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Fi.forEach(this.zs,(n=>{const r=Ri.fromPath(n);return this.Ws(t,r).next((t=>{t||e.removeEntry(r,Ii.min())}))})).next((()=>(this.Qs=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ws(t,e).next((t=>{t?this.zs.delete(e.toString()):this.zs.add(e.toString())}))}Bs(t){return 0}Ws(t,e){return Fi.or([()=>Fi.resolve(this.Gs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ks(t,e)])}}
/**
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
 */
class zc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.$i=n,this.Fi=r}static Bi(t,e){let n=Lo(),r=Lo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zc(t,e.fromCache,n,r)}}
/**
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
 */class Hc{constructor(){this.Li=!1}initialize(t,e){this.qi=t,this.indexManager=e,this.Li=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ui(t,e).next((i=>i||this.Ki(t,e,r,n))).next((n=>n||this.Gi(t,e)))}Ui(t,e){if(co(e))return Fi.resolve(null);let n=po(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=go(e,null,"F"),n=po(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Lo(...r);return this.qi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Qi(e,r);return this.ji(e,s,i,n.readTime)?this.Ui(t,go(e,null,"F")):this.zi(t,s,e,n)}))))})))))}Ki(t,e,n,r){return co(e)||r.isEqual(Ii.min())?this.Gi(t,e):this.qi.getDocuments(t,n).next((i=>{const s=this.Qi(e,i);return this.ji(e,s,n,r)?this.Gi(t,e):(ti()<=o["in"].DEBUG&&ei("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wo(e)),this.zi(t,s,e,Ni(r,-1)))}))}Qi(t,e){let n=new Zi(Eo(t));return e.forEach(((e,r)=>{bo(t,r)&&(n=n.add(r))})),n}ji(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(t,e){return ti()<=o["in"].DEBUG&&ei("QueryEngine","Using full collection scan to execute query:",wo(e)),this.qi.getDocumentsMatchingQuery(t,e,xi.min())}zi(t,e,n,r){return this.qi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class Kc{constructor(t,e,n,r){this.persistence=t,this.Wi=e,this.serializer=r,this.Hi=new Qi(_i),this.Ji=new Io((t=>no(t)),ro),this.Yi=new Map,this.Xi=t.getRemoteDocumentCache(),this.Fs=t.getTargetCache(),this.Ls=t.getBundleCache(),this.Zi(n)}Zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Dc(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Hi)))}}function Gc(t,e,n,r){return new Kc(t,e,n,r)}async function Wc(t,e){const n=ai(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Lo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({tr:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Jc(t,e){const n=ai(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Fi.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);oi(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Lo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Qc(t){const e=ai(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Fs.getLastRemoteSnapshotVersion(t)))}function Xc(t,e){const n=ai(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Fs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Fs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(rs.EMPTY_BYTE_STRING,Ii.min()).withLastLimboFreeSnapshotVersion(Ii.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Fs.updateTargetData(t,u))}));let a=Co(),c=Lo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Yc(t,s,e.documentUpdates).next((t=>{a=t.er,c=t.nr}))),!r.isEqual(Ii.min())){const e=n.Fs.getLastRemoteSnapshotVersion(t).next((e=>n.Fs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Fi.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Hi=i,t)))}function Yc(t,e,n){let r=Lo(),i=Lo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Co();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ii.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):ei("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{er:r,nr:i}}))}function Zc(t,e){const n=ai(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function tu(t,e){const n=ai(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Fs.getTargetData(t,e).next((i=>i?(r=i,Fi.resolve(r)):n.Fs.allocateTargetId(t).next((i=>(r=new Ec(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Fs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Hi.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(t.targetId,t),n.Ji.set(e,t.targetId)),t}))}async function eu(t,e,n){const r=ai(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!ji(t))throw t;ei("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function nu(t,e,n){const r=ai(t);let i=Ii.min(),s=Lo();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=ai(t),i=r.Ji.get(n);return void 0!==i?Fi.resolve(r.Hi.get(i)):r.Fs.getTargetData(e,n)}(r,t,po(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Wi.getDocumentsMatchingQuery(t,e,n?i:Ii.min(),n?s:Lo()))).next((t=>(ru(r,_o(e),t),{documents:t,sr:s})))))}function ru(t,e,n){let r=t.Yi.get(e)||Ii.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Yi.set(e,r)}class iu{constructor(){this.activeTargetIds=Uo()}hr(t){this.activeTargetIds=this.activeTargetIds.add(t)}lr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ar(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class su{constructor(){this.Wr=new iu,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Wr.hr(t),this.Hr[t]||"not-current"}updateQueryState(t,e,n){this.Hr[t]=e}removeLocalQueryTarget(t){this.Wr.lr(t)}isLocalQueryTarget(t){return this.Wr.activeTargetIds.has(t)}clearQueryState(t){delete this.Hr[t]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(t){return this.Wr.activeTargetIds.has(t)}start(){return this.Wr=new iu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class ou{Jr(t){}shutdown(){}}
/**
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
 */class au{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(t){this.no.push(t)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){ei("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.no)t(0)}eo(){ei("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.no)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let cu=null;function uu(){return null===cu?cu=268435456+Math.round(2147483648*Math.random()):cu++,"0x"+cu.toString(16)
/**
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
 */}const lu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class hu{constructor(t){this.io=t.io,this.ro=t.ro}oo(t){this.uo=t}co(t){this.ao=t}onMessage(t){this.ho=t}close(){this.ro()}send(t){this.io(t)}lo(){this.uo()}fo(t){this.ao(t)}_o(t){this.ho(t)}}
/**
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
 */const du="WebChannelConnection";class fu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.wo=e+"://"+t.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(t,e,n,r,i){const s=uu(),o=this.Io(t,e);ei("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.To(a,r,i),this.Eo(t,o,a,n).then((e=>(ei("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ri("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Ao(t,e,n,r,i,s){return this.po(t,e,n,r,i)}To(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Yr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Io(t,e){const n=lu[t];return`${this.wo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Eo(t,e,n,r){const i=uu();return new Promise(((s,o)=>{const a=new Gr;a.setWithCredentials(!0),a.listenOnce($r.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Br.NO_ERROR:const e=a.getResponseJson();ei(du,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Br.TIMEOUT:ei(du,`RPC '${t}' ${i} timed out`),o(new ui(ci.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const n=a.getStatus();if(ei(du,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ci).indexOf(e)>=0?e:ci.UNKNOWN}(e.status);o(new ui(t,e.message))}else o(new ui(ci.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ui(ci.UNAVAILABLE,"Connection failed."));break;default:si()}}finally{ei(du,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);ei(du,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const r=uu(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=jr(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hr({})),this.To(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");ei(du,`Creating RPC '${t}' stream ${r}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new hu({io:e=>{h?ei(du,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(ei(du,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),ei(du,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},ro:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Kr.EventType.OPEN,(()=>{h||ei(du,`RPC '${t}' stream ${r} transport opened.`)})),f(u,Kr.EventType.CLOSE,(()=>{h||(h=!0,ei(du,`RPC '${t}' stream ${r} transport closed`),d.fo())})),f(u,Kr.EventType.ERROR,(e=>{h||(h=!0,ri(du,`RPC '${t}' stream ${r} transport errored:`,e),d.fo(new ui(ci.UNAVAILABLE,"The operation could not be completed")))})),f(u,Kr.EventType.MESSAGE,(e=>{var n;if(!h){const i=e.data[0];oi(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){ei(du,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=_a[t];if(void 0!==e)return Ia(e)}(e),i=o.message;void 0===n&&(n=ci.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),h=!0,d.fo(new ui(n,i)),u.close()}else ei(du,`RPC '${t}' stream ${r} received:`,i),d._o(i)}})),f(o,qr.STAT_EVENT,(e=>{e.stat===zr.PROXY?ei(du,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===zr.NOPROXY&&ei(du,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.lo()}),0),d}}
/**
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
 */
/**
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
 */function pu(){return"undefined"!=typeof document?document:null}
/**
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
 */function mu(t){return new Ha(t,!0)}
/**
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
 */class gu{constructor(t,e,n=1e3,r=1.5,i=6e4){this.si=t,this.timerId=e,this.vo=n,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const e=Math.floor(this.Vo+this.No()),n=Math.max(0,Date.now()-this.Do),r=Math.max(0,e-n);r>0&&ei("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Do=Date.now(),t()))),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){null!==this.So&&(this.So.skipDelay(),this.So=null)}cancel(){null!==this.So&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}
/**
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
 */class yu{constructor(t,e,n,r,i,s,o,a){this.si=t,this.Mo=n,this.Oo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new gu(t,e)}qo(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&null===this.Fo&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,(()=>this.jo())))}zo(t){this.Wo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(t,e){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,4!==t?this.Lo.reset():e&&e.code===ci.RESOURCE_EXHAUSTED?(ni(e.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):e&&e.code===ci.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Jo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(e)}Jo(){}auth(){this.state=1;const t=this.Yo(this.$o),e=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.$o===e&&this.Xo(t,n)}),(e=>{t((()=>{const t=new ui(ci.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Zo(t)}))}))}Xo(t,e){const n=this.Yo(this.$o);this.stream=this.tu(t,e),this.stream.oo((()=>{n((()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener.oo())))})),this.stream.co((t=>{n((()=>this.Zo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Ko(){this.state=5,this.Lo.xo((async()=>{this.state=0,this.start()}))}Zo(t){return ei("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Yo(t){return e=>{this.si.enqueueAndForget((()=>this.$o===t?e():(ei("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vu extends yu{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}tu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.Lo.reset();const e=oc(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ii.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ii.min():e.readTime?Qa(e.readTime):Ii.min()}(t);return this.listener.eu(e,n)}nu(t){const e={};e.database=rc(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=io(r)?{documents:uc(t,r)}:{query:lc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Wa(t,e.resumeToken);const r=Ka(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ii.min())>0){n.readTime=Ga(t,e.snapshotVersion.toTimestamp());const r=Ka(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=dc(this.serializer,t);n&&(e.labels=n),this.zo(e)}su(t){const e={};e.database=rc(this.serializer),e.removeTarget=t,this.zo(e)}}class wu extends yu{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(oi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.iu){this.Lo.reset();const e=cc(t.writeResults,t.commitTime),n=Qa(t.commitTime);return this.listener.uu(n,e)}return oi(!t.writeResults||0===t.writeResults.length),this.iu=!0,this.listener.cu()}au(){const t={};t.database=rc(this.serializer),this.zo(t)}ou(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ac(this.serializer,t)))};this.zo(e)}}
/**
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
 */class bu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new ui(ci.FAILED_PRECONDITION,"The client has already been terminated.")}po(t,e,n){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.po(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ui(ci.UNKNOWN,t.toString())}))}Ao(t,e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ci.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ui(ci.UNKNOWN,t.toString())}))}terminate(){this.hu=!0}}class _u{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){0===this.du&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve()))))}pu(t){"Online"===this.state?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.gu("Offline")))}set(t){this.Iu(),this.du=0,"Online"===t&&(this.wu=!1),this.gu(t)}gu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}yu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(ni(e),this.wu=!1):ei("OnlineStateTracker",e)}Iu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
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
 */class Eu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr((t=>{n.enqueueAndForget((async()=>{Nu(this)&&(ei("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ai(t);e.Au.add(4),await Iu(e),e.Pu.set("Unknown"),e.Au.delete(4),await Tu(e)}(this))}))})),this.Pu=new _u(n,r)}}async function Tu(t){if(Nu(t))for(const e of t.Ru)await e(!0)}async function Iu(t){for(const e of t.Ru)await e(!1)}function Su(t,e){const n=ai(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Ou(n)?Ru(n):Ju(n).Uo()&&ku(n,e))}function Cu(t,e){const n=ai(t),r=Ju(n);n.Eu.delete(e),r.Uo()&&Au(n,e),0===n.Eu.size&&(r.Uo()?r.Qo():Nu(n)&&n.Pu.set("Unknown"))}function ku(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ii.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ju(t).nu(e)}function Au(t,e){t.bu.Lt(e),Ju(t).su(e)}function Ru(t){t.bu=new ja({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Ju(t).start(),t.Pu.mu()}function Ou(t){return Nu(t)&&!Ju(t).qo()&&t.Eu.size>0}function Nu(t){return 0===ai(t).Au.size}function Du(t){t.bu=void 0}async function xu(t){t.Eu.forEach(((e,n)=>{ku(t,e)}))}async function Pu(t,e){Du(t),Ou(t)?(t.Pu.pu(e),Ru(t)):t.Pu.set("Unknown")}async function Lu(t,e,n){if(t.Pu.set("Online"),e instanceof Ua&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Eu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Eu.delete(r),t.bu.removeTarget(r))}(t,e)}catch(n){ei("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Mu(t,n)}else if(e instanceof La?t.bu.Wt(e):e instanceof Ma?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Ii.min()))try{const e=await Qc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.bu.ue(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Eu.get(r);i&&t.Eu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.Eu.get(e);if(!r)return;t.Eu.set(e,r.withResumeToken(rs.EMPTY_BYTE_STRING,r.snapshotVersion)),Au(t,e);const i=new Ec(r.target,e,n,r.sequenceNumber);ku(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){ei("RemoteStore","Failed to raise snapshot:",e),await Mu(t,e)}}async function Mu(t,e,n){if(!ji(e))throw e;t.Au.add(1),await Iu(t),t.Pu.set("Offline"),n||(n=()=>Qc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ei("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Tu(t)}))}function Uu(t,e){return e().catch((n=>Mu(t,n,e)))}async function Fu(t){const e=ai(t),n=Qu(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;ju(e);)try{const t=await Zc(e.localStore,r);if(null===t){0===e.Tu.length&&n.Qo();break}r=t.batchId,Vu(e,t)}catch(t){await Mu(e,t)}Bu(e)&&$u(e)}function ju(t){return Nu(t)&&t.Tu.length<10}function Vu(t,e){t.Tu.push(e);const n=Qu(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Bu(t){return Nu(t)&&!Qu(t).qo()&&t.Tu.length>0}function $u(t){Qu(t).start()}async function qu(t){Qu(t).au()}async function zu(t){const e=Qu(t);for(const n of t.Tu)e.ou(n.mutations)}async function Hu(t,e,n){const r=t.Tu.shift(),i=va.from(r,e,n);await Uu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Fu(t)}async function Ku(t,e){e&&Qu(t).ru&&await async function(t,e){if(n=e.code,Ta(n)&&n!==ci.ABORTED){const n=t.Tu.shift();Qu(t).Go(),await Uu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Fu(t)}var n}(t,e),Bu(t)&&$u(t)}async function Gu(t,e){const n=ai(t);n.asyncQueue.verifyOperationInProgress(),ei("RemoteStore","RemoteStore received new credentials");const r=Nu(n);n.Au.add(3),await Iu(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Tu(n)}async function Wu(t,e){const n=ai(t);e?(n.Au.delete(2),await Tu(n)):e||(n.Au.add(2),await Iu(n),n.Pu.set("Unknown"))}function Ju(t){return t.Vu||(t.Vu=function(t,e,n){const r=ai(t);return r.lu(),new vu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
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
 */}(t.datastore,t.asyncQueue,{oo:xu.bind(null,t),co:Pu.bind(null,t),eu:Lu.bind(null,t)}),t.Ru.push((async e=>{e?(t.Vu.Go(),Ou(t)?Ru(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Du(t))}))),t.Vu}function Qu(t){return t.Su||(t.Su=function(t,e,n){const r=ai(t);return r.lu(),new wu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{oo:qu.bind(null,t),co:Ku.bind(null,t),cu:zu.bind(null,t),uu:Hu.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Go(),await Fu(t)):(await t.Su.stop(),t.Tu.length>0&&(ei("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))}))),t.Su
/**
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
 */}class Xu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Xu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ui(ci.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yu(t,e){if(ni("AsyncQueue",`${e}: ${t}`),ji(t))return new ui(ci.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Zu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ri.comparator(e.key,n.key):(t,e)=>Ri.comparator(t.key,e.key),this.keyedMap=Ao(),this.sortedSet=new Qi(this.comparator)}static emptySet(t){return new Zu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Zu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Zu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class tl{constructor(){this.Du=new Qi(Ri.comparator)}track(t){const e=t.doc.key,n=this.Du.get(e);n?0!==t.type&&3===n.type?this.Du=this.Du.insert(e,t):3===t.type&&1!==n.type?this.Du=this.Du.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Du=this.Du.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Du=this.Du.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Du=this.Du.remove(e):1===t.type&&2===n.type?this.Du=this.Du.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Du=this.Du.insert(e,{type:2,doc:t.doc}):si():this.Du=this.Du.insert(e,t)}Cu(){const t=[];return this.Du.inorderTraversal(((e,n)=>{t.push(n)})),t}}class el{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new el(t,e,Zu.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class nl{constructor(){this.xu=void 0,this.listeners=[]}}class rl{constructor(){this.queries=new Io((t=>vo(t)),yo),this.onlineState="Unknown",this.Nu=new Set}}async function il(t,e){const n=ai(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new nl),i)try{s.xu=await n.onListen(r)}catch(t){const n=Yu(t,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&cl(n)}async function sl(t,e){const n=ai(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ol(t,e){const n=ai(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Mu(i)&&(r=!0);e.xu=i}}r&&cl(n)}function al(t,e,n){const r=ai(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function cl(t){t.Nu.forEach((t=>{t.next()}))}class ul{constructor(t,e,n){this.query=t,this.Ou=e,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=n||{}}Mu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new el(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.$u?this.Bu(t)&&(this.Ou.next(t),e=!0):this.Lu(t,this.onlineState)&&(this.qu(t),e=!0),this.Fu=t,e}onError(t){this.Ou.error(t)}ku(t){this.onlineState=t;let e=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,t)&&(this.qu(this.Fu),e=!0),e}Lu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Uu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Bu(t){if(t.docChanges.length>0)return!0;const e=this.Fu&&this.Fu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}qu(t){t=el.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.$u=!0,this.Ou.next(t)}}
/**
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
 */
/**
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
 */
class ll{constructor(t){this.key=t}}class hl{constructor(t){this.key=t}}class dl{constructor(t,e){this.query=t,this.Ju=e,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=Lo(),this.mutatedKeys=Lo(),this.Zu=Eo(t),this.tc=new Zu(this.Zu)}get ec(){return this.Ju}nc(t,e){const n=e?e.sc:new tl,r=e?e.tc:this.tc;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=bo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ic(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Zu(l,a)>0||c&&this.Zu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tc:s,sc:n,ji:o,mutatedKeys:i}}ic(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.tc;this.tc=t.tc,this.mutatedKeys=t.mutatedKeys;const i=t.sc.Cu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return si()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.Zu(t.doc,e.doc))),this.rc(n);const s=e?this.oc():[],o=0===this.Xu.size&&this.current?1:0,a=o!==this.Yu;return this.Yu=o,0!==i.length||a?{snapshot:new el(this.query,t.tc,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),uc:s}:{uc:s}}ku(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tc:this.tc,sc:new tl,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(t){return!this.Ju.has(t)&&!!this.tc.has(t)&&!this.tc.get(t).hasLocalMutations}rc(t){t&&(t.addedDocuments.forEach((t=>this.Ju=this.Ju.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ju=this.Ju.delete(t))),this.current=t.current)}oc(){if(!this.current)return[];const t=this.Xu;this.Xu=Lo(),this.tc.forEach((t=>{this.cc(t.key)&&(this.Xu=this.Xu.add(t.key))}));const e=[];return t.forEach((t=>{this.Xu.has(t)||e.push(new hl(t))})),this.Xu.forEach((n=>{t.has(n)||e.push(new ll(n))})),e}ac(t){this.Ju=t.sr,this.Xu=Lo();const e=this.nc(t.documents);return this.applyChanges(e,!0)}hc(){return el.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,0===this.Yu,this.hasCachedResults)}}class fl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class pl{constructor(t){this.key=t,this.lc=!1}}class ml{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fc={},this.dc=new Io((t=>vo(t)),yo),this._c=new Map,this.wc=new Set,this.mc=new Qi(Ri.comparator),this.gc=new Map,this.yc=new Lc,this.Ic={},this.Tc=new Map,this.Ec=Rc.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return!0===this.Ac}}async function gl(t,e){const n=Ll(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const t=await tu(n.localStore,po(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await yl(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Su(n.remoteStore,t)}return i}async function yl(t,e,n,r,i){t.Rc=(e,n,r)=>async function(t,e,n,r){let i=e.view.nc(n);i.ji&&(i=await nu(t.localStore,e.query,!1).then((({documents:t})=>e.view.nc(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Rl(t,e.targetId,o.uc),o.snapshot}(t,e,n,r);const s=await nu(t.localStore,e,!0),o=new dl(e,s.sr),a=o.nc(s.documents),c=Pa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Rl(t,n,u.uc);const l=new fl(e,n,o);return t.dc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function vl(t,e){const n=ai(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter((t=>!yo(t,e)))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await eu(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Cu(n.remoteStore,r.targetId),kl(n,r.targetId)})).catch(Ui)):(kl(n,r.targetId),await eu(n.localStore,r.targetId,!0))}async function wl(t,e,n){const r=Ml(t);try{const t=await function(t,e){const n=ai(t),r=Ti.now(),i=e.reduce(((t,e)=>t.add(e.key)),Lo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Co(),c=Lo();return n.Xi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=ca(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new ha(t.key,e,Os(e.value.mapValue),na.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ro(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ic[t.currentUser.toKey()];r||(r=new Qi(_i)),r=r.insert(e,n),t.Ic[t.currentUser.toKey()]=r}(r,t.batchId,n),await Dl(r,t.changes),await Fu(r.remoteStore)}catch(t){const e=Yu(t,"Failed to persist write");n.reject(e)}}async function bl(t,e){const n=ai(t);try{const t=await Xc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.gc.get(e);r&&(oi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.lc=!0:t.modifiedDocuments.size>0?oi(r.lc):t.removedDocuments.size>0&&(oi(r.lc),r.lc=!1))})),await Dl(n,t,e)}catch(t){await Ui(t)}}function _l(t,e,n){const r=ai(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.dc.forEach(((n,r)=>{const i=r.view.ku(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ai(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.ku(e)&&(r=!0)})),r&&cl(n)}(r.eventManager,e),t.length&&r.fc.eu(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function El(t,e,n){const r=ai(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let t=new Qi(Ri.comparator);t=t.insert(s,Ns.newNoDocument(s,Ii.min()));const n=Lo().add(s),i=new xa(Ii.min(),new Map,new Qi(_i),t,n);await bl(r,i),r.mc=r.mc.remove(s),r.gc.delete(e),Nl(r)}else await eu(r.localStore,e,!1).then((()=>kl(r,e,n))).catch(Ui)}async function Tl(t,e){const n=ai(t),r=e.batch.batchId;try{const t=await Jc(n.localStore,e);Cl(n,r,null),Sl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dl(n,t)}catch(t){await Ui(t)}}async function Il(t,e,n){const r=ai(t);try{const t=await function(t,e){const n=ai(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(oi(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Cl(r,e,n),Sl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dl(r,t)}catch(n){await Ui(n)}}function Sl(t,e){(t.Tc.get(e)||[]).forEach((t=>{t.resolve()})),t.Tc.delete(e)}function Cl(t,e,n){const r=ai(t);let i=r.Ic[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach((e=>{t.yc.containsKey(e)||Al(t,e)}))}function Al(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);null!==n&&(Cu(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Nl(t))}function Rl(t,e,n){for(const r of n)r instanceof ll?(t.yc.addReference(r.key,e),Ol(t,r)):r instanceof hl?(ei("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||Al(t,r.key)):si()}function Ol(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(ei("SyncEngine","New document in limbo: "+n),t.wc.add(r),Nl(t))}function Nl(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new Ri(Ci.fromString(e)),r=t.Ec.next();t.gc.set(r,new pl(n)),t.mc=t.mc.insert(n,r),Su(t.remoteStore,new Ec(po(ao(n.path)),r,"TargetPurposeLimboResolution",Vi.ct))}}async function Dl(t,e,n){const r=ai(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach(((t,a)=>{o.push(r.Rc(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=zc.Bi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.fc.eu(i),await async function(t,e){const n=ai(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Fi.forEach(e,(e=>Fi.forEach(e.$i,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Fi.forEach(e.Fi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!ji(t))throw t;ei("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Hi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Hi=n.Hi.insert(t,i)}}}(r.localStore,s))}async function xl(t,e){const n=ai(t);if(!n.currentUser.isEqual(e)){ei("SyncEngine","User change. New user:",e.toKey());const t=await Wc(n.localStore,e);n.currentUser=e,function(t,e){t.Tc.forEach((t=>{t.forEach((t=>{t.reject(new ui(ci.CANCELLED,e))}))})),t.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Dl(n,t.tr)}}function Pl(t,e){const n=ai(t),r=n.gc.get(e);if(r&&r.lc)return Lo().add(r.key);{let t=Lo();const r=n._c.get(e);if(!r)return t;for(const e of r){const r=n.dc.get(e);t=t.unionWith(r.view.ec)}return t}}function Ll(t){const e=ai(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=El.bind(null,e),e.fc.eu=ol.bind(null,e.eventManager),e.fc.vc=al.bind(null,e.eventManager),e}function Ml(t){const e=ai(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Tl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Il.bind(null,e),e}class Ul{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=mu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Gc(this.persistence,new Hc,t.initialUser,this.serializer)}createPersistence(t){return new Bc(qc.js,this.serializer)}createSharedClientState(t){return new su}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>_l(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=xl.bind(null,this.syncEngine),await Wu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new rl}createDatastore(t){const e=mu(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new fu(r));var r;return function(t,e,n,r){return new bu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>_l(this.syncEngine,t,0),s=au.D()?new au:new ou,new Eu(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ml(t,e,n,r,i,s);return o&&(a.Ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ai(t);ei("RemoteStore","RemoteStore shutting down."),e.Au.add(5),await Iu(e),e.vu.shutdown(),e.Pu.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class jl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Vc(this.observer.next,t)}error(t){this.observer.error?this.Vc(this.observer.error,t):ni("Uncaught Error in snapshot listener:",t.toString())}Sc(){this.muted=!0}Vc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */
/**
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
 */
class Vl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Xr.UNAUTHENTICATED,this.clientId=bi.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ei("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(ei("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ui(ci.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Yu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Bl(t,e){t.asyncQueue.verifyOperationInProgress(),ei("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Wc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function $l(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zl(t);ei("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Gu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Gu(e.remoteStore,n))),t._onlineComponents=e}function ql(t){return"FirebaseError"===t.name?t.code===ci.FAILED_PRECONDITION||t.code===ci.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function zl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ei("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ql(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await Bl(t,new Ul)}}else ei("FirestoreClient","Using default OfflineComponentProvider"),await Bl(t,new Ul);return t._offlineComponents}async function Hl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ei("FirestoreClient","Using user provided OnlineComponentProvider"),await $l(t,t._uninitializedComponentsProvider._online)):(ei("FirestoreClient","Using default OnlineComponentProvider"),await $l(t,new Fl))),t._onlineComponents}function Kl(t){return Hl(t).then((t=>t.syncEngine))}async function Gl(t){const e=await Hl(t),n=e.eventManager;return n.onListen=gl.bind(null,e.syncEngine),n.onUnlisten=vl.bind(null,e.syncEngine),n}function Wl(t,e,n={}){const r=new li;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new jl({next:s=>{e.enqueueAndForget((()=>sl(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ui(ci.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ui(ci.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new ul(ao(n.path),s,{includeMetadataChanges:!0,Uu:!0});return il(t,o)}(await Gl(t),t.asyncQueue,e,n,r))),r.promise}function Jl(t,e,n={}){const r=new li;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new jl({next:n=>{e.enqueueAndForget((()=>sl(t,o))),n.fromCache&&"server"===r.source?i.reject(new ui(ci.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new ul(n,s,{includeMetadataChanges:!0,Uu:!0});return il(t,o)}(await Gl(t),t.asyncQueue,e,n,r))),r.promise}
/**
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
 */
const Ql=new Map;
/**
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
 */function Xl(t,e,n){if(!n)throw new ui(ci.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yl(t,e,n,r){if(!0===e&&!0===r)throw new ui(ci.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zl(t){if(!Ri.isDocumentKey(t))throw new ui(ci.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function th(t){if(Ri.isDocumentKey(t))throw new ui(ci.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function eh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":si()}function nh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ui(ci.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(t);throw new ui(ci.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class rh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ui(ci.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ui(ci.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling||void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class ih{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ui(ci.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ui(ci.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new di;switch(t.type){case"firstParty":return new gi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ui(ci.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ql.get(t);e&&(ei("ComponentProvider","Removing Datastore"),Ql.delete(t),e.terminate())}(this),Promise.resolve()}}function sh(t,e,n,r={}){var i;const s=(t=nh(t,ih))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&ri("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Xr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ui(ci.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Xr(s)}t._authCredentials=new fi(new hi(e,n))}}
/**
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
 */class oh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ch(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oh(this.firestore,t,this._key)}}class ah{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ah(this.firestore,t,this._query)}}class ch extends ah{constructor(t,e,n){super(t,e,ao(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new oh(this.firestore,null,new Ri(t))}withConverter(t){return new ch(this.firestore,t,this._path)}}function uh(t,e,...n){if(t=(0,a.m9)(t),Xl("collection","path",e),t instanceof ih){const r=Ci.fromString(e,...n);return th(r),new ch(t,null,r)}{if(!(t instanceof oh||t instanceof ch))throw new ui(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ci.fromString(e,...n));return th(r),new ch(t.firestore,null,r)}}function lh(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=bi.A()),Xl("doc","path",e),t instanceof ih){const r=Ci.fromString(e,...n);return Zl(r),new oh(t,null,new Ri(r))}{if(!(t instanceof oh||t instanceof ch))throw new ui(ci.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ci.fromString(e,...n));return Zl(r),new oh(t.firestore,t instanceof ch?t.converter:null,new Ri(r))}}
/**
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
 */
class hh{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new gu(this,"async_queue_retry"),this.Yc=()=>{const t=pu();t&&ei("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Lo.ko()};const t=pu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const e=pu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise((()=>{}));const e=new li;return this.Zc((()=>this.Qc&&this.Hc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Gc.push(t),this.ta())))}async ta(){if(0!==this.Gc.length){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!ji(t))throw t;ei("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo((()=>this.ta()))}}Zc(t){const e=this.Kc.then((()=>(this.Wc=!0,t().catch((t=>{this.zc=t,this.Wc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw ni("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Wc=!1,t))))));return this.Kc=e,e}enqueueAfterDelay(t,e,n){this.Xc(),this.Jc.indexOf(t)>-1&&(e=0);const r=Xu.createAndSchedule(this,t,e,n,(t=>this.ea(t)));return this.jc.push(r),r}Xc(){this.zc&&si()}verifyOperationInProgress(){}async na(){let t;do{t=this.Kc,await t}while(t!==this.Kc)}sa(t){for(const e of this.jc)if(e.timerId===t)return!0;return!1}ia(t){return this.na().then((()=>{this.jc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.jc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.na()}))}ra(t){this.Jc.push(t)}ea(t){const e=this.jc.indexOf(t);this.jc.splice(e,1)}}class dh extends ih{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new hh,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mh(this),this._firestoreClient.terminate()}}function fh(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&sh(s,...t)}return s}function ph(t){return t._firestoreClient||mh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mh(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new hs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Vl(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
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
 */
class gh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gh(rs.fromBase64String(t))}catch(t){throw new ui(ci.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new gh(rs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class yh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ui(ci.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ai(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class vh{constructor(t){this._methodName=t}}
/**
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
 */class wh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ui(ci.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ui(ci.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _i(this._lat,t._lat)||_i(this._long,t._long)}}
/**
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
 */const bh=/^__.*__$/;class _h{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ha(t,this.data,this.fieldMask,e,this.fieldTransforms):new la(t,this.data,e,this.fieldTransforms)}}function Eh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw si()}}class Th{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(t){return new Th(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ca({path:n,ha:!1});return r.la(t),r}fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ca({path:n,ha:!1});return r.oa(),r}da(t){return this.ca({path:void 0,ha:!0})}_a(t){return Mh(t,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}oa(){if(this.path)for(let t=0;t<this.path.length;t++)this.la(this.path.get(t))}la(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Eh(this.ua)&&bh.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class Ih{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||mu(t)}ga(t,e,n,r=!1){return new Th({ua:t,methodName:e,ma:n,path:Ai.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sh(t){const e=t._freezeSettings(),n=mu(t._databaseId);return new Ih(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ch(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);Dh("Data must be an object, but it was:",o,r);const a=Oh(r,o);let c,u;if(s.merge)c=new es(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=xh(e,r,n);if(!o.contains(i))throw new ui(ci.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Uh(t,i)||t.push(i)}c=new es(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new _h(new Rs(a),c,u)}class kh extends vh{_toFieldTransform(t){return new Zo(t.path,new Ho)}isEqual(t){return t instanceof kh}}function Ah(t,e,n,r=!1){return Rh(n,t.ga(r?4:3,e))}function Rh(t,e){if(Nh(t=(0,a.m9)(t)))return Dh("Unsupported field value:",e,t),Oh(t,e);if(t instanceof vh)return function(t,e){if(!Eh(e.ua))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&4!==e.ua)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Rh(i,e.da(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Vo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ti.fromDate(t);return{timestampValue:Ga(e.serializer,n)}}if(t instanceof Ti){const n=new Ti(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ga(e.serializer,n)}}if(t instanceof wh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof gh)return{bytesValue:Wa(e.serializer,t._byteString)};if(t instanceof oh){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${eh(t)}`)}(t,e)}function Oh(t,e){const n={};return Ji(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,((t,r)=>{const i=Rh(r,e.aa(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Nh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ti||t instanceof wh||t instanceof gh||t instanceof oh||t instanceof vh)}function Dh(t,e,n){if(!Nh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=eh(n);throw"an object"===r?e._a(t+" a custom object"):e._a(t+" "+r)}}function xh(t,e,n){if((e=(0,a.m9)(e))instanceof yh)return e._internalPath;if("string"==typeof e)return Lh(t,e);throw Mh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ph=new RegExp("[~\\*/\\[\\]]");function Lh(t,e,n){if(e.search(Ph)>=0)throw Mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yh(...e.split("."))._internalPath}catch(r){throw Mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ui(ci.INVALID_ARGUMENT,a+t+c)}function Uh(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class Fh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new jh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Vh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class jh extends Fh{data(){return super.data()}}function Vh(t,e){return"string"==typeof e?Lh(t,e):e instanceof yh?e._internalPath:e._delegate._internalPath}
/**
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
 */function Bh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ui(ci.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $h{}class qh extends $h{}function zh(t,e,...n){let r=[];e instanceof $h&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof Gh)).length,n=t.filter((t=>t instanceof Hh)).length;if(e>1||e>0&&n>0)throw new ui(ci.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
 */(r);for(const i of r)t=i._apply(t);return t}class Hh extends qh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Hh(t,e,n)}_apply(t){const e=this._parse(t);return Yh(t._query,e),new ah(t.firestore,t.converter,mo(t._query,e))}_parse(t){const e=Sh(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ui(ci.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Xh(o,s);const e=[];for(const n of o)e.push(Qh(r,t,n));a={arrayValue:{values:e}}}else a=Qh(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Xh(o,s),a=Ah(n,e,o,"in"===s||"not-in"===s);return Fs.create(i,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Kh(t,e,n){const r=e,i=Vh("where",t);return Hh._create(i,r,n)}class Gh extends $h{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Gh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:js.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)Yh(n,i),n=mo(n,i)}(t._query,e),new ah(t.firestore,t.converter,mo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Wh extends qh{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Wh(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new ui(ci.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new ui(ci.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ls(e,n);return function(t,e){if(null===uo(t)){const n=lo(t);null!==n&&Zh(t,n,e.field)}}(t,r),r}(t._query,this._field,this._direction);return new ah(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new so(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Jh(t,e="asc"){const n=e,r=Vh("orderBy",t);return Wh._create(r,n)}function Qh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ui(ci.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ho(e)&&-1!==n.indexOf("/"))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ci.fromString(n));if(!Ri.isDocumentKey(r))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _s(t,new Ri(r))}if(n instanceof oh)return _s(t,n._key);throw new ui(ci.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eh(n)}.`)}function Xh(t,e){if(!Array.isArray(t)||0===t.length)throw new ui(ci.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yh(t,e){if(e.isInequality()){const n=lo(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=uo(t);null!==i&&Zh(t,r,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new ui(ci.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ui(ci.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Zh(t,e,n){if(!n.isEqual(e))throw new ui(ci.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class td{convertValue(t,e="none"){switch(ps(t)){case 0:return null;case 1:return t.booleanValue;case 2:return os(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(as(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw si()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Wi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new wh(os(t.latitude),os(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=us(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ls(t));default:return null}}convertTimestamp(t){const e=ss(t);return new Ti(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ci.fromString(t);oi(_c(n));const r=new ds(n.get(1),n.get(3)),i=new Ri(n.popFirst(5));return r.isEqual(e)||ni(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
 */function ed(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
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
 */
class nd{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rd extends Fh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new id(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Vh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class id extends rd{data(t={}){return super.data(t)}}class sd{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new nd(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new id(this._firestore,this._userDataWriter,n.key,n,new nd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ui(ci.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new id(t._firestore,t._userDataWriter,n.doc.key,n.doc,new nd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new id(t._firestore,t._userDataWriter,e.doc.key,e.doc,new nd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:od(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function od(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return si()}}
/**
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
 */
function ad(t){t=nh(t,oh);const e=nh(t.firestore,dh);return Wl(ph(e),t._key).then((n=>fd(e,t,n)))}class cd extends td{constructor(t){super(),this.firestore=t}convertBytes(t){return new gh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new oh(this.firestore,null,e)}}function ud(t){t=nh(t,ah);const e=nh(t.firestore,dh),n=ph(e),r=new cd(e);return Bh(t._query),Jl(n,t._query).then((n=>new sd(e,r,t,n)))}function ld(t,e,n){t=nh(t,oh);const r=nh(t.firestore,dh),i=ed(t.converter,e,n);return dd(r,[Ch(Sh(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,na.none())])}function hd(t,e){const n=nh(t.firestore,dh),r=lh(t),i=ed(t.converter,e);return dd(n,[Ch(Sh(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,na.exists(!1))]).then((()=>r))}function dd(t,e){return function(t,e){const n=new li;return t.asyncQueue.enqueueAndForget((async()=>wl(await Kl(t),e,n))),n.promise}(ph(t),e)}function fd(t,e,n){const r=n.docs.get(e._key),i=new cd(t);return new rd(t,i,e._key,r,new nd(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */function pd(){return new kh("serverTimestamp")}!function(t,e=!0){!function(t){Yr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new dh(new pi(t.getProvider("auth-internal")),new vi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ui(ci.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ds(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Qr,"3.11.0",t),(0,i.KN)(Qr,"3.11.0","esm2017")}()},1294:function(t,e,n){"use strict";n.d(e,{Jt:function(){return fe},cF:function(){return me},aF:function(){return de},iH:function(){return pe},KV:function(){return he}});n(2801),n(7658),n(3767),n(8585),n(8696);var r=n(7077),i=n(223),s=n(7142);
/**
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
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
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
 */
class l extends i.ZR{constructor(t,e,n=0){super(f(t),`Firebase Storage: ${e} (${f(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return f(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function m(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function g(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function v(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function b(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function T(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new l(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function k(t){return new l(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function A(t){return new l(h.INVALID_ARGUMENT,t)}function R(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function O(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function N(t,e){return new l(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function D(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
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
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class x{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=x.makeFromUrl(t,e)}catch(r){return new x(t,"")}if(""===n.path)return n;throw T(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",y=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<w.length;o++){const e=w[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new x(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class P{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
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
 */function L(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function M(t){t(!1)}
/**
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
 */function U(t){return void 0!==t}function F(t){return"object"===typeof t&&!Array.isArray(t)}function j(t){return"string"===typeof t||t instanceof String}function V(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function $(t,e,n,r){if(r<e)throw A(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
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
 */function q(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
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
 */
/**
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
 */
function H(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class K{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,i=n.getStatus();if(!e||H(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new G(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new G(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());U(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?R():_();r(t)}else{const t=b();r(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function W(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function J(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Q(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Y(t,e,n,r,i,s,o=!0){const a=z(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return Q(u,e),W(u,n),J(u,s),X(u,r),new K(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
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
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(B())return new Blob(t);throw new l(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
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
 */function nt(t){if("undefined"===typeof atob)throw k("base-64");return atob(t)}
/**
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
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case rt.RAW:return new it(ot(e));case rt.BASE64:case rt.BASE64URL:return new it(ct(t,e));case rt.DATA_URL:return new it(lt(e),ht(e))}throw p()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw N(rt.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw N(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw N(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw N(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw N(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(rt.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
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
 */class ft{constructor(t,e){let n=0,r="";V(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(V(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new ft(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof ft?t.data_:t));return new ft(tt.apply(null,e))}{const e=t.map((t=>j(t)?st(rt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new ft(r,!0)}}uploadData(){return this.data_}}
/**
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
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return F(e)?e:null}
/**
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
 */function mt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
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
 */function vt(t,e){return e}class wt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let bt=null;function _t(t){return!j(t)||t.length<2?t:yt(t)}function Et(){if(bt)return bt;const t=[];function e(t,e){return _t(e)}t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));const n=new wt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new wt("size");return i.xform=r,t.push(i),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),bt=t,bt}function Tt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new x(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Tt(r,t),r}function St(t,e,n){const r=pt(e);if(null===r)return null;const i=r;return It(t,i,n)}function Ct(t,e,n,r){const i=pt(e);if(null===i)return null;if(!j(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=q(a,n,r),u=z({alt:"media",token:e});return c+u}));return c[0]}function kt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
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
 */const At="prefixes",Rt="items";function Ot(t,e,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[At])for(const i of n[At]){const n=i.replace(/\/$/,""),s=t._makeStorageReference(new x(e,n));r.prefixes.push(s)}if(n[Rt])for(const i of n[Rt]){const n=t._makeStorageReference(new x(e,i["name"]));r.items.push(n)}return r}function Nt(t,e,n){const r=pt(n);if(null===r)return null;const i=r;return Ot(t,e,i)}class Dt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function xt(t){if(!t)throw p()}function Pt(t,e){function n(n,r){const i=St(t,r,e);return xt(null!==i),i}return n}function Lt(t,e){function n(n,r){const i=Nt(t,e,r);return xt(null!==i),i}return n}function Mt(t,e){function n(n,r){const i=St(t,r,e);return xt(null!==i),Ct(i,r,t.host,t._protocol)}return n}function Ut(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===e.getStatus()?g(t.bucket):403===e.getStatus()?w(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Ft(t){const e=Ut(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=m(t.path)),i.serverResponse=r.serverResponse,i}return n}function jt(t,e,n,r,i){const s={};e.isRoot?s["prefix"]="":s["prefix"]=e.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=e.bucketOnlyServerUrl(),a=q(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Dt(a,c,Lt(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Ut(e),l}function Vt(t,e,n){const r=e.fullServerUrl(),i=q(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Dt(i,s,Mt(t,n),o);return a.errorHandler=Ft(e),a}function Bt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function $t(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Bt(null,e)),r}function qt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=$t(e,r,i),l=kt(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,r,d);if(null===f)throw S();const p={name:u["fullPath"]},m=q(s,t.host,t._protocol),g="POST",y=t.maxUploadRetryTime,v=new Dt(m,g,Pt(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Ut(e),v}
/**
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
 */
let zt=null;class Ht{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=d.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=d.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Kt extends Ht{initXhr(){this.xhr_.responseType="text"}}function Gt(){return zt?zt():new Kt}
/**
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
 */
class Wt{constructor(t,e){this._service=t,this._location=e instanceof x?e:x.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Wt(t,e)}get root(){const t=new x(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(null===t)return null;const e=new x(this._location.bucket,t);return new Wt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw O(t)}}function Jt(t,e,n){t._throwIfRoot("uploadBytes");const r=qt(t.storage,t._location,Et(),new ft(e,!0),n);return t.storage.makeRequestWithTokens(r,Gt).then((e=>({metadata:e,ref:t})))}function Qt(t){const e={prefixes:[],items:[]};return Xt(t,e).then((()=>e))}async function Xt(t,e,n){const r={pageToken:n},i=await Yt(t,r);e.prefixes.push(...i.prefixes),e.items.push(...i.items),null!=i.nextPageToken&&await Xt(t,e,i.nextPageToken)}function Yt(t,e){null!=e&&"number"===typeof e.maxResults&&$("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=jt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Gt)}function Zt(t){t._throwIfRoot("getDownloadURL");const e=Vt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,Gt).then((t=>{if(null===t)throw C();return t}))}function te(t,e){const n=gt(t._location.path,e),r=new x(t._location.bucket,n);return new Wt(t.storage,r)}
/**
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
 */function ee(t){return/^[A-Za-z]+:\/\//.test(t)}function ne(t,e){return new Wt(t,e)}function re(t,e){if(t instanceof ae){const n=t;if(null==n._bucket)throw I();const r=new Wt(n,n._bucket);return null!=e?re(r,e):r}return void 0!==e?te(t,e):t}function ie(t,e){if(e&&ee(e)){if(t instanceof ae)return ne(t,e);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return re(t,e)}function se(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:x.makeFromBucketSpec(n,t)}function oe(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,t.app.options.projectId))}class ae{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?x.makeFromBucketSpec(r,this._host):se(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,t):this._bucket=se(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Wt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new P(R());{const s=Y(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const ce="@firebase/storage",ue="0.11.2",le="storage";function he(t,e,n){return t=(0,i.m9)(t),Jt(t,e,n)}function de(t){return t=(0,i.m9)(t),Qt(t)}function fe(t){return t=(0,i.m9)(t),Zt(t)}function pe(t,e){return t=(0,i.m9)(t),ie(t,e)}function me(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,le),s=n.getImmediate({identifier:e}),o=(0,i.P0)("storage");return o&&ge(s,...o),s}function ge(t,e,n,r={}){oe(t,e,n,r)}
/**
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
 */function ye(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ae(n,i,s,e,r.Jn)}function ve(){(0,r.Xd)(new s.wA(le,ye,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ce,ue,""),(0,r.KN)(ce,ue,"esm2017")}ve()},2483:function(t,e,n){"use strict";n.d(e,{p7:function(){return ne},r5:function(){return V}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=t=>t.replace(h,"");function f(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=_(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return l(t)?b(t,e):l(e)?b(e,t):t===e}function b(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function _(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function I(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),d(t)}const S=/^[^#]+#/;function C(t,e){return t.replace(S,"#")+e}function k(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=k(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function O(t,e){const n=history.state?history.state.position-e:-1;return n+t}const N=new Map;function D(t,e){N.set(t,e)}function x(t){const e=N.get(t);return N.delete(t),e}let P=()=>location.protocol+"//"+location.host;function L(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,t);return o+r+i}function M(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:A()}),"")}function d(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function U(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function F(t){const{history:e,location:n}=window,r={value:L(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:P()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,U(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:A()});s(o.current,o,!0);const c=a({},U(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function j(t){t=I(t);const e=F(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:C.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),j(t)}function B(t){return"string"===typeof t||t&&"object"===typeof t}function $(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function K(t,e){return a(new Error,{type:t,[z]:!0},e)}function G(t,e){return t instanceof Error&&z in t&&(null==e||!!(t.type&e))}const W="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},J,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Y(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(tt(r))return 1;if(tt(i))return-1}return i.length-r.length}function tt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const et={type:0,value:""},nt=/[a-zA-Z0-9_]/;function rt(t){if(!t)return[[]];if("/"===t)return[[et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:nt.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function it(t,e,n){const r=X(rt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function st(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=at(t);c.aliasOf=r&&r.record;const h=ht(e,t),d=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let f,p;for(const e of d){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(f=it(e,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&t.name&&!ut(f)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],f,r&&r.children[e])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(t){if($(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!dt(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ut(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw K(1,{location:t});0,o=i.record.name,c=a(ot(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&ot(t.params,i.keys.map((t=>t.name)))),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw K(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:lt(u)}}return e=ht({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function ot(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function at(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ct(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ct(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ut(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ht(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dt(t,e){return e.children.some((e=>e===t||dt(t,e)))}const ft=/#/g,pt=/&/g,mt=/\//g,gt=/=/g,yt=/\?/g,vt=/\+/g,wt=/%5B/g,bt=/%5D/g,_t=/%5E/g,Et=/%60/g,Tt=/%7B/g,It=/%7C/g,St=/%7D/g,Ct=/%20/g;function kt(t){return encodeURI(""+t).replace(It,"|").replace(wt,"[").replace(bt,"]")}function At(t){return kt(t).replace(Tt,"{").replace(St,"}").replace(_t,"^")}function Rt(t){return kt(t).replace(vt,"%2B").replace(Ct,"+").replace(ft,"%23").replace(pt,"%26").replace(Et,"`").replace(Tt,"{").replace(St,"}").replace(_t,"^")}function Ot(t){return Rt(t).replace(gt,"%3D")}function Nt(t){return kt(t).replace(ft,"%23").replace(yt,"%3F")}function Dt(t){return null==t?"":Nt(t).replace(mt,"%2F")}function xt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Pt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(vt," "),n=t.indexOf("="),s=xt(n<0?t:t.slice(0,n)),o=n<0?null:xt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=Ot(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&Rt(t))):[r&&Rt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Mt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ut=Symbol(""),Ft=Symbol(""),jt=Symbol(""),Vt=Symbol(""),Bt=Symbol("");function $t(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function qt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(K(4,{from:n,to:e})):t instanceof Error?a(t):B(t)?a(K(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function zt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Ht(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push(qt(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&qt(u,n,r,s,t)()}))))}}}return i}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Kt(t){const e=(0,r.f3)(jt),n=(0,r.f3)(Vt),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return Jt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Gt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kt,setup(t,{slots:e}){const n=(0,i.qj)(Kt(t)),{options:s}=(0,r.f3)(jt),o=(0,r.Fl)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Wt=Gt;function Jt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(Bt),o=(0,r.Fl)((()=>t.route||s.value)),c=(0,r.f3)(Ft,0),u=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ft,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Ut,l),(0,r.JJ)(Bt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=l.value,u=c&&c.components[s];if(!u)return te(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:m,route:i})||m}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=st(t.routes,t),n=t.parseQuery||Pt,o=t.stringifyQuery||Lt,h=t.history;const d=$t(),m=$t(),y=$t(),v=(0,i.XI)(q);let w=q;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(t=>""+t)),_=c.bind(null,Dt),T=c.bind(null,xt);function I(t,n){let r,i;return $(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function k(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=a({},r||v.value),"string"===typeof t){const i=f(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:xt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:f(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:_(t.params)}),r.params=_(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=b(T(s.params));const u=p(o,a({},t,{hash:At(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Lt?Mt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function P(t){return"string"===typeof t?f(n,t,v.value.path):a({},t)}function L(t,e){if(w!==t)return K(8,{from:e,to:t})}function M(t){return j(t)}function U(t){return M(a(P(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function j(t,e){const n=w=N(t),r=v.value,i=t.state,s=t.force,c=!0===t.replace,u=F(n);if(u)return j(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&g(o,r,n)&&(h=K(16,{to:l,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):B(l,r)).catch((t=>G(t)?G(t,2)?t:et(t):Z(t,l,r))).then((t=>{if(t){if(G(t,2))return j(a({replace:c},P(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=H(l,r,!0,c,i);return z(l,r,t),t}))}function V(t,e){const n=L(t,e);return n?Promise.reject(n):Promise.resolve()}function B(t,e){let n;const[r,i,s]=ie(t,e);n=zt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=V.bind(null,t,e);return n.push(o),re(n).then((()=>{n=[];for(const r of d.list())n.push(qt(r,t,e));return n.push(o),re(n)})).then((()=>{n=zt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),re(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qt(i,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),re(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=zt(s,"beforeRouteEnter",t,e),n.push(o),re(n)))).then((()=>{n=[];for(const r of m.list())n.push(qt(r,t,e));return n.push(o),re(n)})).catch((t=>G(t,8)?t:Promise.reject(t)))}function z(t,e,n){for(const r of y.list())r(t,e,n)}function H(t,e,n,r,i){const o=L(t,e);if(o)return o;const c=e===q,u=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),v.value=t,nt(t,e,n,c),et()}let W;function J(){W||(W=h.listen(((t,e,n)=>{if(!at.listening)return;const r=N(t),i=F(r);if(i)return void j(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&D(O(o.fullPath,n.delta),A()),B(r,o).catch((t=>G(t,12)?t:G(t,2)?(j(t.to,r).then((t=>{G(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(t,r,o)))).then((t=>{t=t||H(r,o,!1),t&&(n.delta&&!G(t,8)?h.go(-n.delta,!1):n.type===E.pop&&G(t,20)&&h.go(-1,!1)),z(r,o,t)})).catch(u)})))}let Q,X=$t(),Y=$t();function Z(t,e,n){et(t);const r=Y.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return Q&&v.value!==q?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function et(t){return Q||(Q=!t,J(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset()),t}function nt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&x(O(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&R(t))).catch((t=>Z(t,e,n)))}const rt=t=>h.go(t);let it;const ot=new Set,at={currentRoute:v,listening:!0,addRoute:I,removeRoute:S,hasRoute:k,getRoutes:C,resolve:N,options:t,push:M,replace:U,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:d.add,beforeResolve:m.add,afterEach:y.add,onError:Y.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!it&&v.value===q&&(it=!0,M(h.location).catch((t=>{0})));const n={};for(const i in q)n[i]=(0,r.Fl)((()=>v.value[i]));t.provide(jt,e),t.provide(Vt,(0,i.qj)(n)),t.provide(Bt,v);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(w=q,W&&W(),W=null,v.value=q,it=!1,Q=!1),o()}}};return at}function re(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function ie(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>y(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.517921c9.js.map