import './styles/main.scss';



	function slide_update(element) {
		element.classList.toggle('active');
	};


  let slides = document.querySelectorAll('.slide'),
    buttonsPrev = document.querySelectorAll('.buttons button:nth-child(1)'),
    buttonsNext = document.querySelectorAll('.buttons button:nth-child(2)');
  if (!slides.lenght === 0 || (!buttonsPrev.lenght !== 0) || !buttonsNext.lenght !== 0) {
  		buttonsPrev.forEach(function(button){
  			button.addEventListener('click',function(){
  				slides.forEach(slide_update);
  			});
  		});
  		buttonsNext.forEach(function(button){
  			button.addEventListener('click',function(){
  				slides.forEach(slide_update);
  			});
  		});
  } else { console.warn('Not found one of control element  or controlled elements');}