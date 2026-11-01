// Portfolio Antoine Mordant : bascule FR/EN et filtres de projets.
(function () {
  var CLE = "portfolio-langue";
  var racine = document.documentElement;

  function lire() {
    try { return localStorage.getItem(CLE); } catch (e) { return null; }
  }
  function ecrire(v) {
    try { localStorage.setItem(CLE, v); } catch (e) { /* stockage indisponible */ }
  }

  function langueInitiale() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "fr" || param === "en") return param;
    var memo = lire();
    if (memo === "fr" || memo === "en") return memo;
    var nav = (navigator.language || "fr").toLowerCase();
    return nav.indexOf("fr") === 0 ? "fr" : "en";
  }

  function appliquer(langue) {
    racine.lang = langue;
    // Titre de la page
    var titre = racine.getAttribute("data-titre-" + langue);
    if (titre) document.title = titre;
    // Attributs traduits : data-alt-fr / data-alt-en, data-aria-fr / data-aria-en
    document.querySelectorAll("[data-alt-" + langue + "]").forEach(function (el) {
      el.setAttribute("alt", el.getAttribute("data-alt-" + langue));
    });
    document.querySelectorAll("[data-aria-" + langue + "]").forEach(function (el) {
      el.setAttribute("aria-label", el.getAttribute("data-aria-" + langue));
    });
    document.querySelectorAll(".langues button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-choix") === langue));
    });
  }

  appliquer(langueInitiale());

  document.querySelectorAll(".langues button").forEach(function (b) {
    b.addEventListener("click", function () {
      var l = b.getAttribute("data-choix");
      ecrire(l);
      appliquer(l);
    });
  });

  // Filtres de la grille de projets
  var boutons = document.querySelectorAll(".filtres button");
  boutons.forEach(function (b) {
    b.addEventListener("click", function () {
      var cat = b.getAttribute("data-filtre");
      boutons.forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      document.querySelectorAll(".grille .carte").forEach(function (c) {
        var cats = (c.getAttribute("data-cat") || "").split(" ");
        c.hidden = !(cat === "tous" || cats.indexOf(cat) !== -1);
      });
    });
  });
})();
