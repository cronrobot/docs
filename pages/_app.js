import 'nextra-theme-docs/style.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Nextra({ Component, pageProps }) {
  useEffect(() => {
    localStorage.setItem('theme', 'dark')
    router.reload()
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
         * {
           font-family: 'Montserrat', sans-serif;
         }
      `}</style>
    </>
  ) 
}
