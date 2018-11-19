$(window).scroll(function() {
    var wS = $(this).scrollTop();
    overViewRect = document.getElementById("overview").getBoundingClientRect();
    goalsRect = document.getElementById("goals").getBoundingClientRect();
    historyRect = document.getElementById("history").getBoundingClientRect();
    var overview = $(window).height() - overViewRect.height - 500;
    var goals = $(window).height() - goalsRect.height - 500;
    var history = $(window).height() - historyRect.height - 500;
    if (wS > history){
        off("overviewLink");
        off("goalsLink");
        botOn();
    } else if (wS > goals){
        off("overviewLink");
        on("goalsLink");
        off("historyLink");
    } else if (wS > overview){
        topOn();
        off("goalsLink");
        off("historyLink");
    }
});
function off(name){
    document.getElementById(name).style.backgroundColor = "";
    document.getElementById(name).style.color = "#ffffff";
}
function on(name){
    document.getElementById(name).style.backgroundColor = "#4ab274";
    document.getElementById(name).style.color = "#000000";
}
function topOn(){
    document.getElementById("overviewLink").style.backgroundColor = "#4ab274";
    document.getElementById("overviewLink").style.color = "#000000";
    document.getElementById("overviewLink").style.borderTopLeftRadius = "10px";
    document.getElementById("overviewLink").style.borderTopRightRadius = "10px";
}
function botOn(){
    document.getElementById("historyLink").style.backgroundColor = "#4ab274";
    document.getElementById("historyLink").style.color = "#000000";
    document.getElementById("historyLink").style.borderTopLeftRadius = "0px";
    document.getElementById("historyLink").style.borderTopRightRadius = "0px";
    document.getElementById("historyLink").style.borderBottomLeftRadius = "10px";
    document.getElementById("historyLink").style.borderBottomRightRadius = "10px";
}
