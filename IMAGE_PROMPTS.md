# Image Prompts and Placement Map

Use these prompts to generate replacement images. Keep 16:9 or 4:3 where noted, export WebP/JPG ~150–250 KB, and place files under `public/images/` with the listed filenames.

## Homepage `src/pages/index.astro`
- Hero background `factory-line.webp` (16:9):
  - “High-end deodorant filling line inside a Middle East cosmetics factory, stainless conveyor with roll-on bottles, teal accent lighting, shallow depth of field, clean GMP environment, cinematic.”
- Gallery `lab.webp` (4:3):
  - “Quality control lab technicians testing deodorant samples, pH meter and GC-MS in background, white lab coats, Arabic signage subtle, bright laboratory lighting.”
- Gallery `warehouse.webp` (4:3):
  - “Finished goods warehouse with labeled deodorant cartons on pallets, pallet jack, clean aisles, export-ready vibe, soft natural light.”
- Extra gallery placeholders (swap the Unsplash URLs by saving as local files, e.g. `factory-gear.webp`, `mixing-room.webp`, `qc-team.webp`):
  - “Industrial filling machinery close-up, stainless steel nozzles and conveyors, teal safety rails, high contrast, 4:3.”
  - “Cosmetics mixing room with stainless kettles, overhead piping, operator checking gauges, 4:3.”
  - “QC team inspecting deodorant packaging at a table, clipboards and sample trays, warm neutral tones, 4:3.”

## Contact page `src/pages/contact.astro`
- `office.webp` (4:3):
  - “Modern B2B sales office with Arabic-English branding on wall, light wood desk, laptop and product samples, daylight.”

## Deodorant category `src/pages/deodorant/index.astro`
- `spray.webp` (1:1–4:3):
  - “Deodorant spray can mockup on minimal podium, teal and white branding, soft shadow, clean studio background.”
- `rollon.webp` (1:1–4:3):
  - “Roll-on deodorant bottle mockup, frosted glass, teal cap, on marble surface with subtle shadow, premium look.”
- `stick.webp` (1:1–4:3):
  - “Deodorant stick mockup, sleek rectangular tube, matte teal finish, on neutral background with soft light.”

## Product-specific pages
- Natural hero `natural-hero.webp` (`src/pages/deodorant/natural.astro`, 16:9):
  - “Natural deodorant roll-on on a wooden slab with green leaves, soft daylight, minimal Arabic label, fresh and clean mood.”
- Oud/musk hero `oud-hero.webp` (`src/pages/deodorant/oud-musk.astro`, 16:9):
  - “Luxury deodorant bottle with oud and musk notes, placed beside oud wood and amber resin, dark moody background, gold accents.”
- Whitening hero `whitening-hero.webp` (`src/pages/deodorant/whitening.astro`, 16:9):
  - “Bright clean deodorant bottle for whitening/brightening, white and teal design, soft glow, on light marble with gentle reflections.”

## How to replace
1) Generate the image with the prompt, export WebP (preferred) or JPG.  
2) Save into `public/images/` with the same filename (or update the filename in the referenced Astro file).  
3) Keep similar aspect ratios to avoid layout shifts.  
4) Run `npm run dev` to verify visuals.
