import type { AppProps } from "next/app"
import { ClerkProvider } from "@clerk/nextjs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Layout from "@/components/layout"

import "@/styles/globals.css"

import { Jost as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>
      <ClerkProvider {...pageProps}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ClerkProvider>
    </>
  )
}
