function colors(){
    var colorArr = ["#c0cad8", "#deeabb", "#c3b1dd", "#35b0cf"];
    document.body.style.backgroundColor = colorArr[Math.floor(Math.random() * 3)];
}
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
        off("overviewLink", "h1overview");
        off("goalsLink", "h1goals");
        off("skillsLink", "h1skills");
        off("historyLink", "h1history");
        off("educationLink", "h1education");
        botOn();
    } else if (wS > education){
        off("overviewLink", "h1overview");
        off("goalsLink", "h1goals");
        off("skillsLink", "h1skills");
        off("historyLink", "h1history");
        on("educationLink", "h1education");
        off("awardsLink", "h1awards");
    } else if (wS > history){
        off("overviewLink", "h1overview");
        off("goalsLink", "h1goals");
        off("skillsLink", "h1skills");
        on("historyLink", "h1history");
        off("educationLink", "h1education");
        off("awardsLink", "h1awards");
    } else if (wS > skills){
        off("overviewLink", "h1overview");
        off("goalsLink", "h1goals");
        on("skillsLink", "h1skills");
        off("historyLink", "h1history");
        off("educationLink", "h1education");
        off("awardsLink", "h1awards");
    } else if (wS > goals){
        off("overviewLink", "h1overview");
        on("goalsLink", "h1goals");
        off("skillsLink", "h1skills");
        off("historyLink", "h1history");
        off("educationLink", "h1education");
        off("awardsLink", "h1awards");
    } else if (wS > overview){
        topOn();
        off("goalsLink", "h1goals");
        off("skillsLink", "h1skills");
        off("historyLink", "h1history");
        off("educationLink", "h1education");
        off("awardsLink", "h1awards");
    } else if (wS > 0){
        off("overviewLink", "h1overview");
        off("goalsLink", "h1goals");
        off("skillsLink", "h1skills");
        off("historyLink", "h1history");
        off("educationLink", "h1education");
        off("awardsLink", "h1awards");
    }
});
function off(name, name2){
    document.getElementById(name).style.backgroundColor = "";
    document.getElementById(name).style.color = "#ffffff";
    if (document.getElementById(name2).classList.contains("tracking-in-expand")){
        document.getElementById(name2).classList.remove("tracking-in-expand");
    }
}
function on(name, name2){
    document.getElementById(name).style.backgroundColor = "#4ab274";
    document.getElementById(name).style.color = "#000000";
    document.getElementById(name2).classList.add("tracking-in-expand");
}
function topOn(){
    document.getElementById("overviewLink").style.backgroundColor = "#4ab274";
    document.getElementById("overviewLink").style.color = "#000000";
    document.getElementById("overviewLink").style.borderTopLeftRadius = "10px";
    document.getElementById("overviewLink").style.borderTopRightRadius = "10px";
    document.getElementById("h1overview").classList.add("tracking-in-expand");
}
function botOn(){
    document.getElementById("awardsLink").style.backgroundColor = "#4ab274";
    document.getElementById("awardsLink").style.color = "#000000";
    document.getElementById("awardsLink").style.borderTopLeftRadius = "0px";
    document.getElementById("awardsLink").style.borderTopRightRadius = "0px";
    document.getElementById("awardsLink").style.borderBottomLeftRadius = "10px";
    document.getElementById("awardsLink").style.borderBottomRightRadius = "10px";
    document.getElementById("h1awards").classList.add("tracking-in-expand");
}
