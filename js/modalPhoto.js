$(document).ready(function () {
    $('.photo').click(function () {
        $imgUrl = $(this).css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, "");
        $('.modalWindow').html('');
        $('.modalWindow').append('<img class="modalPhoto">');
        $('.modalPhoto').attr('src', $imgUrl);
        $('.modalContainer').css('display', 'block');
        $('.modalWindow').css('top', ($(window).height() - $('.modalWindow').outerHeight()) / 2 + 'px');
        $('.modalPhoto').click(function () {
            $photoOnWindowUrl = $(this).attr('src');
            $photoList = $(document).find('.photo');
            for ($i = 0; $i < $photoList.length; $i++) {
                $currentPhotoUrl = $($photoList[$i]).css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, "");
                if (($currentPhotoUrl === $photoOnWindowUrl) && $i + 1 < $photoList.length) {
                    $imgUrl = $($photoList[$i + 1]).css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, "");
                }
                if (($currentPhotoUrl === $photoOnWindowUrl) && $i + 1 >= $photoList.length) {
                    $imgUrl = $($photoList[0]).css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, "");
                }
                $('.modalPhoto').attr('src', $imgUrl);
                $('.modalWindow').css('top', ($(window).height() - $('.modalWindow').outerHeight()) / 2 + 'px');
            }
        });
        $(document).click(function (e) {
            if ($(".modalContainer").is(e.target)) {
                $(".modalContainer").hide();
            }
        })
    });
});
