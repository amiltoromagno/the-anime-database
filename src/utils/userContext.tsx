'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

const UserProvider = createContext(null)

export const UserContext = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const supabase = createClient()
    const fetchUser = async () => {
      const { data }: { data: any } = await supabase.auth.getUser()
      setUser(data.user)
    }

    fetchUser()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return <UserProvider.Provider value={user}>{children}</UserProvider.Provider>
}

export const useUser = () => useContext(UserProvider)
