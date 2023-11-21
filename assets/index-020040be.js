import{cc as k}from"./index-9321bf11.js";var C={exports:{}};(function(j,K){var G=function(U){Object.defineProperty(U,"__esModule",{value:!0}),U.default=void 0;/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */var _=null;try{_=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function s(i,t,n){this.low=i|0,this.high=t|0,this.unsigned=!!n}s.prototype.__isLong__,Object.defineProperty(s.prototype,"__isLong__",{value:!0});function l(i){return(i&&i.__isLong__)===!0}function M(i){var t=Math.clz32(i&-i);return i?31-t:t}s.isLong=l;var R={},W={};function T(i,t){var n,r,g;return t?(i>>>=0,(g=0<=i&&i<256)&&(r=W[i],r)?r:(n=e(i,0,!0),g&&(W[i]=n),n)):(i|=0,(g=-128<=i&&i<128)&&(r=R[i],r)?r:(n=e(i,i<0?-1:0,!1),g&&(R[i]=n),n))}s.fromInt=T;function N(i,t){if(isNaN(i))return t?q:O;if(t){if(i<0)return q;if(i>=S)return m}else{if(i<=-V)return c;if(i+1>=V)return H}return i<0?N(-i,t).neg():e(i%b|0,i/b|0,t)}s.fromNumber=N;function e(i,t,n){return new s(i,t,n)}s.fromBits=e;var x=Math.pow;function Z(i,t,n){if(i.length===0)throw Error("empty string");if(typeof t=="number"?(n=t,t=!1):t=!!t,i==="NaN"||i==="Infinity"||i==="+Infinity"||i==="-Infinity")return t?q:O;if(n=n||10,n<2||36<n)throw RangeError("radix");var r;if((r=i.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return Z(i.substring(1),t,n).neg();for(var g=N(x(n,8)),f=O,u=0;u<i.length;u+=8){var w=Math.min(8,i.length-u),L=parseInt(i.substring(u,u+w),n);if(w<8){var F=N(x(n,w));f=f.mul(F).add(N(L))}else f=f.mul(g),f=f.add(N(L))}return f.unsigned=t,f}s.fromString=Z;function d(i,t){return typeof i=="number"?N(i,t):typeof i=="string"?Z(i,t):e(i.low,i.high,typeof t=="boolean"?t:i.unsigned)}s.fromValue=d;var P=65536,X=1<<24,b=P*P,S=b*b,V=S/2,D=T(X),O=T(0);s.ZERO=O;var q=T(0,!0);s.UZERO=q;var y=T(1);s.ONE=y;var z=T(1,!0);s.UONE=z;var A=T(-1);s.NEG_ONE=A;var H=e(-1,2147483647,!1);s.MAX_VALUE=H;var m=e(-1,-1,!0);s.MAX_UNSIGNED_VALUE=m;var c=e(0,-2147483648,!1);s.MIN_VALUE=c;var h=s.prototype;h.toInt=function(){return this.unsigned?this.low>>>0:this.low},h.toNumber=function(){return this.unsigned?(this.high>>>0)*b+(this.low>>>0):this.high*b+(this.low>>>0)},h.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(c)){var n=N(t),r=this.div(n),g=r.mul(n).sub(this);return r.toString(t)+g.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var f=N(x(t,6),this.unsigned),u=this,w="";;){var L=u.div(f),F=u.sub(L.mul(f)).toInt()>>>0,o=F.toString(t);if(u=L,u.isZero())return o+w;for(;o.length<6;)o="0"+o;w=""+o+w}},h.getHighBits=function(){return this.high},h.getHighBitsUnsigned=function(){return this.high>>>0},h.getLowBits=function(){return this.low},h.getLowBitsUnsigned=function(){return this.low>>>0},h.getNumBitsAbs=function(){if(this.isNegative())return this.eq(c)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,n=31;n>0&&!(t&1<<n);n--);return this.high!=0?n+33:n+1},h.isZero=function(){return this.high===0&&this.low===0},h.eqz=h.isZero,h.isNegative=function(){return!this.unsigned&&this.high<0},h.isPositive=function(){return this.unsigned||this.high>=0},h.isOdd=function(){return(this.low&1)===1},h.isEven=function(){return(this.low&1)===0},h.equals=function(t){return l(t)||(t=d(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low},h.eq=h.equals,h.notEquals=function(t){return!this.eq(t)},h.neq=h.notEquals,h.ne=h.notEquals,h.lessThan=function(t){return this.comp(t)<0},h.lt=h.lessThan,h.lessThanOrEqual=function(t){return this.comp(t)<=0},h.lte=h.lessThanOrEqual,h.le=h.lessThanOrEqual,h.greaterThan=function(t){return this.comp(t)>0},h.gt=h.greaterThan,h.greaterThanOrEqual=function(t){return this.comp(t)>=0},h.gte=h.greaterThanOrEqual,h.ge=h.greaterThanOrEqual,h.compare=function(t){if(l(t)||(t=d(t)),this.eq(t))return 0;var n=this.isNegative(),r=t.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},h.comp=h.compare,h.negate=function(){return!this.unsigned&&this.eq(c)?c:this.not().add(y)},h.neg=h.negate,h.add=function(t){l(t)||(t=d(t));var n=this.high>>>16,r=this.high&65535,g=this.low>>>16,f=this.low&65535,u=t.high>>>16,w=t.high&65535,L=t.low>>>16,F=t.low&65535,o=0,v=0,a=0,E=0;return E+=f+F,a+=E>>>16,E&=65535,a+=g+L,v+=a>>>16,a&=65535,v+=r+w,o+=v>>>16,v&=65535,o+=n+u,o&=65535,e(a<<16|E,o<<16|v,this.unsigned)},h.subtract=function(t){return l(t)||(t=d(t)),this.add(t.neg())},h.sub=h.subtract,h.multiply=function(t){if(this.isZero())return this;if(l(t)||(t=d(t)),_){var n=_.mul(this.low,this.high,t.low,t.high);return e(n,_.get_high(),this.unsigned)}if(t.isZero())return this.unsigned?q:O;if(this.eq(c))return t.isOdd()?c:O;if(t.eq(c))return this.isOdd()?c:O;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(D)&&t.lt(D))return N(this.toNumber()*t.toNumber(),this.unsigned);var r=this.high>>>16,g=this.high&65535,f=this.low>>>16,u=this.low&65535,w=t.high>>>16,L=t.high&65535,F=t.low>>>16,o=t.low&65535,v=0,a=0,E=0,I=0;return I+=u*o,E+=I>>>16,I&=65535,E+=f*o,a+=E>>>16,E&=65535,E+=u*F,a+=E>>>16,E&=65535,a+=g*o,v+=a>>>16,a&=65535,a+=f*F,v+=a>>>16,a&=65535,a+=u*L,v+=a>>>16,a&=65535,v+=r*o+g*F+f*L+u*w,v&=65535,e(E<<16|I,v<<16|a,this.unsigned)},h.mul=h.multiply,h.divide=function(t){if(l(t)||(t=d(t)),t.isZero())throw Error("division by zero");if(_){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var n=(this.unsigned?_.div_u:_.div_s)(this.low,this.high,t.low,t.high);return e(n,_.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?q:O;var r,g,f;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return q;if(t.gt(this.shru(1)))return z;f=q}else{if(this.eq(c)){if(t.eq(y)||t.eq(A))return c;if(t.eq(c))return y;var u=this.shr(1);return r=u.div(t).shl(1),r.eq(O)?t.isNegative()?y:A:(g=this.sub(t.mul(r)),f=r.add(g.div(t)),f)}else if(t.eq(c))return this.unsigned?q:O;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();f=O}for(g=this;g.gte(t);){r=Math.max(1,Math.floor(g.toNumber()/t.toNumber()));for(var w=Math.ceil(Math.log(r)/Math.LN2),L=w<=48?1:x(2,w-48),F=N(r),o=F.mul(t);o.isNegative()||o.gt(g);)r-=L,F=N(r,this.unsigned),o=F.mul(t);F.isZero()&&(F=y),f=f.add(F),g=g.sub(o)}return f},h.div=h.divide,h.modulo=function(t){if(l(t)||(t=d(t)),_){var n=(this.unsigned?_.rem_u:_.rem_s)(this.low,this.high,t.low,t.high);return e(n,_.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))},h.mod=h.modulo,h.rem=h.modulo,h.not=function(){return e(~this.low,~this.high,this.unsigned)},h.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},h.clz=h.countLeadingZeros,h.countTrailingZeros=function(){return this.low?M(this.low):M(this.high)+32},h.ctz=h.countTrailingZeros,h.and=function(t){return l(t)||(t=d(t)),e(this.low&t.low,this.high&t.high,this.unsigned)},h.or=function(t){return l(t)||(t=d(t)),e(this.low|t.low,this.high|t.high,this.unsigned)},h.xor=function(t){return l(t)||(t=d(t)),e(this.low^t.low,this.high^t.high,this.unsigned)},h.shiftLeft=function(t){return l(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?e(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):e(0,this.low<<t-32,this.unsigned)},h.shl=h.shiftLeft,h.shiftRight=function(t){return l(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?e(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):e(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},h.shr=h.shiftRight,h.shiftRightUnsigned=function(t){return l(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?e(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):t===32?e(this.high,0,this.unsigned):e(this.high>>>t-32,0,this.unsigned)},h.shru=h.shiftRightUnsigned,h.shr_u=h.shiftRightUnsigned,h.rotateLeft=function(t){var n;return l(t)&&(t=t.toInt()),(t&=63)===0?this:t===32?e(this.high,this.low,this.unsigned):t<32?(n=32-t,e(this.low<<t|this.high>>>n,this.high<<t|this.low>>>n,this.unsigned)):(t-=32,n=32-t,e(this.high<<t|this.low>>>n,this.low<<t|this.high>>>n,this.unsigned))},h.rotl=h.rotateLeft,h.rotateRight=function(t){var n;return l(t)&&(t=t.toInt()),(t&=63)===0?this:t===32?e(this.high,this.low,this.unsigned):t<32?(n=32-t,e(this.high<<n|this.low>>>t,this.low<<n|this.high>>>t,this.unsigned)):(t-=32,n=32-t,e(this.low<<n|this.high>>>t,this.high<<n|this.low>>>t,this.unsigned))},h.rotr=h.rotateRight,h.toSigned=function(){return this.unsigned?e(this.low,this.high,!1):this},h.toUnsigned=function(){return this.unsigned?this:e(this.low,this.high,!0)},h.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},h.toBytesLE=function(){var t=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]},h.toBytesBE=function(){var t=this.high,n=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,n>>>24,n>>>16&255,n>>>8&255,n&255]},s.fromBytes=function(t,n,r){return r?s.fromBytesLE(t,n):s.fromBytesBE(t,n)},s.fromBytesLE=function(t,n){return new s(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,n)},s.fromBytesBE=function(t,n){return new s(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],n)};var p=s;return U.default=p,"default"in U?U.default:U}({});j.exports=G})(C);var J=C.exports;const Y=k(J);export{Y as L,J as u};
