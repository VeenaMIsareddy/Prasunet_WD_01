// Change navbar style on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#cc00cc";
    } else {
        document.getElementById("navbar").style.backgroundColor = "#4d004d";
    }
}
