

//此种方式得到li，但是当鼠标放上去，浮层会反复闪烁
$('#follow>li:nth-child(1)').mouseenter(function (){
    follow1.style.display = "block";
});
$('#follow>li:nth-child(1)').mouseleave(function (){
    follow1.style.display = "none";
});
$('#follow>li:nth-child(3)').mouseenter(function (){
    follow2.style.display = "block";
});
$('#follow>li:nth-child(3)').mouseleave(function (){
    follow2.style.display = "none";
});