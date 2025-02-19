const links = document.querySelectorAll(".link");
const hoverImage = document.getElementById("hover-image");

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    const imageSrc = this.getAttribute("data-image");
    hoverImage.src = imageSrc;
    hoverImage.style.display = "block"; // Hiện hình ảnh
  });

  link.addEventListener("mouseout", function () {
    hoverImage.style.display = "none"; // Ẩn hình ảnh khi không hover
  });
});
