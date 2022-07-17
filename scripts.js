document.addEventListener("DOMContentLoaded", function() {
      const main = document.querySelector(".alter");
      const imgBox = document.querySelector(".img-box");
      const section = document.querySelector("section");
      const close = document.querySelector(".hambur");
      const lock = document.querySelector(".box");

      imgBox.addEventListener("click", () => {
            if (section.classList.contains("active1")) {
                  main.classList.remove("active2");
            } else {
                  section.classList.add("active1");
                  main.classList.add("active2");
                  lock.classList.add("active3");
            }
      });

      close.addEventListener("click", () => {
            if (section.classList.contains("active1")) {
                  main.classList.remove("active2");
                  section.classList.remove("active1");
                  lock.classList.remove("active3");
            } else {

            }
      });
});