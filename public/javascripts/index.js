
    // Iterated Heading
    const headings = [
      "Join the movement",
      "Gå med i rörelsen",
      "Deltag i bevægelsen",
      "Únete al movimiento",
      "운동에 참여하세요",
      "Rejoignez le mouvement",
      "Unisciti al movimento",
      "Junte-se ao movimento",
      "加入运动"
    ];

    let index = 0;
    const headingElement = document.getElementById("iterated-heading");

    function changeHeading() {
      headingElement.classList.remove("show");
      setTimeout(() => {
        headingElement.textContent = headings[index];
        headingElement.classList.add("show");
        index = (index + 1) % headings.length;
      }, 500);
    }

    changeHeading(); // Initial
    setInterval(changeHeading, 2000);

    // Mobile Popup Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
    });
