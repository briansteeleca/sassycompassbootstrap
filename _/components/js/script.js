( function( $, window, undefined ){

	"use strict";

	var s,
	MYNAMESPACE = window.MYNAMESPACE = window.MYNAMESPACE || {};


	MYNAMESPACE.UTIL = {

		settings: {
			// initial settings
			socialMediaIcons: $('.social-media-icons').find('li a')
		},
		init: function() {

			// kick things off
			s = MYNAMESPACE.UTIL.settings;
			MYNAMESPACE.UTIL.bindUIActions();

		},

		bindUIActions: function() {
			//bindings
			s.socialMediaIcons.on('click', function(e){
				e.preventDefault();
				alert('You clicked a social media icon!');
			});
		},

		anotherFunction: function(myparam) {

		}
	};

} )( jQuery, window );

$( document ).ready( MYNAMESPACE.UTIL.init );