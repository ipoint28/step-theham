//________________TABS___________________

$('ul.tabs-header').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
});


//___________________WORK-CARDS__________

$(function(){

$('.wc-wrap').mouseenter(function(){
$(this).find('.wc-img-item').css({'top': '-100%'});
$(this).find('.wc-hover-item').css({'top':'0'});

}).mouseleave(function(){
$(this).find('.wc-img-item').css({'top': '0'});
$(this).find('.wc-hover-item').css({'top':'100%'});

});
});

//_____________________CARDS FILTER__________

$(function () {
        const button =  $('.work-tab-title');

        button.on("click", function (e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");

        const filter = $(this).attr('data-filter');
        const card = $('.wc-wrap');


        card.not(filter).hide('2000');
        card.filter(filter).show('2000');
    });
});


//_________________________SHOW-MORE________________
$(function () {

    $(".card-hidden").slice(0,12).show();
    $("#load-more").on("click",function (e) {
        e.preventDefault();
        const preloader = $('.loader');
        const hiddenCard = $('.card-hidden:hidden');
        preloader.css("opacity",1);
        setTimeout(function () {
            preloader.css("opacity",0);
            hiddenCard.slice(0,12).slideDown();
            if (hiddenCard.length !== 24) {
                $("#load-more").fadeOut();
            }
            $('html,body').animate({
                scrollTop:$(this).offset().top-800
            },1500);
        }, 2000);
    });
});

//_______________________SLIDER____________________

$(function() {

    let slideNow = 1;
    let slideCount = $('#slidewrapper').children().length;
    let slideInterval = 40000;
    let navBtnId = 0;
    let translateWidth = 0;
    let switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();

    });

    $('#prev-btn').click(function() {
        prevSlide();

    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
            $(this).addClass('active').siblings().removeClass('active');
        }
    });


    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('#slidewrapper').css('transform', 'translate(0, 0)');
            slideNow = 1;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
            $('.slider-item').addClass('active').siblings().removeClass('active');
        }
    }

    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -$('#viewport').width() * (slideCount - 1);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = slideCount;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
            $('.slider-item').addClass('active').siblings().removeClass('active');
        }
    }
});
//____________________MASONRY_GALLERY_____________

// $(document).ready(function() {
//     let grid = $('.grid-gallery');
//     grid.imagesLoaded(function() {
//         grid.masonry({
//             itemSelector: '.grid-gallery-item',
//             columnWidth: '.grid-gallery-item',
//             gutter: 17
//       });
//     });
// });



