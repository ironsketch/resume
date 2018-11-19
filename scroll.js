$(window).scroll(function() {
    var wS = $(this).scrollTop();
    var overviewRect = document.getElementById("overview");
    var goalsRect = document.getElementById("goals");
    var historyRect = document.getElementById("history");

    var overview = $(window).height() - overviewRect.offsetTop;
    var goals = $(window).height() - goalsRect.offsetTop;
    var history = $(window).height() - historyRect.offsetTop;
    console.log("Scroll = " + wS + " window = " + $(window).height() + " ov = " + overview + " g = " + goals + " h = " + history);
    if (wS > historyRect.offsetTop){
        off("overviewLink");
        off("goalsLink");
        botOn();
    } else if (wS > goalsRect.offsetTop){
        off("overviewLink");
        on("goalsLink");
        off("historyLink");
    } else if (wS > overviewRect.offsetTop){
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
