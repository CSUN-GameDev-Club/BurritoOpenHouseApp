// let pageLeftOn = "";

$('#navbar').on('click', 'a', function (e) {

    // 'this' is the clicked anchor
    var text = this.text;
    var href = this.href;
    //   alert(text);       
    if (this.text == "About") {
        document.getElementById("Welcome").style.display = "none";
        // document.getElementById("about").style.visibility = "visible";
        document.getElementById("about").style.display = "block";
        document.getElementById("Meet the Team").style.display = "none";
        document.getElementById("Credits").style.display = "none";
        // pageLeftOn = "A";
        $('#about')
    }
    else if (this.text == "Home" || this.text == "Project Burrito") {
        document.getElementById("Welcome").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("Meet the Team").style.display = "none";
        document.getElementById("Credits").style.display = "none";
        // pageLeftOn = "H";
    }
    else if (this.text == "Meet The Team") {
        document.getElementById("Welcome").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Meet the Team").style.display = "block";
        document.getElementById("Credits").style.display = "none";
        // pageLeftOn = "H";
    }
    else if (this.text == "Credits") {
        document.getElementById("Welcome").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("Meet the Team").style.display = "none";
        document.getElementById("Credits").style.display = "block";
        // pageLeftOn = "H";
    }


    // here add to local storage;

});

document.addEventListener('DOMContentLoaded', function (e) {
    document.getElementById("about").style.display = "none";
    document.getElementById("Meet the Team").style.display = "none";
    document.getElementById("Credits").style.display = "none";
    // if(pageLeftOn == "A")
    // {
    //     document.getElementById("Welcome").style.display = "none";
    // }
    // else
    // {
    //     document.getElementById("about").style.display = "none";
    //     document.getElementById("Welcome").style.display = "block";
    // }
       
});
