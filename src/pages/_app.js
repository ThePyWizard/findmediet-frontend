import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }) {
  return (
    <div className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable,
      "shadcn"
    )}>
      <Component {...pageProps} />
    </div>
  );
}
