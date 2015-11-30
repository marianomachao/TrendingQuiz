

var App = function() {

	var quiz_id;
	var question_number;
	var responses = new Array();
	var currentQuestion = 0;
	var questions;

	var triggerInit = function(id) {
		quiz_id = id;
		questions = $('.text-question, .image-question');

		$('.answer').click(function(){
			var question = getQuestionOrder($(this));
			var answer = $(this).data('answer');
			sendAnswer(question, answer);
			return false;
		});

		question_number = getQuestionNumber();
	};

	var sendAnswer = function(quest, ans) {
		responses.push(ans);
		nextQuestion();
	};

	var nextQuestion = function() {
		var current = $('*[data-question="'+ (currentQuestion) +'"]');
		var next = $('*[data-question="'+ (currentQuestion + 1) +'"]');

		current.fadeOut({
			complete: function(){
				current.remove();
			}
		});

	};

	var getQuestionOrder = function(el) {
		
		if(el.parent().is('li')) {
			//Is a text question
			return el.parent().parent().parent().data('question');
		}else{
			//Is an image question
			return el.parent().parent().data('question');
		}
	};

	var getQuestionNumber = function() {
		var imageQuestions = $('.image-question').length;
		var textQuestions = $('.text-question').length;
		return (imageQuestions + textQuestions);
	};

	return {

		init: function(){
			$(document).foundation();
			$("a.boton").hover(
			    function () {
			        $(this).html(function (i, origText) {
			            return "<i class='fi-check'> </i>" + origText;
			        });
			    },
			    function () {
			        $(this).find("i").remove();
			    }
			);
		},

		initQuiz: function(id){
			triggerInit(id);
		}

	};

}();