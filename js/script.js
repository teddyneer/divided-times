$(document).ready(function(){
	$(document).on("click", ".international", function(event){
		// $(this).addClass("active");
		// Prevents link from going somewhere
		event.preventDefault();

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {

		// Prevents whole nav bar from showing
		$("#international-drop").show();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();

		// Slides down the content section
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");

		// Add class of active
		$(this).addClass("active");
		// $(".international").addClass("active");
		}
	});
	$(document).on("click", ".politics", function(event){
		// $(this).addClass("active");
		// Prevents link from going somewhere
		event.preventDefault();

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {

		// Prevents whole nav bar from showing
		$("#international-drop").hide();
		$("#politics-drop").show();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();

		// Slides down the content section
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");

		// Add class of active
		$(this).addClass("active");
		// $(".international").addClass("active");
		}
		// $("#primary-nav li").removeClass("active");
	});
	$(document).on("click", ".business", function(event){
		// $(this).addClass("active");
		// Prevents link from going somewhere
		event.preventDefault();

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {

		// Prevents whole nav bar from showing
		$("#international-drop").hide();
		$("#politics-drop").hide();
		$("#business-drop").show();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();

		// Slides down the content section
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");

		// Add class of active
		$(this).addClass("active");
		// $(".international").addClass("active");
		}
	});
	$(document).on("click", ".technology", function(event){
		// $(this).addClass("active");
		// Prevents link from going somewhere
		event.preventDefault();

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {

		// Prevents whole nav bar from showing
		$("#international-drop").hide();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").show();
		$("#culture-drop").hide();
		$("#blogs-drop").hide();

		// Slides down the content section
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");

		// Add class of active
		$(this).addClass("active");
		// $(".international").addClass("active");
		}
	});
	$(document).on("click", ".culture", function(event){
		// $(this).addClass("active");
		// Prevents link from going somewhere
		event.preventDefault();

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {

		// Prevents whole nav bar from showing
		$("#international-drop").hide();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").show();
		$("#blogs-drop").hide();

		// Slides down the content section
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");

		// Add class of active
		$(this).addClass("active");
		// $(".international").addClass("active");
		}
	});
	$(document).on("click", ".blogs", function(event){
		// $(this).addClass("active");
		// Prevents link from going somewhere
		event.preventDefault();

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#slide-down").slideUp();
		} else {

		// Prevents whole nav bar from showing
		$("#international-drop").hide();
		$("#politics-drop").hide();
		$("#business-drop").hide();
		$("#technology-drop").hide();
		$("#culture-drop").hide();
		$("#blogs-drop").show();

		// Slides down the content section
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");

		// Add class of active
		$(this).addClass("active");
		// $(".international").addClass("active");
		}
	});
});