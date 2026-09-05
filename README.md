# Rani Jadhav — Java Developer Portfolio

A premium, animated personal portfolio built with React, Vite, Tailwind CSS and
Framer Motion. All content (skills, projects, education, certifications,
contact links) is sourced directly from the resume — nothing is invented.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animation)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Known placeholders / things to fill in

The resume did not include the following, so they are handled honestly
rather than invented:

- **Live demo URLs** — none of the three projects had a deployed URL, so no
  "Live Demo" buttons were created. If you deploy a project, add its URL to
  `src/data/projects.js` (the `demo` field) and a button will need to be
  added back into `ProjectCard.jsx` / `ProjectModal.jsx`.
- **GitHub repo links for "Flower Shop Website" and "QuizTube"** — only the
  SkillMint repo was linked on the resume. The other two projects link to
  your GitHub profile instead, with a small "repo n/a" label on the card.
  Add the real repo URLs to `src/data/projects.js` (`github` field) once
  they're public.
- **Certification dates** — the resume didn't list issue dates for any
  certification, so none are shown in `src/data/education.js`.
- **Custom domain / OG image** — `index.html` references
  `https://ranijadhav.dev/` and an OG image path as placeholders. Update
  these once you have a real domain, or remove them.

## Project structure

```
src/
  components/   # Navbar, cursor, cards, modal, terminal, icons, etc.
  sections/     # Hero, About, Skills, Projects, Timeline, Certifications, Contact
  data/         # projects.js, skills.js, education.js, socialLinks.js
  hooks/        # useTheme, useActiveSection, useIsDesktopPointer
public/
  Rani_Jadhav_Java_Developer_Resume.pdf   # the actual resume, linked from the site
```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo in Vercel — it auto-detects Vite (build command
   `npm run build`, output directory `dist`).
3. Done. No environment variables are required.

## Notes

- Dark mode is the default; the theme toggle in the navbar switches to a
  light palette.
- The custom cursor and full animation set automatically disable on touch
  devices and respect `prefers-reduced-motion`.
- The interactive terminal in the hero section runs on real resume data —
  try `help`, `skills`, `projects`, `education`, `certifications`, `contact`.
