/**
 * Created by huchunyuan on 16/4/3.
 */
window.onload = initBannerLink
var thisAd = 0;
function rotate(){
    var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");
    thisAd++;
    if (thisAd == adImages.length) {
        thisAd = 0;
    }
    document.getElementById("adBanner").src = adImages[thisAd];
    setTimeout(rotate,3*1000);
}
function initBannerLink(){
    if(document.getElementById("adBanner").parentNode.tagName == "A"){
        document.getElementById("adBanner").parentNode.onclick = newLocation
    }
    rotate()
}
function newLocation(){
    var adUrl = new Array("baidu.com","google.cn","sina.com")
    document.location.href = "http://www." + adUrl[thisAd]
    return false
}