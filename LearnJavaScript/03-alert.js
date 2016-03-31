
/**
 * Created by huchunyuan on 16/3/31.
 */
alert("Welcome to my JavaScript page!")
// 直接提示框 然后根据点击yes 或no 进行处理
//if(confirm("Are you sure you want to do that?")){
//    alert("You said yes");
//}else {
//    alert("you said no");
//}

var ans = prompt("Are you sure you want to do that?","")
if (ans) {
    alert("You said" + ans)

}else {
    alert("You refused to answer")

}