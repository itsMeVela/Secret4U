onload = () =>{
  document.body.classList.remove("container");
};

const syncPointer = ({ x: pointerX, y: pointerY}) =>{
    const x = pointerX.toFixed(2)
    const y = pointerY.toFixed(2)
    const xp = (pointerX / window.innerWidth).toFixed(2)
    const yp = (pointerY / window.innerHeight).toFixed(2)
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--xp', xp)
    document.documentElement.style.setProperty('--y', y)
    document.documentElement.style.setProperty('--yp', yp)
  
  }
  document.body.addEventListener('pointermove', syncPointer)

  const noBtn =document.querySelector('.no-btn');
  const wrapper = document.querySelector('.wrapper');
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.width)) + 1;

    noBtn.style.left = i + 'px'
    noBtn.style.top = j + 'px';

  })

