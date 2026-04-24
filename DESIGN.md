# MSNRCore Design System

## Visual Theme

MSNRCore uses a minimal premium trading-analysis aesthetic: near-black backgrounds, restrained cyan/blue/violet accents, chart-like geometry, subtle motion, and dense but readable education layouts. The website must feel like a serious market-structure research platform, not a broker, signal room, or crypto hype page.

## Design Tokens

- Background: `#05070b`
- Main surface: `#0b1018`
- Elevated surface: `#111824`
- Border: `rgba(255,255,255,0.10)`
- Primary text: `#f4f7fb`
- Muted text: `#91a0b6`
- Cyan accent: `#67e8f9`
- Blue accent: `#60a5fa`
- Violet accent: `#a78bfa`
- Bullish chart green: `#34d399`
- Bearish chart red: `#fb7185`

## Spacing Scale

- Page sections: `py-16 sm:py-20`
- Containers: max width `7xl`, horizontal padding `px-4 sm:px-6 lg:px-8`
- Cards: `p-5` to `p-6`, large feature cards `p-8 sm:p-12`
- Grid gaps: `gap-5` for cards, `gap-8` for hero and major split layouts

## Typography Rules

- Font: Geist Sans for body and headings, Geist Mono for labels and market-data style details
- Page titles: `text-4xl sm:text-6xl`, tight tracking, semibold
- Section titles: `text-3xl sm:text-4xl lg:text-5xl`, semibold
- Body copy: `text-slate-400`, `leading-8`
- Labels: uppercase, letter-spaced, small, muted or cyan

## Card Rules

- Use rounded `3xl` cards with thin white borders and subtle glass surfaces
- Hover states should increase border visibility and surface brightness, not add noisy glow
- Chart cards should include dashboard chrome, grid lines, labels, and muted axis/zone references

## Button Rules

- Primary: cyan-filled, rounded full, compact and confident
- Secondary: dark translucent surface with border
- Ghost: text-focused, used only for lower-priority navigation
- No dead buttons. Every CTA must navigate, validate, expand, filter, or scroll

## Badge Rules

- Badges use uppercase microcopy with subtle cyan backgrounds
- Difficulty pills use neutral borders and muted text

## Chart Visual Style

- Prefer custom SVG/React chart visuals over stock photos
- Use realistic market-analysis elements: candles, sweep labels, FVG zones, order blocks, retracement levels, session windows, structure labels
- Green/red appear only in chart contexts
- Never copy TradingView assets; use original vector layouts inspired by common chart-analysis conventions

## Motion Rules

- Motion should be subtle: reveal, small translate, opacity, mobile panel slide, accordion height
- Avoid noisy animation loops, excessive glow, or aggressive marketing effects

## Content Rules

- Educational only
- No profit promises
- No fake earnings
- No signal-selling language
- Always preserve disclaimer context where appropriate
