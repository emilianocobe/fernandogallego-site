# fernandogallego.site

Sitio de **Fernando Martín Gallego**: filosofía, charlas, cursos y lecturas.
Es un sitio estático (HTML + CSS + un poco de JS, sin build) publicado con GitHub Pages.
Reemplaza al WordPress + Elementor anterior (hosting Hostinger), cuyo backup (`fernandogallego.WordPress.2026-09-21.xml`) queda **fuera** de este repositorio.

## Estructura

```
index.html            Landing: charla de apertura del sábado 3/10 + ciclo + trayectoria + CV corto + FAQ
sobre/                CV abreviado
curso/, curriculum/…  Redirecciones desde las URLs del WordPress viejo (no romper links ni Google)
404.html
assets/css/style.css  Identidad del Brandbook 2022 (violetas, Archivo + Noto Sans)
assets/js/main.js     Menú móvil, cuenta regresiva, barra fija de compra en móvil
assets/img/           Fotos optimizadas (webp + jpg), og-sabado.jpg para compartir
assets/brand/         Isologo y favicons
```

Para verlo localmente: `python -m http.server 8765` y abrir http://localhost:8765.

## Objetivos

### Corto plazo (hasta el 3/10/2026): vender el pase del sábado
Pase sábado 3/10 — $14.000 en [Passline](https://www.passline.com/eventos/festival-de-filosofia-de-buenos-aires-encuentro-de-primavera-546610):
charla *Introducción a la lectura de El Anti-Edipo* (19:00, Libario) + clase performática + Fiesta de Primavera.

- [x] Landing centrada en una sola acción: comprar el pase (5 botones + barra fija en móvil).
- [x] Todos los links a Passline llevan UTM (`utm_campaign=pase-sabado`, `utm_content=<ubicación>`) para saber qué botón vende.
- [x] Imagen para compartir (Open Graph) y datos estructurados `Event` para Google.
- [ ] Apuntar el dominio a GitHub Pages (ver abajo).
- [ ] Link en la bio de Instagram → `https://fernandogallego.site/?utm_source=ig&utm_medium=social&utm_content=link_in_bio`.
- [ ] Publicar la story/placa (1080×1920) y las "bajadas para placas" del documento de trabajo, una por día hasta el sábado.
- [ ] Mensaje directo a asistentes de los ciclos anteriores (104 encuentros desde 2022: es el público más caliente).
- [ ] Pedirle a Libario y al festival que compartan el link.

### Mediano plazo (oct. 2026 – may. 2027): el ciclo como comunidad
- Página del ciclo con el calendario público (cuando esté cerrado; hoy es borrador).
- Lista de correo propia (el ciclo es gratuito: el valor está en tener el contacto).
- Registro de cada encuentro (bajadas, citas, audio si se graba) como archivo público y material para SEO.
- Medición: analítica sin cookies (p. ej. Plausible/GoatCounter) para no depender sólo de Passline.

### Largo plazo: la marca Fernando Gallego
- Oferta paga propia (cursos online sincrónicos, como el de *La genealogía de la moral* de 2022) con cobro en ARS y USD.
- Archivo de los nueve tramos (2022–2026) como biblioteca de lecturas.
- Consolidar el posicionamiento del Brand Key: filosofía seria, textos exclusivamente filosóficos, accesible para profesionales de otras disciplinas.

## Publicar en el dominio fernandogallego.site

Hoy el dominio apunta a Hostinger (WordPress). Para pasar al sitio nuevo, en **Hostinger → Dominios → fernandogallego.site → DNS**:

1. Borrar los registros `A` de `@` actuales (147.79.105.59 y 77.37.42.105) y crear cuatro `A` para `@`:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. `CNAME` de `www` → `emilianocobe.github.io`
3. **No tocar los registros MX** (`mx1/mx2.hostinger.com.ar`): el correo `info@fernandogallego.site` sigue en Hostinger.
4. En GitHub → Settings → Pages → Custom domain: `fernandogallego.site`, y activar *Enforce HTTPS* cuando aparezca el certificado.

El WordPress sigue existiendo en Hostinger hasta que se decida darlo de baja (conviene esperar a que el sitio nuevo funcione en el dominio).
