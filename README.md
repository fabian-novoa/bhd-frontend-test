# BHD Banking App

[![Angular](https://img.shields.io/badge/Angular-20-red)](https://angular.io/)
[![Ionic](https://img.shields.io/badge/Ionic-8-blue)](https://ionicframework.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-8-lightblue)](https://capacitorjs.com/)

Modern banking mobile application built with Angular 20, Ionic 8, and TypeScript, following Clean Architecture principles and enterprise best practices.

---

## 🏗️ Architecture

This project implements **Clean Architecture** with a clear separation of concerns across three main layers:

```
src/app/
├── domain/                    # Business Logic Layer
│   ├── models/                # Domain entities and interfaces
│   ├── repositories/          # Repository contracts (ports)
│   └── use-cases/             # Business use cases
│
├── data/                      # Data Access Layer
│   ├── interceptors/          # HTTP interceptors
│   └── repositories/          # Repository implementations
│
└── presentation/              # Presentation Layer
    ├── facades/               # Facade pattern orchestration
    ├── features/              # Feature modules (lazy-loaded)
    ├── shared/                # Reusable components, pipes, directives
    └── layout/                # Layout components
```

### Data Flow

```
Component → Facade → Use Case → Repository Interface → Repository Implementation → HTTP Client
```

**Benefits:**
- Framework independence in business logic
- Highly testable and maintainable
- Clear dependency direction (inward)
- Easy to extend and modify

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Ionic CLI: `npm install -g @ionic/cli`

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd bhd-frontend-test

# Install dependencies
npm install

# Start development server
npm start
# or
ionic serve

# Build for production
npm run build

# Run tests
npm test
```

---

## 💻 Tech Stack

### Core
- **Angular 20** - Web framework with standalone components
- **Ionic 8** - Mobile UI framework
- **TypeScript 5.9** - Strict mode enabled
- **Capacitor 8** - Native runtime

### Development
- **RxJS** - Reactive state management
- **SCSS** - Styling with design tokens
- **ESLint** - Code linting
- **Jasmine/Karma** - Unit testing

---

## 📂 Project Structure

### Path Aliases

Clean imports using TypeScript path aliases:

```typescript
// Domain layer
import { User } from '@domain/models/user.model';
import { AuthRepository } from '@domain/repositories/auth.repository';
import { LoginUseCase } from '@domain/use-cases/login.use-case';

// Data layer
import { AuthService } from '@data/repositories/auth.service';

// Presentation layer
import { ButtonComponent } from '@shared/components/button/button.component';
```

### Configuration

Path aliases are configured in `tsconfig.json`:
- `@domain/*` → `src/app/domain/*`
- `@data/*` → `src/app/data/*`
- `@presentation/*` → `src/app/presentation/*`
- `@shared/*` → `src/app/presentation/shared/*`
- `@environments/*` → `src/environments/*`

---

## 🎨 Design System

### SCSS Variables

The application uses a token-based design system defined in `src/theme/variables.scss`:

```scss
// Brand colors
--ion-color-primary: #003366;
--ion-color-secondary: #00a3e0;
--ion-color-success: #2dd36f;

// Spacing scale
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;

// Typography
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--font-size-xl: 24px;
```

### Utility Classes

Atomic CSS utilities are available in `src/global.scss`:

```scss
// Spacing
.mt-sm, .mb-md, .p-lg, .pt-xl

// Typography  
.text-center, .text-bold, .text-semibold

// Layout
.d-flex, .flex-column, .justify-center, .align-center, .gap-md

// Sizing
.w-100, .h-100
```

---

## 🏛️ Design Patterns

### Repository Pattern
Abstracts data access logic behind interfaces, enabling easy swapping of data sources.

### Facade Pattern
Simplifies complex subsystems by providing a unified interface to use cases.

### Use Case Pattern
Encapsulates business logic in single-responsibility classes.

### Observer Pattern
Leverages RxJS observables for reactive state management.

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test -- --code-coverage

# Run tests in CI mode
npm run test -- --watch=false --browsers=ChromeHeadless
```

Tests follow the Arrange-Act-Assert pattern with comprehensive coverage of:
- Use cases (business logic)
- Services (data access)
- Guards and interceptors
- Components (UI logic)

---

## 📱 Features

- Authentication with JWT tokens
- Product management (accounts and credit cards)
- Dashboard with tab navigation
- Side menu navigation
- Responsive mobile design
- Mock API endpoints for development

---

## 🔒 Security

- TypeScript strict mode enabled
- JWT token-based authentication
- HTTP interceptors for auth headers
- Input validation and sanitization
- Secure local storage for sensitive data

---

## 🎯 SOLID Principles

The codebase strictly follows SOLID principles:

- **Single Responsibility:** Each class has one reason to change
- **Open/Closed:** Open for extension, closed for modification
- **Liskov Substitution:** Implementations can replace abstractions seamlessly
- **Interface Segregation:** Small, focused interfaces
- **Dependency Inversion:** Depend on abstractions, not concretions

---

## 📝 Code Style

- **TypeScript Strict Mode:** All strict compiler flags enabled
- **ESLint:** Angular recommended rules
- **Naming Conventions:**
  - Components: `PascalCase.component.ts`
  - Services: `PascalCase.service.ts`
  - Models: `kebab-case.model.ts`
  - Use Cases: `PascalCase.use-case.ts`
- **File Organization:** Feature-based structure with lazy loading

---

## 🔧 Configuration

### TypeScript

Strict mode is enabled in `tsconfig.json` with all safety flags:

```json
{
  "strict": true,
  "noImplicitReturns": true,
  "noFallthroughCasesInSwitch": true,
  "noImplicitOverride": true,
  "noPropertyAccessFromIndexSignature": true
}
```

### Angular

Strict templates and injection parameters:

```json
{
  "strictInjectionParameters": true,
  "strictInputAccessModifiers": true,
  "strictTemplates": true
}
```

---

## 📚 Documentation

Comprehensive inline documentation following TSDoc standards. Each public API is documented with:
- Purpose and responsibility
- Parameters and return types
- Usage examples
- Related patterns

---

## 🤝 Contributing

This project follows conventional commits for clear git history:

- `feat:` New features
- `fix:` Bug fixes
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `docs:` Documentation updates
- `style:` Code style changes (formatting)
- `chore:` Build/tooling changes

---

## 📄 License

This project is for technical assessment purposes.

---

## 👨‍💻 Author

Developed with ❤️ by Fabian Novoa
