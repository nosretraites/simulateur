(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},TrOQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projection",function(){return n("uPRt")}])},VJsP:function(e,t,n){"use strict";var a=n("2GTP"),r=n("Y7ZC"),i=n("JB68"),o=n("sNwI"),u=n("NwJ3"),l=n("tEej"),c=n("IP1Z"),s=n("fNZA");r(r.S+r.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,d,p=i(e),f="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,h=void 0!==m,v=0,g=s(p);if(h&&(m=a(m,b>2?arguments[2]:void 0,2)),void 0==g||f==Array&&u(g))for(n=new f(t=l(p.length));t>v;v++)c(n,v,h?m(p[v],v):p[v]);else for(d=g.call(p),n=new f;!(r=d.next()).done;v++)c(n,v,h?o(d,m,[r.value,v],!0):r.value);return n.length=v,n}})},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";var a=n("p0XB"),r=n.n(a);var i=n("d04V"),o=n.n(i),u=n("yLu3"),l=n.n(u);function c(e){return function(e){if(r()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return c}))},uPRt:function(e,t,n){"use strict";n.r(t);var a=n("hfKm"),r=n.n(a),i=n("2Eek"),o=n.n(i),u=n("XoMD"),l=n.n(u),c=n("Jo+v"),s=n.n(c),d=n("4mXO"),p=n.n(d),f=n("pLtp"),b=n.n(f),m=n("vYYK"),h=n("dfwq"),v=n("q1tI"),g=n.n(v),y=n("FV1I"),O=n("KYPV"),S=(n("nOHt"),n("AmVM")),C=n("2MRG"),j=g.a.createElement;function w(e,t){var n=b()(e);if(p.a){var a=p()(e);t&&(a=a.filter((function(t){return s()(e,t).enumerable}))),n.push.apply(n,a)}return n}t.default=function(){var e=Object(v.useContext)(S.a).updateData,t=Object(v.useState)(!1),n=t[0],a=t[1],i=Object(v.useState)({carrieres:{SMIC:[1]},smic_brut:14e3}),u=i[0],c=i[1],d=Object(v.useState)(22),p=d[0],f=d[1],b=Object(v.useState)(1400),g=b[0],P=b[1],R=Object(v.useState)("SMIC"),k=R[0],x=R[1],A=Object(v.useState)([]),E=A[0],V=A[1],I=Object(v.useState)([]),M=I[0],T=I[1];Object(v.useEffect)((function(){Object(C.a)().then((function(e){return c(e)}))}),[]),Object(v.useEffect)((function(){var e=Array(p+1).fill(0);u.carrieres[k].forEach((function(t){e.push(t*g)}));var t=(e=[].concat(Object(h.a)(e),Object(h.a)(Array(98-e.length).fill(e[e.length-1])))).map((function(e,t){return{x:t,y:e}}));V([{id:k,data:t}]);var n=u.smic_brut/12;T(e.map((function(e){return e/n})))}),[k,u,g,p]),Object(v.useEffect)((function(){console.log(M)}),[M]);var B=Object(O.a)({initialValues:{naissance:1984,debut:p,salary:g,carriere:k,proportion:1},onSubmit:function(t){f(t.debut),P(t.salary),x(t.carriere),a(!0),Object(C.b)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(m.a)(e,t,n[t])})):l.a?o()(e,l()(n)):w(Object(n)).forEach((function(t){r()(e,t,s()(n,t))}))}return e}({age:0,modele:"Actuel"},t)).then((function(t){console.log(t),a(!1),e(t)}))}});return j("div",{style:{height:"80vh"}},j("form",{onSubmit:B.handleSubmit},j("div",null,j("label",{htmlFor:"naissance"},"Ann\xe9e de naissance"),j("input",{id:"naissance",name:"naissance",type:"number",min:"1930",max:"2020",step:"1",onChange:B.handleChange,value:B.values.naissance})),j("div",null,j("label",{htmlFor:"debut"},"\xc2ge de d\xe9but de carri\xe8re"),j("input",{id:"debut",name:"debut",type:"number",min:"12",max:"77",step:"1",onChange:B.handleChange,value:B.values.debut})),j("div",null,j("label",{htmlFor:"salary"},"Salaire brut actuel / mois"),j("input",{id:"salary",name:"salary",type:"number",onChange:B.handleChange,value:B.values.salary})),j("div",null,j("label",{htmlFor:"carriere"},"Base du salaire"),j("select",{name:"carriere",value:B.values.carriere,onChange:B.handleChange},j("option",{value:"SMIC"},"SMIC de base"),j("option",{value:"SMPT"},"Salaire moyen par t\xeate de base"),j("option",{value:"COR1"},"Cas type n\xb01 du COR (cadre \xe0 carri\xe8re sans interruption)"),j("option",{value:"COR2"},"Cas type n\xb02 du COR (non cadre \xe0 carri\xe8re sans interruption)"),j("option",{value:"COR3"},"Cas type n\xb03 du COR (non cadre \xe0 carri\xe8re interrompue par du ch\xf4mage )"),j("option",{value:"COR4"},"Cas type n\xb04 du COR (non cadre avec une interruption de carri\xe8re pour enfant)"),j("option",{value:"PlafondSS"},"PlafondSS"))),j("div",null,j("label",{htmlFor:"proportion"},"Proportion de la base"),j("input",{id:"proportion",name:"proportion",type:"number",min:"0",step:"1",onChange:B.handleChange,value:B.values.proportion})),j("button",{type:"submit",disabled:n},"Submit"),n&&j("span",null,"loading")),j(y.a,{data:E,margin:{top:50,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"\xc2ge",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Salaire",legendOffset:-40,legendPosition:"middle"},colors:{scheme:"nivo"},pointSize:10,pointColor:{theme:"background"},pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabel:"y",pointLabelYOffset:-12,useMesh:!0,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]}))}}},[["TrOQ",1,2,9,8,6,0,24,23,25,26,27,28]]]);