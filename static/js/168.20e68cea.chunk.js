"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{946:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(861),c=t(439),a=t(757),s=t.n(a),o=t(791),i=t(243),u=t(689),d={cardAuthor:"Reviews_cardAuthor__B4eNf",cardReviewsError:"Reviews_cardReviewsError__cxxlW"},h=t(184),l=function(){var e=(0,o.useState)(""),r=(0,c.Z)(e,2),t=r[0],a=r[1],l=(0,u.UO)().moviesId;return(0,o.useEffect)((function(){if(""===t){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat("https://api.themoviedb.org/3/","movie/".concat(l,"/reviews")).concat("?api_key=c511c78146d5adcdbcb48d13d0273853"));case 3:return r=e.sent,e.next=6,r.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}));case 6:t=e.sent,a(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t,l]),(0,h.jsx)(h.Fragment,{children:0!==t.length?(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)("li",{className:d.cardReviews,children:[(0,h.jsx)("p",{className:d.cardReviewsAuthor,children:"Author: ".concat(e.author)}),(0,h.jsx)("p",{className:d.cardReviewsContent,children:e.content})]},e.id)}))}):(0,h.jsx)("p",{className:d.cardReviewsError,children:"We don`t have any reviews for this movie."})})}}}]);
//# sourceMappingURL=168.20e68cea.chunk.js.map