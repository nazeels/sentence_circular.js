
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
    
    var div=seprateWords(itm);
    //div.append(itm);
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
            $("#slide_contents").css("transform","translateY("+ ++index * -slide_content_height +"px)");
            //get the changed words
            var currentSentence = lstSentences[index];
            var previousSentence = lstSentences[index - 1];
            for (var i = 0; i < previousSentence.split(' ').length; i++) {
              if(previousSentence.split(' ')[i] !== currentSentence.split(' ')[i])
              {
                //append highlighter-class to changed words
                $($($('#slide_contents').children()[index]).children()[i]).addClass('highlight');
                (function(j){
                  setTimeout(function(){$($($('#slide_contents').children()[index]).children()[j]).removeClass('highlight');},800);
                })(i);
              }
            };
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

seprateWords = function(sentance){
    var div=$('<div/>');
    sentance.split(' ').forEach(function(word){
      var span=$('<span />',{class:'word'});
      span.append(word);
      div.append(span);
    });
    return div;
  };
