$(document).ready(function() {
	var curIndex = 0;
	var timer = 0;

	var tvName = [{
		title: '麻雀',
		status: '更新至第18集',
		des: '乱世"师生恋",李易峰周冬雨隐忍爱恋为家国,在潜伏中挣扎与蜕变...',
		txt: '自9月5日起每日<em>19:30</em>湖南卫视播出24:00芒果TV全网首播'
	}, {
		title: '青云志',
		status: '更新至第30集',
		des: 'TFBOYS古装亮相惊艳众人!赵丽颖痴恋李易峰,杨紫爱在心头口难开...',
		txt: '每周日24:00免费更新2集<br>[VIP会员]每周一至周四<em>20:00</em>更新一集'
	}, {
		title: '云画月光',
		status: '更新至第8集',
		des: '一个是冷漠的朝鲜王世子,一个是女扮男装入宫的内侍,上演一段爆笑的宫廷罗曼史.',
		txt: '每周二周三<em>03:00</em>芒果TV全网独播',
	}, {
		title: '旋风少女 第2季',
		status: '大结局',
		des: '中秋收官,长安延皓上演终极夺爱之战,冰草夫妇放甜蜜大招!',
		txt: '每周三周四22:00湖南卫视首播<br><em>24:00</em>芒果TV全网独播'
	}, {
		title: '完美假期 第二季',
		status: '正在直播',
		des: '人性大战暗潮汹涌,结盟.战队.叛变.笑脸言和只在一瞬之间...',
		txt: ''
	}, {
		title: '我们来了',
		status: '精彩抢先看',
		des: '奥运冠军强势撩女神!张继科见谢娜秒变迷弟,孙杨空降刘嘉玲摸腹肌!',
		txt: '周五20:00湖南卫视首播<br><em>22:00</em>芒果TV全网首播'
	}, {
		title: '幻城',
		status: '更新至第34集',
		des: '美颜玄幻剧震撼来袭,冯绍峰宋茜领携主演,超强卡司阵容引爆荧屏......',
		txt: '每周一周二22:00湖南卫视首播<br><em>24:00</em>芒果TV全网首播'
	}, {
		title: '美国队长',
		status: '',
		des: '四大男神打的够爽,彭于晏够帅够拽,刘青云够酷够侠,古天乐狗血够狠,吴京打打打停不下来,随便哪个男神都值得一看.',
		txt: ''
	}]

	autoPlay();

//	主图小图标移到上面上时候变化
	$(".banner").hover(function() {
		$(".playIcon").css('opacity', 1);
	}, function() {
		$(".playIcon").css('opacity', 0);
	});

	$("#tvList li").hover(function() {
		clearInterval(timer);
		$(this).addClass('active').siblings().removeClass('active');
		var picList = $(".banner li");
		var len = picList.length;
		var index = $(this).index();
		if(curIndex != index) {
			for(var i = 0; i < len; i++) {
				picList.eq(i).hide();
			}
			$(".banner li").eq(index).fadeIn(200);
			curIndex = index;
		}

		var curTv = tvName[curIndex];
		$(".text .title").text(curTv.title);
		$(".text .status").text(curTv.status);
		$(".text .des").text(curTv.des);
		$(".text .time .txt").html(curTv.txt);
	}, function() {
		autoPlay();
	});
//	自动播放
	function autoPlay() {
		var len = $('.banner li').length;
		timer = setInterval(function() {
			curIndex++;
			if(curIndex >= len) {
				curIndex = 0;
			}
			for(var i = 0; i < len; i++) {
				$(".banner li").eq(i).hide();
			}
			$(".banner li").eq(curIndex).fadeIn('slow');
			$('#tvList li').eq(curIndex).addClass('active').siblings().removeClass('active');
			
			var curTv = tvName[curIndex];
			$(".text .title").text(curTv.title);
			$(".text .status").text(curTv.status);
			$(".text .des").text(curTv.des);
			$(".text .time .txt").html(curTv.txt);
			
		}, 3000);
	}
	
//	按钮点击更换图片
	var tvBar = $(".tvList ul");
	var minX = parseInt(tvBar.parent('div').width() + 480) - tvBar.width();
	$(".leftArrow").click(function(){
		var dir ='';
		if(parseInt(tvBar.offset().left) <= minX){
			$(".leftArrow").removeClass('leftArrow').addClass('rightArrow');
			dir = '+=480px';
		}else{
			dir = '-=480px';
			$(".rightArrow").removeClass('rightArrow').addClass('leftArrow');
		}
		tvBar.animate({marginLeft:dir},'slow');
	});
	$(".rightArrow").click(function(){
		var dir ='';
		if(parseInt(tvBar.offset().left) >=640){
			dir = '-=480px';
			$(".rightArrow").removeClass('rightArrow').addClass('leftArrow');
		}else{
			$(".leftArrow").removeClass('leftArrow').addClass('rightArrow');
			dir = '+=480px';
		}
		tvBar.animate({marginLeft:dir},'slow');
	});
	
    var wid = $(".todayTvList").width();
    var totalWid = $(".todayTvList ul").width();
    var page = parseInt(totalWid/wid);
    var curPage=0;
	$(".todayRight").click(function(){
		$(this).parent().prev('a').addClass('leftCon');
		$(".todayTvList ul").animate({marginLeft:'-='+wid+'px'},'slow');
		curPage++;
		if(curPage >=page-1)
		{
			$(this).parent().removeClass('rightCon');
		}
	});
	$(".todayLeft").click(function(){
		curPage--;
		$(this).parent().next().addClass('rightCon');
		$(".todayTvList ul").animate({marginLeft:'+='+wid+'px'},'slow');
		if(curPage <=0){
			$(this).parent().removeClass('leftCon');
		}
		console.log($(".todayTvList ul").offset().left);
	});
	
	$(".rightTvArrow").click(function(){
		$(this).parent().prev().addClass('leftTvCon');
		$(".goodTv .bigTv").animate({left:'-=1180px'},'slow');
		$(".goodTv .hTvList").animate({left:'-=1180px'},'slow');
		console.log($(".goodTv .bigTv").offset().left);
		if($(".goodTv .bigTv").offset().left <= 202){
			$(this).parent().removeClass('rightTvCon');
		}
	});
	$(".leftTvArrow").click(function(){
		$(this).parent().next().addClass('rightTvCon');
		$(".goodTv .bigTv").animate({left:'+=1180px'},'slow');
		$(".goodTv .hTvList").animate({left:'+=1180px'},'slow');
		console.log($(".goodTv .bigTv").offset().left);
		if($(".goodTv .bigTv").offset().left >= -978){
			$(this).parent().removeClass('leftTvCon');
		}
	});
	
	var conWid = $(".adContainer").width();
	var listWid = $(".adList").width();
	var totaladPage = parseInt(listWid/conWid);
	var curPage = 0;
	$(".rightAdArrow").click(function(){
		curPage++;
		$(this).parent().prev().addClass('leftAdCon');
		$(".adContainer .adList").animate({left:-(conWid*curPage)+'px'},'slow');
		if(curPage >=totaladPage-1){
			$(this).parent().removeClass('rightAdCon');
		}
	});
	$(".leftAdArrow").click(function(){
		curPage--;
		$(this).parent().next().addClass('rightAdCon');
		$(".adContainer .adList").animate({left:-(conWid*curPage)+'px'},'slow');
		if(curPage<=0){
			$(this).parent().removeClass('leftAdCon');
		}
	})
});