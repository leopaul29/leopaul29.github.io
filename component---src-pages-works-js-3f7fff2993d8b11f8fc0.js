(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2RVH":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),i=t("Bl7J"),c=t("vrFN"),m=(t("5eM1"),function(e){var a=e.startdate,t=e.title,n=e.timelineclass,l=e.imageSource;return r.a.createElement("div",{className:"timeline-item "+n},r.a.createElement("div",{className:"timeline-marker "+n}),r.a.createElement("div",{className:"timeline-marker "+n+" is-image is-48x48"},r.a.createElement("img",{src:l,alt:"placeholders"})),r.a.createElement("div",{className:"timeline-content"},r.a.createElement("p",{className:"heading"},a),r.a.createElement("p",null,t)))}),s=t("IP2g"),o=t("wHSu"),u=r.a.createElement("span",{class:"icon pr-2 is-large"},r.a.createElement(s.a,{icon:o.e,size:"lg"})),E=r.a.createElement("span",{class:"icon pr-2 is-large"},r.a.createElement(s.a,{icon:o.d,size:"lg"})),d=r.a.createElement("span",{class:"icon pr-2 is-large"},r.a.createElement(s.a,{icon:o.c,size:"lg"})),p=r.a.createElement("span",{class:"icon pr-2 is-large "},r.a.createElement(s.a,{icon:o.b,size:"lg"})),g=function(){var e=Object(l.useStaticQuery)("3653894751");function a(a){var t=e.allMarkdownRemark.nodes[a].frontmatter,n=t.startdate,i=t.contract,c=t.title,s=t.company,o=t.timelineclass,u=t.picture,E=i+" "+c+" at "+s;if(""===s&&(E=c),null!==u){var d=u.childImageSharp.fixed;return r.a.createElement(l.Link,{to:"#work"+a},r.a.createElement(m,{startdate:n,title:E,timelineclass:o,imageSource:d.src}))}return r.a.createElement(l.Link,{to:"#work"+a},r.a.createElement(m,{startdate:n,title:E,timelineclass:o,imageSource:"https://bulma.io/images/placeholders/48x48.png"}))}function t(e,a,t){return r.a.createElement("header",{className:"timeline-header"},r.a.createElement("span",{className:"tag is-medium "+a},t," ",e))}return r.a.createElement("div",{className:"timeline"},t("Today","is-primary"),a(0),t("2020","is-primary",p),a(1),t("2019","is-primary",d),a(2),a(3),t("2018","is-primary"),a(4),t("2017","is-primary",u),a(5),t("2016","is-warning"),a(6),t("2015","is-warning"),a(7),t("University","is-warning",E))};a.default=function(){var e=Object(l.useStaticQuery)("2662956355"),a=r.a.createElement("span",{class:"icon mr-3 is-large "},r.a.createElement(s.a,{icon:o.a,size:"lg"}));return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Works"}),r.a.createElement("div",{className:"columns"},r.a.createElement("aside",{className:"column is-4 is-narrow-mobile is-fullheight section is-hidden-mobile sidebar"},r.a.createElement("div",{className:"mt-5 has-text-centered"},r.a.createElement(l.Link,{to:"/"},r.a.createElement("button",{className:"button is-info is-rounded"},a,"Go back to the homepage"))),r.a.createElement("p",{className:"menu-label"},"Works"),r.a.createElement(g,null)),r.a.createElement("div",{className:"column content"},e.allMarkdownRemark.nodes.map((function(e,a){return function(e,a){var t=e.frontmatter,n=t.id,l=t.title,i=t.company,c=t.startdate,m=t.enddate,s=t.place;return r.a.createElement("section",{className:"section",key:n},r.a.createElement("h1",{align:"center",id:"work"+a},l," - ",i),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"calendar"},"📆")," ",c," - ",m),r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"globe"},"🌍")," ",s),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.html}}))}(e,a)})))))}},"5eM1":function(e,a,t){},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz");function i(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.Link,{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false",to:"/"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(l.Link,{className:"navbar-item",to:"/works"},"Works"),r.a.createElement("a",{className:"navbar-item",href:"https://lpm.hashnode.dev/",target:"_blank",rel:"noreferrer"},"Blog"),r.a.createElement("a",{className:"navbar-item",href:"mailto:leopaulmartin@hotmail.fr"},"Contact"))))}var c=t("IP2g");function m(){var e="https://github.com/leopaul29";return r.a.createElement("footer",{className:" footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("div",null,r.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"icon pr-2 is-large"},r.a.createElement(c.a,{icon:["fab","github"],size:"2x"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/l%C3%A9o-paul-martin-882158a9/",target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"icon pr-2 is-large"},r.a.createElement(c.a,{icon:["fab","linkedin"],size:"2x"}))),r.a.createElement("a",{href:"mailto:leopaulmartin@hotmail.fr"},r.a.createElement("span",{className:"icon pr-2 is-large"},r.a.createElement(c.a,{icon:["fas","at"],size:"2x"})))),r.a.createElement("div",{className:"my-4"},r.a.createElement("p",null,r.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer"},"© ",(new Date).getFullYear(),", Design and Built by Léo-Paul MARTIN"))),r.a.createElement("div",{className:"is-flex is-align-items-center is-justify-content-center"},r.a.createElement("a",{href:"https://www.gatsbyjs.com",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:"https://www.gatsbyjs.com/static/2c9d8be34028a568f89f36ef143f3e17/a3df1/local-futura.jpg",alt:"Made with Bulma",width:"128",height:"24"})),r.a.createElement("a",{href:"https://bulma.io",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:"https://bulma.io/images/made-with-bulma.png",alt:"Made with Bulma",width:"128",height:"24"})))))}a.a=function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(i,null),r.a.createElement("main",null,a),r.a.createElement(m,null)))}}}]);
//# sourceMappingURL=component---src-pages-works-js-3f7fff2993d8b11f8fc0.js.map