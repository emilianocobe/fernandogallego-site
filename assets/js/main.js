// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const abierta = nav.classList.toggle("abierta");
    toggle.setAttribute("aria-expanded", String(abierta));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("abierta");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Cuenta regresiva a la charla: sábado 3/10/2026, 19:00 (Buenos Aires, UTC-3)
const INICIO = new Date("2026-10-03T19:00:00-03:00");
const cuenta = document.querySelector("[data-cuenta]");
function actualizarCuenta() {
  if (!cuenta) return;
  const resta = INICIO - Date.now();
  if (resta <= 0) {
    cuenta.innerHTML = "<p class='nota'>La charla de apertura ya empezó. El ciclo sigue todos los sábados a las 19:00 en Libario.</p>";
    document.querySelectorAll("[data-solo-antes]").forEach((el) => el.remove());
    return;
  }
  const d = Math.floor(resta / 864e5);
  const h = Math.floor((resta % 864e5) / 36e5);
  const m = Math.floor((resta % 36e5) / 6e4);
  cuenta.querySelector("[data-d]").textContent = d;
  cuenta.querySelector("[data-h]").textContent = String(h).padStart(2, "0");
  cuenta.querySelector("[data-m]").textContent = String(m).padStart(2, "0");
  setTimeout(actualizarCuenta, 30000);
}
actualizarCuenta();

// Barra fija de compra en móvil: aparece al pasar el hero, se oculta en la sección final
const barra = document.querySelector(".barra-compra");
const hero = document.querySelector(".hero");
const cierre = document.querySelector(".cierre");
if (barra && hero && "IntersectionObserver" in window) {
  let heroVisible = true;
  let cierreVisible = false;
  const pintar = () => barra.classList.toggle("visible", !heroVisible && !cierreVisible);
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; pintar(); }).observe(hero);
  if (cierre) new IntersectionObserver(([e]) => { cierreVisible = e.isIntersecting; pintar(); }).observe(cierre);
}
