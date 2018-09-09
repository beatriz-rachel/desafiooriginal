$( document ).ready(function() {
	/*products*/	
	$(".regular").slick({
	    dots: true,
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
	});
	$(".slick-dots").addClass("worded");
	$( "<span> de 10</span>" ).appendTo( ".slick-dots li" );
	$(window).resize(function() {
		if(!($(".slick-dots").hasClass("worded"))){
			$(".slick-dots").addClass("worded");
	  		$( "<span> de 10</span>" ).appendTo( ".slick-dots li" );
		}
	});	

	/*seleciona cor*/
	$(".prd-esp-colors li").click(function() {
	  	$(".prd-esp-colors li").each(function( index ) {
		  if ($(this).hasClass("selected")){
		  	$(this).removeClass("selected");
		  }
		});
		$(this).addClass("selected");
		var color = $(this).text();
		$(".color-slct").text(color);
	});

	/*seleciona tamanho*/
	$(".prd-esp-tam li").click(function() {
	  	$(".prd-esp-tam li").each(function( index ) {
		  if ($(this).hasClass("selected")){
		  	$(this).removeClass("selected");
		  }
		});
		$(this).addClass("selected");
		var tamanho = $(this).text();
		$(".tam-slct").text(tamanho);
	});

	/*menu toggle*/	
	$( ".menu-toggle" ).click(function(e) {
	  e.preventDefault();
	  $( ".main-menu" ).toggle();
	});

	/*lightbox adicionar ao carrinho*/
	$( ".add-basket" ).click(function(e) {
	  e.preventDefault();
	  $( ".lightbox" ).addClass('open');
	  $( ".lightbox-bg" ).addClass('open');
	});
		
	$( ".lightbox-bg" ).click(function(e) {
	  e.preventDefault();
	  $(".lightbox").removeClass('open');
	  $(".lightbox-bg").removeClass('open');
	});
	$( ".lightbox-close" ).click(function(e) {
	  e.preventDefault();
	  $(".lightbox").removeClass('open');
	  $(".lightbox-bg").removeClass('open');
	});
});
