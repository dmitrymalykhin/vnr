
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
	if (document.body.classList.contains("hamburger-active")) {
		closeBurger ();
	} else {
		openBurger ();
	}
})

function closeBurger () {
	document.body.classList.remove('hamburger-active');
}

function openBurger () {
	document.body.classList.add('hamburger-active');
}
//End burger



$('.open-modal').click(function(){
	let modalEl = $(this).data('modal');
	$('div[data-modal="'+modalEl+'"]').addClass('active');
	$('div[data-modal="'+modalEl+'"]').find('.modal').addClass('active');
	document.body.classList.add('no-scroll');
});

$('.close-modal').click(function(){
	$(this).parents('.modal').removeClass('active');
	$(this).parents('.modal-overlay').removeClass('active');
	document.body.classList.remove('no-scroll');
});
$(document).click(function (e) {
	if ($(e.target).is('.modal-overlay')) {
		$(e.target).removeClass('active');
		$(e.target).find('.modal').removeClass('active');
	}
});



let search = document.getElementById('searh');

search.onclick = function() {
	search.classList.add('open-search');
}

