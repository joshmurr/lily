$(document).ready(function(){
	/*jQuery time*/
	$("#accordian h3").click(function(){
		//slide up all the link lists
		$("#accordian ul ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
			//$("#accordian ul ul").toggleClass( "overlay" ); // show/hide the overlay
		}
	})
});