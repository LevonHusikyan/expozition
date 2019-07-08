$(document).ready(function () {

	// MENU

	$("#menu").on('click', function () {
		$("#menu").toggleClass("change");
		$(".nav").toggleClass("change");
		$(".menu-bg").toggleClass("change-bg");
	});

	//SVG
	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

	// REQUISITES
	$('.requisite').magnificPopup({
		type: 'inline',
		midClick: true
	});

	$(".gallery-tizer-wrap")
		.attr("href", $(".gallery-images a").attr("href"))
		.css("background-image", "url(" + $(".gallery-images a").data("preview") + ")");
	$(".gallery-images a:first").remove();

	$(".production-tizer-wrap")
		.attr("href", $(".production-gallery-images a").attr("href"))
		.css("background-image", "url(" + $(".production-gallery-images a").data("preview") + ")");
	$(".production-gallery-images a:first").remove();

	$(".portfolio-item").each(function (e) {

		var th = $(this);

		th.attr("href", "#portfolio-img-" + e)
			.find(".portfolio-popup")
			.attr("id", "portfolio-img-" + e);

	});

	$(".portfolio-item, a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	$(".mfp-gallery").each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery: {
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function () {
					this.items[0].src = this.items[0].src + '?=' + Math.random();
				},
				open: function () {
					$.magnificPopup.instance.next = function () {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function () { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function () {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function () { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function () {
					var self = this;
					setTimeout(function () { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1,
			},
			520: {
				items: 1,
			},
			560: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});


	$(".click_button").each(function (e) {

		var th = $(this);

		th.attr("href", "#portfolio-img-" + e)
			.find(".portfolio-popup")
			.attr("id", "portfolio-img-" + e);

	});






});