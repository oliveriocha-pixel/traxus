@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  /* TRAXUS Dark Industrial Theme */
  --background: #111111;
  --foreground: #E8E8E8;
  --card: #1A1A1A;
  --card-foreground: #E8E8E8;
  --popover: #1A1A1A;
  --popover-foreground: #E8E8E8;
  
  /* Primary - Amber/Orange */
  --primary: #EC6604;
  --primary-foreground: #111111;
  --primary-light: #FDB20D;
  --primary-dark: #C44E00;
  
  /* Secondary - Dark grays */
  --secondary: #222222;
  --secondary-foreground: #F5F5F5;
  
  /* Muted */
  --muted: #888888;
  --muted-foreground: #888888;
  
  /* Accent - Freeze Blue */
  --accent: #0D85C4;
  --accent-foreground: #E0F2FF;
  --freeze-dark: #062F4A;
  --freeze-light: #E0F2FF;
  --freeze-base: #0B6FA4;
  
  /* Functional */
  --destructive: #E05050;
  --destructive-foreground: #ffffff;
  --success: #5EC98A;
  --success-foreground: #111111;
  
  /* Borders */
  --border: rgba(255, 255, 255, 0.08);
  --input: rgba(255, 255, 255, 0.08);
  --ring: #EC6604;
  
  /* Misc */
  --graphite: #4A4A4A;
  --graphite-deep: #484848;
  --gray-support: #D9DDE1;
  
  --radius: 4px;
  --radius-lg: 8px;
}

@theme inline {
  --font-sans: 'Inter', 'Geist', sans-serif;
  --font-heading: 'Barlow Condensed', 'Inter', sans-serif;
  --font-mono: 'IBM Plex Mono', 'Geist Mono', monospace;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary-light: var(--primary-light);
  --color-primary-dark: var(--primary-dark);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-freeze-dark: var(--freeze-dark);
  --color-freeze-light: var(--freeze-light);
  --color-freeze-base: var(--freeze-base);
  --radius-sm: calc(var(--radius));
  --radius-md: calc(var(--radius));
  --radius-lg: var(--radius-lg);
  --radius-xl: calc(var(--radius-lg) + 4px);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    scroll-behavior: smooth;
  }
}

/* Custom utility classes for TRAXUS */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .font-heading {
    font-family: 'Barlow Condensed', 'Inter', sans-serif;
  }
  
  .font-mono-ibm {
    font-family: 'IBM Plex Mono', 'Geist Mono', monospace;
  }
}

/* Slider styling */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: #EC6604;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #FDB20D;
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: #EC6604;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
