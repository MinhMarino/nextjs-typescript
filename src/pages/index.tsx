import Head from 'next/head'
import { Inter } from 'next/font/google'
import MainLayout from '@/layout/MainLayout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  


  return (
    <>
      <MainLayout>
        <p>Content goes here</p>
      </MainLayout>
    </>
  )
}
