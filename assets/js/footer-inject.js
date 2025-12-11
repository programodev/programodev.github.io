document.addEventListener("DOMContentLoaded", function() {
  fetch("/_includes/footer.html")
    .then(response => response.text())
    .then(html => {
      const footer = document.createElement("div");
      footer.innerHTML = html;
      document.body.appendChild(footer);
    });
});
