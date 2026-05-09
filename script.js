// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", function(){

  const nav = document.querySelector("nav");

  if(window.scrollY > 50){

    nav.style.background = "#050505";
    nav.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";

  }

  else{

    nav.style.background = "transparent";
    nav.style.boxShadow = "none";

  }

});



// SCROLL ANIMATION

const cards = document.querySelectorAll(
  ".project-card,.stat,.service-card"
);

window.addEventListener("scroll", reveal);

function reveal(){

  const trigger =
  window.innerHeight * 0.85;

  cards.forEach((card)=>{

    const top =
    card.getBoundingClientRect().top;

    if(top < trigger){

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }

  });

}


// INITIAL STATE

cards.forEach((card)=>{

  card.style.opacity = "0";

  card.style.transform =
  "translateY(60px)";

  card.style.transition =
  "0.8s ease";

});