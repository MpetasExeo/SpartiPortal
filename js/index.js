  
var ExeoCarousel = function(id, itemsCount){
  
  function init(){
    var carousel =document.getElementById(id)
    let items = carousel.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    
    let next = el.nextElementSibling;
    for (var i = 1; i < itemsCount; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild1 = next.cloneNode(true);
      el.appendChild(cloneChild1.children[0]);
      next = next.nextElementSibling;
    }
  });
  }
  return {
    Initialize: init
  }
}