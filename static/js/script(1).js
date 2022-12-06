$(window).on("load", function () {

	AOS.refresh();
	if($("select[name='SupportType']").length){
		$("select[name='SupportType']").prepend("<option selected disabled>Support Type</option>")	
	}
	if($("select[name='certificate']").length){
		$("select[name='certificate']").prepend("<option selected disabled>Degree</option>")	
	}
	
	if($("select[name='arabicCertificate']").length){
		$("select[name='arabicCertificate']").prepend("<option selected disabled>المؤهل العلمي</option>")	
	}
	
	if($("select[name='ArabicSupportType']").length){
		$("select[name='ArabicSupportType']").prepend("<option selected disabled>نوع الدعم</option>")	
	}
	
	if($("select[name='BusinessOpportunity']").length){
		$("select[name='BusinessOpportunity']").prepend("<option selected disabled>Please Select Business Opportunity</option>")	
	}
	
	if($("select[name='ArabicBusinessOpportunity']").length){
		$("select[name='ArabicBusinessOpportunity']").prepend("<option selected disabled>الرجاء تحديد فرص تجارية</option>")	
	}
	
	if($("select[name='SIRCMunicipal']").length){
		$("select[name='SIRCMunicipal']").prepend("<option selected disabled>Please Select SIRC Municipal</option>")	
	}
	
	if($("select[name='ArabicSIRCMunicipal']").length){
		$("select[name='ArabicSIRCMunicipal']").prepend("<option selected disabled>الرجاء تحديد خدمات سرك البلديات</option>")	
	}
	
	if($("select[name='SIRCIndustrial']").length){
		$("select[name='SIRCIndustrial']").prepend("<option selected disabled>Please Select SIRC Industrial</option>")	
	}
	
	if($("select[name='ArabicSIRCIndustrial']").length){
		$("select[name='ArabicSIRCIndustrial']").prepend("<option selected disabled>الرجاء تحديد خدمات سرك الصناعية </option>")	
	}
	
	if($("select[name='SIRCRecycling']").length){
		$("select[name='SIRCRecycling']").prepend("<option selected disabled>Please Select SIRC Recycling</option>")	
	}
	
	if($("select[name='ArabicSIRCRecycling']").length){
		$("select[name='ArabicSIRCRecycling']").prepend("<option selected disabled>الرجاء تحديد خدمات سرك إعادة التدوير</option>")	
	}
	
	if($("select[name='SIRCEngineering']").length){
		$("select[name='SIRCEngineering']").prepend("<option selected disabled>Please Select SIRC Engineering</option>")	
	}
	
	if($("select[name='ArabicSIRCEngineering']").length){
		$("select[name='ArabicSIRCEngineering']").prepend("<option selected disabled>الرجاء تحديد خدمات سرك الهندسية</option>")	
	}
	
	$("select[name='SupportType']").on('change', function (e) {
    var optionSelected = $("option:selected", this);
        if(optionSelected[0].innerText == 'Business Opportunity'){
            $("select[name='BusinessOpportunity']").parent().parent().parent().removeClass("d-none");

        }else{
            $("select[name='BusinessOpportunity']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCEngineering']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCRecycling']").parent().parent().parent().addClass("d-none");
        }
    });
    
    $("select[name='ArabicSupportType']").on('change', function (e) {
    var optionSelected = $("option:selected", this);
        if(optionSelected[0].innerText == 'فرص تجارية'){
            $("select[name='ArabicBusinessOpportunity']").parent().parent().parent().removeClass("d-none");
        }else{
            $("select[name='ArabicBusinessOpportunity']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCEngineering']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCRecycling']").parent().parent().parent().addClass("d-none");
        }
    });
    
    
    $("select[name='BusinessOpportunity']").on('change', function (e) {
    var optionSelected = $("option:selected", this);
        if(optionSelected[0].innerText == 'SIRC Municipal'){
            $("select[name='SIRCMunicipal']").parent().parent().parent().removeClass("d-none");
            $("select[name='SIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCRecycling']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCEngineering']").parent().parent().parent().addClass("d-none");
        }else if(optionSelected[0].innerText == 'SIRC Industrial'){
            $("select[name='SIRCIndustrial']").parent().parent().parent().removeClass("d-none");
            $("select[name='SIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCRecycling']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCEngineering']").parent().parent().parent().addClass("d-none");
        } else if(optionSelected[0].innerText == 'SIRC Recycling'){
            $("select[name='SIRCRecycling']").parent().parent().parent().removeClass("d-none");
            $("select[name='SIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCEngineering']").parent().parent().parent().addClass("d-none");
        }else if(optionSelected[0].innerText == 'SIRC Engineering'){
            $("select[name='SIRCEngineering']").parent().parent().parent().removeClass("d-none");
            $("select[name='SIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='SIRCRecycling']").parent().parent().parent().addClass("d-none");
        }
    });
    
  $("select[name='ArabicBusinessOpportunity']").on('change', function (e) {
    var optionSelected = $("option:selected", this);
        if(optionSelected[0].innerText == 'خدمات سرك البلديات'){
            $("select[name='ArabicSIRCMunicipal']").parent().parent().parent().removeClass("d-none");
            $("select[name='ArabicSIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCRecycling']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCEngineering']").parent().parent().parent().addClass("d-none");
        }else if(optionSelected[0].innerText == 'خدمات سرك الصناعية'){
            $("select[name='ArabicSIRCIndustrial']").parent().parent().parent().removeClass("d-none");
            $("select[name='ArabicSIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCRecycling']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCEngineering']").parent().parent().parent().addClass("d-none");
        } else if(optionSelected[0].innerText == 'خدمات سرك إعادة التدوير'){
            $("select[name='ArabicSIRCRecycling']").parent().parent().parent().removeClass("d-none");
            $("select[name='ArabicSIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCEngineering']").parent().parent().parent().addClass("d-none");
        }else if(optionSelected[0].innerText == 'خدمات سرك الهندسية'){
            $("select[name='ArabicSIRCEngineering']").parent().parent().parent().removeClass("d-none");
            $("select[name='ArabicSIRCMunicipal']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCIndustrial']").parent().parent().parent().addClass("d-none");
            $("select[name='ArabicSIRCRecycling']").parent().parent().parent().addClass("d-none");
        }
    });

});

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


$(document).ready(function(){
    // Library Animation on Scroll
	AOS.init({
		once: true
	});
	
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        console.log('here');
    }); 


    //lazy images initialize
    $('.lazy').Lazy();

    $('#email-modal').modal('show');

    var slider_slick = $('.home_slider_top');

    slider_slick.on("afterChange", function(event, slick) {
        playPauseVideo(slider_slick, 'play');
    });

    slider_slick.on("beforeChange", function(event, slick) {
        playPauseVideo(slider_slick,"pause");
    });
    
    slider_slick.slick({
        autoplay: true, /* this is the new line */
        draggable: true,
        //fade: true,
        speed: 5000,
        autoplaySpeed: 10000,
        infinite: true,

    });

    $('.news-vertical-slider').slick({
        slidesToShow: 1,
        infinite: true,
        fade: true,
    });


    var owl = $(".second-slider")
    owl.on('changed.owl.carousel', function (event) {
        var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var allItems = event.item.count;
        if (current > allItems || current == 0) {
            current = allItems - (current % allItems);
        }

        current -= 1;

        $('.slider2-custom-navbar-item').removeClass('is-active');
        $('.slider2-custom-navbar-item').eq(current).addClass('is-active');
    });
    owl.owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        loop:true,
    });

    $('.my_faq_category').first().trigger('click');
    
    $('.slider-what-we-do').click(function(){
        var id = $(this).attr('id');
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $("."+id).offset().top - 150
        }, 2000);
    });

});

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