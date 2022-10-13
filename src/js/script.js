$(document).ready(function () {
	$('.carousel_inner').slick({
		speed: 1200,
		//adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev_arrow.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/next_arrow.svg"></button>',
		responosive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});

	$('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function () {
		$(this)
			.addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
			.closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
				$('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
			})
		});
	};

	toggleSlide('.catalog-item_link');
	toggleSlide('.catalog-item_back');

	//Modal формы для заказа выходят

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal_close').on('click', function () {
		$('.overlay, #consultation, #thanks, #oder').fadeOut('slow');
	});

	// функция для автоматичнской замены названия товара
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal_descr').text($('.catalog-item_subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});
	//функция подсказок в заполнение формы
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символов")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты"
				}
			}
		});
	};
	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');
	//маска ввода номера телефона
	$('input[name=phone]').mask("+7 (999) 999-9999");

	$('form').submit(function (e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");

			$('form').trigger('reset');
		});
		return false;
	});
	//Smotyh scrolll and pageup
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});

	new WOW().init();
});










// var name = "Ivan"

// let number = 7;
// const pi = 3.14;

// number = 4;

// let leftBorderWidth;

// number
// string - "", '', ~`
// true/false
// null
// underfind
//	let obj = {
//	name: 'apple',
//	color: 'green',
//	weight: 200
//	}
// Symbol

// alert(1234) (очень редко используется)
// console.log(number) (для общения с разработчиком)
// let answer = confirm("Ват есть 18?", "");
// console.log(answer);

// let answer = promt("Ват есть 18?", "");
// console.log(answer);

//console.log(4 + "efgwg");

//let isChecked = true;
//isClose = false;

//console.log(isChecked && isClose);

//console.log(isChecked || isClose);

// if (2 * 5 == 8 * 1) {
// 	console.log(true)
// } else {
// 	console.log(false)
// }

// let answer = confirm("Ват есть 18?");
// if (answer) {
// 	console.log('проходите')
// } else {
// 	console.log('Уходи')
// }

// const num = 50;

// if (num < 49) {
// 	console.log('fspfkw[pe')
// } else if (num > 100) {
// 	console.log('vrfgwrw')
// } else {
// 	console.log('rgsgre')
// }

// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }

// function logging(a, b) {
// 	console.log(a + b)
// }

// logging(3, 5);

// logging(6, 8);