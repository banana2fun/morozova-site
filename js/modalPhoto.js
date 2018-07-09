document.querySelectorAll('.photo').forEach(function (el) {
    el.onclick = function () {
        // console.log(this);
        var imgUrl = this.getAttribute('src');
        var modal = document.querySelector('.modalWindow');
        var modalImg = document.createElement('img');
        modalImg.classList.add('modalPhoto');
        modal.innerHTML = '';
        modal.appendChild(modalImg);
        modalImg.setAttribute('src', imgUrl);
        var container = document.querySelector('.modalContainer');
        container.style.display = "block";
        var ModalWindowHeight = modal.offsetHeight;
        var emptyHeight = (window.innerHeight - ModalWindowHeight) / 2;
        modal.style.top = emptyHeight + "px";
        document.querySelector('.modalPhoto').onclick = function () {
            var photoOnWindowUrl = this.getAttribute('src');
            console.log(photoOnWindowUrl);
            var allPhoto = document.querySelectorAll('.photo');
            console.log(allPhoto);
            for (var i = 0; i < allPhoto.length; i++) {
                var currentPhotoUrl = allPhoto[i].getAttribute('src');
                var nextI = i + 1;
                if ((currentPhotoUrl === photoOnWindowUrl) && nextI < allPhoto.length) {
                    imgUrl = allPhoto[i + 1].getAttribute('src');
                    modalImg.setAttribute('src', imgUrl);
                    var ModalWindowHeight = modal.offsetHeight;
                    var emptyHeight = (window.innerHeight - ModalWindowHeight) / 2;
                    modal.style.top = emptyHeight + "px";
                }
                if ((currentPhotoUrl === photoOnWindowUrl) && (nextI >= allPhoto.length)) {
                    imgUrl = allPhoto[0].getAttribute('src');
                    modalImg.setAttribute('src', imgUrl);
                    var ModalWindowHeight = modal.offsetHeight;
                    var emptyHeight = (window.innerHeight - ModalWindowHeight) / 2;
                    modal.style.top = emptyHeight + "px";
                }
            }
        };
    }
});

document.querySelector('.modalContainer').onclick = function (e) {
    if (e.target.classList.contains('modalContainer')) {
        e.target.style.display = "none";
    }
};