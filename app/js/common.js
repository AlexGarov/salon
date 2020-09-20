

$(function() {
	
	
	$('#my-menu').mmenu({
		extensions: ['widescreen','theme-black','fx-menu-slide', 'pagedim-black','position-right'],
		navbar:{
			title: '<img src="img/logo1.svg" alt="alt">'
		},
		offCanvas: {
			position: 'right'
		}
	});


	document.getElementById('my-page').ontransitionend = function(event) {
		var t = event.target
		if(this===t){
			
			document.getElementById('d5').classList.toggle ('is-active');

		}
	   }


	$('#my-content').css('color','black');   
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			800:{
				items:2,
				
			},
			1100:{
				items:3,
				
			}
		}

	});

	
	
	


});