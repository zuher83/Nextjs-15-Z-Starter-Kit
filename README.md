# 🚀 Next.js 15 Starter Kit with Shadcn UI

A modern and feature-rich starter template built with Next.js 15, Shadcn UI, and Tailwind CSS.

## ✨ Features

- ⚡ Next.js 15 with App Router
- 🎨 Shadcn UI with Custom Color Variants
- 🌈 Tailwind CSS 3.4
- 🌍 Internationalization with Next-intl (EN, FR, DE)
- 🔒 Public & Admin Routes
- 📱 Responsive Design
- 🛠️ TypeScript Support
- 💅 ESLint & Prettier Configuration

## 🌐 URL Structure

- Public Pages: `your-domain.com/{lang}` (e.g., `your-domain.com/en`)
- Admin Panel: `your-domain.com/admin`

## 🎯 Custom UI Components

Enhanced Shadcn components with additional variants:
- ✅ Success
- ⚠️ Warning
- ℹ️ Info

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies:
```
npm install
# or
yarn install
# or
pnpm install
```
3. Run the development server:
```
npm run dev
# or
yarn dev
# or
pnpm dev
```
4. Open http://localhost:3000 in your browser

## 🗂️ Project Structure
```
root/
├── messages/                    # Translation files for all languages
│   ├── en.json
│   ├── fr.json
│   └── de.json
├── public/                      # Static files
└── src/
    ├── app/
    │   ├── (private)/          # Private routes
    │   │   ├── admin/          # Admin dashboard
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── (public)/          # Public routes
    │   │   └── [locale]/      # i18n routes
    │   │       ├── layout.tsx
    │   │       └── page.tsx
    │   └── fonts/             # Local fonts
    ├── components/            # Reusable components
    │   ├── ui/                # Shadcn components
    │   └── layouts/           # Layout components
    ├── hooks/                 # Custom React hooks
    │   ├── use-mobile/        # Mobile related hooks
    │   └── use-toast/         # Shadcn Toast hooks
    ├── i18n/                  # i18n configuration
    │   ├── config.ts
    │   └── settings.ts
    ├── lib/                   # Utility functions
    │   └── utils/             # Helper functions
    ├── providers/             # React context providers
    │   └── theme-provider     # Theme switcher
    ├── types/                 # TypeScript definitions
    │   └── languages.d.ts
    └── styles/             # Global styles
        └── globals.css
```

## 🔧 Configuration
- next-intl: Language configuration in src/i18n.ts
- shadcn-ui: Theme configuration in components.json
- tailwind.config.js: Tailwind CSS configuration

## 📚 Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Next-intl](https://next-intl-docs.vercel.app)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Table](https://tanstack.com/table/latest)

## 📋 TODO List

### 📝 Rich Text Editor Integration
- [ ] Implement [Lexical Editor](https://lexical.dev/)
  - [ ] Configure basic editor setup
  - [ ] Add custom toolbar
  - [ ] Integrate with form components
  - [ ] Add markdown support

### 🎨 Additional UI Components
- [ ] [Aceternity UI](https://ui.aceternity.com/)
  - [ ] Animated components
  - [ ] Gradient effects
  - [ ] Tailwind templates

- [ ] [Magic UI](https://magicui.design/)
  - [ ] Advanced animations
  - [ ] Interactive components
  - [ ] Custom effects

## 📝 License
MIT License - feel free to use this starter kit for your projects!
