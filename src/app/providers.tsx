'use client'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { useTheme } from 'next-themes'

export function Providers ({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
      <ToastContainer theme={theme === 'dark' ? 'dark' : 'light'} />
    </ThemeProvider>
  )
}
