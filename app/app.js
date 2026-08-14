/**
 * app.js
 * Propósito: Inyectar el saludo dinámico y la fecha actual
 * en la página. Sin dependencias externas.
 */

(function () {
  // ── Saludo según hora del día ──────────────────────
  function getGreeting() {
    const hora = new Date().getHours();
    if (hora >= 5  && hora < 12) return "¡Buenos días, Mundo! 🌅";
    if (hora >= 12 && hora < 18) return "¡Buenas tardes, Mundo! ☀️";
    return "¡Buenas noches, Mundo! 🌙";
  }

  // ── Fecha formateada en español ────────────────────
  function getFormattedDate() {
    return new Date().toLocaleDateString("es-CO", {
      weekday: "long",
      year:    "numeric",
      month:   "long",
      day:     "numeric",
    });
  }

  // ── Inyectar en el DOM ─────────────────────────────
  document.getElementById("greeting").textContent = getGreeting();
  document.getElementById("date").textContent     = getFormattedDate();
})();
