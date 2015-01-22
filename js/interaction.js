 $(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
     	'scrollTop': $target.offset().top}, 1000, 'swing');
	});

	$('#start').css("display","block");
	$('#question1').css("display","none");
	$('#question2').css("display","none");
	$('#question3').css("display","none");
	$('#question4').css("display","none");
	$('#question5').css("display","none");
	$('.resultSection').css("display","none");

	$('.vraag1').on('click',function(){
		$('#start').fadeOut();
		$('#question1').fadeIn();
		$('#question2').css("display","none");
		$('#question3').css("display","none");
		$('#question4').css("display","none");
		$('#question5').css("display","none");
		$('.resultSection').css("display","none");
	});
	$('.btn-q2').on('click',function(){
		$('#start').css("display","none");
		$('#question1').fadeOut();
		$('#question2').fadeIn();
		$('#question3').css("display","none");
		$('#question4').css("display","none");
		$('#question5').css("display","none");
		$('.resultSection').css("display","none");
	});
	$('.btn-q3').on('click',function(){
		$('#start').css("display","none");
		$('#question1').css("display","none");
		$('#question2').fadeOut();
		$('#question3').fadeIn();
		$('#question4').css("display","none");
		$('#question5').css("display","none");
		$('.resultSection').css("display","none");
	});
	$('.btn-q4').on('click',function(){
		$('#start').css("display","none");
		$('#question1').css("display","none");
		$('#question2').css("display","none");
		$('#question3').fadeOut();
		$('#question4').fadeIn();
		$('#question5').css("display","none");
		$('.resultSection').css("display","none");
	});
	$('.btn-q5').on('click',function(){
		$('#start').css("display","none");
		$('#question1').css("display","none");
		$('#question2').css("display","none");
		$('#question3').css("display","none");
		$('#question4').fadeOut();
		$('#question5').fadeIn();
		$('.resultSection').css("display","none");
	});
	$('.btn-res').on('click',function(){
		$('#start').css("display","none");
		$('#question1').css("display","none");
		$('#question2').css("display","none");
		$('#question3').css("display","none");
		$('#question4').css("display","none");
		$('#question5').fadeOut();
		$('.resultSection').fadeIn();
	});

	//LOADING IMAGE

	$('.btn-res').on('click', function(){
		console.log('test');
		setTimeout(function(){ 
			$('.spinner').fadeOut(function(){
				$('#result h3').fadeIn("slow");
			$('#result h4').fadeIn("fast");
			})}, 3000);

	});
});


/* ---------------- BEGIN JQUERY  POP UP -----------------------*/
 jQuery(document).ready(function($){
	var $form_modal = $('.cd-user-modal'),
		$form_signup = $form_modal.find('#cd-signup'),
		$main_nav = $('.main-nav');

	//open modal
	$main_nav.on('click', function(event){

		if( $(event.target).is($main_nav) ) {
			// on mobile open the submenu
			$(this).children('ul').toggleClass('is-visible');
		} else {
			// on mobile close submenu
			$main_nav.children('ul').removeClass('is-visible');
			//show modal layer
			$form_modal.addClass('is-visible');	
			//show the selected form
			( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
		}

	});

	//close modal
	$('.cd-user-modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
			$form_modal.removeClass('is-visible');
		}	
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });
	
	function signup_selected(){
		$form_signup.addClass('is-selected');
	}

	$(".error-naam").css("display","none");
	$(".error-email").css("display","none");
	$form_signup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		if($('.emailAdres').val().length === 0 || $('.naam').val().length === 0){
			$(".error-email").css("display","block");
			$(".error-naam").css("display","block");

		}else{
			window.location = "#question1";
			$(".cd-user-modal").css("display","none");
			
		}
	});



	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};

 $(document).ready(function(){
// POINTS 
	$aantalPunten = 0;

	$('.btn-q2').on('click',function(){
		if($('#q1-nee').is(':checked')) {
		    $aantalPunten = $aantalPunten; 
		}else{
			$aantalPunten = $aantalPunten + 1;
		}
		return $aantalPunten;
	});

	$('.btn-q3').on('click',function(){
		if($('#q2-nee').is(':checked')) {
		    $aantalPunten = $aantalPunten; 
		}else{
			$aantalPunten = $aantalPunten + 1;
		}
		return $aantalPunten;
	});

	$('.btn-q4').on('click',function(){
		if($('#q3-nee').is(':checked')) {
		    $aantalPunten = $aantalPunten;
		}else{
			$aantalPunten = $aantalPunten + 1;
		}
		return $aantalPunten;
	});

	$('.btn-q5').on('click',function(){
		if($('#q4-nee').is(':checked')) {
		    $aantalPunten = $aantalPunten; 
		}else{
			$aantalPunten = $aantalPunten + 1;
		}
		return $aantalPunten;
	});
	 $('ben-res').on('click',function(){
	 	if($('#q5-nee').is(':checked')) {
		    $aantalPunten = $aantalPunten; 
		}else{
			$aantalPunten = $aantalPunten + 1;
		}

		if($aantalPunten > 3){
			$(".resultaat").text("je ben de OPPER IMD");
		}else{
			$('.resultaat').text("Misschien is IMD toch niets voor jou, GA NAAR IMS");
		}

	 });

});