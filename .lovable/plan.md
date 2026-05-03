## New Pricing Page (`/pricing`)

Create `src/pages/Pricing.tsx` and register the route in `src/App.tsx`. Reuse existing primitives (`SiteHeader`, `SiteFooter`, `Button` luxe/sage variants, `eyebrow` class, `bg-cream-deep`, `bg-gradient-sage`, serif headings) so the page feels native to the site.

### Route registration
In `src/App.tsx`, import `Pricing` and add `<Route path="/pricing" element={<Pricing />} />` above the catch-all.

### Page structure (top → bottom)

1. **SiteHeader**

2. **Hero** — `py-28 md:py-36`, optional `bg-gradient-sage` for warmth
   - Local `Eyebrow` helper (mirroring the one in `Index.tsx`) with label "Pricing & Investment"
   - H1 (`font-serif text-5xl md:text-7xl`): "Transparent, considered pricing."
   - Subheading (`text-lg text-muted-foreground max-w-2xl`): "No hidden fees. No long-term contracts. Cancel any time."

3. **Founding Family Offer banner** — `bg-sage-soft` rounded panel inside `container`, centered
   - Leaf emoji + copy: "Founding Family Offer — First introductory visit 50% off for our first 20 families."
   - `Button variant="luxe"` → `/#kindred-spirit` ("Claim Your Introductory Visit")

4. **Pricing tiers** — `py-28 md:py-36`, `grid md:grid-cols-3 gap-px bg-border border border-border` to match the bordered grid pattern used in Index pillars
   - Card 1 — **Standard Springer Visit**, £28 / hour, description + 4-feature list (Check icons, sage-deep)
   - Card 2 — **Springer Companionship Retainer**, £220 / month, marked "Most Popular" via a small sage badge (`bg-sage-deep text-cream` pill, top-right)
   - Each card: `bg-background p-10 flex flex-col`, serif title, large `font-serif text-5xl` price, feature list, CTA `Button variant="luxe"` → `/#kindred-spirit`
   - Note: brief skips "Card 2"; only the two cards above will be rendered (grid becomes `md:grid-cols-2` to stay balanced — flagged below for confirmation)

5. **What's Included** — `py-28 md:py-36 bg-cream-deep`
   - Eyebrow "Every Visit", H2 "What's always included."
   - 2×3 responsive grid (`grid sm:grid-cols-2 lg:grid-cols-3 gap-8`) of lucide icons + labels: `ShieldCheck` (DBS-checked Springers), `Sparkles` (Personality-matched pairing), `Users` (No rotating staff), `MessageCircle` (Family updates), `CalendarCheck` (Flexible scheduling), `Heart` (Genuine connection) — six items to fill the 2×3 layout the brief describes (only 4 were listed; two thematic additions added so the grid reads cleanly — flagged below)

6. **FAQ teaser** — `py-28 md:py-36`
   - Eyebrow "Questions", H2 "Common questions about pricing."
   - Muted paragraph as specified
   - `Button variant="luxe" size="xl"` using React Router `Link` to `/faq` with trailing `ArrowRight` icon (size 16)
   - Note: `/faq` is a static file (`public/faq.html`) — using `<Link>` to `/faq` will hit the SPA catch-all (NotFound). Flagged below.

7. **Closing CTA** — `py-28 md:py-36 bg-gradient-sage`, centered
   - H2: "Ready to find your Springer?"
   - Subtext as specified
   - `Button variant="luxe" size="xl"` → `/#kindred-spirit` ("Start Your Personality Match")

8. **SiteFooter**

### Points to confirm
- The brief lists "Card 1" and "Card 3" with no Card 2. I'll render two cards in a `md:grid-cols-2` layout. Want a third tier added, or keep two?
- The "What's Included" brief says "2x3 grid" but lists only 4 items. Okay to add `Flexible scheduling` and `Genuine connection` to fill the grid, or keep strictly 4 items in a 2×2?
- The FAQ button links to `/faq`, but the existing FAQ lives at `/faq.html` (static file). Should the link be a plain `<a href="/faq.html">` (matches the footer), or do you want a real `/faq` React route created?
