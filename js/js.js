$( document ).ready(function() {
	/*slider*/
	$('#carousel-main').carousel({
	    pause: true,
	    interval: 4000,
	  });

	$('#carousel-pager').carousel({
	    pause: true,
	    interval: false,
	  });

	$('.carousel .vertical .carousel-item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  for (var i=0;i<2;i++) {
	    next=next.next();
	    if (!next.length) {
	    	next = $(this).siblings(':first');
	  	}
	    
	    next.children(':first-child').clone().appendTo($(this));
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
