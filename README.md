# Event Landing — Neon Nights Live

Pequeña página de aterrizaje para un evento musical llamada **Neon Nights Live**. Está construida con Next.js (App Router) y TypeScript, y sirve como plantilla para promocionar conciertos, eventos y vender entradas.

## Qué incluye

- Secciones: `About`, `Features` (highlights), banner, `CTA` (tickets), `Nav` y `Footer`.
- Componentes principales: `app/page.tsx`, `app/layout.tsx`, `app/sections/*`.
- Assets: imágenes en `public/` (por ejemplo `banner.webp`, `party.webp`).

## Tecnologías

- Next.js (App Router) con TypeScript
- Tailwind CSS para estilos utilitarios
- `next/image` para optimización de imágenes

## Ejecutar en desarrollo

Instala dependencias y levanta el servidor de desarrollo (usa `pnpm`, `npm` o `yarn` según prefieras):

```bash
pnpm install
pnpm dev
```

Alternativas:

```bash
npm install
npm run dev
```

Luego abre http://localhost:3000 en tu navegador.

## Estructura rápida

- `app/layout.tsx` — Layout global, incluye banner, `Nav` y `Footer`.
- `app/page.tsx` — Página principal que monta `About`, banner, `Features` y `CTA`.
- `app/sections/` — Componentes de secciones reutilizables.

## Personalización y notas

- Actualiza textos como fecha, descripción y artistas en `app/sections/*` para reflejar tu evento.
- El botón del CTA es actualmente estático; integra el flujo de compra (enlace a checkout o proveedor de tickets) según tu plataforma.
- Los estilos usan utilidades Tailwind y una clase `bg-accent`; ajusta la configuración de Tailwind si cambias colores.

## Despliegue

Se despliega fácilmente en Vercel (recomendado), Netlify u otros hosts compatibles con Next.js. Conecta el repositorio y Vercel detectará el framework automáticamente.

## Contribuir

Si quieres mejorar la plantilla, haz un fork, crea una rama con tus cambios y abre un pull request.

---

¿Quieres que actualice este README con instrucciones de despliegue específicas para Vercel o con un ejemplo de integración de pago para el CTA?
