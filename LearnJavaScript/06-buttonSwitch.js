/**
 * Created by huchunyuan on 16/4/1.
 */
window.onload = initAll
function initAll(){
    document.getElementById("Lincoln").onclick = saySometing
    document.getElementById("Kennedy").onclick = saySometing
    document.getElementById("Nixon").onclick = saySometing
}
function saySometing() {
    switch (this.id) {
        case "Lincoln":
            alert("Four score and seven years ago...");
            break
        case "Kennedy":
            alert("Ask not what your country can do for you...")
            break
        case "Nixon":
            alert("I am not a crook!")
            break
        default:
    }
}