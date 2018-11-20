$(window).scroll(function() {
    var wS = $(window).scrollTop() / ($(document).height() - window.innerHeight);
    var overviewRect = document.getElementById("overview");
    var goalsRect = document.getElementById("goals");
    var skillsRect = document.getElementById("skills");
    var historyRect = document.getElementById("history");
    var eduRect = document.getElementById("education");
    var awardsRect = document.getElementById("awards");

    var overview = overviewRect.offsetTop / $(window).height();
    var goals = goalsRect.offsetTop / $(window).height();
    var skills = skillsRect.offsetTop / $(window).height();
    var history = historyRect.offsetTop / $(window).height();
    var education = eduRect.offsetTop / $(window).height();
    var awards = awardsRect.offsetTop / $(window).height();

    if (wS > awards){
        off("overviewLink");
        off("goalsLink");
        off("skillsLink");
        off("historyLink");
        off("educationLink");
        botOn();
    } else if (wS > education){
        off("overviewLink");
        off("goalsLink");
        off("skillsLink");
        off("historyLink");
        on("educationLink");
        off("awardsLink");
    } else if (wS > history){
        off("overviewLink");
        off("goalsLink");
        off("skillsLink");
        on("historyLink");
        off("educationLink");
        off("awardsLink");
    } else if (wS > skills){
        off("overviewLink");
        off("goalsLink");
        on("skillsLink");
        off("historyLink");
        off("educationLink");
        off("awardsLink");
    } else if (wS > goals){
        off("overviewLink");
        on("goalsLink");
        off("skillsLink");
        off("historyLink");
        off("educationLink");
        off("awardsLink");
    } else if (wS > overview){
        topOn();
        off("goalsLink");
        off("skillsLink");
        off("historyLink");
        off("educationLink");
        off("awardsLink");
    } else if (wS > 0){
        off("overviewLink");
        off("goalsLink");
        off("skillsLink");
        off("historyLink");
        off("educationLink");
        off("awardsLink");
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
    document.getElementById("awardsLink").style.backgroundColor = "#4ab274";
    document.getElementById("awardsLink").style.color = "#000000";
    document.getElementById("awardsLink").style.borderTopLeftRadius = "0px";
    document.getElementById("awardsLink").style.borderTopRightRadius = "0px";
    document.getElementById("awardsLink").style.borderBottomLeftRadius = "10px";
    document.getElementById("awardsLink").style.borderBottomRightRadius = "10px";
}
