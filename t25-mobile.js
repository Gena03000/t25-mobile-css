document.addEventListener("DOMContentLoaded", function () {
  const wagons = document.querySelectorAll(".wagon");

  // Ajoute un effet au clic sur chaque wagon
  wagons.forEach((wagon) => {
    wagon.addEventListener("click", () => {
      const station = wagon.dataset.station;

      // Redirection vers une collection Shopify (exemple : /collections/tempo)
      window.location.href = `/collections/${station.toLowerCase()}`;
    });

    // Animation légère au survol
    wagon.addEventListener("mouseenter", () => {
      wagon.style.transform = "scale(1.05)";
    });
    wagon.addEventListener("mouseleave", () => {
      wagon.style.transform = "scale(1)";
    });
  });
});

