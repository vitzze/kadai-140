'use strict';

{

// -------------------
// ハンバーガメニュー
// -------------------

  const hamMenu = document.querySelector('.ham-menu');
  const overlay = document.getElementById('overlay');
  const hamNavi = document.getElementById('ham-navigation');
  const hamSections = document.querySelectorAll('.ham-section');

  

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    hamNavi.classList.toggle('active');
  });

  hamSections.forEach((hamSection) => {
    hamSection.addEventListener('click', function () {
      hamMenu.classList.remove('active');
      overlay.classList.remove('active');
      hamNavi.classList.remove('active');  
    });
  });



// -------------------
// slick（jQuery）
// -------------------


  $(document).ready(function(){
    $('.slick-area').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: false,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '50px',
            slidesToShow: 1
          }
        }
      ]
    });
  });

// -------------------
// フェードイン
// -------------------

const fadeTargets = document.querySelectorAll(".fadeIn");

const fadeOption = {
  root: null,
  // rootMargin: "20% 0px",
  rootMargin: '0px 0px -10px',

  threshold: .5,
};

const targets = (entries, observer) => {
  entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    }
  )
}

const fadeObserver = new IntersectionObserver(targets, fadeOption);

fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});


}

