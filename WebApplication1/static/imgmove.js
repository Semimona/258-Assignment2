var leftbun = document.getElementById("left_btn");
var rightbun = document.getElementById("right_btn");
var img1 = document.getElementById("img1");

var srclist=["/image/picture6.jpg","/image/picture7.jpg"];
var i = 0;
//下一个图片，修改图片路径
function next(){
 img1.setAttribute("src",srclist[i]);
 if(i==srclist.length-1){
  i = 0;
 }else{
  i++;
 }
}
// 前一个图片
function last(){
 if(i==0){
  i = srclist.length-1;
 }else{
  i--;
 }
 img1.setAttribute("src",srclist[i]);
 
}
//定时滚动
var tid = setInterval("next()",1000);
//传入参数
function shouwHidden(opa){
 // 不为0，就停止滚动
 if(opa !=0){
  clearInterval(tid);
 }else{
  tid = setInterval("next()",1000);
 }
 // 透明度，0，完全透明 1，不透明
 leftbun.style.opacity = opa;
 rightbun.style.opacity = opa;
}