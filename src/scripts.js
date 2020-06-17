import './styles/main.scss';

  let slides = document.querySelectorAll('.slide'),
    buttonPrev = document.querySelector('.buttons :first-child'),
    buttonNext = document.querySelector('.buttons :last-child');
    console.log(buttonPrev === undefined,' 00000')
  if (!slides.lenght === 0 || (buttonPrev !== undefined) || buttonNext !== undefined) {
  	console.log('start')
  		buttonPrev.addEventListener('click', (e) => {
  			console.log('pushed prev button')
  		});
  		buttonNext.addEventListener('click', function(){
  			console.log('pushed Next');
  		});
  } else { console.warn('Not found one of control or controlled elements');}