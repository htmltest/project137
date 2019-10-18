$(document).ready(function() {

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
        dots: true
    });

    $('.main-news-container').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L2 11.5L13 22" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L12 11.5L0.999999 1" stroke-width="2"/></svg></button>',
        dots: true
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

    $('body').on('click', '.about-menu a', function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length > 0) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
            e.preventDefault();
        }
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
        }
        e.preventDefault();
    });

    $('.grms-products').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L2 11.5L13 22" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L12 11.5L0.999999 1" stroke-width="2"/></svg></button>',
        dots: true
    });

    $('.valesa-about-gallery-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 1L2 11.5L13 22" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 22L12 11.5L0.999999 1" stroke-width="2"/></svg></button>',
        dots: true,
        adaptiveHeight: true
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
	}
});