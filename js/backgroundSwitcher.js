var list  = document.querySelectorAll('.main > *');
// test
for (var i = 0; i < list.length; i++) {
    var elemet = list[i];
    if (elemet.classList.contains('active')) {
        elemet.classList.remove('active');
    }
}

