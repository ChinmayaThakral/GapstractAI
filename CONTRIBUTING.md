# Contributing to GapstractAI

Thank you for your interest in contributing to GapstractAI! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs

- Use the [GitHub issue tracker](https://github.com/chinmayathakral/gapstractai/issues)
- Include a clear and descriptive title
- Provide steps to reproduce the bug
- Include screenshots if applicable
- Mention your operating system and browser

### Suggesting Enhancements

- Use the [GitHub issue tracker](https://github.com/chinmayathakral/gapstractai/issues)
- Clearly describe the feature you'd like to see
- Explain why this feature would be useful
- Include mockups or examples if possible

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   pnpm run test
   pnpm run lint
   pnpm run format
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Testing

- Write tests for new features
- Ensure all existing tests pass
- Aim for good test coverage
- Use descriptive test names

### Documentation

- Update README.md if needed
- Add JSDoc comments for functions
- Update API documentation
- Include examples for new features

## 🛠️ Development Setup

### Prerequisites

- Node.js 20.11.0 or higher
- Docker Desktop
- pnpm package manager

### Local Development

1. **Clone your fork**
   ```bash
   git clone https://github.com/chinmayathakral/gapstractai.git
   cd gapstractai
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Initialize the project**
   ```bash
   pnpm run init
   ```

5. **Start development server**
   ```bash
   pnpm run dev
   ```

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run test` - Run tests
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier
- `pnpm run database:sync` - Sync database schema
- `pnpm run database:seed` - Seed database with test data

## 🔍 Code Review Process

1. **Pull Request Creation**
   - Provide a clear description of changes
   - Link related issues
   - Include screenshots for UI changes

2. **Review Process**
   - At least one maintainer must approve
   - All CI checks must pass
   - Code must follow project guidelines

3. **Merging**
   - Squash and merge for feature branches
   - Rebase and merge for hotfixes

## 📚 Resources

- [Project Documentation](https://github.com/chinmayathakral/gapstractai/wiki)
- [API Documentation](https://github.com/chinmayathakral/gapstractai/wiki/API)
- [Architecture Guide](https://github.com/chinmayathakral/gapstractai/wiki/Architecture)

## 🆘 Getting Help

- [GitHub Issues](https://github.com/chinmayathakral/gapstractai/issues)
- [GitHub Discussions](https://github.com/chinmayathakral/gapstractai/discussions)
- [Wiki](https://github.com/chinmayathakral/gapstractai/wiki)

## 📄 License

By contributing to GapstractAI, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to GapstractAI! 🚀 