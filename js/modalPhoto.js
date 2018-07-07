document.querySelectorAll('img').forEach(function (el) {
    el.onclick = function () {
        var imgUrl = this.getAttribute('src');
        var modal = document.querySelector('.modalWindow');
        var modalImg = document.createElement('img');
        modal.innerHTML = '';
        modal.appendChild(modalImg);
        modalImg.setAttribute('src', imgUrl);
        var container = document.querySelector('.modalContainer');
        container.style.display = "block";
    }
});

document.querySelector('.modalContainer').onclick = function (e) {
    if (e.target.classList.contains('modalContainer')) {
        e.target.style.display = "none";
    }
};

