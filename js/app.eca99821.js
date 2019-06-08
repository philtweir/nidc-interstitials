(function(t){function e(e){for(var s,o,a=e[0],u=e[1],c=e[2],f=0,d=[];f<a.length;f++)o=a[f],r[o]&&d.push(r[o][0]),r[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/nidc-interstitials/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),r=n.n(s);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s,r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={name:"app"},u=a,c=(n("034f"),n("2877")),l=Object(c["a"])(u,i,o,!1,null,null,null),f=l.exports,d=n("eb48"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.roomId))]),n("table",[t._m(0),n("tbody",t._l(t.sessions,function(e,s){return n("tr",[n("td",[t._v("\n          "+t._s(t.timeslots[e.time].startTime)+" -\n          "+t._s(t.timeslots[e.time].endTime)+"\n        ")]),n("td"),n("td"),n("td",[n("h3",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.description.substring(0,300))),e.description.length>300?n("span",[t._v("...")]):t._e()]),t._l(t.getSpeakers(e),function(s,r){return n("div",{staticClass:"speaker"},[n("p",[n("strong",[t._v(t._s(s.title))]),t._v(": "+t._s(s.description.substring(0,300))),e.description.length>300?n("span",[t._v("...")]):t._e()])])})],2)])}),0)])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Time")]),n("th",[t._v("Seen")]),n("th",[t._v("SIG.")]),n("th",[t._v("Description")])])])}],h=(n("ac6a"),n("55dd"),n("bc3a")),v=n.n(h),_={name:"page",data:function(){return{location:"https://raw.githubusercontent.com/MarkXA/nidevconf/master/static/app/2019.json",agenda:null}},components:{},mounted:function(){var t=this;v.a.get(this.location).then(function(e){return t.agenda=e.data})},methods:{getSpeakers:function(t){var e=this;return t&&t.speakers?t.speakers.map(function(t){return e.speakers[t]}):[]}},computed:{roomId:function(){return this.$route.params.roomId},sessions:function(){var t=this;return this.agenda?this.agenda.sessions.filter(function(e){return e.room==t.roomId}).sort(function(t,e){return t.time-e.time}):[]},timeslots:function(){var t={};return this.agenda&&this.agenda.timeslots.forEach(function(e){t[e.id]=e}),t},speakers:function(){var t={};return this.agenda&&this.agenda.speakers.forEach(function(e){t[e.id]=e}),t}}},g=_,b=(n("f321"),Object(c["a"])(g,p,m,!1,null,null,null)),k=b.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reveal"},[n("div",{staticClass:"slides"},[t.session&&t.room&&t.timeslot?t._e():n("section",{staticClass:"light",attrs:{"data-background":t.publicPath+"giants-causeway.jpg.png","data-transition":"fade-in fade-out"}}),t.session&&t.room&&t.timeslot?n("section",{staticClass:"light"},[n("h2",[t._v(t._s(t.session.title))]),n("h3",t._l(t.getSpeakers(t.session),function(e,s){return n("span",[t._v(t._s(e.title))])}),0),n("p",t._l(t.getSpeakers(t.session),function(e,s){return n("span",[t._v(t._s(e.twitter))])}),0)]):t._e(),t.session&&t.room&&t.timeslot?n("section",{attrs:{"data-transition":"fade-in fade-out"}},[n("h3",[t._v("You are in "),n("span",{staticClass:"room"},[t._v(t._s(t.room.title))])]),n("h4",[t._v("In other rooms from "),n("span",{staticClass:"room"},[t._v(t._s(t.timeslot.startTime))])]),n("table",{staticClass:"parallel"},[n("tr",t._l(t.tracks,function(e,s){return n("td",[t._v(t._s(t.getRoom(e).title))])}),0),n("tr",t._l(t.tracks,function(e,s){return n("td",[t._v(t._s(e.title))])}),0)])]):t._e()])])},y=[],w=n("bd86"),I=n("84f0"),O=n.n(I),S={name:"app",data:function(){return{location:"https://raw.githubusercontent.com/MarkXA/nidevconf/master/static/app/2019.json",agenda:null,publicPath:"/nidc-interstitials/"}},components:{},mounted:function(){var t=this;O.a.initialize({autoSlide:1e4,loop:!0}),v.a.get(this.location).then(function(e){return t.agenda=e.data})},methods:{getSpeakers:function(t){var e=this;return t&&t.speakers?t.speakers.map(function(t){return e.speakers[t]}):[]},getRoom:function(t){if(t&&t.room&&t.room in this.rooms)return this.rooms[t.room]}},computed:(s={room:function(){if(this.roomId in this.rooms)return this.rooms[this.roomId]},roomId:function(){return this.$route.params.roomId},timeId:function(){return this.$route.params.timeId},session:function(){if(this.sessions&&1==this.sessions.length)return this.sessions[0]},tracks:function(){var t=this;if(this.agenda){var e=this.agenda.sessions.filter(function(e){return e.time==t.timeId}).sort(function(t,e){return t.time-e.time});return e}return[]}},Object(w["a"])(s,"session",function(){var t=this;if(this.tracks){var e=this.tracks.filter(function(e){return e.room==t.roomId});if(e&&1==e.length)return e[0]}}),Object(w["a"])(s,"timeslot",function(){if(this.session&&this.session.time in this.timeslots)return this.timeslots[this.session.time]}),Object(w["a"])(s,"timeslots",function(){var t={};return this.agenda&&this.agenda.timeslots.forEach(function(e){t[e.id]=e}),t}),Object(w["a"])(s,"rooms",function(){var t={};return this.agenda&&this.agenda.rooms.forEach(function(e){t[e.id]=e}),t}),Object(w["a"])(s,"speakers",function(){var t={};return this.agenda&&this.agenda.speakers.forEach(function(e){t[e.id]=e}),t}),s)},E=S,C=(n("ff4c"),Object(c["a"])(E,j,y,!1,null,null,null)),x=C.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reveal"},[n("div",{staticClass:"slides"},[t._m(0),t._l(t.rooms,function(e,s){return t.rooms?n("section",[n("h3",[t._v(t._s(e.title))]),n("center",[n("table",[n("thead",[n("tr",[n("th",[t._v("Time")]),n("th",[t._v("Description")])])]),n("tbody",t._l(t.sessions[e.id],function(s,r){return n("tr",[n("td",[t._v("\n              "+t._s(t.timeslots[s.time].startTime)+"\n            ")]),n("td",[n("router-link",{attrs:{to:"/r/"+e.id+"/"+s.time}},[t._v("\n              "+t._s(s.title)+"\n              ")]),t._l(t.getSpeakers(s),function(e,s){return n("span",{staticClass:"speaker"},[n("strong",[t._v(t._s(e.title))])])})],2)])}),0)])])],1):t._e()})],2)])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("NIDC --\x3e")]),n("p",[t._v("Use L/R to find your session, click it, then refresh")]),n("p",[t._v("Refreshing again will return you here")])])}],$={name:"page",data:function(){return{location:"https://raw.githubusercontent.com/MarkXA/nidevconf/master/static/app/2019.json",agenda:null}},components:{},mounted:function(){var t=this;O.a.initialize({autoSlide:3e3,loop:!0}),v.a.get(this.location).then(function(e){return t.agenda=e.data})},methods:{getSpeakers:function(t){var e=this;return t&&t.speakers?t.speakers.map(function(t){return e.speakers[t]}):[]}},computed:{rooms:function(){var t={};return this.agenda&&this.agenda.rooms.forEach(function(e){t[e.id]=e}),t},sessions:function(){var t={};if(this.agenda)for(var e in this.rooms)t[e]=this.agenda.sessions.filter(function(t){return t.room==e}).sort(function(t,e){return t.time-e.time});return t},timeslots:function(){var t={};return this.agenda&&this.agenda.timeslots.forEach(function(e){t[e.id]=e}),t},speakers:function(){var t={};return this.agenda&&this.agenda.speakers.forEach(function(e){t[e.id]=e}),t}}},M=$,A=(n("8b71"),Object(c["a"])(M,P,T,!1,null,null,null)),R=A.exports;r["a"].use(d["a"]);var D=new d["a"]({routes:[{path:"/",name:"Home",component:R},{path:"/r/:roomId/:timeId",name:"Present",component:x},{path:"/p/:roomId",name:"Page",component:k}]});r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:D,render:function(t){return t(f)},template:"<App/>",components:{App:f}})},"64a9":function(t,e,n){},"655a":function(t,e,n){},"8b71":function(t,e,n){"use strict";var s=n("e3a2"),r=n.n(s);r.a},"8e2f":function(t,e,n){},e3a2:function(t,e,n){},f321:function(t,e,n){"use strict";var s=n("655a"),r=n.n(s);r.a},ff4c:function(t,e,n){"use strict";var s=n("8e2f"),r=n.n(s);r.a}});
//# sourceMappingURL=app.eca99821.js.map