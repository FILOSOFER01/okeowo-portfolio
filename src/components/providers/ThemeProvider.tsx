"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

// ─── ThemeProvider ────────────────────────────────────────────────────────────
// Wraps the app in next-themes. Lives in the root layout.
//
// defaultTheme="system" means: respect the user's OS preference on first visit.
// enableSystem: allows the system preference to be used.
// disableTransitionOnChange: prevents a flash of unstyled content when
// switching themes. Without this, you get a brief flicker on toggle.
//
// Usage in layout.tsx:
//   <ThemeProvider>
//     {children}
//   </ThemeProvider>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"       // applies "dark" class to <html>
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}