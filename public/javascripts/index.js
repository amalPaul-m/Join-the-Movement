
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



    const copyBtn = document.getElementById("copyBtn");
    const shareLink = "0xbd150c073A9f37A321Fc8d1Ba7a80E507ad006aa"; 

    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(shareLink)
            .then(() => {
                copyBtn.innerHTML = `<i class="bi bi-clipboard2-check"></i> Copied!`;
                setTimeout(() => copyBtn.innerHTML = '<i class="bi bi-clipboard2"></i>', 2000);
            })
            .catch(err => console.error("Failed to copy:", err));
    });