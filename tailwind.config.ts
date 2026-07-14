import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        display: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        headline: ['Fraunces', 'serif'],
        jakarta: ['Outfit', 'sans-serif'],
        swash: ['Fraunces', 'serif'],
        playful: ['Syne', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        'still-ground': '#183D2C',
        'still-deep': '#013D5A',
        'morning-quiet': '#FCF3E3',
        'understory': '#708C69',
        cleared: '#BFDED7',
        'sage-mist': '#E3EED0',
        felt: '#9D5060',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'slide-out-left': {
          '0%': {
            transform: 'translateX(0) translateY(0) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-100%) translateY(0) scale(0.8)',
            opacity: '0',
          },
        },
        'slide-out-right': {
          '0%': {
            transform: 'translateX(0) translateY(0) scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%) translateY(0) scale(0.8)',
            opacity: '0',
          },
        },
        'slide-in-from-right': {
          '0%': {
            transform: 'translateX(100%) translateY(0) scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) translateY(0) scale(1)',
            opacity: '1',
          },
        },
        'slide-in-from-left': {
          '0%': {
            transform: 'translateX(-100%) translateY(0) scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) translateY(0) scale(1)',
            opacity: '1',
          },
        },
        'shimmer': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'loop-scroll': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'loop-scroll-reverse': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-out-left': 'slide-out-left 0.3s ease-in-out',
        'slide-out-right': 'slide-out-right 0.3s ease-in-out',
        'slide-in-from-right': 'slide-in-from-right 0.3s ease-in-out',
        'slide-in-from-left': 'slide-in-from-left 0.3s ease-in-out',
        'shimmer': 'shimmer 3s infinite',
        'loop-scroll': 'loop-scroll 50s linear infinite',
        'loop-scroll-reverse': 'loop-scroll-reverse 50s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
