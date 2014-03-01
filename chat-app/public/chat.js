$(document).ready(function(){

	now.ready(function(){

		now.name = prompt('name: ');

		$('#message').focus();

		$('#send').click(function(){
			now.toServer($('#message').val());	
		});

		now.toClient = function(name, message){
			$('#history').append('<p>' + name + ': ' + message + '</p>');
			$('#message').val('').focus();
		};					
	});
});		