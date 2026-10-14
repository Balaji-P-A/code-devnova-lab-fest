# Code DevNova Lab — NOVAFEST 2026

A dark, futuristic, art-directed event showcase website built with React, Vite, React Router, and CSS motion effects.

## Included

- Fest homepage and organization footer
- All 11 event cards
- Separate event detail routes for each event
- Event rounds, eligibility, team-size placeholders, updates, and registration CTA
- Event category filters
- Announcement board
- Responsive mobile navigation
- Staggered scroll reveals and route-aware motion setup
- Animated hero centerpiece, looping ticker, interactive event-card lighting, hover depth, and micro-interactions
- Reduced-motion accessibility support
- Vercel SPA rewrite for direct links to event pages

## Run locally

Recommended: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Customize event information

Open `src/data.js`.

For each event, update:

- `registrationUrl`: actual Upstop, Google Forms, or registration URL
- `teamSize`
- `rounds`
- `updates`
- date and deadline copy in `src/App.jsx` where marked "To be announced"

The starter content intentionally uses placeholders for dates, prizes, official links, and final rules. Confirm these with the organizers before launching publicly.

## Customize organization details

Open `src/App.jsx` and replace:

- `ADD_OFFICIAL_EMAIL_HERE`
- Instagram link
- Footer copy / official links as needed

## Publish on Vercel using GitHub

1. Create a new GitHub repository, for example `code-devnova-lab-fest`.
2. Extract this ZIP and open a terminal in the extracted folder.
3. Run:

```bash
git init
git add .
git commit -m "Initial Code DevNova Lab fest website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/code-devnova-lab-fest.git
git push -u origin main
```

4. Visit https://vercel.com and sign in with GitHub.
5. Choose **Add New → Project**, import the repository.
6. Keep the detected framework as Vite. Build command: `npm run build`; output directory: `dist`.
7. Click **Deploy**. Vercel will provide a public `*.vercel.app` URL.
8. Future commits pushed to the connected production branch will trigger redeployment.

## Alternative: Vercel CLI

```bash
npm install
npm run build
npx vercel
```

Follow the prompts for a preview deployment. Use `npx vercel --prod` when you are ready to publish production.

## Important

- This is a frontend showcase; it does not save registrations or announcements to a database.
- Registration buttons remain disabled until a real `registrationUrl` is added to an event in `src/data.js`.
- Updates are manually edited in `src/data.js` and published by redeploying.
- Do not publish private participant data or credentials in this static site.
