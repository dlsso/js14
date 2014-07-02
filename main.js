$(document).on('ready', function() {
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var leftLabels = $('<div class="left-labels"><p>PM<p><br><br><p>AUTO</p></div>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var amPmDot = $('<div class="am-pm-dot"></div>');
	var clockText = $('<div class="clock-text">12:17</div>');
	var amRow = $('<div class="am-row">AM 53 60 70 90 110 140 170 X10 KHz</div>');
	var fmRow = $('<div class="fm-row">FM 88 92 96 102 106 108 MHz</div>');

	$('.container').append(outerShell)
	$('.outer-shell').append(innerShell)
	$('.inner-shell').append(clockScreen)
	$('.clock-screen').append(amPmDot)
	$('.clock-screen').append(clockText)
	$('.inner-shell').append(leftLabels)
	$('.inner-shell').append(amRow)
	$('.inner-shell').append(fmRow)
});


// Outer Shell (dark gray)
// Inner Shell (black)
// Left AM/PM & Auto Labels (white)
// Clock Screen (dark red)
// Clock AM/PM indicator (red)
// Clock Text (red)
// Bottom AM Label & Frequencies (white)
// Bottom FM Label & Frequencies (white)