 const track = document.getElementById("track");
    let speed = 1.5; // adjust speed

    // Duplicate images for seamless scroll
    track.innerHTML += track.innerHTML;

    let position = 0;
    function animate(){
      position -= speed;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    animate();

    // Pause on hover
    track.parentElement.addEventListener("mouseenter", () => speed = 0);
    track.parentElement.addEventListener("mouseleave", () => speed = 0.5);

 function toggleDropdown() {
      document.getElementById("dropdown").style.display =
        document.getElementById("dropdown").style.display === "block" ? "none" : "block";
    }

    function selectOption(value) {
      document.getElementById("selected").innerText = value;
      document.getElementById("dropdown").style.display = "none";
    }

    // Close dropdown if clicked outside
    document.addEventListener("click", function(e) {
      if (!e.target.closest(".sort-box")) {
        document.getElementById("dropdown").style.display = "none";
      }
    });