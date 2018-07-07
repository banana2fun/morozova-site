function clearActivClasses() {
    document.querySelectorAll('.main > *').forEach(function (elemet) {
        elemet.classList.remove('active');
    });
}

document.querySelectorAll('.head ul li a').forEach(function (el) {
    el.onclick = function () {
        clearActivClasses();
        var clickHead = this.getAttribute('href');
        var activAnchor = document.querySelector(clickHead).nextElementSibling;
        activAnchor.classList.add('active')
    }
});