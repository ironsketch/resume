$(window).scroll(function() {
    var wS = $(window).scrollTop() / ($(document).height() - window.innerHeight);
    var overviewRect = document.getElementById("overview");
    var goalsRect = document.getElementById("goals");
    var historyRect = document.getElementById("history");

    var overview = overviewRect.offsetTop / $(window).height();
    var goals = goalsRect.offsetTop / $(window).height();
    var history = historyRect.offsetTop / $(window).height();

    console.log("wS = " + wS + " scrll = " + window.pageYOffset + " history = " + history + " docht = " + $(document).height() + " winInnerht = " + ($(document).height() - window.innerHeight));
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
