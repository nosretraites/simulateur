(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{RNiq:function(e,a,n){"use strict";n.r(a);var r=n("vYYK"),s=n("Wa2I"),t=n.n(s),i=n("6BQ9"),l=n.n(i),u=n("q1tI"),c=n.n(u),o=n("KYPV"),d=(n("nOHt"),n("VphZ")),p=n("EUZL"),m=n.n(p),v=(n("0fCG"),n("AmVM")),b=n("2MRG"),f=c.a.createElement,h=[{id:"SMIC",label:"SMIC"},{id:"COR1",label:"Cadre \xe0 carri\xe8re sans interruption"},{id:"COR2",label:"Non cadre \xe0 carri\xe8re sans interruption"},{id:"COR3",label:"Non cadre \xe0 carri\xe8re interrompue par du ch\xf4mage"},{id:"COR4",label:"Non cadre avec une interruption de carri\xe8re pour enfant"}];a.default=function(){Object(u.useContext)(v.a).updateData;var e=Object(u.useState)(!1),a=e[0],n=e[1],s=Object(u.useState)(22),i=s[0],c=(s[1],Object(u.useState)("COR2")),p=c[0],N=(c[1],Object(u.useState)(!1)),g=N[0],C=N[1],w=Object(u.useState)(!1),O=w[0],_=w[1],R=Object(o.a)({initialValues:{naissance:1984,debut:i,carriere:p,proportion:1},onSubmit:function(e){n(!0),C("\ud83d\udca3 tic. tac. tic. tac. (10 secondes environ pour le moment \ud83d\ude01)"),Object(b.b)(e).then((function(e){var a,n,r,s,i=m.a.read(new Uint8Array(e),{type:"array"}),u=m.a.utils.sheet_to_csv(i.Sheets.fullset);d.a(u).forEach((function(e){var i=l()(e.age);(1960==l()(e.anaiss)&&"actuel"==e.scenario&&(n=i,a=Math.round(100*t()(e.TR_brut_neut))),i==n&&"reforme"==e.scenario&&(r=Math.round(100*t()(e.TR_brut_neut))),r&&!s&&"reforme"==e.scenario)&&(Math.round(100*t()(e.TR_brut_neut))>=a&&(s=i-n))})),_({past:a,current:r,delay:s,age:n})})).finally((function(){n(!1),C(!1)}))}});return f("div",null,f("header",null,f("h1",null,"Acc\xe9dez enfin \xe0 l'impact de la r\xe9forme sur votre retraite",f("img",{src:"logo_collectif.png"}))),f("form",{onSubmit:R.handleSubmit},f("div",{className:"inputs row"},f("label",null,"Ann\xe9e de naissance",f("input",{id:"naissance",name:"naissance",type:"number",min:"1930",max:"2020",step:"1",onChange:R.handleChange,value:R.values.naissance})),f("label",null,"\xc2ge de d\xe9but de carri\xe8re",f("input",{id:"debut",name:"debut",type:"number",min:"12",max:"77",step:"1",onChange:R.handleChange,value:R.values.debut}))),f("div",{className:"row"},f("label",null,"Carri\xe8re"),f("div",{className:"carrieres"},h.map((function(e){var a;return f("div",{className:"carriere",key:e.id},f("label",null,f("input",(a={type:"radio",onChange:R.handleChange,value:R.values.carriere,name:"carriere"},Object(r.a)(a,"value",e.id),Object(r.a)(a,"checked",R.values.carriere===e.id),a)),e.label))})))),f("div",{className:"row submit"},f("button",{type:"submit",disabled:a},"Acc\xe9der au carnage"),a&&g&&f("div",null,g)),O&&f("div",null,f("div",{className:"row results"},f("div",{className:"result"},f("span",null,"La personne avec la m\xeame carri\xe8re"),f("span",null,"n\xe9 en ",f("span",{className:"semi important"},"1960")),f("span",null,"peut partir \xe0 la retraite \xe0 ",O.age," ans"),f("div",{className:"focus"},"Sa pension repr\xe9sente",f("span",{className:"important"},O.past," %"),"de son dernier salaire")),f("div",{className:"result"},f("span",null,"Vous"),f("span",null,"n\xe9 en ",f("span",{className:"semi important"},R.values.naissance)),f("span",null,"en partant \xe0 la retraite \xe0 ",O.age," ans"),f("div",{className:"focus"},"Votre pension repr\xe9sente",f("span",{className:"important"},O.current," %"),"de votre dernier salaire")),f("div",{className:"result"},f("span",null,"Pour conserver"),f("span",null,"une pension"),f("span",null,"suffisante"),f("span",null,"pour vivre"),f("div",{className:"focus"},"vous devez partir",f("span",{className:"important"},O.delay," ans"),"plus tard."))),f("div",{className:"row"},"Vous souhaitez nous contacter\xa0? Nous sommes joingnable par email \xe0 l'adresse suivante ",f("a",{href:"mailto:contact@reformedesretraites.fr?subject=Super%20simulateur%20!"},"contact@reformedesretraites.fr"),"."))))}},vlRD:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,7,6,4,0,3,5,8,11,12,14,15]]]);