

var App = function() {

	var quiz_id;
	var question_number;
	var responses = new Array();
	var currentQuestion = 0;
	var questions;
	var container;

	var quizData = {
		'id': 1 ,
		'title': '¿Qué personaje de The Walking Dead eres?',
		'questions':
		[
			{
				'id': 1,
				'type': 'text',
				'image': 'https://movement-prod.imgix.net/uploads/42/6f5d8a015917c72eb8baf9e78eff74/Sin_t_tulo_1.jpg?fit=min&h=324&w=576',
				'text': 'Ante una situacion de peligro...',
				'options': [
					{
						'id': 1,
						'text': 'Busco un sitio seguro y luego veremos.'
					},
					{
						'id': 2,
						'text':'Guardo la calma y pienso antes de actuar'
					},
					{
						'id': 3,
						'text':'Lo primero es proteger a los mios'
					},
					{
						'id': 4,
						'text':'Pierdo los nervios'
					},
					{
						'id': 5,
						'text': 'Quien dijo miedo? Me vengo arriba y demuestro que soy un valiente'
					},
					{
						'id': 6,
						'text': 'Llamo al 112'
					}
				]
			},
			{
				'id': 2,
				'type':'image',
				'text': 'Elige un arma',
				'options': [
					{
						'id': 6,
						'text':'Rifle',
						'image': 'https://movement-prod.imgix.net/uploads/f9/41b55e22fa13db6a7987b47bf46052/Sin_t_tulo_1.jpg?fit=min&h=300&w=300'
					},
					{
						'id': 7,
						'text': 'Ballesta',
						'image': 'https://movement-prod.imgix.net/uploads/45/b11d623c3439ee397169578bd3f486/Sin_t_tulo_1.jpg?fit=min&h=300&w=300'
					},
					{
						'id': 8,
						'text': 'Cuchillo',
						'image': 'https://movement-prod.imgix.net/uploads/ab/6d807b892c2ad3b9761d5ca204e53b/Sin_t_tulo_1.jpg?fit=min&h=300&w=300'
					},
					{
						'id': 9,
						'text': 'Zombies',
						'image': 'https://movement-prod.imgix.net/uploads/70/17ce5954fa43cd73067d3d06625456/Sin_t_tulo_1.jpg?fit=min&h=300&w=300'
					},
					{
						'id': 10,
						'text': 'Pistola',
						'image': 'https://movement-prod.imgix.net/uploads/9c/caedcd108950f4a5eb7b4b9d91b71c/Sin_t_tulo_1.jpg?fit=min&h=300&w=300'
					},
					{
						'id': 11,
						'text': 'Katana',
						'image': 'https://movement-prod.imgix.net/uploads/70/0a4719cb7ca759d43551329e24f89b/Sin_t_tulo_1.jpg?fit=min&h=300&w=300'
					}
				]
			}
		]
	};


	var triggerInit = function(id) {
		container = $('#container');
		quiz_id = id;
		questions = $('.text-question, .image-question');

		question_number = getQuestionNumber();


		$('#quiz-title-h').html(quizData.title);
		$('#quiz-title-v').html(quizData.title);
		$('#total-questions-h').html(question_number);
		$('#total-questions-v').html(question_number);
		renderQuestion(currentQuestion);
	};

	var renderQuestion = function(n) {


		var quest = quizData.questions[n];
		
		//Render horizontal
		$('#current-question-h').html(n+1);
		$('#question-title-h').html(quest.text);
		
		var html = '';
		if(quest.type == 'text') {
			html += '<ul>';
			$.each(quest.options, function(i,v) {
				html += '<li><a class="button expanded boton answer" href="#" data-answer="' + v.id +'">'+ v.text +'</a></li>';
			});
			html += '</ul>';
		}else if(quest.type = 'image') {
			$.each(quest.options, function(i,v) {
				html += '<div class="small-2 large-4 columns"><a href="#" class="answer" data-answer="'+ v.id +'"><img src="'+ v.image +'"></a></div>';
			});
		}

		$('#options-container-h').append(html);

		//Options click trigger
		$('.answer').click(function(){
			var question = quizData.questions[currentQuestion].id;
			var answer = $(this).data('answer');
			sendAnswer(question, answer);
			return false;
		});
		

	};

	var sendAnswer = function(quest, ans) {
		responses.push({quest, ans});
		nextQuestion();
	};

	var nextQuestion = function() {
		if((currentQuestion+1) == question_number) {
			sendData();
			return;
		}

		//var current = $('*[data-question="'+ (currentQuestion) +'"]');
		//var next = $('*[data-question="'+ (currentQuestion + 1) +'"]');

		$('#question-container-h').fadeOut();
		$('#question-container-v').fadeOut();

		$('#options-container-h').html(' ');
		$('#options-container-v').html(' ');

		/*current.fadeOut({
			complete: function(){
				current.remove();
			}
		});*/
	
		currentQuestion += 1;
		renderQuestion(currentQuestion);
	};

	var sendData = function(){
		alert(responses);
	};


	var getQuestionNumber = function() {
		//var imageQuestions = $('.image-question').length;
		//var textQuestions = $('.text-question').length;
		return quizData.questions.length;
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