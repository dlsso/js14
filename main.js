$(document).on('ready', function() {
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var leftLabels = $('<div class="left-labels"></div>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var amPmDot = $('<div class="am-pm-dot"></div>');
	var clockText = $('<div class="clock-text"></div>');
	var amRow = $('<div class="am-row"></div>');
	var fmRow = $('<div class="fm-row"></div>');

	$('.container').append(outerShell)
	$('.outer-shell').append(innerShell)

});


// Outer Shell (dark gray)
// Inner Shell (black)
// Left AM/PM & Auto Labels (white)
// Clock Screen (dark red)
// Clock AM/PM indicator (red)
// Clock Text (red)
// Bottom AM Label & Frequencies (white)
// Bottom FM Label & Frequencies (white)