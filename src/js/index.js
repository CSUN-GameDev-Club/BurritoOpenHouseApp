$('#navbar').on('click', 'a', function (e) {

    // 'this' is the clicked anchor
    var text = this.text;
    var href = this.href;
    //   alert(text);       
    if (this.text == "About") {
        document.getElementById("Welcome").style.display = "none";
        // document.getElementById("about").style.visibility = "visible";
        document.getElementById("about").style.display = "block";
        $('#about')
    }
    else if (this.text == "Home") {
        document.getElementById("Welcome").style.display = "block";
        document.getElementById("about").style.display = "none";
    }


    // here add to local storage;

});

document.addEventListener('DOMContentLoaded', function (e) {
    document.getElementById("about").style.display = "none";
});
