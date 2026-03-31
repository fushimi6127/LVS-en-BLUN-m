$(document).ready(function () {
    slideAnime(); // ページ読み込み時にアニメーションを実行
});
function slideAnime(){
    $('.downAnime').each(function(){
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight){
            $(this).addClass("slideAnimeDownUp");
            $(this).children(".downAnimeInner").addClass("slideAnimeUpDown");
        } else {
            $(this).removeClass("slideAnimeDownUp");
            $(this).children(".downAnimeInner").removeClass("slideAnimeUpDown");
        }
    });
}

// スクロール時にも動作
$(window).scroll(function () {
    slideAnime();
});
