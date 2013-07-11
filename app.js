	//build array of texts
	var lstSentences = ["I do my homework",
		"You do your homework",
		"She does her homework",
		"He does his homework",
		"We do our homeworks",
		"They do their homeworks"];
	var KEY_CODE_UP=38,KEY_CODE_DOWN=40;
	var placeHolder = $('#content');
$(document).ready(function(){
	//indexer to manage rotation of sentances
	var index = 0;
	//refer the conten
		//get the count of items in sentences
		var countOfSentences = lstSentences.length;
	$('body').on('keyup', function(e) {
   		//connecting to keyboard
   		if(e.keyCode === KEY_CODE_UP)
   		{
   			//console.log('rotating up');
   			if(index < countOfSentences - 1)
   				++index
   			else if(index === countOfSentences -1)
   				index=0;
   			
   			createFormatedText(lstSentences[index]);
   		}
   		else if(e.keyCode === KEY_CODE_DOWN)
   		{
   			console.log('rotating down');
   		}

});
	
//split each word in the sentance to canvas
createFormatedText=function(sentence){
	placeHolder.slideUp();
	placeHolder.html('');
	sentence.split(' ').forEach(function(entry) {
		var span=$('<span />',{style:'padding:20px'});
		placeHolder.append(span);
		span.append(entry);
	placeHolder.slideDown();
//with canvas
  //   	var can = $( '<canvas />', {width:'100', height:'100'} );
		// placeHolder.append(can);                                  
		// var innerCan = can[0].getContext('2d');
		// innerCan.strokeText(entry,50,50);
	});
		
	};
});
