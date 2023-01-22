var arr=["#39c5bb","#f14747","#f1a247","#f1ee47","#b347f1","#1edbff","#ed709b","#5636ed"]

var idx = 0;

function changeColor(){
    if(document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark'){
        document.getElementById("site-name").style.textShadow = arr[idx] + " 0 0 20px";
        document.getElementById("site-title").style.textShadow = arr[idx] + " 0 0 20px";
        document.getElementById("site-subtitle").style.textShadow = arr[idx] + " 0 0 20px";
        document.getElementsByClassName("author-info__name")[0].style.textShadow = arr[idx] + " 0 0 15px";
        document.getElementsByClassName("author-info__description")[0].style.textShadow = arr[idx] + " 0 0 15px";
        idx++;
        if(idx == 8){
            idx == 0;
        }
    }else {
        document.getElementById("site-name").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        document.getElementById("site-title").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        document.getElementById("site-subtitle").style.textShadow = "#1e1e1ee0 1px 1px 1px";
        document.getElementsByClassName("author-info__name")[0].style.textShadow = "";
        document.getElementsByClassName("author-info__description")[0].style.textShadow = "";
    }
}

window.setInterval(changeColor,1200);