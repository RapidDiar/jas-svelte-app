import{S as t,i as s,s as o,j as e,m as n,o as a,x as r,u as l,v as c,e as i,c as f,a as h,d as u,b as g,f as d,w as m,K as p,A as $,r as j}from"../../chunks/vendor-46274d12.js";import{a as k}from"../../chunks/axiosApi-b32e64fe.js";import{C as b}from"../../chunks/CompCard-3db87e7b.js";import"../../chunks/navigation-43bc8d96.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/nftStore-d7d558d6.js";function v(t,s,o){const e=t.slice();return e[3]=s[o],e}function w(t){let s,o;return s=new b({props:{data:t[3]}}),{c(){e(s.$$.fragment)},l(t){n(s.$$.fragment,t)},m(t,e){a(s,t,e),o=!0},p(t,o){const e={};1&o&&(e.data=t[3]),s.$set(e)},i(t){o||(r(s.$$.fragment,t),o=!0)},o(t){l(s.$$.fragment,t),o=!1},d(t){c(s,t)}}}function x(t){let s,o,e=t[0],n=[];for(let r=0;r<e.length;r+=1)n[r]=w(v(t,e,r));const a=t=>l(n[t],1,1,(()=>{n[t]=null}));return{c(){s=i("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){s=f(t,"DIV",{class:!0});var o=h(s);for(let s=0;s<n.length;s+=1)n[s].l(o);o.forEach(u),this.h()},h(){g(s,"class","row row-cols-1 row-cols-md-3 g-4")},m(t,e){d(t,s,e);for(let o=0;o<n.length;o+=1)n[o].m(s,null);o=!0},p(t,[o]){if(1&o){let l;for(e=t[0],l=0;l<e.length;l+=1){const a=v(t,e,l);n[l]?(n[l].p(a,o),r(n[l],1)):(n[l]=w(a),n[l].c(),r(n[l],1),n[l].m(s,null))}for(j(),l=e.length;l<n.length;l+=1)a(l);m()}},i(t){if(!o){for(let t=0;t<e.length;t+=1)r(n[t]);o=!0}},o(t){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)l(n[s]);o=!1},d(t){t&&u(s),p(n,t)}}}function A(t,s,o){let e=[];return $((()=>{k.defaults.headers.Authorization="JWT "+localStorage.getItem("accessToken"),k.get("/account/api/NFT/").then((t=>{console.log(t.data),o(0,e=[...t.data]),console.log(e)}),(t=>{console.log(t.response)}))})),[e]}export default class extends t{constructor(t){super(),s(this,t,A,x,o,{})}}
