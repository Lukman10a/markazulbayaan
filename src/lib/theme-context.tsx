// "use client";

// import React, { createContext, useContext, useEffect, useState } from 'react';

// type Theme = 'light' | 'dark';

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
//   setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('light');
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     const savedTheme = localStorage.getItem('theme') as Theme;
//     const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     setTheme(savedTheme || systemPreference);
//   }, []);

//   useEffect(() => {
//     if (mounted) {
//       const root = window.document.documentElement;
//       root.classList.remove('light', 'dark');
//       root.classList.add(theme);
//       localStorage.setItem('theme', theme);
//     }
//   }, [theme, mounted]);

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   if (!mounted) {
//     return <div className="opacity-0">{children}</div>;
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// } 

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Only run on client side
  useEffect(() => {
    setMounted(true)
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      // Apply theme to document
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}