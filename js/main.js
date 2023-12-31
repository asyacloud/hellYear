(function(){  
  const mainDiv = document.querySelector('.container');
  const card = document.querySelector('.card')
  const santa = document.querySelector('.images__santa');
  const tree = document.querySelector('.images__tree');

    mainDiv.addEventListener('mousemove', (rotate) => {
      let x = (innerWidth / 2 - rotate.pageX) / 15;
      let y = (innerHeight / 2 - rotate.pageY) / 15;
      card.style.transform = 'rotateY(' + x + 'deg) rotateX(' + y + 'deg)';
    });

    mainDiv.addEventListener('mouseover', () => {
      santa.style.transform = 'translate3d(0, 0, 220px)';
      tree.style.transform = 'translate3d(0, 0, 120px)';
      card.style.transition = 'all 0.1s ease';
    });

    mainDiv.addEventListener('mouseout', () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      card.style.transition = 'all 0.5s ease';
      santa.style.transform = 'translate3d(0, 0, 0)';
      tree.style.transform = 'translate3d(0, 0, 0)';
    });

const soundOn = document.querySelector('.audio')
const buttonOn = document.querySelector('.music')

function playStop() {
  if (soundOn.paused) {
    soundOn.play();

    buttonOn.className = 'music',
    buttonOn.classList.add('sound-active');
  } else {
    soundOn.pause()
    buttonOn.className = 'music',
    buttonOn.classList.remove('sound-active');
    }
  }

  buttonOn.addEventListener('click', playStop);

  soundOn.addEventListener('ended', function() {
    buttonOn.className = 'music',
    buttonOn.classList.toggle('sound-active')
  })
})();