# CLAUDE.md

> ## ⚠️ Você está em uma de CINCO landers quase idênticas
>
> | | |
> |---|---|
> | **Domínio** | `www.weedmedbr.com.br` |
> | **Compliance** | COM cannabis (marca weedmed completa) |
> | **CTA** | link para /avaliacao |
>
> As outras quatro variantes estão em `~/oficialwm/`. **Mudança certa numa é errada
> na outra.** A matriz completa dos cinco (domínio, eixo de cannabis, eixo de CTA)
> está em `~/Desktop/_CONTEXTO_CLAUDE/04_STACK_E_DEPLOY.md`.
>
> Em repo de link, o CTA é âncora e nunca deve virar `<button class="open-chat">`.
> Em repo Leadster, o CTA é `<button type="button" class="open-chat">`.
>
> **Contexto de negócio** (ICP, marca, compliance de cannabis, números oficiais,
> metas do mês) não está aqui. Está em `~/Desktop/_CONTEXTO_CLAUDE/`, começando
> pelo `00_LEIA_PRIMEIRO.md`. Regras que valem para todo projeto weedmed:
> `~/weedmedcare/docs/REGRAS-DA-CASA.md`.
>
> Duas que sempre pegam: **nunca usar travessão** em nada, e a marca escreve-se
> `weedmed` em caixa baixa (nesta lander, `weemed` quando a copy evita cannabis).
>
> Antes de dar push: `git checkout -- public/sitemap.xml`, `git rebase origin/main`,
> e **build verde confirmado**.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Astro dev server
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Tech Stack

- **Astro 5** for static site generation (MPA)
- **React 19** with TypeScript for interactive components
- **Tailwind CSS 3** for styling (utility-first)
- **Framer Motion** for animations

## Architecture

### Routing (File-based)
- `src/pages/index.astro` - Home page
- `src/pages/forms.astro` - Forms page (under construction)

### Astro Islands Pattern
Components use client directives for partial hydration:
- `client:load` - Header and Hero (needed immediately)
- `client:visible` - Below-fold components (lazy hydrate when scrolled into view)
- `client:idle` - Footer (low priority)

### Project Structure
```
src/
├── layouts/Layout.astro   # Base HTML with GTM/Leadster scripts
├── pages/*.astro          # File-based routes
├── components/*.tsx       # React components (islands)
└── styles/global.css      # Tailwind directives
```

### External Integrations
- **GTM**: Container GTM-M8T3NGTH (in Layout.astro head)
- **Leadster Chat**: `.open-chat` class triggers chat widget
- **TrustIndex**: Dynamic script injection in WrittenTestimonials.tsx

### Styling Conventions
- Inline styles for complex gradients (purple header, green CTA buttons)
- Tailwind for layout, spacing, and responsive design
- Font family set via inline `style={{ fontFamily: 'Inter, sans-serif' }}`

## Brand Colors

- **Primary Purple Gradient**: `#a78bfa → #7c3aed → #6d28d9`
- **Primary Green Gradient**: `#4ade80 → #22c55e → #16a34a`

## Language

- UI text is in **Portuguese (Brazilian)**
