# MSNRCore

MSNRCore is a premium educational trading platform focused on market structure, SNR/MSNR, SMC, ICT, liquidity, order blocks, FVGs, and real chart analysis concepts.

This is not a broker, signal-selling website, or financial advice service. This website is for educational purposes only and does not constitute financial advice.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- Custom React/SVG chart visuals

## Setup

```bash
npm install
npm run build
npm start
```

For local production testing, Next.js reads the standard `PORT` environment variable. If no port is provided, Next.js uses `3000`.

## Vercel Deployment

The project is compatible with Vercel's standard Next.js build pipeline.

- Install command: `npm install`
- Build command: `npm run build`
- Output: handled by Vercel for Next.js App Router
- No server-only runtime or proprietary hosting dependency is required

## Design System

The internal design system is documented in `DESIGN.md`. It defines color tokens, typography rules, spacing, card rules, button variants, badge variants, chart visual rules, and motion guidance.

## Folder Structure

- `src/app` - App Router pages and dynamic routes
- `src/components/layout` - Navbar, mobile menu, footer, and logo
- `src/components/ui` - Reusable UI primitives
- `src/components/charts` - Custom SVG chart visuals
- `src/components` - Feature components for concepts, blog, strategies, and contact form
- `src/data` - Typed concepts, concept enhancements, articles, FAQ, strategies, and learning paths
- `src/lib` - Shared utilities and disclaimer text

## Assets And Licenses

No external images or copyrighted stock assets are used. The MSNRCore logo and all chart visuals are custom SVG/React components created inside the project.

Research and inspiration sources reviewed:

- VoltAgent `awesome-design-md` for design-system documentation structure and consistent token rules
- Figma MCP Server Guide for component reuse, design-context discipline, and avoiding placeholder assets
- SVGLogo.dev for SVG-first logo and export-ready vector thinking
- Pencil.dev for minimal product spacing and polished landing-page mood
- Bloom.ai was attempted but was not reachable during research
- Lucide Icons are used through the open-source `lucide-react` package

Real photos were intentionally not added because custom chart SVGs better match the trading-analysis educational goal and avoid licensing or broken URL risk.

Dependencies are open-source packages installed from npm. See each package license in `node_modules` or the package registry.

## Disclaimer

This website is for educational purposes only and does not constitute financial advice. Trading involves risk. Users are responsible for their own decisions, research, and risk management. Past examples do not guarantee future results.
