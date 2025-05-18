	barba.init({
  	views: [{
  		namespace: 'home',
  		afterEnter() {
  			// refresh the parallax based on new page content
  			homePage();
  		}
  	}],
  	transitions: [{
  		name: 'opacity-transition',
  		sync: true,
  		leave(data) {
  			return gsap.timeline().to(data.current.container, {
  					opacity: 0
  				})
  				.fromTo('.box', {
  					x: '130%'
  				}, {
  					x: '-130%'
  				}, 0)
  		},
  		enter(data) {
  			return gsap.from(data.next.container, {
  				opacity: 0
  			});
  		}
  	}]
  });

  function homePage() {
		const headerEl = document.getElementById("header")

		window.addEventListener("scroll", function () {
			const scrollPos = this.window.scrollY
			
				if (scrollPos > 80) {
					headerEl.classList.add("header__active")
				}else {
					headerEl.classList.remove("header__active")
				}
		})

		 	$(function () {
  		var accordionItem = $('.accordion-item')

  		accordionItem.click(function () {
  			$(this)
  				.toggleClass('accordion-item_active')
  				.siblings()
  				.removeClass('accordion-item_active')
  		})

  	});
		
  	const btns = document.querySelectorAll('.shop-block__btn')
  	const modalOverlay = document.querySelector('.modal-overlay ')
  	const modals = document.querySelectorAll('.modal')
		const clouse = document.querySelectorAll('.clouse')
		// const headerEl = document.getElementById("header")

  	btns.forEach((el) => {
  		el.addEventListener('click', (e) => {
  			let path = e.currentTarget.getAttribute('data-path');
  			modals.forEach((el) => {
  				el.classList.remove('modal--visible');
  			});
  			document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
  			modalOverlay.classList.add('modal-overlay--visible');
  		});
  	});

  	modalOverlay.addEventListener('click', (e) => {
  		if (e.target == modalOverlay) {
  			modalOverlay.classList.remove('modal-overlay--visible');
  			modals.forEach((el) => {
  				el.classList.remove('modal--visible');
  			});

  		}
  	});
		
		clouse.forEach((el) => {
			el.addEventListener('click', (e) => {
					modalOverlay.classList.remove('modal-overlay--visible');
			})
		});

		
		
 
  }