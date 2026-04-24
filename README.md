# FisioFelix — Astro + Tailwind CSS

Landing page profesional para la clínica de fisioterapia **FisioFelix** en Denia, España.  
Construida con **Astro 4**, **Tailwind CSS 3** y **Vanilla JS/TypeScript**.

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.example .env
# → edita .env y añade tu PUBLIC_BACKEND_URL

# 3. Arrancar en desarrollo
npm run dev

# 4. Compilar para producción
npm run build

# 5. Preview del build
npm run preview
```

---

## 📁 Estructura del proyecto

```
fisiofelix-astro/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro          ← Navbar fija con menú móvil
│   │   ├── Hero.astro            ← Sección principal con CTA
│   │   ├── Services.astro        ← Grid de 6 servicios
│   │   ├── Team.astro            ← Perfil de Felix Maximo Fischer
│   │   ├── Booking.astro         ← Agenda + tarifas + Stripe
│   │   ├── Testimonials.astro    ← 3 reseñas de pacientes
│   │   ├── Location.astro        ← Mapa + horarios + contacto
│   │   ├── Footer.astro          ← Pie de página completo
│   │   ├── ChatWidget.astro      ← Chat IA (conectado al backend)
│   │   └── WhatsAppButton.astro  ← Botón flotante WhatsApp
│   ├── layouts/
│   │   └── Layout.astro          ← HTML base, fuentes, SEO
│   └── pages/
│       ├── index.astro           ← Página principal
│       ├── success.astro         ← Confirmación de pago Stripe
│       └── 404.astro             ← Página de error
├── .env.example
├── .gitignore
├── astro.config.mjs
├── tailwind.config.mjs
├── vercel.json
└── package.json
```

---

## ⚙️ Variables de entorno

| Variable               | Descripción                               |
|------------------------|-------------------------------------------|
| `PUBLIC_BACKEND_URL`   | URL base del backend FastAPI (sin `/`)    |

En Vercel: **Settings → Environment Variables**.

---

## 📅 Conectar la agenda de citas

### Google Calendar Appointments
1. Google Calendar → **"Citas"** → Nueva programación
2. Compartir → **"Insertar"** → copiar el `src` del iframe
3. En `src/components/Booking.astro` → pegar en `calendarUrl`

### Microsoft Bookings
1. Microsoft 365 → **Bookings** → tu negocio
2. Página de reservas → **"Insertar en sitio web"** → copiar URL
3. En `src/components/Booking.astro` → pegar en `bookingsUrl`

> Si configuras ambos, aparecerá automáticamente un selector de pestañas.

---

## 💳 Pagos con Stripe

El componente `Booking.astro` llama al endpoint `/api/checkout/session` del backend.  
Asegúrate de que `PUBLIC_BACKEND_URL` apunta al backend desplegado.

---

## 🚢 Deploy en Vercel

```bash
# Opción A — desde GitHub (recomendado)
git init && git add . && git commit -m "feat: initial commit"
gh repo create fisiofelix-astro --public --push

# Luego en vercel.com → "Add New Project" → importar el repo

# Opción B — CLI
npm i -g vercel && vercel --prod
```

**Framework detectado automáticamente:** Astro  
**Build command:** `npm run build`  
**Output directory:** `dist`

---

## 🎨 Paleta de colores

| Token          | Hex        | Uso                        |
|----------------|------------|----------------------------|
| `primary`      | `#0EA5E9`  | Botones, enlaces, iconos   |
| `primary-dark` | `#0284C7`  | Hover de primary           |
| `secondary`    | `#F0F9FF`  | Fondos de sección suaves   |
| `accent`       | `#10B981`  | Badges, checks, indicadores|
| `brand`        | `#1E293B`  | Texto principal            |
| `surface`      | `#FDFBF7`  | Fondos cálidos             |
| `whatsapp`     | `#25D366`  | Botón WhatsApp             |

---

## 🔤 Tipografía

- **Headings:** Outfit (Google Fonts) — `font-heading`
- **Body:** Figtree (Google Fonts) — `font-body` (default)

---

Hecho con ❤️ en Denia, España.
