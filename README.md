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

## 🎨 Common Style Utilities

The design system includes a comprehensive set of utility classes for rapid development:

### Flexbox Utilities
```tsx
import { commonStyles } from '@/theme';

// Basic flex
<View style={commonStyles.flex.flex1}>
<View style={[commonStyles.flex.flexRow, commonStyles.flex.justifyBetween]}>
<View style={[commonStyles.flex.flexCol, commonStyles.flex.itemsCenter]}>
```

**Available Classes:**
- **Flex**: `flex1`, `flex2`, `flex3`, `flexNone`
- **Direction**: `flexRow`, `flexCol`, `flexWrap`, `flexNoWrap`
- **Justify Content**: `justifyStart`, `justifyEnd`, `justifyCenter`, `justifyBetween`, `justifyAround`, `justifyEvenly`
- **Align Items**: `itemsStart`, `itemsEnd`, `itemsCenter`, `itemsStretch`
- **Align Self**: `selfStart`, `selfEnd`, `selfCenter`, `selfStretch`

### Spacing System
```tsx
// Margin and padding utilities
<View style={[commonStyles.spacing.m4, commonStyles.spacing.p6]}>
<View style={[commonStyles.spacing.mx2, commonStyles.spacing.py4]}>
<Text style={commonStyles.spacing.mt3}>Spaced text</Text>
```

**Spacing Scale**: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12 (based on 8px system)
- **Margin**: `m*`, `mx*`, `my*`, `mt*`, `mb*`, `ml*`, `mr*`
- **Padding**: `p*`, `px*`, `py*`, `pt*`, `pb*`, `pl*`, `pr*`

### Colors
```tsx
// Background colors
<View style={commonStyles.bg.primary600}>
<View style={commonStyles.bg.gray100}>

// Text colors
<Text style={commonStyles.text.primary600}>Primary text</Text>
<Text style={commonStyles.text.gray700}>Secondary text</Text>
```

**Available Colors:**
- **Backgrounds**: `white`, `gray50-900`, `primary50-600`, `secondary500-600`, `success500-600`, `warning500-600`, `error500-600`
- **Text**: `white`, `gray400-900`, `primary500-600`, `secondary600`, `success600`, `warning600`, `error600`, `info600`

### Border & Radius
```tsx
// Border radius
<View style={commonStyles.rounded.lg}>
<View style={commonStyles.rounded.full}>

// Borders
<View style={[commonStyles.border.border, commonStyles.border.borderGray300]}>
```

**Border Radius**: `none`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`
**Border**: `border`, `border2`, `borderT`, `borderB`, `borderL`, `borderR`

### Sizing
```tsx
// Width and height
<View style={commonStyles.size.w48}>
<View style={[commonStyles.size.wFull, commonStyles.size.h40]}>
```

**Sizes**: `w8-60`, `wFull`, `h8-60`, `hFull`, `minH32-120`

### Shadows & Effects
```tsx
// Shadows
<View style={commonStyles.shadow.md}>
<Card style={commonStyles.shadow.lg}>

// Opacity
<View style={commonStyles.opacity.opacity75}>
```

**Shadows**: `sm`, `base`, `md`, `lg`, `xl`
**Opacity**: `opacity0`, `opacity25`, `opacity50`, `opacity75`, `opacity90`, `opacity100`

### Pre-built Components
```tsx
// Common UI patterns
<View style={commonStyles.common.card}>
<View style={commonStyles.common.iconContainer}>
<TouchableOpacity style={[commonStyles.common.button, commonStyles.common.buttonPrimary]}>
<TextInput style={commonStyles.common.input}>
```

**Pre-built Styles:**
- `container`: Full-screen container with background
- `card`: Elevated card with shadow and border
- `header`: Section header with bottom border
- `iconContainer`: Circular icon background
- `settingItem`: List item with padding and shadow
- `input`: Styled text input
- `button`: Base button styles
- `buttonPrimary`: Primary button variant
- `buttonSecondary`: Secondary button variant
- `buttonOutline`: Outline button variant

### Usage Examples
```tsx
import { commonStyles } from '@/theme';

// Combining multiple utilities
<View style={[
  commonStyles.flex.flex1,
  commonStyles.bg.white,
  commonStyles.spacing.p4,
  commonStyles.rounded.lg,
  commonStyles.shadow.md
]}>
  <Text style={[
    commonStyles.text.gray900,
    commonStyles.spacing.mb2
  ]}>
    Title
  </Text>
  <View style={[
    commonStyles.flex.flexRow,
    commonStyles.flex.justifyBetween,
    commonStyles.flex.itemsCenter
  ]}>
    <Text style={commonStyles.text.gray600}>
      Subtitle
    </Text>
    <TouchableOpacity style={[
      commonStyles.common.button,
      commonStyles.common.buttonPrimary
    ]}>
      <Text style={commonStyles.text.white}>Action</Text>
    </TouchableOpacity>
  </View>
</View>
```

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