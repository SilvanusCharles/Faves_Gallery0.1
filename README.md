# Favors Gallery

Favors Gallery is a refined static portfolio website for showcasing bespoke fashion concepts and contemporary design direction. The project combines an editorial visual style with a responsive layout, an interactive image gallery, persistent light and dark profiles, and a contact page for collaboration requests.

## Features

- Responsive home, gallery, about, and contact pages
- Editorial fashion gallery with masonry-style columns
- Click-to-open image lightbox with Escape-key support
- Persistent light and dark theme selection using `localStorage`
- Responsive contact form layout with accessible labels and required fields
- Shared navigation, typography, buttons, and bottom-aligned footer styling
- No build tools or framework required

## Pages

- **Home**: Introduces the Favors Gallery design direction.
- **Gallery**: Presents the available fashion concepts and supports full-size previews.
- **About**: Describes the creative vision behind the gallery.
- **Contact**: Provides a collaboration request form.

## Project Structure

```text
Faves_Gallery0.1/
├── index.html        # Home page
├── gallery.html      # Fashion concept gallery
├── about.html        # Designer and project vision
├── contact.html      # Collaboration form
├── style.css         # Shared layout, theme, and responsive styles
├── script.js         # Theme switching and lightbox behavior
├── photos/           # Gallery image assets
├── .gitignore        # Files excluded from version control
└── README.md         # Project documentation
```

## Getting Started

Because this is a static website, no package installation is needed.

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Faves_Gallery0.1
   ```

2. Open `index.html` directly in a browser, or serve the folder with any local static server.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Contact Form Setup

The contact form is prepared for Formspree submission. Before publishing, replace the form `action` URL in `contact.html` with the endpoint provided by your Formspree form. This keeps the form connected to the intended inbox without requiring a custom backend.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Cinzel and Montserrat

## License

This project is a personal portfolio website for Favors Gallery. Add a license here if the project will be distributed for reuse.
