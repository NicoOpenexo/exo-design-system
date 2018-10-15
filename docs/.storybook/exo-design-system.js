!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="http://localhost:9000",r(r.s=1)}([function(e,t){
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const r=document.createElement("link");r.rel="stylesheet",r.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(r)},function(e,t,r){"use strict";r.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${n}`),s=(()=>{const e=document.createElement("div");return e.setAttribute("style","{{bad value}}"),"{{bad value}}"!==e.getAttribute("style")})();class o{constructor(e,t){this.parts=[],this.element=t;let r=-1,n=0;const o=[],d=t=>{const l=t.content,u=document.createTreeWalker(l,133,null,!1);let m,h;for(;u.nextNode();){r++,m=h;const t=h=u.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let d=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(i)>=0&&d++;for(;d-- >0;){const i=e.strings[n],o=p.exec(i)[2],d=s&&"style"===o?"style$":/^[a-zA-Z-]*$/.test(o)?o:o.toLowerCase(),c=t.getAttribute(d).split(a);this.parts.push({type:"attribute",index:r,name:o,strings:c}),t.removeAttribute(d),n+=c.length-1}}"TEMPLATE"===t.tagName&&d(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(i)<0)continue;const s=t.parentNode,d=e.split(a),p=d.length-1;n+=p;for(let e=0;e<p;e++)s.insertBefore(""===d[e]?c():document.createTextNode(d[e]),t),this.parts.push({type:"node",index:r++});s.insertBefore(""===d[p]?c():document.createTextNode(d[p]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===i){const e=t.parentNode,i=t.previousSibling;null===i||i!==m||i.nodeType!==Node.TEXT_NODE?e.insertBefore(c(),t):r--,this.parts.push({type:"node",index:r++}),o.push(t),null===t.nextSibling?e.insertBefore(c(),t):r--,h=m,n++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(i,e+1));)this.parts.push({type:"node",index:-1})}}};d(t);for(const e of o)e.parentNode.removeChild(e)}}const d=e=>-1!==e.index,c=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,l=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function u(e,t){const{element:{content:r},parts:i}=e,n=document.createTreeWalker(r,l,null,!1);let a=h(i),s=i[a],o=-1,d=0;const c=[];let p=null;for(;n.nextNode();){o++;const e=n.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(c.push(e),null===p&&(p=e)),null!==p&&d++;void 0!==s&&s.index===o;)s.index=null!==p?-1:s.index-d,s=i[a=h(i,a)]}c.forEach(e=>e.parentNode.removeChild(e))}const m=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const r=document.createTreeWalker(e,l,null,!1);for(;r.nextNode();)t++;return t},h=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(d(t))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,b=(e,t,r=null)=>{let i=t;for(;i!==r;){const t=i.nextSibling;e.removeChild(i),i=t}},g=new WeakMap,v=e=>"function"==typeof e&&g.has(e),_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(e,t,r){this._parts=[],this.template=e,this.processor=t,this._getTemplate=r}update(e){let t=0;for(const r of this._parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=f?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let r=0,i=0;const n=e=>{const a=document.createTreeWalker(e,133,null,!1);let s=a.nextNode();for(;r<t.length&&null!==s;){const e=t[r];if(d(e))if(i===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this._getTemplate);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings));r++}else i++,"TEMPLATE"===s.nodeName&&n(s.content),s=a.nextNode();else this._parts.push(void 0),r++}};return n(e),f&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class x{constructor(e,t,r,i){this.strings=e,this.values=t,this.type=r,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!0;for(let a=0;a<e;a++){const e=this.strings[a];t+=e;const o=e.lastIndexOf(">");!(r=(o>-1||r)&&-1===e.indexOf("<",o+1))&&s&&(t=t.replace(p,(e,t,r,i)=>"style"===r?`${t}style$${i}`:e)),t+=r?n:i}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const A=e=>null===e||!("object"==typeof e||"function"==typeof e);class w{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let e=0;e<r.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let i=0;i<t;i++){r+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)r+="string"==typeof t?t:String(t);else r+="string"==typeof e?e:String(e)}}return r+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===_||A(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this._pendingValue=void 0,this.templateFactory=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=c()),e._insert(this.endNode=c())}insertAfterPart(e){e._insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;v(this._pendingValue);){const e=this._pendingValue;this._pendingValue=_,e(this)}const e=this._pendingValue;e!==_&&(A(e)?e!==this.value&&this._commitText(e):e instanceof x?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):void 0!==e.then?this._commitPromise(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const r=new y(t,e.processor,this.templateFactory),i=r._clone();r.update(e.values),this._commitNode(i),this.value=r}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,i=0;for(const n of e)void 0===(r=t[i])&&(r=new E(this.templateFactory),t.push(r),0===i?r.appendIntoPart(this):r.insertAfterPart(t[i-1])),r.setValue(n),r.commit(),i++;i<t.length&&(t.length=i,this.clear(r&&r.endNode))}_commitPromise(e){this.value=e,e.then(t=>{this.value===e&&(this.setValue(t),this.commit())})}clear(e=this.startNode){b(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,r){if(this.value=void 0,this._pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this._pendingValue=e}commit(){for(;v(this._pendingValue);){const e=this._pendingValue;this._pendingValue=_,e(this)}if(this._pendingValue===_)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=_}}class T extends w{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new F(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class F extends S{}class N{constructor(e,t){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t}setValue(e){this._pendingValue=e}commit(){for(;v(this._pendingValue);){const e=this._pendingValue;this._pendingValue=_,e(this)}this._pendingValue!==_&&(null==this._pendingValue!=(null==this.value)&&(null==this._pendingValue?this.element.removeEventListener(this.eventName,this):this.element.addEventListener(this.eventName,this)),this.value=this._pendingValue,this._pendingValue=_)}handleEvent(e){"function"==typeof this.value?this.value.call(this.element,e):"function"==typeof this.value.handleEvent&&this.value.handleEvent(e)}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const P=new Map,$=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function D(e,t,r=function(e){let t=P.get(e.type);void 0===t&&(t=new Map,P.set(e.type,t));let r=t.get(e.strings);return void 0===r&&(r=new o(e,e.getTemplateElement()),t.set(e.strings,r)),r}){let i=$.get(t);void 0===i&&(b(t,t.firstChild),$.set(t,i=new E(r)),i.appendInto(t)),i.setValue(e),i.commit()}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new class{handleAttributeExpressions(e,t,r){const i=t[0];return"."===i?new T(e,t.slice(1),r).parts:"@"===i?[new N(e,t.slice(1))]:"?"===i?[new C(e,t.slice(1),r)]:new w(e,t,r).parts}handleTextExpression(e){return new E(e)}},O=(e,...t)=>new x(e,t,"html",V),I=(e,t)=>`${e}--${t}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),R=!1);const M=e=>t=>{const r=I(t.type,e);let i=P.get(r);void 0===i&&(i=new Map,P.set(r,i));let n=i.get(t.strings);if(void 0===n){const r=t.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(r,e),n=new o(t,r),i.set(t.strings,n)}return n},k=["html","svg"];const H=new Set,z=(e,t,r)=>{H.add(r);const i=e.querySelectorAll("style");if(0===i.length)return;const n=document.createElement("style");for(let e=0;e<i.length;e++){const t=i[e];t.parentNode.removeChild(t),n.textContent+=t.textContent}if(function(e){k.forEach(t=>{const r=P.get(I(t,e));void 0!==r&&r.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),u(e,r)})})}(r),function(e,t,r=null){const{element:{content:i},parts:n}=e;if(null===r||void 0===r)return void i.appendChild(t);const a=document.createTreeWalker(i,l,null,!1);let s=h(n),o=0,d=-1;for(;a.nextNode();)for(d++,a.currentNode===r&&(o=m(t),r.parentNode.insertBefore(t,r));-1!==s&&n[s].index===d;){if(o>0){for(;-1!==s;)n[s].index+=o,s=h(n,s);return}s=h(n,s)}}(t,n,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,r),window.ShadyCSS.nativeShadow){const r=t.element.content.querySelector("style");e.insertBefore(r.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(n,t.element.content.firstChild);const e=new Set;e.add(n),u(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=e=>null!==e,U=e=>e?"":null,L=(e,t)=>t!==e&&(t==t||e==e),j={attribute:!0,type:String,reflect:!1,hasChanged:L},G=new Promise(e=>e(!0)),q=1,W=4,X=8;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const[t,r]of this._classProperties){const i=this._attributeNameForProperty(t,r);void 0!==i&&(this._attributeToPropertyMap.set(i,t),e.push(i))}return e}static createProperty(e,t=j){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(i){const n=this[e];this[r]=i,this._requestPropertyUpdate(e,n,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,r=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of r)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const r=void 0!==t&&t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=L){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t&&t.type;if(void 0===r)return e;const i=r===Boolean?B:"function"==typeof r?r:r.fromAttribute;return i?i(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?U:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[e]of this.constructor._classProperties)if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}_applyInstanceProperties(){for(const[e,t]of this._instanceProperties)this[e]=t;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&q?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=j){const i=this.constructor,n=i._propertyValueToAttribute(t,r);if(void 0!==n){const t=i._attributeNameForProperty(e,r);void 0!==t&&(this._updateState=this._updateState|X,null===n?this.removeAttribute(t):this.setAttribute(t,n),this._updateState=this._updateState&~X)}}_attributeToProperty(e,t){if(!(this._updateState&X)){const r=this.constructor,i=r._attributeToPropertyMap.get(e);if(void 0!==i){const e=r._classProperties.get(i);this[i]=r._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const r=this.constructor._classProperties.get(e)||j;return this._requestPropertyUpdate(e,t,r)}return this._invalidate()}_requestPropertyUpdate(e,t,r){return this.constructor._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===r.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|W;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&W}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&q||(this._updateState=this._updateState|q,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~W}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[e,t]of this._reflectingProperties)this._propertyToAttribute(e,this[e],t);this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Y._attributeToPropertyMap=new Map,Y._finalized=!0,Y._classProperties=new Map,Y.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=e=>(t,r)=>{t.constructor.createProperty(r,e)};J((e,t)=>e.querySelector(t)),J((e,t)=>e.querySelectorAll(t));function J(e){return t=>(r,i)=>{Object.defineProperty(r,i,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}class K extends Y{update(e){if(super.update(e),"function"!=typeof this.render)throw new Error("render() not implemented");this.constructor.render(this.render(),this.renderRoot,this.localName)}}K.render=function(e,t,r){const i=$.has(t);if(D(e,t,M(r)),t instanceof ShadowRoot&&R&&e instanceof x){if(!H.has(r)){const e=$.get(t).value;z(t,e.template,r)}i||window.ShadyCSS.styleElement(t.host)}},
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.navigator.userAgent.match("Trident")&&(DOMTokenList.prototype.toggle=function(e,t){return void 0===t||t?this.add(e):this.remove(e),void 0===t||t});const Q=new WeakMap,ee=new WeakMap,te=e=>(e=>(g.set(e,!0),e))(t=>{if(!(t instanceof S)||t instanceof F||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");ee.has(t)||(t.committer.element.className=t.committer.strings.join(" "),ee.set(t,!0));const r=Q.get(t);for(const i in r)i in e||t.committer.element.classList.remove(i);for(const i in e)r&&r[i]===e[i]||t.committer.element.classList.toggle(i,Boolean(e[i]));Q.set(t,e)}),re=O`<style>.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:2px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:rgba(0,0,0,0);color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.mdc-button:not(:disabled){background-color:rgba(0,0,0,0)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir="rtl"] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir="rtl"]{margin-left:8px;margin-right:0}.mdc-button svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir="rtl"] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir="rtl"]{margin-left:8px;margin-right:-4px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,0.12);color:rgba(0,0,0,0.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px;line-height:32px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,0.37)}.mdc-button--outlined.mdc-button--dense{line-height:27px}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem;line-height:32px}:host{display:inline-flex;outline:none}.mdc-button{flex:1}
</style>`,ie="function"==typeof CustomEvent,ne=e=>(class extends e{get host(){return this._host}get activeElement(){return this.host.getRootNode().activeElement}initialize(...e){super.initialize(...e),this._host=this.root_.getRootNode().host}createAdapter(){return null}getDefaultFoundation(){const e=super.getDefaultFoundation();return Object.assign(e.adapter_,this.createAdapter()),e}emit(e,t,r=!1){let i;ie?i=new CustomEvent(e,{detail:t,bubbles:r,composed:!0}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,r,!1,t),this.root_.dispatchEvent(i)}}),ae=O`<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform, opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}
</style>`;var se=
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(e={}){this.adapter_=e}init(){}destroy(){}};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static attachTo(e){return new oe(e,new se)}constructor(e,t,...r){this.root_=e,this.initialize(...r),this.foundation_=void 0===t?this.getDefaultFoundation():t,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(e,t){this.root_.addEventListener(e,t)}unlisten(e,t){this.root_.removeEventListener(e,t)}emit(e,t,r=!1){let i;"function"==typeof CustomEvent?i=new CustomEvent(e,{detail:t,bubbles:r}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,r,!1,t),this.root_.dispatchEvent(i)}}var de=oe;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ce={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},pe={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},le={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ue,me;function he(e=window,t=!1){if(void 0===me||t){let t=!1;try{e.document.addEventListener("test",null,{get passive(){t=!0}})}catch(e){}me=t}return!!me&&{passive:!0}}const fe=["touchstart","pointerdown","mousedown","keydown"],be=["touchend","pointerup","mouseup"];let ge=[];class ve extends se{static get cssClasses(){return ce}static get strings(){return pe}static get numbers(){return le}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},containsEventTarget:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(e){super(Object.assign(ve.defaultAdapter,e)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(e=>this.activate_(e)),this.deactivateHandler_=(e=>this.deactivate_(e)),this.focusHandler_=(()=>requestAnimationFrame(()=>this.adapter_.addClass(ve.cssClasses.BG_FOCUSED))),this.blurHandler_=(()=>requestAnimationFrame(()=>this.adapter_.removeClass(ve.cssClasses.BG_FOCUSED))),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_=null}isSupported_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}init(){if(!this.isSupported_())return;this.registerRootHandlers_();const{ROOT:e,UNBOUNDED:t}=ve.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(e),this.adapter_.isUnbounded()&&(this.adapter_.addClass(t),this.layoutInternal_())})}destroy(){if(!this.isSupported_())return;if(this.activationTimer_){clearTimeout(this.activationTimer_),this.activationTimer_=0;const{FG_ACTIVATION:e}=ve.cssClasses;this.adapter_.removeClass(e)}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_();const{ROOT:e,UNBOUNDED:t}=ve.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(e),this.adapter_.removeClass(t),this.removeCssVars_()})}registerRootHandlers_(){fe.forEach(e=>{this.adapter_.registerInteractionHandler(e,this.activateHandler_)}),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)}registerDeactivationHandlers_(e){"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):be.forEach(e=>{this.adapter_.registerDocumentInteractionHandler(e,this.deactivateHandler_)})}deregisterRootHandlers_(){fe.forEach(e=>{this.adapter_.deregisterInteractionHandler(e,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),be.forEach(e=>{this.adapter_.deregisterDocumentInteractionHandler(e,this.deactivateHandler_)})}removeCssVars_(){const{strings:e}=ve;Object.keys(e).forEach(t=>{0===t.indexOf("VAR_")&&this.adapter_.updateCssVariable(e[t],null)})}activate_(e){if(this.adapter_.isSurfaceDisabled())return;const t=this.activationState_;if(t.isActivated)return;const r=this.previousActivationEvent_;r&&e&&r.type!==e.type||(t.isActivated=!0,t.isProgrammatic=null===e,t.activationEvent=e,t.wasActivatedByPointer=!t.isProgrammatic&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type),e&&ge.length>0&&ge.some(e=>this.adapter_.containsEventTarget(e))?this.resetActivationState_():(e&&(ge.push(e.target),this.registerDeactivationHandlers_(e)),t.wasElementMadeActive=this.checkElementMadeActive_(e),t.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(()=>{ge=[],t.wasElementMadeActive||" "!==e.key&&32!==e.keyCode||(t.wasElementMadeActive=this.checkElementMadeActive_(e),t.wasElementMadeActive&&this.animateActivation_()),t.wasElementMadeActive||(this.activationState_=this.defaultActivationState_())})))}checkElementMadeActive_(e){return!e||"keydown"!==e.type||this.adapter_.isSurfaceActive()}activate(e=null){this.activate_(e)}animateActivation_(){const{VAR_FG_TRANSLATE_START:e,VAR_FG_TRANSLATE_END:t}=ve.strings,{FG_DEACTIVATION:r,FG_ACTIVATION:i}=ve.cssClasses,{DEACTIVATION_TIMEOUT_MS:n}=ve.numbers;this.layoutInternal_();let a="",s="";if(!this.adapter_.isUnbounded()){const{startPoint:e,endPoint:t}=this.getFgTranslationCoordinates_();a=`${e.x}px, ${e.y}px`,s=`${t.x}px, ${t.y}px`}this.adapter_.updateCssVariable(e,a),this.adapter_.updateCssVariable(t,s),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(r),this.adapter_.computeBoundingRect(),this.adapter_.addClass(i),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),n)}getFgTranslationCoordinates_(){const{activationEvent:e,wasActivatedByPointer:t}=this.activationState_;let r;return{startPoint:r={x:(r=t?function(e,t,r){const{x:i,y:n}=t,a=i+r.left,s=n+r.top;let o,d;return"touchstart"===e.type?(o=e.changedTouches[0].pageX-a,d=e.changedTouches[0].pageY-s):(o=e.pageX-a,d=e.pageY-s),{x:o,y:d}}
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:r.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:e}=ve.cssClasses,{hasDeactivationUXRun:t,isActivated:r}=this.activationState_;(t||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(e)},le.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:e}=ve.cssClasses;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=null,ve.numbers.TAP_DELAY_MS)}deactivate_(e){const t=this.activationState_;if(!t.isActivated)return;const r=Object.assign({},t);if(t.isProgrammatic){const e=null;requestAnimationFrame(()=>this.animateDeactivation_(e,r)),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(e,r),this.resetActivationState_()})}deactivate(e=null){this.deactivate_(e)}animateDeactivation_(e,{wasActivatedByPointer:t,wasElementMadeActive:r}){(t||r)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:(()=>{return Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+ve.numbers.PADDING})(),this.initialSize_=e*ve.numbers.INITIAL_ORIGIN_SCALE,this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:e,VAR_LEFT:t,VAR_TOP:r,VAR_FG_SCALE:i}=ve.strings;this.adapter_.updateCssVariable(e,`${this.initialSize_}px`),this.adapter_.updateCssVariable(i,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(t,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(r,`${this.unboundedCoords_.top}px`))}setUnbounded(e){const{UNBOUNDED:t}=ve.cssClasses;e?this.adapter_.addClass(t):this.adapter_.removeClass(t)}}var _e=ve;
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends de{constructor(...e){super(...e),this.disabled=!1,this.unbounded_}static attachTo(e,{isUnbounded:t}={}){const r=new ye(e);return void 0!==t&&(r.unbounded=t),r}static createAdapter(e){const t=function(e){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(t=>t in e).pop()}(HTMLElement.prototype);return{browserSupportsCssVars:()=>(function(e,t=!1){let r=ue;if("boolean"==typeof ue&&!t)return r;if(!e.CSS||"function"!=typeof e.CSS.supports)return;const i=e.CSS.supports("--css-vars","yes"),n=e.CSS.supports("(--css-vars: yes)")&&e.CSS.supports("color","#00000000");return r=!(!i&&!n||function(e){const t=e.document,r=t.createElement("div");r.className="mdc-ripple-surface--test-edge-var-bug",t.body.appendChild(r);const i=e.getComputedStyle(r),n=null!==i&&"solid"===i.borderTopStyle;return r.remove(),n}(e)),t||(ue=r),r})(window),isUnbounded:()=>e.unbounded,isSurfaceActive:()=>e.root_[t](":active"),isSurfaceDisabled:()=>e.disabled,addClass:t=>e.root_.classList.add(t),removeClass:t=>e.root_.classList.remove(t),containsEventTarget:t=>e.root_.contains(t),registerInteractionHandler:(t,r)=>e.root_.addEventListener(t,r,he()),deregisterInteractionHandler:(t,r)=>e.root_.removeEventListener(t,r,he()),registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,he()),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t,he()),registerResizeHandler:e=>window.addEventListener("resize",e),deregisterResizeHandler:e=>window.removeEventListener("resize",e),updateCssVariable:(t,r)=>e.root_.style.setProperty(t,r),computeBoundingRect:()=>e.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(e){this.unbounded_=Boolean(e),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new _e(ye.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class xe{}let Ae;function we(e=window,t=!1){if(void 0===Ae||t){let t=!1;try{e.document.addEventListener("test",null,{get passive(){t=!0}})}catch(e){}Ae=t}return!!Ae&&{passive:!0}}xe.prototype.root_,xe.prototype.unbounded,xe.prototype.disabled;const Se=function(e){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(t=>t in e).pop()}(HTMLElement.prototype);class Ee extends(ne(ye)){}class Ce extends Ee{createAdapter(){const e=this.host.parentNode||this.host;return{isSurfaceActive:()=>e[Se](":active"),isSurfaceDisabled:()=>e.disabled,containsEventTarget:t=>e.contains(t),registerInteractionHandler:(t,r)=>e.addEventListener(t,r,we()),deregisterInteractionHandler:(t,r)=>e.removeEventListener(t,r,we()),computeBoundingRect:()=>e.getBoundingClientRect()}}}customElements.define("mwc-ripple",class extends K{static get properties(){return{primary:{type:Boolean},accent:{type:Boolean},unbounded:{type:Boolean}}}constructor(){super(),this.primary=!1,this.accent=!1,this.unbounded=!1}_renderStyle(){return ae}render(){const{primary:e,accent:t,unbounded:r}=this,i={"mdc-ripple-surface--primary":e,"mdc-ripple-surface--accent":t};return O`
      ${this._renderStyle()}
      <div class="mdc-ripple-surface ${te(i)}" data-mdc-ripple-is-unbounded="${r}"></div>`}firstUpdated(){const e=this.shadowRoot.querySelector(".mdc-ripple-surface");(this.parentNode||this).style.position="relative",this._ripple=new Ce(e)}});r(0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class Te extends K{static get properties(){return{raised:{type:Boolean},unelevated:{type:Boolean},outlined:{type:Boolean},dense:{type:Boolean},disabled:{type:Boolean},icon:{type:String},label:{type:String}}}constructor(){super(),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}firstUpdated(){this._ripple=new Ee(this.shadowRoot.querySelector(".mdc-button"))}renderStyle(){return re}render(){const{raised:e,unelevated:t,outlined:r,dense:i,disabled:n,icon:a,label:s}=this,o={"mdc-button--raised":e,"mdc-button--unelevated":t,"mdc-button--outlined":r,"mdc-button--dense":i};return O`
      ${this.renderStyle()}
      <button class="mdc-button ${te(o)}" ?disabled="${n}">
        ${a?O`<span class="material-icons mdc-button__icon">${a}</span>`:""}
        ${s||""}
        <slot></slot>
      </button>`}}customElements.define("mwc-button",Te);const Fe={900:"#001846",800:"#002E58",700:"#375B7B",600:"#526F8B",500:"#6C859C",400:"#8699AD",300:"#9FAEBE",200:"#87C2CE",100:"#CFD7DE",50:"#E7EBEF","900-008":"rgba(0, 24, 70, 0.08)","900-016":"rgba(0, 24, 70, 0.16)"};Fe.A700=Fe[600],Fe.A400=Fe[500],Fe.A200=Fe[400],Fe.A100=Fe[200];const Ne={900:"#3A1090",800:"#5018BF",700:"#5C1CD7",600:"#6620ED",500:"#6F23FF",400:"#7E38FF",300:"#9A62FF",200:"#B48AFF",100:"#C29FF",50:"#D9C5FF","500-024":"rgba(111, 35, 255, 0.24)"};Ne.A700=Ne[600],Ne.A400=Ne[500],Ne.A200=Ne[400],Ne.A100=Ne[200];const Pe={900:"#A13C3D",800:"#BB4647",700:"#D55252",600:"#EF5D5E",500:"#FF7273",400:"#FF9899",300:"#FFB2B3",200:"#FFCCCC",100:"#FFD9D9",50:"#FFE6E6"};Pe.A700=Pe[600],Pe.A400=Pe[500],Pe.A200=Pe[400],Pe.A100=Pe[200];const $e={900:"#E7934D",800:"#FCA155",700:"#FFB05C",600:"#FFC26B",500:"#FFCA75",400:"#FFCE82",300:"#FFD38F",200:"#FFDDA8",100:"#FFE7C2",50:"#FFF0DA"};$e.A700=$e[600],$e.A400=$e[500],$e.A200=$e[400],$e.A100=$e[200];const De="rgba(70,70,75, 0.32)",Ve="rgba(70,70,75, 0.24)",Oe="rgba(70,70,75, 0.16)",Ie={900:"#FFFFFF","900-075":"rgba(225, 225, 225, 0.75)","900-072":"rgba(225, 225, 225, 0.72)","900-024":"rgba(225, 225, 225, 0.24)","900-038":"rgba(225, 225, 225, 0.38)","900-008":"rgba(225, 225, 225, 0.08)","900-016":"rgba(225, 225, 225, 0.16)"};var Re=function(e,t,r,i){var n,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};const Me={ecosystem:{primary:`\n  --mdc-theme-primary: ${Ne[500]};\n  --mdc-theme-on-primary: ${Ie[900]};\n  --mdc-theme-bg: ${Ne[500]};\n  --mdc-theme-text: ${Ie[900]};\n  --mdc-theme-border-radius: 48px;\n  --mdc-theme-bg-hover: ${Ne[700]};\n  --mdc-theme-text-hover:  ${Ie[900]};\n  --mdc-theme-border-radius-hover: 48px;\n  --mdc-theme-bg-disabled: ${Ve};\n  --mdc-theme-text-disabled:  ${Ie[900]};\n  --mdc-theme-border-radius-disabled: 48px;\n`,secondary:`\n--mdc-theme-primary: ${Fe["900-008"]};\n--mdc-theme-on-primary: ${Ie[900]};\n--mdc-theme-bg: ${Fe["900-008"]};\n--mdc-theme-text: ${Ne[500]};\n--mdc-theme-border-radius: 48px;\n--mdc-theme-bg-hover: ${Fe["900-016"]};\n--mdc-theme-text-hover: ${Ne[500]};\n--mdc-theme-border-radius-hover: 48px;\n--mdc-theme-bg-disabled: ${Ve};\n--mdc-theme-text-disabled: ${Ie[900]};\n--mdc-theme-border-radius-disabled: 48px;\n`,text:`\n--mdc-theme-primary: transparent;\n--mdc-theme-on-primary: ${Oe};\n--mdc-theme-bg: transparent;\n--mdc-theme-text: ${Ne[500]};\n--mdc-theme-border-radius: 0;\n--mdc-theme-bg-hover: ${Oe};\n--mdc-theme-text-hover: ${Ne[700]};\n--mdc-theme-border-radius-hover: 0;\n--mdc-theme-bg-disabled: transparent;\n--mdc-theme-text-disabled: ${De};\n--mdc-theme-border-radius-disabled: 0;\n`},dark:{primary:`\n--mdc-theme-primary: ${Pe[500]};\n--mdc-theme-on-primary: ${Ie[900]};\n--mdc-theme-bg: ${Pe[500]};\n--mdc-theme-text: ${Ie[900]};\n--mdc-theme-border-radius: 48px;\n--mdc-theme-bg-hover: ${Pe[700]};\n--mdc-theme-text-hover:  ${Ie[900]};\n--mdc-theme-border-radius-hover: 48px;\n--mdc-theme-bg-disabled: ${Ie["900-024"]};\n--mdc-theme-text-disabled:  ${Ie[900]};\n--mdc-theme-border-radius-disabled: 48px;\n`,secondary:`\n--mdc-theme-primary: ${Fe["900-008"]};\n--mdc-theme-on-primary: ${Ie[900]};\n--mdc-theme-bg: ${Fe["900-008"]};\n--mdc-theme-text: ${Pe[500]};\n--mdc-theme-border-radius: 48px;\n--mdc-theme-bg-hover: ${Fe["900-016"]};\n--mdc-theme-text-hover: ${Pe[500]};\n--mdc-theme-border-radius-hover: 48px;\n--mdc-theme-bg-disabled: ${Ie["900-024"]};\n--mdc-theme-text-disabled: ${Ie[900]};\n--mdc-theme-border-radius-disabled: 48px;\n`,text:`\n--mdc-theme-primary: transparent;\n--mdc-theme-on-primary: ${Ie["900-016"]};\n--mdc-theme-bg: transparent;\n--mdc-theme-text: ${Ie["900-072"]};\n--mdc-theme-border-radius: 0;\n--mdc-theme-bg-hover: transparent;\n--mdc-theme-text-hover: ${Ie[900]};\n--mdc-theme-border-radius-hover: 0;\n--mdc-theme-bg-disabled: transparent;\n--mdc-theme-text-disabled: ${Ie["900-032"]};\n--mdc-theme-border-radius-disabled: 0;\n`},project:{primary:`\n  --mdc-theme-primary: ${Pe[500]};\n  --mdc-theme-on-primary: ${Ie[900]};\n  --mdc-theme-bg: ${Pe[500]};\n  --mdc-theme-text: ${Ie[900]};\n  --mdc-theme-border-radius: 48px;\n  --mdc-theme-bg-hover: ${Pe[700]};\n  --mdc-theme-text-hover:  ${Ie[900]};\n  --mdc-theme-border-radius-hover: 48px;\n  --mdc-theme-bg-disabled: ${Ve};\n  --mdc-theme-text-disabled:  ${Ie[900]};\n  --mdc-theme-border-radius-disabled: 48px;\n`,secondary:`\n--mdc-theme-primary: ${Fe["900-008"]};\n--mdc-theme-on-primary: ${Ie[900]};\n--mdc-theme-bg: ${Fe["900-008"]};\n--mdc-theme-text: ${Pe[500]};\n--mdc-theme-border-radius: 48px;\n--mdc-theme-bg-hover: ${Fe["900-016"]};\n--mdc-theme-text-hover: ${Pe[500]};\n--mdc-theme-border-radius-hover: 48px;\n--mdc-theme-bg-disabled: ${Ve};\n--mdc-theme-text-disabled: ${Ie[900]};\n--mdc-theme-border-radius-disabled: 48px;\n`,text:`\n--mdc-theme-primary: transparent;\n--mdc-theme-on-primary: ${Oe};\n--mdc-theme-bg: transparent;\n--mdc-theme-text: ${Pe[500]};\n--mdc-theme-border-radius: 0;\n--mdc-theme-bg-hover: ${Oe};\n--mdc-theme-text-hover: ${Pe[700]};\n--mdc-theme-border-radius-hover: 0;\n--mdc-theme-bg-disabled: transparent;\n--mdc-theme-text-disabled: ${De};\n--mdc-theme-border-radius-disabled: 0;\n`}};class ke extends Te{constructor(){super(...arguments),this.theme="ecosystem",this.emphasis="primary"}renderStyle(){const{theme:e,emphasis:t}=this,r=Me[e][t];return O`
    ${super.renderStyle()}
    ${function(e){return O`
<style>
    .mdc-button:not(:disabled),
    .mdc-button--raised,
    .mdc-button {
      ${e}
      box-shadow: 0px 0px 0px;
      background-color: var(--mdc-theme-bg);
      color: var(--mdc-theme-text);
      border-radius: var(--mdc-theme-border-radius);
      padding: 0 16px 0 16px;
    }
    .mdc-button:not(:disabled):hover,
    .mdc-button:hover,
    .mdc-button--raised:hover {
      box-shadow: 0px 0px 0px;
      background-color: var(--mdc-theme-bg-hover);
      color: var(--mdc-theme-text-hover);
      border-radius: var(--mdc-theme-border-radius-hover);
    }

    .mdc-button--raised:disabled,
    .mdc-button:disabled {
      box-shadow: 0px 0px 0px;
      background-color: var(--mdc-theme-bg-disabled);
      color: var(--mdc-theme-text-disabled);
      border-radius: var(--mdc-theme-border-radius-disabled);
    }
    .material-icons {
      font-family: var(--mdc-icon-font, "Material Icons");
      font-size: var(--mdc-icon-size, 24px);
    }
 </style>
`}(r)}
    `}}Re([Z()],ke.prototype,"theme",void 0),Re([Z()],ke.prototype,"emphasis",void 0),customElements.define("exo-button",ke)}]);