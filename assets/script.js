const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slideIndex = 0;

document.getElementById("left").addEventListener("click", () => {
  if (slideIndex == 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  slideElements();

  let dots = document.getElementsByClassName("dot");
  dots[slideIndex].classList.add("dot_selected");

  if (slideIndex == slides.length - 1) {
    dots[0].classList.remove("dot_selected");
  } else {
    dots[slideIndex + 1].classList.remove("dot_selected");
  }
});

document.getElementById("right").addEventListener("click", () => {
  if (slideIndex == slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slideElements();

  let dots = document.getElementsByClassName("dot");
  dots[slideIndex].classList.add("dot_selected");

  if (slideIndex == 0) {
    dots[slides.length - 1].classList.remove("dot_selected");
  } else {
    dots[slideIndex - 1].classList.remove("dot_selected");
  }
});

function dotsNumbers() {
  const dots = document.getElementsByClassName("dots")[0];
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";

    if (slideIndex == i) {
      dot.classList.add("dot_selected");
    }
    dots.appendChild(dot);
  }
}

function slideElements() {
  const image = document.getElementsByClassName("banner-img")[0];
  image.src = "./assets/images/slideshow/" + slides[slideIndex].image;

  const text = document.querySelector("#banner p");
  text.innerHTML = slides[slideIndex].tagLine;
}

dotsNumbers();