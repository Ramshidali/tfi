
function playPauseVideo(slick , event){
    var currentSlide = slick.find(".slick-current");

    var is_video = currentSlide.find('.home_slider_top_item').hasClass('video');


    if(is_video){
        var video = currentSlide.find('video').get(0);


        if(event == 'play'){
            console.log('play');
            video.play();
        }else if(event == 'pause'){
            console.log('pause');
            video.currentTime=0;
            video.pause();

        }

    }
}



$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 200){
        $('.website-top-menu').removeClass('background-white');
        $('.nav-link').removeClass('grey-color');
        $('.nav-link').addClass('color-white');
        $('.menu-top-item-border').removeClass('change_color');
        $('.hide-menu ul').removeClass('background-white');
    } else{
        $('.website-top-menu').addClass('background-white');
        $('.nav-link').addClass('grey-color');
        $('.nav-link').removeClass('color-white');
        $('.menu-top-item-border').addClass('change_color');
        $('.hide-menu ul').addClass('background-white');

    }
});

function setNewsBoxs(){
    console.log('here');
    var windowsize = $(window).width();
    var news = $('.npnc-news-the-item');
    var ratio = $('.npnc-news-the-item').find('.ratio').val();

    console.log(ratio);

    if(windowsize > 700){
        var total = news.length;

        news.each(function(index){
            index = index+1;

//(index - 3 > 0 && (index -3) % 4 == 0)
            if(ratio == 3){
                if( index % 3 == 0)
                    $(this).after("<div class='newsBox'></div>");
            }
            else if(ratio == 4){
                if( index % 4 == 0 || index === total)
                    $(this).after("<div class='newsBox'></div>");

            }

            //if( index == 3 ||(index - 3 > 0 && (index -3) % 4 == 0))
            //if( index % 4 == 0 || index === total)
                //$(this).after("<div class='newsBox'></div>");

        });
    }else{
        news.each(function(){
            $(this).after("<div class='newsBox grey-background'></div>");

        });
    }
}

$(document).ready(function(){
    setNewsBoxs();

});

$(document).on('click', '.news-box-exist', function(){
    $('.newsBox').removeClass('show').removeClass('expand');
});

$(document).on('click', '.faq-element', function(){
    $(this).toggleClass('active');
});

function setParameters(id,url){
    url = url + '?share=true&share_id='+id;
    window.history.pushState({"html":'',"pageTitle":'awd'},"", url);
    return url;
}

$(document).on('click', '.my_faq_category:not(.click)', function(){
    $('.my_faq_category').not($(this)).removeClass('click');
    $(this).toggleClass('click');

    var id = $(this).attr('id');



    //get the content of the news
    $.ajax({
        type: 'POST',
        url: 'https://sirc.com.sa/wp-admin/admin-ajax.php',
        action: 'faqs_post',
        dataType: "html", // add data type
        data: {
            action : 'faqs_post',
            id: id,
        },
        success: function(response) {
            $('.faqs-posts').html(response);
        }
    });
});


$(document).on('click', '.npnc-news-the-item', function(){
    var id = $(this).find('.news_id').val();
    var type = $(this).find('.type').val();
    var ele = $(this);
    var container = ele.nextAll('.newsBox').first();

    var url = setParameters(id,$(this).attr('data-url'));

    //calculate the position of the newsbox marker
    var offset = ele.offset();
    var width = ele.outerWidth();
    var centerX = offset.left + width / 2;

    //check if container already opened
    //do some animation cause it's fun

    $('.newsBox').removeClass('show');
    $('.newsBox').removeClass('expand');


    //get the content of the news
    $.ajax({
        type: 'POST',
        url: 'https://sirc.com.sa/wp-admin/admin-ajax.php',
        action: 'news_post',
        dataType: "html", // add data type
        data: {
            action : 'news_post',
            id: id,
            type: type,
            url: url,
        },
        success: function(response) {
            $('#new_box_marker_style').remove();
            $('head').append('<style id="new_box_marker_style">.news-box-inner:before{left:' + centerX+'px' + '}</style>');


            container.addClass('expand');
            container.html(response);
            setTimeout(function () {
                container.addClass('show');
            }, 100);
            container.find('.lazy').lazy();


            $('html, body').animate({
                scrollTop: container.offset().top - 300
            }, 1000);

            if(typeof addthis !== 'undefined') { addthis.layers.refresh(); }
        }
    });
});