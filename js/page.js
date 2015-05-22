$(function() {
    $('.about').on('click', renderAbout);
    $('.photos').on('click', renderPhotos);
});

function renderAbout() {
    $('.info-container').empty();
    $('.info-container').css('visibility', 'visible');
    var template = Handlebars.compile($('#about-me-temp').html())
    var data = {
        name: 'William Shaw || Developer',
        about: ['  Hi! My name is Will. I am a Fullstack Web Developer located in New York City. Currently I am an instructor of the Web Development Immersive program at General Assembly teaching incoming students to program in Javascript and Ruby. Before teaching this course I was a student in WDI, prior to that I was in sales, as much as I enjoyed sales, I found it did not fulfill the desire to I have to be creative nor did it push my technical abilities.', ' In my free time I am an avid sports fan, Lets go Mets!! I play baseball, softball and I belong to a crossfit gym (No worries, I haven\'t drank the crossfit kool-aid).'].join('\n')
    }
    $('.info-container').append(template(data));
};

function renderPhotos() {
    $('.info-container').empty()
    $('.info-container').css('visibility', 'visible');
    var template = Handlebars.compile($('#photos-temp').html())
    $('.info-container').append(template);

    $(".polaroid").each(function(i) {
        var tempVal = Math.round(Math.random());
        if (tempVal == 1) {
            var rotDegrees = randomXToY(330, 360);
        } else {
            var rotDegrees = randomXToY(0, 30); 
        }
        if (window.innerWidth == undefined) {
            var wiw = 1000;
            var wih = 700;
        } else {
            var wiw = window.innerWidth;
            var wih = window.innerHeight;
        }
        var cssObj = {
            'left': Math.random() * (wiw - 400),
            'top': Math.random() * (wih - 400),
            '-webkit-transform': 'rotate(' + rotDegrees + 'deg)',
            'transform': 'rotate(' + rotDegrees + 'deg)'
        };
        $(this).css(cssObj);
    });
	var zindexnr = 1;
	var dragging = false;
	$(".polaroid").mouseup(function(e){
		if(!dragging) {
			zindexnr++;
			var cssObj = { 'z-index' : zindexnr,
			'transform' : 'rotate(0deg)',
			'-webkit-transform' : 'rotate(0deg)' };
			$(this).css(cssObj);
		}
	});
	$(".polaroid").draggable({
		cursor: 'crosshair',
		start: function(event, ui) {
			dragging = true;
			zindexnr++;
			var cssObj = { 'box-shadow' : '#888 5px 10px 10px', 
				'-webkit-box-shadow' : '#888 5px 10px 10px', 
				'margin-left' : '-10px',
				'margin-top' : '-10px',
				'z-index' : zindexnr };
			$(this).css(cssObj);
		},
		stop: function(event, ui) {
			var tempVal = Math.round(Math.random());
			if(tempVal == 1) {
				var rotDegrees = randomXToY(330, 360); 
			} else {
				var rotDegrees = randomXToY(0, 30); 
			}
			var cssObj = { 'box-shadow' : '', 
				'-webkit-box-shadow' : '',
				'transform' : 'rotate('+ rotDegrees +'deg)', 
				'-webkit-transform' : 'rotate('+ rotDegrees +'deg)', 
				'margin-left' : '0px',
				'margin-top' : '0px' };
			$(this).css(cssObj);
			dragging = false;
		}
	});
};


function randomXToY(minVal, maxVal, floatVal) {
    var randVal = minVal + (Math.random() * (maxVal - minVal));
    return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
};