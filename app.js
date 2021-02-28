const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mob-navigation');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });

}

navSlide();