# Espacio Sintra — Web Oficial Estática (`www.espaciosintra.es`)

Web estática de **Espacio Sintra** (sala privada de celebraciones de 98 m² en Calle Omega, 1, Vicálvaro, 28032 Madrid), migrada 1:1 desde Framer a **GitHub Pages (0 €/mes)** el **24 de noviembre de 2026** (ahorro directo: **180 € + IVA / año**).

- **Producción:** https://www.espaciosintra.es/
- **Repositorio GitHub:** https://github.com/vicagbur/espaciosintra
- **Hosting:** GitHub Pages (`main` / `/ (root)`) con HTTPS forzado (`Enforce HTTPS`) y archivo [`CNAME`](CNAME) (`www.espaciosintra.es`).

---

## 1. Qué se ha migrado y construido

### Arquitectura y Rutas (12 rutas exactas preservadas — 0% pérdida SEO)
Todas las URLs originales de Framer se han mantenido mediante carpetas con `index.html`:

| Ruta | Descripción |
| :--- | :--- |
| `/` (`index.html`) | Portada: Hero con wordmark SVG + vídeo YouTube + Celebraciones + Resumen de Tarifas (rangos L-J / Finde) + 9 Reseñas + Insignia Google 4.8★ + 4 Pasos de reserva + Footer con mapa y enlaces. |
| `/el_espacio/` | Características completas de la sala (98 m², aforo 59 personas, parque de bolas, cama elástica, Xbox Series S, cocina/office, aseos). |
| `/tarifas/` | **Rediseñado (v2):** Calendario visual horario estilo **Google Calendar** (`10:00` → `22:00`, `GMT+1`) con 3 columnas (`Lunes a Jueves`, `Viernes y Vísperas`, `Sábado, Domingo y Festivos`), **Turno mixto\* de 6h** (`13:00–19:00*` entrada flexible), **calculadora interactiva en vivo** (Limpieza +30 €, Nevera llena +20 €) y **botón directo a WhatsApp con mensaje pre-relleno**. |
| `/galeria/` | Cuadrícula con las **18 fotos reales** de la sala + visor **lightbox** con navegación por flechas y teclado (`Esc`, `←`, `→`). |
| `/reservar/` | Proceso de reserva en 4 pasos + acceso directo a WhatsApp, Email, Instagram y Teléfono. |
| `/politica_reserva/` | Política de reserva, cambios y devoluciones (señal 50 €, fianza 100 €, pago 15 días antes). |
| `/terminos_condiciones/` | Normas de uso de la sala. |
| `/aviso_legal/` | Aviso legal (LSSI-CE). |
| `/politica_privacidad/` | Política de privacidad. |
| `/proteccion_datos/` | Protección de datos. |
| `/uso_cookies/` | Política de uso de cookies. |
| `/gracias/` | Página de agradecimientos. |
| `404.html` | Página de error personalizada con vuelta al inicio. |

### Activos 100% locales (0% dependencia de Framer)
Se han descargado y almacenado en `img/` todos los activos originales:
- `img/brand/`: Logotipos oficiales vectoriales (`ES_logotipo-02..06.svg`) y formas orgánicas (`ES_formas_-01..36.svg`) copiados de `c:\workspace\ESPACIOSINTRA\ES_Identidad visual\`.
- `img/galeria/01.jpg` a `18.jpg`: 18 fotos de la galería.
- `img/celebraciones/`: 5 fotos de tarjetas de celebración (`cumple_infantil.jpg`, `cumple_18.jpg`, `baby_shower.jpg`, `adultos.jpg`, `excusa.jpg`).
- `img/avatars/av1.png` a `av9.png`: 9 avatares de reseñas.
- `img/icons/ic1.svg` a `ic8.svg`: iconos de servicios.
- `img/favicon.png`, `img/apple-touch-icon.png`, `img/og-image.png`.

---

## 2. Sistema de Diseño (Marca Espacio Sintra)

Definido en [`assets/style.css`](assets/style.css) (tipografías Google Fonts: **Archivo** + **Inter**):
- **Azul oscuro (Cobalto):** `#1914d2` (`--cobalt`) → Header, Footer, Turno completo (texto blanco).
- **Azul índigo (Textos):** `#2e3092` (`--indigo`) → Titulares, textos principales y texto de turnos mañana/tarde/mixto.
- **Azul claro (Cielo):** `#1eaaff` (`--sky`) → Sección Celebraciones, círculos de pasos, Turno mañana.
- **Turquesa:** `#28d2c8` (`--turquoise`) → Sección Reseñas, botones de contacto, Turno tarde.
- **Verde lima (Menta):** `#afe68c` (`--mint`) → Botones CTA (`¡RESERVA!`), Turno mixto\*.

---

## 3. Reglas de Tarifas y Horarios (Sincronizadas con `gesintra`)

| Grupo de días | Mañana (`11:00–15:00`, 4h) | Tarde (`17:00–21:00`, 4h) | Mixto\* (`13:00–19:00*`, 6h) | Completo (`11:00–21:00`, 10h) | Hora extra |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Lunes a Jueves** *(no festivos ni vísperas)* | 80 € | 120 € | — | 170 € | +30 € |
| **Viernes y Vísperas** | 80 € | 160 € | — | 220 € | +40 € |
| **Sábados, Domingos y Festivos** | 160 € | 180 € | **260 €** *(entrada flexible)* | 310 € | +40 € |

- **Extras:** Servicio de limpieza (**30 €**), Nevera llena (**1 €/ud**, mínimo 20 uds = 20 €).
- **Reserva y Fianza:** Señal de **50 €** para bloquear fecha; resto + **100 €** de fianza reembolsable hasta 15 días antes.
- **Hora máxima de cierre:** **22:00h** de domingo a jueves (no vísperas de festivos) • **00:00h** viernes, sábados y vísperas de festivos.
- **Fechas especiales:** Consultar precios para Semana Santa y Navidad.

---

## 4. Configuración DNS (DonDominio → GitHub Pages)

- `CNAME` `www` → `vicagbur.github.io` ✅
- 4 registros `A` en `@` (`espaciosintra.es`):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **Pendiente menor en DonDominio:** eliminar la IP residual `31.214.178.25` (del antiguo parking/hosting de DonDominio) para que `https://espaciosintra.es` sin `www` también tenga certificado SSL propio sin aviso.
- **Correo intacto:** no tocar los registros `MX` ni `CNAME` de `mail`, `imap`, `pop`, `smtp`, `webmail`, `brevo1`, `brevo2`.

---

## 5. Desarrollo local y despliegue

```powershell
# Previsualizar en local
python -m http.server 8896 --bind 127.0.0.1 --directory c:\workspace\espaciosintra-web

# Validar JS antes de subir
node --check c:\workspace\espaciosintra-web\assets\app.js

# Desplegar a producción (www.espaciosintra.es)
git -C c:\workspace\espaciosintra-web add .
git -C c:\workspace\espaciosintra-web commit -m "Descripción del cambio"
git -C c:\workspace\espaciosintra-web push origin main
```

---

## 6. Roadmap sugerido de mejoras (Siguiente fase de rediseño)

1. **Rediseño del Hero en portada (`index.html`):** foto luminosa real del local + ubicación (`Vicálvaro, Madrid`) + insignia `4.8 ★ (+166 reseñas)` + CTA directo a WhatsApp en el primer pantallazo.
2. **Sección de Preguntas Frecuentes (FAQ)** con `<details>` nativo (tomando las dudas reales de `c:\workspace\gesintra\faqs.md`: comida propia, decoración, fianza, aparcamiento, cancelaciones) para reducir WhatsApps repetitivos y mejorar SEO local.
3. **Botón flotante discreto de WhatsApp** en móvil con mensaje pre-relleno.
4. **Limpieza visual de `index.html` y `/el_espacio/`** (mejorar jerarquía en móvil y recorrido por zonas).
5. *(Opcional futuro)* Widget de solo lectura de **días disponibles / ocupados** sincronizado con Google Calendar / `gesintra`.
