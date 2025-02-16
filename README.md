# CV React App

A modern web application to create and display your professional CV, built with React and Material-UI. The application features a minimalist black and white design, with support for light/dark theme and multiple languages. It includes configurable sections for experience, projects, and skills, with a responsive design and PDF export capability.

## 🌟 Features

- 📱 Modern responsive design
- 🌓 Light/dark theme with persistence
- 🌍 Multilanguage support (English/Spanish)
- 💾 User preferences persistence
- 📄 PDF export
- ⏳ Timeline for experience and projects
- 🎯 Categorized skills section
- 🔗 Social media links (GitHub, LinkedIn)
- 🎨 Minimalist black and white design
- 🏷️ Skill tags in each experience and project
- 📱 Responsive timeline with adaptive date display
- 🔄 Multi-paragraph support for descriptions
- 🎛️ Configurable section visibility
- 👤 Dynamic copyright footer

## 🛠️ Technologies Used

- React 18
- Material-UI (MUI)
- i18next for internationalization
- @react-pdf/renderer for PDF generation
- Emotion for styling
- LocalStorage for persistence

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## 🚀 Installation and Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd mi-cv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📝 Customization

### CV Data

CV data is stored in translation files:

- `src/i18n/en.json` - English version
- `src/i18n/es.json` - Spanish version

Modify these files to include your personal information:

```json
{
  "name": "Your Name",
  "about": {
    "description": "Your description",
    "position": "Your position",
    "social": {
      "github": "Your GitHub URL",
      "linkedin": "Your LinkedIn URL"
    }
  },
  "experience": {
    "items": [
      {
        "position": "Position",
        "company": "Company",
        "period": {
          "start": "Start Date",
          "end": "End Date"
        },
        "description": [
          "First paragraph of description",
          "Second paragraph of description"
        ],
        "skills": ["Skill1", "Skill2"]
      }
    ]
  },
  // ...
}
```

### Themes

You can enable/disable sections in the translation files:
```json
"sections": {
  "experience": true,
  "projects": false,
  "skills": true
}
```

You can customize light and dark themes in:
- `src/theme/theme.js`

PDF theme can be modified in:
- `src/theme/pdfTheme.js`

## 📁 Project Structure

```
src/
  ├── components/        # React components
  │   ├── Header.jsx    # Top control bar
  │   ├── About.jsx     # Personal info and networks
  │   ├── Experience.jsx # Experience section
  │   ├── Skills.jsx    # Skills section
  │   ├── Projects.jsx  # Projects section
  │   ├── Timeline.jsx  # Reusable timeline component
  │   └── PDFDocument.jsx # PDF generator
  ├── i18n/             # Translation files
  │   ├── en.json      # English
  │   └── es.json      # Spanish
  ├── theme/            # Theme configuration
  │   ├── theme.js     # Light/dark themes
  │   └── pdfTheme.js  # PDF theme
  └── App.jsx          # Main component
```

## 🔧 Available Scripts

- `npm start` - Starts development server
- `npm build` - Builds the app for production
- `npm test` - Runs tests
- `npm eject` - Ejects from create-react-app

## 💡 Main Features

### Light/Dark Theme
- Toggle button in the top bar
- Persists user preference in localStorage
- Dark theme by default
- Monochromatic black and white design
- Consistent styling across all sections

### Multilanguage
- Automatically detects browser language
- Manual toggle between English and Spanish
- Language button in the top bar
- Persists language selection

### PDF Export
- Generates a professional PDF with all information
- Maintains CV format and structure
- Automatic download on button click
- Includes skills in each experience and project
- Multi-paragraph support for descriptions

### Timeline
- Shows experience and projects chronologically
- Visual timeline design
- Supports description or bullet points
- Integrated skills in each entry
- Dates on the left side of the timeline
- Responsive date display (stacked on desktop, inline on mobile)
- Split date display (start/end dates)

### Skills
- Organization by categories
- Interactive skill chips
- Responsive design that adapts to content
- Consistent style throughout the application
- Can be disabled independently

## 📄 License

This project is under the MIT License. See the `LICENSE` file for details.
