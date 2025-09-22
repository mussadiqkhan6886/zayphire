'use client';

import { usePathname, useRouter } from "next/navigation"

const NotFound = () => {
  const router = useRouter()
  const path = usePathname()

  if(!path.includes("/robots.txt")){
      router.push("/")
  }
}

export default NotFound
