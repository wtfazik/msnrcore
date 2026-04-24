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

The production server uses Next.js and reads the standard `PORT` environment variable. If no port is provided, Next.js uses `3000`.

## VPS / Wispbyte Deployment

1. Upload the project folder by zip, file manager, or git clone.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start`.

Optional PM2 command:

```bash
pm2 start npm --name "msnrcore" -- start
```

The project uses `output: "standalone"` in `next.config.ts` for production-friendly server builds and does not require Vercel-specific features.

## Folder Structure

- `src/app` - App Router pages and dynamic routes
- `src/components/layout` - Navbar, mobile menu, footer, and logo
- `src/components/ui` - Reusable UI primitives
- `src/components/charts` - Custom SVG chart visuals
- `src/components` - Feature components for concepts, blog, strategies, and contact form
- `src/data` - Typed concepts, articles, FAQ, strategies, and learning paths
- `src/lib` - Shared utilities and disclaimer text

## Assets And Licenses

No external images or copyrighted stock assets are used. The MSNRCore logo and all chart visuals are custom SVG/React components created inside the project.

Dependencies are open-source packages installed from npm. See each package license in `node_modules` or the package registry.

## Disclaimer

This website is for educational purposes only and does not constitute financial advice. Trading involves risk. Users are responsible for their own decisions, research, and risk management. Past examples do not guarantee future results.
