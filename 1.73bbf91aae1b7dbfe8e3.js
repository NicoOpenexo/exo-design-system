(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{JpoA:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("HnWI");function o(t,e){return new r.a(e?function(n){return e.schedule(i,0,{error:t,subscriber:n})}:function(e){return e.error(t)})}function i(t){t.subscriber.error(t.error)}},rXXt:function(t,e,n){"use strict";var r=n("WT9V"),o=n("D57K"),i=n("LoAr"),s=n("pN2L"),a=(n("HnWI"),n("HswR")),c=n("z5yO"),u=n("Jg5f"),h=function(){function t(t){var e=this;this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?function(){e.headers=new Map,t.split("\n").forEach(function(t){var n=t.indexOf(":");if(n>0){var r=t.slice(0,n),o=r.toLowerCase(),i=t.slice(n+1).trim();e.maybeSetNormalizedName(r,o),e.headers.has(o)?e.headers.get(o).push(i):e.headers.set(o,[i])}})}:function(){e.headers=new Map,Object.keys(t).forEach(function(n){var r=t[n],o=n.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(e.headers.set(o,r),e.maybeSetNormalizedName(n,o))})}:this.headers=new Map}return t.prototype.has=function(t){return this.init(),this.headers.has(t.toLowerCase())},t.prototype.get=function(t){this.init();var e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null},t.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},t.prototype.getAll=function(t){return this.init(),this.headers.get(t.toLowerCase())||null},t.prototype.append=function(t,e){return this.clone({name:t,value:e,op:"a"})},t.prototype.set=function(t,e){return this.clone({name:t,value:e,op:"s"})},t.prototype.delete=function(t,e){return this.clone({name:t,value:e,op:"d"})},t.prototype.maybeSetNormalizedName=function(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)},t.prototype.init=function(){var e=this;this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(t){return e.applyUpdate(t)}),this.lazyUpdate=null))},t.prototype.copyFrom=function(t){var e=this;t.init(),Array.from(t.headers.keys()).forEach(function(n){e.headers.set(n,t.headers.get(n)),e.normalizedNames.set(n,t.normalizedNames.get(n))})},t.prototype.clone=function(e){var n=new t;return n.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,n.lazyUpdate=(this.lazyUpdate||[]).concat([e]),n},t.prototype.applyUpdate=function(t){var e=t.name.toLowerCase();switch(t.op){case"a":case"s":var n=t.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(t.name,e);var r=("a"===t.op?this.headers.get(e):void 0)||[];r.push.apply(r,Object(o.g)(n)),this.headers.set(e,r);break;case"d":var i=t.value;if(i){var s=this.headers.get(e);if(!s)return;0===(s=s.filter(function(t){return-1===i.indexOf(t)})).length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}else this.headers.delete(e),this.normalizedNames.delete(e)}},t.prototype.forEach=function(t){var e=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(n){return t(e.normalizedNames.get(n),e.headers.get(n))})},t}(),p=function(){function t(){}return t.prototype.encodeKey=function(t){return l(t)},t.prototype.encodeValue=function(t){return l(t)},t.prototype.decodeKey=function(t){return decodeURIComponent(t)},t.prototype.decodeValue=function(t){return decodeURIComponent(t)},t}();function l(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var f=function(){function t(t){void 0===t&&(t={});var e,n,r,i=this;if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new p,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=(e=t.fromString,n=this.encoder,r=new Map,e.length>0&&e.split("&").forEach(function(t){var e=t.indexOf("="),i=Object(o.f)(-1==e?[n.decodeKey(t),""]:[n.decodeKey(t.slice(0,e)),n.decodeValue(t.slice(e+1))],2),s=i[0],a=i[1],c=r.get(s)||[];c.push(a),r.set(s,c)}),r)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(function(e){var n=t.fromObject[e];i.map.set(e,Array.isArray(n)?n:[n])})):this.map=null}return t.prototype.has=function(t){return this.init(),this.map.has(t)},t.prototype.get=function(t){this.init();var e=this.map.get(t);return e?e[0]:null},t.prototype.getAll=function(t){return this.init(),this.map.get(t)||null},t.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},t.prototype.append=function(t,e){return this.clone({param:t,value:e,op:"a"})},t.prototype.set=function(t,e){return this.clone({param:t,value:e,op:"s"})},t.prototype.delete=function(t,e){return this.clone({param:t,value:e,op:"d"})},t.prototype.toString=function(){var t=this;return this.init(),this.keys().map(function(e){var n=t.encoder.encodeKey(e);return t.map.get(e).map(function(e){return n+"="+t.encoder.encodeValue(e)}).join("&")}).join("&")},t.prototype.clone=function(e){var n=new t({encoder:this.encoder});return n.cloneFrom=this.cloneFrom||this,n.updates=(this.updates||[]).concat([e]),n},t.prototype.init=function(){var t=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(e){return t.map.set(e,t.cloneFrom.map.get(e))}),this.updates.forEach(function(e){switch(e.op){case"a":case"s":var n=("a"===e.op?t.map.get(e.param):void 0)||[];n.push(e.value),t.map.set(e.param,n);break;case"d":if(void 0===e.value){t.map.delete(e.param);break}var r=t.map.get(e.param)||[],o=r.indexOf(e.value);-1!==o&&r.splice(o,1),r.length>0?t.map.set(e.param,r):t.map.delete(e.param)}}),this.cloneFrom=null)},t}();function d(t){return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer}function y(t){return"undefined"!=typeof Blob&&t instanceof Blob}function m(t){return"undefined"!=typeof FormData&&t instanceof FormData}var g=function(){function t(t,e,n,r){var o;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new h),this.params){var i=this.params.toString();if(0===i.length)this.urlWithParams=e;else{var s=e.indexOf("?");this.urlWithParams=e+(-1===s?"?":s<e.length-1?"&":"")+i}}else this.params=new f,this.urlWithParams=e}return t.prototype.serializeBody=function(){return null===this.body?null:d(this.body)||y(this.body)||m(this.body)||"string"==typeof this.body?this.body:this.body instanceof f?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},t.prototype.detectContentTypeHeader=function(){return null===this.body?null:m(this.body)?null:y(this.body)?this.body.type||null:d(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof f?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},t.prototype.clone=function(e){void 0===e&&(e={});var n=e.method||this.method,r=e.url||this.url,o=e.responseType||this.responseType,i=void 0!==e.body?e.body:this.body,s=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress,c=e.headers||this.headers,u=e.params||this.params;return void 0!==e.setHeaders&&(c=Object.keys(e.setHeaders).reduce(function(t,n){return t.set(n,e.setHeaders[n])},c)),e.setParams&&(u=Object.keys(e.setParams).reduce(function(t,n){return t.set(n,e.setParams[n])},u)),new t(n,r,i,{params:u,headers:c,reportProgress:a,responseType:o,withCredentials:s})},t}(),v=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}({}),b=function(t){function e(e){void 0===e&&(e={});var n=t.call(this,e)||this;return n.type=v.Response,n.body=void 0!==e.body?e.body:null,n}return Object(o.c)(e,t),e.prototype.clone=function(t){return void 0===t&&(t={}),new e({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})},e}(function(){return function(t,e,n){void 0===e&&(e=200),void 0===n&&(n="OK"),this.headers=t.headers||new h,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}());function _(t,e){return{body:e,headers:t.headers,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}var S=function(){function t(t){this.handler=t}return t.prototype.request=function(t,e,n){var r,o=this;if(void 0===n&&(n={}),t instanceof g)r=t;else{var i;i=n.headers instanceof h?n.headers:new h(n.headers);var p=void 0;n.params&&(p=n.params instanceof f?n.params:new f({fromObject:n.params})),r=new g(t,e,void 0!==n.body?n.body:null,{headers:i,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}var l=Object(s.a)(r).pipe(Object(a.a)(function(t){return o.handler.handle(t)}));if(t instanceof g||"events"===n.observe)return l;var d=l.pipe(Object(c.a)(function(t){return t instanceof b}));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return d.pipe(Object(u.a)(function(t){if(null!==t.body&&!(t.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return t.body}));case"blob":return d.pipe(Object(u.a)(function(t){if(null!==t.body&&!(t.body instanceof Blob))throw new Error("Response is not a Blob.");return t.body}));case"text":return d.pipe(Object(u.a)(function(t){if(null!==t.body&&"string"!=typeof t.body)throw new Error("Response is not a string.");return t.body}));case"json":default:return d.pipe(Object(u.a)(function(t){return t.body}))}case"response":return d;default:throw new Error("Unreachable: unhandled observe type "+n.observe+"}")}},t.prototype.delete=function(t,e){return void 0===e&&(e={}),this.request("DELETE",t,e)},t.prototype.get=function(t,e){return void 0===e&&(e={}),this.request("GET",t,e)},t.prototype.head=function(t,e){return void 0===e&&(e={}),this.request("HEAD",t,e)},t.prototype.jsonp=function(t,e){return this.request("JSONP",t,{params:(new f).append(e,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},t.prototype.options=function(t,e){return void 0===e&&(e={}),this.request("OPTIONS",t,e)},t.prototype.patch=function(t,e,n){return void 0===n&&(n={}),this.request("PATCH",t,_(n,e))},t.prototype.post=function(t,e,n){return void 0===n&&(n={}),this.request("POST",t,_(n,e))},t.prototype.put=function(t,e,n){return void 0===n&&(n={}),this.request("PUT",t,_(n,e))},t}(),I=n("SeAg"),C=n("JpoA"),w=n("cQOC"),E=n("U3QC"),O=n("IMYO"),F=n("/gsZ"),j=n("fa4O"),A=n("G2Mx"),N=n("LYzL"),R=n("HfXx");function z(t){return Error('Unable to find icon with the name "'+t+'"')}function P(t){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was \""+t+'".')}function T(t){return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was \""+t+'".')}n.d(e,"c",function(){return J}),n.d(e,"a",function(){return B}),n.d(e,"b",function(){return V}),n.d(e,"d",function(){return L});var U=function(){return function(t){t.nodeName?this.svgElement=t:this.url=t}}(),L=function(){function t(t,e,n){this._httpClient=t,this._sanitizer=e,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons",this._document=n}return t.prototype.addSvgIcon=function(t,e){return this.addSvgIconInNamespace("",t,e)},t.prototype.addSvgIconLiteral=function(t,e){return this.addSvgIconLiteralInNamespace("",t,e)},t.prototype.addSvgIconInNamespace=function(t,e,n){return this._addSvgIconConfig(t,e,new U(n))},t.prototype.addSvgIconLiteralInNamespace=function(t,e,n){var r=this._sanitizer.sanitize(i.I.HTML,n);if(!r)throw T(n);var o=this._createSvgElementForSingleIcon(r);return this._addSvgIconConfig(t,e,new U(o))},t.prototype.addSvgIconSet=function(t){return this.addSvgIconSetInNamespace("",t)},t.prototype.addSvgIconSetLiteral=function(t){return this.addSvgIconSetLiteralInNamespace("",t)},t.prototype.addSvgIconSetInNamespace=function(t,e){return this._addSvgIconSetConfig(t,new U(e))},t.prototype.addSvgIconSetLiteralInNamespace=function(t,e){var n=this._sanitizer.sanitize(i.I.HTML,e);if(!n)throw T(e);var r=this._svgElementFromString(n);return this._addSvgIconSetConfig(t,new U(r))},t.prototype.registerFontClassAlias=function(t,e){return void 0===e&&(e=t),this._fontCssClassesByAlias.set(t,e),this},t.prototype.classNameForFontAlias=function(t){return this._fontCssClassesByAlias.get(t)||t},t.prototype.setDefaultFontSetClass=function(t){return this._defaultFontSetClass=t,this},t.prototype.getDefaultFontSetClass=function(){return this._defaultFontSetClass},t.prototype.getSvgIconFromUrl=function(t){var e=this,n=this._sanitizer.sanitize(i.I.RESOURCE_URL,t);if(!n)throw P(t);var r=this._cachedIconsByUrl.get(n);return r?Object(s.a)(x(r)):this._loadSvgIconFromConfig(new U(t)).pipe(Object(E.a)(function(t){return e._cachedIconsByUrl.set(n,t)}),Object(u.a)(function(t){return x(t)}))},t.prototype.getNamedSvgIcon=function(t,e){void 0===e&&(e="");var n=M(e,t),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);var o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):Object(C.a)(z(n))},t.prototype.ngOnDestroy=function(){this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()},t.prototype._getSvgFromConfig=function(t){return t.svgElement?Object(s.a)(x(t.svgElement)):this._loadSvgIconFromConfig(t).pipe(Object(E.a)(function(e){return t.svgElement=e}),Object(u.a)(function(t){return x(t)}))},t.prototype._getSvgFromIconSetConfigs=function(t,e){var n=this,r=this._extractIconWithNameFromAnySet(t,e);if(r)return Object(s.a)(r);var o=e.filter(function(t){return!t.svgElement}).map(function(t){return n._loadSvgIconSetFromConfig(t).pipe(Object(O.a)(function(e){var r=n._sanitizer.sanitize(i.I.RESOURCE_URL,t.url);return console.error("Loading icon set URL: "+r+" failed: "+e.message),Object(s.a)(null)}))});return Object(w.a)(o).pipe(Object(u.a)(function(){var r=n._extractIconWithNameFromAnySet(t,e);if(!r)throw z(t);return r}))},t.prototype._extractIconWithNameFromAnySet=function(t,e){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.svgElement){var o=this._extractSvgIconFromSet(r.svgElement,t);if(o)return o}}return null},t.prototype._loadSvgIconFromConfig=function(t){var e=this;return this._fetchUrl(t.url).pipe(Object(u.a)(function(t){return e._createSvgElementForSingleIcon(t)}))},t.prototype._loadSvgIconSetFromConfig=function(t){var e=this;return t.svgElement?Object(s.a)(t.svgElement):this._fetchUrl(t.url).pipe(Object(u.a)(function(n){return t.svgElement||(t.svgElement=e._svgElementFromString(n)),t.svgElement}))},t.prototype._createSvgElementForSingleIcon=function(t){var e=this._svgElementFromString(t);return this._setSvgAttributes(e),e},t.prototype._extractSvgIconFromSet=function(t,e){var n=t.querySelector("#"+e);if(!n)return null;var r=n.cloneNode(!0);if(r.removeAttribute("id"),"svg"===r.nodeName.toLowerCase())return this._setSvgAttributes(r);if("symbol"===r.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(r));var o=this._svgElementFromString("<svg></svg>");return o.appendChild(r),this._setSvgAttributes(o)},t.prototype._svgElementFromString=function(t){var e=this._document.createElement("DIV");e.innerHTML=t;var n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n},t.prototype._toSvgElement=function(t){for(var e=this._svgElementFromString("<svg></svg>"),n=0;n<t.childNodes.length;n++)t.childNodes[n].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[n].cloneNode(!0));return e},t.prototype._setSvgAttributes=function(t){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),t},t.prototype._fetchUrl=function(t){var e=this;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==t)throw Error('Cannot fetch icon from URL "'+t+'".');var n=this._sanitizer.sanitize(i.I.RESOURCE_URL,t);if(!n)throw P(t);var r=this._inProgressUrlFetches.get(n);if(r)return r;var o=this._httpClient.get(n,{responseType:"text"}).pipe(Object(F.a)(function(){return e._inProgressUrlFetches.delete(n)}),Object(j.a)());return this._inProgressUrlFetches.set(n,o),o},t.prototype._addSvgIconConfig=function(t,e,n){return this._svgIconConfigs.set(M(t,e),n),this},t.prototype._addSvgIconSetConfig=function(t,e){var n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this},t.ngInjectableDef=Object(i.T)({factory:function(){return new t(Object(i.X)(S,8),Object(i.X)(I.c),Object(i.X)(r.c,8))},token:t,providedIn:"root"}),t}();function x(t){return t.cloneNode(!0)}function M(t,e){return t+":"+e}var k=function(){return function(t){this._elementRef=t}}(),D=Object(N.t)(k),B=new i.p("mat-icon-location",{providedIn:"root",factory:function(){var t=Object(i.X)(r.c),e=t?t.location:null;return{getPathname:function(){return e?e.pathname+e.search:""}}}}),H=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],W=H.map(function(t){return"["+t+"]"}).join(", "),q=/^url\(['"]?#(.*?)['"]?\)$/,V=function(t){function e(e,n,r,o){var i=t.call(this,e)||this;return i._iconRegistry=n,i._location=o,i._inline=!1,r||e.nativeElement.setAttribute("aria-hidden","true"),i}return Object(o.c)(e,t),Object.defineProperty(e.prototype,"inline",{get:function(){return this._inline},set:function(t){this._inline=Object(R.b)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fontSet",{get:function(){return this._fontSet},set:function(t){this._fontSet=this._cleanupFontValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fontIcon",{get:function(){return this._fontIcon},set:function(t){this._fontIcon=this._cleanupFontValue(t)},enumerable:!0,configurable:!0}),e.prototype._splitIconName=function(t){if(!t)return["",""];var e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error('Invalid icon name: "'+t+'"')}},e.prototype.ngOnChanges=function(t){var e=this;if(t.svgIcon)if(this.svgIcon){var n=this._splitIconName(this.svgIcon);this._iconRegistry.getNamedSvgIcon(n[1],n[0]).pipe(Object(A.a)(1)).subscribe(function(t){return e._setSvgElement(t)},function(t){return console.log("Error retrieving icon: "+t.message)})}else this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()},e.prototype.ngOnInit=function(){this._usingFontIcon()&&this._updateFontIconClasses()},e.prototype.ngAfterViewChecked=function(){var t=this._elementsWithExternalReferences;if(t&&this._location&&t.size){var e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}},e.prototype.ngOnDestroy=function(){this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()},e.prototype._usingFontIcon=function(){return!this.svgIcon},e.prototype._setSvgElement=function(t){this._clearSvgElement();for(var e=t.querySelectorAll("style"),n=0;n<e.length;n++)e[n].textContent+=" ";if(this._location){var r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(r)}this._elementRef.nativeElement.appendChild(t)},e.prototype._clearSvgElement=function(){var t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){var n=t.childNodes[e];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||t.removeChild(n)}},e.prototype._updateFontIconClasses=function(){if(this._usingFontIcon()){var t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}},e.prototype._cleanupFontValue=function(t){return"string"==typeof t?t.trim().split(" ")[0]:t},e.prototype._prependPathToReferences=function(t){var e=this._elementsWithExternalReferences;e&&e.forEach(function(e,n){e.forEach(function(e){n.setAttribute(e.name,"url('"+t+"#"+e.value+"')")})})},e.prototype._cacheChildrenWithExternalReferences=function(t){for(var e=t.querySelectorAll(W),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map,r=function(t){H.forEach(function(r){var o=e[t],i=o.getAttribute(r),s=i?i.match(q):null;if(s){var a=n.get(o);a||n.set(o,a=[]),a.push({name:r,value:s[1]})}})},o=0;o<e.length;o++)r(o)},e}(D),J=function(){return function(){}}()}}]);