webpackJsonp([7],{G2Ae:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("bCVF"),r=e.n(a),i=e("6ZnO"),n=e.n(i),c=e("UOIW"),o=e.n(c),u=e("wrtZ"),l=e.n(u),d=e("gNY8"),v=e.n(d),f=e("Z6jr"),p=e.n(f),_=e("mqp8"),y=e.n(_),g=void 0,h={data:function(){return{orders:[],status:1,typeConfig:{1:["浴室维修",r.a],2:["厨房维修",n.a],3:["客厅卧室维修",o.a],4:["强弱电维修",l.a],5:["门窗维修",v.a],6:["其它维修",p.a],7:["家电",y.a]}}},created:function(){g=this},mounted:function(){g.query()},methods:{query:function(){g.receiveData.getData(g,"operator/repair/query/"+g.status,"res",function(){if(g.res.success)for(var t in g.orders=g.res.result,g.orders)g.orders[t].typeName=g.typeConfig[g.orders[t].repairType][0],g.orders[t].typeImg=g.typeConfig[g.orders[t].repairType][1]})},changeStatus:function(t){g.status!=t&&(g.status=t,g.query())},gotoDetail:function(t){g.$router.push({path:"/operatorOrdersDetail",query:{ordersID:g.orders[t].id}})}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"oper"},[e("div",{class:{emptybg:0==t.orders.length}}),t._v(" "),e("div",{staticClass:"statusBar"},[e("div",{staticClass:"statusTitle",class:{current:1==t.status},on:{click:function(s){t.changeStatus(1)}}},[t._v("可接单")]),t._v(" "),e("div",{staticClass:"statusTitle",class:{current:2==t.status},on:{click:function(s){t.changeStatus(2)}}},[t._v("已接单")]),t._v(" "),e("div",{staticClass:"statusTitle",class:{current:3==t.status},on:{click:function(s){t.changeStatus(3)}}},[t._v("已完成")])]),t._v(" "),e("div",{staticStyle:{width:"100%",height:"40px"}},[t._v(" ")]),t._v(" "),t._l(t.orders,function(s,a){return e("div",{staticClass:"ov pr15 lite-divider",staticStyle:{color:"#3b3937"},on:{click:function(s){t.gotoDetail(a)}}},[e("img",{staticClass:"icon-repair fl",attrs:{src:s.typeImg}}),t._v(" "),e("div",{staticClass:"ov ptb15"},[e("span",{staticClass:"fl fs15",staticStyle:{color:"#000"}},[t._v(t._s(s.typeName))]),t._v(" "),e("span",{staticClass:"fr fs12",staticStyle:{color:"#999"}},[e("i",{staticClass:"icon time-icon"}),t._v(t._s(s.time))])]),t._v(" "),e("div",{staticClass:"comment ov  pb15"},[e("span",{staticClass:"fl fs15",staticStyle:{"font-size":"16px",color:"#666","max-width":"120px",height:"30px","line-height":"30px",overflow:"hidden"}},[t._v(t._s(s.projectName))]),t._v(" "),e("span",{staticClass:"fr fs12 status-font"},[t._v(t._s(s.statusStr))])])])})],2)},staticRenderFns:[]};var C=e("VU/8")(h,m,!1,function(t){e("aDjm")},"data-v-33edfe85",null);s.default=C.exports},aDjm:function(t,s){}});
//# sourceMappingURL=7.27d533d8bb92e7229ae5.js.map