var oPic=['banner1.jpg','banner2.jpg','banner.jpg'];
var oImg=document.getElementById("img");
var i=0;

setInterval(function s1() {
    i=parseInt(Math.random()*3);
    oImg.src="images/"+oPic[i];
    if(i==3){
        i=0;
    }

},2000);

var jj=document.getElementById("jj");
var mm=document.getElementById("mm");
var sjx=document.getElementById("sjx");
mm.onclick=function () {
    jj.style.background="none";
    jj.style.color="black";
    mm.style.background="#666666";
    mm.style.color="white";
    sjx.style.left="230px";

}
jj.onclick=function () {
        mm.style.background="none";
        mm.style.color="black";
        jj.style.background="#666666";
        jj.style.color="white";
        sjx.style.left="0px";

    }


    