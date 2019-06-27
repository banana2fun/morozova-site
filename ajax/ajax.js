(function ($) {
    $(function block() {
        for ($i = 0; $i < 10; $i++) {
            $("<span></span>").appendTo("div");
            console.log($count);
            $("span").load("1.php");
            setInterval(block, 2000);
        }
    })
})(jQuery)
