
//build array of texts
var lstSentences = ["I do my homework",
    "You do your homework",
    "She does her homework",
    "He does his homework",
    "We do our homeworks",
    "They do their homeworks"];
var KEY_CODE_UP = 38, KEY_CODE_DOWN = 40;
var placeHolder = $('#slide_contents');
//slider
var index = 0,index_max=lstSentences.length;
$(document).ready(function () {
  createSliderChildren(lstSentences);
});
createSliderChildren = function(sentances){
  sentances.forEach(function(itm){
    //add as div
    var div=$('<div/>');
    div.append(itm);
    placeHolder.append(div);
  });
  attachSlider();
};



attachSlider = function(){
//get height of content to scroll
var slide_content_height = $($('#slide_contents').children()[0]).height();

$('body').on('keyup', function(e){
    if(e.keyCode === KEY_CODE_DOWN)
    {
      if(index < index_max -1){
          $("#slide_contents").css("transform","translateY("+ ++index * -slide_content_height+"px)");
    }
  }
});

$('body').on('keyup', function(e){
   if(e.keyCode === KEY_CODE_UP)
    {
      if(index > 0){
          --index;
          $("#slide_contents").css("transform","translateY("+  index * -slide_content_height +"px)");
      }
  }
});
};
