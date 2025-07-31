# GapstractAI - Research Gap Analysis Platform

<div align="center">
  <img src="https://via.placeholder.com/150x150/000000/FFFFFF?text=GA" height="150" alt="GapstractAI Logo" />
  <h1>Research Gap Analysis Platform</h1>
  <p><strong>Stop spending weeks on literature review. Start discovering breakthrough research opportunities in hours.</strong></p>
  
  [![Node.js](https://img.shields.io/badge/Node.js-20.11.0+-green.svg)](https://nodejs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6+-blue.svg)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![Remix](https://img.shields.io/badge/Remix-2.13.1-purple.svg)](https://remix.run/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## 🎯 Overview

GapstractAI is a comprehensive research gap analysis platform that helps researchers identify, analyze, and visualize research gaps in academic literature. Built with modern web technologies, it provides powerful tools for document processing, AI-powered analysis, and collaborative research management.

## ✨ Features

- **📄 Document Processing**: Upload and analyze research papers, PDFs, and documents
- **🤖 AI-Powered Analysis**: Advanced AI algorithms for research gap identification
- **👥 Collaborative Workspace**: Team-based research management with organizations
- **📊 Visual Analytics**: Interactive charts and visualizations of research data
- **🔗 Citation Management**: Track and manage research citations and relationships
- **⚡ Real-time Collaboration**: Live updates and team collaboration features
- **🔐 Secure Authentication**: Google OAuth integration with role-based access
- **📧 Email Notifications**: Automated email system for team invitations and updates

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **Remix** - Full-stack framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Ant Design** - Professional UI components
- **Recharts** - Data visualization

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **tRPC** - End-to-end typesafe APIs
- **Prisma** - Database ORM
- **ZenStack** - Prisma with built-in authorization

### Database & Storage
- **PostgreSQL** - Primary database
- **AWS S3** - File storage (configurable)
- **Redis** - Caching (optional)

### AI & External Services
- **OpenAI GPT-4** - Research analysis
- **Anthropic Claude** - Alternative AI analysis
- **Google Gemini** - Additional AI capabilities
- **Firecrawl** - Web scraping
- **DocRaptor** - PDF generation

### Authentication & Communication
- **Passport.js** - Authentication middleware
- **Google OAuth** - Social login
- **JWT** - Session management
- **Socket.io** - Real-time communication
- **Mailjet/Nodemailer** - Email services

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.11.0 or higher
- **Docker Desktop** 4.19.0 or higher
- **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gapstractai.git
   cd gapstractai
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
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

6. **Open your browser**
   Navigate to [http://localhost:8099](http://localhost:8099)

## 📋 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://root:root@localhost:5442/api"

# Authentication
SERVER_AUTHENTICATION_JWT_SECRET="your-jwt-secret"
SERVER_AUTHENTICATION_GOOGLE_CLIENT_ID="your-google-client-id"
SERVER_AUTHENTICATION_GOOGLE_CLIENT_SECRET="your-google-client-secret"

# AI Services
SERVER_OPENAI_API_KEY="your-openai-api-key"
SERVER_ANTHROPIC_API_KEY="your-anthropic-api-key"
SERVER_GEMINI_API_KEY="your-gemini-api-key"

# File Storage (AWS S3)
SERVER_UPLOAD_AWS_ACCESS_KEY="your-aws-access-key"
SERVER_UPLOAD_AWS_SECRET_KEY="your-aws-secret-key"
SERVER_UPLOAD_AWS_BUCKET_PUBLIC_NAME="your-public-bucket"
SERVER_UPLOAD_AWS_BUCKET_PRIVATE_NAME="your-private-bucket"
SERVER_UPLOAD_AWS_REGION="us-west-1"

# Email Services
SERVER_EMAIL_MAILJET_API_KEY="your-mailjet-api-key"
SERVER_EMAIL_MAILJET_API_SECRET="your-mailjet-api-secret"

# External Services
SERVER_FIRECRAWL_API_KEY="your-firecrawl-api-key"
SERVER_DOCRAPTOR_API_KEY="your-docraptor-api-key"
SERVER_NANGO_SECRET_KEY="your-nango-secret-key"
PUBLIC_NANGO_KEY="your-nango-public-key"

# Application
PUBLIC_APP_URL="http://localhost:8099"
```

## 🏗️ Project Structure

```
gapstractai/
├── app/                          # Main application code
│   ├── core/                     # Core functionality
│   │   ├── .gapstractai/         # Generated code (ZenStack)
│   │   ├── authentication/       # User authentication
│   │   ├── database/             # Database connections
│   │   ├── trpc/                 # API layer
│   │   └── helpers/              # Utility functions
│   ├── designSystem/             # UI components and styling
│   ├── plugins/                  # Feature modules
│   │   ├── ai/                   # AI integration
│   │   ├── email/                # Email services
│   │   ├── upload/               # File upload
│   │   └── socket/               # Real-time features
│   └── routes/                   # Page routes
├── models/                       # Database schema
├── prisma/                       # Database migrations
├── server/                       # Server entry point
└── public/                       # Static files
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run start` | Start production server |
| `pnpm run init` | Initialize project (install + setup) |
| `pnpm run database:sync` | Sync database schema |
| `pnpm run database:seed` | Seed database with sample data |
| `pnpm run crud:sync` | Generate API types from schema |
| `pnpm run lint` | Run ESLint |
| `pnpm run format` | Format code with Prettier |

## 🔧 Development

### Database Management

```bash
# Sync database schema
pnpm run database:sync:dev

# Seed with test data
pnpm run database:seed

# Reset database
pnpm run database:reset
```

### Code Generation

```bash
# Generate API types from database schema
pnpm run crud:sync
```

### Docker Services

The project includes Docker services for development:

- **PostgreSQL** (port 5442) - Main database
- **pgAdmin** (port 5052) - Database administration
- **Mailpit** (port 8022) - Email testing

## 🧪 Testing

```bash
# Run tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage
pnpm run test:coverage
```

## 🚀 Deployment

### Production Build

```bash
# Build the application
pnpm run build

# Start production server
pnpm run start
```

### Docker Deployment

```bash
# Build Docker image
docker build -t gapstractai .

# Run with Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Wiki](https://github.com/your-username/gapstractai/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/gapstractai/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/gapstractai/discussions)

## 🙏 Acknowledgments

- Built with [Remix](https://remix.run/)
- UI components from [Ant Design](https://ant.design/)
- Database powered by [Prisma](https://www.prisma.io/)
- AI capabilities from [OpenAI](https://openai.com/) and [Anthropic](https://www.anthropic.com/)

---

<div align="center">
  <p>Made with ❤️ for the research community</p>
  <p>If you find this project helpful, please give it a ⭐</p>
</div>
