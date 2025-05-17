# webpack-eslint-prettier-template.

# Webpack + ESLint + Prettier Template

A simple starter template for JavaScript projects using Webpack, ESLint, and Prettier.

## 🚀 Features

- Webpack for bundling JavaScript & assets
- ESLint for code linting and best practices
- Prettier for code formatting
- Development server with live reloading
- Production-ready build configuration

## 📦 Installation

1. **Clone the template**

   ```bash
   git clone https://github.com/YOUR_USERNAME/webpack-eslint-prettier-template.git my-new-project
   cd my-new-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🛠 Usage

### Start Development Server

```bash
npm run start
```

- Runs Webpack Dev Server
- Opens `http://localhost:8080/` with live reloading

### Lint & Format Code

```bash
npm run lint    # Check for linting issues
npm run format  # Auto-format code
```

### Build for Production

```bash
npm run build
```

- Outputs optimized files to `dist/` ready for deployment

## 🔧 Customization

- Modify `webpack.common.js`, `webpack.dev.js`, and `webpack.prod.js` for Webpack settings
- Configure ESLint rules in `.eslintrc.js`
- Adjust Prettier settings in `.prettierrc.json`

## 🚀 Deployment

You can deploy the `dist/` folder using:

- **GitHub Pages** (`gh-pages`)
- **Vercel**
- **Netlify**
- **FTP or any static hosting service**

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📜 License

This project is licensed under the MIT License.
