
(function($){
  var lstSentences;
  var index = 0,index_max=0;
  var KEY_CODE_UP = 38, KEY_CODE_DOWN = 40;
  var placeHolder;
  $.fn.slider = function(sentences){
      lstSentences = sentences;
      index_max = lstSentences.length;
      placeHolder =$('<div />',{id:'slide_contents'});      
      $(this).append(placeHolder);
      createSliderChildren(lstSentences);

  }

createSliderChildren = function(sentances){
  sentances.forEach(function(itm){
    
    var div=seprateWords(itm);
    placeHolder.append(div);
  });
  attachSlider();
};

function highlightWord(previousSentence, currentSentence) {
    for (var i = 0; i < previousSentence.split(' ').length; i++) {
        if (previousSentence.split(' ')[i] !== currentSentence.split(' ')[i]) {
            //append highlighter-class to changed words
            $($($('#slide_contents').children()[index]).children()[i]).addClass('highlight');
            (function (j) {
                setTimeout(function () {
                    $($($('#slide_contents').children()[index]).children()[j]).removeClass('highlight');
                }, 800);
            })(i);
        }
    }
    ;
}
function scrollUp(slide_content_height) {
  if (index > 0) {
      --index;
      $("#slide_contents").css("transform", "translateY(" + index * -slide_content_height + "px)");
      var currentSentence = lstSentences[index];
      var previousSentence = lstSentences[index + 1];
      highlightWord(previousSentence, currentSentence);
  }
}
function scrollDown(slide_content_height) {
  if (index < index_max - 1) {
      $("#slide_contents").css("transform", "translateY(" + ++index * -slide_content_height + "px)");
      //get the changed words
      var currentSentence = lstSentences[index];
      var previousSentence = lstSentences[index - 1];
      highlightWord(previousSentence, currentSentence);
  }
}
attachSlider = function(){
    //get height of content to scroll
var slide_content_height = $($('#slide_contents').children()[0]).height();
$('body').on('keyup', function(e){
    if(e.keyCode === KEY_CODE_DOWN)
    {
      scrollDown(slide_content_height);
  }
});

$('body').on('keyup', function(e){
   if(e.keyCode === KEY_CODE_UP)
    {
        scrollUp(slide_content_height);
    }
  });
  $('body').swipe({
      swipe:function(event, direction, distance, duration, fingerCount) {
          switch (direction){
              case 'up':
                  scrollDown(slide_content_height);
                  break;
              case 'down':
                  scrollUp(slide_content_height);
                  break;
          }
      }
  });
};

seprateWords = function(sentance){
    var div=$('<div/>');
    sentance.split(' ').forEach(function(word){
      var span=$('<span />',{class:'word'});
      span.append(word);
      div.append(span);
    });
    return div;
  };
})(jQuery);