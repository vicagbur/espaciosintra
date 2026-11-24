# Espacio Sintra — Web Estática (GitHub Pages · 0 €/mes)

Réplica estática 1:1 de `www.espaciosintra.es` migrada desde Framer a GitHub Pages (ahorro: **180 € + IVA / año**), con todas las imágenes, logotipos SVG oficiales y las 12 rutas originales preservadas intactas.

## Publicación rápida en GitHub Pages (5 minutos)

1. Crea un repositorio público en GitHub llamado `espaciosintra-web` (o `espaciosintra`).
2. Sube este repositorio:
   ```powershell
   cd c:\workspace\espaciosintra-web
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/espaciosintra-web.git
   git push -u origin main
   ```
3. En GitHub → **Settings → Pages**:
   - Source: **Deploy from a branch** → `main` / `/ (root)`.
   - Custom domain: `www.espaciosintra.es` (ya está incluido en `CNAME`).
   - Marca **Enforce HTTPS** cuando aparezca el check verde.
4. En tu proveedor de DNS (`espaciosintra.es`):
   - **Registro `CNAME`** para `www` → `TU_USUARIO.github.io`
   - **4 registros `A`** para `@` (dominio raíz):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   *(Elimina los antiguos registros A/CNAME que apuntaban a Framer).*
