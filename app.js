let navBar = $('#navbar');
let headerBar = $('#headerbar');
let toTopBtn = $('#toTop-btn');
let navItems = document.getElementsByClassName('nav-items');
let imgIndex = 0;

window.onload = function() {
	toTop();
	setHeight();
	navScroll();
	imgCircle();
	autoGallery();

	$(window).scroll(function() {
		lockNavBar();
	})
}

function lockNavBar() {
	let scroll = window.scrollY;
	let navHeight = navBar.height();

	if (scroll < $(headerbar).outerHeight(true)) {
		$('body').css('margin-top', '0px');
		$(navbar).css('position', 'static');
		$(navbar).css('top', 'auto');
	} else if (scroll > $(navBar).offset().top) {
		$('body').css("margin-top", navHeight + "px");
		$(navbar).css('position', 'fixed');
		$(navbar).css('top', '0');
	} 
}

function toTop() {
	$(toTopBtn).click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	})
}

function navScroll() {
	for(let i = 0 ; i < navItems.length; i++) {
		navItems[i].onclick = function() {
			// Get anchor location
			let address = $(this).attr("href");
			console.log(address);
			if (address == '#top')
				$('html, body').animate({scrollTop: 0}, 'slow');
			else
				$('html, body').animate({scrollTop: $(address).offset().top - navBar.height()}, 'slow');
		}
	}
}

function setHeight() {
	let imgGallery = $('#img-gallery');

	$(imgGallery).css("height" , window.innerHeight - ($('#home').outerHeight(true) + $(headerbar).outerHeight(true) + navBar.height()) + 'px');
}

function imgCircle() {
	let circles = document.getElementsByClassName('img-circle')

	for(let i = 0; i < circles.length; i++) {
		circles[i].onclick = function() {
			switchImg( i );

			imgIndex = i;
		}
	}
}

function autoGallery() {
	let imgs = document.getElementsByClassName('img');

	switchImg( imgIndex );
	setTimeout(autoGallery, 3000);

	imgIndex += 1;
	if (imgIndex > imgs.length - 1) imgIndex = 0;
}

function switchImg( index ) {
	let imgs = document.getElementsByClassName('img');
	let circles = document.getElementsByClassName('img-circle')

	for (let i = 0; i < imgs.length; i++){
		imgs[i].classList.remove('selected-img');
		circles[i].classList.remove('selected-circle');
	}

	imgs[index].classList.add('selected-img');
	circles[index].classList.add('selected-circle');
}