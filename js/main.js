
// Don't do this in production with each!!!
$('.programme').each(function () {
	console.log($(this).attr('data-programme-title'));

	var timestart = $(this).attr('data-time-start');
	var timeend = $(this).attr('data-time-ends');
 
	console.log(timestart);
	console.log(timeend);
});
