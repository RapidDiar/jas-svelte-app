import{S as s,i as a,s as t,k as e,e as r,t as o,U as l,d as n,n as c,c as i,a as u,g as h,b as f,D as p,f as d,E as m,X as g,J as b,Y as v,h as x,F as y,W as E,G as w,L as _,a5 as k}from"../chunks/vendor-46274d12.js";import{a as I}from"../chunks/axiosApi-6a96a9e8.js";import{g as D}from"../chunks/navigation-43bc8d96.js";import{a as S}from"../chunks/store-185a41c5.js";import{t as V}from"../chunks/translations-4b00f8c5.js";import{d as j,t as P}from"../chunks/i18n-94025d06.js";import"../chunks/singletons-12a22614.js";function O(s){let a,t,w,_,k,I,D,S,V,j,P,O,z,T,A,N,U,L,F,H,B,G,J,M,R,W,X,Y,q,C,K,Q,Z,$,ss,as,ts,es,rs,os,ls,ns,cs,is,us,hs,fs=s[1]("auth.signin")+"",ps=s[1]("auth.text_username")+"",ds=s[1]("auth.text_password")+"",ms=s[1]("auth.button_signin")+"",gs=s[1]("auth_text.hello")+"",bs=s[1]("auth_text.hello_text")+"",vs=s[1]("auth.button_register")+"";return{c(){a=e(),t=r("div"),w=r("div"),_=r("div"),k=r("div"),I=r("div"),D=r("form"),S=r("h1"),V=o(fs),j=e(),P=r("p"),O=o(ps),z=e(),T=r("div"),A=r("span"),N=r("i"),U=e(),L=r("input"),H=e(),B=r("p"),G=o(ds),J=e(),M=r("div"),R=r("span"),W=r("i"),X=e(),Y=r("input"),C=e(),K=r("button"),Q=o(ms),Z=e(),$=r("div"),ss=r("div"),as=r("div"),ts=r("h2"),es=o(gs),rs=e(),os=r("p"),ls=o(bs),ns=e(),cs=r("a"),is=o(vs),this.h()},l(s){l('[data-svelte="svelte-u0t8lz"]',document.head).forEach(n),a=c(s),t=i(s,"DIV",{class:!0});var e=u(t);w=i(e,"DIV",{class:!0});var r=u(w);_=i(r,"DIV",{class:!0});var o=u(_);k=i(o,"DIV",{class:!0});var f=u(k);I=i(f,"DIV",{class:!0});var p=u(I);D=i(p,"FORM",{});var d=u(D);S=i(d,"H1",{class:!0,style:!0});var m=u(S);V=h(m,fs),m.forEach(n),j=c(d),P=i(d,"P",{class:!0,style:!0});var g=u(P);O=h(g,ps),g.forEach(n),z=c(d),T=i(d,"DIV",{class:!0});var b=u(T);A=i(b,"SPAN",{class:!0});var v=u(A);N=i(v,"I",{class:!0}),u(N).forEach(n),v.forEach(n),U=c(b),L=i(b,"INPUT",{type:!0,class:!0,placeholder:!0,style:!0}),b.forEach(n),H=c(d),B=i(d,"P",{class:!0});var x=u(B);G=h(x,ds),x.forEach(n),J=c(d),M=i(d,"DIV",{class:!0});var y=u(M);R=i(y,"SPAN",{class:!0});var E=u(R);W=i(E,"I",{class:!0}),u(W).forEach(n),E.forEach(n),X=c(y),Y=i(y,"INPUT",{type:!0,placeholder:!0,class:!0,style:!0}),y.forEach(n),C=c(d),K=i(d,"BUTTON",{type:!0,class:!0,style:!0});var F=u(K);Q=h(F,ms),F.forEach(n),d.forEach(n),p.forEach(n),f.forEach(n),o.forEach(n),Z=c(r),$=i(r,"DIV",{class:!0,style:!0});var q=u($);ss=i(q,"DIV",{class:!0});var us=u(ss);as=i(us,"DIV",{class:!0});var hs=u(as);ts=i(hs,"H2",{style:!0});var xs=u(ts);es=h(xs,gs),xs.forEach(n),rs=c(hs),os=i(hs,"P",{});var ys=u(os);ls=h(ys,bs),ys.forEach(n),ns=c(hs),cs=i(hs,"A",{href:!0,class:!0,style:!0});var Es=u(cs);is=h(Es,vs),Es.forEach(n),hs.forEach(n),us.forEach(n),q.forEach(n),r.forEach(n),e.forEach(n),this.h()},h(){document.title="Auth",f(S,"class","mb-5"),p(S,"font-family","'Open Sans'"),p(S,"font-size","36px"),p(S,"font-weight","meduim"),f(P,"class","text-start mb-2"),p(P,"font-family","'Open Sans'"),p(P,"font-size","20px"),p(P,"font-weight","meduim"),f(N,"class","fas fa-user-alt"),f(A,"class","input-group-text border-1 border-end-0 bg-light"),f(L,"type","text"),f(L,"class","form-control border-start-0"),f(L,"placeholder",F=s[1]("auth.text_username")),p(L,"font-family","'Open Sans'"),p(L,"font-size","20px"),p(L,"font-weight","meduim"),f(T,"class","input-group mb-4 input-group-lg"),f(B,"class","text-start mb-2"),f(W,"class","fas fa-key"),f(R,"class","input-group-text border-1 border-end-0 bg-light"),f(Y,"type","password"),f(Y,"placeholder",q=s[1]("auth.text_password")),f(Y,"class","form-control border-start-0"),p(Y,"font-family","'Open Sans'"),p(Y,"font-size","20px"),p(Y,"font-weight","meduim"),f(M,"class","input-group mb-4 input-group-lg"),f(K,"type","submit"),f(K,"class","btn btn-primary btn-rounded btn-lg btn-block mb-4"),p(K,"background-color","yellow"),p(K,"color","black"),f(I,"class","col-6 "),f(k,"class","row justify-content-center align-items-center registerPage svelte-fwirv8"),f(_,"class","col-8 text-center "),p(ts,"font-family","'Open Sans'"),p(ts,"font-size","36px"),p(ts,"font-weight","meduim"),f(cs,"href","/register"),f(cs,"class","btn btn-outline-primary btn-rounded btn-lg btn-block mb-4"),p(cs,"border-color","grey"),p(cs,"color","black"),f(as,"class","col-6 "),f(ss,"class","row justify-content-center align-items-center registerPage svelte-fwirv8"),f($,"class","col"),p($,"background-color","yellow"),f(w,"class","row"),f(t,"class","container-fluid ")},m(e,r){d(e,a,r),d(e,t,r),m(t,w),m(w,_),m(_,k),m(k,I),m(I,D),m(D,S),m(S,V),m(D,j),m(D,P),m(P,O),m(D,z),m(D,T),m(T,A),m(A,N),m(T,U),m(T,L),g(L,s[0].username),m(D,H),m(D,B),m(B,G),m(D,J),m(D,M),m(M,R),m(R,W),m(M,X),m(M,Y),g(Y,s[0].password),m(D,C),m(D,K),m(K,Q),m(w,Z),m(w,$),m($,ss),m(ss,as),m(as,ts),m(ts,es),m(as,rs),m(as,os),m(os,ls),m(as,ns),m(as,cs),m(cs,is),us||(hs=[b(L,"input",s[3]),b(Y,"input",s[4]),b(D,"submit",v(s[2]))],us=!0)},p(s,[a]){2&a&&fs!==(fs=s[1]("auth.signin")+"")&&x(V,fs),2&a&&ps!==(ps=s[1]("auth.text_username")+"")&&x(O,ps),2&a&&F!==(F=s[1]("auth.text_username"))&&f(L,"placeholder",F),1&a&&L.value!==s[0].username&&g(L,s[0].username),2&a&&ds!==(ds=s[1]("auth.text_password")+"")&&x(G,ds),2&a&&q!==(q=s[1]("auth.text_password"))&&f(Y,"placeholder",q),1&a&&Y.value!==s[0].password&&g(Y,s[0].password),2&a&&ms!==(ms=s[1]("auth.button_signin")+"")&&x(Q,ms),2&a&&gs!==(gs=s[1]("auth_text.hello")+"")&&x(es,gs),2&a&&bs!==(bs=s[1]("auth_text.hello_text")+"")&&x(ls,bs),2&a&&vs!==(vs=s[1]("auth.button_register")+"")&&x(is,vs)},i:y,o:y,d(s){s&&n(a),s&&n(t),us=!1,E(hs)}}}function z(s,a,t){let e,r;w(s,S,(s=>t(8,e=s))),w(s,P,(s=>t(1,r=s))),e.isLogin&&D("/");let o={username:"",password:""},l="";return j.set(V),j.set(V),[o,r,()=>{console.log(o),I.post("/api/token/",o).then((s=>{_(S,e.error=!1,e),_(S,e.isLogin=!0,e),console.log(s),l=k(s.data.access),console.log(l.user_id),localStorage.setItem("userId",l.user_id),localStorage.setItem("accessToken",s.data.access),localStorage.setItem("refreshToken",s.data.refresh),D("/")}),(s=>{_(S,e.error=!0,e),console.log(s.response)}))},function(){o.username=this.value,t(0,o)},function(){o.password=this.value,t(0,o)}]}export default class extends s{constructor(s){super(),a(this,s,z,O,t,{})}}
