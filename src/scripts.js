import './styles/main.scss';



	function slide_update(element) {
		element.classList.toggle('active');
	};


  let slides = document.querySelectorAll('.slide'),
    buttonsPrev = document.querySelectorAll('.buttons button:nth-child(1)'),
    buttonsNext = document.querySelectorAll('.buttons button:nth-child(2)');
    console.log('Prev ->>',buttonsPrev.length );
    console.log('Next ->>',buttonsNext.length === 0);
    console.log('Slides ->>',slides.length === 0);
  if ( (slides.length !== 0) && (buttonsPrev.length !== 0) && (buttonsNext.length !== 0) ) {
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