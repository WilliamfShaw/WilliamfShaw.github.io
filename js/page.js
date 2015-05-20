$(function () {
	$('.about').on('click', renderAbout);
  $('.photos').on('click', renderPhotos);
});

function renderAbout() {
	$('.info-container').empty();
	$('.info-container').css('visibility', 'visible');
  var template = Handlebars.compile($('#about-me-temp').html())
  var data = {
    name: 'William Shaw',
    about: ['  Hi! My name is Will. I am a Junior Fullstack Web Developer located in New York City. I am currently an instructor of the Web Development Immersive program at General Assembly teaching incoming student to program in Javascript and Ruby. Before this I was in sales, as much as I enjoyed sales, I found it did not fulfill the desire to I have to be creative nor did it push my technical abilities.', ' In my free time I am an avid sports fan, Lets go Mets!! I play baseball, softball and I belong to a crossfit gym (No worries, I haven\'t drank the crossfit kool-aid).'].join('\n')
  }
  $('.info-container').append(template(data));
};

function renderPhotos() {
  $('.info-container').empty()
  $('.info-container').css('visibility', 'visible');
  var template = Handlebars.compile($('#photos-temp').html())
  $('.info-container').append(template);
  $("#slideshow").cycle('fade');
};

