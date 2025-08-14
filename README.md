# Expo Design System

A comprehensive, production-ready design system built with React Native and Expo. This project provides a complete foundation for building consistent, accessible, and beautiful mobile applications.

## 🎨 Features

- **Complete Theme System**: Centralized color palettes, typography scales, spacing systems, and responsive breakpoints
- **Component Library**: Production-ready Button, Text, Input, and Layout components with TypeScript support
- **Multi-Platform Support**: Optimized for iOS, Android, and Web platforms
- **Responsive Design**: Adaptive layouts that work across different screen sizes
- **Accessibility**: WCAG compliant components with proper contrast ratios and screen reader support
- **Type Safety**: Full TypeScript integration with proper component prop validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📱 Project Structure

```
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Home screen
│   │   ├── components.tsx # Component showcase
│   │   ├── examples.tsx   # Real-world examples
│   │   └── settings.tsx   # Settings screen
│   └── _layout.tsx        # Root layout with font loading
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Button component with variants
│   │   ├── Text.tsx       # Typography component
│   │   ├── Input.tsx      # Input field component
│   │   └── Card.tsx       # Card container component
│   └── layout/            # Layout components
│       ├── Container.tsx  # Responsive container
│       ├── Stack.tsx      # Flexbox layout utility
│       ├── Grid.tsx       # Grid layout utility
│       └── Spacer.tsx     # Spacing utility
├── theme/                 # Design system configuration
│   ├── colors.ts          # Color palette definitions
│   ├── typography.ts      # Font and text configurations
│   ├── spacing.ts         # Spacing scale and border radius
│   ├── shadows.ts         # Platform-specific shadows
│   ├── breakpoints.ts     # Responsive breakpoints
│   └── index.ts           # Theme exports
└── hooks/                 # Custom React hooks
    ├── useTheme.ts        # Theme access hook
    └── useResponsive.ts   # Responsive design hook
```

## 🎯 Design System Components

### Theme System

The design system is built around a centralized theme configuration:

- **Colors**: Primary, secondary, neutral, and semantic color palettes with 10+ shades each
- **Typography**: Inter font family with 6 heading levels and body text variants
- **Spacing**: 8px-based spacing system (4, 8, 16, 24, 32, 48, 64px)
- **Shadows**: Platform-specific shadow definitions for iOS, Android, and Web

### Core Components

#### Button
```tsx
<Button variant="primary" size="large" onPress={() => {}}>
  Click Me
</Button>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`
**Sizes**: `small`, `medium`, `large`
**States**: `disabled`, `loading`

#### Text
```tsx
<Text variant="h1" color="primary">
  Heading Text
</Text>
```

**Variants**: `h1-h6`, `body`, `bodyLarge`, `bodySmall`, `caption`, `label`
**Colors**: `primary`, `secondary`, `muted`, `inverse`, `success`, `warning`, `error`

#### Input
```tsx
<Input
  label="Email"
  placeholder="your@email.com"
  error="Invalid email format"
  variant="outline"
/>
```

**Variants**: `default`, `filled`, `outline`
**Sizes**: `small`, `medium`, `large`
**Features**: Labels, helper text, error states, validation

### Layout Components

#### Container
```tsx
<Container maxWidth="lg" padding={6}>
  {/* Content */}
</Container>
```

#### Stack
```tsx
<Stack direction="horizontal" spacing={4} align="center">
  {/* Items */}
</Stack>
```

#### Grid
```tsx
<Grid columns={2} spacing={4}>
  {/* Grid items */}
</Grid>
```

## 📱 Responsive Design

The design system includes comprehensive responsive features:

- **Breakpoints**: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- **Adaptive Navigation**: Tab bar adjusts size and spacing based on screen size
- **Responsive Components**: All components adapt to different screen sizes
- **Platform Optimization**: Platform-specific styling for iOS, Android, and Web

## 🔧 Customization

### Extending the Theme

Modify theme files in the `/theme` directory to customize:

```typescript
// theme/colors.ts
export const colors = {
  primary: {
    // Your custom primary colors
    600: '#YOUR_BRAND_COLOR',
  },
  // ... rest of color system
};
```

### Creating Custom Components

Follow the established patterns when creating new components:

```typescript
import { useTheme } from '@/hooks/useTheme';

export function MyComponent({ variant = 'default', ...props }) {
  const theme = useTheme();
  
  // Component implementation
}
```

## 🧪 Testing

The project includes example screens demonstrating:

- Component variations and states
- Real-world form implementations
- Responsive layout patterns
- Typography hierarchy
- Color system usage

## 📦 Built With

- **Expo**: Cross-platform React Native framework
- **TypeScript**: Type safety and developer experience
- **Expo Router**: File-based navigation system
- **React Native Reanimated**: High-performance animations
- **Expo Linear Gradient**: Beautiful gradient effects
- **Lucide React Native**: Consistent icon library

## 🎯 Best Practices

1. **Consistent Spacing**: Always use theme spacing values
2. **Typography Hierarchy**: Use semantic text variants (h1-h6, body, etc.)
3. **Color Usage**: Stick to defined color palettes for consistency
4. **Component Composition**: Build complex UIs by composing simple components
5. **Accessibility**: Include proper labels, contrast ratios, and screen reader support

## 🚀 Deployment

The project is configured for deployment to:

- **Expo Application Services (EAS)**: For app store distribution
- **Netlify**: For web deployment
- **Custom hosting**: Using the web build output

Build for web:
```bash
npm run build:web
```

## 📖 Contributing

When adding new components:

1. Follow TypeScript interface patterns
2. Include proper prop validation and defaults
3. Add responsive behavior where appropriate
4. Test across all platforms (iOS, Android, Web)
5. Follow the established naming conventions

## 📄 License

This project is open source and available under the MIT License.