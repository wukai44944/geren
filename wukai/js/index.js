$(function(){
	hover($('.top_fist'),$('.top_fist_fist'),$('.top_two_tow'),$('.top_two'));
	hover($('.top_two'),$('.top_two_tow'),$('.top_fist_fist'),$('.top_fist'))
	function hover(obj1,obj2,obj3,obj4){
		obj1.hover(function(){
			obj2.show(300)
			var timer=null;
			var disY=0;
			var left111=obj4.offset().left
			if (Math.abs(disY)<=2 && obj2.position().top-($(document).height())/2>=0) {
					return;
				}
			clearInterval(timer);
			timer=setInterval(function(){
				disY+=1;
				obj2.css('top',obj2.position().top+disY)
				if (obj2.position().top>=($(document).height())/2) {
					disY*=-0.8;
				}
				if (obj2.position().top-($(document).height())/2>=0 && obj3.position().top-($(document).height())/2>=0) {
					if (obj2.position().left>obj3.position().left) {
						obj3.stop().animate({left:200})
					}else{
						obj3.stop().animate({left:left111+150})
					}
				}
				if (Math.abs(disY)<=1 && obj2.position().top-($(document).height())/2>=0) {
					clearInterval(timer);
				}
			},30)
		})
	}
	mouseover($('.top_fist_fist'),$('.top_content'),$('.top_content a'))
	mouseover($('.top_two_tow'),$('.top_content_one'),$('.top_content_one a'))
	function mouseover(obj1,obj2,obj3){
		obj1.mouseover(function(){
			if (obj1.offset().top>=$(document).height()/2) {
				obj2.css({left:(obj1.offset().left-parseInt(obj2.css('width'))/2)+parseInt(obj1.css('width'))/2,top:obj1.offset().top-parseInt(obj2.css('height'))/2+parseInt(obj1.css('height'))/2});
				obj3.show(300);
				/*obj3.animate({opacity:1})*/
			}
		});
	};
	$('.top_fist_fist').mouseover(function(){
					$('.top_content a').each(function(i,element){
						move($('.top_content'),$('.top_content a').eq(i),360*i/($('.top_content a').length));
						
					})
				})
	function move(obj1,obj2,n){
		var start=0;
		var dis=n-start;
		var count=Math.round(700/30);
		var l=0;
		clearInterval(obj2.timer);
		obj2.tiemr=setInterval(function(){
				l++;
			if (l>=count) {
				return;
				clearInterval(obj2.timer)
			}
			var a=1-l/count;
			var cur=start+dis*(1-a*a*a);
			setPos(obj1,obj2,cur);
			
		},30)
	}
	$('.top_two_tow').mouseover(function(){
		$('.top_content_one a').each(function(i,element){
			move($('.top_content_one'),$('.top_content_one a').eq(i),360*i/($('.top_content_one a').length));
		})
	})
	function setPos(obj1,obj2,n){
		obj2.css({left:obj1.width()/2+Math.sin(n*Math.PI/180)*obj1.width()/2-obj2.width()/2+'px',
				top:obj1.height()/2-Math.cos(n*Math.PI/180)*obj1.height()/2-obj2.height()/2+'px',
				})
		/*alert(obj1.offset().left+obj1.width()/2+Math.sin(n*Math.PI/180)*obj1.width()/2+'px')*/
	};
	show($('.top_fist_fist'),$('.top_content a'));
	show($('.top_two_tow'),$('.top_content_one a'));
	function show(obj1,obj2){
		obj1.mouseout(function(){
		obj1.timer=null;
		//clearInterval(timer)
			obj1.timer=setTimeout(function(){
				obj2.hide(300);
			},100)
			obj2.mouseover(function(){
				clearTimeout(obj1.timer);
				clearTimeout(obj2.timer);
			})
		});
	};
	hide($('.top_content a'),$('.top_fist_fist'));
	hide($('.top_content_one a'),$('.top_two_tow'));
	function hide(obj1,obj2){
		obj1.mouseout(function(){
		obj1.timer=null;
		//clearInterval(timer)
			obj1.timer=setTimeout(function(){
				obj1.hide(300);
			},100)
			obj2.mouseover(function(){
				clearTimeout(obj1.timer);
				clearTimeout(obj2.timer);
			})
		});
	}
	/*$('.top_content').mouseover(function(){
		$(this).css('display','block')
		$('.top_content a').animate({opacity:'1'})
	});
	$('.top_content a').hover(function(){
		$('.top_content').css('display','block');
		$('.top_content a').animate({opacity:'1'})
	},function(){
		$('.top_content').mouseover(function(){
			$(this).css('display','block')
			$('.top_content a').animate({opacity:'1'})
			return;
		});
		$('.top_content').css('display','none');
		
	})*/
	shang($('.top_fist'),$('.top_fist_one'),$('.top_fist span'));
	shang($('.top_two'),$('.top_fist_tow'),$('.top_two span'));
	function shang(obj1,obj2,obj3){
		obj1.hover(function(){
			obj2.stop().animate({top:'0'},function(){
				obj1.css({borderColor:'#58ca7e'});
				obj3.css('color','#fff');
			});
		},function(){
			obj2.stop().animate({top:35},function(){
				obj1.css({borderColor:'#fff'});
				obj3.css('color','#ccc');
			});
		});
	}
	/*var H=$('.count a img').height();*/
	/*console.log(H)*/
	$(document).mousemove(function(ev){
		
		for (var i = 0; i < $('.count a img').length; i++) {
			var X=ev.pageX;
			var Y=ev.pageY;
			var a=$('.count a img').eq(i).offset().left-X+parseInt($('.count a img').eq(i).width())/2;
			var b=$('.count a img').eq(i).offset().top-Y+parseInt($('.count a img').eq(i).height())/2;
			var s=Math.sqrt(a*a+b*b);
			
			var dis=1-s/300;
			if (dis<0.5) {
				dis=0.5
			}
			
			$('.count a img').eq(i).css({width:dis*130,marginTop:-$('.count a img').eq(i).height()})
		}
	})
})