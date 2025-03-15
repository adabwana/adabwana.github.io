# Professional Data Science Portfolio

This repository contains the source code for my professional data science portfolio website, available at [adabwana.github.io](https://adabwana.github.io).

## Technologies Used

- **ClojureScript**: Functional programming for the frontend
- **shadow-cljs**: Build tooling for ClojureScript
- **Reagent**: React wrapper for ClojureScript
- **reitit**: Routing library for ClojureScript
- **htmx**: HTML extensions for dynamic content
- **Bootstrap 5**: CSS framework for responsive design
- **GitHub Pages**: Hosting and deployment

## Project Structure

- `src/adabwana/core.cljs`: Main ClojureScript file with routing and components
- `public/index.html`: Entry point HTML file
- `public/css/styles.css`: Custom CSS styles
- `public/htmx/`: HTMx components for dynamic content
- `.github/workflows/gh-pages.yml`: GitHub Actions workflow for automatic deployment

## Local Development

1. **Install dependencies**:
   ```
   npm install
   ```

2. **Start development server**:
   ```
   npm run watch
   ```
   This will start a development server at [http://localhost:8080](http://localhost:8080)

3. **Build for production**:
   ```
   npm run release
   ```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch, using the GitHub Actions workflow defined in `.github/workflows/gh-pages.yml`.

## Features

- Responsive design for all device sizes
- Client-side routing with reitit
- Dynamic content loading with htmx
- Syntax highlighting for code samples
- Integration with external links and resources

## Contact

For any questions or inquiries, please contact me at [adazungu@gmail.com](mailto:adazungu@gmail.com). 