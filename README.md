# JavaScript Final Exam

**Author:** Adebayo Ojo  
**Project Title:** JavaScript Final Exam

## Description
A simple single-page project built with **pure HTML, CSS, and JavaScript** (no libraries).  
It demonstrates variables, arrays, objects, functions, conditionals, loops, DOM manipulation, events, simple form validation, and a tiny animation.

## Features
- **Arrays & Objects:** Renders a movie list and a student profile dynamically.
- **Function:** `calculateSquare(number)` with demo calls and an input form.
- **Conditionals:** Prompts for age and alerts a category.
- **Loops:** For-loop output (1–10) and while-loop sum (1–5).
- **DOM & Events:** Random background button + contact form validation with inline errors.
- **Polish/Bonus:** Responsive layout and fade-in animation on results.

## How to Run
1. Download/clone the repo.
2. Open `index.html` in any modern browser.
3. Open DevTools Console to see logs for Parts B & C outputs.

## Git Workflow (what I did)
```bash
# Part A
git init
echo "# JavaScript Final Exam" > README.md
git add .
git commit -m "Initial project setup"

# A2: base HTML + dev branch
git checkout -b development
git add index.html
git commit -m "Add base HTML structure"

# Part B
git add script.js
git commit -m "Add variables, arrays, and objects with DOM render"

# Part C
git commit -am "Add functions, conditionals, and loops"

# Part D
git commit -am "Add DOM events and form validation"

# Part E: feature-polish branch
git checkout -b feature-polish
git add style.css
git commit -m "Polish UI: hover effects, responsive grid, fade animation"
git checkout development
git merge feature-polish

# Finalize main branch and push to GitHub
git checkout -b main
git merge development
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```
> Ensure you make at least **5 meaningful commits** as shown.

## Notes
- Tested in the browser with no external libraries.
- Semantic HTML sections and accessible ARIA where appropriate.
