var zagact = false;
const element = document.getElementById("D-btn");
element.addEventListener("click", images);

const element2 = document.getElementById("B-btn");
element2.addEventListener("click", videos);

const element3 = document.getElementById("A-btn");
element3.addEventListener("click", texts);

const element4 = document.getElementById("C-btn");
element4.addEventListener("click", games);

function images() {
    document.getElementById("videos").style.display = "none";
    document.getElementById("texts").style.display = "none";
    document.getElementById("images").style.display = "block";
    document.getElementById("games").style.display = "none";
  }

  function videos() {
    document.getElementById("videos").style.display = "block";
    document.getElementById("texts").style.display = "none";
    document.getElementById("images").style.display = "none";
    document.getElementById("games").style.display = "none";
  }

  function texts() {
    document.getElementById("videos").style.display = "none";
    document.getElementById("texts").style.display = "block";
    document.getElementById("images").style.display = "none";
    document.getElementById("games").style.display = "none";
  }

  function games() {
    document.getElementById("videos").style.display = "none";
    document.getElementById("texts").style.display = "none";
    document.getElementById("images").style.display = "none";
    document.getElementById("games").style.display = "block";
  }

function activatezag() {
    if (zagact == false) {
        zagact = true;
        document.getElementById("fi").style.height = "200px";
        document.getElementById("extras").style.opacity = "100%";
        document.getElementById("extrasG").style.opacity = "100%";
    } else if (zagact == true) {
        zagact = false;
        document.getElementById("fi").style.height = "45px";
        document.getElementById("extras").style.opacity = "0%";
        document.getElementById("extrasG").style.opacity = "0%";
    }
}

