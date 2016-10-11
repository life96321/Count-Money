$(function() {
	$(".img_start").on('touchstart', function() {
		$(".grzl").show();
	});
	$(".tjstart").on('touchstart', function() {
		$("#page_two").show();
		$(".grzl").hide();
		bool = true;
	});
	$(".sqb_img").on('touchstart', function() {
		$(".sqb").show();
	});
	$(".hdgz_img").on('touchstart', function() {
		$(".hdgz").show();
	});
	$(".hdjp_img").on('touchstart', function() {
		$(".hdjp").show();
	});
	$(".close").on('touchstart', function() {
		$(".close").parent().hide();
	});
	$(".img_left").on('touchstart', function() {
		window.location.reload();
	});
	$(".img_right").on('touchstart', function() {
		$("#page_four").show();
	});
	$("#page_four").on('touchstart', function() {
		window.location.reload();
	});
	$(".money").on('touchstart', function() {
		add();
		addImg();
	});
});
//----------------------------------------------------------------
var titleTwo = document.querySelector(".title_two");
var arr = ['<img src="../img/p2_txt1.png" class="txt_two" />',
	'<img src="../img/p2_txt2.png" class="txt_two" />',
	'<img src="../img/p2_txt3.png" class="txt_two" />'
];

function rand(min, max) {
	return parseInt(Math.random() * (max - min)) + min;
}
setInterval(function() {
	titleTwo.innerHTML = arr[rand(0, 3)];
}, 1000);
//----------------------------------------------------------------
var spanOne = document.querySelector(".span_one");
var spanTwo = document.querySelector(".span_two");
var spanThree = document.querySelector(".span_three");
var timeone = 0;

function add() {
	timeone++;
	spanThree.innerHTML = timeone;
	if (timeone > 9) {
		timeone = -1;
		add();
		spanTwo.innerHTML++;
	}
}
//----------------------------------------------------------------
var moneyAct = document.querySelector(".money_active");
var newMoney = document.querySelector(".newmoney");
var aMoney = document.querySelector(".money");
var aQiang = document.querySelector(".zhuan_two");
var timers = null;
function addImg() {	
	var newMoney = document.createElement("img");
	newMoney.setAttribute("class", "newmoney");
	newMoney.src = "../img/p2_qian.jpg";
	pageTwo.insertBefore(newMoney, aQiang);
	timers = setInterval(function() {
		var speed = 20;
		speed++;
		if(newMoney.offsetTop<=-1000){
			pageTwo.removeChild(newMoney);
		}
		newMoney.style.top = newMoney.offsetTop - 7 + 'px';
		newMoney.style.width = newMoney.offsetWidth - 2 + "px";
		newMoney.style.opacity = (100 - speed) / 100;
		newMoney.style.marginLeft = (-90) + speed + "px";
	}, 10);
}
//----------------------------------------------------------------
var imgTz = document.querySelector('.img_tz');
var oDjs = document.querySelector(".djs");
var pageTwo = document.querySelector("#page_two");
var pageThree = document.querySelector("#page_three");
setTimeout(function() {
	imgTz.style.display = "block";
}, 1000);
//----------------------------------------------------------------
var bool = false;
function otime() {
	var timer = null;
	var time = 60;
	clearInterval(timer);
	timer = setInterval(function() {
		if (bool) {
			time--;
			oDjs.innerHTML = time;
		}
		if (time < 1) {
			clearInterval(timer);
			clearInterval(timers);
			pageTwo.style.display = "none";
			pageThree.style.display = "block";
		}
	}, 1000);
}
otime();
//----------------------------------------------------------------