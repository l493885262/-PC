//IE8支持placeholder
jQuery('[placeholder]').focus(function() {
  var input = jQuery(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = jQuery(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur().parents('form').submit(function() {
  jQuery(this).find('[placeholder]').each(function() {
    var input = jQuery(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});

$(function() {
	/*产品详情--菜单导航*/
	$(".menu,.pro").hover(function() {
		$(this).addClass('hover')
	}, function() {
		$(this).removeClass('hover')
	});
	//选择搭配
	$(".td-sku-dd li").click(function() {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on').children('i').remove();
		}else{
			$(this).addClass('on').append('<i><i>');
			$(this).siblings().removeClass('on').children('i').remove();
		};
	});
	//收货
	$(".goods-sel").hover(function() {
		$(".goods-list").show();
	}, function() {
		$(".goods-list").hide();
	});
	//商品详情切换
	$(".tab-con>div").eq(0).show().siblings().hide();
	$(".tab-menu li").click(function() {
		var index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$(".tab-con>div").eq(index).show().siblings().hide();
		// body...
	});
	//顶部下拉菜单
	$(".nav li").hover(function() {
		$(this).children('.nav-menu').show();
	}, function() {
		$(this).children('.nav-menu').hide();
	});
	$(".goods-list li").click(function() {
		var addr=$(this).text();
		$(this).parent().hide();
		$(".goods-add").text(addr);
		$(".goods-inp").val(addr);
	})
	//菜单导航
	$(".menu-list li").hover(function() {
		$(this).children('.menu-nav').addClass('active')
		$(this).children('.menu-con').show();
	}, function() {
		$(this).children('.menu-nav').removeClass('active')
		$(this).children('.menu-con').hide();
	});
	//商品计算
	//数量只能为整数
	var kc=120;//库存
   	$('.p-input').blur(function() {
   		var tt=$(this).val();
 		var telReg = /^[1-9]*[1-9][0-9]*$/;
   		if (!telReg.test(tt)) {
   			// alert("只能为整数");
   			$(this).val(1);
   		}else{
   			if (parseInt(tt)>=kc) {
   				$(this).val(kc);
   				$(this).siblings('.p-decrease').addClass('active');
   			};
   			if (parseInt(tt)==1) {
				$(this).siblings('.p-decrease').removeClass('active');
   			};
   		}
   	});
   	//商品加
	$(".p-add").click(function() {
		var t=$(this).siblings('.p-input');
		var nub=parseInt(t.val());
		if (nub>=1 && nub<kc) {
			t.val(nub+1);
			$(this).siblings('.p-decrease').addClass('active');
		}else{
			console.log("已经达到最大库存");
		};
	});
	//商品减
	$(".p-decrease").click(function() {
		var t=$(this).siblings('.p-input');
		var nub=parseInt(t.val());
		if(nub>1){
			t.val(nub-1);
			console.log(nub)
			if (nub-1==1) {
				$(this).removeClass('active');
			};
		}else{
			console.log("最小为1");
		}
	});
	//产品列表页面
	//左侧菜单
	$(".cat-dt").click(function() {
		var par=$(this).parent("li");
		if (par.hasClass('active')) {
			par.removeClass('active');
		}else{
			par.addClass('active');
		};
	});
	//展开与收回
	$(".skin-open").click(function() {
		var ski=$(".skin-pp");
		if (ski.hasClass('active')) {
			ski.removeClass('active');
			$(this).html("展开<i></i>");
		}else{
			ski.addClass('active');
			$(this).html("收回<i class='on'></i>");
		};
	});
	//遮罩层
	var pop=$(".pop");
	function pop1 () {
		pop.show();
		$('body').css("overflow","hidden");
	}
	function pop0 () {
		pop.hide();
		$('body').css("overflow","auto");
	}
	//点击遮罩层关闭弹出层
	$(".pop").click(function() {
		pop0();
		$(".popup").hide();
	});
	//登陆弹出
	var land=$(".land");
	$(".btn-land").click(function() {
		if (land.hasClass('active')) {
			land.removeClass('active');
			 pop0();
		}else{
			land.addClass('active');
			pop1();
		};
	});
	$(".land-gb").click(function() {
		land.removeClass('active');
		pop0();
	});
	$(".coll-con li").hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});
	//全选
	$(".jdcheckbox").click(function() {
		if ($(this).prop('checked')==true) {
			$(".jdcheck,.jdcheckbox").prop('checked', true);;
		}else{
			$(".jdcheck,.jdcheckbox").prop('checked', false);
		};
	});
	//单选
	$(".jdcheck").click(function() {
		var index=$(".jdcheck").length;
		var index2;
		if ($(this).prop('checked')==true) {
			$(this).addClass('act');
			index2=$(".act").length;
		}else{
			$(this).removeClass('act');
			$(".jdcheckbox").prop('checked', false);
			index2=$(".act").length;
		};
		console.log("3")
		if (index2==index) {
			console.log("1")
			$(".jdcheckbox").prop('checked', true);
		}else{
			console.log("1")
			$(".jdcheckbox").prop('checked', false);;
		};
	});
	//商品数量 +
	$(".increment").click(function() {
		var t=$(this).siblings('.itxt');
		var nub=parseInt(t.val());
		var kc2=parseInt($(this).parent().siblings().children('.txtd').text());
		var dec=$(this).siblings(".decrement");
		console.log(nub)
		console.log(kc2)
		if (nub>=1 && nub<kc2) {
			t.val(nub+1);
			dec.removeClass('disabled')
		}else{
			alert("已经达到最大库存");
		};
	});
	//商品减
	$(".decrement").click(function() {
		var t=$(this).siblings('.itxt');
		var nub=parseInt(t.val());
		if(nub>1){
			t.val(nub-1);
			if (nub-1==1) {
				$(this).addClass('disabled')
			};
		}else{
			alert("不能少于1");
		}
	});
	//价格小计
	//切换
	tab(".assets-menu li",".assets-con>div");//资产佣金tab
	tab(".order-menu li",".order-con>div");//订单tab
	$(".order-con>div").eq(0).show().siblings().hide();
	function tab (tab,con) {
		$(tab).click(function() {
			var index=$(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$(con).eq(index).show().siblings().hide();
		});
	}

	//提现申请
	$(".assets-btn0").click(function() {
		var tx=true;
		// var tx=false;
		if (tx==true) {
			$(".withd").show();
			pop1();
		}else{
			$(".assets-tx").show();
		};
	});
	$(".withd-gb").click(function() {
		$(".withd,.portrait").hide();
		pop0()
	});
	//积分
	$(".red-btn2").click(function() {
		pop1();
		$(".integral").show();
	});
	$(".integral-gb").click(function() {
		$(".pop,.integral").hide();
	});
	$(".modify-user").click(function() {
		pop1();
		$(".portrait").show();
		console.log("SA")
	});
	$(".por-btn2").click(function() {
		$(".portrait").hide();
		pop0();
	});
	//评价
	$(".order-pj").click(function() {
		$(".evaluate").show();
		pop1();
	});
	$(".eval-gb").click(function() {
		$(".evaluate").hide();
		pop0();
	});
	$(".eval-xx span").click(function() {
		var index=$(this).index();
		console.log(index);
		$(this).siblings('i').children('em').text(index+1);
		$(this).addClass('on').nextAll("span").removeClass('on');
		$(this).prevAll("span").addClass('on');
	});
	//上传图片
	$(".file-in input").change(function() {
		var src=$(this).attr('name');
		console.log(src);
		$("portrait-img img").attr('src', src);
		/* Act on the event */
	});
	//我的收藏 删除
	$(".coll-gb").click(function() {
		$(this).parent().remove()
	});
	//删除筛选条件
	$(".skin-cond li").click(function() {
		$(this).remove();
	});
	$(".skin-qc").click(function() {
		$(this).siblings("ul").children().remove();
	});
	//申请成功
	$(".wit2").click(function() {
		alert("申请成功");
		$(".withd").hide();
		pop0()
	});
	//跟踪
	$(".order-gz").hover(function() {
		$(this).children('.track').show();
	}, function() {
		$(this).children('.track').hide();
	});
	//获取短信验证码
	var validCode=true;
	$(".hqyz").click (function () {
		var time=5;
		var code=$(this);
		// code.html(time+"秒");
		if (validCode) {
			validCode=false;
			code.html(time+"秒")
		var t=setInterval(function  () {
			time--;
			code.html(time+"秒");
			if (time==0) {
				clearInterval(t);
				code.html("重新获取");
				validCode=true;
			}
		},1000)
		}
	});
	//收藏
	$(".td-skin-sc").click(function() {
		var ii=$(this).children('i');
		var sp=$(this).children('span');
		if (ii.hasClass('on')) {
			ii.removeClass('on');
			sp.text('加入收藏');
		}else{
			ii.addClass('on');
			sp.text('已收藏');
		};
	});
	//位置列表
	$(".crumb").hover(function() {
			$(this).addClass('drop');
			$(this).children('.ropdown-list').show();
	}, function() {
		$(this).removeClass('drop');
			$(this).children('.ropdown-list').hide();
	});


});