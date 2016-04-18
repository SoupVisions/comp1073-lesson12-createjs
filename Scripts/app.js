// triple forward slash before the reference path:
// (once we have the following line we have access to jquery code hinting)
/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
	
	// create a reference (or binding) to an HTML element
	// and read all html contained within it
	// store this data in the heade variable
	// var header = $('#mainHeader').html();
	// console.log(header);
	
	// .html() <- GET the html | .html(header) <- SET the html
	// var footer = $('#mainFooter').html(header);
	
	// Navigation (load in navbar as a partial html page):
	var header = $('#mainHeader').load('partials/nav.html', function(){
		
		var bodyId = $('body').attr("id");
		
		switch (bodyId) {
		
		case "index": 
		$('#indexLink').attr("class", "active");
		break;
		
		case "projects": 
		$('#projectsLink').attr("class", "active");
		break;
		
		case "contact": 
		$('#contactLink').attr("class", "active");
		break;
		
		}
		 
	}); // end header
	
	
	
	
	

    

})();



