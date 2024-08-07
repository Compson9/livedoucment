
import "./globals.css"
import { Poppins as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import {
  ClerkProvider,
 
} from '@clerk/nextjs'

import {dark} from "@clerk/themes"
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "ElvDocs",
description: "Your go to collaborate editor"
}


export default function RootLayout({ children }: {children: React.ReactNode} ) {
  return (
   <ClerkProvider
   appearance={
    {baseTheme: dark,
      variables: {colorPrimary: "#3372FF",
        fontSize: "16px"
      },
    }
   }
   >
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  
  )
}
