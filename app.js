(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.querySelector('.main-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({
      behavior: 'smooth'
    });
  });
  

  const cursor = document.getElementById("cursor");

  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  // Add a shrinking effect on click
  document.addEventListener("mousedown", () => {
    cursor.classList.add("small");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("small");
  });

  // Grow effect on hover over clickable elements
  const addHoverEffect = (elements) => {
    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("grow");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
      });
    });
  };

  const clickableElements = document.querySelectorAll("a, button");
  addHoverEffect(Array.from(clickableElements));
