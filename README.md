# Thisum Fernando Portfolio

A modern single-page personal portfolio website for Thisum Fernando, a Data Science undergraduate and full-stack developer.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Custom CSS
- Motion / Framer Motion
- Lucide React
- React Icons
- Vercel

## Features

- Dark premium portfolio design
- Responsive layout
- Smooth animations
- Project cards with image support
- Resume download button
- GitHub, LinkedIn, and Email links
- Ready for Vercel deployment

## Project Images

Add one image for each project inside:

```text
public/projects/
```

Recommended image paths:

```text
/projects/smart-campus.png
/projects/weather-cleaning.png
/projects/autofiks.png
/projects/movierazzi.png
```

Then update each project in:

```text
src/data/projects.js
```

Example:

```js
image: '/projects/smart-campus.png'
```

## Resume

Place the resume file here:

```text
public/Thisum_Fernando_Resume.pdf
```

Resume path used in the website:

```text
/Thisum_Fernando_Resume.pdf
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Deploy on Vercel with these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Contact

- GitHub: https://github.com/thisumdev
- LinkedIn: https://www.linkedin.com/in/thisum-fernando/
- Email: thisumebuss@gmail.com
