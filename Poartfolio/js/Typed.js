
$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "Photographer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		// time before typing starts
		startDelay: 900,
		// backspacing speed
		backSpeed: 10,
		// time before backspacing
		backDelay: 400,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

