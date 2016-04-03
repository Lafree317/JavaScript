/**
 * Created by huchunyuan on 16/3/31.
 */
window.onload = initAll;
function initAll(){
    document.getElementById("redirect").onclick = initRedirect;
}
function initRedirect(){
    window.location = "04-LinkTo.html"
    return false
}