webpackJsonp([6],{EkVz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("bCVF"),r=a.n(s),i=a("6ZnO"),n=a.n(i),v=a("UOIW"),c=a.n(v),l=a("wrtZ"),o=a.n(l),p=a("gNY8"),d=a.n(p),u=a("Z6jr"),_=a.n(u),m=a("mqp8"),C=a.n(m),b=void 0,y={data:function(){return{title:"维修成功",desc:"感谢您让居民生活变得更美好",repairOrder:{publicProject:!1},typeName:"",payTypeName:"现金支付",typeConfig:{1:["浴室维修",r.a],2:["厨房维修",n.a],3:["客厅卧室维修",c.a],4:["强弱电维修",o.a],5:["门窗维修",d.a],6:["其它维修",_.a],7:["家电",C.a]}}},created:function(){b=this},mounted:function(){b.queryOrder()},methods:{queryOrder:function(){b.receiveData.getData(b,"operator/repair/query/repairId/"+b.$route.query.ordersID,"res",function(){b.res.success?(b.repairOrder=b.res.result,b.typeName=b.typeConfig[b.repairOrder.repairType][0],2==b.repairOrder.opStatus&&(b.title="抢单成功",b.desc="恭喜你抢到一份维修单"),1==b.repairOrder.payType&&(b.payTypeName="微信支付")):alert("获取成功列表信息失败，请去维修记录中查看！")})},goDetail:function(){b.$router.push({path:"/operatorOrdersDetail",query:{ordersID:b.$route.query.ordersID}})},goback:function(){b.$router.push({path:"/operatorOrders"})}}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"opensucess"},[a("div",{staticClass:"title_area"},[a("div",{staticClass:"brand-tip-1"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"brand-tip-2"},[t._v(t._s(t.desc))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==t.repairOrder.status,expression:"repairOrder.status==5"}],staticClass:"payStatus item"},[a("div",{staticClass:"content-bg"},[a("div",{staticClass:"content-top-bg"},[t._v("报修人已支付维修费用")]),t._v(" "),a("div",{staticClass:"content-bottom-bg"},[a("p",[t._v("￥"),a("span",{staticStyle:{"font-size":"60px"}},[t._v(t._s(t.repairOrder.amount))])]),t._v(" "),a("p",{staticClass:"fs15",staticStyle:{color:"#999"}},[t._v("支付方式："+t._s(t.payTypeName))])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4==t.repairOrder.status,expression:"repairOrder.status==4"}],staticClass:"payStatus item"},[t._m(0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.repairOrder.opStatus,expression:"repairOrder.opStatus==2"}]},[a("div",{staticClass:"top-info bottom-line"},[a("div",{staticClass:"item"},[a("label",[t._v("维修类型")]),a("span",{staticClass:"value"},[t._v(t._s(t.typeName))])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("维修项目")]),a("span",{staticClass:"value"},[t._v(t._s(t.repairOrder.projectName))])])]),t._v(" "),a("div",{staticClass:"top-info",staticStyle:{"margin-top":"15px"}},[a("div",{staticClass:"item"},[a("label",[t._v("联系地址")]),a("span",{staticClass:"value"},[t._v(t._s(t.repairOrder.address))])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("预约时间")]),a("span",{staticClass:"value"},[t._v(t._s(t.repairOrder.requireDateStr))])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("联系人")]),a("span",{staticClass:"value"},[t._v(t._s(t.repairOrder.receiverName))])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("手机号")]),a("span",{staticClass:"value"},[t._v(t._s(t.repairOrder.tel))])])])]),t._v(" "),a("div",{staticClass:"main_btn"},[a("div",{staticClass:"btn",on:{click:t.goDetail}},[t._v("返回详情页")]),t._v(" "),a("div",{staticClass:"btn",on:{click:t.goback}},[t._v("进入维修单列表")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-bg"},[e("div",{staticClass:"content-top-bg"},[this._v("报修人还未支付维修费用")]),this._v(" "),e("div",{staticClass:"content-bottom-bg"},[this._v("? ?")])])}]};var f=a("VU/8")(y,O,!1,function(t){a("IQNF")},"data-v-50bbb890",null);e.default=f.exports},IQNF:function(t,e){}});
//# sourceMappingURL=6.c4f58b44634869151f7d.js.map