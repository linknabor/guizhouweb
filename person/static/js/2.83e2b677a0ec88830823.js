webpackJsonp([2],{Qt9A:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("mvHQ");var e=i("fxnj"),a=i.n(e),n=void 0,o={data:function(){return{user:{headimgurl:"",name:"",level:"",zhima:"0",lvdou:"0",couponCount:0,officeTel:""}}},created:function(){n=this},mounted:function(){this.User(),this.updateCouponStatus()},components:{},methods:{initSession4Test:function(){n.receiveData.getData(n,"/initSession4Test/47886","Data",function(){})},User:function(){this.common.invokeApi("GET","userInfo",null,null,function(t){t.success&&null==t.result?reLogin():(n.user=t.result,n.user.headimgurl=""!=t.result.name||t.result?t.result.headimgurl:Config1.C("user_info").avatar,n.user.name=""!=t.result.name?t.result.name:Config1.C("user_info").nickname,n.user.level=Config1.C("user_level")[t.result.level],n.user.officeTel=t.result.officeTel)},function(){n.user={},n.user.headimgurl=Config1.C("user_info").avatar,n.user.name=Config1.C("user_info").nickname,n.user.level=Config1.C("user_info").levelname});var t=location.href.split("#")[0];n.receiveData.wxconfig(n,a.a,["onMenuShareTimeline","onMenuShareAppMessage"],t)},updateCouponStatus:function(){n.common.invokeApi("GET","updateCouponStatus",null,null,function(t){},function(t){})},gotoEdit:function(){this.$router.push({path:"/bindphone"})},coupons:function(){n.$router.push({path:"/coupons"})},gotoAddress:function(){n.$router.push({path:"/addresses"})}},computed:{}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ind"},[i("div",{staticClass:"avatar-wrap rel ov"},[i("div",{staticClass:" menu-person-link-white",on:{click:t.gotoEdit}},[i("img",{staticClass:"avatar center-bg",staticStyle:{border:"2px solid white",float:"left"},attrs:{src:t.user.headimgurl}}),t._v(" "),i("span",{staticClass:" avatar-info",staticStyle:{float:"left",overflow:"hidden",width:"60%"}},[i("div",{staticClass:"name fs16"},[t._v(t._s(t.user.name))]),t._v(" "),i("div",{staticClass:"fs14"},[t._v("常住小区 "+t._s(t.user.city)+" "+t._s(t.user.xiaoqu)+" ")])])])]),t._v(" "),i("div",{staticClass:"div_bottom clearfix",staticStyle:{"border-bottom":"7px solid #eee"},attrs:{id:"point-list"}},[i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.zhima))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的芝麻")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item"},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.lvdou))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的绿豆")])])]),t._v(" "),i("div",{staticClass:"point-item-wrap"},[i("div",{staticClass:"point-item",on:{click:t.coupons}},[i("div",{staticClass:"point-info fs16"},[t._v(t._s(t.user.couponCount))]),t._v(" "),i("div",{staticClass:"point-title fs14"},[t._v("我的现金劵")])])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both","border-bottom":"none"}},[i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.config.person_zhifu.order}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("全部订单")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看全部订单    ")])])]),t._v(" "),i("div",{staticStyle:{"border-bottom":"7px solid #eee"},attrs:{id:"module-list"}},[i("div",{staticClass:"module-item-wrap"},[i("a",{staticClass:"module-item",attrs:{href:this.config.person_zhifu.grouporders}},[t._m(0),t._v(" "),i("div")])]),t._v(" "),i("div",{staticClass:"module-item-wrap"},[i("a",{attrs:{href:this.config.person_zhifu.homeorders}},[t._m(1)])])]),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{overflow:"hidden",clear:"both"}},[i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/myrepair"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("报修")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),t.user.repairOperator?i("router-link",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{to:{path:"/operatorOrders"}}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("我是维修工")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看维修单    ")])]):t._e(),t._v(" "),i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.config.person_repair.fuwux}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("服务需求")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),i("a",{staticClass:"input-wrap menu-person-link lite-divider",attrs:{href:this.config.person_repair.butler}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("意见建议")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("查看消息    ")])]),t._v(" "),i("div",{staticClass:"input-wrap menu-person-link lite-divider",on:{click:t.gotoAddress}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("常用地址")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v("收货地址    ")])])],1),t._v(" "),i("div",{staticClass:"info-wrap",staticStyle:{"border-bottom":"none"}},[i("a",{directives:[{name:"show",rawName:"v-show",value:null!=t.user.officeTel&&""!==t.user.officeTel,expression:"user.officeTel!=null && user.officeTel!==''"}],staticClass:"input-wrap menu-person-link lite-divider special-link ",attrs:{href:"tel:"+t.user.officeTel}},[i("span",{staticClass:"input-info lf30 fs16"},[t._v("小区电话")]),t._v(" "),i("span",{staticClass:"fr fs14 left_color"},[t._v(t._s(t.user.officeTel))])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"module-logo logo2"},[s("div",{staticClass:"module-title fs14"},[this._v("团购订单")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"module-logo logo3"},[s("div",{staticClass:"module-title fs14"},[this._v("服务订单")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"input-wrap menu-person-link lite-divider special-link ",attrs:{href:"tel:021-50876295"}},[s("span",{staticClass:"input-info lf30 fs16"},[this._v("平台询问电话")]),this._v(" "),s("span",{staticClass:"fr fs14 left_color"},[this._v("021-50876295")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-info divider",staticStyle:{"text-align":"center",display:"block"}},[s("div",{staticClass:"divider highlight",staticStyle:{"text-align":"center",width:"100%","font-size":"14px"}},[this._v("长按关注贵州幸福家园，尊享更多服务和商品")]),this._v(" "),s("img",{staticStyle:{width:"200px"},attrs:{src:i("UsEm")}})])}]};var l=i("VU/8")(o,r,!1,function(t){i("Rt3G")},"data-v-3af901d4",null);s.default=l.exports},Rt3G:function(t,s){},UsEm:function(t,s,i){t.exports=i.p+"static/img/qrcode_for_gh_e112bd0e043f_258.d0a46ec.jpg"}});