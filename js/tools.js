$(document).ready(function() {

    $('.table-scroll').mCustomScrollbar({
        axis: 'x'
    });

    $.validator.addMethod('phoneRU',
        function(phone_number, element) {
            return this.optional(element) || phone_number.match(/^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/);
        },
        'Ошибка заполнения'
    );

    $('body').on('focus', '.form-input input, .form-input textarea', function() {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', '.form-input input, .form-input textarea', function() {
        $(this).parent().removeClass('focus');
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        } else {
            $(this).parent().removeClass('full');
        }
    });

    $('body').on('change', '.form-file input', function() {
        var curInput = $(this);
        var curField = curInput.parents().filter('.form-file');
        var curForm = curField.parents().filter('form');
        var curName = curInput.val().replace(/.*(\/|\\)/, '');
        if (curName != '') {
            curField.find('.form-file-input span').html(curName);
        } else {
            curField.find('.form-file-input span').html('Загрузка файла');
        }
    });

    $('form').each(function() {
        initForm($(this));
    });

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 2L3 23.5L24 45" stroke-width="3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 45L23 23.5L2 2" stroke-width="3"/></svg></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.main-news-container').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L2 11.5L13 22" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L12 11.5L0.999999 1" stroke-width="2"/></svg></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('body').on('click', '.form-reset input', function() {
        var curForm = $(this).parents().filter('form');
        window.setTimeout(function() {
            curForm.find('.form-input input, .form-input textarea').each(function() {
                if ($(this).val() != '') {
                    $(this).parent().addClass('full');
                } else {
                    $(this).parent().removeClass('full');
                }
            });
        }, 100);
    });

    $('body').on('click', '.about-menu ul a', function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('.about-menu').removeClass('open');
            $('html, body').animate({'scrollTop': curBlock.offset().top});
            e.preventDefault();
        }
    });

    $('body').on('click', '.about-menu-current a', function(e) {
        $('.about-menu').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.about-menu').length == 0) {
            $('.about-menu').removeClass('open');
        }
    });

    $('.about-menu-current').each(function() {
        $(this).html($('.about-menu ul li:first').html());
    });

    $('body').on('click', '.faq-item-title', function(e) {
        var curItem = $(this).parent();
        curItem.toggleClass('open');
        curItem.find('.faq-item-text').slideToggle(200);
    });

    $('body').on('click', '.grms-tabs-menu ul li a', function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            var curTabs = curLi.parents().filter('.grms-tabs');
            curTabs.find('.grms-tabs-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = curTabs.find('.grms-tabs-menu ul li').index(curLi);
            curTabs.find('.grms-tabs-content.active').removeClass('active');
            curTabs.find('.grms-tabs-content').eq(curIndex).addClass('active');
            curTabs.find('.grms-tabs-menu-current').html($(this).html());
        }
        $('.grms-tabs-menu').removeClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.grms-tabs-menu-current', function(e) {
        var curTabs = $(this).parents().filter('.grms-tabs');
        curTabs.find('.grms-tabs-menu').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.grms-tabs-menu').length == 0) {
            $('.grms-tabs-menu').removeClass('open');
        }
    });

    $('body').on('click', '.product-side h3', function(e) {
        $('.product-side').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.product-side').length == 0) {
            $('.product-side').removeClass('open');
        }
    });

    $('.grms-products').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L2 11.5L13 22" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L12 11.5L0.999999 1" stroke-width="2"/></svg></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    });

    $('.valesa-about-gallery-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L2 11.5L13 22" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L12 11.5L0.999999 1" stroke-width="2"/></svg></button>',
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.product-about-gallery-list').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L2 11.5L13 22" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L12 11.5L0.999999 1" stroke-width="2"/></svg></button>',
        dots: true,
        adaptiveHeight: true
    });

    $('body').on('click', '.window-link', function(e) {
        var curLink = $(this);
        windowOpen(curLink.attr('href'));
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            windowClose();
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window')) {
            windowClose();
        }
    });

    $(window).resize(function() {
        windowPosition();
    });

    $('body').on('click', '.window-close', function(e) {
        windowClose();
        e.preventDefault();
    });

    $('body').on('click', '.product-about-gallery-item a', function(e) {
        if ($('.window').length > 0) {
            windowClose();
        }

        var curPadding = $('.wrapper').width();
        var curWidth = $(window).width();
        if (curWidth < 480) {
            curWidth = 480;
        }
        var curScroll = $(window).scrollTop();
        $('html').addClass('window-open');
        curPadding = $('.wrapper').width() - curPadding;
        $('body').css({'margin-right': curPadding + 'px'});
        $('body').append('<div class="window"><div class="window-loading"></div></div>')
        $('.wrapper').css({'top': -curScroll});
        $('.wrapper').data('curScroll', curScroll);
        $('meta[name="viewport"]').attr('content', 'width=' + curWidth);

        var galleryHtml = '<div class="window-gallery">';

        if ($('.product-about-gallery-item a').length > 1) {
            galleryHtml += '<div class="window-gallery-preview"><div class="window-gallery-preview-inner">';
            $('.product-about-gallery-item a').each(function() {
                galleryHtml += '<div class="window-gallery-preview-item"><a href="#"><img src="' + $(this).find('img').attr('src') + '" alt="" /></a></div>';
            });
            galleryHtml += '</div></div>';
        }

        galleryHtml += '<div class="window-gallery-big"><div class="window-gallery-big-inner">';
        $('.product-about-gallery-item a').each(function() {
            galleryHtml += '<div class="window-gallery-big-item"><div class="window-gallery-big-item-inner"><img src="' + $(this).attr('href') + '" alt="" />';
            if ($(this).attr('data-title')) {
                galleryHtml += '<div class="window-gallery-big-item-title">' + $(this).attr('data-title') + '</div>';
            }
            galleryHtml += '</div></div>';
        });
        galleryHtml += '</div></div>';

        galleryHtml += '</div>';

        $('.window').append('<div class="window-container window-container-preload"><div class="window-content">' + galleryHtml + '<a href="#" class="window-close"></a></div></div>')
        windowPosition();
        $('.window-container-preload').removeClass('window-container-preload');

        $('.window-gallery-preview').mCustomScrollbar();

        var curIndex = $('.product-about-gallery-item a').index($(this));
        $('.window-gallery-preview-item').eq(curIndex).addClass('active');

        $('.window-gallery-preview-item a').click(function(e) {
            if (!$(this).parent().hasClass('active')) {
                var newIndex = $('.window-gallery-preview-item a').index($(this));
                $('.window-gallery-preview-item.active').removeClass('active');
                $('.window-gallery-preview-item').eq(newIndex).addClass('active');
                $('.window-gallery-big-inner').slick('slickGoTo', newIndex);
            }
            e.preventDefault();
        });

        $('.window-gallery-big-inner').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: curIndex,
            arrows: false,
            dots: false
       });

        e.preventDefault();
    });

    $('.header-search-link').click(function(e) {
        $('html').addClass('search-open');
        e.preventDefault();
    });

    $('.header-search-window-close').click(function(e) {
        $('html').removeClass('search-open');
        e.preventDefault();
    });

    $('.mobile-menu-link').click(function(e) {
        $('html').toggleClass('mobile-menu-open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if (!$(e.target).hasClass('mobile-menu-link') && $(e.target).parents().filter('.mobile-menu').length == 0) {
            $('html').removeClass('mobile-menu-open');
        }
    });

    $('.mobile-menu ul li').each(function() {
        var curLi = $(this);
        if (curLi.find('ul').length > 0) {
            curLi.addClass('with-submenu');
        }
    });

    $('.mobile-menu ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (curLi.find('ul').length > 0) {
            curLi.toggleClass('open');
            e.preventDefault();
        }
    });

});

$(window).on('resize', function() {
    $('.form-select select').chosen('destroy');
    $('.form-select select').chosen({disable_search: true, placeholder_text_multiple: ' ', no_results_text: 'Нет результатов'});
    $('.form-select select').each(function() {
        var curSelect = $(this);
        if (curSelect.data('placeholder') != '') {
            curSelect.parent().find('.chosen-single').prepend('<strong>' + curSelect.data('placeholder') + '</strong>');
        }
    });
});

function initForm(curForm) {
    curForm.find('.form-input input, .form-input textarea').each(function() {
        if ($(this).val() != '') {
            $(this).parent().addClass('full');
        }
    });

    curForm.find('.form-input textarea').each(function() {
        $(this).css({'height': this.scrollHeight, 'overflow-y': 'hidden'});
        $(this).on('input', function() {
            this.style.height = '27px';
            this.style.height = (this.scrollHeight) + 'px';
        });
    });

    curForm.find('.form-select select').chosen({disable_search: true, no_results_text: 'Нет результатов'});
    curForm.find('.form-select select').each(function() {
        var curSelect = $(this);
        if (curSelect.data('placeholder') != '') {
            curSelect.parent().find('.chosen-single').prepend('<strong>' + curSelect.data('placeholder') + '</strong>');
        }
    });

    curForm.find('input.phoneRU').mask('+7 (000) 000-00-00');

    curForm.validate({
        ignore: ''
    });
}

$(window).on('load resize scroll', function() {
    var curScroll = $(window).scrollTop();

	if ($('.about-menu').length > 0) {
		var curTop = $('.about-menu').offset().top - 20;
        $('.about-menu').height($('.about-menu ul').outerHeight(true));
		if (curTop < curScroll) {
            $('.about-menu ul').addClass('fixed');
            $('.about-menu ul').css({'margin-top': 0});
            var curOffset = ($('.about-menu ul').offset().top + $('.about-menu ul').outerHeight(true)) - ($('.about').offset().top + $('.about').outerHeight(true));
            if (curOffset > 0) {
                $('.about-menu ul').css({'margin-top': -curOffset});
            } else {
                $('.about-menu ul').css({'margin-top': 0});
            }
		} else {
			$('.about-menu ul').removeClass('fixed');
            $('.about-menu ul').css({'margin-top': 0});
		}

        $('.about-menu li.active').removeClass('active');
        $('.about-menu').find('li').each(function() {
            var curBlock = $($(this).find('a').attr('href'));
            if (curBlock.length > 0) {
                if ($(window).scrollTop() + $(window).height() / 2 > curBlock.offset().top) {
                    $('.about-menu li.active').removeClass('active');
                    $(this).addClass('active');
                }
            }
        });
        $('.about-menu-current').each(function() {
            $(this).html($('.about-menu ul li.active').html());
        });
	}
});

function windowOpen(linkWindow, dataWindow) {
    if ($('.window').length > 0) {
        windowClose();
    }

    var curPadding = $('.wrapper').width();
    var curWidth = $(window).width();
    if (curWidth < 480) {
        curWidth = 480;
    }
    var curScroll = $(window).scrollTop();
    $('html').addClass('window-open');
    curPadding = $('.wrapper').width() - curPadding;
    $('body').css({'margin-right': curPadding + 'px'});
    $('body').append('<div class="window"><div class="window-loading"></div></div>')
    $('.wrapper').css({'top': -curScroll});
    $('.wrapper').data('curScroll', curScroll);
    $('meta[name="viewport"]').attr('content', 'width=' + curWidth);

    $.ajax({
        type: 'POST',
        url: linkWindow,
        processData: false,
        contentType: false,
        dataType: 'html',
        data: dataWindow,
        cache: false
    }).done(function(html) {
        $('.window').append('<div class="window-container window-container-preload"><div class="window-content">' + html + '<a href="#" class="window-close"></a></div></div>')

        windowPosition();

        $('.window-container-preload').removeClass('window-container-preload');

        $('.window form').each(function() {
            initForm($(this));
        });
    });
}

function windowPosition() {
    if ($('.window').length > 0) {
        $('.window-container').css({'left': '50%', 'margin-left': -$('.window-container').width() / 2});

        $('.window-container').css({'top': '50%', 'margin-top': -$('.window-container').height() / 2});
        if ($('.window-container').height() > $('.window').height()) {
            $('.window-container').css({'top': '0', 'margin-top': 0});
        }
    }
}

function windowClose() {
    if ($('.window').length > 0) {
        $('.window').remove();
        $('html').removeClass('window-open');
        $('body').css({'margin-right': 0});
        $('.wrapper').css({'top': 0});
        $(window).scrollTop($('.wrapper').data('curScroll'));
        $('meta[name="viewport"]').attr('content', 'width=device-width');
    }
}