# 🤝 Contributing to Portfolio Website

Thank you for your interest in contributing to this modern portfolio website! This guide will help you get started with contributing code, documentation, or ideas.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Contribution Types](#contribution-types)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Testing Requirements](#testing-requirements)
- [Documentation Standards](#documentation-standards)

## 🌟 Code of Conduct

This project follows a friendly and inclusive environment. Please be respectful in all interactions.

### Our Standards
- ✅ **Be respectful**: Treat everyone with kindness and professionalism
- ✅ **Be constructive**: Provide helpful feedback and suggestions
- ✅ **Be collaborative**: Work together to improve the project
- ✅ **Be patient**: Remember that everyone has different experience levels

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** (recommend Node.js 20 LTS)
- **pnpm** (preferred package manager)
- **Git** for version control
- **VS Code** (recommended) with suggested extensions

### Local Development Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up development environment**
   ```bash
   # Copy environment variables
   cp .env.example .env.local
   
   # Install VS Code extensions (optional)
   code --install-extension bradlc.vscode-tailwindcss
   code --install-extension ms-vscode.vscode-typescript-next
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

5. **Verify setup**
   - Open http://localhost:3000
   - Check that hot reload works
   - Verify no console errors

## 🔄 Development Workflow

### Branch Strategy
```bash
main           # Production-ready code
├── develop    # Integration branch for features
├── feature/*  # New features (feature/add-blog-section)
├── fix/*      # Bug fixes (fix/mobile-navigation)
└── docs/*     # Documentation updates (docs/update-readme)
```

### Workflow Steps

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow coding standards
   - Write meaningful commit messages
   - Test your changes thoroughly

3. **Commit your work**
   ```bash
   git add .
   git commit -m "feat: add new portfolio filtering feature"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   # Create Pull Request on GitHub
   ```

### Commit Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding or correcting tests
- `chore`: Updating build tasks, package manager configs, etc.

**Examples:**
```bash
feat(hero): add typing animation effect
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(components): improve code formatting
perf(animations): optimize particle system performance
```

## 🎯 Contribution Types

### 🐛 Bug Reports
When reporting bugs, please include:

```markdown
## Bug Description
Clear description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
What you expected to happen.

## Screenshots
If applicable, add screenshots.

## Environment
- Browser: [e.g., Chrome 91]
- Device: [e.g., iPhone 12, Desktop]
- Screen size: [e.g., 1920x1080]
```

### ✨ Feature Requests
For new feature suggestions:

```markdown
## Feature Summary
Brief description of the feature.

## Problem Statement
What problem does this solve?

## Proposed Solution
How would you like this implemented?

## Alternatives Considered
Other solutions you've considered.

## Additional Context
Any other context, mockups, or examples.
```

### 🔧 Code Contributions

#### **High Priority Areas**
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness enhancements
- Animation smoothness
- SEO optimizations

#### **Medium Priority Areas**
- New component features
- Design system improvements
- Documentation updates
- Testing coverage
- Code refactoring

#### **New Features Ideas**
- Blog section integration
- Project filtering system
- Testimonials carousel
- Skills certification display
- Interactive resume download
- Multi-language support

## 📝 Pull Request Process

### Before Submitting
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Mobile responsive on all screen sizes
- [ ] Lighthouse scores maintained (90+)
- [ ] Documentation updated if needed

### PR Description Template
```markdown
## Description
Brief summary of changes and motivation.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that causes existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome/Firefox/Safari
- [ ] Tested on mobile devices
- [ ] Tested with screen readers (if accessibility related)
- [ ] Added/updated tests as needed

## Screenshots (if applicable)
Add screenshots showing the changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] Any dependent changes have been merged
```

### Review Process
1. **Automated Checks**: CI/CD pipeline runs tests and linting
2. **Code Review**: Maintainer reviews code for quality and standards
3. **Testing**: Changes tested on multiple devices and browsers
4. **Merge**: Approved changes merged to main branch

## 🎨 Style Guidelines

### **TypeScript/React Standards**
```typescript
// ✅ Good: Use TypeScript interfaces
interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

// ✅ Good: Use proper naming conventions
const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies }) => {
  return (
    <div className="project-card">
      {/* Component content */}
    </div>
  );
};

// ✅ Good: Use meaningful variable names
const isProjectFeatured = project.featured;
const projectTechnologies = project.technologies;

// ❌ Avoid: Generic or unclear names
const flag = project.featured;
const arr = project.technologies;
```

### **CSS/Tailwind Standards**
```css
/* ✅ Good: Use consistent class ordering */
<div className="
  flex items-center justify-center  /* Layout */
  w-full h-64                       /* Size */
  p-4 m-2                          /* Spacing */
  bg-dark-800 text-white           /* Colors */
  rounded-lg shadow-lg             /* Appearance */
  transition-all duration-300      /* Animation */
  hover:bg-dark-700               /* Interactive states */
">

/* ✅ Good: Use semantic class names in custom CSS */
.hero-gradient {
  background: linear-gradient(135deg, #ff4da6, #ff66b2);
}

/* ❌ Avoid: Non-semantic class names */
.pink-thing {
  background: #ff4da6;
}
```

### **Animation Guidelines**
```typescript
// ✅ Good: Use performance-optimized animations
const optimizedVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] // Custom easing
    }
  }
};

// ✅ Good: Add will-change for frequently animated elements
<motion.div
  style={{ willChange: 'transform' }}
  animate={{ y: [0, -10, 0] }}
>

// ❌ Avoid: Heavy animations that cause performance issues
const heavyAnimation = {
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(255, 77, 166, 0.7)",
      "0 0 0 20px rgba(255, 77, 166, 0)",
      // ... many intermediate states
    ]
  }
};
```

## 🧪 Testing Requirements

### **Manual Testing Checklist**
- [ ] **Desktop Testing**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile Testing**: iOS Safari, Chrome Mobile, Samsung Browser
- [ ] **Responsive Design**: Test all breakpoints (320px to 4K)
- [ ] **Performance**: Lighthouse score 90+ in all categories
- [ ] **Accessibility**: Screen reader compatibility, keyboard navigation
- [ ] **Forms**: All form validations work correctly
- [ ] **Links**: All internal and external links function properly

### **Automated Testing**
```bash
# Run linting
pnpm lint

# Type checking
pnpm type-check

# Build test
pnpm build

# End-to-end tests (if implemented)
pnpm test:e2e
```

### **Performance Testing**
```bash
# Bundle analysis
ANALYZE=true pnpm build

# Lighthouse CI (if configured)
pnpm lighthouse
```

## 📚 Documentation Standards

### **Component Documentation**
```typescript
/**
 * ProjectCard Component
 * 
 * Displays individual project information with glassmorphism design
 * and hover animations. Supports both featured and standard layouts.
 * 
 * @param title - Project name/title
 * @param description - Brief project description  
 * @param technologies - Array of technology names
 * @param featured - Whether to show in featured layout
 * @param liveUrl - URL to live demo (optional)
 * @param githubUrl - URL to GitHub repository (optional)
 * 
 * @example
 * ```tsx
 * <ProjectCard
 *   title="Portfolio Website"
 *   description="Modern portfolio built with Next.js"
 *   technologies={["React", "Next.js", "TypeScript"]}
 *   featured={true}
 *   liveUrl="https://example.com"
 *   githubUrl="https://github.com/user/repo"
 * />
 * ```
 */
```

### **README Updates**
When adding new features, update relevant documentation:
- Installation instructions
- Usage examples
- Configuration options
- Troubleshooting guides

## 🏆 Recognition

### **Contributor Types**
- **🐛 Bug Hunters**: Find and report issues
- **✨ Feature Creators**: Add new functionality
- **📚 Documentation Writers**: Improve guides and docs
- **🎨 Design Contributors**: Enhance UI/UX
- **🔧 Performance Optimizers**: Improve speed and efficiency
- **🧪 Quality Testers**: Ensure reliability

### **Hall of Fame**
Contributors will be recognized in:
- GitHub contributors page
- README acknowledgments
- Release notes mentions

## 🤔 Questions?

### **Getting Help**
- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Create issues for bugs or feature requests
- 📧 **Direct Contact**: Email for sensitive topics

### **Resources**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)  
- [Framer Motion API](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Best Practices](https://react.dev/learn)

---

**Thank you for contributing!** Your efforts help make this portfolio template better for everyone. 🎉

*Last updated: August 30, 2025*
