import { sessionGuard } from '@/utils/sessionGuard'
import React from 'react'

const Test = ({ user }: any) => {
  return (
    <div>Hello, {user.email}</div>
  )
}

export default sessionGuard(Test)