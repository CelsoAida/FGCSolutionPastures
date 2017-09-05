(function(){
	let imgs = document.querySelectorAll('.slider-holder .slider img');
	let prev = document.querySelector('.prev');
	let next = document.querySelector('.next');
	var init,  
		last = imgs.length,
		count = last - 1;

	function display() {
		for(var i=0; i<imgs.length; i++) {
			var img = imgs[i];
			if(i === count) {
				img.style.opacity = 1;
			} else {
				imgs[i].style.opacity = 0;
			}		
		}
	}

	function numIncrement() {
		if(count < 0) {
			count = last - 2;
		} else if(count > last - 2) {
			count = 0;
		} else {
			count++;
		}

		display()
		console.log(count)
	}

	function prevNext(num) {
		count = count + num;

		if(count < 0) {
			count = last - 1;
		} else if(count > last - 1) {
			count = 0;
		}

		display()
		clearInterval(init, 100)
		init = setInterval(changeSlide, 4000);
	}

	window.addEventListener('load', ()=>{
		imgs[0].style.opacity = 1;
		init = setInterval(changeSlide, 4000);
	})

	function changeSlide() {
		numIncrement();
	}

	prev.addEventListener('click', ()=>{
		prevNext(-1)
	});

	next.addEventListener('click', ()=>{
		prevNext(1)
	})
}())