$(function(){
	hover($('.top_xiaapp'),$('.top_kehuduan'))
	function hover(obj1,obj2){
		obj1.hover(function() {
		obj2.show();
		}, function() {
			var timer=null;
			clearTimeout(timer);
			timer=setTimeout(function(){
				obj2.hide();
			},200)
			obj2.hover(function(){
				clearTimeout(timer)
			},function(){	
				obj2.hide();
			});
			obj1.hover(function(){
				clearTimeout(timer);
			})
		});
	}
	$('.nav_lnav').each(function(i,element){
		hover($('.nav_lnav').eq(i),$('.nav_snav').eq(i))
	})
	$('.nav_ul').append($('.nav_ul').html());
	/*alert($('.nav_ul li:eq(0)')*$('.nav_ul').length)*/
	$('.nav_ul').css('width',$('.nav_ul li:eq(0)').width()*$('.nav_ul li').length)
	var now=0;
	var timer=null;
	function move(){
		timer=setInterval(function(){
			tab($('.nav_ul'),$('.nav_ul li'));
		},5000)
	}
	move();
	function tab(obj1,obj2){
		now++;
		obj1.stop().animate({marginLeft:-960*now},function(){
			if (now==obj2.length-1) {
				now=obj2.length/2-1;
				obj1.css({marginLeft:-obj1.width()/2+obj2.width()})
			};
		})
	}
	$('.nav_ul').hover(function(){
		clearInterval(timer)
	},function(){
		move();
	})
	$('.nav_huan').hover(function(){
		clearInterval(timer);
		$('.nav_huan').unbind('click');
		$('.nav_huan').bind('click',function(){
				tab($('.nav_ul'),$('.nav_ul li'));
			})
	},function(){
		move();
	});
	$('.nav_gai').hover(function(){
		clearInterval(timer);
		$('.nav_gai').unbind('click');
		$('.nav_gai').bind('click',function(){
			if (now==0) {
				now=$('.nav_ul li').length/2;
				$('.nav_ul').css({marginLeft:-$('.nav_ul').width()/2})
			};
			now--;
			$('.nav_ul').stop().animate({marginLeft:-960*now},function(){
			})
		})
	},function(){
		move();
	});
})
