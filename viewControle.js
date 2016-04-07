var data = require(__dirname + '/data/story.js');
(function(){

$('#intro').on('click', function(event){
  event.preventDefault();
  console.log('hitting here');
  var $introArticle = $('#introStory');
  $introArticle.append('"<p>' + data.data.intro + '</p>"');
})

});
