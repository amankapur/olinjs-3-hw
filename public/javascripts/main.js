$(function(){
	$("#ingrsubmit").on('click', function(){
		$.post('/ingredient/newitem', {'name': $('#ingrname').val(), 'cost': $('#ingrcost').val()} , function(){
			document.location = "/";
		});
	});

	$("#burgsubmit").on('click', function(){
		
		var arr = new Array();
		$("#ingr-list input:checked").each(function(){
			var temp = {}
			temp.id = $(this).attr('id');
			temp.name = $(this).attr('value');
			arr.push(temp);
		});
		$.post('/order/newitem', {'name': $('#burgname').val(), 'ingrs' : arr}, function(data){
		});
		$('body').append("<a href='/orders''> <h2>Order placed, go to orders</h2></a>");
	});

	$(".completed").on('click', function(){
		window.a = $(this).attr('id');
		$(this).parent().parent().parent().remove(); 
		$.post('/order/del', {'id': a}).always(function(data){
			console.log(data);

		});
		
	});
});