webpackJsonp([7],{"4yWy":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".ov[data-v-17115818]{overflow:hidden;padding:1px}.fs14[data-v-17115818]{font-size:14px}.pl15[data-v-17115818]{padding-left:15px}.pb15[data-v-17115818]{padding-bottom:15px}.img[data-v-17115818]{max-width:100%;height:auto}.comment-post-picture[data-v-17115818]{width:42px;height:42px;margin-right:15px;border:1px solid #d4cfc8;border-radius:42px}.thread_user_head[data-v-17115818]{float:left;margin-top:10.5px;font-size:14px;color:#393b37}.fs13[data-v-17115818]{font-size:13px}.fs12[data-v-17115818]{font-size:12px}.rel[data-v-17115818]{position:relative}.pr15[data-v-17115818]{padding-right:25px}.pt15[data-v-17115818]{padding-top:15px}.divider[data-v-17115818]{border-bottom:5px solid #f9f9e9}.comments_title[data-v-17115818]{margin:15px 4% 0;height:15px}.comment-lite-divider[data-v-17115818]{border-bottom:1px solid #d4cfc8}p15[data-v-17115818]{padding:15px;font-size:13px}.comment-reply-picture[data-v-17115818]{width:35px;height:35px;margin-right:15px;border:1px solid #d4cfc8;border-radius:35px}.comments_user_name[data-v-17115818]{font-size:14px;color:#3b3937;margin:5px 0 15px}.comment_input[data-v-17115818]{text-align:left;float:left;overflow:hidden;width:70%}.inner-input[data-v-17115818]{display:block;height:35px;line-height:35px;outline:none;border:1px solid #d4cfc8;border-radius:4px;padding:0 10px;vertical-align:middle;font-size:15px}.submit-btn[data-v-17115818]{height:35px;margin-left:1%;line-height:35px;background:#ff8a00;text-align:center}.zzmb[data-v-17115818]{z-index:100000;position:absolute;top:0;left:0;-moz-opacity:.65;opacity:.65;filter:alpha(opacity=65);background:#000;width:100%;height:100%;display:block}.butt[data-v-17115818],.comment-item[data-v-17115818]{overflow:hidden}.add-pic-bg[data-v-17115818]{background-image:url("+a("oQqh")+");height:100px;width:95px}.pic_frame[data-v-17115818]{width:94%;margin:0 0 0 6%}.preview_img_layer[data-v-17115818]{float:left;width:100%}.sub_img_layer[data-v-17115818]{float:left;padding-bottom:15px;width:32%;margin-right:1%}.preview_img[data-v-17115818]{width:100%;height:94px}",""])},CdkM:function(t,e,a){var i=a("4yWy");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("04ab4a1d",i,!0)},IQUo:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-bottom":"10px"}},[i("div",{staticClass:"zzmb",staticStyle:{display:"none",position:"fixed"},attrs:{id:"zzmb"},on:{click:t.hideImg}}),t._v(" "),i("div",{staticClass:"divconf",staticStyle:{display:"block",position:"fixed","z-index":"2147483647"},attrs:{id:"divconf"},on:{click:t.hideImg}}),t._v(" "),i("div",{staticClass:"ov pl15 pb15 fs14",staticStyle:{"padding-top":"15px"}},[i("div",{staticClass:"fl"},[i("img",{staticClass:"fl comment-post-picture",attrs:{src:t.thread.userHead}})]),t._v(" "),i("div",{staticClass:"thread_user_head"},[t._v(t._s(t.thread.userName))])]),t._v(" "),i("div",{staticClass:"ov pl15 pr15"},t._l(t.thumbnailurls,function(e,a){return i("div",{},[i("div",{staticClass:"ov pb15 fs14",on:{click:function(e){t.viewSrcImg(t.thread.threadId,a)}}},[i("img",{staticClass:"fl attach-picture",attrs:{src:e}})])])})),t._v(" "),i("div",{staticClass:"ov pl15 pb15 fs13",staticStyle:{color:"#3b3937","word-break":"break-all","word-wrap":"break-word"}},[t._v(t._s(t.thread.threadContent))]),t._v(" "),i("div",{staticClass:"ov pl15 pb15 fs13 fl",staticStyle:{color:"#a6937c","line-height":"23px"}},[i("img",{staticStyle:{width:"13px",height:"13px"},attrs:{src:a("tX5R")}}),t._v(" "+t._s(t.thread.formattedDateTime)+"\n        ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"true"==t.thread.isThreadOwner,expression:"thread.isThreadOwner == 'true'"}],staticClass:"avatar-wrap rel ov fr"},[i("div",{staticClass:"fs13 pr15",staticStyle:{color:"#a6937c","text-align":"right","line-height":"23px"},on:{click:t.delThread}},[t._v("删除")])]),t._v(" "),i("div",{staticClass:"pt15 divider"},[t._v(" ")]),t._v(" "),t._m(0),t._v(" "),t._l(t.comments,function(e,d){return i("div",{staticClass:"comment-item p15"},[i("div",{staticClass:"pt15",staticStyle:{width:"100%","min-height":"100px",float:"left","padding-left":"15px",overflow:"hidden"}},[i("div",{staticClass:"pb15 fs14 fl",staticStyle:{width:"15%"}},[i("img",{staticClass:"fl comment-reply-picture",attrs:{src:e.commentUserHead}})]),t._v(" "),i("div",{staticClass:"fl",staticStyle:{width:"79%"}},[i("div",{staticClass:"comments_user_name"},[t._v(t._s(e.commentUserName))]),t._v(" "),i("div",{staticClass:"fs13",staticStyle:{color:"#3b3937","word-wrap":"break-word",overflow:"hidden"}},[t._v(t._s(e.commentContent))]),t._v(" "),i("div",{staticClass:"preview_img_layer"},t._l(e.previewLink,function(t,e){return i("div",[i("div",{staticClass:"sub_img_layer"},[i("img",{staticClass:"preview_img",attrs:{src:t}})])])})),t._v(" "),i("div",{staticClass:"fl15 fs12 pt15 fl",staticStyle:{color:"#888"}},[i("img",{staticStyle:{width:"12px"},attrs:{src:a("tX5R")}}),t._v(" \n                        "+t._s(e.fmtCommentDateTime)+"\n                    ")]),t._v(" "),i("div",{staticClass:"pt15 fs12",staticStyle:{color:"#a6937c",float:"right"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:"true"==e.isCommentOwner,expression:"comment.isCommentOwner == 'true'"}],staticClass:"fr"},[i("div",{staticClass:"fs12 pr15",staticStyle:{color:"grey","text-align":"right"},on:{click:function(a){t.delComment(e,d)}}},[t._v("删除")])])]),t._v(" "),i("div",{staticClass:"fl"},[t._v(" ")])]),t._v(" "),i("div",{staticClass:"comment-lite-divider fl",staticStyle:{width:"100%"}},[t._v(" ")])])])}),t._v(" "),i("div",{staticClass:"butt"},[i("div",{staticClass:"fl",staticStyle:{top:"10px","background-color":"white",width:"98%","text-align":"center",border:"1px","margin-left":"2%"},attrs:{id:"input"}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],staticClass:"comment_input inner-input ",attrs:{name:"comment_content",placeholder:"回复"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}}),t._v(" "),i("div",{staticClass:"submit-btn ov fs14 fl",staticStyle:{width:"20%",color:"white"},on:{click:t.saveComment}},[t._v("发送")])])]),t._v(" "),t._m(1)],2)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comments_title comment-lite-divider",attrs:{id:"total_comments"}},[a("div",{staticClass:"fl",staticStyle:{"line-height":"15px",color:"#888"}},[t._v("评论")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"hidden","margin-top":"10px"},attrs:{id:"imgdis"}},[a("div",{staticClass:"pic_frame",attrs:{id:"pic"}})])}],s={render:i,staticRenderFns:d};e.a=s},Prbf:function(t,e,a){"use strict";(function(t){var i=a("mvHQ"),d=(a.n(i),a("fxnj")),s=a.n(d),n=void 0;e.a={data:function(){return{threadId:this.$route.query.threadId,thread:{},comments:[],uploadPicId:"",thumbnailurls:[],commentContent:"",localIdsid:""}},created:function(){n=this},mounted:function(){this.getThread()},methods:{getThread:function(){n.receiveData.postData(n,"thread/getThreadByThreadId",{threadId:n.threadId},"data",function(){n.data.success&&(n.thread=n.data.result,n.comments=n.thread.comments,n.thumbnailurls=n.thread.thumbnailLink,n.updateUnreadComments(),n.comments.length>0&&t("#add").hide())})},updateUnreadComments:function(){var t="thread/updateUnreadComment/"+n.thread.userId+"/"+n.thread.threadId;n.receiveData.postData(n,t,{},"data",function(){})},viewSrcImg:function(t,e){n.refreshImages(t,e)},refreshImages:function(e,a){var i="thread/getImgDetail/"+e+"/"+a;n.receiveData.getData(n,i,"data",function(){var e=n.data.result,a=e.imgUrl,i=e.width,d=e.height,s=0,o=0;""!=i&&"undefined"!=i?s=parseInt(i):alert("请检查图片是否上传成功。"),""!=d&&"undefined"!=d?o=parseInt(d):alert("请检查图片是否上传成功。");var r='<div id="imgDetail" style="align:center"><img src="'+a+'"/></div>';t("#zzmb").show("slow"),t("#divconf").html(r),t("#divconf").show("slow"),t(window).height()>t(document).height()?t(".zzmb").height(t(window).height()):t(".zzmb").height(t(document).height());var c=t(window).height(),l=t(window).width(),m=0,h=0,p=0,v=!1;s>o?s>l?(m=l/s*o,h=l):(v=!0,m=o,h=s):s<=o&&(s>l?(m=l/s*o,m>c?(h=c/o*s,m=c):h=l):o>c&&(h=c/o*s,m=c));var p=c/2-m/2,g=0;v&&(g=l/2-h/2),t("#divconf").css("top",p),t("#divconf").css("left",g)})},hideImg:function(){t("#zzmb").hide("slow"),t("#divconf").hide("slow")},delThread:function(){n.receiveData.postData(n,"thread/deleteThread",{threadId:n.threadId},"data",function(){n.data.success?(alert("删除成功"),n.$router.push({path:"/butler",query:{category:"2"}})):alert(null==n.data.message?"发布信息保存失败，请重试！":n.data.message)})},delComment:function(t,e){n.receiveData.postData(n,"thread/deleteComment",{commentId:t.commentId,threadId:t.threadId},"data",function(){n.data.success?n.comments.splice(e,1):alert(null==n.data.message?"发布信息保存失败，请重试！":n.data.message)})},saveComment:function(){if(""==n.commentContent)return alert("回复内容不为空。"),!1;n.addComment()},addComment:function(){n.receiveData.postData(n,"thread/addComment",{commentContent:n.commentContent,threadId:n.threadId},"data",function(){n.data.success?(n.comments.push(n.data.result),n.commentContent=""):alert(null==n.data.message?"发布信息保存失败，请重试！":n.data.message)})},wxdata:function(){n.receiveData.postData(n,"getUrlJsSign",{url:window.location.href.split("#")[0]},"heheData",function(){var t=n.heheData.result;s.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["chooseImage","previewImage","uploadImage","downloadImage","getLocalImgData"]})})},addPic:function(){s.a.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var a=e.localIds;n.localIdsid=e.localIds,alert("已选择"+a.length+"张图片");var i="",d=t("[name='pics']").length;if(d+a.length>3)return alert("所选图片超过3张。"),!1;var o=0;if(window.__wxjs_is_wkwebview){!function e(d){s.a.getLocalImgData({localId:a[d],success:function(s){var o=s.localData;o=o.replace("jgp","jpeg"),i='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+o+'"  id="'+n.localIdsid[d]+'"  style="height:100px;width:90px;"/></div>',t("#pic").append(i),++d<a.length&&e(d)},fail:function(t){alert(t)}})}(o)}else for(var o=0;o<a.length;o++)i='<div name=\'pics\' class="fl" style="margin-right:5px;"><img src="'+a[o]+'" id="'+a[o]+'"  style="height:100px;width:90px;"/></div>',t("#pic").append(i);d+a.length>=3&&t("#add").hide()},fail:function(t){alert(t)}})},uploadToWechat:function(){function e(){var t=i.eq(a).find("img"),d=t.attr("id");setTimeout(function(){s.a.uploadImage({localId:d,isShowProgressTips:1,success:function(t){var d=t.serverId;n.uploadPicId+=d+",",a++,a<i.length?e():a==i.length&&n.addComment()}})},50)}var a=0,i=t("[name='pics']");e()}},computed:{}}}).call(e,a("7t+N"))},UPeT:function(t,e,a){"use strict";function i(t){a("CdkM")}Object.defineProperty(e,"__esModule",{value:!0});var d=a("Prbf"),s=a("IQUo"),n=a("VU/8"),o=i,r=n(d.a,s.a,!1,o,"data-v-17115818",null);e.default=r.exports},oQqh:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA59YAAIElAACFAQAA6BMAADvtAAAYBnfKEhIAAAFsSURBVHja7NoxDsIwEERRjHJpGhA0HNu0CCnISbxgr94viUnBz2zsEaXWelrjcbu8Xywfl9e/aP3q+uv9Wb7d5HzCUCyN60rjZ1vvYb2EjA0hk42s4ieSkKzUhp0aIRKCQ0KaYgYJIQSEEILxD4boR5EQIwvRI0uXJSFp0WVJyOBPXwYhuiwJIQSEgJAkB0P0Q5dlZCF8ZOmyJCQtuiwJQbgQXZaEEAJCQEiSgyH6ocsyshA+snRZEpIWXZaEIFyILktCCAEh2HsO2bu9++fW8teU0YXggLhl9CdmYzKmbxa8QyZ7h+iyJCQtuiwJQbgQXZaEEAJCQEiSgyH64X9ZRhbCR5YuS0LSosuSEIQL0WVJCCEgBIQkORiiH7osIwvhI0uXJSFp0WXZZQ2+g8kwsnRZ3iGEgBAQYpeFPTtBCTGycGRk6bIkJC26LAlBuBBdloQQAkJASJKD4dqLfsth0noJmZcXAAAA//8DAIghOuIxjAeLAAAAAElFTkSuQmCC"},tX5R:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA35pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYzliOWY4Zi0zYzE1LTM4NGYtYjcwOS0zZGNiNjY5YzA1MjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFBNDI4RUQ1MzMwMTFFNUEwNENFQzBENTYxODA0MjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFBNDI4RUM1MzMwMTFFNUEwNENFQzBENTYxODA0MjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5MzZFOEVFNDcyMDY4MTE4MjJBQ0UwNEM1NUNCQjZBIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDQzMzM1OTgtMjM4MC0xMWU1LThjMTAtYmU2YTYwOGU2OGQyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UqIDaQAAAk1JREFUeNqslluITVEcxtdswovGg/AyD5rIuJQ5aCYSMw8iSUoZtxdywjwyLyMRuZS8mJichocpl6HGg0JRE0WY8KLj/uqS23iX4/fpG22nfebsM86/fq1ae63vW3v9/3utXVMoFIIil8uFhKiHjdACDTDF/Z8hDwNwGd5ms9mk+SEKySHhfngDh6ERXkGfeek+PXsN11hgfVqDbfAc1sFVWA6T/RabTYv7lsEVWKs5mGwvZ9AJ5+A9LIENcBd+JSxEffegDRZ7Tg8m+0sZaOVH4DEsggchfTyEhZ57CJMd/xjQMYPmNLyDVfCthNB9b9+Y4gck+TvNSiUcuqz59w1OwHjYMoJ48FbMgYlJD22yCcbByT8GOM1ykvr8qv8VmAy6dNeg3RC5zhWnQvWiy21b5JL7Uo3VFyVdmq0ymAdPoVAtdbZJWk9grgwmwYdQ/fgo7WiUkxekHSiDIZiWcny/2ztwCepGGCvNIRm8gPkpDdaDzpuvPiJ0AB6ACQljpZmPfOROhaYUBkreeZgJZy18EHrjg6j/ZmsOyOCC+9sryIG+9p1e1G1XYTx2u70YUVK6OG75GM5UmGx9tSvgeGz1GWvdlPZwFe2Bn3KE2tHWJeK11pDWXvXVxK7MXTRnfGKuhh8V6kv8OizVFrH67uL7QB1HfdE8qnC7Mp4j8WPD4kk32j4naLr3t7dMdTV5zKDnaOWd8QFjEyZ1u3R1nm81n+CZ2+ASbHSruAEdLphQziD4r0F5mO0LpBWafW4Ff/36QHuc1Hyp35bfAgwA6aSjO5PCY2YAAAAASUVORK5CYII="}});