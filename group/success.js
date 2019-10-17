// avalon.ready(function() {
// 	function getOrderId(){
// 		o.orderId=getUrlParam("orderId");
// 		o.type=getUrlParam("type");
// 	}
// 	function notifyPaySuccess() {
//         common.invokeApi("GET", "notifyPayed/"+o.orderId, null, null, function(n) {
//     	}, function() {
    		
//     	});
// 	}
	
// 	function initShareSetting(order){
// 		var title = "代扔垃圾服务报名，限时优惠中！";
// 		var link=MasterConfig.C('basePageUrl')+"group/rgroupdetail.html?ruleId="+order.groupRuleId;
// 		if(order.orderType==4){
// 			link=MasterConfig.C('basePageUrl')+"group/rgroupdetail.html?ruleId="+order.groupRuleId;
// 		}else if(order.orderType==0&&order.groupId!=0){
// 			link=MasterConfig.C('basePageUrl')+"group.html?groupId="+order.groupId;
// 		}

// 		var desc="小区报名满50人开通";
// 		var img=order.productPic;
// 		if(order.seedStr!=null&&order.seedStr!=''){
// 			title = "合协社区专享现金券";
// 			desc="分享给小伙伴们一个超赞的购物现金券！";
// 			img=MasterConfig.C('basePageUrl')+"static/images/coupon_share_icon.jpg"
// 			link=MasterConfig.C('basePageUrl')+"coupon.html?o="+order.seedStr;
// 		}
// 		initShareConfig(title,link,img,desc);
// 	}
//     function query() {
//         var n = "GET",
//         a = "getOrder/"+o.orderId,
//         i = null,
//         e = function(n) {
// 			console.log(JSON.stringify(n));
//             o.order = n.result;
//             if(o.order == null || o.order.id == null){
//             	if(confirm("获取订单信息失败")){
// 		        	if(o.type==4){
// 		        		location.href="rgroups.html";        		
// 		        	}else if(o.type==3){
// 		        		location.href="onsalesindex.html";
// 		        	}else if(o.type==5){
// 		        		location.href="../home/index.html?v=20160229";
// 		        	}else{
// 		        		location.href="onsalesindex.html";     		
// 		        	}
//     			}
//             } else {
// 				initShareSetting(o.order);
// 			}
//         },
//         r = function() {
//         	if(confirm("获取订单信息失败")){
// 		        	if(o.type==4){
// 		        		location.href="rgroups.html";        		
// 		        	}else if(o.type==3){
// 		        		location.href="onsalesindex.html";
// 		        	}else if(o.type==5){
// 		        		location.href="../home/index.html?v=20160229";
// 		        	}else{
// 		        		location.href="onsalesindex.html";     		
// 		        	}
// 			};
//         };
//         common.invokeApi(n, a, i, null, e, r)
//     }
//     var o = avalon.define({
//         $id: "root",
//         order:{seedStr:""},
// 		orderId:"",
//         coupon:{id:0},
//         goback:function(){
//         	if(o.type==4){
//         		location.href="rgroups.html";
//         	}else if(o.type==3){
//         		location.href="onsalesindex.html";
//         	}else if(o.type==5){
//         		location.href="../home/index.html?v=20160229";
//         	}else{
//         		location.href="onsalesindex.html";
//         	}
//         }
//     });
//     getOrderId();
//     notifyPaySuccess();
//     query();
// 	initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);
//     avalon.scan(document.body);
// });
var o;
avalon.ready(function() {

	function updateLeftTime(){
		if(o.rule.leftSeconds > 0){
			o.finished = false;
			o.rule.leftSeconds=o.rule.leftSeconds-1;
			var iRemain = o.rule.leftSeconds;
			var days=parseInt(iRemain/86400);
			o.left.days = days<10?"0"+days:days;
			iRemain%=86400;

			var hours=parseInt(iRemain/3600);
			o.left.hours = hours<10?"0"+hours:hours;
			iRemain%=3600;

			var minitus = parseInt(iRemain/60);
			o.left.minitus = minitus<10?"0"+minitus:minitus;
			iRemain%=60;

			o.left.seconds=iRemain<10?"0"+iRemain:iRemain;
		}else{
			o.finished = true;
		}
    }
	

	function query() {
        var n = "GET",
        a = "getOnSaleRule/" + o.ruleId,
        i = null,
        e = function(n) {
			o.rule = n.result;
			product(o.rule.productId);
            setInterval(updateLeftTime,1000);
        },
        r = function(n) {
        	alert(n.message==null?"获取团购信息失败！":n.message);
        };
        common.invokeApi(n, a, i, null, e, r)
    }
    function collocation() {
        var n = "GET",
        a = "collocation/3/" + o.ruleId,
        i = null,
        e = function(n) {
			if(n.success&&n.result!=null){
				o.collocation = n.result;
				formatItems();
				if(o.collocation.products.length>3){
					setTimeout(initColl,3000);
				}
			}
        },
        r = function(n) {
        	alert(n.message==null?"获取团购信息失败！":n.message);
        };
        common.invokeApi(n, a, i, null, e, r)
    }
    function formatItems(){
    	if(o.collocation.products!=null){
    		var list = [];
    		for(var i = 0;i<o.collocation.products.length;i++){
    			if(i%3==0) {
    				list[parseInt((i+1)/3)]=[];
    			}
    			list[parseInt(i/3)][i%3]=o.collocation.products[i];
    		}
    		o.formatedItems = list;
    	}
    }
    function product(productId) {
        var n = "GET",
        a = "getProduct/" + productId,
        i = null,
        e = function(n) {
			console.log(JSON.stringify(n));
			o.product = n.result;
		    setTimeout(initSwipe,1000);
			initShareConfig(o.rule.name,MasterConfig.C("basePageUrl")+"group/onsaledetail.html?ruleId="+o.ruleId,o.product.smallPicture,"快来参加贵州幸福生活的优惠商品抢购吧");
        },
        r = function(n) {
			console.log("error");
			alert(n.message==null ?"获取产品信息失败！":n.message);
        };
        common.invokeApi(n, a, i, null, e, r)
    }
    
	function getMessageId(){
		o.ruleId=getUrlParam("ruleId");
	}
	

    o = avalon.define({
        $id: "root",
        ruleId:"",
        product: {
        	pictureList:[]
        },
        rule:{
        	currentNum:0
        },
        collocation:{
        },
        formatedItems:[
        	[
        	]
        ],
        finished:false,
        left:{
        	days:"0",
        	hours:"0",
        	minitus:"0",
        	seconds:"0"
        },
        showDetail: false,
        toggleDetail: function() {
            o.showDetail = !o.showDetail;
        },
        buy:function(){

        	if(common.checkRegisterStatus()&&o.rule.id){
                location.href=MasterConfig.C("payPageFolder")+'gzbuy.html?type=3&ruleId='+o.rule.id+'&basePageUrl='+MasterConfig.C("basePageUrl");
                
                
                
        	}
        },

        goclassify:function(){
        	location.href="onsalesitem.html?type="+o.rule.productType;
        },
        gohome:function(){
        	location.href="onsalesindex.html";
        },
        gotoDetail:function(ruleId){
        	location.href="onsaledetail.html?ruleId="+ruleId;
        },
        gotoCollocation:function(){
        	location.href="collocation.html?collId="+o.collocation.id+"&ruleId="+o.ruleId;
        }
    });

    avalon.scan(document.body);
    getMessageId();
    if(o.ruleId != ""){
    	query();
        checkFromShare(3,o.ruleId);
    	collocation();
    }
    initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);
    checkCodeAndLogin();
});