<!-- JavaScript -->
  <script>
    // Progress bar
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      document.getElementById("progress-bar").style.width = scrollPercent + "%";
    });

    // Staggered animation for menu cards & gallery images
    function revealOnScroll() {
      const cards = document.querySelectorAll(".card");
      const images = document.querySelectorAll(".gallery-grid img");

      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const elementTop = card.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          setTimeout(() => card.classList.add("show"), index * 200);
        }
      });

      images.forEach((img, index) => {
        const elementTop = img.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          setTimeout(() => img.classList.add("show"), index * 150);
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);

    // Smooth scroll
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  </script>