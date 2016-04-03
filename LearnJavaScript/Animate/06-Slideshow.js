/**
 * Created by huchunyuan on 16/4/3.
 */
window.onload = initLinks

var myPix = new Array("images/robot1.jpg","images/robot2.jpg","images/robot3.jpg")
var thisPic = 0;

function initLinks(){
    document.getElementById("prevLink").onclick = precessPrevious
    document.getElementById("nextLink").onclick = processNext;
}
function precessPrevious(){
    if (thisPic == 0){
        thisPic = myPix.length
    }
    thisPic--;
    document.getElementById("myPicture").src = myPix[thisPic];
    return false
}
function processNext(){
    thisPic++
    if(thisPic == myPix.length){
        thisPic = 0
    }
    document.getElementById("myPicture").src = myPix[thisPic];
    return false
}