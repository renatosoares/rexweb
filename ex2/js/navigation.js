// JavaScript Document

$("#menu > li").mouseenter(function () {	
	$('#menu li ul').hide();
});
	
	$(".sub-menu > li").mouseenter(function () {	
	$('.sub-menu2').hide();
});

		
	
//MENU SLIDE
function alignMenu() {

    var w = 0;

    var mw = $("#nav").width()-90;
   
    var i = -1;
    var menuhtml = '';
    var isRemove = 0;

    jQuery.each($("#menu").children(), function () {
        i++;
        w += $(this).find('a').outerWidth(true);
        if (mw < w) {

            menuhtml += $('<div>').append($(this).clone()).html();
            $(this).remove();
            isRemove = 1;
        }
    });
    if (isRemove == 1) {
        $("#menu").append(
					'<li  style="position:relative;" href="#" class="hideshow">' +
					    '<a href="#">more ' +
					    '<span style="font-size:13px">&#8595;</span>' +
					    '</a> <ul class="sub_item">' +
			         menuhtml + '</ul></li>');
    }
        $("#menu li.hideshow ul").css("top", $("#menu li.hideshow").outerHeight(true) + "px");
        
    $("#menu li.hideshow").mouseenter(function () 
    {				
        $(this).children("ul").slideDown(100);
    });
	
	$("#menu li.hideshow").mouseleave(function () {        $(this).children("ul").hide();    });
	
	
	
	
}




function alignResizeMenu() {

    var w = 0;

    var mw = $("#nav").width()-90;

    var i = -1;
    var menuhtml = '';
    var isRemove = 0;

    jQuery.each($("#menu").children(), function () {
        i++;
        w += $(this).find('a').outerWidth(true);


        if (mw < w) {

            menuhtml += $('<div>').append($(this).clone()).html();
            $(this).remove();
            isRemove = 1;
        }
    });
    if (isRemove == 1) {
        $("#menu").append(
					'<li  style="position:relative;" href="#" class="hideshow">' +
					    '<a href="#">more ' +
					    '<span style="font-size:13px">&#8595;</span>' +
					    '</a> <ul class="sub_menudmore">' +
			         menuhtml + '</ul></li>');
    }
    $("#menu li.hideshow ul").css("top", $("#menu li.hideshow").outerHeight(true) + "px");

    $("#menu li.hideshow").on('mouseenter',function () {
        $(this).children("ul").slideDown(100);
    });
	
	
	$("#menu li.hideshow").mouseleave(function () {        $(this).children("ul").hide();    });
	
	
	
}

$(document).ready(function () {
	alignMenu();
	
	/* SUBMENU DROP DOWN*/

$( 'ul#menu .drop' ).hover(
	        function(){
	            $(this).children('.slideDown').slideDown(100);
	        }
			//,	        function(){	            $(this).children('.slideDown').slideUp(150);	        }
	    );
		
		
		$( 'ul#menu' ).mouseleave(function(){
			
			$('ul#menu .drop').children('.slideDown').slideUp(150);
			
		});
	
});



$(function () {
    $(window).resize(function () {
         
        $("#menu").append($("#menu li.hideshow ul").html());
        $("#menu li.hideshow").remove();
        alignResizeMenu();
    });


});
	
