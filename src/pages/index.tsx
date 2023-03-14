import Head from 'next/head'
import { Inter } from 'next/font/google'
import MainLayout from '@/layout/MainLayout'
const inter = Inter({ subsets: ['latin'] })
import { login2 } from '@/store/slice/authSlice'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch();
  function dispatchLogin() {
    dispatch(login2());
  }

  return (
    <>
      <MainLayout>
        <p>Content goes here</p>
        <button onClick={() => dispatchLogin()}>Dispatch redux</button>
      </MainLayout>
    </>
  )
}
