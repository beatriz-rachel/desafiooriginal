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
	$(".prs-esp-colors li").click(function() {
	  	$(".prs-esp-colors li").each(function( index ) {
		  if ($(this).hasClass("selected")){
		  	$(this).removeClass("selected");
		  }
		});
		$(this).addClass("selected");
	});

	/*seleciona tamanho*/
	$(".prd-esp-tam li").click(function() {
	  	$(".prd-esp-tam li").each(function( index ) {
		  if ($(this).hasClass("selected")){
		  	$(this).removeClass("selected");
		  }
		});
		$(this).addClass("selected");
	});
});
