let navbar = document.querySelector('nav');

document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  if(scrollPosition > 100){
      navbar.classList.add('transparentChange');
      navbar.classList.remove('white');
      //logo.style.color = "white";
  }else{
    
    navbar.classList.add('white');
    navbar.classList.remove('transparentChange');
    //logo.style.color = "black";
  }


})