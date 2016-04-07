var data = require(__dirname + '/data/story.js');

console.log(data.data)
$('#intro').on('click', function(event){
  event.preventDefault();
  console.log('hitting here');
  var $introArticle = $('#introStory');
  $introArticle.append(data.data.intro);
})
