///**
// * Created by huchunyuan on 16/4/3.
// */
//window.onload = initLinks
//var pageCount = new Array(0,0,0,0);
//function initLinks(){
//    for (var i=0;i<document.links.length;i++){
//        document.links[i].onclick = writeContent
//        document.links[i].thisPage = i+1;
//    }
//}
//function writeContent(){
//    pageCount[this.thisPage]++
//
//    var newText = "<h1>You are now looking at Example" + this.thisPage
//    newText += ".<br>You have been to this page"
//    newText += pageCount[this.thisPage] + "times.<\/h1>"
//
//    document.getElementById("icontent").contentWindow.document.body.innerHTML = newText
//    return false
//}
var bannerArray = new Array("images/redBanner.gif", "images/greenBanner.gif", "images/blueBanner.gif");
window.onload = initLinks;
function initLinks() {
    for (var i=0; i<parent.document.links.length; i++) {
        parent.document.links[i].onclick = setBanner;
    }
    setBanner();
}
function setBanner() {
    var randomNum = Math.floor(Math.random() * bannerArray.length);
    parent.document.getElementById("adBanner").src = bannerArray[randomNum];
    return false;
}