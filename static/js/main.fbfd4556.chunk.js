(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{380:function(e,a,t){e.exports=t(868)},385:function(e,a,t){},386:function(e,a,t){},868:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(25),l=t.n(i),o=(t(385),t(59)),c=t.n(o),s=t(105),u=t(41),d=(t(386),t(877)),m=t(168),h=t.n(m),p=t(869),g=t(872),f=t(870),y=t(878),E=t(359),v=function(e){var a=e.filterValues,t=(e.title,e.height),i=void 0===t?500:t,l=e.rawData,o=e.isLoading,d=Object(n.useState)({xAxisData:[],yAxisData:[]}),m=Object(u.a)(d,2),v=m[0],b=m[1],x=function(e){return"Deaths"===e?"#000000":"Recovered"===e?"#13c2c2":"Active"===e?"#fa8c16":"Confirmed"===e?"#fadb14":"Extrapolation"===e?"#bfbfbf":"Confirmed with social distancing"===e?"#52c41a":void 0},w=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,r,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=2;break}return e.abrupt("return");case 2:console.log("fetching data"),t=function(e){return console.log("formatting xData"),e.xTimestamps.map((function(e){return E.DateTime.fromISO(e).toLocaleString({month:"short",day:"numeric"})}))},console.log("filterValues: ",a),n=function(e,t){var n=[];for(var r in e.ySeries)n.push({name:r,series:e.ySeries[r]});return n.push({name:"Extrapolation",series:[],markArea:[[{name:"Extrapolation",xAxis:t[t.length-a.extrapolatedDays]},{xAxis:t[t.length-1]}]]}),console.log("yAxisData: ",n),n},r=l,console.log("data: ",r),console.log("formatXData"),i=t(r),console.log("formatYData"),o=n(r,i),s={xAxisData:i,yAxisData:o},console.log("axisData: ",s),b(s);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){w()}),[l]);var C={xAxis:{type:"category",data:v.xAxisData},yAxis:{type:a.isLogarithmic?"log":"value"},legend:{data:v.yAxisData.map((function(e){return e.name})).filter((function(e){return"timestamp"!==e&&"Extrapolation"!==e})),selected:{Active:!1,Deaths:!1,Recovered:!1}},series:v.yAxisData.map((function(e){var a=e.series,t=e.markArea,n=e.name;return{name:n,itemStyle:{color:x(n)},lineStyle:{width:3,color:x(n)},data:a,markArea:{data:t},type:"line",smooth:!0}})),tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},dataZoom:[{type:"inside"},{handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}]},S=r.a.createElement(n.Fragment,null,r.a.createElement("p",null,r.a.createElement("b",null,"Estimated Confirmed:")),"is calculated by taking the deaths as a base value and calculating the",r.a.createElement("br",null),"number of infected by using a deathrate of 0.5% or 4.0%. This shows a more",r.a.createElement("br",null),"realistic number of infections, since the number of deaths is the most",r.a.createElement("br",null),"reliable number. Click on the metric on top of the chart to see the values.",r.a.createElement("br",null),r.a.createElement("br",null),"Inspiration for this dashboard:"," ",r.a.createElement("a",{href:"https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca",target:"_blank",rel:"noopener noreferrer"},"Article"));return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{spinning:o,size:"large"},r.a.createElement(g.a,{hoverable:!0,title:"Infections and deaths of all countries",size:"small",extra:r.a.createElement(f.a,{placement:"leftTop",title:"Metrics Help",content:S,trigger:"hover"},r.a.createElement(y.a,{size:"small"},"Metrics Help"))},r.a.createElement(h.a,{option:C,notMerge:!0,lazyUpdate:!0,style:{height:i,width:"100%"}}))))},b=t(873),x=t(113),w=b.a.Title,C=function(e){var a=e.rawData,t=e.isLoading,i=e.filterValues,l={width:"100%",marginBottom:".5em"},o={marginBottom:0},c=Object(n.useState)({deaths:{curr:0,extr:0},confirmed:{curr:0,extr:0},recovered:{curr:0,extr:0},active:{curr:0,extr:0}}),s=Object(u.a)(c,2),d=s[0],m=s[1];return Object(n.useEffect)((function(){a&&function(){var e=a.ySeries,t=e.Deaths.length,n={deaths:{curr:e.Deaths[t-i.extrapolatedDays].toLocaleString(),extr:e.Deaths[t-1].toLocaleString()},confirmed:{curr:e.Confirmed[t-i.extrapolatedDays].toLocaleString(),extr:e.Confirmed[t-1].toLocaleString()},recovered:{curr:e.Recovered[t-i.extrapolatedDays].toLocaleString()},active:{curr:e.Active[t-i.extrapolatedDays].toLocaleString()}};m(n)}()}),[a]),r.a.createElement(n.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(g.a,{title:"Total Infections",hoverable:!0,size:"small",style:l,loading:t},r.a.createElement("p",{style:o},"Current:"),r.a.createElement(w,{type:"danger",level:3,style:o},d.confirmed.curr),r.a.createElement("p",{style:o},"With extrapolation:"),r.a.createElement(w,{type:"danger",level:3,style:o},d.confirmed.extr))),r.a.createElement(x.a,null,r.a.createElement(g.a,{title:"Total Deaths",hoverable:!0,size:"small",style:l,loading:t},r.a.createElement("p",{style:o},"Current:"),r.a.createElement(w,{type:"danger",level:3,style:o},d.deaths.curr),r.a.createElement("p",{style:o},"With extrapolation:"),r.a.createElement(w,{type:"danger",level:3,style:o},d.deaths.extr))),r.a.createElement(x.a,null,r.a.createElement(g.a,{title:"Active",hoverable:!0,size:"small",style:l,loading:t},r.a.createElement(w,{type:"primary",level:3,style:o},d.active.curr))),r.a.createElement(x.a,null,r.a.createElement(g.a,{title:"Recovered",hoverable:!0,size:"small",style:l,loading:t},r.a.createElement(w,{type:"primary",level:3,style:o},d.recovered.curr))))},S=t(87),D=t(874),A=t(176),O=t.n(A),j=t(179),k=t.n(j),z=D.a.Option;t(792);var _=function(e){var a=e.filterValues,t=e.setFilterValues,i=e.height,l=void 0===i?700:i,o=Object(n.useState)("Confirmed"),d=Object(u.a)(o,2),m=d[0],f=d[1],y=Object(n.useState)([]),E=Object(u.a)(y,2),v=E[0],b=E[1],x=Object(n.useState)(10),w=Object(u.a)(x,2),C=w[0],A=w[1],j=Object(n.useState)(!1),_=Object(u.a)(j,2),L=_[0],M=_[1],B={tooltip:{show:!0},visualMap:{left:"right",min:1,max:C,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},text:["High","Low"],calculable:!0},series:[{name:m,type:"map",emphasis:{label:{show:!0}},map:"world",roam:!0,nameProperty:"NAME",data:v.map((function(e){var a=k.a.snakeCase(m);return"extrapolated_without_social_distancing_confirmed"===a?a="extrapolated_without_social_distancing":"extrapolated_social_distancing_confirmed"===a&&(a="extrapolated_social_distancing"),{name:"US"===e.country?"United States":e.country,value:e[a]}}))}]},T=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,O.a.get("http://3.127.148.241:8080/by_country",{params:{extrapolation_days:a.extrapolatedDays,metric:m.toLowerCase()}});case 4:t=e.sent,n=t.data,console.log("data: ",n),b(n),M(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Err fetching data by_country: ",e.t0.message),M(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(v.length){var e=k.a.snakeCase(m);console.log("key: ",e),"extrapolated_without_social_distancing_confirmed"===e?e="extrapolated_without_social_distancing":"extrapolated_social_distancing_confirmed"===e&&(e="extrapolated_social_distancing");var a=k.a.maxBy(v,e)[e];console.log("max: ",a),A(a)}}),[m,v]),Object(n.useEffect)((function(){var e=setTimeout((function(){T()}),1e3);return function(){return clearTimeout(e)}}),[a.extrapolatedDays]);var V={click:function(e){console.log("e.name: ",e.name);var n=e.name;"United States"===n&&(n="US"),t(Object(S.a)({},a,{selectedCountries:[n]}))}};return r.a.createElement(p.a,{spinning:L,size:"large"},r.a.createElement(g.a,{hoverable:!0,title:"World Map",size:"small",extra:r.a.createElement(n.Fragment,null,"\xa0\xa0 Select Metric:\xa0\xa0",r.a.createElement(D.a,{placeholder:"Select metric...",onChange:function(e){return f(e)},value:m,style:{width:"30em"}},["Active","Confirmed","Deaths","Recovered","Extrapolated Active","Extrapolated Confirmed","Extrapolated Deaths","Extrapolated Recovered","Extrapolated Social Distancing Confirmed","Extrapolated Without Social Distancing Confirmed"].map((function(e){return r.a.createElement(z,{key:e},e)}))))},r.a.createElement(h.a,{option:B,notMerge:!0,lazyUpdate:!0,style:{height:l,width:"100%"},onEvents:V})))},L=t(49),M=t(875),B=t(871),T=t(876),V=["Thailand","Japan","Singapore","Nepal","Malaysia","Canada","Australia","Cambodia","Sri,Lanka","Germany","Finland","United,Arab,Emirates","Philippines","India","Italy","Sweden","Spain","Belgium","Egypt","Lebanon","Iraq","Oman","Afghanistan","Bahrain","Kuwait","Algeria","Croatia","Switzerland","Austria","Israel","Pakistan","Brazil","Georgia","Greece","North,Macedonia","Norway","Romania","Estonia","San,Marino","Belarus","Iceland","Lithuania","Mexico","New,Zealand","Nigeria","Ireland","Luxembourg","Monaco","Qatar","Ecuador","Azerbaijan","Armenia","Dominican,Republic","Indonesia","Portugal","Andorra","Latvia","Morocco","Saudi,Arabia","Senegal","Argentina","Chile","Jordan","Ukraine","Hungary","Liechtenstein","Poland","Tunisia","Bosnia,and,Herzegovina","Slovenia","South,Africa","Bhutan","Cameroon","Colombia","Costa,Rica","Peru","Serbia","Slovakia","Togo","Malta","Martinique","Bulgaria","Maldives","Bangladesh","Paraguay","Albania","Cyprus","Brunei","US","Burkina,Faso","Holy,See","Mongolia","Panama","China","Iran","Korea,,South","France","Cruise,Ship","Denmark","Czechia","Taiwan*","Vietnam","Russia","Moldova","Bolivia","Honduras","United,Kingdom","Congo,(Kinshasa)","Cote,d'Ivoire","Jamaica","Turkey","Cuba","Guyana","Kazakhstan","Ethiopia","Sudan","Guinea","Kenya","Antigua,and,Barbuda","Uruguay","Ghana","Namibia","Seychelles","Trinidad,and,Tobago","Venezuela","Eswatini","Gabon","Guatemala","Mauritania","Rwanda","Saint,Lucia","Saint,Vincent,and,the,Grenadines","Suriname","Kosovo","Central,African,Republic","Congo,(Brazzaville)","Equatorial,Guinea","Uzbekistan","Netherlands","Benin","Liberia","Somalia","Tanzania","Barbados","Montenegro","Kyrgyzstan","Mauritius","Zambia","Djibouti","Gambia,,The","Bahamas,,The","Chad","El,Salvador","Fiji","Nicaragua","Madagascar","Haiti","Angola","Cabo,Verde","Niger","Papua,New,Guinea","Zimbabwe","Cape,Verde","East,Timor","Eritrea","Uganda"],I=D.a.Option,R=function(e){var a=e.filterValues,t=e.setFilterValues;return r.a.createElement(g.a,{hoverable:!0,size:"small"},r.a.createElement(x.a,{gutter:16},r.a.createElement(L.a,{span:8},r.a.createElement(M.a,{style:{width:"100%"}},r.a.createElement(M.a.Item,{label:"Filter by Countries",style:{marginBottom:0,width:"100%"}},r.a.createElement(D.a,{mode:"multiple",style:{width:"100%"},placeholder:"Filter by Countries...",onChange:function(e){return t(Object(S.a)({},a,{selectedCountries:e}))},value:a.selectedCountries,size:"small"},V.map((function(e){return r.a.createElement(I,{key:e},e)})))))),r.a.createElement(L.a,{span:8},r.a.createElement(M.a,{layout:"inline",style:{width:"100%"}},r.a.createElement(M.a.Item,{label:"Exclude Countries",style:{width:"100%"}},r.a.createElement(D.a,{mode:"multiple",style:{width:"100%"},placeholder:"Exclude Countries...",onChange:function(e){return t(Object(S.a)({},a,{excludedCountries:e}))},value:a.excludedCountries,size:"small"},V.map((function(e){return r.a.createElement(I,{key:e},e)})))))),r.a.createElement(L.a,{span:3},r.a.createElement(M.a,{layout:"inline",style:{width:"100%"}},r.a.createElement(M.a.Item,{label:"Logarithmic",style:{width:"100%"}},r.a.createElement(B.a,{onChange:function(e){return t(Object(S.a)({},a,{isLogarithmic:e}))},checked:a.isLogarithmic})))),r.a.createElement(L.a,{span:5},r.a.createElement(M.a,{layout:"inline",style:{width:"100%"}},r.a.createElement(M.a.Item,{label:"Extrapolated days",style:{width:"100%"}},r.a.createElement(T.a,{size:"small",min:0,max:30,defaultValue:3,onChange:function(e){return t(Object(S.a)({},a,{extrapolatedDays:e}))},value:a.extrapolatedDays}))))))},F=(t(863),d.a.Header),U=d.a.Content;var G=function(){var e=Object(n.useState)({selectedCountries:[],excludedCountries:[],isLogarithmic:!1,extrapolatedDays:7}),a=Object(u.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(),o=Object(u.a)(l,2),m=o[0],h=o[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),f=g[0],y=g[1],E=function(){var e=Object(s.a)(c.a.mark((function e(){var a,n,r,i,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("fetching data from server"),e.prev=1,t.extrapolatedDays){e.next=4;break}return e.abrupt("return");case 4:return y(!0),a=t.selectedCountries,n=t.excludedCountries,r=t.extrapolatedDays,i={extrapolation_days:r,selected_countries:a.length?a.join(","):void 0,excluded_countries:n.length?n.join(","):void 0},console.log("params: ",i),e.next=10,O.a.get("http://3.127.148.241:8080/all",{params:i});case 10:l=e.sent,o=l.data,console.log("got data from server: ",o),h(o),y(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),console.error("Error while fetching data: ",e.t0.message),y(!1);case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=setTimeout((function(){E()}),1e3);return function(){return clearTimeout(e)}}),[t.extrapolatedDays,t.selectedCountries,t.excludedCountries]),r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(U,{style:{height:"98vh"}},r.a.createElement(F,null,r.a.createElement("h1",{style:{color:"white"}},"Coronavirus Forecasts (Please stay at home and save lives)")),r.a.createElement(x.a,{style:{height:".5em"}}),r.a.createElement(x.a,{gutter:24,style:{paddingLeft:".5em",paddingRight:".5em"}},r.a.createElement(L.a,{span:24},r.a.createElement(R,{filterValues:t,setFilterValues:i}))),r.a.createElement(x.a,{style:{height:".5em"}}),r.a.createElement(x.a,{gutter:8,style:{paddingLeft:".5em",paddingRight:".5em"}},r.a.createElement(L.a,{span:4},r.a.createElement(C,{rawData:m,filterValues:t,isLoading:f})),r.a.createElement(L.a,{span:20},r.a.createElement(v,{filterValues:t,rawData:m,isLoading:f}))),r.a.createElement(x.a,{style:{height:".5em"}}),r.a.createElement(x.a,{gutter:8,style:{paddingLeft:".5em",paddingRight:".5em"}},r.a.createElement(L.a,{span:24},r.a.createElement(_,{filterValues:t,setFilterValues:i}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[380,1,2]]]);
//# sourceMappingURL=main.fbfd4556.chunk.js.map