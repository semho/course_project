/*---------------- Header ----------------*/

// Top header
// переход от меню к разделам
const anchors = document.querySelectorAll('a.nav-header__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Bottom header
// нижнее выпадающее меню
var el = document.getElementsByClassName('nav-direction__item');

for(var i=0; i<el.length; i++) {
 // el[i].addEventListener('mouseenter', showSub, false);
  el[i].addEventListener('click', clickSub, false)
  el[i].addEventListener('mouseleave', hideSub, false);
}

// function showSub() {
//   if(this.children.length>1) {
//     this.children[1].classList.add('show');
//   } else {
//     return false;
//   }
// }

function clickSub() {
  if(this.children.length>1) {
    this.children[1].classList.add('nav-direction__show');
  } else {
    return false;
  }
}

function hideSub() {
  if(this.children.length>1) {
    this.children[1].classList.remove('nav-direction__show');
  } else {
    return false;
  }
}

//скрол в выпадающем меню

 const simpleBar1 = new SimpleBar(document.getElementById('scroll-1'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar1.recalculate();

 const simpleBar2 = new SimpleBar(document.getElementById('scroll-2'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar2.recalculate();

 const simpleBar3 = new SimpleBar(document.getElementById('scroll-3'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar3.recalculate();

 const simpleBar4 = new SimpleBar(document.getElementById('scroll-4'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar4.recalculate();

 const simpleBar5 = new SimpleBar(document.getElementById('scroll-5'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar5.recalculate();


/*-------------- End Header ----------------*/
