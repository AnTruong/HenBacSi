 function registerCompanyItemClick(){
        $(".companies-item-container .logo-container").click(function() {
          var displaytarget = $(this).attr("data-target");
          $(".company-description").hide();
          $("#"+displaytarget).slideDown();
        });
    }
function registerMenuScroll(){
	$(".menu-item a").click(function() {
	  var displaytarget = $(this).attr("data-target");
	  scrollToElement(displaytarget);
	});
}
function scrollToLinkView(){
	var pathname = window.location.href;
	var splittedPath = pathname.split("#");
	if(splittedPath.length>1){
		var idToScroll = splittedPath[splittedPath.length-1];
		scrollToElement(idToScroll);
	}
}
function scrollToElement(elementId){
	targetElement =  $("#"+elementId);
	var scrollTo =  targetElement.offset().top -120;
	$('html, body').animate({
	scrollTop: scrollTo}, 1000);
}