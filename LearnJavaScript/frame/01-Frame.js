/**
 * Created by huchunyuan on 16/4/3.
 */
window.onload = initAll
function initAll(){
     if (top.location != self.location){
         top.location.replace(self.location)
     }
}