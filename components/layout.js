import Head from 'next/head'
import Link from 'next/link'

const name = 'Garett Haight'
export const siteTitle = 'Next.js Cookbook'

export default function Layout({ children }) {
  return (
    <div>{children}</div>
  )
}