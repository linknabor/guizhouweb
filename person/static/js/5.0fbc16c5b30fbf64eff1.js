webpackJsonp([5],{jaD4:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=t("bOdI"),n=t.n(a),d=t("Au9i"),c=void 0,o={data:function(){return{addresses:[],checkedAddress:{},currentPage:"list",regions:[],provinces:[],citys:[],countys:[],distinct:"",submitAddress:{receiveName:"",tel:"",provinceId:0,province:"",cityId:0,city:"",countyId:0,county:"",xiaoquName:"",amapId:0,amapDetailAddr:"",homeAddress:""},selectRegion:!1,currentRegionType:1,paying:!1,suggestLocation:"",suggestion:{},suggestions:[],order:[],isDefault:!1}},watch:{suggestLocation:function(s,e){c.suggestLocation!=c.suggestion._name&&c.suggestLocation.length>=2&&c.getSuggestion()}},created:function(){c=this},mounted:function(){c.Addresses()},methods:(i={Addresses:function(){c.receiveData.getData(c,"addresses","res",function(){c.res.success?c.addresses=c.res.result:alert("获取地址信息失败")})},check:function(s){c.checkedAddress=s},deleteAddress:function(s,e){d.MessageBox.confirm("确定删除该地址？").then(function(t){"confirm"==t&&c.receiveData.postData(c,"/address/delete/"+s.id,null,"res",function(){if(c.res.success)for(var s=0;s<c.addresses.length;s++)e==s&&c.addresses.splice(s,1);else alert(null==c.res.message?"删除地址失败！":c.res.message)})}).catch(function(s){})},setDefaultAddress:function(){void 0!=c.checkedAddress.id?c.checkedAddress.main?alert("已经是默认地址"):d.MessageBox.confirm("设为默认地址？").then(function(s){"confirm"==s&&c.receiveData.postData(c,"address/default/"+c.checkedAddress.id,null,"res",function(){if(c.res.success)for(var s in c.addresses)c.addresses[s].id==c.checkedAddress.id?c.addresses[s].main=!0:c.addresses[s].main=!1;else alert(null==c.res.message?"设置默认地址失败！请选择一个地址":c.res.message)},function(){})}).catch(function(s){}):alert("请选择一个地址")},toAddAddress:function(){c.currentPage="xinzen",c.submitAddress={receiveName:"",tel:"",provinceId:0,province:"",cityId:0,city:"",countyId:0,county:"",xiaoquName:"",amapId:0,amapDetailAddr:"",homeAddress:""},c.distinct=""},getRegions:function(s,e){c.currentRegionType=s,c.receiveData.getData(c,"/regions/"+s+"/"+e,"data",function(){c.data.success?c.regions=c.data.result:alert("获取区域信息失败，请稍后重试！")})},showRegion:function(){c.selectRegion=!c.selectRegion,c.selectRegion&&c.changeRegionView()},backRegion:function(s){c.getRegions(s,1)}},n()(i,"backRegion",function(s){c.getRegions(s,c.submitAddress.provinceId)}),n()(i,"updateRegion",function(s){c.changeRegionView(s.regionType,s.id,s.name)}),n()(i,"changeRegionView",function(s,e,t){s?1==s?(c.submitAddress.provinceId!=e||0==c.citys.length?c.getRegions(2,e):c.regions=c.citys,c.submitAddress.province=t,c.submitAddress.provinceId=e,c.currentRegionType=2):2==s?(c.submitAddress.cityId!=e||0==c.countys.length?c.getRegions(3,e):c.regions=c.countys,c.submitAddress.city=t,c.submitAddress.cityId=e,c.currentRegionType=3):3==s&&(c.submitAddress.county=t,c.submitAddress.countyId=e,c.distinct=c.submitAddress.province+c.submitAddress.city+c.submitAddress.county,c.selectRegion=!1):0==c.provinces.length?c.getRegions(1,1):c.regions=c.provinces}),n()(i,"showLocation",function(){""==c.submitAddress.city||""==c.submitAddress.county||""==c.submitAddress.province?alert("请先选择你所在的区域"):(c.suggestions=[],c.currentPage="location")}),n()(i,"getSuggestion",function(){c.receiveData.getData(c,"amap/"+c.submitAddress.city+"/"+c.suggestLocation,"data",function(){c.data.success?c.suggestions=c.data.result:c.suggestions=[]})}),n()(i,"cancelLocation",function(){c.suggestLocation=""}),n()(i,"submitLocation",function(){c.submitAddress.xiaoquName=c.suggestLocation,c.submitAddress.amapId=c.suggestion._id,c.submitAddress.amapDetailAddr=c.suggestion.detailaddress,c.currentPage="xinzen"}),n()(i,"chooseLocation",function(s){c.suggestion=s,c.suggestLocation=s._name,c.suggestions=[]}),n()(i,"addAddress",function(){""!=c.submitAddress.province&&""!=c.submitAddress.city&&""!=c.submitAddress.county?""!=c.submitAddress.amapDetailAddr&&""!=c.submitAddress.receiveName&&""!=c.submitAddress.tel&&""!=c.submitAddress.homeAddress?/^1[3-9][0-9]\d{4,8}$/.test(c.submitAddress.tel)?c.saveAddress():alert("请填写正确的手机号！"):alert("请填写完整相关信息！"):alert("请选择地址！")}),n()(i,"saveAddress",function(){var s={};s.receiveName=c.submitAddress.receiveName,s.tel=c.submitAddress.tel,s.provinceId=c.submitAddress.provinceId,s.province=c.submitAddress.province,s.cityId=c.submitAddress.cityId,s.city=c.submitAddress.city,s.countyId=c.submitAddress.countyId,s.county=c.submitAddress.county,s.xiaoquName=c.submitAddress.xiaoquName,s.detailAddress=c.submitAddress.amapDetailAddr+c.submitAddress.homeAddress,s.amapDetailAddr=c.submitAddress.amapDetailAddr,s.amapId=c.submitAddress.amapId,s.main=c.isDefault,c.receiveData.postData(c,"/addAddress",s,"n",function(){c.n.success?(c.addresses.push(c.n.result),c.currentPage="list"):alert(null==c.n.message?"地址保存失败，请重试！":c.n.message)})}),i)},r={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"addr"},[s._l(s.addresses,function(e,i){return t("div",{directives:[{name:"show",rawName:"v-show",value:"list"==s.currentPage,expression:"currentPage=='list'"}],staticClass:"menu-linksa fs14 address-wrap lite-divider",staticStyle:{display:"block"},on:{click:function(t){s.check(e)}}},[t("span",{staticStyle:{"margin-left":"10px"}},[s._v(s._s(e.receiveName))]),s._v(" "),t("span",{staticStyle:{"margin-left":"15px"}},[s._v(s._s(e.tel))]),s._v(" "),e.main?t("span",{staticStyle:{"margin-left":"15px"}},[s._v("默认")]):s._e(),s._v(" "),t("div",[t("i",{staticClass:"checkbox fl",class:{checked:s.checkedAddress.id==e.id}}),s._v(" "),t("div",{staticClass:"location"},[s._v(s._s(e.province)+s._s(e.city)+s._s(e.county)+s._s(e.locationAddr)+s._s(e.detailAddress))])]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.xiaoquName,expression:"item.xiaoquName"}],staticClass:"xiaoqu"},[s._v("小区或者大厦： "+s._s(e.xiaoquName))]),s._v(" "),t("div",{staticClass:"btn-edit-mask",on:{click:function(t){s.deleteAddress(e,i)}}})])}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"list"==s.currentPage,expression:"currentPage=='list'"}],staticStyle:{"text-align":"center"}},[t("a",{staticClass:"btn-plain",staticStyle:{"margin-top":"30px",color:"#3b3937"},on:{click:s.toAddAddress}},[s._v("新建收货地址")]),t("br"),s._v(" "),s.addresses.length>1?t("a",{staticClass:"btn-plain",staticStyle:{"margin-top":"10px",color:"#3b3937"},on:{click:s.setDefaultAddress}},[s._v("设为默认地址")]):s._e(),t("br")]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"xinzen"==s.currentPage,expression:"currentPage=='xinzen'"}]},[t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[s._v("联系人")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.receiveName,expression:"submitAddress.receiveName"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"请输入联系人姓名"},domProps:{value:s.submitAddress.receiveName},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"receiveName",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[s._v("手机号")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.tel,expression:"submitAddress.tel"}],staticClass:"fr fs14 hidden-input",attrs:{type:"tel",placeholder:"请输入手机号码"},domProps:{value:s.submitAddress.tel},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"tel",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"input-wrap lite-divider menu-link",on:{click:s.showRegion}},[t("span",{staticClass:"fl fs15",staticStyle:{color:"#3b3937"}},[s._v("所在地区")]),s._v(" "),s.distinct?s._e():t("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[s._v("请选择所在地区")]),s._v(" "),s.distinct?t("span",{staticClass:"fr fs14"},[s._v(s._s(s.distinct))]):s._e()]),s._v(" "),1==s.selectRegion?t("div",[t("div",{staticClass:"tc"},[t("div",{staticClass:"region  fl",class:{check:1==s.currentRegionType},on:{click:function(e){s.backRegion(1)}}},[s._v("选择省")]),s._v(" "),t("div",{staticClass:"region fl",class:{check:2==s.currentRegionType},on:{click:function(e){s.backRegion(2)}}},[s._v("市")]),s._v(" "),t("div",{staticClass:"region fl",class:{check:3==s.currentRegionType}},[s._v("区县")])]),s._v(" "),t("div",{staticStyle:{width:"100%",clear:"both","background-color":"#e0dede",overflow:"hidden"}},s._l(s.regions,function(e,i){return t("div",{staticClass:"fs14 fl",class:{city:0==Math.floor(i/4%2),city2:1==Math.floor(i/4%2)},on:{click:function(t){s.updateRegion(e)}}},[s._v(s._s(e.name))])}),0),s._v(" "),t("div",[s._v("  ")])]):s._e(),s._v(" "),0==s.selectRegion?t("div",{staticStyle:{clear:"both"}},[t("div",{staticClass:"input-wrap lite-divider  menu-link",on:{click:s.showLocation}},[t("span",{staticClass:"fl fs15"},[s._v("小区或大厦")]),s._v(" "),""==s.submitAddress.xiaoquName?t("span",{staticClass:"fr fs14",staticStyle:{color:"#aeaeae"}},[s._v("请输入小区或大厦")]):s._e(),s._v(" "),s.submitAddress.xiaoquName?t("span",{staticClass:"fr fs14"},[s._v(s._s(s.submitAddress.xiaoquName))]):s._e()]),s._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[s._v("小区地址")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.amapDetailAddr,expression:"submitAddress.amapDetailAddr"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：三林路128弄"},domProps:{value:s.submitAddress.amapDetailAddr},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"amapDetailAddr",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"input-wrap lite-divider"},[t("span",{staticClass:"fl fs15"},[s._v("楼栋门牌号")]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.submitAddress.homeAddress,expression:"submitAddress.homeAddress"}],staticClass:"fr fs14 hidden-input",attrs:{placeholder:"例如：1号楼402室"},domProps:{value:s.submitAddress.homeAddress},on:{input:function(e){e.target.composing||s.$set(s.submitAddress,"homeAddress",e.target.value)}}})]),s._v(" "),t("div",{staticClass:"btn-fixed"},[t("div",{staticClass:"submit-btn ov fs16",on:{click:s.addAddress}},[s._v("保存")])])]):s._e()]),s._v(" "),"location"==s.currentPage?t("div",{staticStyle:{"background-color":"#fffff8"}},[t("div",{staticClass:"location-wrap"},[t("div",{staticClass:"location-input-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.suggestLocation,expression:"suggestLocation"}],staticClass:"location-input",attrs:{placeholder:"请输入小区名称"},domProps:{value:s.suggestLocation},on:{input:function(e){e.target.composing||(s.suggestLocation=e.target.value)}}}),s._v(" "),s.suggestLocation?t("i",{staticClass:"location-btn-cancel",on:{click:s.cancelLocation}}):s._e()]),s._v(" "),t("span",{staticClass:"location-btn-ensure",on:{click:s.submitLocation}},[s._v("确定")])]),s._v(" "),s.suggestions.length?s._e():t("div",{staticClass:"location-empty-tip"},[s._v("\n                            准确的小区、街道或大厦名称能加快送货速度\n                        ")]),s._v(" "),s._l(s.suggestions,function(e){return s.suggestions.length?t("div",{staticClass:"location-location",on:{click:function(t){s.chooseLocation(e)}}},[t("span",{staticStyle:{position:"relative","font-color":"#cccccc","font-size":"16px"}},[s._v(s._s(e._name)+" - "+s._s(e._address))])]):s._e()})],2):s._e()],2)},staticRenderFns:[]};var u=t("VU/8")(o,r,!1,function(s){t("xN6Z")},"data-v-b5e1811e",null);e.default=u.exports},xN6Z:function(s,e){}});
//# sourceMappingURL=5.0fbc16c5b30fbf64eff1.js.map