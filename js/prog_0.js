var highscore = 0;
var score=0;
var tout=0;

var padlo = 350;
var teto = 0;

var a0_top=teto;
var a0_step = 1;
var a0_speed = 10;



var wool_top=teto;
var wool_step = 2;
var wool_speed = 10;	

var paper_top=teto;
var paper_step = 2;
var paper_speed = 20;
	
var bottle_top=teto;
var bottle_step = 4;
var bottle_speed = 10;
	
var plastic_top=teto;
var plastic_step = 4;
var plastic_speed = 5;
	
var can_top=teto;
var can_step = 4;
var can_speed = 30;
		
var nylon_top=teto;
var nylon_step = 4;
var nylon_speed = 20;
		
var milk_top=teto;
var milk_step = 4;
var milk_speed = 15;



// detection---------------------------------------------------------------------------------------------

function main_start(){
console.log("Started");
document.getElementById("start_button").style.visibility ="hidden" ;
document.getElementById("info_button").style.visibility ="hidden" ;
document.getElementById("version_button").style.visibility ="hidden" ;
//a0_fall();

wool_fall();
paper_fall();
bottle_fall();
plastic_fall();
can_fall();
nylon_fall();
milk_fall();

//alert("hello");
setTimeout("vege()" ,60000) ;
	}


screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + screen.orientation);
});

function detect(){


    console.log("start");
	}


// fall -----------------------------------------------------------------------------------------------------------------------------
function a0_fall() {
	console.log("Things going down!");
random_t();
random_x('a0');
setTimeout('a0_action()',tout);
unhide('a0');
}

function wool_fall() {
random_t();
random_x('wool');
setTimeout('wool_action();',tout);
unhide('wool');
}
function paper_fall() {
random_t();
random_x('paper');
setTimeout('paper_action();',tout);
unhide('paper');
}
function bottle_fall() {
random_t();
random_x('bottle');
setTimeout('bottle_action()',tout);
unhide('bottle');
}
function plastic_fall() {
random_t();
random_x('plastic');
setTimeout('plastic_action()',tout);
unhide('plastic');
}
function can_fall() {
random_t();
random_x('can');
setTimeout('can_action()',tout);
unhide('can');
}
function nylon_fall() {
random_t();
random_x('nylon');
setTimeout('nylon_action()',tout);
unhide('nylon');
}
function milk_fall() {
random_t();
random_x('milk');
setTimeout('milk_action()',tout);
unhide('milk');
}

// action----------------------------------------------------------------------------------------------------------------------------

function a0_action(){
if (padlo > a0_top){
  document.getElementById("a0" ).style.top  = a0_top +'px'; 
  a0_top= a0_top + a0_step;
  setTimeout('a0_action()',a0_speed);
}	
else{a0_top  = teto ;
a0_fall();
}
}

function wool_action(){
if (padlo > wool_top){
  document.getElementById("wool").style.top  = wool_top +'px'; 
  wool_top= wool_top + wool_step;
  setTimeout('wool_action()',wool_speed);
}	
else{wool_top  = teto ;
wool_fall();
}
}
function paper_action(){
if (padlo > paper_top){
  document.getElementById("paper").style.top  = paper_top +'px'; 
  paper_top= paper_top + paper_step;
  setTimeout('paper_action()',paper_speed);
}	
else{paper_top  = teto ;
paper_fall();
}
}
function bottle_action(){
if (padlo > bottle_top){
  document.getElementById("bottle").style.top  = bottle_top +'px'; 
  bottle_top= bottle_top + bottle_step;
  setTimeout('bottle_action()',bottle_speed);
}	
else{bottle_top  = teto ;
bottle_fall();
}
}
function plastic_action(){
if (padlo > plastic_top){
  document.getElementById("plastic").style.top  = plastic_top +'px'; 
  plastic_top= plastic_top + plastic_step;
  setTimeout('plastic_action()',plastic_speed);
}	
else{plastic_top  = teto ;
plastic_fall();
}
}

function can_action(){
if (padlo > can_top){
  document.getElementById("can").style.top  = can_top +'px'; 
  can_top= can_top + can_step;
  setTimeout('can_action()',can_speed);
}	
else{can_top  = teto ;
can_fall();
}
}
function nylon_action(){
if (padlo > nylon_top){
  document.getElementById("nylon").style.top  = nylon_top +'px'; 
  nylon_top= nylon_top + nylon_step;
  setTimeout('nylon_action()',nylon_speed);
}	
else{nylon_top  = teto ;
nylon_fall();
}
}
function milk_action(){
if (padlo > milk_top){
  document.getElementById("milk").style.top  = milk_top +'px'; 
  milk_top= milk_top + milk_step;
  setTimeout('milk_action()',milk_speed);
}	
else{milk_top  = teto ;
milk_fall();
}
}
	
function random_x(x){
	console.log("generating random x axis");
	
var rand1 = Math.random();
var veg1= rand1 * 380 + 50;
console.log(veg1);
document.getElementById(x).style.left = Math.floor(veg1)+'px';
}
	
	
	
function random_t(){
	console.log("generating delay");
var rand1t = Math.random();
var veg1t= rand1t * 3000;
tout = Math.floor(veg1t);
console.log(tout);
}





function hide(x){
	console.log("a0 hitt");
document.getElementById(x).style.visibility ="hidden" ;
adding(x);
}

function unhide(x){
document.getElementById(x).style.visibility ="visible" ;
}



function vege(){
//alert(highscore);	
document.getElementById("end_div").style.visibility="visible" ;
document.getElementById("score_count_tit").innerHTML = score;
document.getElementById("wool_div").style.visibility ="hidden" ;
document.getElementById("paper_div").style.visibility ="hidden" ;
document.getElementById("nylon_div").style.visibility ="hidden" ;
document.getElementById("can_div").style.visibility ="hidden" ;
document.getElementById("bottle_div").style.visibility ="hidden" ;
document.getElementById("plastic_div").style.visibility ="hidden" ;
document.getElementById("milk_div").style.visibility ="hidden" ;


}


function info(){
//alert(highscore);	
document.getElementById("info_div").style.visibility="visible" ;


}


function version(){
//alert(highscore);	
document.getElementById("version_div").style.visibility="visible" ;


}


function reload_this(){
	location.reload();
	}
	

function adding(x){
var incoming = parseInt(document.getElementById(x).alt);
highscore= highscore+ incoming;
if (incoming >= -9 ){
	//alert("eeee");
score= score + incoming;
}
if (incoming < -9 ){
	//alert("nnn");
score= score - incoming;	
	}
	
		document.getElementById("counter").innerHTML= score ;
	
	}
	
	
function title_show(x){
	console.log("a0 hitt");
document.getElementById("end_div").style.visibility ="hidden" ;
document.getElementById(x).style.visibility ="visible" ;
adding(x);
}
