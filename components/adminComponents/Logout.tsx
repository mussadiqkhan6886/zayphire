'use cient';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

const Logout = () => {
    const router = useRouter()
    const logout = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/logout`)
        router.push("/admin/login")
    }
    
  return (
    <button onClick={logout}>
      LOGOUT
    </button>
  )
}

export default Logout
