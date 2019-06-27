// function clearActivClasses() {
//     document.querySelectorAll('.main > *').forEach(function (elemet) {
//         elemet.classList.remove('active');
//     });
// }
//
// document.querySelectorAll('.navbar-collapse ul li a').forEach(function (el) {
//     el.onclick = function () {
//         clearActivClasses();
//         var clickHead = this.getAttribute('href');
//         var activAnchor = document.querySelector(clickHead).nextElementSibling;
//         activAnchor.classList.add('active')
//     }
// });

$(document).ready(function () {
    $('.navbar-collapse ul li a').click(function () {
        $('.main > *').removeClass('active');
        var clickHead = $(this).attr('href');
        $(clickHead).next().addClass('active');
    });
});