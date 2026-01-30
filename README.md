# Ahmed Ammar - Portfolio Website

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS, showcasing professional experience, skills, projects, and education.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations and gradient accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Navigation**: Sticky navbar with active section highlighting
- **CV Download**: Direct download functionality for PDF resume
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Built with Next.js for optimal loading speed
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page
├── components/
│   ├── Navbar.tsx           # Sticky navigation bar
│   ├── Hero.tsx             # Hero section with CTA
│   ├── About.tsx            # About me section
│   ├── Skills.tsx           # Skills showcase
│   ├── Projects.tsx         # Featured projects
│   ├── Experience.tsx       # Work experience timeline
│   ├── Education.tsx        # Educational background
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links
├── public/
│   ├── ahmed-ammar-cv.pdf   # Downloadable CV
│   ├── cv-page1.png         # CV page 1 image
│   └── cv-page2.png         # CV page 2 image
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 📄 Sections

### 1. Hero Section
- Professional introduction
- Call-to-action buttons
- Social media links
- CV download button

### 2. About Me
- Professional profile
- Key strengths and values
- Personal brand statement

### 3. Skills
- Programming languages
- Frameworks & libraries
- Databases
- Tools & technologies
- Languages
- Soft skills

### 4. Projects
- Featured work projects
- Technologies used
- Key highlights and achievements

### 5. Experience
- Work history timeline
- Job responsibilities
- Company details

### 6. Education
- Academic qualifications
- Institutions and dates
- Degrees earned

### 7. Contact
- Contact information
- Social media links
- Contact form (frontend only)

## 🎨 Customization

### Colors
The color scheme uses CSS variables defined in `app/globals.css`. You can customize:
- Primary colors
- Background colors
- Accent colors
- Gradient combinations

### Content
Update personal information in the respective component files:
- `components/Hero.tsx` - Name, title, summary
- `components/About.tsx` - Bio and strengths
- `components/Skills.tsx` - Skills list
- `components/Projects.tsx` - Project details
- `components/Experience.tsx` - Work history
- `components/Education.tsx` - Educational background
- `components/Contact.tsx` - Contact information

### CV File
Replace `public/ahmed-ammar-cv.pdf` with your own CV file.

## 🚀 Deployment on Vercel

### Method 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com)**:
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

### Environment Variables
No environment variables are required for this static portfolio.

### Custom Domain
After deployment:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Fully responsive images
- Optimized animations

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 License

This project is open source and available for personal use.

## 👤 Contact

**Ahmed Ammar**
- Email: ahmed.ammar123@gmail.com
- Phone: +216 21 868 557
- LinkedIn: [linkedin.com/in/ahmedammar](https://linkedin.com/in/ahmedammar)
- GitHub: [github.com/ahmedammar](https://github.com/ahmedammar)
- Location: Sfax, Tunisia

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by Ahmed Ammar**
