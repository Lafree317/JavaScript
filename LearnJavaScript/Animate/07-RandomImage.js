/**
 * Created by huchunyuan on 16/4/3.
 */
window.onload = choosePic

var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg")
var thisAd = 0

function choosePic(){

    var randomNum = Math.floor((Math.random() * myPix.length))
    document.getElementById("myPicture").src = myPix[thisAd]
    rotate()
}
function rotate(){
    thisAd++
    if(thisAd == myPix.length){
        thisAd = 0
    }
    document.getElementById("myPicture").src = myPix[thisAd]
    setTimeout(rotate,3*100);
}